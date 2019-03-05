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
    "revision": "c2f8a6773fc54bbaacd8a9ea12faee0e"
  },
  {
    "url": "assets/css/0.styles.824f2194.css",
    "revision": "eb6a116812c19a28e685d13fef624035"
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
    "url": "assets/js/10.168b3896.js",
    "revision": "cdcbeb8f1379f3c0bf287fa8dccd9092"
  },
  {
    "url": "assets/js/11.8b48370f.js",
    "revision": "ea9005be4dfe153427f0b32abe474d40"
  },
  {
    "url": "assets/js/12.55b06075.js",
    "revision": "67109865c2a035f58dda45b0181a03fe"
  },
  {
    "url": "assets/js/13.5e14a33d.js",
    "revision": "0a7da140f5abe20577fe54577001dcea"
  },
  {
    "url": "assets/js/14.52ccda1b.js",
    "revision": "2abd0427722a6eb1b535f98565c2df84"
  },
  {
    "url": "assets/js/15.928a495f.js",
    "revision": "29867bda40fa5df5e5195a52e44394d2"
  },
  {
    "url": "assets/js/16.49d98398.js",
    "revision": "a0ddfe8115ebc63f5309c3e7137a88ba"
  },
  {
    "url": "assets/js/17.69a492f1.js",
    "revision": "0df90d9e9b524deca0f2d2962f3f7635"
  },
  {
    "url": "assets/js/18.24419960.js",
    "revision": "17c0da966608d8d83ff77dd508718afa"
  },
  {
    "url": "assets/js/19.af9f02f8.js",
    "revision": "66dd0d08e82b4b7664e45bd4f4edfdd0"
  },
  {
    "url": "assets/js/2.8f969368.js",
    "revision": "b9678aa537e38fe80884e8e06b6daea6"
  },
  {
    "url": "assets/js/20.db744445.js",
    "revision": "bb96b69e1ed500805f2fcd2f1a785398"
  },
  {
    "url": "assets/js/21.0b9f0f60.js",
    "revision": "59dfeddbabaadc224772a0a9a53c7c1d"
  },
  {
    "url": "assets/js/22.12cb1041.js",
    "revision": "041ba9b3a0ae42f802c749a01f771dd6"
  },
  {
    "url": "assets/js/23.6a74f835.js",
    "revision": "b0782d7c987553ce46be8d4faf2788c3"
  },
  {
    "url": "assets/js/24.47b5bf7a.js",
    "revision": "f0167349c8329b3760deae0b9e9d10be"
  },
  {
    "url": "assets/js/25.8de16f08.js",
    "revision": "07431df71d63061f5c4cffc3ef7c5f02"
  },
  {
    "url": "assets/js/26.04ae74ad.js",
    "revision": "3deef528e2c43c444ed21c4ef15cb469"
  },
  {
    "url": "assets/js/27.174cf911.js",
    "revision": "a42f75367ab93d6adde087345451d6a6"
  },
  {
    "url": "assets/js/28.08b1b8e8.js",
    "revision": "f41c75bb825da412b17ed04b535bc0f2"
  },
  {
    "url": "assets/js/29.27c8e93e.js",
    "revision": "56e1fe2f21f3c8a519cf21d3d777dbe5"
  },
  {
    "url": "assets/js/3.8b1e7124.js",
    "revision": "26aefa2e5e413f5d1299a8dba487d533"
  },
  {
    "url": "assets/js/30.dcd58c6b.js",
    "revision": "115aaf420db2e2fef36211f4e2949498"
  },
  {
    "url": "assets/js/31.4e1099d3.js",
    "revision": "90aaf71adeef05a6b3ba036fb973c644"
  },
  {
    "url": "assets/js/4.f1cd3f3d.js",
    "revision": "32becedf0f47f9f2901dd9fe7bc1b6b5"
  },
  {
    "url": "assets/js/5.7254bb2c.js",
    "revision": "c4efe0a445118e10e0c8a36f41871f7a"
  },
  {
    "url": "assets/js/6.b662e6c4.js",
    "revision": "46b4ef77007365a4663f94e83c9395b2"
  },
  {
    "url": "assets/js/7.93bf9e82.js",
    "revision": "2e476a8aaa5da427b4ec6fd38dee3845"
  },
  {
    "url": "assets/js/8.041c4e5d.js",
    "revision": "4fa6f954d0b6558c597b5c56a6725086"
  },
  {
    "url": "assets/js/9.044407b1.js",
    "revision": "3dcc5b7147996ae6bc322808596ea260"
  },
  {
    "url": "assets/js/app.33dc2818.js",
    "revision": "b176543c9c686eda26595f36c1af63b6"
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
    "revision": "e428ef36d8d5c3df6ff0d9283e2131f4"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "74283e4cadc33e8182a956570f6f8ecf"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "2ceb357a7b5c0804948f1efa3909debe"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "65b807f956b74ff8f5b0325b05075acd"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "9e39e67234b867f5898c47a8977bc9a8"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "7b75cc80eedb305a6bd24049607fca69"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "a27741beb9ad60e18b07916fbc815b9b"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "002a6d0ae405ed41c69288a7694242d8"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "0c952ec70d5a9ffea4872d2fc6fcb0b6"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "f2b432ee65b47e89a4c66c06c8db8293"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "04d153d2903a44dc34c651c8ae4b2d88"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "9d5e6e26560423e7f82e18848954a2e5"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "2f8fb68d0af545613a3a303dd3ccee8d"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "149a1b394a7481a6284c43183f297720"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "54d67a5958edb6baaadb7e7815927bab"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "66807545f794eb5216d60b2e4dd47acf"
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
    "revision": "a9fe17e64291b0f665635750dd48932e"
  },
  {
    "url": "join/index.html",
    "revision": "80bac80c7167a9aa8df229cc10be0cbe"
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
    "revision": "16a6c360c9449a8ffde454d3d2ad6634"
  },
  {
    "url": "js/data/Constant.js",
    "revision": "ad9d16365941e7cf2b1d0e7650db1f54"
  },
  {
    "url": "js/data/DataFactory.js",
    "revision": "a0d9d49ef3903b95f26e2fe86eb72206"
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
    "revision": "660c1360354bddaebb7b1a215b19aeb8"
  },
  {
    "url": "tool/all/index.html",
    "revision": "4a598f3d010180b96132c0d841b999fd"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "db8b1a4d948239b99dc55687ab0b7640"
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
