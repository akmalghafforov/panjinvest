import {chromium} from '@playwright/test';
import fs from 'node:fs';
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
let errors=[];page.on('pageerror',e=>errors.push(e.message));
const routes=JSON.parse(fs.readFileSync('tests/route-matrix.json'));
const report=[];
for(const route of [...routes,{path:'/missing'},{path:'/admin/missing'}]){
 errors=[];console.log('Checking',route.path);
 const response=await page.goto('http://127.0.0.1:8000'+route.path.replace('{id}','app-001'),{waitUntil:'domcontentloaded',timeout:10000});
 await page.waitForTimeout(150);
 report.push({path:route.path,status:response.status(),errors:[...new Set(errors)],headings:await page.locator('h1').allTextContents(),images:await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src))});
}
fs.writeFileSync('/tmp/invest-scan.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
await browser.close();
