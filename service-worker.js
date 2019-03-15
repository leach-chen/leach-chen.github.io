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
    "revision": "01faa121598806b88c338878162685b2"
  },
  {
    "url": "assets/css/0.styles.bf1fbd40.css",
    "revision": "5655c893b7f593868e26838df6eb97cd"
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
    "url": "assets/js/10.2d0be5da.js",
    "revision": "3a0580f127ff369608fed763d6f1e068"
  },
  {
    "url": "assets/js/11.3dec2124.js",
    "revision": "95f60fe234256f6e4f689e15f7b849d1"
  },
  {
    "url": "assets/js/12.5f093fe1.js",
    "revision": "92fee7e336c8f35cb7a1b16398314812"
  },
  {
    "url": "assets/js/13.1c4a40b5.js",
    "revision": "143d3931b056aec484fdb26e23eab5de"
  },
  {
    "url": "assets/js/14.770c2d7d.js",
    "revision": "8f9b5fbd167ef96b0a0d210f69f46e7e"
  },
  {
    "url": "assets/js/15.9efa2567.js",
    "revision": "952b70db5f904a9b888bf2a78756c5b4"
  },
  {
    "url": "assets/js/16.453b356c.js",
    "revision": "3589cb5103ac58c54b519bd6a0eaccc5"
  },
  {
    "url": "assets/js/17.189b99f9.js",
    "revision": "789bab84fcc08c8906bf6db4fba4e864"
  },
  {
    "url": "assets/js/18.14b794eb.js",
    "revision": "a5bff64330cb92d6348f517588a11fd8"
  },
  {
    "url": "assets/js/19.42081910.js",
    "revision": "05e6183e5d13ca126bc8d5dae7a5dbe8"
  },
  {
    "url": "assets/js/2.3952a549.js",
    "revision": "389d24be50938f3261824d191a45428c"
  },
  {
    "url": "assets/js/20.928d1ade.js",
    "revision": "70e932198ef8ad175fa65bad67519e5b"
  },
  {
    "url": "assets/js/21.7cfc372a.js",
    "revision": "d2a73cd5defc53260457ead279dbb006"
  },
  {
    "url": "assets/js/22.1ed875f6.js",
    "revision": "b51b0758e4094718cd9537ccf693f861"
  },
  {
    "url": "assets/js/23.c2a3bf9e.js",
    "revision": "9dd3688cb70340b928ec6000cc3a8773"
  },
  {
    "url": "assets/js/24.3ced93e6.js",
    "revision": "3082cdf2de76c3350960879a650d60dd"
  },
  {
    "url": "assets/js/25.71397f96.js",
    "revision": "e8104c8fa1018018e047d853715df815"
  },
  {
    "url": "assets/js/26.400f2b7f.js",
    "revision": "9d22a931c34612b02b6b484511e9c582"
  },
  {
    "url": "assets/js/27.15d53595.js",
    "revision": "778f247f45bc8853619cecd4b2f3634e"
  },
  {
    "url": "assets/js/28.d5a787c8.js",
    "revision": "f48a5cd0c3c35b0fa7d3f419452e3a28"
  },
  {
    "url": "assets/js/29.ecac6a86.js",
    "revision": "806fc73bc68a8e4359ed51529e0ad23e"
  },
  {
    "url": "assets/js/3.4e79cc81.js",
    "revision": "9313235a1875fbbfce579d95d8f30cf7"
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
    "url": "assets/js/35.fa72a317.js",
    "revision": "d25b392dc841efdeac0a0dc71cc2668d"
  },
  {
    "url": "assets/js/36.a046c03b.js",
    "revision": "205b35b0fadb38e2a5a5db7c7acdacb7"
  },
  {
    "url": "assets/js/4.3b24b6d8.js",
    "revision": "6c3b1bacda9bfd43b4eb94babe84bc98"
  },
  {
    "url": "assets/js/5.d298672c.js",
    "revision": "ccae9acadca4c7540356ff27e37cd54e"
  },
  {
    "url": "assets/js/6.8fd06ec7.js",
    "revision": "ccf1f17556c3095538848d7d475e6514"
  },
  {
    "url": "assets/js/7.4be55899.js",
    "revision": "9def5e493415e40e71a5f07cefaa1556"
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
    "url": "assets/js/app.c9a4ab70.js",
    "revision": "693c9f9f7b76696b8fda2cde203b9e3a"
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
    "revision": "e82b0db554f466bd6e4c1b63b9ffbb0a"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "ab5887098e16eaba9c5c76cbcc2dd599"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "afb237125dacc75172f0d337b2568517"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "e8ac3cf10691c0138ab9ef6f692aea34"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "e5ea93838f57a78c91fd210061462324"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "a0c7ad6213d6406ffe2bd5af1af69a0b"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "e1e5aa8aaa57b42dadf148a7252f65ca"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "c82d48a3251efb63bf5ba6582d6e075f"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "15b74705a81af130b563f4ada1fc1abd"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "005ea1d103be949bfcf31f61b66f6541"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "71796d6c229629b14cb096f3f6f2a81b"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "91c39ddf2632233283cce20aee29f570"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "4620e62aa06ae405ec559a4abc85ff86"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "2e5b5197ff54d47bcbdca35f5edee32d"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "2b79b580009cc80410f54d0d21f302d5"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "fe3f6a781b05c4cbf7ad09cceb493987"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "f095a6eacaaeb1fce52d63b0ac5d8032"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "17898173926fa0b7cb7ac6ffaa40ecd7"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "52ddaeacd0bfe126615ebeb055ee6742"
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
    "revision": "c7534d034890d2187db4329effd24bb7"
  },
  {
    "url": "join/index.html",
    "revision": "f3473fcb892d3eb49ee7a574a65f544a"
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
    "revision": "40fd7e9234606a341adcbb1ce0a15d51"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "80774afe1024c8022d108a59ae1ad872"
  },
  {
    "url": "search/index.html",
    "revision": "f8a459536c9294060e4692589e95690d"
  },
  {
    "url": "tool/all/index.html",
    "revision": "5c8c8df265eb1851927c806cd807a1f3"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "46398c7e99d7ad4860922b04b70a835f"
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
