import Alpine from 'alpinejs';
import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';
import {registerShared} from './shared/components';
import images from './images.json';
const assets=import.meta.glob('../images/*',{eager:true,query:'?url',import:'default'});
window.cn=(...values)=>twMerge(clsx(values));
window.url=(target)=>{
 if(!target || !target.startsWith('/'))return target;
 const match=target.match(/^([^?#]*)(.*)$/),path=match[1],suffix=match[2];
 if(window.pageRoutes[path])return window.pageRoutes[path]+suffix;
 for(const [pattern,template] of Object.entries(window.pageRoutes)){
  if(!pattern.includes('{id}'))continue;
  const prefix=pattern.split('{id}')[0];
  if(path.startsWith(prefix)&&!path.slice(prefix.length).includes('/'))return template.replace('__PARAM__',encodeURIComponent(path.slice(prefix.length)))+suffix;
 }
 const backend=path.startsWith('/admin/');
 const tail=backend?path.slice(7):path.slice(1);
 return window.pageFallbacks[backend?'backend':'frontend'].replace('__PATH__',tail.split('/').map(encodeURIComponent).join('/'))+suffix;
};
window.navigate=(target)=>window.location.assign(window.url(target));
window.assetUrl=(source)=>assets['../images/'+images[source]]||source;
registerShared(Alpine);
window.Alpine=Alpine;
// The prototype has no submission endpoints. Keep every form local.
document.addEventListener('submit',event=>event.preventDefault());
export function boot(registerPages) {
    registerPages(Alpine);
    Alpine.start();
}
