import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
export function registerConcepts(Alpine) {
 Alpine.data('conceptCatalog',()=>({
  projects:window.conceptData||[],q:new URLSearchParams(location.search).get('q')||'',sector:new URLSearchParams(location.search).get('sector')||'',sort:'featured',selected:new URLSearchParams(location.search).get('project')||'',mode:'map',drawer:false,
  get filtered(){let a=this.projects.filter(p=>(!this.sector||p.sector===this.sector)&&(`${p.title} ${p.description} ${p.area} ${p.sector}`).toLowerCase().includes(this.q.toLowerCase().trim()));return this.sort==='az'?a.sort((a,b)=>a.title.localeCompare(b.title)):a},
  get selectedProject(){return this.filtered.find(p=>p.id===this.selected)},
  params(){const p=new URLSearchParams();if(this.sector)p.set('sector',this.sector);if(this.q)p.set('q',this.q);return p},
  get mapUrl(){return '/map?'+this.params()},get catalogUrl(){return '/opportunities?'+this.params()},
  trapFilters(e){if(!this.drawer||innerWidth>700)return;const controls=[...e.currentTarget.querySelectorAll('button,input,select')].filter(el=>el.offsetParent!==null);if(e.shiftKey&&document.activeElement===controls[0]){e.preventDefault();controls.at(-1).focus()}else if(!e.shiftKey&&document.activeElement===controls.at(-1)){e.preventDefault();controls[0].focus()}},
  reset(){this.q='';this.sector='';this.sort='featured';this.selected=''},
  select(p){this.selected=p.id;window.dispatchEvent(new CustomEvent('focus-concept',{detail:p}));this.share()},
  share(){const p=this.params();if(this.selected)p.set('project',this.selected);if(this.sort!=='featured')p.set('sort',this.sort);history.replaceState(null,'',location.pathname+(p.size?'?'+p:''))},
  init(){this.sort=new URLSearchParams(location.search).get('sort')==='az'?'az':'featured';this.$watch('q',()=>this.update());this.$watch('sector',()=>this.update());this.$watch('sort',()=>this.update());this.$nextTick(()=>{const el=document.querySelector('[data-main-map]');if(el)this.map=createMap(el,this.filtered,p=>this.select(p));if(this.selectedProject)this.select(this.selectedProject)})},
  update(){if(!this.filtered.some(p=>p.id===this.selected))this.selected='';this.share();this.map?.render(this.filtered)}
 }));
}
function createMap(el,projects,onSelect){
 const map=L.map(el,{scrollWheelZoom:false}).setView([39.49,67.61],9);
 const panel=el.parentElement,notice=panel.querySelector('.map-notice'),retry=panel.querySelector('.retry-map');
 const tiles=L.tileLayer(window.conceptMapConfig.tileUrl,{attribution:window.conceptMapConfig.attribution,maxZoom:19});
 let failed=false;
 tiles.on('loading',()=>{if(!failed){notice.hidden=false;notice.textContent='Loading map…'}});
 tiles.on('tileerror',()=>{failed=true;notice.hidden=false;notice.textContent='Map tiles unavailable. Concept areas and the results list remain usable.';retry.hidden=false});
 tiles.on('load',()=>{if(!failed)notice.hidden=true});
 retry.onclick=()=>{failed=false;retry.hidden=true;notice.textContent='Retrying map…';tiles.redraw()};tiles.addTo(map);
 L.control.scale({imperial:false}).addTo(map);
 const markers=L.layerGroup().addTo(map);
 const bounds=L.latLngBounds((window.conceptData||projects).map(p=>[p.lat,p.lng]));
 const reset=()=>map.fitBounds(bounds,{padding:[55,55],maxZoom:10});reset();
 function render(items){markers.clearLayers();const groups=new Map();for(const p of items){const key=`${p.lat},${p.lng}`;groups.set(key,[...(groups.get(key)||[]),p])}for(const group of groups.values()){
 const first=group[0];const content=document.createElement('div');const title=document.createElement('strong');title.textContent=first.area;content.append(title);const note=document.createElement('p');note.textContent='Approximate area — site not selected';content.append(note);
 for(const p of group){const b=document.createElement('button');b.className='popup-concept';b.textContent=p.title;b.onclick=()=>onSelect?.(p);content.append(b)}
 L.marker([first.lat,first.lng],{icon:L.divIcon({className:'concept-marker',html:`<span>${group.length}</span>`,iconSize:[44,44]}),title:`${first.area}: ${group.length} concepts`,alt:`${first.area}: ${group.length} concepts`}).bindPopup(content).addTo(markers);
 }}render(projects);
 window.addEventListener('focus-concept',e=>{map.setView([e.detail.lat,e.detail.lng],11);markers.eachLayer(m=>{if(m.getLatLng().equals([e.detail.lat,e.detail.lng]))m.openPopup()})});
 window.addEventListener('reset-concept-map',reset);
 new ResizeObserver(()=>map.invalidateSize()).observe(el);
 return {render};
}
document.addEventListener('DOMContentLoaded',()=>{const preview=document.querySelector('[data-map-preview]');if(preview){const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){createMap(preview.querySelector('.geo-map'),window.conceptData,p=>location.assign('/map?project='+p.id));observer.disconnect()}},{rootMargin:'150px'});observer.observe(preview)}});
