if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const o=e=>n(e,s),l={module:{uri:s},exports:f,require:o};i[s]=Promise.all(c.map((e=>l[e]||o(e)))).then((e=>(r(...e),f)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.66b3cfed.js",revision:null},{url:"assets/index.e4b39172.css",revision:null},{url:"index.html",revision:"c9e19d2842a45ea456d34d1de6552ada"},{url:"favicon-48.png",revision:"5ec99c57e114940fb3d76cf4af59bee2"},{url:"favicon-72.png",revision:"7b61f3aa2a717b60a27f050cfef8afbf"},{url:"favicon-96.png",revision:"41721a0ab0f055313203c23b6731d642"},{url:"favicon-128.png",revision:"efc67b166e9516829b944f94069ee1b7"},{url:"favicon-144.png",revision:"07d8cc3277c8e98507c86c14d57fa466"},{url:"favicon-168.png",revision:"0c53fac8dfe06be7be71a321e51c792b"},{url:"favicon-192.png",revision:"6cfb4738c7eb75b31743829b49fcc843"},{url:"favicon-256.png",revision:"42d53be7968268c0514283c2c00d09b3"},{url:"favicon-512.png",revision:"49a7457446b9ec6990f3131278cb3138"},{url:"manifest.webmanifest",revision:"ff5c3e0ad169860be3c57bfdb0f1338d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
