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
    "revision": "f8ee1aba870844ce3ae08df1cb6fd65a"
  },
  {
    "url": "assets/css/0.styles.7f7be4da.css",
    "revision": "702e44c1ec76057abce73376f5565a87"
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
    "url": "assets/js/11.5c1977c4.js",
    "revision": "c727e11a9bbd97e12cf14553372f45bf"
  },
  {
    "url": "assets/js/12.8dd76571.js",
    "revision": "9f9c38951f51866b477288f51924eda0"
  },
  {
    "url": "assets/js/13.bea07205.js",
    "revision": "32e7d1b89f993388d16b1d1b7b0fe95d"
  },
  {
    "url": "assets/js/14.e9e1f7f7.js",
    "revision": "373654dfd04410ecaaad7a6d3dc9be62"
  },
  {
    "url": "assets/js/15.e0f8847e.js",
    "revision": "975ae2057a5e8642ef15f8d7f7770ef9"
  },
  {
    "url": "assets/js/16.23cd18c0.js",
    "revision": "502218cdebbc90a0befc7c745b638ca8"
  },
  {
    "url": "assets/js/17.236ce566.js",
    "revision": "509d1423c736698a29add94120838cba"
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
    "url": "assets/js/21.963aec48.js",
    "revision": "0b4e3d066fb47cd4f7efbf1de77f4cc8"
  },
  {
    "url": "assets/js/22.50875f11.js",
    "revision": "2c7ee3a8e237f54d772800592087f825"
  },
  {
    "url": "assets/js/23.d67b56b3.js",
    "revision": "76c581b2783e761ad8e3c1e9f8c2fd77"
  },
  {
    "url": "assets/js/24.01bc48b3.js",
    "revision": "3e82987899096c172749cb6229e18403"
  },
  {
    "url": "assets/js/25.920524cd.js",
    "revision": "8d92b25f2b6a4c7adb4dfdefee82417b"
  },
  {
    "url": "assets/js/26.e7ff119c.js",
    "revision": "f0084286acaaa6a0e530029ce7570bee"
  },
  {
    "url": "assets/js/27.593473cc.js",
    "revision": "5315e82388ecbbe9212aa3110715a8a8"
  },
  {
    "url": "assets/js/28.c144113e.js",
    "revision": "edbdc2ba33b74721fdce4ea51712c4b6"
  },
  {
    "url": "assets/js/29.270c09f4.js",
    "revision": "b0a237782d316bce85d7fec5997dec96"
  },
  {
    "url": "assets/js/3.755051eb.js",
    "revision": "26c7bd0a74e30a1b9d6e10e52518e1b6"
  },
  {
    "url": "assets/js/30.6577ad45.js",
    "revision": "875816673c882fb2229171edf4477fad"
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
    "url": "assets/js/33.e1bedc3c.js",
    "revision": "73a9ecd13d7ca56e2bab4c48b9565ffe"
  },
  {
    "url": "assets/js/34.03f589a7.js",
    "revision": "e3179096c88c159646e5f702e8b66073"
  },
  {
    "url": "assets/js/35.8c9d13a2.js",
    "revision": "4ed438d71dfb0ead3f79e338c3c0d1b8"
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
    "url": "assets/js/38.4990ea4f.js",
    "revision": "2ded5a6d0c24d40fd2ed443e10982ffd"
  },
  {
    "url": "assets/js/39.cad28e64.js",
    "revision": "d16c3669fcd8418a9b7ea6b00853754c"
  },
  {
    "url": "assets/js/4.6e93ce45.js",
    "revision": "a9368beebeeb5a08031edb7c4882ccbc"
  },
  {
    "url": "assets/js/40.4ca772f0.js",
    "revision": "5988412f6ea65abf177d8bf7d79f742c"
  },
  {
    "url": "assets/js/41.476d14fb.js",
    "revision": "2f8a268412e3b49f3e47e793ff85d0d0"
  },
  {
    "url": "assets/js/42.779481dd.js",
    "revision": "a47a19304751faf71a3a3512bfe9c944"
  },
  {
    "url": "assets/js/43.009c2b86.js",
    "revision": "25b2343f3b9e8ef2647287fac352f4cf"
  },
  {
    "url": "assets/js/44.fc51113f.js",
    "revision": "535beeabbeb8079696fdfb97ea3db015"
  },
  {
    "url": "assets/js/45.afa07d69.js",
    "revision": "12e548eebcadd63738f5b2689fb9765c"
  },
  {
    "url": "assets/js/46.cc92fd21.js",
    "revision": "df25875c5a5686d3ceb303ac7bb79117"
  },
  {
    "url": "assets/js/47.c153787b.js",
    "revision": "e3f1a9f7c196c94a9bfc7049f522e421"
  },
  {
    "url": "assets/js/48.10b355e7.js",
    "revision": "06ac970cb3db17fcec1f467df4033379"
  },
  {
    "url": "assets/js/49.f65c4883.js",
    "revision": "142883bdd64b8ed4a1cedbf4d36806f2"
  },
  {
    "url": "assets/js/5.0f6f1a06.js",
    "revision": "d796078ad9df3c5f92ce789029f9dea5"
  },
  {
    "url": "assets/js/50.ffbd321e.js",
    "revision": "845fefa129db6216faaf190460bf8dc1"
  },
  {
    "url": "assets/js/51.6f6b21f0.js",
    "revision": "badb0801fd5ac2b2aa645a3884f6980a"
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
    "url": "assets/js/7.f3603395.js",
    "revision": "0b4987d62a2320e434da686d38e9d7a2"
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
    "url": "assets/js/app.1b39fc80.js",
    "revision": "d87c580332a1342bbfec0b6f4cf1e020"
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
    "revision": "3fc48fa236e34333caafb65bf6d0698c"
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
    "revision": "7ba51f7bce43534c208b69f4ca5d5ab8"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "c2a77bd258df3f864091561a270e745f"
  },
  {
    "url": "game/risk/index.html",
    "revision": "5030d7f713a9e0a08206588fb93a43c6"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "4ed06fd19194c42d47f6c8f67130959e"
  },
  {
    "url": "game/smart/index.html",
    "revision": "c1ec59e2ca036f9589b5eab1d685aa96"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "3beb7738bfb5b14bde96998e498651d9"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "3b88c5786579e8954ae0583569329d96"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "4e7c887705b5c3b0b1ab06cbf42bff6e"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "51b2f8363a373dc7984cbbf47839ef57"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "2d156b353470070a3c2b2df289c4ddc5"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "871c8a807bdb01b4ec869c553cd9da32"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "59711c7c3612725d7e5ae8a2550c84af"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "8bbecfd5bd90c2f7b84cafeadf0560e1"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "7039a4df94de6f087dbb8460b1c8e8f2"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "4e6b4977a3bd7c3dbd34657c67ab9aa2"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "4e958c482d43795d48811cd0258017b7"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "1441ada397b001478e37609372281b4c"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "c7b676d21c5eeaf98fad1058688c3be9"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "9c570d7f97e8e25a99ef4868979483cf"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "a99fbd76a6a77b92e8fcdfda3c6dec6d"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "e24ac286e69043ccf56d494ac62f8bd7"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "9eb6815f4a58d6943adedc004b0898df"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "146495433955ff651893bfa53a42073d"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "bf00811f94fea08a0e4f7bceb1dc7b4d"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "69be3bdf1046e3892196719794ff83a7"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "171bd59e4c1a3a85f924a4bf93eaad3c"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "941f8c4ac74b2c70aed4acfe8d08edc4"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "e6ac85f97ad72c4b3d8465d97fea953b"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "f888831c4860ebad89506da5abb4f7bd"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "eb238e64877438c618b6c66efb34963c"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "1e2f5d29c86165901b41d2f2c5477580"
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
    "revision": "8739cd531a5e8ca464629fe27afba56c"
  },
  {
    "url": "join/index.html",
    "revision": "bc24cdca8007b067d7b6c3e9edaccf67"
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
    "revision": "5837b0a031f403196df51bbf08c1fed8"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "282e1f2a551de534bc40b777f884d99f"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "176da4cacf2ecb49cc195428d7ec18c1"
  },
  {
    "url": "search/index.html",
    "revision": "35343914644e605857136d72fbd8d2d7"
  },
  {
    "url": "tool/all/index.html",
    "revision": "51c3eb69bd2239a5091e123f8e09c1b6"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "ca5cb33bbae2bf3137987acf91831f11"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "f4f17f028db6ed06789227aa805b75ca"
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
