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
    "revision": "4b0afc38d2389c59a2875d7d2398de45"
  },
  {
    "url": "assets/css/0.styles.b525104c.css",
    "revision": "c3e0215c03e7d7511c3005d6e8880e06"
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
    "url": "assets/js/13.21afde80.js",
    "revision": "0066cc88a6072343ef435820b3f2f6f3"
  },
  {
    "url": "assets/js/14.beff28de.js",
    "revision": "2870bedb98b478ac2496d79ca4d1634f"
  },
  {
    "url": "assets/js/15.56e1dc22.js",
    "revision": "a5c4b4531083777e6f3171d91bb3f3d7"
  },
  {
    "url": "assets/js/16.0dfed4d9.js",
    "revision": "55d0b0d4323ceadeb7c27ff463854e9f"
  },
  {
    "url": "assets/js/17.ad3db0f7.js",
    "revision": "ff515c5f37595cb64022260d15e1af05"
  },
  {
    "url": "assets/js/18.489610df.js",
    "revision": "f92ce33b13e44fa69d6f6d5706f5ba84"
  },
  {
    "url": "assets/js/19.79b388b3.js",
    "revision": "59897008c6535e9e58b7522b33a7cb51"
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
    "url": "assets/js/21.c6b343cf.js",
    "revision": "7e3ce034b4137c6d377a5a8691ccef85"
  },
  {
    "url": "assets/js/22.1cce90e3.js",
    "revision": "8103c33cd0ac52a1f10e78cf21f1aa7a"
  },
  {
    "url": "assets/js/23.7ed29054.js",
    "revision": "2dd2bdf681632e90e961b217042095c7"
  },
  {
    "url": "assets/js/24.c61b8cc8.js",
    "revision": "76ccdd14bcf42018b6fe14701d14a025"
  },
  {
    "url": "assets/js/25.7d39669e.js",
    "revision": "8808931517fd69dab034e67ae75217c9"
  },
  {
    "url": "assets/js/26.4e7af44a.js",
    "revision": "66906ae403755e708199b57512677a2f"
  },
  {
    "url": "assets/js/27.b6ba3ecc.js",
    "revision": "226636888846bb0f3922e17b436273e3"
  },
  {
    "url": "assets/js/28.185ef43c.js",
    "revision": "9f3e02e9337888a4f64e97c601fbe773"
  },
  {
    "url": "assets/js/29.99ae6ec7.js",
    "revision": "0d7012bf33a236984207610fa5a52897"
  },
  {
    "url": "assets/js/3.7c43f684.js",
    "revision": "d5ff349c4144e00eaf64d592ead7ba75"
  },
  {
    "url": "assets/js/30.2f6a9344.js",
    "revision": "a40f4f907a601845b9f6da150ce899c8"
  },
  {
    "url": "assets/js/31.095d6945.js",
    "revision": "06846a16b173febb35e9e0cca7fbe719"
  },
  {
    "url": "assets/js/32.cba13135.js",
    "revision": "abf8fd58ccc2b181140233abfd766d24"
  },
  {
    "url": "assets/js/33.df78eb2e.js",
    "revision": "b2e27e7ac7101ba950b89833908624f1"
  },
  {
    "url": "assets/js/34.e3573dbc.js",
    "revision": "34aa69a66d899819f58413b709bd3f94"
  },
  {
    "url": "assets/js/35.6bf5cad8.js",
    "revision": "535a31bcb92c9f9e096d69624ea77376"
  },
  {
    "url": "assets/js/36.7888776c.js",
    "revision": "85434902396e1784e1fe014582210dc3"
  },
  {
    "url": "assets/js/37.2e59c699.js",
    "revision": "d86f4fb5ae0b05a226424010f7672f2f"
  },
  {
    "url": "assets/js/38.d939a3aa.js",
    "revision": "b66fa85df10970d26af2e4f53517a834"
  },
  {
    "url": "assets/js/39.3a78fd77.js",
    "revision": "bb274bcd602c0a6a058a1135c4f89313"
  },
  {
    "url": "assets/js/4.038fb474.js",
    "revision": "a054ab2e88df8bcf91e4fe819346fd71"
  },
  {
    "url": "assets/js/40.9ece97c0.js",
    "revision": "d1ee6c63c0e44ea9eeff3243d0697820"
  },
  {
    "url": "assets/js/41.a0cc3fb4.js",
    "revision": "bad3290bf2514cf60cb77f23d223e43b"
  },
  {
    "url": "assets/js/42.f9686f3a.js",
    "revision": "52fd9e858036f969a75939951fb0bc7d"
  },
  {
    "url": "assets/js/43.d6a4121a.js",
    "revision": "59a7d6c230eb04a04d227cc53caf130e"
  },
  {
    "url": "assets/js/44.11537ff4.js",
    "revision": "ef4990d791f64cfdc786bdabaed0c326"
  },
  {
    "url": "assets/js/45.ad3fe887.js",
    "revision": "885fa6cee0b867cb775ff625c9626339"
  },
  {
    "url": "assets/js/5.be7836d3.js",
    "revision": "8c4d561f10a0ac1a156ab1877cbdc471"
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
    "url": "assets/js/app.f7325771.js",
    "revision": "0959010f77cea486d6bc16cba079394b"
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
    "revision": "dcd6b5d0b06d2572755ca728276ef23c"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "5f6956c84a943843b02c4f27e3c0bedb"
  },
  {
    "url": "game/risk/index.html",
    "revision": "6021d0ab8750841889851a139dd55da4"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "33755f91ffc69bbad6480b2ce4363850"
  },
  {
    "url": "game/smart/index.html",
    "revision": "24d4d907e6d9712a2386a4c00e3f0ea6"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "6820d9be6a529511558fe0b7ed3f6ae2"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "6ae933b42d301c5e6804d7eb57643e85"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "7fd3c3ae4f5c958f27248a26e8b11440"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "a7e2ce49e0cb8a1938849a4127de6dcf"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "a98d5455cedd0115e7bde169c1d60f43"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "8e631c0fed988f33f3795164ff9bf07d"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "594cb60ea3ce351b80b8f480dbc549e3"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "1ae7ee307ddf9b809ca15fb5db3144b7"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "fadc27943b86fd4fd71182deb4a3d944"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "297ce8e0795c12ccde35ca6e7dee487f"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "233350ee89d41a60b118630c7c4a89f8"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "e302dea630c2b83c5e83130606dcd56b"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "24af0880472134968868eb12ac657b4d"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "39bf88a303d550772d0bdac5d9da88b5"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "a315acc897f52e929fa5633a98e6c606"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "9710ac8567c666e554f3ff4f3afe4b55"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "8a50df81dbdf7ca37b3d95be81a35f2b"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "ba9389a5c79b6b1ee374181f84496bda"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "175eff5b8c21a31ce990318701f23722"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "c3cc751e5052647e4d804deb5fcd5849"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "f3d2c6fa86544fcbfeb61d6bdfd532c5"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "c6817f24ef9247c1155b6d9f8285b717"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "87df0210c514ac4ca7ba63c3ff6d91bb"
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
    "revision": "bc64962569bd758b58bf23d249601f3d"
  },
  {
    "url": "join/index.html",
    "revision": "ed0a5feacb98f49dd7fd065f53d8444c"
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
    "revision": "a8c18a409a7680a18a493ac8655da8a7"
  },
  {
    "url": "search/index.html",
    "revision": "417c44afd21dafb7af826bdc2ba12f92"
  },
  {
    "url": "tool/all/index.html",
    "revision": "2c25a7ae631d7c7f3b93b2ee8114324b"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "6f2fb2d936aa2c092a30a3b656d78445"
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
