if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const a=e=>c(e,d),f={module:{uri:d},exports:n,require:a};i[d]=Promise.all(s.map((e=>f[e]||a(e)))).then((e=>(r(...e),n)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2018/10/13/keji-1/index.html",revision:"caff7708de7d9105e4a745934ca2e546"},{url:"404.html",revision:"d58e3f0970111b4ac0071530f7cd1785"},{url:"archives/2018/10/index.html",revision:"d9b0cc148591e0ef7f6c1571587a6f41"},{url:"archives/2018/index.html",revision:"2cb372b861614c4971808909b8652017"},{url:"archives/index.html",revision:"b5211ae9a1637ffdcb2cd7441685edf5"},{url:"bangumis/index.html",revision:"a380f5dc55ab9655b31e5f86599a6a17"},{url:"categories/index.html",revision:"87292bf9c4cd3cd18c46982492ca9dfe"},{url:"css/custom.css",revision:"8bdb066289c2def1cc660058d186adef"},{url:"css/index.css",revision:"47d90a3812c2527ce36d0ce3f6898f6b"},{url:"css/runtime.css",revision:"a96df2424b5918e60b3362a2a4e7bc3a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"6da236970b327e41dac86e68e52e92da"},{url:"js/crash_cheat.js",revision:"f8e9d4593921576fde38caca160c30bc"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/runtime.js",revision:"d2b8cbf57cca54cd83245d934cb79369"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/weather.js",revision:"7b2e62ae86427b2ba48d77c8d3e346dd"},{url:"link/index.html",revision:"21892cac4a603c78e5fd4cb646661759"},{url:"openfrp-group-Emoji/index.html",revision:"7bc692fd4062cac568782b8f44962a77"},{url:"sponsor/index.html",revision:"2d9eba86f20c4daefeae6ccdc76d03f4"},{url:"tags/index.html",revision:"a8d6458b682fd3216a74d79be328729e"},{url:"tags/五月/index.html",revision:"bf1b9ec89884a9b3ff2265360687318d"}],{})}));
//# sourceMappingURL=service-worker.js.map
