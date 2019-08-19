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
    "revision": "f377aaac8e2efdfa31c9eb59dcab945b"
  },
  {
    "url": "assets/css/0.styles.65a2f8e5.css",
    "revision": "392929403d8f033a88d87f1a81b2ae09"
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
    "url": "assets/js/13.82de8b4b.js",
    "revision": "e93ecffdc56df4cfaf99d8b878e83b8e"
  },
  {
    "url": "assets/js/14.8c0e460e.js",
    "revision": "7f18a05877a82bd734488092127fe1d5"
  },
  {
    "url": "assets/js/15.643d3744.js",
    "revision": "e28c49620ed7ecd19ed9f597bec15a9a"
  },
  {
    "url": "assets/js/16.95deb1dd.js",
    "revision": "141e21057ed39134c8c1c2c71e7de9f6"
  },
  {
    "url": "assets/js/17.06b84e5d.js",
    "revision": "8f62c61c2850e1509fd4bd960319c135"
  },
  {
    "url": "assets/js/18.bf4072ea.js",
    "revision": "2439ac7a612e333f16ce5efb11973edb"
  },
  {
    "url": "assets/js/19.52b6086b.js",
    "revision": "281aed1879ebb81596fbf29509bd692a"
  },
  {
    "url": "assets/js/2.d615250e.js",
    "revision": "45c223ae8d3100454d5c872a7cec4b76"
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
    "url": "assets/js/23.e2010e66.js",
    "revision": "ac185ed4df5a9bb67bc3d37b06eeaca8"
  },
  {
    "url": "assets/js/24.9957fbc3.js",
    "revision": "defec89f4b5bc442dd4390cd820a19c9"
  },
  {
    "url": "assets/js/25.b74f93f7.js",
    "revision": "c7ee93b46870696502786738993a3a52"
  },
  {
    "url": "assets/js/26.92aaf887.js",
    "revision": "30334ca603e43abe7caebbde7bcb7057"
  },
  {
    "url": "assets/js/27.64331a28.js",
    "revision": "c273ca1793d453ebdb9dcc941f7007f5"
  },
  {
    "url": "assets/js/28.6eb5b533.js",
    "revision": "db373842771237903dedac0fab1ba1c5"
  },
  {
    "url": "assets/js/29.e4484bc7.js",
    "revision": "a3194ad05d30d2d89c05965a738034c3"
  },
  {
    "url": "assets/js/3.dc0cd16a.js",
    "revision": "41c19ec7c5e6cf2bca8782cd64d16bf9"
  },
  {
    "url": "assets/js/30.adaefa4a.js",
    "revision": "7fbd02ab8c7330496c0d1bacb2f65121"
  },
  {
    "url": "assets/js/31.c35f7f10.js",
    "revision": "7d7debe9783d64466fb8be6ac9fe1759"
  },
  {
    "url": "assets/js/32.8d19e45b.js",
    "revision": "8dd1dacc0836d03c3687f9eea7537610"
  },
  {
    "url": "assets/js/33.6c77186b.js",
    "revision": "87b9619ec14e22a66b649bf4cc7f0882"
  },
  {
    "url": "assets/js/34.33174026.js",
    "revision": "579c47652d7b8771de74f406827bf533"
  },
  {
    "url": "assets/js/35.c718111f.js",
    "revision": "6111faf1ae44bec42b207dd38338cbb7"
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
    "url": "assets/js/39.0ec256eb.js",
    "revision": "e31736a4515af0e2f6feee27a67a38ae"
  },
  {
    "url": "assets/js/4.047e181d.js",
    "revision": "7e78c529b4ea585c5d5bd6e8be6df457"
  },
  {
    "url": "assets/js/40.0abab05f.js",
    "revision": "c32012afb9f52ef89180482b72aa7a32"
  },
  {
    "url": "assets/js/41.330ba8c2.js",
    "revision": "9560798c2eb27ac09a994be6bc660788"
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
    "url": "assets/js/44.eb663668.js",
    "revision": "71e9058f4098e3f9685a1416f94a5e0b"
  },
  {
    "url": "assets/js/45.eda54d9b.js",
    "revision": "fea3415dda455a98c533eb0fe58c17a3"
  },
  {
    "url": "assets/js/46.926697e6.js",
    "revision": "f320d3cd3b8a696ff938808b3794170c"
  },
  {
    "url": "assets/js/47.c28416da.js",
    "revision": "8f8700e42bd5ebd9455bc50cedd13be9"
  },
  {
    "url": "assets/js/48.9dc7bc20.js",
    "revision": "8a87ba81e6e3cd6dd5d93df1fb7ad6be"
  },
  {
    "url": "assets/js/49.771e9563.js",
    "revision": "7c0bc8caa5bc6db90e4fb2bee2d5f801"
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
    "url": "assets/js/51.62566e62.js",
    "revision": "5e97e3ebdfbf5fd2663cf8e744edbe2a"
  },
  {
    "url": "assets/js/52.867f8665.js",
    "revision": "79afab97eca9a0a07ff48234c389873b"
  },
  {
    "url": "assets/js/53.42f85ee0.js",
    "revision": "705a5a3dea761a88d8bf3a0ee060508e"
  },
  {
    "url": "assets/js/54.714b34eb.js",
    "revision": "1afa2ee4b1b8d3646a7a880b777e5aa6"
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
    "url": "assets/js/6.aedeabda.js",
    "revision": "9e82bc94ffadfe3d6f69f9238bafbcf6"
  },
  {
    "url": "assets/js/7.c11fc18c.js",
    "revision": "750ef85924ec37daadab12187fa67942"
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
    "url": "assets/js/app.7da2b7e4.js",
    "revision": "3c9939432b19333c733376efd9e1adc0"
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
    "revision": "5f1b4081349e430a093ef22b45ca47b0"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "2efbba80f3ed16bdf71ee2b72eec2a81"
  },
  {
    "url": "game/risk/index.html",
    "revision": "5b0d2945d407fefa6e7485755b049d5a"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "18e838fbf65a5f634464c7a2ca11cf84"
  },
  {
    "url": "game/smart/index.html",
    "revision": "876144046618356e27692c3411a88be3"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "c7f3696a23131d40665c56c50b88e3c1"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "afa2c7344cbe2bf270e4f4ae647fa78b"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "23484645e8a9439ed46613139cac9d8f"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "ab54ac02d54f76bd88eef8bede7e846e"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "5f18302eb7333d0504b5bbd67a72e4e6"
  },
  {
    "url": "github/android/media/index.html",
    "revision": "13b3d94c30427a8df38cbb78df1dbdec"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "581b02d72388910c2a44c4c526345308"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "8e3997b8188314329ade17a99560c8f6"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "629a55fa12ee5fbea9b3748863645e82"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "1857f402374c73c5d9b9d561b30f1d6c"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "05c87f9aa2c930b1bd7b87294de54aaf"
  },
  {
    "url": "github/flutter/synthesize/index.html",
    "revision": "9139f4fba5b2b1d00907b308183bfba6"
  },
  {
    "url": "github/flutter/view/index.html",
    "revision": "c82beb43153ea575239d2873a2403267"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "b5b20fa1607d9b75547b908cc9a11171"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "c2d846e454becf70c887a8ffe23ed9da"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "5f0e6dad9f265a2f5b3a6f202945d96e"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "d5bf34836d395e168884ed20dc775701"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "e778eb6deb2137f5a7d4313f5e866cc7"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "0f02ede0d992f47cc9c598cb40ff3511"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "5bfc5d0a28fba44c05904abf433c8756"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "b36dcc0c463812b390b0f43333214ad7"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "97e52deb4d7ba6fbcb46221674bd6ee4"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "5294b2a34099fccc9b3f31e92562206b"
  },
  {
    "url": "github/ios/view/index.html",
    "revision": "4432967a19bd6b3cb8132da1680883ef"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "edf272223c592e664908e68d1b1aed77"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "5b69a8af3cd1674404dc36a3aa6e4585"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "bfbe831c8248a1bc34b2a7340e920663"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "c6a6be35edafd7e54f9b6132097eeea6"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "c442f53f1ba67c12eebbb9b3ef26e1ca"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "78aa8ef37decf8e74f235174e910b64a"
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
    "revision": "6ff4be903c534f02668213094e10b6c3"
  },
  {
    "url": "join/index.html",
    "revision": "072fa309169bcdb5f31a6dbda9a0f1ac"
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
    "revision": "db2640678234e2d7977657b15f95aa56"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "34f8c9cfa9dd7e7545db4227282433f0"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "6e2fd12acfe30f24379ce9f08d5b247d"
  },
  {
    "url": "search/index.html",
    "revision": "767194bcd84e041eada414a4bd900c95"
  },
  {
    "url": "tool/all/index.html",
    "revision": "fb7dc21770f555a16e98f26cc174ef15"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "787d431437078f57662329d54033e1a0"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "14996bb0eba3acdbdc70a2db4f1584c7"
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
