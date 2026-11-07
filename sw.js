// Service worker sederhana: aplikasi tetap bisa dibuka tanpa internet setelah dibuka sekali.
const CACHE='koreksi-ljk-20261107212432';
const FILES=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png','icons/apple-touch-icon.png','icons/favicon.png','icons/logo-sekolah.png','lembar/LEMBAR_JAWAB_A4.pdf','lembar/LEMBAR_JAWAB_F4.pdf'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  const html=r.mode==='navigate'||/\.(html|js|css)$/.test(new URL(r.url).pathname);
  e.respondWith(caches.open(CACHE).then(async c=>{
    if(html){ // halaman: ambil dari internet dulu agar pembaruan langsung tampil; cadangan dari cache bila offline
      try{const res=await fetch(r,{cache:'no-store'});if(res&&res.ok)c.put(r,res.clone());return res;}
      catch(err){return (await c.match(r,{ignoreSearch:true}))||(await c.match('index.html'))||Response.error();}
    }
    const hit=await c.match(r,{ignoreSearch:true});
    const net=fetch(r).then(res=>{if(res&&res.ok)c.put(r,res.clone());return res;}).catch(()=>hit);
    return hit||net;
  }));
});
