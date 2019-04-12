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
    "revision": "d92d432b159323b465371fbf0c5a2a71"
  },
  {
    "url": "assets/css/0.styles.9c6d8dda.css",
    "revision": "b385ed17d510b1394f1a4363a98dc9e9"
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
    "url": "assets/js/14.5fcc813e.js",
    "revision": "82d48b94b4e9ae8f83eee09cf3cb5c42"
  },
  {
    "url": "assets/js/15.e0f8847e.js",
    "revision": "975ae2057a5e8642ef15f8d7f7770ef9"
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
    "url": "assets/js/19.fa528494.js",
    "revision": "80bf442c4515a55353e9da73335e15db"
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
    "url": "assets/js/21.f31918f8.js",
    "revision": "a9dcdb4e22e778c282bd882a4c7956bb"
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
    "url": "assets/js/25.2e77a46e.js",
    "revision": "90ba2815868af5283f6f9961a2601bec"
  },
  {
    "url": "assets/js/26.bab499b4.js",
    "revision": "4b3365b2db7e78a309b04452574e84ff"
  },
  {
    "url": "assets/js/27.3a1132cd.js",
    "revision": "5677d51241e994ae1b1ac0333f47eddb"
  },
  {
    "url": "assets/js/28.84f040e9.js",
    "revision": "d1f07a42612a3df11f8a64bcd49ac17c"
  },
  {
    "url": "assets/js/29.08b7edcf.js",
    "revision": "724b3e2c3cbec5f837ff14df35b1a99e"
  },
  {
    "url": "assets/js/3.05ad0486.js",
    "revision": "759af24ab86127d3d3fed6b37894c769"
  },
  {
    "url": "assets/js/30.e47de3ed.js",
    "revision": "85e47849f580d3f31e13f33811bae689"
  },
  {
    "url": "assets/js/31.0e715fef.js",
    "revision": "c6fcfed53f8ce9b0b8cc9840557c2a68"
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
    "url": "assets/js/45.19e00f14.js",
    "revision": "1a07c744b9871f947537c8077c2628a4"
  },
  {
    "url": "assets/js/46.5530f983.js",
    "revision": "40ec58551602c5076675d8e67b7802a6"
  },
  {
    "url": "assets/js/47.6c96389d.js",
    "revision": "a4339f283570535a9342ae14e15f15e0"
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
    "url": "assets/js/app.32695278.js",
    "revision": "fd37f2ccafd47b6e5fec60a3c66054f1"
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
    "revision": "96279c7e2114b1f628fec543958e8399"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "0144521a67149da5018f4ee042fe3602"
  },
  {
    "url": "game/risk/index.html",
    "revision": "d9783ed3150c330b8961ac64204e43d4"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "bca473d8d524451fe3b371306e7db74e"
  },
  {
    "url": "game/smart/index.html",
    "revision": "5ce5712084d5dc3e102cd7632e2d3a81"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "673ceee94ead893138069c04c59f4e82"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "1dd51b1bf78783a4219228406971b22a"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "a99f445703f315a491b312bce1491232"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "56df04fd1ca059c7d21fc059b40ed0e3"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "4f6317da0ff67802877bcc5094940110"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "2655128ecf775a00f048ab65e78e43b9"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "a8214d7c604e05b9645aa751ee63322f"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "bcc7b063b9d6d0c8bbd2ba181a28356a"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "2d6163eee3c450a5063569568f8be741"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "d9ffd9b6190ce8d8bcadd2268758c03b"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "88c8ee4b923867dfad5a9e180824b0ea"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "ac4ec42a92e47995b24c2babde343bf0"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "c92637ea50d282de0217eb3a358aced1"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "17095c93c2af6cf42e7e1819a1561bd6"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "ee1f09c3a8f269998d0dc096001b182f"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "ceaa914bbc959563d632d8b6241fb935"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "449a297c6d85241505fcf3eebd0ad60a"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "a8d7173ca45151f14ed4b13316663401"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "aef623a022ab5b4f5dc462f2efc74284"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "7142fc1969d709c16e53559af4518a3e"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "ba91485d5d9f8b753c90bd5409aa0d4a"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "fdae91c29febe986329df69ed8c9dd99"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "d1f6d4ce208547835a08c66688a7a726"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "04d32f8a1789ac5ea837ddc2fe882d47"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "caa526813f014c7f975ff959030e99f2"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "310398a4418a5c2ba35cecfe9387fb35"
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
    "revision": "2ce7674eac09b408e6a96d983882c1c4"
  },
  {
    "url": "join/index.html",
    "revision": "caf61246656ce7a930c96ddd3902ce27"
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
    "revision": "34025ed20555b61e2df22a53748bb089"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "5ec4b2c804e0f9a3d9c162e38186b2e2"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "283da2b4b53b9ca0a61dc34be8c72780"
  },
  {
    "url": "search/index.html",
    "revision": "254c32b5cf692c1ed947daa8ae248567"
  },
  {
    "url": "tool/all/index.html",
    "revision": "a91a9a7050cc911f93af0374c7707202"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "ac47b98908927e1dac94e96c456c9728"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "b38ab8955f97878bcd522b2fc79e8daf"
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
