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
    "revision": "de4daa34adffbb1274959757686684a3"
  },
  {
    "url": "assets/css/0.styles.a78335d8.css",
    "revision": "459486c1659395396e074b7378084a7e"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/Algolia_logo_bg-white.f309cbb8.svg",
    "revision": "f309cbb84b60cd71bee3f21e7f24162e"
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
    "url": "assets/js/10.9b14e4b1.js",
    "revision": "4df1cbbbc89ec1600dcb8ad792e91c63"
  },
  {
    "url": "assets/js/11.6bf3ab9c.js",
    "revision": "3ee79c28d1ec06160511b9ac288be5e1"
  },
  {
    "url": "assets/js/12.58843da5.js",
    "revision": "3e8becaeb5a4879b2e0942e78326530e"
  },
  {
    "url": "assets/js/13.904d1901.js",
    "revision": "24067fdabdc1034adc83b8a62e645528"
  },
  {
    "url": "assets/js/14.ee54f86a.js",
    "revision": "a43319c32c07151392cc2431816fe03e"
  },
  {
    "url": "assets/js/15.ae880709.js",
    "revision": "5ae8c123dda61da1f3100d8921b5051c"
  },
  {
    "url": "assets/js/16.10955ca1.js",
    "revision": "82c318c89ec8b5e905b3a4794e305056"
  },
  {
    "url": "assets/js/17.e9194800.js",
    "revision": "5eb00e75902327121bf462f10e9e0d4e"
  },
  {
    "url": "assets/js/18.504c4858.js",
    "revision": "c06286ccb6167905ec7fe587c87947d5"
  },
  {
    "url": "assets/js/19.8fd4cb59.js",
    "revision": "c86e1bee04fce3facead4c1291bcf2b4"
  },
  {
    "url": "assets/js/2.8d9dc8c0.js",
    "revision": "780089a2773246e5cb4e2c7f5126199f"
  },
  {
    "url": "assets/js/20.00ff0f20.js",
    "revision": "4b0e68108851f0f7e9eb7ff10d5ab026"
  },
  {
    "url": "assets/js/21.b5352905.js",
    "revision": "23af6d03253845edc8c4c96db4e89f22"
  },
  {
    "url": "assets/js/22.7c2eae29.js",
    "revision": "8263950f5909aa4d8944ff4bbf93cb63"
  },
  {
    "url": "assets/js/23.cab93898.js",
    "revision": "3ee0486d9da01344cfbb639c01e0aee7"
  },
  {
    "url": "assets/js/24.b3f3b2b4.js",
    "revision": "3bfb678551684c50f1abcfd9eafc762d"
  },
  {
    "url": "assets/js/25.579574e9.js",
    "revision": "ccc8e9cc8f19f560ac88f04585165430"
  },
  {
    "url": "assets/js/26.10103919.js",
    "revision": "280c9d7e60e69cb4378f1389563d9d26"
  },
  {
    "url": "assets/js/27.0366bb38.js",
    "revision": "25b49dfe34a1267533a9945363e811aa"
  },
  {
    "url": "assets/js/28.416721d9.js",
    "revision": "03db12a3cdd09ebd6abfcafd9a3649ea"
  },
  {
    "url": "assets/js/29.c515aaaf.js",
    "revision": "8da118a56cff3b066e710849f3eeb91a"
  },
  {
    "url": "assets/js/3.0f4cdac1.js",
    "revision": "a952385666f19fcd97ba334da0d82adf"
  },
  {
    "url": "assets/js/30.617d1f07.js",
    "revision": "52035b2c58c9df080e739ce955b8b27d"
  },
  {
    "url": "assets/js/31.e3ebdad2.js",
    "revision": "e217a1631ba187c171cc4155d69a0a81"
  },
  {
    "url": "assets/js/32.c905966e.js",
    "revision": "ec062656db4d333f2c0b25fe67803546"
  },
  {
    "url": "assets/js/33.76a25679.js",
    "revision": "e0ac476e3408a9f3a13cd40fe1d30731"
  },
  {
    "url": "assets/js/34.5af9f983.js",
    "revision": "1bb6defa4bd490710b790fbea310af5f"
  },
  {
    "url": "assets/js/35.803e5500.js",
    "revision": "513306617cd67bdbfa8e7a4f0a74b7dd"
  },
  {
    "url": "assets/js/36.d85ca285.js",
    "revision": "80d4caf3ea646a8a5b2c82087ed5fad9"
  },
  {
    "url": "assets/js/4.3ae734bd.js",
    "revision": "ce1aad8b54e596c00d7268aa33545408"
  },
  {
    "url": "assets/js/5.dda8ead7.js",
    "revision": "84c5cfa4fe357001c1bdf2fe273eb379"
  },
  {
    "url": "assets/js/6.2244749f.js",
    "revision": "ab5e952d0720511336812522378c9280"
  },
  {
    "url": "assets/js/7.635c5604.js",
    "revision": "711e596d17d4ae50f27980e311e5b97a"
  },
  {
    "url": "assets/js/8.bd2ebe20.js",
    "revision": "160d8f9f7e310c39d4b0db0f6a249b87"
  },
  {
    "url": "assets/js/9.920fc062.js",
    "revision": "cd162f963667c0b54e5e632df8b9c4cb"
  },
  {
    "url": "assets/js/app.a725e1d4.js",
    "revision": "018aa8250df3d27a4e44f53e1de21004"
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
    "revision": "93b8ed90e1c59def8e618ed171128836"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "005c06c7e0267d7cac072d37fd3ba114"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "e53410b10c994543c5426121aabdafa8"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "b03c92f647502059ee7f4ea46c24fecf"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "eada6216a683e0f1d27988d44a83b336"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "37d17ac1ffbc8e0fc677cb071d372893"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "589f0b616a280ff9236867ebea8b65da"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "40981b6a5477b7a1ad8d1100adccbf95"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "ff055f50049192b9ec055eff63d50308"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "01f94c710c0b6404a1408e84b3e05c5d"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "d444905edeae8894e5a9633427c6b753"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "481c9642db1592335d8d783ccbda7f45"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "44f3157b7fd907338f1e94717be44235"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "04cbc023b4146fbe0a98c8180a905c49"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "e9de97be4e25e4d05d8a82ec031bd83a"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "5fe60268d82a9205a43869509f4effa0"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "22efaa4473926494d78003b7fd5d51af"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "2deb862891a852f11bb268ac5ee6b1be"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "fc7fc22efcd53f375a4fc290a71e1c94"
  },
  {
    "url": "img/Algolia_logo_bg-white.svg",
    "revision": "f309cbb84b60cd71bee3f21e7f24162e"
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
    "revision": "cc3c9789239ffd37be19f59e7111eb7d"
  },
  {
    "url": "join/index.html",
    "revision": "da9aeaae0843ee1139c3f26b52ca69fe"
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
    "revision": "a03b6646236194579d6ea0e774b3ddb4"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "64e3825b6c51e41ad5cd36d5db2053d7"
  },
  {
    "url": "search/index.html",
    "revision": "b7fb4351db8fe55393ce1c5126d5d91f"
  },
  {
    "url": "tool/all/index.html",
    "revision": "bc3115b9b499776cd6eba9985ab5441b"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "aeaba0679d33022abf53f0238d0d787b"
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
