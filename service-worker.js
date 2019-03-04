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
    "revision": "528e26a9cdd246b43a4ecba4dc8400bf"
  },
  {
    "url": "assets/css/0.styles.5752888d.css",
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
    "url": "assets/js/10.95181a86.js",
    "revision": "79847fa4442e7bc583b282fb6b0f5a26"
  },
  {
    "url": "assets/js/11.cadc11b6.js",
    "revision": "2d8aecbc65a5eac52e2355a3ea75b030"
  },
  {
    "url": "assets/js/12.00d61fc1.js",
    "revision": "1dea2f3df3c636d70b921a53173172c6"
  },
  {
    "url": "assets/js/13.07260b2f.js",
    "revision": "4f905d27eae4a53d10457cabb2204375"
  },
  {
    "url": "assets/js/14.5f8e35fc.js",
    "revision": "93e3315c08e60647413053771fa6c77a"
  },
  {
    "url": "assets/js/15.efecbf0e.js",
    "revision": "d092638262245bdb72d3215dfbbc99f3"
  },
  {
    "url": "assets/js/16.eb74fbd7.js",
    "revision": "a24825d53d35deca30d694ad47128700"
  },
  {
    "url": "assets/js/17.b85ccdde.js",
    "revision": "f215d9bd764cb1ce9d2cdaad27874fe5"
  },
  {
    "url": "assets/js/18.7b030111.js",
    "revision": "7042edf8e51c9fe175b26187247c1344"
  },
  {
    "url": "assets/js/19.5bf1b872.js",
    "revision": "4f2161ff4820e7b3201ec3c3421161bf"
  },
  {
    "url": "assets/js/2.a74bbf4f.js",
    "revision": "5d87f49a7964c523882ee16d3ea987af"
  },
  {
    "url": "assets/js/20.28c5fc73.js",
    "revision": "ebace46a7ed71f115d7fce55f8235848"
  },
  {
    "url": "assets/js/21.2ebbb213.js",
    "revision": "6042d7c516f1f3b594382d496add9c53"
  },
  {
    "url": "assets/js/22.88e9132e.js",
    "revision": "d7a0746dcb49335089a48b9b4606b1cf"
  },
  {
    "url": "assets/js/23.bfe23af7.js",
    "revision": "9056bc39c62af0b1779cd6f165325692"
  },
  {
    "url": "assets/js/24.7c7b06d8.js",
    "revision": "c63c12c92a61725a4f39cc188165410f"
  },
  {
    "url": "assets/js/25.a6e55814.js",
    "revision": "4ce201dbfad6c5d1bed830a6281bf18d"
  },
  {
    "url": "assets/js/26.30a0c30c.js",
    "revision": "651b425c0d9e7709cea547d4a6b380fe"
  },
  {
    "url": "assets/js/27.2ba879be.js",
    "revision": "2025a6591cfadbc706dbcb3a51b73313"
  },
  {
    "url": "assets/js/28.9d36d984.js",
    "revision": "a2bc5e2c04b85b1fcecf7f6486d345da"
  },
  {
    "url": "assets/js/29.b075177c.js",
    "revision": "75ff601959e6a36f850bdd5165085515"
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
    "url": "assets/js/4.60804ca3.js",
    "revision": "a8c9da3f451cea6cfe7afe500dad4564"
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
    "url": "assets/js/app.bd88b0bf.js",
    "revision": "5fcfdaba78066a1c272718e0a9629ae6"
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
    "revision": "2a089c475dc1e272101bb99c0292fa18"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "b12fc82c293ce29b8a38b7a7e0707024"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "3ce7e5dd90309a8d30318943b16278b2"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "1d108f4dd9a902bd43a316f102a3ba54"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "86abfaf0514285192870a9bf4e1d3be1"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "12a3ebc6eec5eb3459ed2973d04e2b9b"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "3cffb2aac2989dffcffb8ef997dce809"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "0c12e8450d940ddb7d8a15805bfb4d30"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "a6ff2d8ce6745d69d9889a19ed5f3909"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "6b1f54ce0b48ef63bb7d72a008ec84ac"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "3f132afe5c9ff9b8422f3c584608f71a"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "ea530db51e2f3ef65329b10db1b2a988"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "69a7cb6048cb83a2995a220812b869f5"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "eadbf0321eb957b4b915d96df85febd5"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "c965d4ea4ad11074b324c0c3cae18b39"
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
    "revision": "aba2959f0dcb49a6e4f5210045b21518"
  },
  {
    "url": "join/index.html",
    "revision": "6de82b2d606efb49c438ae9c52a41827"
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
    "revision": "cabbf4171a8311fd371d6b8af02e506f"
  },
  {
    "url": "tool/all/index.html",
    "revision": "084d5861f098433a2d236124f9acf32f"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "0ab72a57a4e775660f5364d12d21541d"
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
