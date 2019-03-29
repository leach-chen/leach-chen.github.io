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
    "revision": "ed6ec0d2329ee5082df0435e37fe56dd"
  },
  {
    "url": "assets/css/0.styles.058fb15e.css",
    "revision": "2b3ca014d353bc3ffd5c330e6c95fbf4"
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
    "url": "assets/js/11.03bd841e.js",
    "revision": "c9c382bbeee8cfb3e9bb759be6d22cdd"
  },
  {
    "url": "assets/js/12.802db894.js",
    "revision": "9137e19bfaae1bbddc712ed0928cac67"
  },
  {
    "url": "assets/js/13.5077dd28.js",
    "revision": "037e76b132bb366113afec3821da8b60"
  },
  {
    "url": "assets/js/14.9a1e0b8b.js",
    "revision": "84f88d975276e7e192bea21811085ec0"
  },
  {
    "url": "assets/js/15.d3fe89e6.js",
    "revision": "1c747650dd5a103a8a69cd52ef116a6b"
  },
  {
    "url": "assets/js/16.2b7eb2d9.js",
    "revision": "8fc25d295ce5bc14e1f67316dff73ce3"
  },
  {
    "url": "assets/js/17.e88611ab.js",
    "revision": "322c4cbc854ff640cb410a169bc640e4"
  },
  {
    "url": "assets/js/18.86f2408f.js",
    "revision": "1cdadb96573892299226a33a0c18c274"
  },
  {
    "url": "assets/js/19.97fc6f8a.js",
    "revision": "cbd14fccd7daff68ace083ac690414ed"
  },
  {
    "url": "assets/js/2.27228e9c.js",
    "revision": "bc218038afa663b634738adf9e0607bd"
  },
  {
    "url": "assets/js/20.fcd34b36.js",
    "revision": "50ad5fe61503ce537d7e38c513be4789"
  },
  {
    "url": "assets/js/21.9035e626.js",
    "revision": "051c76bed4392c08600ed6ab9a7ae293"
  },
  {
    "url": "assets/js/22.b3960ac9.js",
    "revision": "0457c3566dcf4ee3cbbcfef979ef983c"
  },
  {
    "url": "assets/js/23.bdeee7a2.js",
    "revision": "4251b4552673c176a2104b5890753452"
  },
  {
    "url": "assets/js/24.12b99193.js",
    "revision": "cada2e3407fb44c290da3859aaccb2ab"
  },
  {
    "url": "assets/js/25.d7fa6bfc.js",
    "revision": "fe03679c44f03d77f7f67bca05c0aa91"
  },
  {
    "url": "assets/js/26.3cd8bb3b.js",
    "revision": "368c59a1c0c6cd192e206dde6d53b397"
  },
  {
    "url": "assets/js/27.a7591798.js",
    "revision": "646d958d39bdbf5256223dabd9f41919"
  },
  {
    "url": "assets/js/28.141a049a.js",
    "revision": "f3f9bd6ebb2e03c628fb1c6d9490c65a"
  },
  {
    "url": "assets/js/29.16262a03.js",
    "revision": "fe2a84024a51086e3f19c74a534079b5"
  },
  {
    "url": "assets/js/3.05f21269.js",
    "revision": "236189752fe26e8141c8600615ecf872"
  },
  {
    "url": "assets/js/30.0199b319.js",
    "revision": "fb10608d7169deee359d9c669b0b926e"
  },
  {
    "url": "assets/js/31.1626e951.js",
    "revision": "7f217aab980e041bb8d306e91df97283"
  },
  {
    "url": "assets/js/32.44fd5074.js",
    "revision": "ec04d80b255deb0227a11b38f9130800"
  },
  {
    "url": "assets/js/33.a61ce228.js",
    "revision": "484f301809321c042fc5d1c5840111f2"
  },
  {
    "url": "assets/js/34.60dc807f.js",
    "revision": "7f8e915e4ffdea03ddd739884abe87a4"
  },
  {
    "url": "assets/js/35.1cc92347.js",
    "revision": "d3442955db5fad931a7a2b113a8baea1"
  },
  {
    "url": "assets/js/36.0032af87.js",
    "revision": "6cad6606c9b24be9c9d61a2d5f4b174c"
  },
  {
    "url": "assets/js/37.2e59c699.js",
    "revision": "d86f4fb5ae0b05a226424010f7672f2f"
  },
  {
    "url": "assets/js/38.bc20d6df.js",
    "revision": "e5d2d0ff321c01a692dcec19594bc12b"
  },
  {
    "url": "assets/js/39.f347e63e.js",
    "revision": "9f36398fa9ec0706a2e075da85a56322"
  },
  {
    "url": "assets/js/4.038fb474.js",
    "revision": "a054ab2e88df8bcf91e4fe819346fd71"
  },
  {
    "url": "assets/js/40.c8e1138b.js",
    "revision": "6be3c604b2e8e4f01eb3a6dbf8f111c5"
  },
  {
    "url": "assets/js/41.6706fc5d.js",
    "revision": "127b59a5f6403e4bef8befaaeda23377"
  },
  {
    "url": "assets/js/42.de9663d5.js",
    "revision": "ee255d645cc8fddd0492a766892a25be"
  },
  {
    "url": "assets/js/43.7b8a366f.js",
    "revision": "ffe072da5459bc236fb5ad3104eb8e3e"
  },
  {
    "url": "assets/js/44.cc79a3e2.js",
    "revision": "f1206d52408943fec13101f6337103da"
  },
  {
    "url": "assets/js/45.ad3fe887.js",
    "revision": "885fa6cee0b867cb775ff625c9626339"
  },
  {
    "url": "assets/js/5.34d2c341.js",
    "revision": "99fb4a1435c36dca8ebeca99a3958428"
  },
  {
    "url": "assets/js/6.13519067.js",
    "revision": "07732367464f7f7fa95a5fec32edf6ed"
  },
  {
    "url": "assets/js/7.f6ae611d.js",
    "revision": "c0d70206d48e75c9002dd9f4f402508a"
  },
  {
    "url": "assets/js/8.9ceed4fc.js",
    "revision": "2009499f19457e30f2a3cc70c6002790"
  },
  {
    "url": "assets/js/9.e2142760.js",
    "revision": "1475d973e75afdbe26498aaa900688b5"
  },
  {
    "url": "assets/js/app.13475337.js",
    "revision": "a8518f61b2bdcfeaaa31abfc2d7a52ef"
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
    "revision": "8364a85004d6df43af6244cd8b7806da"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "657ff23a663ab53a3994ef3e7dcfcef7"
  },
  {
    "url": "game/risk/index.html",
    "revision": "98fa77228d8582c79f8d111f1111cb62"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "b2f99a953d128408aefdae133db20e25"
  },
  {
    "url": "game/smart/index.html",
    "revision": "96895cb3f3ac21319e33b1b91b8b72ce"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "108ce4cef4ac9a9738582a0cec0e4424"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "b0984320f3f64064ed57e35c9cdf7f91"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "8e643278c57a7b252140cb6619e67c52"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "04317189096e3417f7321b68ce609d33"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "82d2202ba0b524e249dc3a92fe797805"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "bd96c4fe9cc0034e09c8869f119f28d0"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "92e7bb1885681d9505452d10517f464d"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "164c32283dccf2dd77a14b3716891c33"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "d03e068d8fe603e761be6781e729368a"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "e573f82f74fc901c02029bde7221c72a"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "bbeb5377b4745aacc1a9143c75d92554"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "fb4c4cd0195029adcd916364b9d97d60"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "cedde29adf13744ef97761ad4db98296"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "6082b7c1482b52e08dff2e4a659e31ce"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "7e6186e7a5ad06d9822a481b7191c21b"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "baebffe7f3cac94dff23d59d1b74e05a"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "b8f9f588f4067b17bdbcd7f777164409"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "9fa997c76921bcbfcc8a3dab78abe645"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "13dffa6ec692ae56e6fa6ce6ddb2bcfb"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "6c718208d977fcb5a3bbc9fecb3cc4d5"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "cd8f01d25d3d5da9bbc99148624e243e"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "28b9aeba63f795dc3e33444966500069"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "14eee38ab920dd83ce9fc96961b1f6a9"
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
    "revision": "e5aae933405e42a091dfee81b748ef12"
  },
  {
    "url": "join/index.html",
    "revision": "317b13215d934ce5d7a21b9bb4da1f43"
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
    "revision": "54969b1383d2c323ac77fd8fda76221e"
  },
  {
    "url": "search/index.html",
    "revision": "a7bbed0e5733938394fca132a5b5efdd"
  },
  {
    "url": "tool/all/index.html",
    "revision": "b4ec15c289f2f18019643642b147209d"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "2851db628cfe1ed6041237b4fc7feffa"
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
