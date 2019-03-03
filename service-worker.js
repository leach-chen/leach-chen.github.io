/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5aae76435cd127af8c97792fbc864624"
  },
  {
    "url": "assets/css/0.styles.dc90885c.css",
    "revision": "54e01ca0c9d2cea7083433ed32db9bf8"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/alipayimg.76375138.jpg",
    "revision": "76375138cb4770eeb6837bc2d8d62cf1"
  },
  {
    "url": "assets/img/bk1.7c50ace6.jpg",
    "revision": "7c50ace6f872f9225f0574616415886c"
  },
  {
    "url": "assets/img/contact-bg.90b89018.jpg",
    "revision": "90b89018c57623f25ff271dda0b322e8"
  },
  {
    "url": "assets/img/gameshow.10140594.jpg",
    "revision": "10140594110f4bb15e46b03be88519d4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/services-bg.5222d76c.jpg",
    "revision": "5222d76c2ce8a32d587fc6fc8e5f4da4"
  },
  {
    "url": "assets/img/skills-bg.ac55424d.jpg",
    "revision": "ac55424d4f2e9cb3691f5eb9a4b65bf6"
  },
  {
    "url": "assets/img/wechatgroup1.50cbcfa5.jpg",
    "revision": "50cbcfa5734cd073db4ce10d0a770551"
  },
  {
    "url": "assets/img/wechatimg.0714bed8.jpg",
    "revision": "0714bed8e9ff413c61280cda5079ae2f"
  },
  {
    "url": "assets/js/10.0c9da22f.js",
    "revision": "2c847632d080ddf5dd70462090ce7fc3"
  },
  {
    "url": "assets/js/11.1b283151.js",
    "revision": "7c035a286123914273adbab77bf1a8e7"
  },
  {
    "url": "assets/js/12.d64ed994.js",
    "revision": "7ec4f1429eb59fcf78e3d71729dacba2"
  },
  {
    "url": "assets/js/13.892a0ef8.js",
    "revision": "f0951f9fd2dd4e3d098cab1ffa14effa"
  },
  {
    "url": "assets/js/14.f6a3f712.js",
    "revision": "dedbc78a7b622bc62d61a6760fcc45f4"
  },
  {
    "url": "assets/js/15.9f8903c7.js",
    "revision": "04db76853871df4871f97f6a15f90fdc"
  },
  {
    "url": "assets/js/16.c6a0096d.js",
    "revision": "89f81215cddc2bc18b9d2ee571db5eb2"
  },
  {
    "url": "assets/js/17.099dd7a2.js",
    "revision": "253e5be0e8c3b6ceaf6dd02da4ca7fd8"
  },
  {
    "url": "assets/js/18.a40c090c.js",
    "revision": "c53a020a5d46d9f919a3fb50026d75fb"
  },
  {
    "url": "assets/js/19.45c77981.js",
    "revision": "4eebe3937fb21411ecdae094bd51ddcd"
  },
  {
    "url": "assets/js/2.0fc28db3.js",
    "revision": "8f156376b19453052ee75ee142bff2a7"
  },
  {
    "url": "assets/js/20.b076d82b.js",
    "revision": "38a9baf5ce1ac523adf3fff6c1d00780"
  },
  {
    "url": "assets/js/21.634826bc.js",
    "revision": "f7cfb0b1dac8981fb705727992527889"
  },
  {
    "url": "assets/js/22.6965f14e.js",
    "revision": "303c51dc26c2d5637d35650352dea93c"
  },
  {
    "url": "assets/js/23.c5b26943.js",
    "revision": "c6890bf9e91692571521e08a343f99c5"
  },
  {
    "url": "assets/js/24.06081116.js",
    "revision": "661207812aa365e422c57b806a496796"
  },
  {
    "url": "assets/js/25.9e1a3e15.js",
    "revision": "06827c325f462a9787eb074d5602d132"
  },
  {
    "url": "assets/js/26.f9a85f62.js",
    "revision": "204f7917174d875d52e5b325d9358e50"
  },
  {
    "url": "assets/js/27.8125253e.js",
    "revision": "3c628b18bc9291072a72144c3e694f4e"
  },
  {
    "url": "assets/js/28.8e1835d4.js",
    "revision": "c286430cf375cab4d28090ee4b703370"
  },
  {
    "url": "assets/js/29.41709888.js",
    "revision": "fa9a776ddf61018e5797cb70bbf3bd1e"
  },
  {
    "url": "assets/js/3.42d8ce58.js",
    "revision": "83911798112097c55b10b437e1c470b9"
  },
  {
    "url": "assets/js/30.fca8ffd5.js",
    "revision": "00292fbcb0e667eb86cee525c055ca4a"
  },
  {
    "url": "assets/js/4.579a13db.js",
    "revision": "63ed67f563e7c91272363c1115531cd6"
  },
  {
    "url": "assets/js/5.a34924ec.js",
    "revision": "188eb45fa8de514460923a1cd8e57580"
  },
  {
    "url": "assets/js/6.50f294b3.js",
    "revision": "3742e6dd954bf9de1b09c6269013cd29"
  },
  {
    "url": "assets/js/7.aa4f540d.js",
    "revision": "d79b7767addb4c83e9c7067c49a6a4e4"
  },
  {
    "url": "assets/js/8.ee9a2090.js",
    "revision": "c2aca22da99ce829e2de4786a2f47522"
  },
  {
    "url": "assets/js/9.46c97f2f.js",
    "revision": "b9a2c74f2d90b8976befdec738218764"
  },
  {
    "url": "assets/js/app.44ca7ad5.js",
    "revision": "1ea03e700a42c9fc5f06b427a4fefa2a"
  },
  {
    "url": "css/aside.css",
    "revision": "0e04fd3d5cb4226b1e40cff540b3247d"
  },
  {
    "url": "css/button.css",
    "revision": "16652d67020af37aa862caba6028e162"
  },
  {
    "url": "css/card.css",
    "revision": "f035453f97a4a59d2f53c184a0f272ed"
  },
  {
    "url": "css/checkbox-group.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/checkbox.css",
    "revision": "0b9d3755cf378fc12d8712e356513860"
  },
  {
    "url": "css/container.css",
    "revision": "4c4287f307a7261d608cc480df20c9d6"
  },
  {
    "url": "css/fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "css/fonts/fontawesome-webfont.svg",
    "revision": "acf3dcb7ff752b5296ca23ba2c7c2606"
  },
  {
    "url": "css/fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "css/fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "css/fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "css/fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "css/footer.css",
    "revision": "2ab377034265cba1d3b73a7fa9fb8a5e"
  },
  {
    "url": "css/header.css",
    "revision": "8e742989881197fe4ff7bc2c6b2bb147"
  },
  {
    "url": "css/icon.css",
    "revision": "8376e21b032ac35898466eff748d0c0a"
  },
  {
    "url": "css/iconfont.css",
    "revision": "95545b00b273a13fbd2b1efb15048bc0"
  },
  {
    "url": "css/index.css",
    "revision": "2319549924702887b32b21e7b717a3cc"
  },
  {
    "url": "css/item.css",
    "revision": "e25f38fd584c515e67b4bf5f649f3110"
  },
  {
    "url": "css/main.css",
    "revision": "cabbb028bc8f10b155964f9cd4933092"
  },
  {
    "url": "css/page.css",
    "revision": "a21d301536875852243bcc5f2dc0634d"
  },
  {
    "url": "game/all/index.html",
    "revision": "76cd1e0932f6c9d50a174532c5a9730b"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "4347faa6aac8a5e33e0bf1e0add32678"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "89e166322c2b405774bc8e074c2c1bd9"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "1f2217416c43ae896e347cf4fdfa067c"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "d8ed474474c336d3be45995a97601917"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "8acdbfab64dd9916b9946d12701c377b"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "d2dba44a0c723abf9441e054e3e257e9"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "d48294b7aaa685b6826f089afe88e29a"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "ec5550e37b944458f151ef21aad928ca"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "c3ab00fba0f2db94374efc14dea7451d"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "8bf13fae5863af5351d5374321c92ee6"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "d35147894c1c86581c4c35455dd191c2"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "ad267b6cf2970a30a00980195a68a303"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "4614bb2f776950a11da90ac4275f333b"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "6a13de70dfadb90937528d8d895f6e68"
  },
  {
    "url": "img/alipayimg.jpg",
    "revision": "76375138cb4770eeb6837bc2d8d62cf1"
  },
  {
    "url": "img/bk1.jpg",
    "revision": "7c50ace6f872f9225f0574616415886c"
  },
  {
    "url": "img/contact-bg.jpg",
    "revision": "90b89018c57623f25ff271dda0b322e8"
  },
  {
    "url": "img/gameshow.jpg",
    "revision": "10140594110f4bb15e46b03be88519d4"
  },
  {
    "url": "img/services-bg.jpg",
    "revision": "5222d76c2ce8a32d587fc6fc8e5f4da4"
  },
  {
    "url": "img/skills-bg.jpg",
    "revision": "ac55424d4f2e9cb3691f5eb9a4b65bf6"
  },
  {
    "url": "img/wechatgroup1.jpg",
    "revision": "50cbcfa5734cd073db4ce10d0a770551"
  },
  {
    "url": "img/wechatimg.jpg",
    "revision": "0714bed8e9ff413c61280cda5079ae2f"
  },
  {
    "url": "index.html",
    "revision": "f24879942236222f16a4c148935ab108"
  },
  {
    "url": "join/index.html",
    "revision": "a42a797132378efe8ee98f473e54d0fd"
  },
  {
    "url": "js/aa.js",
    "revision": "86b7286f55a11d9073a687642759cfb0"
  },
  {
    "url": "js/busuanzi.pure.mini.js",
    "revision": "4c9a89414b97bb2053ccc7cb83c83b6e"
  },
  {
    "url": "js/data/AndroidData.js",
    "revision": "1d597ed77519555ec168ad11bd40d66e"
  },
  {
    "url": "js/data/Constant.js",
    "revision": "c6f6aa1aa14ce46311bd9aa35a5941f3"
  },
  {
    "url": "js/data/DataFactory.js",
    "revision": "06c7dccf252c89b408fc7008d811563f"
  },
  {
    "url": "js/data/FlutterData.js",
    "revision": "effba6c2f6e533d542ef55eaa3b9c642"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "a9994fa40e89a8d3f7a36cb885ab91c3"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "6a6f03625addaee0797f7c56ab2f9b68"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "cc0565a29876112955a717310f1049d0"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "a1e33a942abb8cd99b42d22c74cb4f8e"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "ad2174afc2d02b4963915483690087c8"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "f42a4b05c475d6408d74b5394a8e4729"
  },
  {
    "url": "tool/all/index.html",
    "revision": "06f9e10ca52e94af9c677fc9ccba703c"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "5e9f9e1aafa8aa9249454560bc290067"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
