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
    "revision": "5d48b1344235c8609b33c55a02289812"
  },
  {
    "url": "assets/css/0.styles.9456aaba.css",
    "revision": "ea08a3c0b607558f02e84216bcc594ee"
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
    "url": "assets/js/10.97a8340f.js",
    "revision": "2b250048a4b6f94f5fdcc9bcd06b48d0"
  },
  {
    "url": "assets/js/11.c2d3af8a.js",
    "revision": "4b624a22db6358a7e055fae17dbd5abc"
  },
  {
    "url": "assets/js/12.6930e5f3.js",
    "revision": "624ac49fa7db3c240a06ac55a69d1e5d"
  },
  {
    "url": "assets/js/13.82de8b4b.js",
    "revision": "e93ecffdc56df4cfaf99d8b878e83b8e"
  },
  {
    "url": "assets/js/14.8c0e460e.js",
    "revision": "7f18a05877a82bd734488092127fe1d5"
  },
  {
    "url": "assets/js/15.936b822c.js",
    "revision": "6900ae02252aabf901892446af814c26"
  },
  {
    "url": "assets/js/16.e02ae672.js",
    "revision": "299ea34b20b46d2316aed4fa1152a4a5"
  },
  {
    "url": "assets/js/17.06b84e5d.js",
    "revision": "8f62c61c2850e1509fd4bd960319c135"
  },
  {
    "url": "assets/js/18.dd92dfd2.js",
    "revision": "6500c55f93fb5d80f616804a4ce2a620"
  },
  {
    "url": "assets/js/19.fa528494.js",
    "revision": "80bf442c4515a55353e9da73335e15db"
  },
  {
    "url": "assets/js/2.ba1c4282.js",
    "revision": "b9747f129c5230a7c36d6f22011e1b39"
  },
  {
    "url": "assets/js/20.3749ffd7.js",
    "revision": "f174438531611564b3844414d04d4e0d"
  },
  {
    "url": "assets/js/21.963aec48.js",
    "revision": "0b4e3d066fb47cd4f7efbf1de77f4cc8"
  },
  {
    "url": "assets/js/22.8ff23be6.js",
    "revision": "913b74c90fe89fb11cc57ad483f49b04"
  },
  {
    "url": "assets/js/23.c067eabb.js",
    "revision": "34ba9bf0f88796aaf07298e5c9ba1beb"
  },
  {
    "url": "assets/js/24.9957fbc3.js",
    "revision": "defec89f4b5bc442dd4390cd820a19c9"
  },
  {
    "url": "assets/js/25.b2422e78.js",
    "revision": "bc4a56726a0ff51174a0704fdb45ccc4"
  },
  {
    "url": "assets/js/26.8c4a046f.js",
    "revision": "f91f96b23e8924c578df653f4d87da09"
  },
  {
    "url": "assets/js/27.54024229.js",
    "revision": "5a008fcbda2c4ca3ef828e56d65adca7"
  },
  {
    "url": "assets/js/28.be53f588.js",
    "revision": "9a388f39c22d19ba85851fb79673bb75"
  },
  {
    "url": "assets/js/29.6f619d8a.js",
    "revision": "494dabb4253967d67075e1b17e6490fd"
  },
  {
    "url": "assets/js/3.60337fff.js",
    "revision": "7f6ed63e2bf49ad2a30f2b002b6492be"
  },
  {
    "url": "assets/js/30.8beb3ad1.js",
    "revision": "49308bdbe18130ccd6cc315200484b8d"
  },
  {
    "url": "assets/js/31.df100920.js",
    "revision": "0deb61cc75859e781a2978990af3b60c"
  },
  {
    "url": "assets/js/32.af9534eb.js",
    "revision": "16fbc0e88bc68c57735de59ef323d34a"
  },
  {
    "url": "assets/js/33.aadb1664.js",
    "revision": "43e8044456339829053c5bbfd95d6958"
  },
  {
    "url": "assets/js/34.4aa1034d.js",
    "revision": "59343539fda2c16ad68db0847d1a25b1"
  },
  {
    "url": "assets/js/35.11ab4ce1.js",
    "revision": "d59c3e5936469608c703beee54fc8f61"
  },
  {
    "url": "assets/js/36.d4b13597.js",
    "revision": "969360313b8a861a00a7243bdd3d14c4"
  },
  {
    "url": "assets/js/37.01206b1f.js",
    "revision": "b067c9ba74007568dc041df2b23d5f1e"
  },
  {
    "url": "assets/js/38.709e5ce0.js",
    "revision": "1022dff3135981a958790713434e4508"
  },
  {
    "url": "assets/js/39.6ffac5b0.js",
    "revision": "8b18013fc1e05b0bac25bba787824505"
  },
  {
    "url": "assets/js/4.6e93ce45.js",
    "revision": "a9368beebeeb5a08031edb7c4882ccbc"
  },
  {
    "url": "assets/js/40.e55d060c.js",
    "revision": "ea8de086a9d6260089bf810a90f0e587"
  },
  {
    "url": "assets/js/41.abe3a0ef.js",
    "revision": "d3ba5eb10e9078acfc79d20bb9c4f385"
  },
  {
    "url": "assets/js/42.f22c2d7a.js",
    "revision": "62dc7f46f843368ee692ef7f55b9bd2b"
  },
  {
    "url": "assets/js/43.529e8ae8.js",
    "revision": "9f3fedf5e147a128d77704a3720a5f3a"
  },
  {
    "url": "assets/js/44.b2b4126b.js",
    "revision": "535beeabbeb8079696fdfb97ea3db015"
  },
  {
    "url": "assets/js/45.fa9e4df0.js",
    "revision": "2646b03a0b058fc8314c5a76d39f7b84"
  },
  {
    "url": "assets/js/46.b1776000.js",
    "revision": "30bcd2491ffccf6a06c54134d09a7c59"
  },
  {
    "url": "assets/js/47.b83f4a52.js",
    "revision": "ff9c9362b7f9511362c24d644911ba91"
  },
  {
    "url": "assets/js/48.5fd226fe.js",
    "revision": "69d13d7007866a72b6d8abad4e365fd1"
  },
  {
    "url": "assets/js/49.7e328a62.js",
    "revision": "4a2183273191586d855c5e64e826026d"
  },
  {
    "url": "assets/js/5.1c247709.js",
    "revision": "c7dd2162ffc005d1cf3ecc5ee0b8dd91"
  },
  {
    "url": "assets/js/50.5bb50dce.js",
    "revision": "486eb7829a18a332a961105a66c98bb7"
  },
  {
    "url": "assets/js/51.5249cb26.js",
    "revision": "78d9cf2773ee8f835e448f46056ea934"
  },
  {
    "url": "assets/js/52.c0684f49.js",
    "revision": "f4761008b457cb9050d35bbad596c4a8"
  },
  {
    "url": "assets/js/53.5f72362c.js",
    "revision": "0a6e8be3398e3957473cefcbcd890298"
  },
  {
    "url": "assets/js/54.7bfbf281.js",
    "revision": "6cb693dfc2dd70d38f5051301f836c3e"
  },
  {
    "url": "assets/js/55.0d12f31b.js",
    "revision": "3c148eab43c20c55aaac48444addb7b0"
  },
  {
    "url": "assets/js/56.8d4794b2.js",
    "revision": "e8edfac8422a0b1994c55a20e37223ef"
  },
  {
    "url": "assets/js/6.6c7fe3ac.js",
    "revision": "0e16b41b2f4caec7e7c44496f5a88d54"
  },
  {
    "url": "assets/js/7.35841e56.js",
    "revision": "6145bd8b046295dedf96c8dc7dd6c927"
  },
  {
    "url": "assets/js/8.a38bba67.js",
    "revision": "967e603ce19643f033471a175afd54f5"
  },
  {
    "url": "assets/js/9.04140810.js",
    "revision": "668353569b76d3357647ecc455aaecb8"
  },
  {
    "url": "assets/js/app.7ce54a4f.js",
    "revision": "28acb3b1252866cf95ab92a7e4e3b77c"
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
    "revision": "217b21e1073815c58f67b3c361da4fc1"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "a4a781e92066c8b65a98428caeb19a91"
  },
  {
    "url": "game/risk/index.html",
    "revision": "bdcabcb77343896d65de05da540c9808"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "7bfd25463681970ea4c91d1d33222377"
  },
  {
    "url": "game/smart/index.html",
    "revision": "9a8e363ea76bc462dc333a1ba2acd5ae"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "7af34facd92c9b7d0e0b91321250c3ff"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "b6cecb293184999357d53c10bb350f6c"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "38c360a7cd9899571dfb2a71fa87fc6a"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "19fdca2ea1cbc340709758a17e26d8bc"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "1397f58bd28d810063542d702c6c47ac"
  },
  {
    "url": "github/android/media/index.html",
    "revision": "effef2e16c68a00fa975e6bf7e90837f"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "f69818967f9ee8e29b904bd647e3fcfe"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "da5b48dbae7d26da2efab708a4c152c6"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "aee42f0bae7eefef9a54ed5c34c17a38"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "87286492cd959ccdef62f82c32e98e08"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "061732b332f39d851be7a98a52dd4822"
  },
  {
    "url": "github/flutter/synthesize/index.html",
    "revision": "a2104af0c3e5fd0f914c831785cc4f0e"
  },
  {
    "url": "github/flutter/view/index.html",
    "revision": "d4337d45ee353f9a96502932521bd3a9"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "a11e2b9c41acd3ee30e05bb6b45e0f20"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "b0d55881d8e0e6e1c23abe2011fac23b"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "ff4f310dc52166290815f8ced04a4382"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "5152238509e2d2a22fc90856c136f39f"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "215382d8656edaf5f3c79e2bc1d6d5aa"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "0b6c8e5c244e27a0b91dc26b1131a8ea"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "f45ed434748e01b261402c04025f9b82"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "7e0cf4851564654b363f8af9a5de7d10"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "02a0f6583527e0a7cace64f0e033cc39"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "8ccf61ed08e23ad8659ca04d19d014a4"
  },
  {
    "url": "github/ios/view/index.html",
    "revision": "74adbbb06d1e3029fcc99a141da28c9b"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "c7ea918f1578858e73cd193c366efbe1"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "75c9d91c418dd72867581d8584e290f6"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "5fedeeff65c18f604eae95826e08146d"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "c94281d68c819a72f2102ffcad1360c8"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "b541cde694d56bc20c2a21b483eb45da"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "c4ce205395ef333f6b41e524e618e96d"
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
    "revision": "951b93a2a2054b1e4ae249444212b4e0"
  },
  {
    "url": "join/index.html",
    "revision": "e00f6dd67a8eb6bd579d0ffe7cfe6b14"
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
    "revision": "35c9af72a2848a4b27d0a97e501e8272"
  },
  {
    "url": "js/data/android/data_android_full1.js",
    "revision": "9bc3127c8cfc7765512700995940431d"
  },
  {
    "url": "js/data/android/get_android_data.js",
    "revision": "71e82d6e89ac891692b22a00790d583b"
  },
  {
    "url": "js/data/AndroidData.js",
    "revision": "0f6f0fca16b62fd2316e694380ada1c4"
  },
  {
    "url": "js/data/Constant.js",
    "revision": "eec66192eb9dec5181d546ace50a7d20"
  },
  {
    "url": "js/data/DataFactory.js",
    "revision": "a0d9d49ef3903b95f26e2fe86eb72206"
  },
  {
    "url": "js/data/flutter/data_flutter_full1.js",
    "revision": "3410658991e6e7d1714dedca7d42b08c"
  },
  {
    "url": "js/data/flutter/get_flutter_data.js",
    "revision": "3cc5dce2790aa2c384b5e60b297f2447"
  },
  {
    "url": "js/data/FlutterData.js",
    "revision": "f094bb959a18ccf8b011e8badd453065"
  },
  {
    "url": "js/data/game/data_game_synthesize1.js",
    "revision": "d7bab39dab0f5ef48360f9911da1ce10"
  },
  {
    "url": "js/data/game/get_game_data.js",
    "revision": "9c4cf39cd67a459cda4fc1d893c13d1e"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "6da61a6992a59601c991660dd47fbac1"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "ae5e4680f56c2b6bfbd770bd774234fa"
  },
  {
    "url": "js/data/ios/data_ios_full1.js",
    "revision": "1a5f5eaac5003fb6a64560869d1fe111"
  },
  {
    "url": "js/data/ios/get_ios_data.js",
    "revision": "c3a65247af62b1068eaf6e5a3f60c0fb"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "e1014f028dd9be1ac750d84575021517"
  },
  {
    "url": "js/data/tool/data_tool_synthesize1.js",
    "revision": "19184c312f00a9ad7b33acaadfa288e3"
  },
  {
    "url": "js/data/tool/get_tool_data.js",
    "revision": "30f8db02025e811e83b4f2f5a59a0634"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "2b1471339386613465d682e9204f608b"
  },
  {
    "url": "js/data/vue/data_vue_full1.js",
    "revision": "eb9f2616dcc146c732e6f213ad7c5e99"
  },
  {
    "url": "js/data/vue/get_vue_data.js",
    "revision": "947f253fe44dda6d2aac3beca3b4f50a"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "ee0da8af34290474b4801e1636682fb8"
  },
  {
    "url": "js/data/website/data_website_css1.js",
    "revision": "5241a0bb2d6a6eac98c1655a48d1e90c"
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
    "revision": "f839dc8ad01489a7609d6102a238bbf1"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "6e63d5991a1e867fb6394d50466521b5"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "6a33efbc2ea4b156080d3c27b7f30286"
  },
  {
    "url": "search/index.html",
    "revision": "d77e243cf0afee2072fad34d1b5590c7"
  },
  {
    "url": "tool/all/index.html",
    "revision": "66b475063b5b5276bb9cb0cc886c046e"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "e3e5408e3dea3f31b368f17c52ba9ee8"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "59557c0d7fc211196e3a53f20928fbcf"
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
