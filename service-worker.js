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
    "revision": "a66b4838047f6df1064299ac11093a7e"
  },
  {
    "url": "assets/css/0.styles.57106119.css",
    "revision": "30adc5344be309ebec12f494fa7bfeb2"
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
    "url": "assets/js/13.c15e619d.js",
    "revision": "47bc45e4144224b1b99ef05180589a2b"
  },
  {
    "url": "assets/js/14.758acde6.js",
    "revision": "c491a4d2f0799263ecbde94e144ac047"
  },
  {
    "url": "assets/js/15.baf0963e.js",
    "revision": "6227566917f978711224eaa6685eeb43"
  },
  {
    "url": "assets/js/16.cb1723ee.js",
    "revision": "54c13ecd6500f09fbae3701894db19e8"
  },
  {
    "url": "assets/js/17.7c913f56.js",
    "revision": "bcb067f5b9fe12779702a3c707802ffb"
  },
  {
    "url": "assets/js/18.bf4072ea.js",
    "revision": "2439ac7a612e333f16ce5efb11973edb"
  },
  {
    "url": "assets/js/19.52b6086b.js",
    "revision": "281aed1879ebb81596fbf29509bd692a"
  },
  {
    "url": "assets/js/2.ba1c4282.js",
    "revision": "b9747f129c5230a7c36d6f22011e1b39"
  },
  {
    "url": "assets/js/20.04d149bc.js",
    "revision": "c079cd624aa434466e3f28a45e0804db"
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
    "url": "assets/js/23.4c421902.js",
    "revision": "dfef0ed093f034aa6a7a7a19d3df9d1b"
  },
  {
    "url": "assets/js/24.9c05eda3.js",
    "revision": "f3890dc646ee10594c89c65c338a8446"
  },
  {
    "url": "assets/js/25.b2422e78.js",
    "revision": "bc4a56726a0ff51174a0704fdb45ccc4"
  },
  {
    "url": "assets/js/26.fc6966d4.js",
    "revision": "efbe419745a5855fdc73be3bd0bdad36"
  },
  {
    "url": "assets/js/27.c910895e.js",
    "revision": "e808538944b252342aadf2e30b759013"
  },
  {
    "url": "assets/js/28.c144113e.js",
    "revision": "edbdc2ba33b74721fdce4ea51712c4b6"
  },
  {
    "url": "assets/js/29.9d72acfb.js",
    "revision": "335cc6559309a18f4b3bcc02c8477136"
  },
  {
    "url": "assets/js/3.25891803.js",
    "revision": "1178b89438c79e91bd2007033baf0453"
  },
  {
    "url": "assets/js/30.1a76846c.js",
    "revision": "efe0dbf60852587007a0525b0f12e133"
  },
  {
    "url": "assets/js/31.862d26fe.js",
    "revision": "28a47ae6ca69dde83b26992e86cd8325"
  },
  {
    "url": "assets/js/32.3391e047.js",
    "revision": "f46984b98cf10625e2c5b5390dd09fd4"
  },
  {
    "url": "assets/js/33.dd673675.js",
    "revision": "7ced158af55ca1716eaf83542ba32d5e"
  },
  {
    "url": "assets/js/34.f5ee0d69.js",
    "revision": "aa16e44be2d28a2e7f657272ab1d07be"
  },
  {
    "url": "assets/js/35.8b896120.js",
    "revision": "3de5cef2cd809daedf3bf35e0aa8670f"
  },
  {
    "url": "assets/js/36.432ad16c.js",
    "revision": "c9316a970a428673b019940d105b0657"
  },
  {
    "url": "assets/js/37.855c28d4.js",
    "revision": "e76fbe7cd210f78b96b1968988ac460d"
  },
  {
    "url": "assets/js/38.903fa526.js",
    "revision": "55a5d757ffd400b452108a3907eab3fe"
  },
  {
    "url": "assets/js/39.f00dcf83.js",
    "revision": "69e76a1f5acbdf1ab7f002cad770d135"
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
    "url": "assets/js/42.93a1b219.js",
    "revision": "62dc7f46f843368ee692ef7f55b9bd2b"
  },
  {
    "url": "assets/js/43.c1586ac0.js",
    "revision": "b942af1905b2bc9b3c72575db9dcb1c4"
  },
  {
    "url": "assets/js/44.fc51113f.js",
    "revision": "535beeabbeb8079696fdfb97ea3db015"
  },
  {
    "url": "assets/js/45.fa1b9db3.js",
    "revision": "8087aaa4d323421a5b55252080af4ab1"
  },
  {
    "url": "assets/js/46.5530f983.js",
    "revision": "40ec58551602c5076675d8e67b7802a6"
  },
  {
    "url": "assets/js/47.1d363275.js",
    "revision": "d1deda52f76803ac70decf514938bc7a"
  },
  {
    "url": "assets/js/48.3c627797.js",
    "revision": "2d6645dd52126418a71d93324564b890"
  },
  {
    "url": "assets/js/49.0ce3016c.js",
    "revision": "7346d162aa4d9b837e6a5883b81ff611"
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
    "url": "assets/js/app.20ebba88.js",
    "revision": "f9578455bbbf0092124f6604602b1c04"
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
    "revision": "f1bb37a7ab94a55d34da8f8e181aadec"
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
    "revision": "93f98a1f8603c663fa0c1835c82eae8e"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "c0b944b71ee108e8e18026297ada6ffa"
  },
  {
    "url": "game/risk/index.html",
    "revision": "3d0231ec72dcf3caf6adaae5f661378d"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "c6415e40e8ffd69b3b3592cded4de8ce"
  },
  {
    "url": "game/smart/index.html",
    "revision": "44cc538476c1078b6ed37a2ab8f8eca9"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "ef6ed57e1917ecf95fb0e3c80a1ced55"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "5b208dcf26723d112cd6926228dfb566"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "67768bfcece04f034cec3d080f6292d3"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "d57e97969636edef56e0cfc1f7c3b701"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "53c7b8b32e759ded68ec577c424291c8"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "5d1b010c4c7bdfbb3238a3004ff5f9f6"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "a7de90244cc51488af9f0ad35d6f8132"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "44e7a31e8b6b2363e1206bef89f2f88c"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "8d3144469972251d405fe17eaee4c70c"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "7b182438e7398c4a3dfc4035f32be41c"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "1b4318c0e5b8168ed8fa409df3d0b13b"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "7f47609c343f1f4e25158f8687415d69"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "4bb04474d37bd1250679db0d4c4debdb"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "9563cd927cbc5e6b30fa59ec368dacb9"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "9a9655627f2aab65e5855a474f417885"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "2bb82402e44cd14867a2fde4266954d1"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "39c0bbb65726e01d12e484e51dd8a355"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "e353d6bad03b3cda70ce131b5147ee88"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "c6aba8f45ed12beed3df838b32d79d8c"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "d9e586676d59f391dd58486ce5b73135"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "dca4731203e619343bcc07282c53d9dd"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "70804c7dc04e542377e69b5e2019c585"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "623c1679a48ea9418fa7caec2ce1c7d0"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "0acbe3f37a2a30439c710e9efe5664db"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "352a202ab0c531f73d91b9115597d597"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "f98acf72c52d39cf28b0c484a889101a"
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
    "revision": "542b4c226c943bf69caaea63e594a440"
  },
  {
    "url": "join/index.html",
    "revision": "0f2ca1da1061f63a41672ef466e41ed3"
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
    "revision": "626530e8a3fc9325c4e26872936f8ff8"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "4bb8b09cc9365f7ba7026547ba7c8603"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "7d850d71a86685468378fc766846c673"
  },
  {
    "url": "search/index.html",
    "revision": "5e87f405867f9b5fee24118ab2445f39"
  },
  {
    "url": "tool/all/index.html",
    "revision": "2badb609a12c6ca1873534abe936496f"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "21ba97688c58f32eede68241c0f50254"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "1e9313ce98470f4550600d1cd80bda65"
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
