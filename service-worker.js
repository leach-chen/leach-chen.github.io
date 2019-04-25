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
    "revision": "997c32f81d4fe072a4c04f65605e7156"
  },
  {
    "url": "assets/css/0.styles.91249fc8.css",
    "revision": "5919df7cf3560bf45b736f80e0fa0c49"
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
    "url": "assets/img/yanhua.d5507315.jpg",
    "revision": "d5507315681a654c8f1f5f00daf87783"
  },
  {
    "url": "assets/js/10.edfd794b.js",
    "revision": "505173527faca656c5ffe172289b505b"
  },
  {
    "url": "assets/js/11.29d5601a.js",
    "revision": "a7b38c3bb9244b8ce895db7c148b388d"
  },
  {
    "url": "assets/js/12.a4e36885.js",
    "revision": "bbba7d2cad8e66c1eb52f0a4215c15ca"
  },
  {
    "url": "assets/js/13.4af216b3.js",
    "revision": "0e1e63ff91ed2292a7c5344a91363019"
  },
  {
    "url": "assets/js/14.83de3d91.js",
    "revision": "3cc23500bf01a7edd45b0d43bdc983f4"
  },
  {
    "url": "assets/js/15.aac1da24.js",
    "revision": "cb98079cfb5c1d9c4138c725abb5e541"
  },
  {
    "url": "assets/js/16.6312480e.js",
    "revision": "dd3c2d179123e622230198041cd9d5c8"
  },
  {
    "url": "assets/js/17.6746389d.js",
    "revision": "837605640f2a03b78930cac68fa1f1f7"
  },
  {
    "url": "assets/js/18.6de55415.js",
    "revision": "4c4900585f5f5610afb1cf0d3fb6764c"
  },
  {
    "url": "assets/js/19.f9b13e31.js",
    "revision": "dc569497a97b484221cc94d9387a7529"
  },
  {
    "url": "assets/js/2.1d7fe64d.js",
    "revision": "64642e2d43aa5d8a695c3521c5e937af"
  },
  {
    "url": "assets/js/20.1f28b101.js",
    "revision": "9a5f387f903c7486f747c3d6b1e099c4"
  },
  {
    "url": "assets/js/21.712ee028.js",
    "revision": "f096bbb808924348eb307aaaf8930f77"
  },
  {
    "url": "assets/js/22.bdaeb62a.js",
    "revision": "90a1a288c6552dd426e7b263557dd354"
  },
  {
    "url": "assets/js/23.3a9014b2.js",
    "revision": "556f0b3fbe6626a8a7c621b64b65ffdc"
  },
  {
    "url": "assets/js/24.ea2ff8e6.js",
    "revision": "e8812a6a16bcfb36e38c1e4e39bc93ae"
  },
  {
    "url": "assets/js/25.0684aac4.js",
    "revision": "d31b20576df8ed5f035de0dcdd4b4ae6"
  },
  {
    "url": "assets/js/26.6760456c.js",
    "revision": "ae604b0b1cb2d5f102e8b4c5cb7dc90e"
  },
  {
    "url": "assets/js/27.64331a28.js",
    "revision": "c273ca1793d453ebdb9dcc941f7007f5"
  },
  {
    "url": "assets/js/28.57ff496b.js",
    "revision": "b5dafdc68d340fc3f5968c9533d2a0cf"
  },
  {
    "url": "assets/js/29.578dcbb2.js",
    "revision": "fa58ed366663ef7fe3a89be873df7c75"
  },
  {
    "url": "assets/js/3.3fc1d0fb.js",
    "revision": "b0ae445ef4cfdc695f1704ca6ae3eb0c"
  },
  {
    "url": "assets/js/30.c635a213.js",
    "revision": "bb90445dde1f9cdb822a55b559deba1a"
  },
  {
    "url": "assets/js/31.c9296c4b.js",
    "revision": "f55d9b9ed6c3d39cd1f7e9d75e48b36a"
  },
  {
    "url": "assets/js/32.f511c952.js",
    "revision": "59b4425dbfa52b327684b3bedcde8840"
  },
  {
    "url": "assets/js/33.6c741d67.js",
    "revision": "8ab0d83e2f481dc0e4a75b0b1b90d9f8"
  },
  {
    "url": "assets/js/34.436a7ce3.js",
    "revision": "dcea758bc1efce0a375a439d71b7150b"
  },
  {
    "url": "assets/js/35.8915c179.js",
    "revision": "0e2d49608b8af6afcbd043f3cdcd96a2"
  },
  {
    "url": "assets/js/36.b35ae3f9.js",
    "revision": "079b696fd353c418452ff106d5dcbcad"
  },
  {
    "url": "assets/js/37.9a7b6fd8.js",
    "revision": "16463c61bacd8f716ed50efb2f81beb7"
  },
  {
    "url": "assets/js/38.d558d485.js",
    "revision": "9aa74cd62307e36cf4e36971fd8d1001"
  },
  {
    "url": "assets/js/39.845838e3.js",
    "revision": "002532c8b4bdbd142120b1d28d07d63e"
  },
  {
    "url": "assets/js/4.897a2e3e.js",
    "revision": "03af7f7a0cbde2bf009c2aef292f8b5f"
  },
  {
    "url": "assets/js/40.40f7a757.js",
    "revision": "c407cc989fb5efffdc9afced4e2ee81f"
  },
  {
    "url": "assets/js/41.55fa7cf8.js",
    "revision": "7e58f25b59e8b905f5a6542222c830a9"
  },
  {
    "url": "assets/js/42.ea25da49.js",
    "revision": "7c1d15066b58a55005edb436b93e62da"
  },
  {
    "url": "assets/js/43.aac61019.js",
    "revision": "d4a2eeede94d4ddb22a45023dc318135"
  },
  {
    "url": "assets/js/44.212c5821.js",
    "revision": "ce23554f7986ba6a75d4df4e28f56c9b"
  },
  {
    "url": "assets/js/45.696c6702.js",
    "revision": "36306617387be60c9b256c80b5445d7e"
  },
  {
    "url": "assets/js/46.c2efd7f5.js",
    "revision": "b76c2ac792d1335536c23acf31638a08"
  },
  {
    "url": "assets/js/47.a104c3d4.js",
    "revision": "779a3a1588c82fa2d07901d890884b9d"
  },
  {
    "url": "assets/js/48.6c8096c1.js",
    "revision": "a6cb425a2fce62d040dc2cba53e3e6ef"
  },
  {
    "url": "assets/js/49.d3e59df0.js",
    "revision": "c8394fb59abdb091e1caab9e26766830"
  },
  {
    "url": "assets/js/5.803d7ee2.js",
    "revision": "8831168fe5d6e64fcab39bb9098af883"
  },
  {
    "url": "assets/js/50.d5976859.js",
    "revision": "94238d06fe115c4ec261871278d3e302"
  },
  {
    "url": "assets/js/51.05c38e59.js",
    "revision": "374922acc7f2916ed862e7546067af7a"
  },
  {
    "url": "assets/js/52.9899c62f.js",
    "revision": "8d8a8564e0800adfee387831027ac0ef"
  },
  {
    "url": "assets/js/53.cf933c7d.js",
    "revision": "a2e8f951cb25a1bafce7707d3d5222e4"
  },
  {
    "url": "assets/js/6.404e5509.js",
    "revision": "0d2478917d3bc16010faec71c4192602"
  },
  {
    "url": "assets/js/7.89de1bf1.js",
    "revision": "da1d4f1d7af2c9d86ce540ec23dff0ee"
  },
  {
    "url": "assets/js/8.e5a13aed.js",
    "revision": "32f7a82cac89eccc09af01be08f156ec"
  },
  {
    "url": "assets/js/9.9f226452.js",
    "revision": "140f3b88a0af516b5ad7d97161af2304"
  },
  {
    "url": "assets/js/app.b4a6de13.js",
    "revision": "b809a18849aa0a650a64f09acf38d92a"
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
    "revision": "3fc48fa236e34333caafb65bf6d0698c"
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
    "revision": "3b6ab36b857a2148175f50eebc529c92"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "9ffe1149b01b7b05f5f2df89c5dccad8"
  },
  {
    "url": "game/risk/index.html",
    "revision": "fd5560b9a45de5ab38b75aef02e5379f"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "0170984497fab5c6f3bd4b6ea95654e5"
  },
  {
    "url": "game/smart/index.html",
    "revision": "24479b7e1fe42c529537ba930e1c7085"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "399d6ffc1d96eb5dde373123daac8910"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "68f07236b5a4ea99097de26eae305855"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "a696334a1dbebb664183526a1f1ae6b9"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "7c165dcb3f97de2ed419b49d59050bb3"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "a83d2833cde03bf1afe8be4389eafa68"
  },
  {
    "url": "github/android/media/index.html",
    "revision": "423b492ac8b75ef2c717f02ce2034efc"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "769b6a08bff195934f98cb5becf25b0f"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "28af2304556987c3b3e6f6bcfef9bd4e"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "4361d00abb2d789a1282fce6c73e55d1"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "1028d3ebeb2d6db26deded905f89acd6"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "40d2bd4ea011a7fb881bc29a9649140b"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "533793567c55ae15ab196f51a9dfa5f7"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "dceb2f1b392a94036005c18d4b996775"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "30f6ee79944ac3196fabaf6fc2377e7d"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "3555d475c72c550d906781e76f1834a5"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "570a57dca08fbfcc5b7ee4974ddc66a1"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "13d985b5b69d43d0dbfb143ed9d94213"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "f06897899c0475a7d82e85f01ffe9234"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "a1b232d9d224d101f911a182ddf8734b"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "a222525059e10b2ad77a41cfe8cfbdd1"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "642661455e68e35585b96b0b5a860b1e"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "ca0c01467503ee531b1c5a46bcacb73a"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "476fec2b6b8c438f4085768067c769cf"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "6e3c3318fee7bd4996b806325a4036f8"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "41f99122f330d8f653ccc8e308156756"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "f84266bded7a94c47a8862fbedf2d4ef"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "bf6f911e432c0eaaa5be046840bfb8a6"
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
    "url": "img/yanhua.jpg",
    "revision": "d5507315681a654c8f1f5f00daf87783"
  },
  {
    "url": "index.html",
    "revision": "d51f0e8339d19e63c119302edc7c0bbd"
  },
  {
    "url": "join/index.html",
    "revision": "3e523f1ad12df7e3e19bb87fff59fffa"
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
    "revision": "e8a1846517c9c585f8c6e40e4a20c1ef"
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
    "url": "js/yanhua.js",
    "revision": "fdd80010fb22905b481693978455de20"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "9f15f27bebcbddf562d00c65b14b4e8e"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "202ad45093898bda49bf61d14ea8454d"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "e900b4d92ba3c9028d0a896fd81bc280"
  },
  {
    "url": "search/index.html",
    "revision": "21a63e8a60c40cdf177ee4f15d646aef"
  },
  {
    "url": "tool/all/index.html",
    "revision": "e42629e24a29f529627663673fce1c58"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "1562a59a1b19412c2c5b2172b856ecff"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "aa60a61cec3fe37e93c494f18f2399d1"
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
