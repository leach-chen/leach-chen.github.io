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
    "revision": "3bdc5cd23b3327304c23bfa3c8d25dea"
  },
  {
    "url": "assets/css/0.styles.070a6fa4.css",
    "revision": "9696267643dd2901b7a73214d8418023"
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
    "url": "assets/js/11.6fbd49b4.js",
    "revision": "b928e9df3ba598dca9f64f7375ebdc78"
  },
  {
    "url": "assets/js/12.9ba5c690.js",
    "revision": "919f2384cb822eec7755da0b0a77c110"
  },
  {
    "url": "assets/js/13.7acbe47a.js",
    "revision": "553574e6714bdbfb1c9e3f459d75b61e"
  },
  {
    "url": "assets/js/14.e780b4c5.js",
    "revision": "60a09e62caa922b4e3824af5f555740f"
  },
  {
    "url": "assets/js/15.43d20216.js",
    "revision": "038fa8936488c85b2c7d4fe8ece1abab"
  },
  {
    "url": "assets/js/16.b11006ae.js",
    "revision": "e51099af6e9b37651c20f0f5d4038625"
  },
  {
    "url": "assets/js/17.344332a5.js",
    "revision": "4ec954ccc3fccfba42617d5d977f5426"
  },
  {
    "url": "assets/js/18.c6d83cac.js",
    "revision": "4fb0132991897683bb32c29426aee32d"
  },
  {
    "url": "assets/js/19.1b7f643c.js",
    "revision": "affa407dc501ad29b20ba710a11007b9"
  },
  {
    "url": "assets/js/2.a5b25d31.js",
    "revision": "6d98c70900fd4017c4a5e50103727a16"
  },
  {
    "url": "assets/js/20.a9275577.js",
    "revision": "9cb5ae058eb0db566d56ce1b115d8b39"
  },
  {
    "url": "assets/js/21.ecc37a8b.js",
    "revision": "f6068dee1c6389c81565f0268548abf6"
  },
  {
    "url": "assets/js/22.585a48da.js",
    "revision": "9c19fb0199e1ecc8d7944abb80093c68"
  },
  {
    "url": "assets/js/23.fdc11b9a.js",
    "revision": "7a8fd2b74f304f5e069d8c334509b973"
  },
  {
    "url": "assets/js/24.696bc6db.js",
    "revision": "9bb949bb67667f22f3497815c2b41f5b"
  },
  {
    "url": "assets/js/25.c62ccc8f.js",
    "revision": "d3d759cc820b5248a9d5e56be4a539d7"
  },
  {
    "url": "assets/js/26.b02ad6ff.js",
    "revision": "9f519ec42c91e68f8ade505816d32423"
  },
  {
    "url": "assets/js/27.6806d98f.js",
    "revision": "1fe30bf21812a1d79a5aee80341838c2"
  },
  {
    "url": "assets/js/28.f51e21e0.js",
    "revision": "911493a8ae52827f0e03e0d80fe2a7f2"
  },
  {
    "url": "assets/js/29.e29de43b.js",
    "revision": "e2dd00aac30acd509be8e44a24924cff"
  },
  {
    "url": "assets/js/3.2869e2a7.js",
    "revision": "9da9273eaf297ecee491e5fd213f2681"
  },
  {
    "url": "assets/js/30.9fe988ad.js",
    "revision": "def8c7d0b8f65f95624ee5d61ce23c66"
  },
  {
    "url": "assets/js/31.d41fc0c5.js",
    "revision": "7bb1e1fbb49fcdf25a9db92a65a9fac3"
  },
  {
    "url": "assets/js/32.36be4914.js",
    "revision": "192f134ae0cfbf20ccb8039bd8362721"
  },
  {
    "url": "assets/js/33.3ce7a18d.js",
    "revision": "24a9b3b446f349ffdcdbbe37b2e10142"
  },
  {
    "url": "assets/js/34.71f3a500.js",
    "revision": "6c5ca55b4442ee97f0883e11ee139c8b"
  },
  {
    "url": "assets/js/35.f1d94109.js",
    "revision": "91083e91d926a5877973218cbe8fe454"
  },
  {
    "url": "assets/js/36.cf29b5f7.js",
    "revision": "101b89f91809b2613b049fb5e204a50d"
  },
  {
    "url": "assets/js/37.61565dfb.js",
    "revision": "454e9c5d970f60ffc3d1105bd5d649e9"
  },
  {
    "url": "assets/js/38.2603cc43.js",
    "revision": "d1937f3fa9968fd231146229913c8357"
  },
  {
    "url": "assets/js/4.326c2df4.js",
    "revision": "fe27bb7cdae453012f9d9754a8ae0d55"
  },
  {
    "url": "assets/js/5.1e7e2329.js",
    "revision": "9c078bf41f1004e3e11281715f648187"
  },
  {
    "url": "assets/js/6.9b503157.js",
    "revision": "9f688573d01864b63185dc41d032b546"
  },
  {
    "url": "assets/js/7.355c37a2.js",
    "revision": "301a6754650d8a9f1aeb6ca2eb628a2f"
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
    "url": "assets/js/app.c0b8bafb.js",
    "revision": "c6cce02728771b8e67aa005b3ac8a11d"
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
    "revision": "b9f8748572b0c46722c282ca30c1c98d"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "4ad7e606e4d683939faec9e0c85a4a5a"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "58572a1f19bb47b1b82dd37be90a6e79"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "6f2d858e4029dbbebcde726be3ab987f"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "07c1ea98802ea81102230c5d909b6acd"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "4b43a4e1a886077a8ef71ea760d172bc"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "a20c520f6704c3942aba048743b3df49"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "9cd1f481c0f6a7ed2667df897dd744ea"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "257c49ac4f0f405639ff29e9d6b8e493"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "cc3360a956f0e6e18c1661bb371e9470"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "42453db8abf50bd61b5bbeddf0e0a9bd"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "469f1097bf1fbde57e4f4cbbca9c035a"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "9d128746255a8de980c97b2ef73aec64"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "7f4d81b05140a7317be915a75d965716"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "054fc624ed2b3be46ddbf7b370ce0187"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "ab6966c1b7192d8ca56677c9c4ef2467"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "bfab2d377db4bc5d353adcaf6518e93d"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "2323de8d41fc9ea46328a8de5de0f3b0"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "dfc3519e91d96bf519d38a061eb7a990"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "7e520c28e74b9f47d9c35c7303a072b1"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "f27eca7b70b552008fc4912a1c20c028"
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
    "revision": "d9ed85cb73fe293d049cba20ae24ad1d"
  },
  {
    "url": "join/index.html",
    "revision": "701469c2255917ccf5358bc064918192"
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
    "revision": "de2d65e4bcf020e6d4fc1fe78e42bfa1"
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
    "revision": "ea2119e364bde8171d05604b84967998"
  },
  {
    "url": "search/index.html",
    "revision": "c81460abf1d79a93673b157b0639de56"
  },
  {
    "url": "tool/all/index.html",
    "revision": "27aeb99f08c57c2272e14e9958f1b744"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "cea347985757aa0b02cc6a5bb880077a"
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
