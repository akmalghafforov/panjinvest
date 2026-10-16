import {chromium} from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--no-sandbox']});
const routes=[...JSON.parse(fs.readFileSync('tests/route-matrix.json')),{path:'/missing',page:'NotFoundPage'},{path:'/admin/missing',page:'Admin404Page'}];
const selected=process.env.ONLY_ROUTES?.split(',');
const cases=selected?routes.filter(r=>selected.includes(r.path)):routes;
const images=JSON.parse(fs.readFileSync('resources/js/images.json'));
const out=process.env.SCREENSHOT_DIR||'storage/app/verification';fs.mkdirSync(out,{recursive:true});
const result=[];
for(const width of [390,768,1440]){
 const original=await browser.newPage({viewport:{width,height:1000}}),blade=await browser.newPage({viewport:{width,height:1000}});
 await original.route('https://images.unsplash.com/**',async route=>{
  const file=images[route.request().url()];
  if(!file||file==='unavailable.svg')return route.fulfill({status:404,body:''});
  return route.fulfill({path:path.resolve('resources/images',file)});
 });
 for(const r of cases){
  let errors=[];const handler=e=>errors.push(e.message);blade.on('pageerror',handler);
  const uri=r.path.replace('{id}','app-001');
  await Promise.all([original.goto('http://127.0.0.1:5174'+uri,{waitUntil:'networkidle'}),blade.goto('http://127.0.0.1:8000'+uri,{waitUntil:'networkidle'})]);
  if(r.path==='/data')await original.waitForTimeout(1800);
  await Promise.all([original.screenshot({path:`${out}/${width}-${r.page}-react.png`,fullPage:true}),blade.screenshot({path:`${out}/${width}-${r.page}-blade.png`,fullPage:true})]);
  const a=await original.locator('body').innerText(),b=await blade.locator('body').innerText();
  const dimensions=await Promise.all([original.evaluate(()=>({height:document.body.scrollHeight,width:document.body.scrollWidth})),blade.evaluate(()=>({height:document.body.scrollHeight,width:document.body.scrollWidth}))]);
  result.push({width,path:r.path,errors:[...new Set(errors)],textEqual:a.replace(/\s+/g,'')===b.replace(/\s+/g,''),dimensions});
  blade.off('pageerror',handler);
  console.log(width,r.path,errors.length?'ERROR':'OK',dimensions.map(x=>x.height).join('/'));
 }
 await original.close();await blade.close();
}
const reportPath=`${out}/comparison.json`;
const previous=selected&&fs.existsSync(reportPath)?JSON.parse(fs.readFileSync(reportPath)).filter(r=>!selected.includes(r.path)):[];
fs.writeFileSync(reportPath,JSON.stringify([...previous,...result],null,2));await browser.close();
