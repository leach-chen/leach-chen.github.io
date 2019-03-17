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
    "revision": "2a76d8b9ab5802e80a626a0e209d126c"
  },
  {
    "url": "assets/css/0.styles.80d890ee.css",
    "revision": "0057ae0b1d350bf101b42846b9eb909d"
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
    "url": "assets/js/10.e9057c9c.js",
    "revision": "cc0a154039823d169b3234a67e21f581"
  },
  {
    "url": "assets/js/11.97a23b55.js",
    "revision": "85dfaa58d2fb3871a797f4c48f6729e2"
  },
  {
    "url": "assets/js/12.4912bb62.js",
    "revision": "7e32fe020b7659f50d0e2e82e0b8f7ba"
  },
  {
    "url": "assets/js/13.adabb36f.js",
    "revision": "aa7fe307430e11857e893baa73497052"
  },
  {
    "url": "assets/js/14.46d5fdca.js",
    "revision": "fd7044087d83704ad9b985ae28a2890d"
  },
  {
    "url": "assets/js/15.01a69f02.js",
    "revision": "e00cefbd9303771880337a90a6acb069"
  },
  {
    "url": "assets/js/16.dacca596.js",
    "revision": "34d27223fc97237faefd34ec1dfb1ce9"
  },
  {
    "url": "assets/js/17.a860e0ec.js",
    "revision": "3b94658b9b44bd6f0054ea0fef354c3e"
  },
  {
    "url": "assets/js/18.4bd55ccc.js",
    "revision": "9f2b7b37b72fc9cc467c7a932533d4d0"
  },
  {
    "url": "assets/js/19.983c30f8.js",
    "revision": "e9fec47a45c18f8a439b65005c4c059d"
  },
  {
    "url": "assets/js/2.d2c89a87.js",
    "revision": "236bfed0c329c9a5a982795cef27afa4"
  },
  {
    "url": "assets/js/20.dcfc4483.js",
    "revision": "cb68fef05a4e4c6d47229939331b96b1"
  },
  {
    "url": "assets/js/21.41d339c1.js",
    "revision": "30b49aec578b26170b4d14ae9e274a4b"
  },
  {
    "url": "assets/js/22.b3f66bf8.js",
    "revision": "99049c19a27b01de0d0d1b204d75352d"
  },
  {
    "url": "assets/js/23.777f6eef.js",
    "revision": "d215d8cc9f2195f5a920c9cb093f1ffc"
  },
  {
    "url": "assets/js/24.b3f3b2b4.js",
    "revision": "3bfb678551684c50f1abcfd9eafc762d"
  },
  {
    "url": "assets/js/25.19824cef.js",
    "revision": "eee40a6475ed286b6fab8bf526af3b33"
  },
  {
    "url": "assets/js/26.51cfb0a6.js",
    "revision": "3f3f8faa3a135568a3ec11a0d0c25875"
  },
  {
    "url": "assets/js/27.4201b15f.js",
    "revision": "651d50fbc7aeff1c4e71e7a08c9b68a4"
  },
  {
    "url": "assets/js/28.3c7ee99a.js",
    "revision": "865a0f77e590bf1f5b5e900a87202a2e"
  },
  {
    "url": "assets/js/29.d4e91db0.js",
    "revision": "0ecc35bbb9bbf5fadae3ffad49dcf5f9"
  },
  {
    "url": "assets/js/3.87573312.js",
    "revision": "8532e0046329332b57a4b7ed0d1ecc94"
  },
  {
    "url": "assets/js/30.8a892d1b.js",
    "revision": "b8ff69aec9f23ebc0013bcf44f3f3a45"
  },
  {
    "url": "assets/js/31.01388ff0.js",
    "revision": "e1d9ae8efc759412fb6773458b983a19"
  },
  {
    "url": "assets/js/32.7a6fb4c8.js",
    "revision": "eb27f8e34aef0aa976dac157c25a567b"
  },
  {
    "url": "assets/js/33.5ccacd36.js",
    "revision": "8fd6f8801c8a8918eae7e8af9663c896"
  },
  {
    "url": "assets/js/34.5748ac98.js",
    "revision": "8e4ce39f73de4f602bf1b84aa9d4c8c4"
  },
  {
    "url": "assets/js/35.93e8718c.js",
    "revision": "2759a5a0a93f8613c0542d86fb69ae7d"
  },
  {
    "url": "assets/js/36.d85ca285.js",
    "revision": "80d4caf3ea646a8a5b2c82087ed5fad9"
  },
  {
    "url": "assets/js/4.4e6b2aba.js",
    "revision": "2daa52e22968c0d4e45de4797d5c783a"
  },
  {
    "url": "assets/js/5.5eed2eaa.js",
    "revision": "3690b44211e494b085aff5fc0f1a09da"
  },
  {
    "url": "assets/js/6.9da6a74c.js",
    "revision": "e3f3c4a0e1677d5d768fd94d08b94fce"
  },
  {
    "url": "assets/js/7.269baccc.js",
    "revision": "04c6d3d63d0115f385b7e53eae10b9ef"
  },
  {
    "url": "assets/js/8.ba3f0c76.js",
    "revision": "445ebd0718a8968aa1d41c9b6e3bc9ec"
  },
  {
    "url": "assets/js/9.a3f2da80.js",
    "revision": "3ba7f1ec20f76cfa112cc219c2b1c0bd"
  },
  {
    "url": "assets/js/app.1774f762.js",
    "revision": "b76c3c8fd030098eaabcd62fcc9b16c4"
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
    "revision": "633365aa960189884754856b7de03521"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "8a95b8c26d3a4de4fd7279b971c227b0"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "37add76806a82d8bdc754113acf911fa"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "cc9ae9b7617705e72e9f0cc47a0c139c"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "79d2465bfaa83b3153cd96abac8bc9d7"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "91d3225acb0222e85fe1dc94e7187143"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "f964cf4a8a359cbac03cf3d7ca79ca3e"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "2d5eb17d162e008fe08489fbc35be992"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "3a9c86923a49e7b0ab57442156964177"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "c3c354f1142a68a18e9c397749c54b77"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "23a9539e46ea2efbe59b7a341747c408"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "530fedc300032fe13af8949cc315d391"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "b5915aeccacd9d8e453ccd2065c39585"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "ee040ce00843549d647d8a6693090a08"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "8dbd3e382c1817300a0ef6e066555ebb"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "9030f416d325a2249aea29d99bddda0f"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "2586f41b909eb32c3022709fa8b8fa8a"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "d49e6b271724d5cb3d56f70209a0375d"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "f16428d6819232b23fdd278c63a9c0f8"
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
    "revision": "40706feedd88aae13ad82b0f35eafd8a"
  },
  {
    "url": "join/index.html",
    "revision": "06c5dd4b823e49705dee4d71705c9945"
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
    "revision": "2aa26a76fad970a841271956bfe98614"
  },
  {
    "url": "search/index.html",
    "revision": "43e8173de8c61f721d4723b452c6abd0"
  },
  {
    "url": "tool/all/index.html",
    "revision": "e29382cb3e9d6306828564cf9b607eaf"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "6707148fa66c23f5ebc4d6be71bac119"
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
