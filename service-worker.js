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
    "revision": "5e940baf8768db6d835543500f9dd595"
  },
  {
    "url": "assets/css/0.styles.8f7165cc.css",
    "revision": "c620dc9edc961c5e77feb8a1e75bfde2"
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
    "url": "assets/js/11.214b2702.js",
    "revision": "e78390802fbe6729d12a37999b0a8e40"
  },
  {
    "url": "assets/js/12.6c1425b6.js",
    "revision": "d9ca2e6fbbbc75467c6b1353eff122bc"
  },
  {
    "url": "assets/js/13.616eb804.js",
    "revision": "eb46529638fbf65895dc0669bc639fa3"
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
    "url": "assets/js/16.0b7f9e18.js",
    "revision": "d9c3648e94d0deddee97372a996693f6"
  },
  {
    "url": "assets/js/17.009962d3.js",
    "revision": "173f9c021531b54045555146fe8c7df7"
  },
  {
    "url": "assets/js/18.02ba6040.js",
    "revision": "4e22e4574b6494feb3edaa8950cd7444"
  },
  {
    "url": "assets/js/19.6ffc3ae4.js",
    "revision": "d57ab54e5ab60506ceab262504e4c49c"
  },
  {
    "url": "assets/js/2.5765391c.js",
    "revision": "06a8943c08f75ebbd839fa66287bafb6"
  },
  {
    "url": "assets/js/20.7d1fc449.js",
    "revision": "0ece8c3d6f324e9bd06729206e836335"
  },
  {
    "url": "assets/js/21.9142cdbc.js",
    "revision": "83011d948fa85c8a909216d2b7d4a911"
  },
  {
    "url": "assets/js/22.ecd251d3.js",
    "revision": "2611e6e7c97a4eb4980c1f496841b7a1"
  },
  {
    "url": "assets/js/23.48a5a806.js",
    "revision": "cae3f59c4a7ed1c13a490c4240d81380"
  },
  {
    "url": "assets/js/24.c0cb7f5a.js",
    "revision": "4f91d742a2b059bf3ff4407b417d46c3"
  },
  {
    "url": "assets/js/25.60260205.js",
    "revision": "6cb5480880ba26a0e831d97a463b69c4"
  },
  {
    "url": "assets/js/26.103ec837.js",
    "revision": "b055a2c88a5b9955e65dc5d9e41747e0"
  },
  {
    "url": "assets/js/27.e58b35dd.js",
    "revision": "c48689d70aa0fbc97d0d7a864822a86f"
  },
  {
    "url": "assets/js/28.cf13d480.js",
    "revision": "0f0b1913d5172bc7b451440131d94ac9"
  },
  {
    "url": "assets/js/29.c7fa5d2f.js",
    "revision": "4030a35b0d42b4502e1fffe178cba6ba"
  },
  {
    "url": "assets/js/3.ac3a3ecc.js",
    "revision": "ff43fb21b8d5d9e87d436e8480eed33c"
  },
  {
    "url": "assets/js/30.7755e002.js",
    "revision": "9bba370f2e722d05d9de9d669b00642a"
  },
  {
    "url": "assets/js/4.2588e2cc.js",
    "revision": "0fd607cd07e25eb38790d876b54d55a5"
  },
  {
    "url": "assets/js/5.14bc6f4e.js",
    "revision": "12bf908a8992fea101d8fef02ec5a311"
  },
  {
    "url": "assets/js/6.53a92b70.js",
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
    "url": "assets/js/app.9a4ac908.js",
    "revision": "1cdf9f2e7aac862d29796b2ea80fa922"
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
    "revision": "e925e362fbb840f5d025defec7404cae"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "00b681aa91e2887fef4d8843d9fcdc19"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "899c828512a7323fc52a0a60f493c662"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "b2de5ad1170770082ecf3306c8cac29d"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "a290fea11ec1dca6d5c370a7b6691525"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "5aa1cecbceec7cd4583678b4ec0da3da"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "141bd4fc36d4bc13e7fa196d7d530a82"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "fd8e251cb9c5270fc8824cdda2acbfa0"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "8df1202da0fe8146ccdabdad413215d7"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "649347161463417db47a2fa7dd7d6b31"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "aec516040c165c409961b7e2b5a024ad"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "bb425687c52cce3642255b91c7e738cc"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "144f1b9a36514f136a86a521e3ab2fa7"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "4339c411e54abb3077fb999597332544"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "fc277d9c88eb0b7bd67aadcdf5ccfb05"
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
    "revision": "18b00c2ac06a9d8390f967cad63fb6e5"
  },
  {
    "url": "join/index.html",
    "revision": "657e9c4a3bc4a6d338ef82dea30f17c9"
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
    "revision": "bf15174f9dd97a9e65e0a851a8c7daa7"
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
    "revision": "bdaec29540c9a5a643457de752e15098"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "7fd4dab1f11d4f4d1bb2690bfdca711e"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "e420e292c2bd70c17bf9e524f5914bb8"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "6169ddf286aa82d2c2b835bf17fde4fd"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "e714c3999a89635f295feae99812d580"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "206b88d4f7219ce16dbabbbe72e4cc3e"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "7aa1f2f26abe37d302d3b810d105fc10"
  },
  {
    "url": "tool/all/index.html",
    "revision": "a79ef1efeea8740ade0f24586bc98e38"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "2613adafe836ce8d53633fd72dbe8836"
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
