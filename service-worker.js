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
    "revision": "a581c587b93fe46448f5bc3b9c55fca6"
  },
  {
    "url": "assets/css/0.styles.fd7bfcda.css",
    "revision": "2e5d39b9c6183e191ccaa60f12c81cc1"
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
    "url": "assets/js/11.7ca55bfb.js",
    "revision": "502d6a1c5b80674642ff0de456f50930"
  },
  {
    "url": "assets/js/12.807e5fdd.js",
    "revision": "2192b0c2cba898ffb5466bfe6ec041f9"
  },
  {
    "url": "assets/js/13.8f4c1b85.js",
    "revision": "e5cae7e4d338c1396f2fa666acc1b519"
  },
  {
    "url": "assets/js/14.d08ca484.js",
    "revision": "38d2e95ff3980051dddbce70b8811869"
  },
  {
    "url": "assets/js/15.38be8414.js",
    "revision": "e45a6b90040bb3bd223349f46ada351d"
  },
  {
    "url": "assets/js/16.94b9511c.js",
    "revision": "efa0526f536072c8452b88edd35882e7"
  },
  {
    "url": "assets/js/17.e39572cf.js",
    "revision": "89b2e9dffa61cc60af90f0e5191d6eef"
  },
  {
    "url": "assets/js/18.d5a1078a.js",
    "revision": "49fe6da96528cf107cfde4349eb2b47b"
  },
  {
    "url": "assets/js/19.5d660127.js",
    "revision": "8828ecb96f716ec83c490dde678921e8"
  },
  {
    "url": "assets/js/2.315a9d71.js",
    "revision": "64e502acd4d96c3ea25c5ffdc172da4f"
  },
  {
    "url": "assets/js/20.cc0d7330.js",
    "revision": "2e3446fd906749c1ab4133b18c05f19d"
  },
  {
    "url": "assets/js/21.81b35d9f.js",
    "revision": "92b79b162e42364d8c05a7883e640d21"
  },
  {
    "url": "assets/js/22.e66e30e2.js",
    "revision": "cafa41f924b6a0c5e21067f87b6cde89"
  },
  {
    "url": "assets/js/23.7bc6032c.js",
    "revision": "450b7e3f129d3ff5fe85205b15af425a"
  },
  {
    "url": "assets/js/24.c05530df.js",
    "revision": "dc4e97c3b0863aafd32551fe8bd130fa"
  },
  {
    "url": "assets/js/25.0a2d46f1.js",
    "revision": "7a048691daddd6c1b8594ea5ee561ffe"
  },
  {
    "url": "assets/js/26.c4a6677d.js",
    "revision": "6499754c68e1abac41b8730bc5100f68"
  },
  {
    "url": "assets/js/27.5c9d924e.js",
    "revision": "7916b4d56e54c1ffb5e4423aa793a659"
  },
  {
    "url": "assets/js/28.b9236d1f.js",
    "revision": "ff9f41237a5e8289c24264cfc57ec0bf"
  },
  {
    "url": "assets/js/29.9c53a905.js",
    "revision": "c655fdc50aca8cbdac914e97afe1e0f3"
  },
  {
    "url": "assets/js/3.4e42fa44.js",
    "revision": "610a561f816308d1656d3083c6d8e50c"
  },
  {
    "url": "assets/js/30.c7e4ba38.js",
    "revision": "2937722cf0f86e0d0573efc8b0c1d45c"
  },
  {
    "url": "assets/js/31.62081c7f.js",
    "revision": "e693fbdfc7aa11b50f3b34802572f82f"
  },
  {
    "url": "assets/js/32.b74bfd9e.js",
    "revision": "a1c9eff93d0f0a7bd85f7fada07fbda4"
  },
  {
    "url": "assets/js/33.44efdd1f.js",
    "revision": "181fa35c777112cdde099467d5f11b35"
  },
  {
    "url": "assets/js/34.36f29e73.js",
    "revision": "7070a6b385293e425031f0446b60ef76"
  },
  {
    "url": "assets/js/35.7f1d323f.js",
    "revision": "8b361d0437308812a166c37ac6e8f8cb"
  },
  {
    "url": "assets/js/36.041b0f43.js",
    "revision": "cba081e7bee9aa2c4c33d0858aa67c5c"
  },
  {
    "url": "assets/js/37.88b61e0a.js",
    "revision": "d4227f302baf0af497e8524309b06de8"
  },
  {
    "url": "assets/js/38.8059cf9a.js",
    "revision": "6940e58fd1eed1d2909ca167fc814816"
  },
  {
    "url": "assets/js/39.a23a2525.js",
    "revision": "8373630b5d1490fe94d796489d7b2908"
  },
  {
    "url": "assets/js/4.687f09cc.js",
    "revision": "f67cc0a7dafa4059322d00b07d0b500e"
  },
  {
    "url": "assets/js/40.87882425.js",
    "revision": "c03b8d714d77f151157ebabdb2789da2"
  },
  {
    "url": "assets/js/41.f39a7b70.js",
    "revision": "d3734e2041fea0b36d19c908267ac3e0"
  },
  {
    "url": "assets/js/42.fed26442.js",
    "revision": "d620869b5cd869055e1a7fceab011e6f"
  },
  {
    "url": "assets/js/43.8df406b6.js",
    "revision": "1b00e7b90440692250281d3bec06998a"
  },
  {
    "url": "assets/js/44.e24a5b8e.js",
    "revision": "052de34928628e3f2629ae999035489d"
  },
  {
    "url": "assets/js/45.a2d42dcd.js",
    "revision": "90c010fd57d86ca4775cbed220dbb771"
  },
  {
    "url": "assets/js/46.46d8a815.js",
    "revision": "bb729e3483c5727f0fbfeae4657840cd"
  },
  {
    "url": "assets/js/47.5a87c7f4.js",
    "revision": "127a06e4d3169e0127f5aaed758c37fa"
  },
  {
    "url": "assets/js/48.0db149a0.js",
    "revision": "9bf8d3b3362972f32e65a9de1ebc389b"
  },
  {
    "url": "assets/js/5.73554197.js",
    "revision": "0d4a8beea361dca8cbc14e22979831be"
  },
  {
    "url": "assets/js/6.440c8eec.js",
    "revision": "da98a3e5fb309d3eee5f918fe2f4ec35"
  },
  {
    "url": "assets/js/7.465d4b92.js",
    "revision": "87fc09a3ae5e434e527319cde6d351c1"
  },
  {
    "url": "assets/js/8.2db110c1.js",
    "revision": "25a612565bf6c3b0eb58e6b6087f20d9"
  },
  {
    "url": "assets/js/9.34ab27de.js",
    "revision": "ea3fdcc3ce9c14bf7b5500ed8173e3c8"
  },
  {
    "url": "assets/js/app.93d9d2c5.js",
    "revision": "842ed5ac06b9873d78935dd7cca5d695"
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
    "revision": "6aa7b033a484df352153d5f7864a8eda"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "29bdedb6f26e4a65e6c5994f4bac964c"
  },
  {
    "url": "game/risk/index.html",
    "revision": "29c0ebeaebef7d9e1c56027c87cc5610"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "64933397de7b4d18afbf0c8ffec937fc"
  },
  {
    "url": "game/smart/index.html",
    "revision": "a7d7e46ebcdec165acb0daf86daf6917"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "768aec58ffec72be171f4f2be3d808d5"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "6d11d0a695dd3c6d49d3982f39d1a79e"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "0d92ace2efd5d37af70f5af9190f7281"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "e6713ecf86a97da70b58fa4388fa9fdc"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "77e5c9ea01b7b65c2871eb3e66faf450"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "cf148bd8ac5b51ca6d6008655be88eca"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "ca17cccd7483b716d4a140b25a9c59bc"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "81792d0ac13de153e5cf52b3401392a8"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "9c583beec882e0d406a1d73337d1d0da"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "96e47f04806cfcea439ab6c4c297147f"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "04b811224a1c52044f742490337edcbe"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "74252106371ed4eec0fcadda3ab146af"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "ba35fdf4f8113844b2c4ffaacd80a0a9"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "76434619e05b84ac9f7f4ae249e3ddab"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "1988e15c0d54a6ff32b8bf7b01b63c87"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "32f683c5acac3e3a84b62ed351cbbdc7"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "568aaf209b6a1fce230888ad890d5864"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "798f91758e33bd8f106e319ea28cdbfc"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "df833bfa4573bc9c511f528667d53588"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "835fa77f1567c8ade4d8092849a24d8d"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "561e41371b7f1696cb2225d95ca2c0ca"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "a4f4c6ba46f6b8e67b2a07b67093ae0d"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "acd1cdc8ee5000e2b89df1405d3b3b17"
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
    "revision": "de51cce9d3e766027dac3848bd2b64a4"
  },
  {
    "url": "join/index.html",
    "revision": "c8307ca598e4dadade3e5021fd2d2f1d"
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
    "revision": "412e3e3b6109a474f5c67d56e1a584bb"
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
    "revision": "106677400b69ee3fef0f917a5b92bcdc"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "f668fadc7330c620e736f686a7b9c31c"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "121be83f0fba5c86d6bc5dadf6cc32d7"
  },
  {
    "url": "search/index.html",
    "revision": "3ef077329b6a188130881dd3173483f2"
  },
  {
    "url": "tool/all/index.html",
    "revision": "00fd9d4fe92384aeb47c152f891231b7"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "648376d88d395ca37c45500da877ac4a"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "224985d40f4ccd32be435c9ffaf0628c"
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
