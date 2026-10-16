import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({server:{host:"0.0.0.0",port:5173,strictPort:true,allowedHosts:["panjinvest.test"],origin:"http://panjinvest.test:5173",hmr:{host:"panjinvest.test"},cors:{origin:["http://panjinvest.test","http://localhost:8000","http://127.0.0.1:8000"]},watch:{ignored:["**/storage/framework/views/**"]}},plugins:[laravel({input:['resources/css/app.css','resources/js/frontend.js','resources/js/backend.js'],refresh:true}),tailwindcss()]});
