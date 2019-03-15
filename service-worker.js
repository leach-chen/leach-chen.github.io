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
    "revision": "fb06a5e325c4d1ba8da6a0fad8670835"
  },
  {
    "url": "assets/css/0.styles.bf1fbd40.css",
    "revision": "5655c893b7f593868e26838df6eb97cd"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/Algolia_logo_bg-white.8e0e9838.svg",
    "revision": "8e0e9838589ad42418fe5fa23fa7e9f1"
  },
  {
    "url": "assets/img/alipayimg.76375138.jpg",
    "revision": "76375138cb4770eeb6837bc2d8d62cf1"
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
    "url": "assets/img/wechatimg.0714bed8.jpg",
    "revision": "0714bed8e9ff413c61280cda5079ae2f"
  },
  {
    "url": "assets/js/10.2d0be5da.js",
    "revision": "3a0580f127ff369608fed763d6f1e068"
  },
  {
    "url": "assets/js/11.3dec2124.js",
    "revision": "95f60fe234256f6e4f689e15f7b849d1"
  },
  {
    "url": "assets/js/12.632137a5.js",
    "revision": "508973764d64bf5a12db25b6ebebecdf"
  },
  {
    "url": "assets/js/13.3b4b018c.js",
    "revision": "2af811c6ab587cec1b2b6bc57ecf9891"
  },
  {
    "url": "assets/js/14.fd78b306.js",
    "revision": "856ea5dadc546fd549defc8cbdd6167a"
  },
  {
    "url": "assets/js/15.1acc44d0.js",
    "revision": "d1846c3ec8e4a6f0d1ed38c4559b1569"
  },
  {
    "url": "assets/js/16.453b356c.js",
    "revision": "3589cb5103ac58c54b519bd6a0eaccc5"
  },
  {
    "url": "assets/js/17.17a7d1dd.js",
    "revision": "75775f64eb6765435d36705dc562710e"
  },
  {
    "url": "assets/js/18.19fc8c22.js",
    "revision": "e3d1560eab1e9b30c4feb19779ddbaa2"
  },
  {
    "url": "assets/js/19.28dd254e.js",
    "revision": "060da5fe9ef133bddb9792c1dda76be1"
  },
  {
    "url": "assets/js/2.96eb9422.js",
    "revision": "541aa0a44d270805539c48a1a61e28da"
  },
  {
    "url": "assets/js/20.7ff028ca.js",
    "revision": "357fac64d2c0fda5d214d972c1617496"
  },
  {
    "url": "assets/js/21.2b75569c.js",
    "revision": "04b97d3f4d38ef7ff6b2bafc710b8ad1"
  },
  {
    "url": "assets/js/22.889d555f.js",
    "revision": "2a43c9504ca8e10bdd568e33bf34c830"
  },
  {
    "url": "assets/js/23.3eff795b.js",
    "revision": "ec277d818a4511758ad7233c7cbc40e9"
  },
  {
    "url": "assets/js/24.fa740825.js",
    "revision": "d63c77a9a8f038194d0e1ebeac4d2fbd"
  },
  {
    "url": "assets/js/25.2bcdbd0d.js",
    "revision": "ec29b02ce27662790c99ef0189c2e1c9"
  },
  {
    "url": "assets/js/26.c837d5d0.js",
    "revision": "81d5b01691321086b67f372b133f75b8"
  },
  {
    "url": "assets/js/27.b48dbd51.js",
    "revision": "cc1706a6b7a2e30cf5215237bfb1f7d3"
  },
  {
    "url": "assets/js/28.a726fb04.js",
    "revision": "0081abfe3711beba2e928d2e24f61687"
  },
  {
    "url": "assets/js/29.99d5a0e5.js",
    "revision": "89f3c35e4b148252ff89073f6f03ffc6"
  },
  {
    "url": "assets/js/3.f2045431.js",
    "revision": "2b913d8fa5891ccd80e55b1b42431e24"
  },
  {
    "url": "assets/js/30.3e5a4f1b.js",
    "revision": "cbfd6d48c1a2bb66add77643bf822fe4"
  },
  {
    "url": "assets/js/31.2e225590.js",
    "revision": "a37b6a71c1d25fe814b14b1546d56e9d"
  },
  {
    "url": "assets/js/32.85fb4862.js",
    "revision": "cf3d0080c550c751010999a41c02ee79"
  },
  {
    "url": "assets/js/33.5a76ff3e.js",
    "revision": "50914fe04c6d9f18e9853db0326aff4b"
  },
  {
    "url": "assets/js/34.9b135265.js",
    "revision": "a85a164a8d4c8bc916d6a25b4fc288fc"
  },
  {
    "url": "assets/js/35.81a48083.js",
    "revision": "353afb6e45124ca8539903ffa55d0d97"
  },
  {
    "url": "assets/js/36.a046c03b.js",
    "revision": "205b35b0fadb38e2a5a5db7c7acdacb7"
  },
  {
    "url": "assets/js/4.92d9dbf4.js",
    "revision": "77735a6d94676017b3c81f6938e745bb"
  },
  {
    "url": "assets/js/5.7e9d61cd.js",
    "revision": "c458617de04d07d1ae62af642bae3ada"
  },
  {
    "url": "assets/js/6.0bdf07ba.js",
    "revision": "bd6e5b3ada6955beb0f53d9907ebec21"
  },
  {
    "url": "assets/js/7.b40e0e0f.js",
    "revision": "f74a89ccf4fb1e947c43329da55e06a4"
  },
  {
    "url": "assets/js/8.7caefc07.js",
    "revision": "5194d9fd899a1283a74bc1d2cc4687d4"
  },
  {
    "url": "assets/js/9.9f2ff5cb.js",
    "revision": "3b94b21e62d7f4d3c42abbb692ebdac4"
  },
  {
    "url": "assets/js/app.55d87d19.js",
    "revision": "e2c40810b12f6415fab3a4ae6ecc50b2"
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
    "revision": "2e03755fdf60b73549d437a72927ed71"
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
    "revision": "c6a92441ec54f90c52fabce100629444"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "cdc13752eca046533342f9bf976ab7e1"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "5c18e5134b094698ecab13cbe849aa90"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "b379e316c5bb18b69c9cf2d812bb2c75"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "eb5eb4cd28d218e1202fe8bb0f25a639"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "c021d50c5e0e0477026c33c51f97587f"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "c247eb3e5a287c34133128ce8f7a4558"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "fcf6dc0f96a4d61f12d86bf15754a927"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "56ed6dbfd1ff94a78d6581981746672a"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "0cafd2758549d340484d85e98ea572ba"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "c0ee8390bf7ebf00b491b12f357691a0"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "422ebc449663a1bdf85153d217990d6d"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "394c778374237e30f41744e60069752f"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "f8aa2c6c98fe2b5a9cc7466e753456dd"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "197e8c6c837c56b2f40e8e96b31adb75"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "9f817182145b936deee756b15c1c45ee"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "6c12eb3e3b35939f394e664da62a8ea3"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "3f493ed4f8b9e5c1cd639dbc3c41825c"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "c77474eba0fdb6dcbe760fc90033b6ef"
  },
  {
    "url": "img/Algolia_logo_bg-white.svg",
    "revision": "8e0e9838589ad42418fe5fa23fa7e9f1"
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
    "revision": "f09975ed11d38be8ab3eee575f2d3fcc"
  },
  {
    "url": "join/index.html",
    "revision": "f66350dc2dcca34fb8ef4af7a2d23523"
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
    "url": "js/data/android/data_android_animation1.js",
    "revision": "0d18530bb9c9967a70c6b9244248b001"
  },
  {
    "url": "js/data/android/data_android_full1.js",
    "revision": "5738824d20d44b19625e538acab49d47"
  },
  {
    "url": "js/data/android/get_android_data.js",
    "revision": "71e82d6e89ac891692b22a00790d583b"
  },
  {
    "url": "js/data/AndroidData.js",
    "revision": "f2ff3e71d1a98e024683e5e40096347e"
  },
  {
    "url": "js/data/Constant.js",
    "revision": "ecf85f471cd1894456c761ef3c922ad2"
  },
  {
    "url": "js/data/DataFactory.js",
    "revision": "a0d9d49ef3903b95f26e2fe86eb72206"
  },
  {
    "url": "js/data/flutter/data_flutter_full1.js",
    "revision": "6d81b04805fc663bb3b77555b2c32613"
  },
  {
    "url": "js/data/flutter/get_flutter_data.js",
    "revision": "3cc5dce2790aa2c384b5e60b297f2447"
  },
  {
    "url": "js/data/FlutterData.js",
    "revision": "63a9e73d1a30ca69bb564d739e9c7472"
  },
  {
    "url": "js/data/game/data_game_synthesize1.js",
    "revision": "adbd9babbe185c3572d99d939d728e3a"
  },
  {
    "url": "js/data/game/get_game_data.js",
    "revision": "9c4cf39cd67a459cda4fc1d893c13d1e"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "08d1eea8907396819cc714fa347e3e6c"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "462ea478690bc64e09ead671fb3b8749"
  },
  {
    "url": "js/data/ios/data_ios_full1.js",
    "revision": "a3ce9ddbcd90168dff141f4d1ba42f27"
  },
  {
    "url": "js/data/ios/get_ios_data.js",
    "revision": "c3a65247af62b1068eaf6e5a3f60c0fb"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "5c876a814382bb4b05487d6eab4a0527"
  },
  {
    "url": "js/data/tool/data_tool_synthesize1.js",
    "revision": "6a96f6d126ba867364c8df44c21a812b"
  },
  {
    "url": "js/data/tool/get_tool_data.js",
    "revision": "30f8db02025e811e83b4f2f5a59a0634"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "1776031778fa0e4607b6ad238cfc2693"
  },
  {
    "url": "js/data/vue/data_vue_full1.js",
    "revision": "75838da525fc02ee7276326f46e641c1"
  },
  {
    "url": "js/data/vue/get_vue_data.js",
    "revision": "947f253fe44dda6d2aac3beca3b4f50a"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "232ed3ee657f781f48d06e3e97b89340"
  },
  {
    "url": "js/data/website/data_website_css1.js",
    "revision": "221cbf36f9cfaa0974cbd86712729d86"
  },
  {
    "url": "js/data/website/data_website_hexo1.js",
    "revision": "dee8a7a62aa5e0585148f347153538c8"
  },
  {
    "url": "js/data/website/data_website_jekyll1.js",
    "revision": "ce3ab8f699f7382412ead348c50834fa"
  },
  {
    "url": "js/data/website/data_website_php1.js",
    "revision": "0ecdeedbc579c17582ff17f56cc14681"
  },
  {
    "url": "js/data/website/get_website_data.js",
    "revision": "38be6dad394191039f3f2e7935f388f3"
  },
  {
    "url": "js/utils.js",
    "revision": "0ba5bf653aa1b7063257a2b368bf469d"
  },
  {
    "url": "js/vconsole.min.js",
    "revision": "40fd7e9234606a341adcbb1ce0a15d51"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "da4d6d485b68e50c4471445c91693ee3"
  },
  {
    "url": "search/index.html",
    "revision": "db3add0a325328ca72c8ae6f1c7f1397"
  },
  {
    "url": "tool/all/index.html",
    "revision": "7f7d7d7efc8c87417394aedb3d76b3a7"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "202c38abf7f08fa4c06b372db5154fcc"
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
