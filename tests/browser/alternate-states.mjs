import {chromium} from '@playwright/test';import fs from 'node:fs';import path from 'node:path';
const b=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--no-sandbox']});const images=JSON.parse(fs.readFileSync('resources/js/images.json'));const out='storage/app/verification';
for(const width of [390,768,1440]){
 const pages=await Promise.all([b.newPage({viewport:{width,height:1000}}),b.newPage({viewport:{width,height:1000}})]);
 await pages[0].route('https://images.unsplash.com/**',r=>{const f=images[r.request().url()];return !f||f==='unavailable.svg'?r.fulfill({status:404,body:''}):r.fulfill({path:path.resolve('resources/images',f)})});
 const shot=async label=>{for(let i=0;i<2;i++)await pages[i].screenshot({path:`${out}/${width}-${label}-${i?'blade':'react'}.png`,fullPage:true})};
 const go=async uri=>Promise.all(pages.map((p,i)=>p.goto((i?'http://127.0.0.1:8000':'http://127.0.0.1:5174')+uri,{waitUntil:'networkidle'})));
 for(const [uri,tabs] of [['/portal',['Saved','Meetings','Messages']],['/admin/applications/app-001',['Documents','Messages','Internal Notes']],['/admin/settings',['Email','Notifications','Security','Appearance']]]){
  await go(uri);
  for(const tab of tabs){for(const p of pages)await p.getByRole(iRole(p),{name:tab,exact:true}).click();await shot(uri.replaceAll('/','-')+'-'+tab.replaceAll(' ','-'))}
 }
 function iRole(p){return p===pages[0]&&p.url().includes('/portal')||p===pages[0]&&p.url().includes('/admin/applications/')?'tab':'button'}
 await go('/submit-interest?project=eco-lodge-seven-lakes');
 for(const p of pages){await p.locator('#fullName').fill('Demo Investor');await p.locator('#email').fill('demo@example.com');await p.locator('#phone').fill('+992123456789');if(p===pages[0]){await p.getByRole('combobox').click();await p.getByRole('option',{name:'Company',exact:true}).click()}else await p.locator('select').selectOption('Company');await p.getByRole('button',{name:'Continue',exact:true}).click()}
 await shot('Interest-Step-2');
 for(const p of pages){if(p===pages[0]){await p.getByRole('combobox').nth(0).click();await p.getByRole('option',{name:'Tourism',exact:true}).click();await p.getByRole('combobox').nth(1).click();await p.getByRole('option',{name:'3–6 months',exact:true}).click()}else{await p.locator('select').nth(0).selectOption('Tourism');await p.locator('select').nth(1).selectOption('3–6 months')}await p.locator('#investmentAmount').fill('$250,000');await p.getByRole('button',{name:'Continue',exact:true}).click()}
 await shot('Interest-Step-3');for(const p of pages)await p.getByRole('button',{name:'Continue',exact:true}).click();await shot('Interest-Step-4');
 for(const p of pages)await p.close();console.log('Alternate tabs and form steps captured at',width);
}await b.close();
