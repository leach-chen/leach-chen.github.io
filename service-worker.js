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
    "revision": "8752669e6d3e96837a0a1819186b7e31"
  },
  {
    "url": "assets/css/0.styles.189e9eea.css",
    "revision": "5655c893b7f593868e26838df6eb97cd"
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
    "url": "assets/js/11.3dec2124.js",
    "revision": "95f60fe234256f6e4f689e15f7b849d1"
  },
  {
    "url": "assets/js/12.edcd678e.js",
    "revision": "b5d4c6d2882121405a5cc3f9eac123c6"
  },
  {
    "url": "assets/js/13.ddacbf1c.js",
    "revision": "273394038db9dc4aede1f0d3c274a329"
  },
  {
    "url": "assets/js/14.190d30d6.js",
    "revision": "0f8c436cf549f5293ddb09f0569306fb"
  },
  {
    "url": "assets/js/15.c95c7ff7.js",
    "revision": "314d4d36c68e42f27f1885c11e8ce13c"
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
    "url": "assets/js/19.d7e3b8de.js",
    "revision": "0774f0769f5e13d0409dc539917f5109"
  },
  {
    "url": "assets/js/2.cbf7da87.js",
    "revision": "4726e1bf3b1efdcf3956cbc218829caf"
  },
  {
    "url": "assets/js/20.feebcade.js",
    "revision": "b4df7e51a970eda1609acf0572c0adf4"
  },
  {
    "url": "assets/js/21.7cfc372a.js",
    "revision": "d2a73cd5defc53260457ead279dbb006"
  },
  {
    "url": "assets/js/22.285152c6.js",
    "revision": "d1403e01c637eef543070bdd4a15fdd9"
  },
  {
    "url": "assets/js/23.2a427cb8.js",
    "revision": "d3ffe59488b88cc8ccda236adc885416"
  },
  {
    "url": "assets/js/24.8e286731.js",
    "revision": "22697800f3e4643a36a95b78b3105a1c"
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
    "url": "assets/js/29.a3953e30.js",
    "revision": "15b23286b8e69109ae34ddef89076ca9"
  },
  {
    "url": "assets/js/3.d1440797.js",
    "revision": "8938588772d3e1098f34e4343acb897e"
  },
  {
    "url": "assets/js/30.763bef58.js",
    "revision": "c38f8c0d980ccd9f7882b47e9823ff9a"
  },
  {
    "url": "assets/js/31.770d3d8b.js",
    "revision": "6f5b52156dcce788367df2f822b0b187"
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
    "url": "assets/js/35.96e1c211.js",
    "revision": "ef03a011735ab48e436198e24b96f5ca"
  },
  {
    "url": "assets/js/36.a046c03b.js",
    "revision": "205b35b0fadb38e2a5a5db7c7acdacb7"
  },
  {
    "url": "assets/js/4.b2d139ac.js",
    "revision": "78ed6956c511422b69621971b837f409"
  },
  {
    "url": "assets/js/5.d298672c.js",
    "revision": "ccae9acadca4c7540356ff27e37cd54e"
  },
  {
    "url": "assets/js/6.3f7bd11e.js",
    "revision": "634198e504f274a2d25018e635e0b9e0"
  },
  {
    "url": "assets/js/7.2b5c66a0.js",
    "revision": "fbad54063bde406185b8ce39aff515f1"
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
    "url": "assets/js/app.f7d86bf6.js",
    "revision": "596d2a3fcf4ec10cd726d286a51b96fe"
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
    "revision": "33a46df5a0041218dc2748cd32595a22"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "fb60b996d2a3e8770f403709f01d41dd"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "3dcf02835a682b425784bf95d6d835cb"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "5114e52277870fceb668ebf68e0ed3b6"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "a7b9a120c7635c2ef0917e08b7a4ca9f"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "d2607273a73e4f3972a21edc421b4932"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "bc1fed17c7369086b4727f7626e7558f"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "b0906587570311a805e36e35b067615e"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "44b91e43a9aee499ad6b56ff0cded8c3"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "a0f50d6e07ef3e7faf07667cc5190b3d"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "167e24feeacb9498fa86dd215338eb36"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "96118cf3f387b47fa13f920665f8c27f"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "904350735c947c8f314a7151d3d30845"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "e02e49c01fc5617b8f36ba2b2fda0b78"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "cb9af5b91457cb233dde207d902d33ea"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "9c9b5623a759dec0b6b0e20192028cd8"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "ef7f16201759aaae712d546e47785b67"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "c4534cf178b6e4efb8e5f58c21ad8561"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "69c05cb65b90417dde871960027e1a31"
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
    "revision": "5074c5938ef0a9a036aeb12d80bf39ed"
  },
  {
    "url": "join/index.html",
    "revision": "7a7cad54508f3eabbc2547fe3922d192"
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
    "revision": "65fcfd1215ab66b365931b9fdceac036"
  },
  {
    "url": "search/index.html",
    "revision": "67031cd324dc07fbd3e468fdd0e657f8"
  },
  {
    "url": "tool/all/index.html",
    "revision": "1d4aaf0b51786a95b2aac6a38e23d271"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "28c7fda064b4ffddd5b625abe6c8ceee"
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
