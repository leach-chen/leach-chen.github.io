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
    "revision": "e03a92ebc90bca6681e6e875f6c7bc95"
  },
  {
    "url": "assets/css/0.styles.198881da.css",
    "revision": "e4d168cb3606a6074ca627e1b11e959b"
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
    "url": "assets/js/11.a14e3c58.js",
    "revision": "39f40c8ddfd473caafe1ac68617bb662"
  },
  {
    "url": "assets/js/12.4912bb62.js",
    "revision": "7e32fe020b7659f50d0e2e82e0b8f7ba"
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
    "url": "assets/js/15.e6052c5f.js",
    "revision": "277da0dafa9f7a8e6393aed35970e418"
  },
  {
    "url": "assets/js/16.368fa4a5.js",
    "revision": "a08485500247a678eb70dc0bac90169a"
  },
  {
    "url": "assets/js/17.e27c3cb0.js",
    "revision": "56b1e41f78f3ce596c15ec0886fda277"
  },
  {
    "url": "assets/js/18.4bd55ccc.js",
    "revision": "9f2b7b37b72fc9cc467c7a932533d4d0"
  },
  {
    "url": "assets/js/19.9e8cfa16.js",
    "revision": "f13bf491d28f3ffbe95191f3f596a6f2"
  },
  {
    "url": "assets/js/2.d2c89a87.js",
    "revision": "236bfed0c329c9a5a982795cef27afa4"
  },
  {
    "url": "assets/js/20.49943ad7.js",
    "revision": "7785e781d69cde3a4639ca6f3b699070"
  },
  {
    "url": "assets/js/21.7125e00f.js",
    "revision": "58b5a6da71760c460bc9cb4b28ce5d8b"
  },
  {
    "url": "assets/js/22.b3f66bf8.js",
    "revision": "99049c19a27b01de0d0d1b204d75352d"
  },
  {
    "url": "assets/js/23.40758bf5.js",
    "revision": "3838f889e18820f772565a1fa1a005fb"
  },
  {
    "url": "assets/js/24.b7436271.js",
    "revision": "60432497a677cd08b227f1f6abc4c8c2"
  },
  {
    "url": "assets/js/25.a2274138.js",
    "revision": "a2c8bc84c3e7e40bd9d64159aba442ff"
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
    "url": "assets/js/28.eda916a7.js",
    "revision": "4ff8f7b03df4c126f3b4578acd4a5501"
  },
  {
    "url": "assets/js/29.c813d42f.js",
    "revision": "926e5c5d665364a32023312e393b921d"
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
    "url": "assets/js/33.2332be54.js",
    "revision": "23ee446a958f4ab93f8bd97788703392"
  },
  {
    "url": "assets/js/34.d5a2742f.js",
    "revision": "98539e58ff28126240a26fff067c5b90"
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
    "url": "assets/js/5.e4c608c1.js",
    "revision": "879ac3011ec3202f5c8becfce8d32d0c"
  },
  {
    "url": "assets/js/6.9da6a74c.js",
    "revision": "e3f3c4a0e1677d5d768fd94d08b94fce"
  },
  {
    "url": "assets/js/7.a4d9ae27.js",
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
    "url": "assets/js/app.7309dbdf.js",
    "revision": "f6e5de6bd9d484b1911aef695d3aa68a"
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
    "revision": "665f0fd56a4e0577b8950edf494ef2de"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "82c25f6f9b31dfded9b70919b463999e"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "dde4aaf8493acdaaec3ca519a23fecd8"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "1cf5595580f62f587eba5d0c95c28568"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "993e01183a6928b6c7fc614dddb3779a"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "98a7cd23bfe0bf2b394361331a679394"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "6e457a2bfa351324bd4d00d2dd835c8b"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "3b6a8e1387b1e6be8a894f0c7a71203d"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "11839c88e3dffdf751e9d76a160f7cde"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "7881a1c4a34cdf7c82ab7047d61e62df"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "f8eb48cfbc5fda7c6cc78b531f00089d"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "ca40b1f1b74c2cf71729ece2ed081fb5"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "4ace2cc2c2eb089f5e09b8dc56ea460a"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "8b4a1e91d524551ed960c49958d69d31"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "2f6e9fe9924b9929dcaf487b9c263018"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "91df9a4231bfa00d64d78bc843e720c6"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "51bfabd2b1e6cd93f7b1c3b88e896229"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "8d2c6cb35e8a7db8e34f2f82514338f0"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "6866a5c07a4a50b59d5949e2c625c818"
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
    "revision": "acc7820e9e11e058a7ec92ce1c416a2e"
  },
  {
    "url": "join/index.html",
    "revision": "fe42b85670a8dffd7db16977234a1d64"
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
    "revision": "42b475faf290097d474e74743ebdd346"
  },
  {
    "url": "search/index.html",
    "revision": "0481d93baa570a5b0e8ba65491881cfb"
  },
  {
    "url": "tool/all/index.html",
    "revision": "33a92c68a53cf71f5e0308dc5b7e2a94"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "5b3cc965e656c76561b97dcbab66bc0f"
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
