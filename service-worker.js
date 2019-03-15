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
    "revision": "b0a4777c9a1dc4a88c113c896bb182cf"
  },
  {
    "url": "assets/css/0.styles.874b897d.css",
    "revision": "e929103278f331f8df9908a4122ca8f6"
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
    "url": "assets/js/11.04ae5269.js",
    "revision": "a40ad52459d5e89b6b2d127e5429dcac"
  },
  {
    "url": "assets/js/12.03bac589.js",
    "revision": "c71cd48f734753523e13c87c1aa7407e"
  },
  {
    "url": "assets/js/13.7fa63975.js",
    "revision": "e7bf80e1fb2ff1366f51eff35aa059c1"
  },
  {
    "url": "assets/js/14.0dd96bb9.js",
    "revision": "ac423dbdf06f609027209e3b7e7f0e66"
  },
  {
    "url": "assets/js/15.0db552da.js",
    "revision": "d6b75ad6c23e91b98d69bfa24b1be4b3"
  },
  {
    "url": "assets/js/16.b2f056c4.js",
    "revision": "c61f088c796104c02f62892c9e1e5648"
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
    "url": "assets/js/19.a023b029.js",
    "revision": "418f1b45deac9f0cea0f1737f08607e8"
  },
  {
    "url": "assets/js/2.3952a549.js",
    "revision": "389d24be50938f3261824d191a45428c"
  },
  {
    "url": "assets/js/20.3bdff1d9.js",
    "revision": "813b7966a604a1f317e4c9d61ca7f9ab"
  },
  {
    "url": "assets/js/21.2b75569c.js",
    "revision": "04b97d3f4d38ef7ff6b2bafc710b8ad1"
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
    "url": "assets/js/24.fa740825.js",
    "revision": "d63c77a9a8f038194d0e1ebeac4d2fbd"
  },
  {
    "url": "assets/js/25.b1471bed.js",
    "revision": "d408165b6e8c8dc25e361cddcc61abb2"
  },
  {
    "url": "assets/js/26.c837d5d0.js",
    "revision": "81d5b01691321086b67f372b133f75b8"
  },
  {
    "url": "assets/js/27.b11e682a.js",
    "revision": "dc23903da3a68f1eebe09dc5b51c6607"
  },
  {
    "url": "assets/js/28.05a74738.js",
    "revision": "88011d570e14877bb1ece8333eec4349"
  },
  {
    "url": "assets/js/29.5f00d042.js",
    "revision": "a90287b31b1755857320d2cb3f31e7f8"
  },
  {
    "url": "assets/js/3.4e79cc81.js",
    "revision": "9313235a1875fbbfce579d95d8f30cf7"
  },
  {
    "url": "assets/js/30.beaf950c.js",
    "revision": "c6080103d5ba7eecb8b6d4ec5fc7bbca"
  },
  {
    "url": "assets/js/31.770d3d8b.js",
    "revision": "6f5b52156dcce788367df2f822b0b187"
  },
  {
    "url": "assets/js/32.cc03113d.js",
    "revision": "f7889eea621864a2db56058484ab0d8a"
  },
  {
    "url": "assets/js/33.fdf7d6a9.js",
    "revision": "4d7ae09911b7b2d42b00730e8ee2fe30"
  },
  {
    "url": "assets/js/34.715458f8.js",
    "revision": "7c7b2d91c9229944c86d737bbae30105"
  },
  {
    "url": "assets/js/35.ee54c711.js",
    "revision": "a77b9960e2abb24cfc94b07b8e0130bc"
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
    "url": "assets/js/6.de9a194d.js",
    "revision": "86e76ff1612baec59521d226ec381b4d"
  },
  {
    "url": "assets/js/7.7e1b4e5d.js",
    "revision": "cc28c2b216bbb34321154282a0f83975"
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
    "url": "assets/js/app.6c2ae2ac.js",
    "revision": "97f29961dd49f21acea11863da99d3e6"
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
    "revision": "6cb9c09ca219fbebfe83b588f15b1b53"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "d012a90c46137f8a0df54c0e237d862c"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "793c17d4d01624c10e56fef9c91f00f0"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "6dd2a4f955c6df9fb1cc5f9e8b3612fe"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "ed6688f2211f62005c1edcd8c317295d"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "e2b2e089da303fe8e4315de026b47789"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "5bca5c82312db8ed45c05cdc14111230"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "06fb0cf7f3f60ad64329c626299acad7"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "e76d0913456413caef0b95a2503e4bdf"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "f9a8dfcfaafd616b2e4de983c646e3de"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "575bc6fe000dfbd8cd9d56deb37ea1f0"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "f270f34ebf394d53a73d093020c17229"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "1cafc92044a2399a637f638676a1a445"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "36617d3ca20c87689163ca8d2a195de6"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "5167abad7fc7362502f11c449e517ef1"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "3b39813a3df67b2f64e17fd472b1faae"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "7092aa21c2cf2961c986b1443066dd8d"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "ac5ce941f9f887bd2cfac7db29f9c7cf"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "74f6fc7221593e66ad9cfe5d5cb543aa"
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
    "revision": "4f34130b74f9250b7ed412b72ca18ba7"
  },
  {
    "url": "join/index.html",
    "revision": "86c0b448c2b30f78d191748f0eff9010"
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
    "revision": "04f3ec67afcefd17b9c84ebde7c48881"
  },
  {
    "url": "search/index.html",
    "revision": "97b3c4566d13c4d9caac9582fb767e38"
  },
  {
    "url": "tool/all/index.html",
    "revision": "86710469f8629dc8bde112fd5f04dfeb"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "1b2b7ef2a52c20b11b019ff57940af4d"
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
