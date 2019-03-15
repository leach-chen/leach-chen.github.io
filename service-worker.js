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
    "revision": "af523dc23a3bc8c9e1b90c9ae341f62d"
  },
  {
    "url": "assets/css/0.styles.69b086d5.css",
    "revision": "f561d872df5658b73b3d594fe6083ebe"
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
    "url": "assets/js/10.2d0be5da.js",
    "revision": "3a0580f127ff369608fed763d6f1e068"
  },
  {
    "url": "assets/js/11.0af3b265.js",
    "revision": "83f4cd34a43a719a06cfc80f6bd5b6d1"
  },
  {
    "url": "assets/js/12.ce3dbe8f.js",
    "revision": "3547f9f97763f6c0255f88101f5d7b6a"
  },
  {
    "url": "assets/js/13.48e2e8b7.js",
    "revision": "1681a49bcacf689ca4f2cf1690119390"
  },
  {
    "url": "assets/js/14.43b061af.js",
    "revision": "facd76f469d7d7970fc00fed99f54248"
  },
  {
    "url": "assets/js/15.1c9f2863.js",
    "revision": "ac05f33fcee6a6d7cb70ac5f5e4b81a1"
  },
  {
    "url": "assets/js/16.453b356c.js",
    "revision": "3589cb5103ac58c54b519bd6a0eaccc5"
  },
  {
    "url": "assets/js/17.df0cb24d.js",
    "revision": "3e9be57a94dac089b308306a20909317"
  },
  {
    "url": "assets/js/18.5a3d06b9.js",
    "revision": "ab83c2b0e9a6eefb7e29982929d16216"
  },
  {
    "url": "assets/js/19.28dd254e.js",
    "revision": "060da5fe9ef133bddb9792c1dda76be1"
  },
  {
    "url": "assets/js/2.89753c70.js",
    "revision": "fa320d178ee9432aaabd0afd7134fa52"
  },
  {
    "url": "assets/js/20.feebcade.js",
    "revision": "b4df7e51a970eda1609acf0572c0adf4"
  },
  {
    "url": "assets/js/21.2a0f3ac1.js",
    "revision": "fb8def0dbbd1445b2dd0a3ff68bd4e5f"
  },
  {
    "url": "assets/js/22.889d555f.js",
    "revision": "2a43c9504ca8e10bdd568e33bf34c830"
  },
  {
    "url": "assets/js/23.3eff795b.js",
    "revision": "ec277d818a4511758ad7233c7cbc40e9"
  },
  {
    "url": "assets/js/24.fa740825.js",
    "revision": "d63c77a9a8f038194d0e1ebeac4d2fbd"
  },
  {
    "url": "assets/js/25.2bcdbd0d.js",
    "revision": "ec29b02ce27662790c99ef0189c2e1c9"
  },
  {
    "url": "assets/js/26.c837d5d0.js",
    "revision": "81d5b01691321086b67f372b133f75b8"
  },
  {
    "url": "assets/js/27.b48dbd51.js",
    "revision": "cc1706a6b7a2e30cf5215237bfb1f7d3"
  },
  {
    "url": "assets/js/28.fbb1d040.js",
    "revision": "5a325927e5f3c15fcce42e1353c6221c"
  },
  {
    "url": "assets/js/29.ecac6a86.js",
    "revision": "806fc73bc68a8e4359ed51529e0ad23e"
  },
  {
    "url": "assets/js/3.40f86e5d.js",
    "revision": "8c111f5c3b04cded8e5a177425236967"
  },
  {
    "url": "assets/js/30.ce10de12.js",
    "revision": "7a71e8d01fd6cab04e2135afa4280f19"
  },
  {
    "url": "assets/js/31.3799f5af.js",
    "revision": "d78a10c312e0ef8b3b652c46a3d709fe"
  },
  {
    "url": "assets/js/32.bd6ddc62.js",
    "revision": "2e90547fcc1e0e01e7d812d297f89fa4"
  },
  {
    "url": "assets/js/33.cd067d31.js",
    "revision": "872e32b15dd53af3199eebb5e8a488df"
  },
  {
    "url": "assets/js/34.715458f8.js",
    "revision": "7c7b2d91c9229944c86d737bbae30105"
  },
  {
    "url": "assets/js/35.81a48083.js",
    "revision": "353afb6e45124ca8539903ffa55d0d97"
  },
  {
    "url": "assets/js/36.a046c03b.js",
    "revision": "205b35b0fadb38e2a5a5db7c7acdacb7"
  },
  {
    "url": "assets/js/4.ac0c2f0d.js",
    "revision": "b8b9f5b61789cc5d54dac202a6171fae"
  },
  {
    "url": "assets/js/5.0e02ea27.js",
    "revision": "918a4343cc7a123f5532563764db1cef"
  },
  {
    "url": "assets/js/6.9930f808.js",
    "revision": "f7f3cca8be282d0a365a037d15612d34"
  },
  {
    "url": "assets/js/7.69881686.js",
    "revision": "f2f297efdbd6468c2976f7973fa9383b"
  },
  {
    "url": "assets/js/8.7caefc07.js",
    "revision": "5194d9fd899a1283a74bc1d2cc4687d4"
  },
  {
    "url": "assets/js/9.9f2ff5cb.js",
    "revision": "3b94b21e62d7f4d3c42abbb692ebdac4"
  },
  {
    "url": "assets/js/app.061b483b.js",
    "revision": "e59239561f2ce0d7c5ab471d8268cc57"
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
    "revision": "a7afcea984ff295bd2e4a968c65e8285"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "d44c8735eb598e0353e7e2515224637d"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "048034e8c0ae0f1b042d8f8b532e57bd"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "8ec2d58faa08970a616614f5ac8004c2"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "52e3cc8ad5c2ffd1f798fcdc2e805f8f"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "f4faf9eb285bc38a92b6d7b0d16d87c7"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "40c84dfcce46df9ca4bb3a39c3fa8fb6"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "e5efb1c9724ce67b0bbcc867113aeb1d"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "2aa3fee0fa08fac0881b7f987b1c8d6c"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "5b5dceda892deb7b0cf214d83904095e"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "c5957674c568af04f6b5abe8da130979"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "86a971dc696c0fb3b553631fec252bea"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "c5e45e82b542fbc2e1e1dc6355944a29"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "f3e17983d11b977b4e1e4c9c456077af"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "3b8cd882e03300725e5b40e60263d392"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "20615e785a6e7146e3ae176b8d7ea158"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "1006d3138772e8e6e52bc4736f392448"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "a9e2b01702f25c9bfba773d5c2e43244"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "3bc074813dd4bb01e0da3cb92043fbef"
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
    "revision": "322272b1c7d7f8d7f6bc6e8bed0c592c"
  },
  {
    "url": "join/index.html",
    "revision": "49046bc5d777255a10f61d3acb830770"
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
    "revision": "7273bcceb111876e341eb0eedb7a616a"
  },
  {
    "url": "search/index.html",
    "revision": "db1698189d629265f24b6197d7f330d4"
  },
  {
    "url": "tool/all/index.html",
    "revision": "d407df33dd560f42bb9658fd19e24621"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "2b28c4992d735dc28b5681cd8acf84c9"
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
