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
    "revision": "7f64b80a333bf729a18afb84057766a9"
  },
  {
    "url": "assets/css/0.styles.18dae43d.css",
    "revision": "379325ad98616fbec615dc6d4dc4661c"
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
    "url": "assets/js/10.76ad9bdc.js",
    "revision": "1c030d55729e7f3ae45f0399a537a7b8"
  },
  {
    "url": "assets/js/11.25a5183d.js",
    "revision": "95179c51e6283640d4afa94004209cb1"
  },
  {
    "url": "assets/js/12.28ed8b05.js",
    "revision": "65adda77c0eb4afbcd701d28fe76b655"
  },
  {
    "url": "assets/js/13.1392c095.js",
    "revision": "86aa91b73d8762af0c010204740eb24a"
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
    "url": "assets/js/16.7cf64cb0.js",
    "revision": "fb49edcefcdc250bcc97cc3f1e610e46"
  },
  {
    "url": "assets/js/17.d9067a15.js",
    "revision": "b4b7b56b274fedd91971fa1015307abc"
  },
  {
    "url": "assets/js/18.b88ccd31.js",
    "revision": "053752a0a8194b8ada34cf11cd089475"
  },
  {
    "url": "assets/js/19.45c77981.js",
    "revision": "4eebe3937fb21411ecdae094bd51ddcd"
  },
  {
    "url": "assets/js/2.63b36474.js",
    "revision": "846aa453475ea73c5b92dbe6330ec3aa"
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
    "url": "assets/js/3.77a32569.js",
    "revision": "5712e856945e76192985e89dd02747f0"
  },
  {
    "url": "assets/js/30.fca8ffd5.js",
    "revision": "00292fbcb0e667eb86cee525c055ca4a"
  },
  {
    "url": "assets/js/4.7f80811e.js",
    "revision": "0a17ad8a80b0e8ed636969ac8fc3a336"
  },
  {
    "url": "assets/js/5.33286822.js",
    "revision": "d2b6e34064e50df02686f19f7330aa7d"
  },
  {
    "url": "assets/js/6.5f6ce70d.js",
    "revision": "d345d4cf3e44bb22786dcb8e13817bbe"
  },
  {
    "url": "assets/js/7.1ca89737.js",
    "revision": "eab6187f81d386fbc0f95cab5d62ac76"
  },
  {
    "url": "assets/js/8.c4b9f423.js",
    "revision": "753cd1ccb9de2266379fe2e6701ee4e5"
  },
  {
    "url": "assets/js/9.3362c9fc.js",
    "revision": "303fb1ce71425c5e672367df60b4a035"
  },
  {
    "url": "assets/js/app.d5f9a719.js",
    "revision": "047d09591d1cf15a9d79f101f65d557f"
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
    "revision": "62b5d054a08e7f9ebc5f45daf452d6b4"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "35a1878175a24ef5339678669095a871"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "030a2cc805c8f4f56c4376ea587fdf02"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "02124e3a9d59e60186e076a796e6a5f4"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "76abeaf47007764b0f6922366a873cc8"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "b440fdc2ae8779584807258c00bf9fe1"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "b2b6cd47856c5b8c878c25fc38ca4672"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "efeddac0b0be27172f35f92f681ae245"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "e8ad40b4c7bfb7fb56aa8f79594d8044"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "35a31503d811d1d10bdb27876db20012"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "d59a65e8d6a89ec0b8f7b303e4959da8"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "1d7295a1ad04818e8002e4d9e495a1d7"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "a48aabda778e1012bf4ed9825b95cacc"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "5ac8b77db5a32b18d7cffdcb2ba7d1a0"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "e3da0848b9bbe243cfd1a8a654b52bd1"
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
    "revision": "17c3d7d17c523c797c6dd8d73f413846"
  },
  {
    "url": "join/index.html",
    "revision": "c96c6d3ad03b9d28d3a40a5723ec793d"
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
    "revision": "ac88a6e2d08f713f0dbbf2b710a5ebdb"
  },
  {
    "url": "tool/all/index.html",
    "revision": "91bed28815b9ca28b5077dcad2ae94b6"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "b904e38b8ee939ad7e9bad57be860b4f"
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
