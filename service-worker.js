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
    "revision": "eb4b1444a3de926965896f2f0f9831f0"
  },
  {
    "url": "assets/css/0.styles.3dbfa62f.css",
    "revision": "96913054b26a72e629a3aab51640c0f5"
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
    "url": "assets/js/10.97a8340f.js",
    "revision": "2b250048a4b6f94f5fdcc9bcd06b48d0"
  },
  {
    "url": "assets/js/11.b01dbea7.js",
    "revision": "3b81f378b5c73f9ad925f0a549a8fd2f"
  },
  {
    "url": "assets/js/12.d9069e0a.js",
    "revision": "569f50b4903a67bb770eb4da3d28c186"
  },
  {
    "url": "assets/js/13.71d52af9.js",
    "revision": "af25337a0665d6105fbad63a8c96809a"
  },
  {
    "url": "assets/js/14.5fcc813e.js",
    "revision": "82d48b94b4e9ae8f83eee09cf3cb5c42"
  },
  {
    "url": "assets/js/15.0f801e82.js",
    "revision": "c9b9db94d5c9261aa72dc3ae768e5422"
  },
  {
    "url": "assets/js/16.d59a7e10.js",
    "revision": "560b53a09522430d55744239c0ca73e5"
  },
  {
    "url": "assets/js/17.6746389d.js",
    "revision": "837605640f2a03b78930cac68fa1f1f7"
  },
  {
    "url": "assets/js/18.dd92dfd2.js",
    "revision": "6500c55f93fb5d80f616804a4ce2a620"
  },
  {
    "url": "assets/js/19.afc3c10d.js",
    "revision": "0bc2f9cce7cb158ec81c6d0e631b1f91"
  },
  {
    "url": "assets/js/2.ba1c4282.js",
    "revision": "b9747f129c5230a7c36d6f22011e1b39"
  },
  {
    "url": "assets/js/20.db54edf4.js",
    "revision": "8e91b42c13f41201b89c613512bcf634"
  },
  {
    "url": "assets/js/21.ce08df48.js",
    "revision": "0865d833217c44056afbb79894278519"
  },
  {
    "url": "assets/js/22.27bd5024.js",
    "revision": "44dbe717cb093fea511c593d08571aa5"
  },
  {
    "url": "assets/js/23.0c138078.js",
    "revision": "4039f8b7d7a71dafc4bee5a13b75c1d6"
  },
  {
    "url": "assets/js/24.2a5d276d.js",
    "revision": "f9fa6fcc3e68cdbd92a95f77579310e3"
  },
  {
    "url": "assets/js/25.9bc4835c.js",
    "revision": "98b20d1c956dfa48c68f84280a3af63a"
  },
  {
    "url": "assets/js/26.67e8b5ae.js",
    "revision": "26c748b6998c53883bc84897a6f001e7"
  },
  {
    "url": "assets/js/27.3a1132cd.js",
    "revision": "5677d51241e994ae1b1ac0333f47eddb"
  },
  {
    "url": "assets/js/28.cef82a04.js",
    "revision": "9488b7f3d086bcec96058fe0071c7472"
  },
  {
    "url": "assets/js/29.2085f6ca.js",
    "revision": "9ec7f346300a13a5ad3db13a1a5ad4a6"
  },
  {
    "url": "assets/js/3.755051eb.js",
    "revision": "26c7bd0a74e30a1b9d6e10e52518e1b6"
  },
  {
    "url": "assets/js/30.acd2f891.js",
    "revision": "e9c72341d82c5794e84896a7ab90e200"
  },
  {
    "url": "assets/js/31.4eebc374.js",
    "revision": "21ca76b29f4309040c6baebdfae841ff"
  },
  {
    "url": "assets/js/32.dad0c9ee.js",
    "revision": "89b6d731250b708b17b7205837f595e1"
  },
  {
    "url": "assets/js/33.71c128ab.js",
    "revision": "4da6b8f3a605b805c7f0bc150086dcdc"
  },
  {
    "url": "assets/js/34.6dd621f2.js",
    "revision": "dcf5f483add18f3adfa33cce2a4c39a8"
  },
  {
    "url": "assets/js/35.9df0dc2e.js",
    "revision": "a43ab7f913f29c54ca09088e9c6f4f9f"
  },
  {
    "url": "assets/js/36.69850dfe.js",
    "revision": "e96fa3c669a88fc5b1ed133248828e69"
  },
  {
    "url": "assets/js/37.830565d6.js",
    "revision": "33dbb866165880979a8e25f4809b12a7"
  },
  {
    "url": "assets/js/38.6a051c3b.js",
    "revision": "d3dd8742645150183edd2312449a2581"
  },
  {
    "url": "assets/js/39.581d23f4.js",
    "revision": "253dfb81c12c21b2e472857014297be5"
  },
  {
    "url": "assets/js/4.6e93ce45.js",
    "revision": "a9368beebeeb5a08031edb7c4882ccbc"
  },
  {
    "url": "assets/js/40.9e7a5c8b.js",
    "revision": "497e1dd2e80d5fbee5bcf75ae67c4cf8"
  },
  {
    "url": "assets/js/41.7d39338c.js",
    "revision": "417a63f2bfec2f22050209691ce61a7a"
  },
  {
    "url": "assets/js/42.8befe71f.js",
    "revision": "1bea02ce2775a878f4a63e94e570cd96"
  },
  {
    "url": "assets/js/43.79dc4b5f.js",
    "revision": "12ebbee2a0520c377192ae0867c90f8d"
  },
  {
    "url": "assets/js/44.3b36c1dd.js",
    "revision": "b39e7e08ca5e49adb9d4696ef3b6122f"
  },
  {
    "url": "assets/js/45.bd3b544a.js",
    "revision": "556c658308e8db2a8e045071d10b15dc"
  },
  {
    "url": "assets/js/46.cc9bef91.js",
    "revision": "a0a176b3181dc99b3e2d4e4ccf502eeb"
  },
  {
    "url": "assets/js/47.6c96389d.js",
    "revision": "a4339f283570535a9342ae14e15f15e0"
  },
  {
    "url": "assets/js/48.10b355e7.js",
    "revision": "06ac970cb3db17fcec1f467df4033379"
  },
  {
    "url": "assets/js/49.57136df6.js",
    "revision": "fb1e2556bc8332bd834fafdb111beb24"
  },
  {
    "url": "assets/js/5.0f6f1a06.js",
    "revision": "d796078ad9df3c5f92ce789029f9dea5"
  },
  {
    "url": "assets/js/50.f648b560.js",
    "revision": "fb3b381ea9b8d60c54ddb080fbeb4e74"
  },
  {
    "url": "assets/js/51.adbc161a.js",
    "revision": "6f561e1c9698f44a4ea3cd6a5cd87b5b"
  },
  {
    "url": "assets/js/52.480b1150.js",
    "revision": "714bdb1959593f52b4be97dfcc42195b"
  },
  {
    "url": "assets/js/6.bc11b620.js",
    "revision": "c503bdffc6eb79680c76063d300d642c"
  },
  {
    "url": "assets/js/7.ba6b330e.js",
    "revision": "9c2a2091219c229445f0746e36d8bda6"
  },
  {
    "url": "assets/js/8.a38bba67.js",
    "revision": "967e603ce19643f033471a175afd54f5"
  },
  {
    "url": "assets/js/9.04140810.js",
    "revision": "668353569b76d3357647ecc455aaecb8"
  },
  {
    "url": "assets/js/app.10a643fa.js",
    "revision": "12b7a3a326d8cc610dc79b864f8f42a2"
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
    "revision": "14bdb119100efad92f2c4aaa53c71650"
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
    "revision": "bab8c61090997d8098e5dea64846af4c"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "25dfed2d46917e4731e17c9398e88898"
  },
  {
    "url": "game/risk/index.html",
    "revision": "9498cf0a6b569c21797b7e1043dd4b90"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "e4c2184bdff019cf299646deae59c5a1"
  },
  {
    "url": "game/smart/index.html",
    "revision": "38ec019c5ea79ea35ba33221d60cee8c"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "79f772572c8415264489b34ad6920b21"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "9927c605f02c8c0153f1341a10c7cf21"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "51bcc0c56c2debe671bd5acb3de7149e"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "5dc5d5f5f7edb8101f685b846a28ee04"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "1786548142aaac393c99a7e166d19e78"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "0dad4c9015f6cabe9c95c4f12d117209"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "e3f99e388dc87223e3202c9a9a7ac2f2"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "e5f9d68aae10ce591b356f935c531344"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "f1894be54e4af63852f01019776670ca"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "fbdc93a27afc791693732fb4fa447c01"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "0796c8f69612fe03116e1c2408a6cc5f"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "762eea18e86b652ce5ebb8cd6e780349"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "f77fe9e653cae3e467c4f24947918db2"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "de831e0d0deeee641d965e20d19630fa"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "e39a61d1b9e9b1aba1ee081dfe4872eb"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "2170374e7f4c698287cf60cb4cc09769"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "6bdebfe768392c65c3cbc86515cd0761"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "9bb2415395db442acb6b41f9fa6469e5"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "aeb5d29b70f8c6b5feab55064ca91d8d"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "1d279802d44bc0590ba038da4522a544"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "70464df1f0ecef98fc356ecbbb40fafc"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "cbbd1859d0c74bb5ecbc7f001efeb4ae"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "1706b067d2a256c1e63cde8568e466a6"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "58f350831ee05135380541c73228f23c"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "8419d2e5c1f1cb4f7c43682de1e34278"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "135815e69af484b73761256609744d78"
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
    "revision": "599d38784b9f6d90e380e1f19242c8db"
  },
  {
    "url": "join/index.html",
    "revision": "6280de49e3f30ee53167e782231a9a1f"
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
    "revision": "fffa87778ae9728c81f0fa32c2a8e14c"
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
    "revision": "fbe31f401491f8401747b2c39729e23b"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "cd325d26c202ad0ff45bca05219e4bad"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "bb2f452e5793108228366c685739b53b"
  },
  {
    "url": "search/index.html",
    "revision": "bca70a09b14e967f0034b8891a874a72"
  },
  {
    "url": "tool/all/index.html",
    "revision": "318dc1c46d6d3d4372b76d6a3923044e"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "ea86bbf9f39a6a4604defd60d75d8148"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "03036fcd61f9be6e2ec810dfe064c7e6"
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
