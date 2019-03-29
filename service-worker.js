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
    "revision": "7a10b7958d7072b45cb74f4ecc712627"
  },
  {
    "url": "assets/css/0.styles.230e7ee9.css",
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
    "url": "assets/js/11.59256537.js",
    "revision": "a47a044ee6a279b893b189a4cd9b6d8d"
  },
  {
    "url": "assets/js/12.5dff8325.js",
    "revision": "82c63e674b9cb6e3d022edf7d69168d3"
  },
  {
    "url": "assets/js/13.b2fbdfd0.js",
    "revision": "7bb30058af33ff87b1d4dcaa2b902307"
  },
  {
    "url": "assets/js/14.a9f6142f.js",
    "revision": "551050163c983a1dee417eb9d3682220"
  },
  {
    "url": "assets/js/15.c3916cd6.js",
    "revision": "26b7e97eb6f9c88e47836ce8d0dabb8f"
  },
  {
    "url": "assets/js/16.2adab160.js",
    "revision": "cf305317e2fcbb0632b51985a6c86f9d"
  },
  {
    "url": "assets/js/17.8be9bada.js",
    "revision": "c67029170ca8885774bfc8d42140670f"
  },
  {
    "url": "assets/js/18.c9d7a1dc.js",
    "revision": "21dd8faec8c95ee6c7663311019c032e"
  },
  {
    "url": "assets/js/19.977e232e.js",
    "revision": "ed9e57a473f619ccd530f5e9b8fe7d2f"
  },
  {
    "url": "assets/js/2.27228e9c.js",
    "revision": "bc218038afa663b634738adf9e0607bd"
  },
  {
    "url": "assets/js/20.9e13df59.js",
    "revision": "81b2fda161e5c6d048c8ce3bf6539c73"
  },
  {
    "url": "assets/js/21.cd70743b.js",
    "revision": "596f678f2eec787a96fb7540be5987a0"
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
    "url": "assets/js/25.43be81d1.js",
    "revision": "9b82c617027f304c080c08ca59ce60ae"
  },
  {
    "url": "assets/js/26.3485921a.js",
    "revision": "0313cdd71d8b1e2d9cc5849b5dc78083"
  },
  {
    "url": "assets/js/27.9a422f26.js",
    "revision": "44f438f0ca30933dcd560e86daf601d6"
  },
  {
    "url": "assets/js/28.3b1155dc.js",
    "revision": "d3b718c920547ab5f8c6e7ef11ba908c"
  },
  {
    "url": "assets/js/29.822a6414.js",
    "revision": "4a846154ca2844c9ec43b83fee4c220e"
  },
  {
    "url": "assets/js/3.7c43f684.js",
    "revision": "d5ff349c4144e00eaf64d592ead7ba75"
  },
  {
    "url": "assets/js/30.8a9d9142.js",
    "revision": "5b1f927e88359b6580a46037566992a8"
  },
  {
    "url": "assets/js/31.93b3d90d.js",
    "revision": "11e9bdfb9e5fa46a8bd03f5e6a863c79"
  },
  {
    "url": "assets/js/32.84ba59d2.js",
    "revision": "70d7a7abf1d15c6a0a9522a113b13715"
  },
  {
    "url": "assets/js/33.41941ae5.js",
    "revision": "60d718b53a3e68b56360d650ac5aa964"
  },
  {
    "url": "assets/js/34.c01bbf51.js",
    "revision": "df5e8ba55f626c236dd2498ded46ba2c"
  },
  {
    "url": "assets/js/35.3412dc92.js",
    "revision": "1c29fd418490a692e85cfbe1df9ace79"
  },
  {
    "url": "assets/js/36.0f112964.js",
    "revision": "1a34a803ea9431511ed91eacd39b46ef"
  },
  {
    "url": "assets/js/37.7ff5f5f8.js",
    "revision": "9591222ada9e4ff383e663da1055b226"
  },
  {
    "url": "assets/js/38.e9121245.js",
    "revision": "1150d7ed38f3166759c98dba5d22f39e"
  },
  {
    "url": "assets/js/39.73d29b3e.js",
    "revision": "000106d54ec3cb3aed3a8b9e92f3ff42"
  },
  {
    "url": "assets/js/4.038fb474.js",
    "revision": "a054ab2e88df8bcf91e4fe819346fd71"
  },
  {
    "url": "assets/js/40.37e406e3.js",
    "revision": "bfbbdbe9959f050007f8cb3392f148a6"
  },
  {
    "url": "assets/js/41.ba233a61.js",
    "revision": "ad4fdb51049680d8a80a77300a9a02cb"
  },
  {
    "url": "assets/js/42.34e56642.js",
    "revision": "2ef2fd51717b427c228a28c4874f26b1"
  },
  {
    "url": "assets/js/43.cc52fa6d.js",
    "revision": "525de5bdcece8e6d472d620e4f52e943"
  },
  {
    "url": "assets/js/44.314c60c8.js",
    "revision": "1c0a8f3d7fd49763de1f6af4d3c8ffcf"
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
    "url": "assets/js/app.2d8004b3.js",
    "revision": "172fc520bd45e9c96489c96c0c41f6a1"
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
    "revision": "79f6230c5f3cbbab5aa09fd69d6c6a3a"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "4e8f41ecc29b516558b22cf1e35ffdca"
  },
  {
    "url": "game/risk/index.html",
    "revision": "4c507517cf7f3212fabb295ddfd4e4bd"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "63c5e9b32079e64bb0d7651c0c33b5b5"
  },
  {
    "url": "game/smart/index.html",
    "revision": "ec7919d952ebacba8cca6dc0c077ecc0"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "5dc0e5c258bf01f550d45fb95a2b64cc"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "ab2c63eb22603ce3f72b71d77c36069b"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "3664bd639e3680c91a163ba97d43f506"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "2e5d523066c0fb3687b5a76b9d729ea0"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "b4d343d7a7b7a633a9c617b31836450d"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "28ab28f0dc3df5d880b5919e753c64dc"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "6699322b22d4a3bdb284531357a7103c"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "04affd0a2f080030339c5b6b52a53595"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "b79c29d207430700588bd46284311384"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "155498b921df4b494b725f67b8d752fa"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "2b5005918cc2f6c1d9a10db8a211d3c2"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "4e33038fcaaf973d23e48de05f4b6ab9"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "559cff60bf47bc6e6e8ee636746de4b6"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "f146ce1d8fc6e7187dcd2a34b86e7899"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "1011291f543524ae8d164b25192724de"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "ce3f0c557225a8733ad136c479643184"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "4c5bb6bbcb0b2dd008db95b8fd52f5ba"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "b526741251c21e30463d07140f5efdc8"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "dfeeb147afb93038b752e502eaafbd0f"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "4bffc4c97da6532e3ca7faa8bd1463fb"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "3194450581c6182555955c7b3f0bc4e4"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "e157fe8ff43adae0713e7bc066d1f86f"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "16cf371a719d4f90840d6646ef93b79b"
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
    "revision": "7412ee6935d8cf706275b14cf14a9b65"
  },
  {
    "url": "join/index.html",
    "revision": "008818d2f48fba3f0951ffa6e2e95902"
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
    "revision": "54237ac9e8c6b361b012d55966dd1d9d"
  },
  {
    "url": "search/index.html",
    "revision": "9e93962924d09d88176e02676a53168f"
  },
  {
    "url": "tool/all/index.html",
    "revision": "808861b7312e396255b81dce61f8ecf5"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "cebef7881ff802d7791440ddc4e959b2"
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
