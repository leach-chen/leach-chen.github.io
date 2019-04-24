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
    "revision": "24aca9a34490217119d54fcaffadd94e"
  },
  {
    "url": "assets/css/0.styles.e77d21c7.css",
    "revision": "35db68cfe9019ef902e0fd733f548dc4"
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
    "url": "assets/js/10.edfd794b.js",
    "revision": "505173527faca656c5ffe172289b505b"
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
    "url": "assets/js/14.ad1a7156.js",
    "revision": "1a74391cc0d6fdd9ee78141003ebd376"
  },
  {
    "url": "assets/js/15.6148e1be.js",
    "revision": "b6efd0fc92b0b46ab07848388a211984"
  },
  {
    "url": "assets/js/16.32182408.js",
    "revision": "dabbed8ccb87f4cb5f79fd72b2ba8614"
  },
  {
    "url": "assets/js/17.06b84e5d.js",
    "revision": "8f62c61c2850e1509fd4bd960319c135"
  },
  {
    "url": "assets/js/18.bf4072ea.js",
    "revision": "2439ac7a612e333f16ce5efb11973edb"
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
    "url": "assets/js/20.01f36677.js",
    "revision": "b20fb90105da4c2cf9e6cc2ebcb2fa87"
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
    "url": "assets/js/23.fd05c3a5.js",
    "revision": "3b8cb6c65d130945c8481c0874f63b9d"
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
    "url": "assets/js/26.bab499b4.js",
    "revision": "4b3365b2db7e78a309b04452574e84ff"
  },
  {
    "url": "assets/js/27.056f477f.js",
    "revision": "0fd88dae0d35818e7ef552f12afe1ca0"
  },
  {
    "url": "assets/js/28.3e852d19.js",
    "revision": "bd97e18a9bace7ce2661e8105d674aad"
  },
  {
    "url": "assets/js/29.935f2114.js",
    "revision": "92f119b5fb70000fa0d081894977ba47"
  },
  {
    "url": "assets/js/3.755051eb.js",
    "revision": "26c7bd0a74e30a1b9d6e10e52518e1b6"
  },
  {
    "url": "assets/js/30.e47de3ed.js",
    "revision": "85e47849f580d3f31e13f33811bae689"
  },
  {
    "url": "assets/js/31.4eebc374.js",
    "revision": "21ca76b29f4309040c6baebdfae841ff"
  },
  {
    "url": "assets/js/32.51d388c4.js",
    "revision": "27921e93ca1e95c42f40bf9c6309689a"
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
    "url": "assets/js/35.45f26290.js",
    "revision": "1a7269b23f979f3064dd1c09440693ee"
  },
  {
    "url": "assets/js/36.69850dfe.js",
    "revision": "e96fa3c669a88fc5b1ed133248828e69"
  },
  {
    "url": "assets/js/37.a47545fe.js",
    "revision": "67729b2a580d233aab6a275afe498d96"
  },
  {
    "url": "assets/js/38.831bebea.js",
    "revision": "95270efc88bb6ced0a4ed903bdff7ea9"
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
    "url": "assets/js/40.60c2baac.js",
    "revision": "502460108336ea975b20efd8ed1f9b9b"
  },
  {
    "url": "assets/js/41.ad7f2368.js",
    "revision": "68a326ab9e5127eee310bd2a2e0387a6"
  },
  {
    "url": "assets/js/42.77e161a8.js",
    "revision": "14e208b5a2cc5b034ffd04b311bd85d8"
  },
  {
    "url": "assets/js/43.009c2b86.js",
    "revision": "25b2343f3b9e8ef2647287fac352f4cf"
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
    "url": "assets/js/46.a56cff61.js",
    "revision": "12c70589fbb176430ef54cf62b739bf0"
  },
  {
    "url": "assets/js/47.5c2e6573.js",
    "revision": "f1f889edc0514a743ff56d6fa815bb55"
  },
  {
    "url": "assets/js/48.1d321476.js",
    "revision": "7990bf86d662ff6262589c63ea2df99f"
  },
  {
    "url": "assets/js/49.0ce3016c.js",
    "revision": "7346d162aa4d9b837e6a5883b81ff611"
  },
  {
    "url": "assets/js/5.2998a23c.js",
    "revision": "8a81336618853df63a6cfe764f9c0e58"
  },
  {
    "url": "assets/js/50.d1e20d0b.js",
    "revision": "b7c0c1ca06ba34c3274ec77253d2b9c1"
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
    "url": "assets/js/6.0e5f6b8d.js",
    "revision": "d8f383cdbc93ca310370f639b287f391"
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
    "url": "assets/js/app.7f5222dc.js",
    "revision": "75973636751bab77d3adbf6fc8be8bc8"
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
    "revision": "1028b030b3a2b37551d740cd459ca338"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "fb9d102b3d8eee6f87f93c103c131283"
  },
  {
    "url": "game/risk/index.html",
    "revision": "b43a73d47d5014e175072d5610138a9e"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "ec6bfb29304466f967e5c9d3489c39a5"
  },
  {
    "url": "game/smart/index.html",
    "revision": "b7ba448b7d40e3901927dbb41beb866d"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "1c739758046d1875de947b5a50c63813"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "1590940a5967de18a7b61b40eb4c16e6"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "4128afb36184be4900e97808582ccdba"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "593bf682332a4f22d3407ef98f880ffa"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "84210c273ae6f1c0c00b791140eeccbf"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "4b798120ff71d4a40ca59d31e32b5b89"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "4f7c648540b4a5657d43a6b6bd57ee1f"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "8a9ce666ee5c80b1fcaed4683f6eea7e"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "d56d1dac8a056aa213da4cb24295cf9a"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "04bfd2603dc192191bd4cfd006402d6b"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "23c7fdbaef7c3d7b812f6960dcadd86e"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "697f2b1be586276995b92c21a8ad4290"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "24a1b3164f1f2f921263e7e9a1ee6775"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "d5e048b7e7a61fe44014132f6761a8d3"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "d8ed83696cef8e1f8fa217ce39c225ca"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "ff3a7bd4270fd4aaed1e35faea97d703"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "bc2e1b54295bb1f0d7bf6fbf0fb70998"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "2adcc692436e5f0d8470f7f52b3fde90"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "4c129525636b4ad854a6db7d409262b4"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "04f6a3e412910cf5ff17b5eb9ff3120b"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "14afcb7c7fd307202e2fd8941289924b"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "6c960992bc3fac9e320bd5995e897283"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "6530bee58f8cf5d40cebb4815c3eb562"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "ae02d9170a7892dd6e96b041e676b61d"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "000e0f527a9e9f6918f377108b791e77"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "9f1f4ae19ae4938817bfe0042e0810a4"
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
    "revision": "31ba19b3fe6d9945cde27aa082582fbb"
  },
  {
    "url": "join/index.html",
    "revision": "2d07618cdb66f99d604a558fb4c0d5aa"
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
    "revision": "34b95b92c1dee7d998fe32210743842b"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "95f77de2db1747b01bd1926de0e7c12a"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "ba6c92a1f2fab039420cab0a4a0bd4e5"
  },
  {
    "url": "search/index.html",
    "revision": "b15e923ec870b21b10916c05a75bdcc5"
  },
  {
    "url": "tool/all/index.html",
    "revision": "0a69ddbe619963c16c52801a9a1f0276"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "af2cf8cfd13f956acbd5833841914907"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "866e6c2da043bd1b0a319fecf93dd434"
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
