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
    "revision": "3df92284d955c0291854f1850d160518"
  },
  {
    "url": "assets/css/0.styles.6077e8a8.css",
    "revision": "3d951e33502573ef6ca333389ffa6bb0"
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
    "url": "assets/js/13.0a3ff02d.js",
    "revision": "95b571fd990e5cdd8b4aec18a61de450"
  },
  {
    "url": "assets/js/14.5ab8a1ca.js",
    "revision": "4c1fee48a2a5860295a89a88f355f1a1"
  },
  {
    "url": "assets/js/15.6148e1be.js",
    "revision": "b6efd0fc92b0b46ab07848388a211984"
  },
  {
    "url": "assets/js/16.4d14eabe.js",
    "revision": "67e3962f130d209c2e4ac28d1a5c5345"
  },
  {
    "url": "assets/js/17.7c301296.js",
    "revision": "68942702fb8fe1f1cf004cf652a47607"
  },
  {
    "url": "assets/js/18.6211866e.js",
    "revision": "7a7cb03012dae5a3c6dc2d5cc980e6c5"
  },
  {
    "url": "assets/js/19.8ef54ef8.js",
    "revision": "8c1f96f44de37e5bc2ed8c8ccfe09089"
  },
  {
    "url": "assets/js/2.ba1c4282.js",
    "revision": "b9747f129c5230a7c36d6f22011e1b39"
  },
  {
    "url": "assets/js/20.0ff812d1.js",
    "revision": "23e52d48876777201cc06492cad5daf2"
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
    "url": "assets/js/23.8d87f3fb.js",
    "revision": "d0801ceae2e4d77e56e71cbbe7607192"
  },
  {
    "url": "assets/js/24.be035d6c.js",
    "revision": "ddd07c7c2130d1d38afa76f2e616e44f"
  },
  {
    "url": "assets/js/25.a25fcaf0.js",
    "revision": "cd9f0bddfcc619b787853bbda09b989c"
  },
  {
    "url": "assets/js/26.fc6966d4.js",
    "revision": "efbe419745a5855fdc73be3bd0bdad36"
  },
  {
    "url": "assets/js/27.ff64141e.js",
    "revision": "2b607a55a6d99e321cc58c9d14652bf1"
  },
  {
    "url": "assets/js/28.ec4b4140.js",
    "revision": "9a42e5b94d8c5eae6f92890a25576d80"
  },
  {
    "url": "assets/js/29.efcd8195.js",
    "revision": "764444678493483b4323b898d1f9878c"
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
    "url": "assets/js/31.0819fa27.js",
    "revision": "898ede7ebdbd2f83e2e52ea32105e909"
  },
  {
    "url": "assets/js/32.f845df8f.js",
    "revision": "bc524a2bd06b8801e873b1ae1a14f17e"
  },
  {
    "url": "assets/js/33.992709fa.js",
    "revision": "10922ef07dcec120c14753b4eb66eb75"
  },
  {
    "url": "assets/js/34.e1817215.js",
    "revision": "ded6b5431ef2cb067462ea930c541cdf"
  },
  {
    "url": "assets/js/35.398a2ee9.js",
    "revision": "22dd5d3015273ee7130b5451b892bd23"
  },
  {
    "url": "assets/js/36.4d89110d.js",
    "revision": "58f3c5216bbd196d702d180da114dd84"
  },
  {
    "url": "assets/js/37.acbc6294.js",
    "revision": "f83988b9e1679e37cb28a3e7d00e4ea1"
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
    "url": "assets/js/43.fd7c5186.js",
    "revision": "f8f6b16bdbae8757d3cacca5f443e2cf"
  },
  {
    "url": "assets/js/44.cfc6993e.js",
    "revision": "71e9058f4098e3f9685a1416f94a5e0b"
  },
  {
    "url": "assets/js/45.a50f9b78.js",
    "revision": "1b51ae24e5640d70014eb064ec90d22c"
  },
  {
    "url": "assets/js/46.a56cff61.js",
    "revision": "12c70589fbb176430ef54cf62b739bf0"
  },
  {
    "url": "assets/js/47.51e1531c.js",
    "revision": "e3643463f5b4685a73ce545c3b37db0b"
  },
  {
    "url": "assets/js/48.1c944d65.js",
    "revision": "af91857d1c8314f804ddff1620e81954"
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
    "url": "assets/js/50.ee80fbee.js",
    "revision": "66ed6b6ee70a806263e0512ec4d5db1f"
  },
  {
    "url": "assets/js/51.db80be88.js",
    "revision": "d8666da61faa8dcff19dc25767ce817b"
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
    "url": "assets/js/app.a8026b3a.js",
    "revision": "a0a8a88a80f964cf183a7c8c29eae05d"
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
    "revision": "cfd215f827bbb3ef5d21f7f3ae0a8998"
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
    "revision": "25bd253fcb76cc86cb469ed131b3e580"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "e53ee7f735a274436d15fb1340ae4301"
  },
  {
    "url": "game/risk/index.html",
    "revision": "0568e1b1518784b9c11585847a79430a"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "91efa6d4a40f5032f80f630997271ce3"
  },
  {
    "url": "game/smart/index.html",
    "revision": "b5dca8704785a9473dba305b36cbd5ba"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "3144137eff8e693ca518eee120d17397"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "667a60040bc2b20fb85f907d8f158793"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "d0080ec252a882d2d5a3d8ebdb8b0448"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "2e5c3166962bcb17994f1f02f9a7b816"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "8e54c9c17fe36a4c553947b1c6def1a9"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "fbc234e759e785e26a4492e40dea061a"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "4d2549f3f3cb15810eb23af5e5706fd6"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "6f7c17310402f886f613d0f655e447cb"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "7c11b34a5298158fb38d9b25db390c43"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "be6b28c353d5ec7c6dd14145f05aeac3"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "3fb6b7c1a04a20aa152b977a35bddade"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "d21d2e7412d76b0ae80fcb66ae072b4f"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "05f5ef0b32305623e68c8d7650dd5185"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "c8b78b0db547f3ba9b268662e1b968a4"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "5eec668e95f8f5e173da2cb14e9ff83f"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "2fd9862cc029888feec358b3ff8f7e26"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "2f6313698510d461f3393df8a8e639d9"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "732eb80b5fa524d7918bf41cb83ac7eb"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "2b1de9339b2920d621c5b6c428c5aef7"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "abec33d9ffb9cdb657e74359a884b87d"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "b5096ceace209a0be8f797986faa304e"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "37add3416e4d3c5360d1e3c7d91708e5"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "7f5c740b2f43bc0e0c236a9f6d677775"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "d757681ba348750b3750f0f1e3d0e90d"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "db12fa61c3a67bf255efcbaaff9f635e"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "727a76a3e0b8ea7332f431c4b904291c"
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
    "revision": "773d7c6c68069663be3ffff6a7618d78"
  },
  {
    "url": "join/index.html",
    "revision": "aaf990a635db66dfac9f3f0242d0123c"
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
    "revision": "a424081e1cf489c7d2d27534ec61d0ef"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "a6302c9aee79c12c41e50e2318d09c1c"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "5fa4f785ca64641c10e48dba7d719109"
  },
  {
    "url": "search/index.html",
    "revision": "ecf1fbe386fe968f9d3720bc7cbb4582"
  },
  {
    "url": "tool/all/index.html",
    "revision": "666fe0583236240300f6fabe64569117"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "c89d7c50a14fdd26300549ac72a7f7eb"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "4b11eeecc8753c42ef55f3186bafe51e"
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
