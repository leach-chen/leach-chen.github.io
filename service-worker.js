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
    "revision": "b5b9f1287a7cd922c735607145a329e9"
  },
  {
    "url": "assets/css/0.styles.85404c91.css",
    "revision": "1550071ee2a49d2be01f632ab4cd57d9"
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
    "url": "assets/js/11.5774e2ef.js",
    "revision": "ef5eb21936b97d5dfa98a35a7adeca94"
  },
  {
    "url": "assets/js/12.f6dc20e5.js",
    "revision": "5401b8258a8a648aeddabaaea6eb4c87"
  },
  {
    "url": "assets/js/13.347fbe92.js",
    "revision": "8bb1b07765c9661381e806343d65caa6"
  },
  {
    "url": "assets/js/14.454ceb99.js",
    "revision": "fecbd48af7677411c708e91d7fe66387"
  },
  {
    "url": "assets/js/15.e23c6830.js",
    "revision": "dc46b5a26ba673f438277d6ed3cc74d0"
  },
  {
    "url": "assets/js/16.c64b1f7e.js",
    "revision": "413dfbacf7bf241e4a74936fc799ef33"
  },
  {
    "url": "assets/js/17.e39572cf.js",
    "revision": "89b2e9dffa61cc60af90f0e5191d6eef"
  },
  {
    "url": "assets/js/18.b215cfba.js",
    "revision": "247e5f05684c24e449c7d18bc6bec590"
  },
  {
    "url": "assets/js/19.777e0399.js",
    "revision": "09c903b884a09be8ba1261fa692c9402"
  },
  {
    "url": "assets/js/2.315a9d71.js",
    "revision": "64e502acd4d96c3ea25c5ffdc172da4f"
  },
  {
    "url": "assets/js/20.ee1d4361.js",
    "revision": "bf9b2f7166b1ca169c0f4ce762b36a16"
  },
  {
    "url": "assets/js/21.a839f483.js",
    "revision": "33b4dfdd78c6e957313418ac076d326d"
  },
  {
    "url": "assets/js/22.d8d2dfa5.js",
    "revision": "12ccd2a3e737756a5236d8178f09ae21"
  },
  {
    "url": "assets/js/23.93bbe4d3.js",
    "revision": "f3ca4c5b3b1810cc2613bcf0fa2e11fb"
  },
  {
    "url": "assets/js/24.9c9e92cb.js",
    "revision": "ae19f6900aaf1522ff12eda21f6e1a71"
  },
  {
    "url": "assets/js/25.21abf5d1.js",
    "revision": "772045f5c91004ef786773945e464ae5"
  },
  {
    "url": "assets/js/26.0b9396e6.js",
    "revision": "fe130d67367c354df6bf8d3f058c892e"
  },
  {
    "url": "assets/js/27.ea761b29.js",
    "revision": "fd4de7b571704ebb7c82ce0e8f977ac6"
  },
  {
    "url": "assets/js/28.f5242c01.js",
    "revision": "693cb8593726eb29e4a152cf186a3ede"
  },
  {
    "url": "assets/js/29.ac25c637.js",
    "revision": "286b53e0c5f1e08f811b0606112d5af6"
  },
  {
    "url": "assets/js/3.42ff2efc.js",
    "revision": "2df53756b887f6d5e6f8be4e3305ea73"
  },
  {
    "url": "assets/js/30.29b23c7e.js",
    "revision": "a499d9c1aa4782cbf1304f764d89ba8f"
  },
  {
    "url": "assets/js/31.f23a6037.js",
    "revision": "a245e0894ce5e65e7afe108834b43d35"
  },
  {
    "url": "assets/js/32.a7b76b76.js",
    "revision": "7cda5b5676a62929d8cb13d1d6d39b12"
  },
  {
    "url": "assets/js/33.2296810d.js",
    "revision": "a3f37b64f361380ae201e0035f28dd58"
  },
  {
    "url": "assets/js/34.3fac6f68.js",
    "revision": "2469ff9e718bab3b72290ce2f135be36"
  },
  {
    "url": "assets/js/35.a2aa174a.js",
    "revision": "e6559f952c02fd76ae66051994736d1e"
  },
  {
    "url": "assets/js/36.5a934664.js",
    "revision": "85d095ab8abff6601337f8cae7795e83"
  },
  {
    "url": "assets/js/37.2ebccaa0.js",
    "revision": "b593999a3ee4e4b7af9500354f1a49fc"
  },
  {
    "url": "assets/js/38.a8114b71.js",
    "revision": "af898c1d94eda45975db4c29bd8b810f"
  },
  {
    "url": "assets/js/39.4a0cc734.js",
    "revision": "b71161d318004f55cd48399f174c86c0"
  },
  {
    "url": "assets/js/4.687f09cc.js",
    "revision": "f67cc0a7dafa4059322d00b07d0b500e"
  },
  {
    "url": "assets/js/40.d9162a7f.js",
    "revision": "8323ed6377e9b7485d2ac73997f43f5b"
  },
  {
    "url": "assets/js/41.9774a33f.js",
    "revision": "3e0259db73b2610970e97380099fe0bc"
  },
  {
    "url": "assets/js/42.c4d6910e.js",
    "revision": "98edc4ebea3353041163a87bb8826429"
  },
  {
    "url": "assets/js/43.30344d90.js",
    "revision": "093858ec52beb3e638f8db14e8e879b0"
  },
  {
    "url": "assets/js/44.1f6ed373.js",
    "revision": "2df9a5d3965ad89af3e96448d1f5ff66"
  },
  {
    "url": "assets/js/45.9b4cab9d.js",
    "revision": "ecbcb6d8769aac96a1db6eec00a2a3d6"
  },
  {
    "url": "assets/js/46.373d4bed.js",
    "revision": "0a24398d4e3592d1033ea650b370b100"
  },
  {
    "url": "assets/js/47.3c0cffb3.js",
    "revision": "417f9f40352cd9e704b7ada07bc84673"
  },
  {
    "url": "assets/js/48.705b5291.js",
    "revision": "38b323dd7a289e43157d9bcc9994d538"
  },
  {
    "url": "assets/js/49.b56e4add.js",
    "revision": "ea8f12250246f2506de2a6f9eb9515ae"
  },
  {
    "url": "assets/js/5.e4b214eb.js",
    "revision": "5c3a9436a13a786542626b2b315a6aeb"
  },
  {
    "url": "assets/js/50.4ab9697f.js",
    "revision": "ad96770b8e79a2a868604900aad6c27d"
  },
  {
    "url": "assets/js/6.41e7e10c.js",
    "revision": "f16ab83d93009cdc9ad2c1a742d3b2a8"
  },
  {
    "url": "assets/js/7.7dd6a891.js",
    "revision": "41a42caf6a578244dfc572429bdc454a"
  },
  {
    "url": "assets/js/8.6821b785.js",
    "revision": "478a3dbb1942a126457db37e14a2a366"
  },
  {
    "url": "assets/js/9.04140810.js",
    "revision": "668353569b76d3357647ecc455aaecb8"
  },
  {
    "url": "assets/js/app.360f6d34.js",
    "revision": "06627e624bac83dcaefc5d14966c1dc8"
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
    "revision": "665a13b68b8052d1f5560cb7b1b24604"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "f429e812eabaccfde0f4d280e25fa4e0"
  },
  {
    "url": "game/risk/index.html",
    "revision": "b1b5fbbed235332c038efc3d2567b956"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "df7633c575e9176bd40f61357fd9b4d3"
  },
  {
    "url": "game/smart/index.html",
    "revision": "aace12a1821589ac3ef46c3342495276"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "46aeb2dacb23f8d3d37f21672b0e6234"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "47ffa24908732ebe99457e5892de5e81"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "471e305f0168e7dd05ea9f34bc0a284f"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "f9559f0789ac641524a07559b8182ec5"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "0fca894d49324a1aaacd9eb0a2de22fe"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "5fe058d702a4a2894b3b89ed51d5cd3e"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "f97259a39c15770346da212b7b886e53"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "2f504358bf3fc7b973428c2ce71523ab"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "1ded9fbe8e41d7513c27a66e7b21c668"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "61bc33caa92f7956ba22754a64b0d288"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "52ef816d6729e52eb4ad7bc6c0e58c4e"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "fb85bcffb709af50b3ad8fe1a70e96ea"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "b5920d34ee681022100aca93d0529c1e"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "ba88719016898ad1b3d28f149afae57f"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "d0ec85b3f744e161dcfdbbdb7093e7e7"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "8698f058a4ee0db12acd9a75f690dea2"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "e2ee680828c582ffe80496538744d8ed"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "507beb631d569f9ce024f1ca95c24649"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "832115e0c145df96007bf887947c84d4"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "c0d807ecae6637db58eb7e50eb49dc6b"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "52d1712568b001940420dbdae094ba62"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "e4d60d7cf98902e93d3f0932dc18503c"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "9c8c36add8f47b4c4f4dc09d83655f17"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "309abb9c5147fb7c5c66c3d5a1eea772"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "258e3c9c39af821e81a23e1c5da7339a"
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
    "revision": "380c26c64cb7e067b85cba390e838c82"
  },
  {
    "url": "join/index.html",
    "revision": "af7f6ec05dd2dcb336663eac74377b88"
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
    "revision": "9b368e8b7ce97050fbd8a749a90237fc"
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
    "revision": "ae2ea4850600919fb0453a923d7c3bb1"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "793d50ef70b6886fd29dea691d22df5c"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "3b54d88e9e2b6034d90242749e841b07"
  },
  {
    "url": "search/index.html",
    "revision": "7eac75c77e12f39c17570fec0f16ca2c"
  },
  {
    "url": "tool/all/index.html",
    "revision": "a159860a22abecc2507db410ac408f9c"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "086673ac92dc880bd2d61f685ed35ef7"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "ffdcc4b29d2aefd16a915d5e51101ec0"
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
