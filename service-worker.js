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
    "revision": "1b9d87ba60bf4bdee73fea932caa01b7"
  },
  {
    "url": "assets/css/0.styles.bee09b97.css",
    "revision": "1d17265a5c164266192d4d7661d2f55e"
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
    "url": "assets/js/11.c39e8531.js",
    "revision": "27dda7a292137cdf45221558dfbdf683"
  },
  {
    "url": "assets/js/12.cc8ebdd7.js",
    "revision": "4a5aa3d9ca0901ea9eb43aaf63ce75fa"
  },
  {
    "url": "assets/js/13.6c503b10.js",
    "revision": "e979d25d2a84be90f6ca9b14c7169ce9"
  },
  {
    "url": "assets/js/14.a0762418.js",
    "revision": "a02e3d9bfa017d176e1d6b6e911987fc"
  },
  {
    "url": "assets/js/15.cc4018b2.js",
    "revision": "ad6b217727f68b92e59e625dd4e9adf2"
  },
  {
    "url": "assets/js/16.c1229491.js",
    "revision": "e1ce3f14288d9f6594afa5ed72cd917c"
  },
  {
    "url": "assets/js/17.2e34ae65.js",
    "revision": "3ea09113871b71764f6a2884043c4b50"
  },
  {
    "url": "assets/js/18.fe133399.js",
    "revision": "83bc1642be1d8667aa51b87aa62acfed"
  },
  {
    "url": "assets/js/19.a890c765.js",
    "revision": "49cb34d7b2945613d406f27bfd738cd8"
  },
  {
    "url": "assets/js/2.315a9d71.js",
    "revision": "64e502acd4d96c3ea25c5ffdc172da4f"
  },
  {
    "url": "assets/js/20.db54edf4.js",
    "revision": "8e91b42c13f41201b89c613512bcf634"
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
    "url": "assets/js/24.72c3c9c3.js",
    "revision": "7fabffe1d1efc0847a112b1a91213d6e"
  },
  {
    "url": "assets/js/25.48b71d73.js",
    "revision": "0674527291a4ed4ac662c58ef8aa69bb"
  },
  {
    "url": "assets/js/26.5dc94acb.js",
    "revision": "d213503336accd581d23cd3fc0246a1a"
  },
  {
    "url": "assets/js/27.abaa7913.js",
    "revision": "429ad3636a67d172efbc55283ea16cca"
  },
  {
    "url": "assets/js/28.a66a1ed9.js",
    "revision": "44df3f8083350c35dbe61501247530ad"
  },
  {
    "url": "assets/js/29.578dcbb2.js",
    "revision": "fa58ed366663ef7fe3a89be873df7c75"
  },
  {
    "url": "assets/js/3.63d905b8.js",
    "revision": "16c9395ee3f6d3a0524f312a810f637d"
  },
  {
    "url": "assets/js/30.93a0ee9d.js",
    "revision": "e2f483cdd9717390e722a8d17f9a8c05"
  },
  {
    "url": "assets/js/31.a2dae168.js",
    "revision": "2ad28ba843c48629f13ac9980b1ca667"
  },
  {
    "url": "assets/js/32.83e943b6.js",
    "revision": "ef5934d9b100798e54fc8e81ac0ecca0"
  },
  {
    "url": "assets/js/33.bd10ff17.js",
    "revision": "691931718023f41578aece947ee79363"
  },
  {
    "url": "assets/js/34.be515cc9.js",
    "revision": "e08fdeb7c9cf70e0e4f05ab0968366c1"
  },
  {
    "url": "assets/js/35.11ab4ce1.js",
    "revision": "d59c3e5936469608c703beee54fc8f61"
  },
  {
    "url": "assets/js/36.8f87cadf.js",
    "revision": "2edd4955850fe66275243507a27a4f69"
  },
  {
    "url": "assets/js/37.4891d247.js",
    "revision": "fc54819f332261fabcff75294f2b8d67"
  },
  {
    "url": "assets/js/38.d69ef677.js",
    "revision": "b67186e80b60eb255ba8df42abf20bda"
  },
  {
    "url": "assets/js/39.a37bbf46.js",
    "revision": "961b872c022af4a05220ede0cc47d0c5"
  },
  {
    "url": "assets/js/4.687f09cc.js",
    "revision": "f67cc0a7dafa4059322d00b07d0b500e"
  },
  {
    "url": "assets/js/40.994cdb4d.js",
    "revision": "cf35779c53d67c6646ffe611f90176ec"
  },
  {
    "url": "assets/js/41.7b61b130.js",
    "revision": "c35ef251b5d29c972dbe04bf940a0323"
  },
  {
    "url": "assets/js/42.3613aa9b.js",
    "revision": "45823c05113a1cde46061e6d328454e9"
  },
  {
    "url": "assets/js/43.1ea9a7c6.js",
    "revision": "ad679345cd48a1f92b20afab695b1d7c"
  },
  {
    "url": "assets/js/44.dd189884.js",
    "revision": "425cd53658e062ae9ed2d6ad79222776"
  },
  {
    "url": "assets/js/45.24b3bf2c.js",
    "revision": "7bda6a83763fc89ccc243ba60ac335aa"
  },
  {
    "url": "assets/js/46.8c1ad1c7.js",
    "revision": "d46e9d8b52b9c23403bf269ef4e23dd9"
  },
  {
    "url": "assets/js/47.c28416da.js",
    "revision": "8f8700e42bd5ebd9455bc50cedd13be9"
  },
  {
    "url": "assets/js/48.b5274f66.js",
    "revision": "2a14ba62deffc4869dfd62f83ec9c561"
  },
  {
    "url": "assets/js/49.609a7da3.js",
    "revision": "f86a1916e05185106f8a4162e804e6eb"
  },
  {
    "url": "assets/js/5.1c247709.js",
    "revision": "c7dd2162ffc005d1cf3ecc5ee0b8dd91"
  },
  {
    "url": "assets/js/50.4c465bf1.js",
    "revision": "2c79fa55ef05b5579de4a990283d9e4b"
  },
  {
    "url": "assets/js/51.88b43648.js",
    "revision": "c2fc411938e5bbdf524348dc5f884877"
  },
  {
    "url": "assets/js/52.c0684f49.js",
    "revision": "f4761008b457cb9050d35bbad596c4a8"
  },
  {
    "url": "assets/js/53.6f9268a5.js",
    "revision": "057af8f33b2698089758e2c03d1d57ca"
  },
  {
    "url": "assets/js/54.5f003bec.js",
    "revision": "207af515e089d42051d39afc008be056"
  },
  {
    "url": "assets/js/55.d8e5c92b.js",
    "revision": "665d516c1cfb121a403a20167517166c"
  },
  {
    "url": "assets/js/56.8d4794b2.js",
    "revision": "e8edfac8422a0b1994c55a20e37223ef"
  },
  {
    "url": "assets/js/6.dad90857.js",
    "revision": "16b48f9b2cced2aa2a4dbee497f1fc3e"
  },
  {
    "url": "assets/js/7.4880809b.js",
    "revision": "fe420e156f92379a28a97c09f3200404"
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
    "url": "assets/js/app.65b87b18.js",
    "revision": "cf09f6e1ced1fbe7aad96896810f6dd0"
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
    "revision": "9671a93e18d88ff17810781d184f0e95"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "a0be079b8e4440e2b7c14466a9a9896d"
  },
  {
    "url": "game/risk/index.html",
    "revision": "a5718378b315a31a7242a91faf9e29e4"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "51fdfd88119b704fb7a27c3574684b7c"
  },
  {
    "url": "game/smart/index.html",
    "revision": "ebac238666720c6aa31c86e82e141bfa"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "7fea579f85334cb8016436415915cd2b"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "163588befffe1d711ef48cc1c438c033"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "4727a75f9faddac5ff6d1a7a815d61f4"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "4e766b010f95347a10e91cf8898e89f7"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "0edbe75d131d70bb231f7494c4c681cc"
  },
  {
    "url": "github/android/media/index.html",
    "revision": "6c814f620da65b643b889b613c1acb59"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "5f89ff2499b9f0976f06557e39148d06"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "3b28a5f38997ca8dcde13efd8dac16b0"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "c2e432e0f38eabcbbcb0a01f90848b05"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "078f6b45b7845c44df0bc7bff159a6ac"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "f232cf999536bbd813e4451de89eeffe"
  },
  {
    "url": "github/flutter/synthesize/index.html",
    "revision": "d457ca259f026d979e4382571924a12d"
  },
  {
    "url": "github/flutter/view/index.html",
    "revision": "37943cbc23d1e482fe84e5272c4e4f11"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "9012a028fda3ad1f42234d80d43acf26"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "6393dc81c5e126b4499b746ff77b3f98"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "3fd6547947cdbf72a34fcd779c4a4f2d"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "4779d6df84cdfafb8a5e59023ac7976d"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "acff24648795ee7d5c9e2b3fe30d572f"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "088991ddde91362c2bc646f37f30f388"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "9d68f9a8afb0cb652493072227b2668b"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "dabdc7ebdda109a466ee82b756904be7"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "d7b4b0c58f16c7d217edeb5bc6cbb835"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "6e0da26ddc50e44a6ddf82c50eaeb63b"
  },
  {
    "url": "github/ios/view/index.html",
    "revision": "55ae02075506f42a4d5b51b2f4739c28"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "a2a9e3c8854f34a51c2336f2cc6c0504"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "e1eff1a44c6949390e1de495ff6f0ee8"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "2426c09c1e46d75f0706e9a7dad61583"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "906c3e571f4cd1f8bc54230341bc8adb"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "ad94f694b11c2f9a368b23a31fba54c4"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "d88f834e0a74431527e083aa253d2d01"
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
    "revision": "e21ed28d74128ec7ff9766a3b5ebf9bc"
  },
  {
    "url": "join/index.html",
    "revision": "0acea2530f64cdc2f7429ec2b9aa1e17"
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
    "revision": "8e77655d820fc396dd00f4c8d6a72fb8"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "6acd702308fed3cefad860e5739a247a"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "8fbfc325b1a2d88c1ce842240c2b1c70"
  },
  {
    "url": "search/index.html",
    "revision": "098076b8d05853d9fa93c066a2ed984c"
  },
  {
    "url": "tool/all/index.html",
    "revision": "222c5e1d5f7db5daaace86cf4c39e978"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "c5823ba60595c00e8ba75a9991e4d802"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "ceea850dcdc974e2f672996073933b50"
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
