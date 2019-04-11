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
    "revision": "f6d789e6dc71c824120a36081a085591"
  },
  {
    "url": "assets/css/0.styles.b70d88a6.css",
    "revision": "039309a119a37d53af46051a9b838626"
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
    "url": "assets/js/11.11ad35ef.js",
    "revision": "eeb047b64eb7a6339652cf06bb655a57"
  },
  {
    "url": "assets/js/12.a7b8f165.js",
    "revision": "90c71cb953f106645e421c9f639565cd"
  },
  {
    "url": "assets/js/13.3a6fe8cb.js",
    "revision": "da06093283f6146faf07aa674b65dcca"
  },
  {
    "url": "assets/js/14.e03f2023.js",
    "revision": "d5aea741c4182a38745b1fa7c6635587"
  },
  {
    "url": "assets/js/15.614e4a10.js",
    "revision": "820c28d44378ba9ba065cc7a63615136"
  },
  {
    "url": "assets/js/16.3fc84b58.js",
    "revision": "b9f3ca622487cf91a6f030e2b6b34bf9"
  },
  {
    "url": "assets/js/17.b1886216.js",
    "revision": "cfe1efb2b2128eff4f8c827ab6a25137"
  },
  {
    "url": "assets/js/18.e97be4b5.js",
    "revision": "0d15e744a38a9688644102272f5c65dc"
  },
  {
    "url": "assets/js/19.9b13e0eb.js",
    "revision": "ca3979be08567c1717762673266d58eb"
  },
  {
    "url": "assets/js/2.315a9d71.js",
    "revision": "64e502acd4d96c3ea25c5ffdc172da4f"
  },
  {
    "url": "assets/js/20.0ca32609.js",
    "revision": "006f7e33e752d864d69e4ec5e61458b5"
  },
  {
    "url": "assets/js/21.ed09362e.js",
    "revision": "9e1d5d62afdcfd502a48240cc9399de6"
  },
  {
    "url": "assets/js/22.d37fb407.js",
    "revision": "95e324e9b53bc3b28ab2620aab788c01"
  },
  {
    "url": "assets/js/23.b8dbfe7b.js",
    "revision": "296dcc2aeca514665e0553cae8136689"
  },
  {
    "url": "assets/js/24.9c660726.js",
    "revision": "84984b45c9ba88bdd633794cb842e5be"
  },
  {
    "url": "assets/js/25.372f2fe0.js",
    "revision": "5bdcee1cbda7b49048f4af491fcb3c5e"
  },
  {
    "url": "assets/js/26.3a5382b9.js",
    "revision": "b62240c72e105a3baf7195a08f0ddc6b"
  },
  {
    "url": "assets/js/27.29c77f90.js",
    "revision": "81a9d5f6c6b51246d104a84123d3b732"
  },
  {
    "url": "assets/js/28.c8e735d1.js",
    "revision": "a07869a3676379fa7bda12b284fea2a8"
  },
  {
    "url": "assets/js/29.9352bd08.js",
    "revision": "f68cc8dd7f9b39bae7f68b626912667d"
  },
  {
    "url": "assets/js/3.2dca2585.js",
    "revision": "8071b41d6f26f0356a2e76795d115154"
  },
  {
    "url": "assets/js/30.e343b964.js",
    "revision": "885125e779b7137dacd3dc5d53fbfc92"
  },
  {
    "url": "assets/js/31.299fe0f4.js",
    "revision": "5eeac2e552abd30d0ef4fa89f2461030"
  },
  {
    "url": "assets/js/32.6555f088.js",
    "revision": "40a943194f4c924d8e1e0bbed6a61189"
  },
  {
    "url": "assets/js/33.ece90502.js",
    "revision": "744ef63e349f956b31b461b46d005109"
  },
  {
    "url": "assets/js/34.8fe38fc2.js",
    "revision": "6a3db7ca94d5ba4bbb8a839cdd8079fb"
  },
  {
    "url": "assets/js/35.e33cfd49.js",
    "revision": "218cebc1bf73874b5ad436be5dbca9b0"
  },
  {
    "url": "assets/js/36.d09dce88.js",
    "revision": "b9aafd784b21eb13f3307d409bdd3bc0"
  },
  {
    "url": "assets/js/37.4be88f5e.js",
    "revision": "4d57f52a6085338fa73c838e60b1775b"
  },
  {
    "url": "assets/js/38.a3f241be.js",
    "revision": "b0dc5bc76dacd2da54df415a8cace771"
  },
  {
    "url": "assets/js/39.3bb53865.js",
    "revision": "ffb4287a87cb62db82b63952f0e63b6f"
  },
  {
    "url": "assets/js/4.687f09cc.js",
    "revision": "f67cc0a7dafa4059322d00b07d0b500e"
  },
  {
    "url": "assets/js/40.275225c9.js",
    "revision": "2543f79359b437a20a201b3ed7e66755"
  },
  {
    "url": "assets/js/41.9adcc6f0.js",
    "revision": "e66efc6f2431b0caa261a66146e70f57"
  },
  {
    "url": "assets/js/42.3a697884.js",
    "revision": "9b2e7ecd8a4f1d949f780dc893a6fd90"
  },
  {
    "url": "assets/js/43.5c391719.js",
    "revision": "b77c667f70dc17e6b91a8ed1a21fa913"
  },
  {
    "url": "assets/js/44.7362b14b.js",
    "revision": "e8c2f17aef976e07ea0484e60069035c"
  },
  {
    "url": "assets/js/45.1c1b7962.js",
    "revision": "99eadc242ba2e1c2e896e109e8bd5b56"
  },
  {
    "url": "assets/js/46.5090f9c4.js",
    "revision": "2f0e265870da2a970735fbb72324396d"
  },
  {
    "url": "assets/js/47.79370fae.js",
    "revision": "fde20b49f48a4cb7ba5f4d485eac0307"
  },
  {
    "url": "assets/js/48.76d9cecf.js",
    "revision": "453f4b06ddd09d5502a53de37c10e2a0"
  },
  {
    "url": "assets/js/49.c01a61d5.js",
    "revision": "0c785a5f79b64f3c703290cac96b38a3"
  },
  {
    "url": "assets/js/5.e23006ff.js",
    "revision": "ebf507b41f1957bf17e3988f50573042"
  },
  {
    "url": "assets/js/50.a33d2b33.js",
    "revision": "4cae57990c7aaf169de9e255693de46a"
  },
  {
    "url": "assets/js/51.154ee2cc.js",
    "revision": "323904d304dd0dc4d15cdb339c1756e2"
  },
  {
    "url": "assets/js/6.b0f40357.js",
    "revision": "f57348d15e903a315a98de1d5502a5fa"
  },
  {
    "url": "assets/js/7.4910861d.js",
    "revision": "338782e4bfaf2391fabe049f6f16091d"
  },
  {
    "url": "assets/js/8.e5a13aed.js",
    "revision": "32f7a82cac89eccc09af01be08f156ec"
  },
  {
    "url": "assets/js/9.9f226452.js",
    "revision": "140f3b88a0af516b5ad7d97161af2304"
  },
  {
    "url": "assets/js/app.500530dd.js",
    "revision": "2348a238181f1e0fb38a139bb3319aa1"
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
    "revision": "d1ece70d735873be988fc623a46b3233"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "e3faa88d37f78939f2c60008b67af67e"
  },
  {
    "url": "game/risk/index.html",
    "revision": "54869e8267ea9ade97258ba87a77cd78"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "bff5326016d94ee9cbeeb2b9719553c1"
  },
  {
    "url": "game/smart/index.html",
    "revision": "fb788afa0a51838fc2aaa169d76f5835"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "9f27ed5b355d90b707562b92a7b8eac8"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "1fbc4f97b86d0b3e50d59d42a621eb3e"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "d5182f8dbc156050cc7b32ec44f625c6"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "b2799202c78589454abb234dc23f2ce9"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "5b64eff9b1b694cd9265611ec4ea3829"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "eb3dc45afb262dbdf6af534d94a35564"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "3696c2f0992617dbbbe05278768af892"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "e585368337b1f43b7e9c0310c2c84d25"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "7cdcd31bdc2a30a69bdda90db1f6c18b"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "289e30d576448c89b8a746391122d6b6"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "55e57b12c2fd70fbf1fc2439a72a57ca"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "599d65971b24d5da335fb5c1f7f2e097"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "e585cff4dac0d9f61c0db84d89296aef"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "247a02cab07e0d4b96516430e632d815"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "b7cd5930b496db0345a61fff51dace51"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "9fa913b47cb45b71ee96921a884514fe"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "125b91811e8813475d53bc3ac91d6ffe"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "30a731581eb5d4e50ba78a722d7ece6e"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "e39173e9d3d464ad91a840ac82f40ca2"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "edaa9e31e22bb0234e0a61713613900f"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "d212c8136ceda1f1134e67f40f6b9bcb"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "36c1606adcc4e6c4fcf4cc0431854b03"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "2e4fceb58a76c5aeaff2067a94df0bc2"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "0692a0ea8dd318c373b1fa7d78e02a14"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "ff49b73202b53ccff2dd4203119bce2a"
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
    "revision": "b4129665a43055128ddb04f6632ff90b"
  },
  {
    "url": "join/index.html",
    "revision": "83de7b0473d9f3769826a6d34d0ac4f2"
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
    "revision": "9b368e8b7ce97050fbd8a749a90237fc"
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
    "revision": "7001feef231be763ec4ca1f36c90b2cb"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "5dc57b3e4233beb19e9cc0f4899de554"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "a533fba6f25197fa68fbef0bd12d84eb"
  },
  {
    "url": "search/index.html",
    "revision": "b2d8c7703fe1e2371a3de92c44c68d5a"
  },
  {
    "url": "tool/all/index.html",
    "revision": "dbde3ddf48cd54ad5423189d4ee6a600"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "e1d1534a6108be805c183a557c81b3e3"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "837fae23bf0bc40d36c1c05dcf513fd8"
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
