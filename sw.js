if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let o={};const f=e=>i(e,r),d={module:{uri:r},exports:o,require:f};n[r]=Promise.all(s.map((e=>d[e]||f(e)))).then((e=>(c(...e),o)))}}define(["./workbox-f279ae30"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.88dd1874.css",revision:null},{url:"assets/index.969c9584.js",revision:null},{url:"assets/vendor.5871193f.js",revision:null},{url:"index.html",revision:"547684b61df242a0ad385a57c5d0b0e1"},{url:"favicon-48.png",revision:"015ece5503e35a9b2dbc3335cf6137cc"},{url:"favicon-72.png",revision:"4bcccbb52ddd5b5932e5c8f96677e51f"},{url:"favicon-96.png",revision:"22b8c489e30dd3b14853dcf378b0e68b"},{url:"favicon-128.png",revision:"2957e1150d8e4964db1c34005ce841ca"},{url:"favicon-144.png",revision:"c82564c51d678b454ed748bbcb262313"},{url:"favicon-168.png",revision:"e75c93819e0680377fe988907807d9c7"},{url:"favicon-192.png",revision:"bd0a2fd66c0a6c689467ffe60578629f"},{url:"favicon-256.png",revision:"212aae4f8491198244515bb1a4e9e62d"},{url:"favicon-512.png",revision:"13d1b41a0f4d274c92679efeef29dfcf"},{url:"manifest.webmanifest",revision:"ff5c3e0ad169860be3c57bfdb0f1338d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
