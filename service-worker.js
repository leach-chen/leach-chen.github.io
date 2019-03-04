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
    "revision": "ca5909fe7724eb34ba0a1552c4246059"
  },
  {
    "url": "assets/css/0.styles.24eda1e1.css",
    "revision": "369ecc72f61076680287f1b61bacb5b7"
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
    "url": "assets/js/23.6da96415.js",
    "revision": "b02d55538e22da9b404135856342bed3"
  },
  {
    "url": "assets/js/24.e2dcbf40.js",
    "revision": "8c2364fa11f3613a2c1d91ed2370e01c"
  },
  {
    "url": "assets/js/25.60260205.js",
    "revision": "6cb5480880ba26a0e831d97a463b69c4"
  },
  {
    "url": "assets/js/26.7ad9a842.js",
    "revision": "e0e9a272fd6f8a8516b7575fa3633a78"
  },
  {
    "url": "assets/js/27.7c5ab642.js",
    "revision": "6272989e87f4ba214128cf7170a467ed"
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
    "url": "assets/js/3.5d529876.js",
    "revision": "eaae903e514b73b4eccc69d0eaa7c0fa"
  },
  {
    "url": "assets/js/30.7755e002.js",
    "revision": "9bba370f2e722d05d9de9d669b00642a"
  },
  {
    "url": "assets/js/4.4e1855e4.js",
    "revision": "6d9134ab48d236ea7fcfa8ae5cc32aa8"
  },
  {
    "url": "assets/js/5.a3054fd6.js",
    "revision": "d9dfbcb8693dcb6f63d60587388ff652"
  },
  {
    "url": "assets/js/6.882575ae.js",
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
    "url": "assets/js/app.d6785649.js",
    "revision": "257a6f184ed241fa00481fb084f7f68e"
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
    "revision": "c6eaded0d4cb9bd646dab8abd098ce13"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "ce923ab460585c3615cbb994811212bd"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "53d4b54ba8e3067473a534a8f30f1757"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "0cb6d5880f9ca0feb1c5709b80058160"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "6f256ee225505b5ed6f23c7fe55e9df7"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "eeb80650fbc4003d786f299ab0beaada"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "14c5fbdaca11e5e5902f04b38ae1f006"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "eb223d7049a4a06b55915c668269eed9"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "d1039a4704678b26b984d36b20298ff2"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "48f98cfc8ee7e83f7691f4301231c7be"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "a5521be497780a109971f7bb1d2bacd0"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "d7b13c5a79e9f0fbafb674182458c34a"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "bd9e50d742276ef57a125c6f7b63ca8f"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "79354d51994e7ca10a38f116ea86bb49"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "2bf18203837733585baeffe8f9c4f492"
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
    "revision": "bdd2f89ceed75d8b5f52f839145a7ad0"
  },
  {
    "url": "join/index.html",
    "revision": "df30449155881b969f6faa5060fb1e53"
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
    "revision": "8011d9c105254d8bd2a64572e24a0cf3"
  },
  {
    "url": "tool/all/index.html",
    "revision": "a6366f2eb0c59b3ae37fe11e293c36dd"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "23f0b9dd2f99f997b212efe77931b6b2"
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
