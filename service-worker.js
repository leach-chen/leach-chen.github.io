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
    "revision": "68658eb97fb65aa7fff57cffe3d8e8c4"
  },
  {
    "url": "assets/css/0.styles.2571cb85.css",
    "revision": "a457f6025fd97c1734631d5878f4f134"
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
    "url": "assets/js/10.61768a1c.js",
    "revision": "6dfef993fed496d37f34360be58f1eda"
  },
  {
    "url": "assets/js/11.9827b25d.js",
    "revision": "153a985c7b8d941020dc56e15f347057"
  },
  {
    "url": "assets/js/12.6c1425b6.js",
    "revision": "d9ca2e6fbbbc75467c6b1353eff122bc"
  },
  {
    "url": "assets/js/13.5e512d36.js",
    "revision": "215c71e83f502b5fc630d53c98176c16"
  },
  {
    "url": "assets/js/14.c182bf9a.js",
    "revision": "9770f18b201e1859660622f5e6aa69d8"
  },
  {
    "url": "assets/js/15.efecbf0e.js",
    "revision": "d092638262245bdb72d3215dfbbc99f3"
  },
  {
    "url": "assets/js/16.c8512dfd.js",
    "revision": "d1fe19706cc3260268928b9f76a8106c"
  },
  {
    "url": "assets/js/17.64d36a61.js",
    "revision": "8758c5e2ebfdf98d45c55822c96f373e"
  },
  {
    "url": "assets/js/18.7b030111.js",
    "revision": "7042edf8e51c9fe175b26187247c1344"
  },
  {
    "url": "assets/js/19.4bccf528.js",
    "revision": "0938ac93c7f26aeff7c86504edd5b9fd"
  },
  {
    "url": "assets/js/2.a74bbf4f.js",
    "revision": "5d87f49a7964c523882ee16d3ea987af"
  },
  {
    "url": "assets/js/20.277c960c.js",
    "revision": "08386fdc283b574404cdbe21836850c5"
  },
  {
    "url": "assets/js/21.ae887c72.js",
    "revision": "01dd493e8b396eedc696a8d13a2450cd"
  },
  {
    "url": "assets/js/22.d761ca1f.js",
    "revision": "9c1aa2984203e03734e2545544f810b0"
  },
  {
    "url": "assets/js/23.48a5a806.js",
    "revision": "cae3f59c4a7ed1c13a490c4240d81380"
  },
  {
    "url": "assets/js/24.cd95e75b.js",
    "revision": "9d2ded20f97b0677e9ede4bbe005743a"
  },
  {
    "url": "assets/js/25.0a68992f.js",
    "revision": "bd7a8b4a0950b2ae8f85fd14188a6c51"
  },
  {
    "url": "assets/js/26.7ad9a842.js",
    "revision": "e0e9a272fd6f8a8516b7575fa3633a78"
  },
  {
    "url": "assets/js/27.0a120dd3.js",
    "revision": "5d3399964e25d8b04c029b31d4c2234f"
  },
  {
    "url": "assets/js/28.16d9c4d1.js",
    "revision": "e6992eefaeeceb3e1cf11bafb8ff0df6"
  },
  {
    "url": "assets/js/29.ed5447eb.js",
    "revision": "1c7bde0137a31a6557ab6d0eedfc5537"
  },
  {
    "url": "assets/js/3.52f971b6.js",
    "revision": "6f16ef7926d5b3af1490b044a1ed9d78"
  },
  {
    "url": "assets/js/30.7755e002.js",
    "revision": "9bba370f2e722d05d9de9d669b00642a"
  },
  {
    "url": "assets/js/4.7377c2cf.js",
    "revision": "93b9410bbd3fe1653c8fd89776c1fead"
  },
  {
    "url": "assets/js/5.c162b8fd.js",
    "revision": "62a5748caf9da784fd2787224d4c7c91"
  },
  {
    "url": "assets/js/6.bfa6708a.js",
    "revision": "4ef0abc5c1af79c2f06fdb5d206c0913"
  },
  {
    "url": "assets/js/7.0a814c17.js",
    "revision": "50b646ca68584537d00c067cb12c9919"
  },
  {
    "url": "assets/js/8.bb6db117.js",
    "revision": "022ffbcd73617a83933437cb5fb97b73"
  },
  {
    "url": "assets/js/9.b6101081.js",
    "revision": "080c1d4e3d13865c60892efdb6949d67"
  },
  {
    "url": "assets/js/app.5551b5fa.js",
    "revision": "3af23ad6efeda9fd08ef8fc806fdaeb2"
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
    "revision": "87c5c34bfb61e0dc4654cccb2c137754"
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
    "revision": "414581241a2686a93aec42d53e92ba2f"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "eadd8e592b26b64d1bf1ec8ac9f9e969"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "a5b166ac1e1cf77ee6125b8837abad8a"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "d42399597f5c8786c8eaafe7e2e3b57a"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "ad51990b6936f8f4ef102a3bd6dcfbde"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "63452fadc14be3ea028860c1262ffd87"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "d450afcae9b496648fffc72c14017b66"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "0d0fae12ba2a0492998cb87066645876"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "309c28fa5789a8961bba5679c539f7b8"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "e76bc0ff3623ab8d3ffe0b47530692c9"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "14a315e136499b497fc293b1711659ed"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "d05d42714950c0869e8a2f808f2a39f8"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "33be93944ad3279fab5d053383dacc7d"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "aed10e8d96adf5b7c5d654e02524de1d"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "d5e270c4789a5a771adf6e9dce6d39b1"
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
    "revision": "a93867d40e77a40dba7f4ef00b071394"
  },
  {
    "url": "join/index.html",
    "revision": "8f17c324be533ed10d5ff0d0f9a6e57d"
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
    "revision": "20f81e3ee9e87f3808db7786895a42a7"
  },
  {
    "url": "js/data/Constant.js",
    "revision": "1e45d4013f2442170509f428eefc344d"
  },
  {
    "url": "js/data/DataFactory.js",
    "revision": "06c7dccf252c89b408fc7008d811563f"
  },
  {
    "url": "js/data/FlutterData.js",
    "revision": "5d1502ea16cca879c857d0754bc11863"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "f03b9789b9cc4dab225026ec53bc9ccc"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "506836773e11b0361c671c2b86943b25"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "5678a50a57f5cb106c8f24873bdb44e4"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "e714c3999a89635f295feae99812d580"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "6ed453423cfb3c70828f1992d1aee5bb"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "973ba190a33f3ffd11416e972b69eade"
  },
  {
    "url": "tool/all/index.html",
    "revision": "c04cd4d4415800101c34666521993fbb"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "50e2ed24e6bad50c22606911970178a3"
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
