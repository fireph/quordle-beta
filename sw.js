if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let f={};const o=e=>i(e,r),l={module:{uri:r},exports:f,require:o};n[r]=Promise.all(s.map((e=>l[e]||o(e)))).then((e=>(c(...e),f)))}}define(["./workbox-f279ae30"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.06210419.css",revision:null},{url:"assets/index.427c9356.js",revision:null},{url:"assets/vendor.62a68839.js",revision:null},{url:"index.html",revision:"ae710e2e36d8f9a1eeabc26deae28f5e"},{url:"favicon-48.png",revision:"5ec99c57e114940fb3d76cf4af59bee2"},{url:"favicon-72.png",revision:"7b61f3aa2a717b60a27f050cfef8afbf"},{url:"favicon-96.png",revision:"41721a0ab0f055313203c23b6731d642"},{url:"favicon-128.png",revision:"efc67b166e9516829b944f94069ee1b7"},{url:"favicon-144.png",revision:"07d8cc3277c8e98507c86c14d57fa466"},{url:"favicon-168.png",revision:"0c53fac8dfe06be7be71a321e51c792b"},{url:"favicon-192.png",revision:"6cfb4738c7eb75b31743829b49fcc843"},{url:"favicon-256.png",revision:"42d53be7968268c0514283c2c00d09b3"},{url:"favicon-512.png",revision:"49a7457446b9ec6990f3131278cb3138"},{url:"manifest.webmanifest",revision:"ff5c3e0ad169860be3c57bfdb0f1338d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
