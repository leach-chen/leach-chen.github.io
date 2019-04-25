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
    "revision": "3f6038384215ba279dcc251596b68641"
  },
  {
    "url": "assets/css/0.styles.1a445c3c.css",
    "revision": "d023883253d8dc0a0a7813cf84eca4f2"
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
    "url": "assets/js/13.79ea6279.js",
    "revision": "4a4a1a307a3694ed704021af1e75bc77"
  },
  {
    "url": "assets/js/14.35bfc140.js",
    "revision": "9b0ca4e8d976b936a09dd463249538ad"
  },
  {
    "url": "assets/js/15.4d2bf5b4.js",
    "revision": "583a1c76f4c620f3687e34e3e4982fe7"
  },
  {
    "url": "assets/js/16.6312480e.js",
    "revision": "dd3c2d179123e622230198041cd9d5c8"
  },
  {
    "url": "assets/js/17.65dca5ec.js",
    "revision": "782ed2ca981affc0fdc4ee36190f9778"
  },
  {
    "url": "assets/js/18.6e501c80.js",
    "revision": "9ff2f27932584dcda76c5d331ad71ed9"
  },
  {
    "url": "assets/js/19.9febae5f.js",
    "revision": "607c56c848ccef6d9b7c75476ba69840"
  },
  {
    "url": "assets/js/2.315a9d71.js",
    "revision": "64e502acd4d96c3ea25c5ffdc172da4f"
  },
  {
    "url": "assets/js/20.01f36677.js",
    "revision": "b20fb90105da4c2cf9e6cc2ebcb2fa87"
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
    "url": "assets/js/24.88f6557f.js",
    "revision": "fcf8e2ed50915b61acc0e426a3dadb49"
  },
  {
    "url": "assets/js/25.4e1d86cd.js",
    "revision": "8817f858c95d0455167fa394ebed5fb4"
  },
  {
    "url": "assets/js/26.b18bb2f4.js",
    "revision": "dc437ce6ecedf7f1661bd8f10325c1c8"
  },
  {
    "url": "assets/js/27.64331a28.js",
    "revision": "c273ca1793d453ebdb9dcc941f7007f5"
  },
  {
    "url": "assets/js/28.5e497545.js",
    "revision": "9df5c0642d68a005b6cd7e7a800fdfa4"
  },
  {
    "url": "assets/js/29.578dcbb2.js",
    "revision": "fa58ed366663ef7fe3a89be873df7c75"
  },
  {
    "url": "assets/js/3.e4715728.js",
    "revision": "c7333d5dd71c6665369c4072598ad754"
  },
  {
    "url": "assets/js/30.1cbf0f7c.js",
    "revision": "f57dada7bebb2c1024b1c0fb9adc25f1"
  },
  {
    "url": "assets/js/31.cbc92e8f.js",
    "revision": "33c0363e880c848f31760c75690141c0"
  },
  {
    "url": "assets/js/32.f511c952.js",
    "revision": "59b4425dbfa52b327684b3bedcde8840"
  },
  {
    "url": "assets/js/33.2fa900c6.js",
    "revision": "b49481b50c8ab583da1274410d9685a2"
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
    "url": "assets/js/36.785e7fe1.js",
    "revision": "7e3772c094239e66a4c3c5bf00ed0ac2"
  },
  {
    "url": "assets/js/37.841f5f94.js",
    "revision": "19c39b21a8108c5703455d631fa23cf4"
  },
  {
    "url": "assets/js/38.ed3dda19.js",
    "revision": "94d702cdd1364a9f8622b3c5e28a511d"
  },
  {
    "url": "assets/js/39.a3884c65.js",
    "revision": "5bbcd085d9b148c3f7c1ce429e664755"
  },
  {
    "url": "assets/js/4.687f09cc.js",
    "revision": "f67cc0a7dafa4059322d00b07d0b500e"
  },
  {
    "url": "assets/js/40.f4dd8158.js",
    "revision": "c11b033d24498ceb38545d28c2290faa"
  },
  {
    "url": "assets/js/41.962f68c6.js",
    "revision": "d60343288531ba144f2a90ac75ba433a"
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
    "url": "assets/js/47.e000e2d1.js",
    "revision": "d54c653ef4d8f942e7816eba522f05e1"
  },
  {
    "url": "assets/js/48.62453735.js",
    "revision": "ef1cdfd4e0a1697fc4d8766e65f44f92"
  },
  {
    "url": "assets/js/49.19f95760.js",
    "revision": "7346d162aa4d9b837e6a5883b81ff611"
  },
  {
    "url": "assets/js/5.e23006ff.js",
    "revision": "ebf507b41f1957bf17e3988f50573042"
  },
  {
    "url": "assets/js/50.42f8f0ad.js",
    "revision": "360140376df4ae7ff6c5c073ee707ec1"
  },
  {
    "url": "assets/js/51.53c0e6c5.js",
    "revision": "88670cae3e496c97e6909cc5ecaa9cef"
  },
  {
    "url": "assets/js/52.6fff3526.js",
    "revision": "75a1917073ef29b6ad739a37f6cb501d"
  },
  {
    "url": "assets/js/53.cf933c7d.js",
    "revision": "a2e8f951cb25a1bafce7707d3d5222e4"
  },
  {
    "url": "assets/js/6.b0f40357.js",
    "revision": "f57348d15e903a315a98de1d5502a5fa"
  },
  {
    "url": "assets/js/7.7624cd85.js",
    "revision": "1c9dedefb71fafda3424d81d2a1ccc76"
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
    "url": "assets/js/app.3912a8d7.js",
    "revision": "ce7019374d5600c36615f2619a18ab1d"
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
    "revision": "2eeee7f1a9e1fbcdc595d7e86b3c5f1b"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "63de5f516c2c0edd0895159d4729e6b9"
  },
  {
    "url": "game/risk/index.html",
    "revision": "ddd6e105663608bac6adaa48e7a64160"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "9b3809e3b6bd5c1a342f4586cc844f3f"
  },
  {
    "url": "game/smart/index.html",
    "revision": "0afafa9a89de7410e77a917d316d4f15"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "fb091919f69c4d0a9c22acf198651ed4"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "5b63451bd6b5d76ded639ffb6cb0fb7b"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "5efc5aae196bbad5ea4456cc1f1e12a4"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "8b4869cac50ea18078ce4c6ffd9e80f5"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "032080a7bba817335bda47278ac904b6"
  },
  {
    "url": "github/android/media/index.html",
    "revision": "853fb1ce74b6c4b588aae150aebafaa3"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "9eac991bcb23a406348198e770907d79"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "8cb2202b3ed799afab01241ca5fc03c0"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "44b64b9bfc3c3c189d8ade95ed83a6a5"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "72e39b958f13265953f3d4e771b706a8"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "0ddf4eb06de82cfb30ce289f74b54240"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "f316c4af29a8cadefca4f820b28323ae"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "197911da871b0a150680e45286056fcb"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "0422fc2160d0330f5f75f8599953767b"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "be4fefd8052a5a2b514ad314698ca63f"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "74ce191a95423e45c0fc841f8a6c3965"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "ea54c698d6f4cdd7f333804365f59323"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "9cebae808d32355fa4c16f0fba21b30a"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "197564ab66c36efd1cb022f14562009b"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "09d86d1f3246aa03f7871bc12e68b268"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "2e3fb2a60d85c96e788354d9a880b184"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "4024357044ade24156d625e9efff31c3"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "6fda602133da0f70363d0095affec869"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "3aa6e370524a250afcdb69e535144cc8"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "fffa7963d8eae0635b4041f0b3d9056e"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "ab9c196d81d28ecfef579828eb8e0097"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "6f56151906af1754c62d1ad0c0a12d29"
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
    "url": "img/yanhua.jpg",
    "revision": "d5507315681a654c8f1f5f00daf87783"
  },
  {
    "url": "index.html",
    "revision": "df9067e083855a4c62a5d5560063d09c"
  },
  {
    "url": "join/index.html",
    "revision": "7a026693520c1229eb9d2d33c8888b8b"
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
    "revision": "40fd7e9234606a341adcbb1ce0a15d51"
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
    "revision": "c9cef876987d8e298466f29604d2e8ff"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "ca4899b1b113c9c65b3b1779795d38b6"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "3a37bc01ccfa0492d09fff8273304911"
  },
  {
    "url": "search/index.html",
    "revision": "dfbfb868436b9006a33bfb7be9ec612f"
  },
  {
    "url": "tool/all/index.html",
    "revision": "72ac551302a6ae24d587d47b7f4ef14b"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "2fdf8371efa42258c782f9e74cbc97b8"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "5d68d1e442bbb710902f3ef2e5131a16"
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
