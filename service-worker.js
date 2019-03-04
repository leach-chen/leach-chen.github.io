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
    "revision": "13d510373b9c4121d20e05d1b1f93408"
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
    "url": "assets/js/12.d9ea8610.js",
    "revision": "dc87825e61d5e39b63257cb2a9a24d6d"
  },
  {
    "url": "assets/js/13.fe52f06d.js",
    "revision": "ae9e541e166f708fa9eb7cafbab82502"
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
    "url": "assets/js/17.05f71c47.js",
    "revision": "1b6d375e3f047eb4c2e13365d94b5768"
  },
  {
    "url": "assets/js/18.f3bf8031.js",
    "revision": "5c1378307b8502ac1cae4c2e5ef3ddc8"
  },
  {
    "url": "assets/js/19.2637e4a2.js",
    "revision": "be223f950b2efc52ea042900d0a0c676"
  },
  {
    "url": "assets/js/2.81423ee1.js",
    "revision": "06a8943c08f75ebbd839fa66287bafb6"
  },
  {
    "url": "assets/js/20.277c960c.js",
    "revision": "08386fdc283b574404cdbe21836850c5"
  },
  {
    "url": "assets/js/21.85e61d43.js",
    "revision": "70407a79bbab71f037a35cde715ef026"
  },
  {
    "url": "assets/js/22.88e9132e.js",
    "revision": "d7a0746dcb49335089a48b9b4606b1cf"
  },
  {
    "url": "assets/js/23.64602262.js",
    "revision": "5a9ef4a7b5224122af9d26b08d0338d6"
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
    "url": "assets/js/28.01dbf534.js",
    "revision": "b441e3e8c003d5242efb30031015b232"
  },
  {
    "url": "assets/js/29.05521f34.js",
    "revision": "fc045a3d396a569a93fbc149948cc252"
  },
  {
    "url": "assets/js/3.eb8c7e38.js",
    "revision": "ff43fb21b8d5d9e87d436e8480eed33c"
  },
  {
    "url": "assets/js/30.7755e002.js",
    "revision": "9bba370f2e722d05d9de9d669b00642a"
  },
  {
    "url": "assets/js/4.17d682f5.js",
    "revision": "187e12a8c4492d92f965c5a402c5534c"
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
    "url": "assets/js/app.e790681f.js",
    "revision": "6308567789ed8d126d858878f52f20ea"
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
    "revision": "9980dea1ce8a93fa34086e517cb44e81"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "4d0e4bc3b9849c3786a4202438437ee9"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "7470b9f96dfd90134334ba9aa3217811"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "01678d74a782e2d9813fdba98581c2b4"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "3b04b61bc088882592387f9dfa3c06f5"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "9ea9da1028012152d2f56221bc122dcc"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "ad5009c17466c7feaf9dc09b30123e1c"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "4c0b1fe91643ce805dcac1fefafb2baf"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "7ad3a1b6e39aedc699fd794f4715c0d1"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "b2af70e899b7b092da6ff2e483618499"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "ddb0ed46f2bfaa57f3752dac53137ba1"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "9c6659c24927ac9870bbd6a4ffeb64a3"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "a3e0917a0275ebb443ff44052f2f00c5"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "3e08afeace5179a55ee3431196fefb26"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "25f94b5e49650914d7f323ec94afd2ad"
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
    "revision": "62cb32968a42c74c93a99cea0b5b7f0f"
  },
  {
    "url": "join/index.html",
    "revision": "2723e3034dbb37a06e8ae6a20c0a806f"
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
    "revision": "2f8223e594e9dc2eec5d5e44d271f999"
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
    "revision": "27200de91a3735cd20bbdbc883f27e11"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "f4adb1e518cc1c3cded78a0a2be38625"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "acf3cb1a020320c067ed3ba13855e38b"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "c22fb2e33fe4d61711809c19b4be91ad"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "e714c3999a89635f295feae99812d580"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "d3061de326fec1439290865eaed66aa9"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "34706c76768d762a9c6f8bb585caf1d7"
  },
  {
    "url": "tool/all/index.html",
    "revision": "82bfbb6293a72cb30e030c7dafa17226"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "d30d37212c8fab14c1e61f2babb16d61"
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
