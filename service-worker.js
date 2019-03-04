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
    "revision": "5a86820097b73b5449cbfa882d6ebd68"
  },
  {
    "url": "assets/css/0.styles.6d762153.css",
    "revision": "1bf7e261943501b918fd06a79710f4d4"
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
    "url": "assets/js/16.a2218f1a.js",
    "revision": "8a25d97d7d8e38f5bf440cedeffad7d0"
  },
  {
    "url": "assets/js/17.eed3bbc8.js",
    "revision": "b35ef9375a7ad48f7de0103e0378a820"
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
    "url": "assets/js/2.8b25eee7.js",
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
    "url": "assets/js/27.3699a01a.js",
    "revision": "321ffcabadfe154930e1dcdb83f8941a"
  },
  {
    "url": "assets/js/28.0158983a.js",
    "revision": "6e62e462f5018b1583df93ff3cab538a"
  },
  {
    "url": "assets/js/29.05521f34.js",
    "revision": "fc045a3d396a569a93fbc149948cc252"
  },
  {
    "url": "assets/js/3.5d529876.js",
    "revision": "eaae903e514b73b4eccc69d0eaa7c0fa"
  },
  {
    "url": "assets/js/30.7755e002.js",
    "revision": "9bba370f2e722d05d9de9d669b00642a"
  },
  {
    "url": "assets/js/4.2381b490.js",
    "revision": "d78659b8b26fbbf44db550bfd983c40a"
  },
  {
    "url": "assets/js/5.a3054fd6.js",
    "revision": "d9dfbcb8693dcb6f63d60587388ff652"
  },
  {
    "url": "assets/js/6.c6e3c4cd.js",
    "revision": "73c15082a565c3701f2b51777bd8a790"
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
    "url": "assets/js/app.2247254e.js",
    "revision": "a2c3bebef34cb3d3b843f6f30e22bc77"
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
    "revision": "80eb74e1aa0b38467e7fdcd58c43ba53"
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
    "revision": "b37c0c1a16a8e8d2f9f33767d420be64"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "5bc2e8d05032c4ed2b1738bbe6a193d4"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "8cd5cf7b228af29bf9f40440db2e767c"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "20970828c6270108136e391e1e571811"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "cb2007535894ac230a5d21cd02ff0901"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "c6e15439a52ebb8c10ab6ae2dc98217b"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "4d3e56ea0d08dba2e466a945d697aab1"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "c92e09f5e7f63d7889c3dbc53613eb2c"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "5aae6c435d26095dbbfebfc93ffbf348"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "7a080358f33e9f6ce248b628a8c7d3c3"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "b1c9fe44f98de36eadcdeb128d58f143"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "62308015da90ef3a0f45f251eb007bd4"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "5170606c7f9b96d89648929221ddb2a3"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "b70dca2c3731ad2bcdb2a77b6b25d5e8"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "d7e5aab427f22accc951ac5ed6bb99b8"
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
    "revision": "8fb8877f0429b2e07535e40f99dc7377"
  },
  {
    "url": "join/index.html",
    "revision": "79eceeb9a1b64a07b72f11f00eb37d46"
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
    "revision": "3ccf889917579ee894e959bb4616abd9"
  },
  {
    "url": "tool/all/index.html",
    "revision": "130e9dfa08bbbdc3027b41d5173e2091"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "353ac10caccabdb789cca34e3967c868"
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
