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
    "revision": "b703350d1c4bb8a83dbaa48d585a6914"
  },
  {
    "url": "assets/css/0.styles.15d4bbf9.css",
    "revision": "66e756c0b0162d27ac3c396f8a133e4b"
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
    "url": "assets/js/13.7e9655fa.js",
    "revision": "0ba32883ad029b63d599d907ea4609f7"
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
    "url": "assets/js/17.3249c2e5.js",
    "revision": "dd3ffd4d9605a0bf83eeca3be3d00185"
  },
  {
    "url": "assets/js/18.66bdb286.js",
    "revision": "56870c6e60aa3283447f202f010daf99"
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
    "url": "assets/js/20.3749ffd7.js",
    "revision": "f174438531611564b3844414d04d4e0d"
  },
  {
    "url": "assets/js/21.963aec48.js",
    "revision": "0b4e3d066fb47cd4f7efbf1de77f4cc8"
  },
  {
    "url": "assets/js/22.27bd5024.js",
    "revision": "44dbe717cb093fea511c593d08571aa5"
  },
  {
    "url": "assets/js/23.47496416.js",
    "revision": "8cd8fdc074401665f8d51c3b8474f628"
  },
  {
    "url": "assets/js/24.be035d6c.js",
    "revision": "ddd07c7c2130d1d38afa76f2e616e44f"
  },
  {
    "url": "assets/js/25.2e77a46e.js",
    "revision": "90ba2815868af5283f6f9961a2601bec"
  },
  {
    "url": "assets/js/26.1c7636a5.js",
    "revision": "eae38c110cf02a538cfe96852a609630"
  },
  {
    "url": "assets/js/27.1e59a826.js",
    "revision": "145c1e296f4d1b9e3bfa43c622bfed34"
  },
  {
    "url": "assets/js/28.3e852d19.js",
    "revision": "bd97e18a9bace7ce2661e8105d674aad"
  },
  {
    "url": "assets/js/29.8d60a08f.js",
    "revision": "cf111b92003396656b52abee2151d898"
  },
  {
    "url": "assets/js/3.25891803.js",
    "revision": "1178b89438c79e91bd2007033baf0453"
  },
  {
    "url": "assets/js/30.444a0260.js",
    "revision": "7226306849df17f851f788ec433a3e2e"
  },
  {
    "url": "assets/js/31.1758e218.js",
    "revision": "3af7aa815691d14f4bbafc625f4bd8f2"
  },
  {
    "url": "assets/js/32.7b4a3d5e.js",
    "revision": "16868316ac7b4755b28ce13d5a1ec15d"
  },
  {
    "url": "assets/js/33.dd673675.js",
    "revision": "7ced158af55ca1716eaf83542ba32d5e"
  },
  {
    "url": "assets/js/34.6dd621f2.js",
    "revision": "dcf5f483add18f3adfa33cce2a4c39a8"
  },
  {
    "url": "assets/js/35.7e808a23.js",
    "revision": "7df326453827a96378066da61340b72d"
  },
  {
    "url": "assets/js/36.ab236714.js",
    "revision": "86627a13751ca2bd896d02fe17a83803"
  },
  {
    "url": "assets/js/37.deae04c4.js",
    "revision": "dc246c5e1bb0930e036bd65fb2b70fc5"
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
    "url": "assets/js/40.eaa4c608.js",
    "revision": "613228690ed2b3ae0ad01a9f66461952"
  },
  {
    "url": "assets/js/41.7d39338c.js",
    "revision": "417a63f2bfec2f22050209691ce61a7a"
  },
  {
    "url": "assets/js/42.93a1b219.js",
    "revision": "62dc7f46f843368ee692ef7f55b9bd2b"
  },
  {
    "url": "assets/js/43.fd7c5186.js",
    "revision": "f8f6b16bdbae8757d3cacca5f443e2cf"
  },
  {
    "url": "assets/js/44.cfc6993e.js",
    "revision": "71e9058f4098e3f9685a1416f94a5e0b"
  },
  {
    "url": "assets/js/45.19e00f14.js",
    "revision": "1a07c744b9871f947537c8077c2628a4"
  },
  {
    "url": "assets/js/46.5530f983.js",
    "revision": "40ec58551602c5076675d8e67b7802a6"
  },
  {
    "url": "assets/js/47.51e1531c.js",
    "revision": "e3643463f5b4685a73ce545c3b37db0b"
  },
  {
    "url": "assets/js/48.97f497a6.js",
    "revision": "d9750ffeea37ac3e972bd7544fdc9ec8"
  },
  {
    "url": "assets/js/49.398d69ed.js",
    "revision": "f59fc440844724b66fa856d8170c0b85"
  },
  {
    "url": "assets/js/5.0f6f1a06.js",
    "revision": "d796078ad9df3c5f92ce789029f9dea5"
  },
  {
    "url": "assets/js/50.a067f883.js",
    "revision": "b90724d5ab33e2e2dff5ba21d2f22f15"
  },
  {
    "url": "assets/js/51.5ae76744.js",
    "revision": "fa7038d36005b76f892792c0eab8ec34"
  },
  {
    "url": "assets/js/52.480b1150.js",
    "revision": "714bdb1959593f52b4be97dfcc42195b"
  },
  {
    "url": "assets/js/6.440c8eec.js",
    "revision": "da98a3e5fb309d3eee5f918fe2f4ec35"
  },
  {
    "url": "assets/js/7.c8f7e790.js",
    "revision": "938b400f44b5e0842fa13c95372959e2"
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
    "url": "assets/js/app.298504f9.js",
    "revision": "2a0aa22fe9f33750fe0d019e7fdf9b6d"
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
    "revision": "4f9db78e6853cc2333b35d31c38acd3d"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "6140c051105209f22704fa5dea241a28"
  },
  {
    "url": "game/risk/index.html",
    "revision": "165779db02ed014454ab4bf50a5389fe"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "33009ffd76b73497653642acd331975c"
  },
  {
    "url": "game/smart/index.html",
    "revision": "901ea3ac2821f9993712c2bc0d8b2612"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "f92eb31da43fb2e271df8cd26b67c61a"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "9d035b9fab93f6a4116d9d89245ab2c3"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "4fcca077ffaad70b88a86b47897c64aa"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "58edbb441bab3867eec0167cfae6edf3"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "6f19910e84430a8146a3f4a0aac7862f"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "7dc8f7b0c5cbcd5a41d22c9397e2c0eb"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "0d280b768d90bfdaacc70080b9e4a39b"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "ba9db472487ac3ffb7212a4424543e7d"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "170869d28d6658ce5b6e3c5a61b6fc9c"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "182c4cc7f350c1f83bd0ddf50d679605"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "2266029da6a501c67d72977338bf6091"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "ba67d89a80398cc71741eec1e70605e6"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "193e4478bc7113eda89bc296f2755c10"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "e63c2ec7a12d6b0162634e39675493c1"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "76b1d26375fb43f35a91bee42e9caf8e"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "b1af18da07645513b67f28d2d4a000c2"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "b637ddc3bda80e72225f6ddb2281c637"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "e6216012fe0b27df355b31e29b1bf7da"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "8a13734b5f80b42ecc3a45e45a5f7a3c"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "9a997b82e07f535aaff8ee3c0f633076"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "5df74973fbce52ffbf8820ccbd6dd62e"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "fc6451922954accf56ac4980c48fba34"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "25a7f5c59995e5aab24f51fdd4344cc3"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "97d4d87b52cbbaf898625ba6ba6d94ad"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "0b25143b41a02fdcfe4744430af1f371"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "d0fb80c62857667dcdde1672c022f6f4"
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
    "revision": "32ce1e1b9dc9c971da12ed9a3ceb9529"
  },
  {
    "url": "join/index.html",
    "revision": "06a27cfc42a7da44511de5788ff1ce26"
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
    "revision": "79683b6064416de5805f1d56cf029c7e"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "a16480ccfce0171b108088b81176cde2"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "76f50259e4a71fbc38fccb8a9c84fa13"
  },
  {
    "url": "search/index.html",
    "revision": "896679ea818ecd801d1a045011f623df"
  },
  {
    "url": "tool/all/index.html",
    "revision": "6b1c8a1699e70e0336a266146abffc4e"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "e3d2c7854187e77584b7cff5d6e03d34"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "b1b51d530c67bbb76265029164c621aa"
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
