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
    "revision": "b3005395ea445a536ee6bde0300cd7b5"
  },
  {
    "url": "assets/css/0.styles.a18f61be.css",
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
    "url": "assets/js/10.03489cea.js",
    "revision": "079283bb133f7ab5737f0779eff72b78"
  },
  {
    "url": "assets/js/11.775f9313.js",
    "revision": "46af20cb8795e42f4089465c6b916c54"
  },
  {
    "url": "assets/js/12.2f807e4c.js",
    "revision": "e87d5858867e72cc04733ef41664a8f8"
  },
  {
    "url": "assets/js/13.5c57545b.js",
    "revision": "d513d7f1eb4bb773debb3bb0aefefdd8"
  },
  {
    "url": "assets/js/14.c182bf9a.js",
    "revision": "9770f18b201e1859660622f5e6aa69d8"
  },
  {
    "url": "assets/js/15.c799134c.js",
    "revision": "e504e2f68a48358f51aaf47507f766da"
  },
  {
    "url": "assets/js/16.0b7f9e18.js",
    "revision": "d9c3648e94d0deddee97372a996693f6"
  },
  {
    "url": "assets/js/17.64d36a61.js",
    "revision": "8758c5e2ebfdf98d45c55822c96f373e"
  },
  {
    "url": "assets/js/18.cebfdcf3.js",
    "revision": "4e91866a64c5fa5935b1fe7d3fd12be0"
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
    "url": "assets/js/20.7d1fc449.js",
    "revision": "0ece8c3d6f324e9bd06729206e836335"
  },
  {
    "url": "assets/js/21.5c775148.js",
    "revision": "50e5cec95b5accbc8b57991d4d45cce3"
  },
  {
    "url": "assets/js/22.2d51033a.js",
    "revision": "c695f89792ddf3825dfb227f63db0702"
  },
  {
    "url": "assets/js/23.64602262.js",
    "revision": "5a9ef4a7b5224122af9d26b08d0338d6"
  },
  {
    "url": "assets/js/24.37a5e87a.js",
    "revision": "eb2c4c73109bdd02c9a52f6b3397a3d8"
  },
  {
    "url": "assets/js/25.5ee02860.js",
    "revision": "1c93891f741f0eccd3901a09ddddeebb"
  },
  {
    "url": "assets/js/26.f0f5d581.js",
    "revision": "796090ec4b0b4ab6ee0d3214f0f9b9c1"
  },
  {
    "url": "assets/js/27.d21e2b9e.js",
    "revision": "56bbc556aad788e1bda11e4e49c3d65f"
  },
  {
    "url": "assets/js/28.c5c23238.js",
    "revision": "a5157efbe8d0186e9bdc521292969deb"
  },
  {
    "url": "assets/js/29.70c2e891.js",
    "revision": "e36cdb74b26d28e35ad8f4061e6faee1"
  },
  {
    "url": "assets/js/3.a726d421.js",
    "revision": "eaae903e514b73b4eccc69d0eaa7c0fa"
  },
  {
    "url": "assets/js/30.7755e002.js",
    "revision": "9bba370f2e722d05d9de9d669b00642a"
  },
  {
    "url": "assets/js/4.f66f504d.js",
    "revision": "7d7b94a6b1e0c38c8b31555dc4ae66a5"
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
    "url": "assets/js/app.66b37ded.js",
    "revision": "11bac03ea397ec07f575d4b48b96cf0b"
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
    "revision": "72fe1dcc76be5b341a52762d4d275a11"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "6de6ca83b1876a62543ff6293d582160"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "4bf8edc4a8b6ebb9a2a745c866eb3399"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "75879024cd0e0815738685ff6e617dee"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "6e7d3664f90ce632ce3663d7852b344b"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "b713c4579479e93f798270e67ff4427e"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "b7709cc4cf077f7be45604cbe4c109b9"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "29eba9c4fc31d6eff1119021b9142d7e"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "a585c1e116bbec67a991f278868537cf"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "6be6b3df06ac7190c0b51d7b5bc2cba5"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "59097061637339864cabd318cd2fdf58"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "99b7e46fa16ab3672115db0434f6919c"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "1a6a1972e56fd0b55385f489d42d85a1"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "034d37fc2ecde3245000767d2909936e"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "33e637315032f479242405d022675705"
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
    "revision": "5339d137964f17d1bc16a9b021a6759d"
  },
  {
    "url": "join/index.html",
    "revision": "a9f662b14e287246e32b6ddc87e89d24"
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
    "revision": "de6fea651e5c994eb4e3f49fe0db124c"
  },
  {
    "url": "tool/all/index.html",
    "revision": "2d2e91133e062c2e86d76efdb955dc39"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "93b7ce975a3f0a99476d3a70a015f7a8"
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
