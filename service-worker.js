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
    "revision": "78c64990bf2f58896ff3120e87c64a1d"
  },
  {
    "url": "assets/css/0.styles.6ddb0436.css",
    "revision": "7c91c5eeb4db2869fb3018f44a564308"
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
    "url": "assets/js/12.e3b95a27.js",
    "revision": "4501e5501693bd65f1010541b3679ed3"
  },
  {
    "url": "assets/js/13.2e4ee7fa.js",
    "revision": "cc788715b7b9dca1a65df272fd249ce8"
  },
  {
    "url": "assets/js/14.3a3debc5.js",
    "revision": "63b3d4697f668e0e57a30a3569bec3a4"
  },
  {
    "url": "assets/js/15.4028449e.js",
    "revision": "4d6db125411b7bdd7c07eeb4500d4d9b"
  },
  {
    "url": "assets/js/16.eca4f71d.js",
    "revision": "418d1a48c429678efab8302173081555"
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
    "url": "assets/js/21.3669101d.js",
    "revision": "f32746aacf64af7c02ae4c691b80cfdd"
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
    "url": "assets/js/24.23c7091e.js",
    "revision": "8be356470a37a215a2578731ff334bb9"
  },
  {
    "url": "assets/js/25.8791d4d6.js",
    "revision": "f960d82f6979ae2fdf93b08a546ce6ad"
  },
  {
    "url": "assets/js/26.4b8a0d87.js",
    "revision": "6d04a233adf62cba99ed0e6dcd0f71d1"
  },
  {
    "url": "assets/js/27.5317e18d.js",
    "revision": "758539230a7f83f527e875e11ccdc99b"
  },
  {
    "url": "assets/js/28.f0d3b4a5.js",
    "revision": "3e22797e9e303b76d5408da7a549ae7e"
  },
  {
    "url": "assets/js/29.2bfea71a.js",
    "revision": "3251666849f4d27ea733922e05437c91"
  },
  {
    "url": "assets/js/3.7c43f684.js",
    "revision": "d5ff349c4144e00eaf64d592ead7ba75"
  },
  {
    "url": "assets/js/30.e49b3a9e.js",
    "revision": "4584c8cfcee4cf662050561da31eab95"
  },
  {
    "url": "assets/js/31.0e5dbfa8.js",
    "revision": "f6f11c0726086508e433d280b0986227"
  },
  {
    "url": "assets/js/32.4e48427c.js",
    "revision": "9cee4f38854f63619377c2168dc69b57"
  },
  {
    "url": "assets/js/33.6dc1a370.js",
    "revision": "ea1b530ff742df31aef93d1bd87e611d"
  },
  {
    "url": "assets/js/34.7423dfb4.js",
    "revision": "b7fc5a4c84473b524fa1d27e0e731636"
  },
  {
    "url": "assets/js/35.b6fe0311.js",
    "revision": "04657184edefc99c1f897bd3f91015dd"
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
    "url": "assets/js/5.2a564a24.js",
    "revision": "320948d8ecf096653e4730f27a388797"
  },
  {
    "url": "assets/js/6.2e013c21.js",
    "revision": "b4905a488900b77af5feca92ab4dca95"
  },
  {
    "url": "assets/js/7.c2a126ec.js",
    "revision": "3f2694386bc635d913628810ebd1deab"
  },
  {
    "url": "assets/js/8.86619d6a.js",
    "revision": "d1e2951568c92aa0887ee49246e4f74e"
  },
  {
    "url": "assets/js/9.3c590f23.js",
    "revision": "946b9f81598c9d768ca5ea332e327491"
  },
  {
    "url": "assets/js/app.2753edff.js",
    "revision": "0a7ffdd8437f19167ce8ba42f053eb84"
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
    "revision": "06f38cc6cb3beaa6b5937269b150a803"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "7b5912371b2697d6a650e8ea8f2c4675"
  },
  {
    "url": "game/risk/index.html",
    "revision": "b01a419967796476ec996e9e4ba3f7a3"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "e8d00e7f338cd60f7f0581b035cf01dc"
  },
  {
    "url": "game/smart/index.html",
    "revision": "21ea9c87287f789a9b1f06c0f26312ba"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "e391d70dd935d2f636685393b9f35d1b"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "736ebdd219f52239dcc952a21b74996b"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "8bf8b29e28b00d8a794518a8d957df41"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "69f7544abaea0fa086904ff4c0084f1f"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "8b6971b22ec0da8c4ddb7d4505dfcd89"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "4639c82abc0e0c9b7b993db07885f783"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "3883cd000c2f21e3fdc78f2930f1f7ae"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "6d7b82f2399701569ff6378c005eafed"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "2c4d7d392f27d957dbb3bb403dd3ec8c"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "bf5fa58774bd93afcedc5384ac4b954e"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "86ae5c9f2c81928bacde54afb1ed5fac"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "958e68a41e7b0fcb06a5e6f0d0dd91a7"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "fb1737c28ab8eeef28318f1856d608b0"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "75b6526edee676096d524e5475bdcc22"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "04ccbaeda40fa4c28c4a7871c55c91a5"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "cd701d3a57bddbc143a06c7744f0cac2"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "aa335cf09bfbdf16d6da4abf7dc5d179"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "f6de7cf6b90badc09f565ef61409cf4d"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "44405e82578f61c4d3829e0e666eec48"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "d8c34ade12c7853e42ac5bb4db0940ef"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "a8260886c0c9d07a5ff14ae29ebd18cb"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "8cbf66f7e7b0e36cfacc8099aa3e5104"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "2f35e3202bec499580c5a9a127e32382"
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
    "revision": "0f8df89dcb7145118e996cb7e35a2290"
  },
  {
    "url": "join/index.html",
    "revision": "ac3da1407ae275249fb3d39da975991c"
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
    "revision": "4eaa36488d509d079beaa0beca524cf7"
  },
  {
    "url": "search/index.html",
    "revision": "f3460d24cdb3640c60809d1d274fcdf9"
  },
  {
    "url": "tool/all/index.html",
    "revision": "c125eb935c4d2b5576c95e8ef3d0888b"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "f92d0face28682f2addae271b1e40812"
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
