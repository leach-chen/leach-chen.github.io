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
    "revision": "84699937a089c4cb4d12e6fbf804be09"
  },
  {
    "url": "assets/css/0.styles.d0eec053.css",
    "revision": "5ed4732a23b0f21de39e983e6b622c79"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/Algolia_logo_bg-white.f309cbb8.svg",
    "revision": "f309cbb84b60cd71bee3f21e7f24162e"
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
    "url": "assets/js/11.6b36b233.js",
    "revision": "ef4968c80a782c8348957dbcddf6082b"
  },
  {
    "url": "assets/js/12.957cd892.js",
    "revision": "4fa96899b6c934b3f7bd5c9515a93bce"
  },
  {
    "url": "assets/js/13.b262f41b.js",
    "revision": "403a4cd6ae3b285f43f580eda8c03dc8"
  },
  {
    "url": "assets/js/14.eddf2cd3.js",
    "revision": "4b9a469d86e24ee023e1ddcf4a3e6192"
  },
  {
    "url": "assets/js/15.cbcbb81e.js",
    "revision": "fa0920b81784385eae9ce8c6baab4443"
  },
  {
    "url": "assets/js/16.211ee051.js",
    "revision": "bf05d68fa85948afeabb19aed602c1d7"
  },
  {
    "url": "assets/js/17.e27c3cb0.js",
    "revision": "56b1e41f78f3ce596c15ec0886fda277"
  },
  {
    "url": "assets/js/18.01561810.js",
    "revision": "3bb4e8b2def4020a9e77b03e5a6e8eea"
  },
  {
    "url": "assets/js/19.135b069d.js",
    "revision": "ee7713af6da0b616c35df9eb65a52b9c"
  },
  {
    "url": "assets/js/2.d2c89a87.js",
    "revision": "236bfed0c329c9a5a982795cef27afa4"
  },
  {
    "url": "assets/js/20.5d53a50b.js",
    "revision": "11a61931e35db44d994d7e3c2aa64c66"
  },
  {
    "url": "assets/js/21.7125e00f.js",
    "revision": "58b5a6da71760c460bc9cb4b28ce5d8b"
  },
  {
    "url": "assets/js/22.026a78c0.js",
    "revision": "84430dba5c2263d0b80caed16bc9e4de"
  },
  {
    "url": "assets/js/23.40758bf5.js",
    "revision": "3838f889e18820f772565a1fa1a005fb"
  },
  {
    "url": "assets/js/24.b3f3b2b4.js",
    "revision": "3bfb678551684c50f1abcfd9eafc762d"
  },
  {
    "url": "assets/js/25.1633928b.js",
    "revision": "05e111c36062721f3f6f45403488dc68"
  },
  {
    "url": "assets/js/26.51cfb0a6.js",
    "revision": "3f3f8faa3a135568a3ec11a0d0c25875"
  },
  {
    "url": "assets/js/27.8e0a816b.js",
    "revision": "48ee9beb3d306b7fa2c5e4d208acddbf"
  },
  {
    "url": "assets/js/28.4bfee27f.js",
    "revision": "74b1415194960eb18a6f6edde395766e"
  },
  {
    "url": "assets/js/29.c1c62b42.js",
    "revision": "f73dd74586374e9dbc934b3454183683"
  },
  {
    "url": "assets/js/3.87573312.js",
    "revision": "8532e0046329332b57a4b7ed0d1ecc94"
  },
  {
    "url": "assets/js/30.7c720b3f.js",
    "revision": "7caaf5c1ae6530a6bf2474d09d7dab9b"
  },
  {
    "url": "assets/js/31.d094aefe.js",
    "revision": "04152289c19a158b3815305ea9ca0b3c"
  },
  {
    "url": "assets/js/32.e1ce94db.js",
    "revision": "5231f091b8c7ed3b0a84f4b490f045e2"
  },
  {
    "url": "assets/js/33.4cca255d.js",
    "revision": "0563e997e02e0e0aae00b622a4cf5b1d"
  },
  {
    "url": "assets/js/34.a29de5a9.js",
    "revision": "8e7b6acdefb64dd7be8f87a4d6105f2b"
  },
  {
    "url": "assets/js/35.de6ccd23.js",
    "revision": "b8bd695032d0e5f71188f2529907ba39"
  },
  {
    "url": "assets/js/36.d85ca285.js",
    "revision": "80d4caf3ea646a8a5b2c82087ed5fad9"
  },
  {
    "url": "assets/js/4.4e6b2aba.js",
    "revision": "2daa52e22968c0d4e45de4797d5c783a"
  },
  {
    "url": "assets/js/5.5eed2eaa.js",
    "revision": "3690b44211e494b085aff5fc0f1a09da"
  },
  {
    "url": "assets/js/6.9da6a74c.js",
    "revision": "e3f3c4a0e1677d5d768fd94d08b94fce"
  },
  {
    "url": "assets/js/7.42ec1453.js",
    "revision": "aaa813ffa30433fbe02318c1ccf6119b"
  },
  {
    "url": "assets/js/8.ba3f0c76.js",
    "revision": "445ebd0718a8968aa1d41c9b6e3bc9ec"
  },
  {
    "url": "assets/js/9.a3f2da80.js",
    "revision": "3ba7f1ec20f76cfa112cc219c2b1c0bd"
  },
  {
    "url": "assets/js/app.b482ab6e.js",
    "revision": "74e3582d1bb35db02717c9d51b3b3647"
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
    "revision": "27d2f69ae70fb8ab6a1fde015518b121"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "c55360c7d024d8ec6cf641159ac4fb3f"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "55c97d082826330c9f117fe5a39c00f7"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "e947482d3f33528c569fe2a85ecb3d27"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "2d81bfa4389fd3d5462e293aabac0586"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "2934fb887383cd9759501a39696769b3"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "03d71c6da9021e19358803c59223b034"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "67a2ef353b094165efdb524742a2b79d"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "6d2730e645c7fae37a592d47e6a8f097"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "cd85acf483fed1b4b367f907618b278f"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "3dffedc688c3fd7e1b4a9c2b8aa6d1ba"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "179fc74e5a6e38882b366824912e8370"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "9153dea3919097f2c438bcb46d3a3180"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "7f7551c3c16c201d6d403dfdf2a99bfe"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "c97c9238fc4896abbd0663c4d7ad94ef"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "38d2b9328d4ef8526e150b4c90451b11"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "fbae99326156ffd86fbb9a1c08f24cc4"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "f96805439715c52a8b3950c306ec54ed"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "a2ad40095b8fd10ce5482d9eacddcb2e"
  },
  {
    "url": "img/Algolia_logo_bg-white.svg",
    "revision": "f309cbb84b60cd71bee3f21e7f24162e"
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
    "revision": "229f4ebbb24f3b0e392c66805adffa7f"
  },
  {
    "url": "join/index.html",
    "revision": "5aeaf521ca5bf1af20c8fe5c8220ade8"
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
    "revision": "ecf85f471cd1894456c761ef3c922ad2"
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
    "revision": "a03b6646236194579d6ea0e774b3ddb4"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "769bbdd3190aba3a1356bbda79e75c62"
  },
  {
    "url": "search/index.html",
    "revision": "b4cb728f4bfba9af48ef1661bf9731f4"
  },
  {
    "url": "tool/all/index.html",
    "revision": "1116eb394232b2751389a3ed11e343f2"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "a7bd523724bb4d08967ecbe9f051ae63"
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
