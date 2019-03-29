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
    "revision": "89af0e382d5795dc899dc83094b58f0b"
  },
  {
    "url": "assets/css/0.styles.24c24992.css",
    "revision": "46d0b4df737737a71b77fd9f59bfb6d2"
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
    "url": "assets/js/10.a5e92d6c.js",
    "revision": "86c4d050a8d99f3adb531838b171ec13"
  },
  {
    "url": "assets/js/11.e661baaf.js",
    "revision": "8e6162beeaa91831e84068d82477d917"
  },
  {
    "url": "assets/js/12.859d1cd0.js",
    "revision": "3f150b3c1ee6a7890a7eb8bfb233c888"
  },
  {
    "url": "assets/js/13.3b02bd39.js",
    "revision": "912a26ad359673974d184c8397e65ac9"
  },
  {
    "url": "assets/js/14.0a0dc7d2.js",
    "revision": "309eebc1467383846220c0f273d00e2b"
  },
  {
    "url": "assets/js/15.fa3764b0.js",
    "revision": "fd51eda382c810ef1b7a7dbf75e8cb6e"
  },
  {
    "url": "assets/js/16.d4417c5b.js",
    "revision": "bee8fbbf7e9e524cb43873d07577f0fc"
  },
  {
    "url": "assets/js/17.c9c3fe17.js",
    "revision": "8ff5370ac9d68837ead519e42485c10c"
  },
  {
    "url": "assets/js/18.a4805e8b.js",
    "revision": "ad4438632e689c450d47359b7627cb6f"
  },
  {
    "url": "assets/js/19.823fce70.js",
    "revision": "d60a74866be55eb6d249786e90a103a5"
  },
  {
    "url": "assets/js/2.27228e9c.js",
    "revision": "bc218038afa663b634738adf9e0607bd"
  },
  {
    "url": "assets/js/20.d6e396ab.js",
    "revision": "77af2b6b90c1d5cb407a9352e6303edf"
  },
  {
    "url": "assets/js/21.8b2fc97b.js",
    "revision": "93df76e3a9f6b8c83bcce5b6df523f43"
  },
  {
    "url": "assets/js/22.59b4411d.js",
    "revision": "2abc835bdda002b2b82cec1478496d01"
  },
  {
    "url": "assets/js/23.11abed9d.js",
    "revision": "7d4b0cb2257f69b114c32b2a7ce42333"
  },
  {
    "url": "assets/js/24.7db6a7ea.js",
    "revision": "1fae1b5bdf64bfeda0d76a08ed39bfc8"
  },
  {
    "url": "assets/js/25.43be81d1.js",
    "revision": "9b82c617027f304c080c08ca59ce60ae"
  },
  {
    "url": "assets/js/26.3485921a.js",
    "revision": "0313cdd71d8b1e2d9cc5849b5dc78083"
  },
  {
    "url": "assets/js/27.9a422f26.js",
    "revision": "44f438f0ca30933dcd560e86daf601d6"
  },
  {
    "url": "assets/js/28.3b1155dc.js",
    "revision": "d3b718c920547ab5f8c6e7ef11ba908c"
  },
  {
    "url": "assets/js/29.822a6414.js",
    "revision": "4a846154ca2844c9ec43b83fee4c220e"
  },
  {
    "url": "assets/js/3.7c43f684.js",
    "revision": "d5ff349c4144e00eaf64d592ead7ba75"
  },
  {
    "url": "assets/js/30.8a9d9142.js",
    "revision": "5b1f927e88359b6580a46037566992a8"
  },
  {
    "url": "assets/js/31.93b3d90d.js",
    "revision": "11e9bdfb9e5fa46a8bd03f5e6a863c79"
  },
  {
    "url": "assets/js/32.84ba59d2.js",
    "revision": "70d7a7abf1d15c6a0a9522a113b13715"
  },
  {
    "url": "assets/js/33.41941ae5.js",
    "revision": "60d718b53a3e68b56360d650ac5aa964"
  },
  {
    "url": "assets/js/34.c01bbf51.js",
    "revision": "df5e8ba55f626c236dd2498ded46ba2c"
  },
  {
    "url": "assets/js/35.3412dc92.js",
    "revision": "1c29fd418490a692e85cfbe1df9ace79"
  },
  {
    "url": "assets/js/36.8018749a.js",
    "revision": "87525ecd85e5e29d6ef066410102894b"
  },
  {
    "url": "assets/js/37.f6904094.js",
    "revision": "b33eb3a192d86d6fc079944315445815"
  },
  {
    "url": "assets/js/38.a5b47f6d.js",
    "revision": "cdcb075e5af6aae2a86f827f82c9887a"
  },
  {
    "url": "assets/js/39.b8aa2de4.js",
    "revision": "032059a976c07218b291d7d9cec09ac2"
  },
  {
    "url": "assets/js/4.038fb474.js",
    "revision": "a054ab2e88df8bcf91e4fe819346fd71"
  },
  {
    "url": "assets/js/40.6d9bb2c3.js",
    "revision": "b0d72acfa1b67ebe5e7b3c3273d6ba29"
  },
  {
    "url": "assets/js/41.0bca9d8f.js",
    "revision": "df5e1fb470056ac167bf50f7378bcf32"
  },
  {
    "url": "assets/js/42.d56637b2.js",
    "revision": "3edc8e5b9566c1a7da0f49a02248e9c7"
  },
  {
    "url": "assets/js/43.d6a4121a.js",
    "revision": "59a7d6c230eb04a04d227cc53caf130e"
  },
  {
    "url": "assets/js/44.6b145d58.js",
    "revision": "40ce4f2034a8613dc0b90d98e544a303"
  },
  {
    "url": "assets/js/45.ad3fe887.js",
    "revision": "885fa6cee0b867cb775ff625c9626339"
  },
  {
    "url": "assets/js/5.13373078.js",
    "revision": "61fa1f94033fa0ba6f8d17de74c6d8e2"
  },
  {
    "url": "assets/js/6.3b8bf684.js",
    "revision": "50edcdfbba7cfc0caef59e72bb8ff9f7"
  },
  {
    "url": "assets/js/7.f6ae611d.js",
    "revision": "c0d70206d48e75c9002dd9f4f402508a"
  },
  {
    "url": "assets/js/8.86619d6a.js",
    "revision": "d1e2951568c92aa0887ee49246e4f74e"
  },
  {
    "url": "assets/js/9.30503e2f.js",
    "revision": "d5166077948483f224718fbe16a9af5f"
  },
  {
    "url": "assets/js/app.e7a11964.js",
    "revision": "d7cf0cf6bf696180e32da1f162e8c981"
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
    "revision": "2259951e3dbb39a438a7ae197f301342"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "88dba365118734ca62a5a640f1bdf87d"
  },
  {
    "url": "game/risk/index.html",
    "revision": "def250122469e341c36103a482b14734"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "08d66d50d92f8f0ca11cf78db9b4f3b6"
  },
  {
    "url": "game/smart/index.html",
    "revision": "86e526b02e81543874705c5ca0e284d1"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "fe1061149c3d7df58e6316970e710ae5"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "dff67051982af1f50f9d8bc615195725"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "282885b12da6318fba7fe9acf6a47664"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "6a16df4af220e83588e871048933995b"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "4511bdc60b869427aa3b020fcfc587ff"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "f6de4da03c4bdc55ed70a0a9a84f1722"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "9ec940008e6b76016e172d205f62f164"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "7bdb01c9de8d3f1e699fbda839eebe00"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "6c90bb289bee81a4e28188657ec94546"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "e2e99d211f674228ef115edf8fdafc5e"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "43d16504663ed3d53b0c6c569160478f"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "1e0f8c95f286a37affb7c74ddc8bf4ed"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "feafcba9b9476d8503aa0dd54855363f"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "3df5979ee37526536bb4a81726193471"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "65c559e9038ac0ed38d7e578ff4a8aae"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "04bc59a12b554b96b14da4ffe4777358"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "d02efbb1f9f946b8b4cf756d490ad327"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "70a1a93ab6dc2f66bfcfa04b9ca18b55"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "84000740b1d0f806c52ca0d66bd963fb"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "e9eb38412a8a06dcb7292342761f8f24"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "b9e53b136a7d47f5df2c3ed5ffc199d2"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "89eaccaa8bd373715c72faeca53b5b35"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "0681aebd7abb00e3f14c76aca2176cd5"
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
    "revision": "7093f371d72d81bce3153b3c9759a898"
  },
  {
    "url": "join/index.html",
    "revision": "696bc66b02d22f8da27b59820bdfcdd6"
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
    "revision": "a9ebe346fe81664b5e218b3336162013"
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
    "revision": "5d919a2ed9ef1f11a30ae387b83df4c8"
  },
  {
    "url": "search/index.html",
    "revision": "63a3d0ec943b3b88e53f08ce3635d264"
  },
  {
    "url": "tool/all/index.html",
    "revision": "c2987789b8461d7eccbc3e4720825592"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "f7f136eb4a86e156e1bc0e3fc227f0c2"
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
