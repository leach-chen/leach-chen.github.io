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
    "revision": "72961ebf3ca1be3cc93c56bcb02b299c"
  },
  {
    "url": "assets/css/0.styles.375f637e.css",
    "revision": "8332e0f5d9f44182ca89209bc8ed0dc9"
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
    "url": "assets/js/10.e9057c9c.js",
    "revision": "cc0a154039823d169b3234a67e21f581"
  },
  {
    "url": "assets/js/11.246da6fd.js",
    "revision": "e750d80ce284668b97aae32906e4903a"
  },
  {
    "url": "assets/js/12.04712cd3.js",
    "revision": "f9a3fefb3c72711cedc162ac6d55a7c3"
  },
  {
    "url": "assets/js/13.d49ebeac.js",
    "revision": "482accb434e2c0aff8f37e7a6ec9be44"
  },
  {
    "url": "assets/js/14.ccc0d8f8.js",
    "revision": "17037eb6a15ef5eec6e1a53762be2b91"
  },
  {
    "url": "assets/js/15.7a6e69cc.js",
    "revision": "181396ce9cc14eecb81d733f83486e6b"
  },
  {
    "url": "assets/js/16.e34742e5.js",
    "revision": "73c0764c2f5943e2540d14bb2fcb3b35"
  },
  {
    "url": "assets/js/17.bf7ead2d.js",
    "revision": "db38881bd2be94ecfb896bc653d2fa54"
  },
  {
    "url": "assets/js/18.632224ee.js",
    "revision": "e01e6e2cfeeb9d13997f35923e3a9511"
  },
  {
    "url": "assets/js/19.7fe18ac4.js",
    "revision": "f7b0387daca180a15a9d7edc666039fd"
  },
  {
    "url": "assets/js/2.fbb5e2d4.js",
    "revision": "dd0d9cd7f46c9182faef3bf9c6b33783"
  },
  {
    "url": "assets/js/20.6ce50e8f.js",
    "revision": "2a4ae17cd46ff4cb09890f445dbcd481"
  },
  {
    "url": "assets/js/21.d6b8a673.js",
    "revision": "86ddaf661370c62a7a2723c2943cac81"
  },
  {
    "url": "assets/js/22.004fd7af.js",
    "revision": "6e3774ff9ea58d4791080089a61a9425"
  },
  {
    "url": "assets/js/23.62ac7874.js",
    "revision": "750bac01154d897d4aacd0208f22bfc2"
  },
  {
    "url": "assets/js/24.df0f9350.js",
    "revision": "346ed381e5dd494df272b0a974c06ad5"
  },
  {
    "url": "assets/js/25.0788b6c1.js",
    "revision": "bf6590ddfaa163f927aeb6c8c8e5aa2f"
  },
  {
    "url": "assets/js/26.50574853.js",
    "revision": "5be71fe5dbe16e75fe710c3e5cca2713"
  },
  {
    "url": "assets/js/27.8bc615d8.js",
    "revision": "073d084a981f6fdb4a01eea0a1d45346"
  },
  {
    "url": "assets/js/28.a97b9ad9.js",
    "revision": "d1811117ab35cec65a85c18f3cf77f89"
  },
  {
    "url": "assets/js/29.a19f1054.js",
    "revision": "9bc8db8ab585948c23b24535c2540f67"
  },
  {
    "url": "assets/js/3.c4fb62a4.js",
    "revision": "7c2dee0bb50aee7d2be2328fb6b0d193"
  },
  {
    "url": "assets/js/30.4b56c984.js",
    "revision": "d5e9d8d13f6f6e8711b245162f867167"
  },
  {
    "url": "assets/js/31.452b9870.js",
    "revision": "4083d85b006fe2efbd8756ecf23f3933"
  },
  {
    "url": "assets/js/32.985ca952.js",
    "revision": "7a6d08c9536d0a7bf036104f2ce28689"
  },
  {
    "url": "assets/js/33.195462c1.js",
    "revision": "919cdd74caec8d4a2c48a7fd79cf2916"
  },
  {
    "url": "assets/js/34.c51caac3.js",
    "revision": "2505b50f5cb9ecc3cafe5611e53cd0be"
  },
  {
    "url": "assets/js/35.cbddbca9.js",
    "revision": "ac6141642e5486881b2195dad81684ea"
  },
  {
    "url": "assets/js/36.633fbbb2.js",
    "revision": "8a55f22602388b62712a32413e5ff4a3"
  },
  {
    "url": "assets/js/37.92c3e111.js",
    "revision": "1f411205cbb785305cde1eb04a2c4b53"
  },
  {
    "url": "assets/js/4.80113b5e.js",
    "revision": "08273b34ae6ede0015cec488956a4f48"
  },
  {
    "url": "assets/js/5.fcc26ad9.js",
    "revision": "147b50851b20809b86ea86d03c1d1d5d"
  },
  {
    "url": "assets/js/6.ecbe40e6.js",
    "revision": "9fa0300a74b448e8a14a9d694bbc49a4"
  },
  {
    "url": "assets/js/7.d539c49a.js",
    "revision": "64d7eca17060fa34f47a65121af57400"
  },
  {
    "url": "assets/js/8.4cfadb55.js",
    "revision": "2c08ccae03826ac36c224d3c6b2d9262"
  },
  {
    "url": "assets/js/9.a3f2da80.js",
    "revision": "3ba7f1ec20f76cfa112cc219c2b1c0bd"
  },
  {
    "url": "assets/js/app.148991a3.js",
    "revision": "b3e695d486f5800f949975d1f5a76286"
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
    "revision": "3d22c01954025ede1c3cfcbcadec9750"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "b5bb8bc6e1ac0d717f6c9e910a068d4a"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "d2b10731a4c9883be0729e2bfcb1c8ae"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "9b8e092c2b2c050854cb06ce192d5e08"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "45d9ac7bfc6b4ec2caf6bed16194e917"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "f5d0253c22fa09e314b825b5cc6506cf"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "a34c407d974d6eb5464a9bf3bede8b96"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "080b2dec18789f236704474b5fbb9d83"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "7ac403ef6686609c2f9e97b2ff1f7193"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "971c2bc287b1feb9cd35911a1970f3b6"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "77d5edc4611893dd0fd0499a4bc3dfe5"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "3f2b9e47f1b5b517bbfcc93b9c214a33"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "96b52af1a567726b3fbc8a7940966647"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "c847cf7be6897998943aa232b9aa3ae2"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "84af970bddbbaea34a7a257b6318f46a"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "0b9ad6f8713bcdabbc81309f2e079e71"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "a7f02151f6c9b2e152dd0448dfa80695"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "8f80576ca24cb84abad6669dade59da5"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "7d08690097927861f40cbbe62d7d6bb8"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "6701a509850dfb2a75b95ae4fb6cfa2e"
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
    "url": "index.html",
    "revision": "ae93106dff6234fd50577e49efd72542"
  },
  {
    "url": "join/index.html",
    "revision": "9d05d266978d1057c41784b9aef31316"
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
    "revision": "2e70eaa93ba6a4b63a352064b6634719"
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
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "e35ffce2e6758b46e2b03ef38f645f6c"
  },
  {
    "url": "search/index.html",
    "revision": "b523f6b6e70d7115eef03af4eb6b2c36"
  },
  {
    "url": "tool/all/index.html",
    "revision": "b22f6681afdb58b755eeb87f7fd75c8b"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "641242d009f215da90d7f44cf47e5160"
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
