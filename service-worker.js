if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const s=e=>d(e,c),b={module:{uri:c},exports:n,require:s};i[c]=Promise.all(a.map((e=>b[e]||s(e)))).then((e=>(r(...e),n)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/12/15/dzs-hj/index.html",revision:"bf63cf30372e4a064dc1f95ed405c60f"},{url:"2020/12/15/googlepan-hj/index.html",revision:"ed9680332092286bf92977592ce543e1"},{url:"2020/12/15/jiema-hj/index.html",revision:"3fa886ae774114882b2db81c33e98cd2"},{url:"2020/12/15/lanzoucloud-app-hj/index.html",revision:"fafc5a9fe71116b18d78ee1a51703df8"},{url:"2020/12/15/manghua-hj/index.html",revision:"2095c0186525e19a0b43b63e46a29bd5"},{url:"2020/12/15/qcbz-pan-hj/index.html",revision:"32e542c059faba143dcd19c8f5f9d858"},{url:"2020/12/15/spxz-hj/index.html",revision:"d2d28c55ab2ceaf1b8887fb557b956ab"},{url:"2020/12/15/ssxz-hj/index.html",revision:"fed222cbfb70ea0652edbd36bd61ec32"},{url:"2020/12/15/telegram-bot/index.html",revision:"595d9b7facf19d25f3349e393531aedf"},{url:"2020/12/15/waiguosfz-hj/index.html",revision:"2b81e741a2d07d549afbd8810678a645"},{url:"2020/12/15/wpzy-hj/index.html",revision:"eb349f7a88bc2eba328d39f743b2bf1c"},{url:"2020/12/15/xzgj-hj/index.html",revision:"2aa8cc5456d6a7043db3cd7eb80a5dd0"},{url:"2020/12/15/zxspwz-hj/index.html",revision:"7874202144aa701cec1ad79516339e3f"},{url:"2022/04/09/IDM/index.html",revision:"ff5c61807618e3b139ea6c82f294273e"},{url:"2022/04/09/PreSonus-Studio-One/index.html",revision:"6d044918cc097270d75e875f3a19fa7c"},{url:"2022/04/10/cloudreve/index.html",revision:"f588cf0871c86b7204e0a1399a1c3a91"},{url:"2022/04/14/gcp-ssh-password/index.html",revision:"08e228370fdfa1b93835850b2d689619"},{url:"2022/04/16/frp/index.html",revision:"0448bb23021a282fd1514209b931325d"},{url:"2022/04/23/hax/index.html",revision:"14db9361d7bde15fd7f43d75e259433e"},{url:"2022/04/23/parsec/index.html",revision:"e8ed03c67e3b48c8329d718d9842cde2"},{url:"2022/04/25/lsky-pro/index.html",revision:"7d8ff60ee4e6d04681cd899b1139c803"},{url:"2022/04/25/windows/index.html",revision:"af02b1679b1f402887559ba3d0ab5985"},{url:"2022/04/28/musicdl/index.html",revision:"9b4f53676a81a9e904e8f28e446574e8"},{url:"2022/05/03/Alist-add-account/index.html",revision:"71583d4312853c9fd0bb0d43a2d56be9"},{url:"2022/05/03/Alist-Features/index.html",revision:"62a40b781c5f8a088aa4c42eec180264"},{url:"2022/05/03/Alist-ht/index.html",revision:"bf4bd107dba58f2294526317b2749906"},{url:"2022/05/03/Alist-webdav/index.html",revision:"d62491bbce7082c7712d44215f42ec29"},{url:"2022/05/03/Alist/index.html",revision:"b807feada7394f4ee01dbb261d8d8c89"},{url:"2022/05/04/frp-webtest/index.html",revision:"039accef4294ef0fa622b2e831d64abc"},{url:"2022/05/07/iptables/index.html",revision:"bcc81eae60ac31540cd421cf5d172943"},{url:"2022/05/07/Navicat-Premium-12-pj/index.html",revision:"cf08bd1556df59949efbe5f14948d04b"},{url:"2022/05/07/Navicat-Premium-15-pj/index.html",revision:"b4476969b26d5b087bc65f70b36a33de"},{url:"2022/05/07/sjkkshtj/index.html",revision:"704d4edfd401ed6dbee1da6340014ecf"},{url:"2022/05/07/sqlsjktj/index.html",revision:"f9c47de5f1c597a6a3deb7e9f3f86ce2"},{url:"2022/05/08/Markdown-bjq/index.html",revision:"a8e1e1463b351e5db8fefb88fc23ff31"},{url:"2022/05/10/frps-webui-admin/index.html",revision:"fde319d1713b43f95541b97073982f8c"},{url:"2022/05/10/Linux-vps-add-Virtual-Memory/index.html",revision:"57a586e71bc2b43cb9e0333b3fe2e328"},{url:"2022/05/11/frps-install/index.html",revision:"ecccec3b4baa5fe5ff8f155125ac5c7f"},{url:"2022/05/11/Github-Hosts/index.html",revision:"ee3cd0e5e6d0b1435d04250fd78a1912"},{url:"2022/05/11/java-install/index.html",revision:"8ba6bdc65d0f7b542ddf3ef6e631384b"},{url:"2022/05/11/lanproxy/index.html",revision:"1750cc95b5771bc5d8dc2ff15bdc18ab"},{url:"2022/05/15/hugo-blog/index.html",revision:"8cb80f6e24a023b9247b8e25ffa0b562"},{url:"2022/06/01/Rhythm-Doctor-GOODRAGE/index.html",revision:"651b49c36b368d4139fe958b2c20a78d"},{url:"2022/06/22/openfrp-frpc/index.html",revision:"4759bd73c40db493d4f40346867d8c0f"},{url:"2022/07/06/LIULIFrp/index.html",revision:"8626de362fff72892d644c4f129a846b"},{url:"2022/07/06/StarryFrp/index.html",revision:"59177d337a55b84454732ea0a33df6e2"},{url:"404.html",revision:"25de40f1466640d959510fa6675433e2"},{url:"archives/2020/12/index.html",revision:"692604fa7ff38f8745f844bc94b13958"},{url:"archives/2020/12/page/2/index.html",revision:"0e248393f07857a515c0a1c9d8955415"},{url:"archives/2020/index.html",revision:"0b908aeb5175f87082778033b4c3f712"},{url:"archives/2020/page/2/index.html",revision:"d848310883d7d5bda12bfdae09a59421"},{url:"archives/2022/04/index.html",revision:"b35ef8c6b0a5d26683d1b02d7888e0a2"},{url:"archives/2022/05/index.html",revision:"d765257be8bf1d69306edb7ec3ec37b9"},{url:"archives/2022/05/page/2/index.html",revision:"0a676ca8fa4eab60d6b9e297452ede24"},{url:"archives/2022/06/index.html",revision:"9f67b88f4943305dbe896df730da627c"},{url:"archives/2022/07/index.html",revision:"155514a28434ba9cbe1b562069e6740e"},{url:"archives/2022/index.html",revision:"bb417528c01179f3c3d01677a870e45f"},{url:"archives/2022/page/2/index.html",revision:"933b89b9cf8de6207d376e06e8149e37"},{url:"archives/2022/page/3/index.html",revision:"573771661cd17353a027320abfd0515b"},{url:"archives/2022/page/4/index.html",revision:"075c99979c985ecf2729822b3e1d33f4"},{url:"archives/index.html",revision:"b19cb9db3b46ffd2fb505da6ee00bac0"},{url:"archives/page/2/index.html",revision:"135661cb6dc9e021cb75dfa0cf11022a"},{url:"archives/page/3/index.html",revision:"9eb0c1f129bf4dec68037a085cec74f2"},{url:"archives/page/4/index.html",revision:"0c1d6e1a103d8540eee7909669fd0794"},{url:"archives/page/5/index.html",revision:"2c3e05d88825dddf91affc102c07a594"},{url:"bangumis/index.html",revision:"99ea9e3d1ce9094caf09108815f9f315"},{url:"categories/blog分支/index.html",revision:"b29da282fbd0effff95c17c7afbfb352"},{url:"categories/index.html",revision:"691c31323a5f74ceeee011f75cd2978d"},{url:"categories/vps/index.html",revision:"9427db681d6e4ddfed540adf838ca703"},{url:"categories/vps/白嫖/hax/index.html",revision:"b1910a82b73c77e27415a7136a54b66a"},{url:"categories/vps/白嫖/index.html",revision:"23db44aa73f6b2d6f2efff409ed17b75"},{url:"categories/vps/谷歌云/index.html",revision:"62c99d4533d83fc11a713a3a31a2aebe"},{url:"categories/内网穿透-frp/index.html",revision:"2e1a76fa8664b77a226db0921f8fa7c8"},{url:"categories/内网穿透-frp/openfrp/index.html",revision:"bf27ee00dd13cb58455c44571d4203cb"},{url:"categories/内网穿透-frp/openfrp/速通/index.html",revision:"e9324353c26bc2c1b3534b306d5a955e"},{url:"categories/内网穿透-frp/教程/index.html",revision:"84bc27e831eb143055e4081b08251a7e"},{url:"categories/内网穿透-frp/测试/index.html",revision:"12acd6833d3638eafb89a2c9126abb56"},{url:"categories/合集/index.html",revision:"101d5474d8d0eaaae95e50d5e53e61e5"},{url:"categories/合集/page/2/index.html",revision:"9c12bc99b7587e052bfdddc97052ab67"},{url:"categories/源码/index.html",revision:"99b44ce3cdb63db55fa5dce0061c95f9"},{url:"categories/源码/源码推荐/index.html",revision:"785545d78f4c3d7ec3f9836fec6ac0ae"},{url:"categories/源码/源码推荐/安装教程/index.html",revision:"50d1059153213482643f3f413894419d"},{url:"categories/源码/源码教程/hosts/index.html",revision:"58a4989fabbcd5eee062b7ac5e65c422"},{url:"categories/源码/源码教程/index.html",revision:"743c333aaeb69206d7540c5f14680241"},{url:"categories/源码推荐/index.html",revision:"4b19201f2ec7b6f90ca5c412df1c683c"},{url:"categories/源码推荐/安装教程/index.html",revision:"09c70e32ea2c1c744aac13592026e395"},{url:"categories/评测/index.html",revision:"eb2941f96ec122e809b4b35f5bbf2c74"},{url:"categories/评测/内网穿透-frp/index.html",revision:"df2e9755b7288b041aa068c056a7caa8"},{url:"categories/评测/内网穿透-frp/StarryFrp/index.html",revision:"3aebdbf38f92ddd9cee335e4050ffd3e"},{url:"categories/软件/index.html",revision:"c9c9ee3a8c363206e01fafd189062d55"},{url:"categories/软件/安装/index.html",revision:"489ff4e26cd7b2b0c8da43a38035b721"},{url:"categories/软件/安装/教程/index.html",revision:"1615ec03b5176f0c735a367f70c50099"},{url:"categories/软件/软件分享/index.html",revision:"67e21c6eadef4b2a79584f8ed69e8917"},{url:"categories/软件/软件分享/实用软件/index.html",revision:"5957aa710bb6b429ab446099c694f618"},{url:"categories/软件/软件推荐/index.html",revision:"d2788f3d593c6e3f3f1f2af416203f9b"},{url:"categories/软件/软件推荐/软件分享/index.html",revision:"78aad007e5b688ac81359c066c85e89c"},{url:"categories/软件/软件推荐/软件分享/破解/index.html",revision:"52f754c093f7def02a1fdf7342c4c93b"},{url:"categories/软件/软件推荐/软件分享/破解/编曲宿主/index.html",revision:"3f90dd9bf215461bac1f47c6c6cc2e29"},{url:"categories/软件/软件推荐/软件分享/软件测评/index.html",revision:"d1762ee74cf4b566a123313be622a130"},{url:"categories/音乐/index.html",revision:"7e8fab1eeaa3b3b739eebac1cbc1b282"},{url:"categories/音乐/推荐/index.html",revision:"b133411ac92edd16d522f4e7b2be4f1a"},{url:"categories/音乐/推荐/下载/index.html",revision:"ed294e942cf6a6e1620443ac7276bb5b"},{url:"categories/音游/index.html",revision:"e24741316030320f8a7c788d964ad7e6"},{url:"categories/音游/节奏医生/index.html",revision:"3d918c4c4f3da72c92eadc28e1000997"},{url:"categories/音游/节奏医生/自制谱/index.html",revision:"1ff46a6932c5d34a3b899f8905462f2d"},{url:"css/index.css",revision:"81f39f5f456f9849966f72428e532b4d"},{url:"css/runtime.css",revision:"a96df2424b5918e60b3362a2a4e7bc3a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"19b1f3e9c22d053bdd0b186b531649d2"},{url:"js/crash_cheat.js",revision:"f8e9d4593921576fde38caca160c30bc"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/runtime.js",revision:"d2b8cbf57cca54cd83245d934cb79369"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/weather.js",revision:"7b2e62ae86427b2ba48d77c8d3e346dd"},{url:"link/index.html",revision:"19c79ced50c3576dc73203954c0bac50"},{url:"page/2/index.html",revision:"30cc5208c5a804efd4245371312d5adc"},{url:"page/3/index.html",revision:"3e406ac3656338951050cbcf1542b53d"},{url:"page/4/index.html",revision:"78e8e00276ee1d051388fe666de5db34"},{url:"page/5/index.html",revision:"be9b69652cfb3e88dff5699c3ac1fdaf"},{url:"sponsor/index.html",revision:"b380c13d04cba8821a89f225a521248d"},{url:"tags/Alist/index.html",revision:"f836b94d873323aa8437f94cab35efb6"},{url:"tags/bot/index.html",revision:"35c8704771a7e4dc2367542f02a49a86"},{url:"tags/frp/index.html",revision:"bfbbdefc20268b892b4b12b7b15ff4b1"},{url:"tags/gcp/index.html",revision:"13da80a5ed9767734c1c34ddfe9ffe0b"},{url:"tags/Google/index.html",revision:"40213ad0059daa064bea1049aebdd1b9"},{url:"tags/hosts/index.html",revision:"ff7b546e9848258f62b46530ca98cff2"},{url:"tags/hugo-blog/index.html",revision:"34eed86aaac4d2041ec0d7d7cf508b50"},{url:"tags/index.html",revision:"260088fb125dfc1d03e1b5c340100881"},{url:"tags/Markdown/index.html",revision:"c957ad839ea85808c7e4bcb383091062"},{url:"tags/Rhythm-Doctor/index.html",revision:"ee0e7e6a657bd61c71ecda9338c3fd4b"},{url:"tags/ssh/index.html",revision:"349c0c877d4f5c2389712783b3729010"},{url:"tags/StarryFrp/index.html",revision:"3ad802893633909062abbc5b5535e881"},{url:"tags/telegram/index.html",revision:"226d391a1d2d8e249d45e6c041d28e7f"},{url:"tags/vps/index.html",revision:"746810b5924a7e8fe31791729d041d8b"},{url:"tags/windows/index.html",revision:"c46aac4b265b49b2827da42963857011"},{url:"tags/下载/index.html",revision:"f5cb6f049326d1b6dfe9f86b0639e3e6"},{url:"tags/下载工具/index.html",revision:"29b822da7625d7c0c540f61920f32ee7"},{url:"tags/内网穿透-frp/index.html",revision:"4f1ef4b844f2a33360a4b354c48644d8"},{url:"tags/内网穿透/index.html",revision:"9df7999e6878d63cde51588c77d34a73"},{url:"tags/合集/index.html",revision:"aaba1882ed1b3294dc6aae65b6ff10d6"},{url:"tags/合集/page/2/index.html",revision:"b8bf38322fad5b571d7cf65d5981be0d"},{url:"tags/图床/index.html",revision:"166142448cba41ecf51742ea7df57232"},{url:"tags/安装/index.html",revision:"8111002083eca82b54e4940611a37704"},{url:"tags/安装/page/2/index.html",revision:"c0a3c205d0febd9b2cf54189985b159d"},{url:"tags/工具/index.html",revision:"8588a2d60a463fcf605f59b61515e45f"},{url:"tags/接码/index.html",revision:"77af59ca5d135ba8febc0f6b83e5e4e9"},{url:"tags/推荐/index.html",revision:"2ca0389daa06cfe733008d2d776ade56"},{url:"tags/教程/index.html",revision:"fe37b9bae8cab1b5fdf65f3687d55645"},{url:"tags/教程/page/2/index.html",revision:"9c165755fc7bdd9732cab01630463593"},{url:"tags/数据库/index.html",revision:"6b4e952127c69aa29e12d55084025b42"},{url:"tags/测评/index.html",revision:"1a21ecbb70ca84cb5ddf7230fa26e6ea"},{url:"tags/测试/index.html",revision:"f9cc77d49e64e90f3c47de95bfb4e2f9"},{url:"tags/游戏/index.html",revision:"29a3c7c2875e65640cf37405b2eaf885"},{url:"tags/源码/index.html",revision:"660a4ea69bd35cd5d64cb1b0301849f7"},{url:"tags/源码/page/2/index.html",revision:"504aaa3bad54cc7046e9c8970e358674"},{url:"tags/漫画/index.html",revision:"f38194f93dc573c358a1a7436e48df07"},{url:"tags/生成/index.html",revision:"a60148dfc7a3159a7342289f9b720013"},{url:"tags/电子书/index.html",revision:"57beade13bbe559bdd8e82161bf5510a"},{url:"tags/白嫖/index.html",revision:"2eb52be595f45c1b94436bb149b22db8"},{url:"tags/破解/index.html",revision:"2a4de9e0d6ca5396f02a244f7c6dd7b7"},{url:"tags/视频/index.html",revision:"a1032df0d642a419657d81c81ebf6c10"},{url:"tags/端口转发/index.html",revision:"7609a7e4d8ceea8c07e1b477692cbe98"},{url:"tags/管理/index.html",revision:"6ff7d52cff2e3194ce289f1167f82b5f"},{url:"tags/编曲/index.html",revision:"0d82bac5ca8460c2420b13c4e9ed848b"},{url:"tags/编辑器/index.html",revision:"b412eac02111ddbc70223e33cd07a535"},{url:"tags/网盘/index.html",revision:"ccb707567d3ad28a65d47809369d5a0a"},{url:"tags/网站/index.html",revision:"deb880edb469f1ea2a4b23692cdf41b6"},{url:"tags/网络/index.html",revision:"9cc6d5634eac9b5596749631b6e84a33"},{url:"tags/自制谱/index.html",revision:"7f85b1619831a0c32364b28b05e55a6d"},{url:"tags/节奏医生/index.html",revision:"2c9dc682b90c01f99e8633669054e2d9"},{url:"tags/蓝奏云/index.html",revision:"1e70997353dbfa872838b30c5f5e34f2"},{url:"tags/虚拟身份证/index.html",revision:"734f0701dc2ef0d6bf1fbc3c7837d051"},{url:"tags/评测/index.html",revision:"09c2458cd6134b5d4351d50d7f6b2ff0"},{url:"tags/谷歌/index.html",revision:"5bcda1d7f0094205e3718c38a0be71c5"},{url:"tags/资源/index.html",revision:"a1feb386bab8bc5b498321aa78f08bbc"},{url:"tags/软件/index.html",revision:"02c6290d3808375d10d6b1dad06957f5"},{url:"tags/软件/page/2/index.html",revision:"137b0e255b0cb3b652212e3dc70933cb"},{url:"tags/远程桌面/index.html",revision:"3e553222122393894c0c2fea23af0b4f"},{url:"tags/面板/index.html",revision:"dac5acfcb3b514ee2c740b1772cbccf9"},{url:"tags/音乐/index.html",revision:"55ee44a1579530a67142a163b34968fb"},{url:"video/index.html",revision:"02c89288f127ce14b4bc3bf35090ff90"}],{})}));
//# sourceMappingURL=service-worker.js.map
