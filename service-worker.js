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
    "revision": "f7a3684360dbf89b97962dd1ab57b79a"
  },
  {
    "url": "assets/css/0.styles.ff4ed60a.css",
    "revision": "42eadb12b0e3e6f0718728222901ef2f"
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
    "url": "assets/js/11.e1082d66.js",
    "revision": "1802bc5a46ddf60b12d8b6d0aabc9afd"
  },
  {
    "url": "assets/js/12.e2d78086.js",
    "revision": "67a3a8ae2ed8699bc92e5c563d5f8f9d"
  },
  {
    "url": "assets/js/13.7acac453.js",
    "revision": "50f71af7b7ede2b3c48a892295580844"
  },
  {
    "url": "assets/js/14.8846a669.js",
    "revision": "511373c90952ef507804b04d9fbf339f"
  },
  {
    "url": "assets/js/15.8cd7b643.js",
    "revision": "e9668bccbe8aa74da99781ad2667b594"
  },
  {
    "url": "assets/js/16.c4c6a5cc.js",
    "revision": "bb9782535e2eb07d3c57e6a54d458126"
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
    "url": "assets/js/22.4c3d030f.js",
    "revision": "484d6855f9516a6d6081c41350240147"
  },
  {
    "url": "assets/js/23.bdeee7a2.js",
    "revision": "4251b4552673c176a2104b5890753452"
  },
  {
    "url": "assets/js/24.8cd6f6ee.js",
    "revision": "f007ef39d637ba293aaf043cf3cff08e"
  },
  {
    "url": "assets/js/25.c41c0684.js",
    "revision": "ad1c1933d2b17446ee3b713130419191"
  },
  {
    "url": "assets/js/26.c786864d.js",
    "revision": "e31f07924a4138193a879bcdbd69a010"
  },
  {
    "url": "assets/js/27.a7591798.js",
    "revision": "646d958d39bdbf5256223dabd9f41919"
  },
  {
    "url": "assets/js/28.095dd441.js",
    "revision": "f30a1ef5c9de09b80b17c76ba5f53637"
  },
  {
    "url": "assets/js/29.d27c8536.js",
    "revision": "8f1ddaec94a57d7548ec46c3c0ba9388"
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
    "url": "assets/js/32.a75cd694.js",
    "revision": "910ff287a0f050d20499ac3850d23f7a"
  },
  {
    "url": "assets/js/33.f3dd8a0c.js",
    "revision": "63b5cdb153096c58c9a58ae8fd23ccb5"
  },
  {
    "url": "assets/js/34.0dd8f116.js",
    "revision": "dc44ea32e4a2c0e2ffd53cae280ba53d"
  },
  {
    "url": "assets/js/35.bc4da097.js",
    "revision": "28f8eadeb8ae6d8c0c50aee6a793764f"
  },
  {
    "url": "assets/js/36.0f112964.js",
    "revision": "1a34a803ea9431511ed91eacd39b46ef"
  },
  {
    "url": "assets/js/37.1edd3028.js",
    "revision": "f024ddff46328cde9503488d9b63d610"
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
    "url": "assets/js/40.871bdbd7.js",
    "revision": "778a0bf2375868140569ef6407f5fe03"
  },
  {
    "url": "assets/js/41.dd01427c.js",
    "revision": "10b6882531dac01e01849da78a8b2ca7"
  },
  {
    "url": "assets/js/42.de9663d5.js",
    "revision": "ee255d645cc8fddd0492a766892a25be"
  },
  {
    "url": "assets/js/43.b507f776.js",
    "revision": "187c071de308f4e2aee59840ac00f5c8"
  },
  {
    "url": "assets/js/44.54540149.js",
    "revision": "bb9672d05aac844d608f5b59ad4d7abe"
  },
  {
    "url": "assets/js/45.ad3fe887.js",
    "revision": "885fa6cee0b867cb775ff625c9626339"
  },
  {
    "url": "assets/js/5.51adfdb5.js",
    "revision": "607764e0bc7f52ad873164fd2f4b638a"
  },
  {
    "url": "assets/js/6.13519067.js",
    "revision": "07732367464f7f7fa95a5fec32edf6ed"
  },
  {
    "url": "assets/js/7.30542440.js",
    "revision": "6267b1d9521d842a5cc001f65c1b2991"
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
    "url": "assets/js/app.36cdea96.js",
    "revision": "6f0421257a138f4f8900c16da6837035"
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
    "revision": "884e14f70100fa593520ee04ab3d8d24"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "98352d7d1a935ce367447d300a1453c3"
  },
  {
    "url": "game/risk/index.html",
    "revision": "90b20785a98de332f7b88e1144e02c86"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "d476bc144dc6e42c96a1cef1ca57304f"
  },
  {
    "url": "game/smart/index.html",
    "revision": "8c91ba851ceb45ae0aa60c25cbbaa045"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "ab3121563b061e1d63a5d987eb4187e4"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "476cb6e0360dcb27e4be4605081a7864"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "89ae4b41704c105722217240cee210d6"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "892de82cbe6efb7ca578b6a39c8ba9e0"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "7f18e2c172a0d2c3e780df02e7ee5756"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "4b3e5eda95ca1441336f50a0c6519df4"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "bd1bfb0c3905b3f80728132a2bde36df"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "8cf368aaaae53f0d37c73762becca4c5"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "17a23678aed82ac6253023df3b4805dc"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "752ebd6189b1cb74437078737bb30bcf"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "bc6fa4306378068cb4f230ec8354989e"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "0e5f73251bec4f532f7047288be32a85"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "144d05226b27fae4203f3350db656904"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "c06d4d59c374cd959f2e2efaeb2adf93"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "a085000f79a12784c7b5835509523289"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "e726df091c5dac5f3294fe6e30681f9b"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "67af3136d100e75c69413d28b824c03f"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "072e5504345dd104bb2f4c162b54fc37"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "d3ed0b4a17f41624e83c63f2bc6818fb"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "d93ac93c5b64b693df7d80f398fea0d1"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "649bc36608eb7c4af8911dc8fa6ac40c"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "993cdbaff3efa9fb7ca2814de3e3bf54"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "245c0b70ae716403e3ab074eefa80547"
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
    "revision": "521d00e73182e6f2ce11d87a86ca580c"
  },
  {
    "url": "join/index.html",
    "revision": "94437ee9d722474aaa8af2721416bdbd"
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
    "revision": "4256f7cdb1abd859cb9720ba492040df"
  },
  {
    "url": "search/index.html",
    "revision": "01dce09f0009f37856f5cd755345fe5c"
  },
  {
    "url": "tool/all/index.html",
    "revision": "59956d5a2685fcf7d5d3251bdea4af05"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "4953397768f2e97f63de6dc63fcfdbf5"
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
