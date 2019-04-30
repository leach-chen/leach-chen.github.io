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
    "revision": "870eb8a5b78f64ef6d5ead04b2ef1eed"
  },
  {
    "url": "assets/css/0.styles.a4b910fc.css",
    "revision": "6547c2909ad1b75a8e948a3b3c4f442e"
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
    "url": "assets/js/11.29d5601a.js",
    "revision": "a7b38c3bb9244b8ce895db7c148b388d"
  },
  {
    "url": "assets/js/12.a4e36885.js",
    "revision": "bbba7d2cad8e66c1eb52f0a4215c15ca"
  },
  {
    "url": "assets/js/13.4af216b3.js",
    "revision": "0e1e63ff91ed2292a7c5344a91363019"
  },
  {
    "url": "assets/js/14.7129e9b1.js",
    "revision": "171e8e04be4a01a485c0f8a18bd3b8b1"
  },
  {
    "url": "assets/js/15.81b90fc9.js",
    "revision": "a0b458eb1e22be24c8c53ff257700a00"
  },
  {
    "url": "assets/js/16.b3f214b5.js",
    "revision": "1bdff97b222001c19764f46478fe21ab"
  },
  {
    "url": "assets/js/17.3249c2e5.js",
    "revision": "dd3ffd4d9605a0bf83eeca3be3d00185"
  },
  {
    "url": "assets/js/18.f0c917e8.js",
    "revision": "c03ccf3ab73c6d24ccd9501220a245b4"
  },
  {
    "url": "assets/js/19.0292ab86.js",
    "revision": "3f97246d21b822577c045b83cbe93be4"
  },
  {
    "url": "assets/js/2.315a9d71.js",
    "revision": "64e502acd4d96c3ea25c5ffdc172da4f"
  },
  {
    "url": "assets/js/20.042dbcee.js",
    "revision": "72e80661e1008680be52d323f7708695"
  },
  {
    "url": "assets/js/21.bce755f9.js",
    "revision": "01311b01f14ae72d4710eb82871155e2"
  },
  {
    "url": "assets/js/22.bdaeb62a.js",
    "revision": "90a1a288c6552dd426e7b263557dd354"
  },
  {
    "url": "assets/js/23.b8dbfe7b.js",
    "revision": "296dcc2aeca514665e0553cae8136689"
  },
  {
    "url": "assets/js/24.f4d73223.js",
    "revision": "9839f379d20bc75ffa23b9a75d927c27"
  },
  {
    "url": "assets/js/25.21c86d32.js",
    "revision": "9d011739e39111d16bf3196a33e113ac"
  },
  {
    "url": "assets/js/26.92aaf887.js",
    "revision": "30334ca603e43abe7caebbde7bcb7057"
  },
  {
    "url": "assets/js/27.b1c651b7.js",
    "revision": "288b68017e10c3609e4e076540cd5bc9"
  },
  {
    "url": "assets/js/28.e9e9c331.js",
    "revision": "a0c5550bd951c7001333b9d898c221d5"
  },
  {
    "url": "assets/js/29.f71a5f2d.js",
    "revision": "34b4a4707526ebe0c3c1223c4ab47a88"
  },
  {
    "url": "assets/js/3.a3c3eb30.js",
    "revision": "ad5f4c1b7f516d9c42e874bee7aa3231"
  },
  {
    "url": "assets/js/30.3b1fb0e9.js",
    "revision": "df0d4d4c0ba345a56e333170ff3f65d1"
  },
  {
    "url": "assets/js/31.7a711508.js",
    "revision": "ed9c422c750d41494cfee8c777f07689"
  },
  {
    "url": "assets/js/32.8388d67f.js",
    "revision": "6773c9ff5fe0595f1d7e269cae451766"
  },
  {
    "url": "assets/js/33.8dc63135.js",
    "revision": "72161d55f9bf69ce7fef02a2d8dbd282"
  },
  {
    "url": "assets/js/34.436a7ce3.js",
    "revision": "dcea758bc1efce0a375a439d71b7150b"
  },
  {
    "url": "assets/js/35.8915c179.js",
    "revision": "0e2d49608b8af6afcbd043f3cdcd96a2"
  },
  {
    "url": "assets/js/36.120b6db7.js",
    "revision": "e23f8d68284b96b8cf495c357374e866"
  },
  {
    "url": "assets/js/37.9a7b6fd8.js",
    "revision": "16463c61bacd8f716ed50efb2f81beb7"
  },
  {
    "url": "assets/js/38.dce0afd5.js",
    "revision": "9cb8d02b3561843f61609f6e3db1f85f"
  },
  {
    "url": "assets/js/39.f3bd2edb.js",
    "revision": "d68bf1449a2eb6e5f6d24768c02f3be5"
  },
  {
    "url": "assets/js/4.bc776124.js",
    "revision": "c57f3d5e233074d2801371b0bee44ece"
  },
  {
    "url": "assets/js/40.322ddedf.js",
    "revision": "771a10a006fde235d66c91bf07120304"
  },
  {
    "url": "assets/js/41.1b8628a4.js",
    "revision": "8982c11302b6b30110a747f0ffa188ca"
  },
  {
    "url": "assets/js/42.ea25da49.js",
    "revision": "7c1d15066b58a55005edb436b93e62da"
  },
  {
    "url": "assets/js/43.17acb974.js",
    "revision": "2c098fc46c193da72c465f9e52c14058"
  },
  {
    "url": "assets/js/44.212c5821.js",
    "revision": "ce23554f7986ba6a75d4df4e28f56c9b"
  },
  {
    "url": "assets/js/45.d2dd83a4.js",
    "revision": "894a089cc3dc60db5475bce3aae976f8"
  },
  {
    "url": "assets/js/46.c2efd7f5.js",
    "revision": "b76c2ac792d1335536c23acf31638a08"
  },
  {
    "url": "assets/js/47.a104c3d4.js",
    "revision": "779a3a1588c82fa2d07901d890884b9d"
  },
  {
    "url": "assets/js/48.13bcbc59.js",
    "revision": "0ce3d337c34b2ff46ffe12aaf1544e10"
  },
  {
    "url": "assets/js/49.10b87ab6.js",
    "revision": "b326db4efea9842b4b636b5724e7e1f5"
  },
  {
    "url": "assets/js/5.a8f952ff.js",
    "revision": "012c2d21195cbad04cbc0d444ad0aae9"
  },
  {
    "url": "assets/js/50.87df1d8f.js",
    "revision": "71bbb31cc245ea9fe8aed69a855ac3af"
  },
  {
    "url": "assets/js/51.c0e9fe42.js",
    "revision": "b850339b5ab354a35f009190468ca5cd"
  },
  {
    "url": "assets/js/52.6fff3526.js",
    "revision": "75a1917073ef29b6ad739a37f6cb501d"
  },
  {
    "url": "assets/js/53.cf933c7d.js",
    "revision": "a2e8f951cb25a1bafce7707d3d5222e4"
  },
  {
    "url": "assets/js/6.50e8f72d.js",
    "revision": "c7592cc5204630f28da62c4de3bf6b17"
  },
  {
    "url": "assets/js/7.5077ef2a.js",
    "revision": "c2392c41fe68965aae8ee60cb741d80e"
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
    "url": "assets/js/app.6747f4bd.js",
    "revision": "d5e705e03c060db0864219f6c3531294"
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
    "revision": "abe3351c36c1c0afa9d0315823083b4d"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "feb478c4ec97dd3858b81d556b884f08"
  },
  {
    "url": "game/risk/index.html",
    "revision": "833e93b29d5fe6d8efdc8d087a1b929c"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "9f41ea238da4677ca47220f498629250"
  },
  {
    "url": "game/smart/index.html",
    "revision": "f05a6409e1d7661e4e9976313e02730e"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "ac806b785babb50efb3e4f06025e55a5"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "ffedb315c9364a637a4d5b064506ab73"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "eafd9be8fe8b43dede2b67575ecfedad"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "673293a7c0c12b22038429a0a335bdce"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "6660d68555e75deb68383ae649cbcf4e"
  },
  {
    "url": "github/android/media/index.html",
    "revision": "eaa4e48e9b238d46e3627fedcd7569da"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "3aada0dbeec9de47480aa03003c48606"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "67ecf212cd7bb1ff4c497f5b0f0fc254"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "1687b22bb4d23ed1d19f852bfb5286b6"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "52059afc70fca6e200d53ed9a7ef6f38"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "62379bbdf357bb0a703c13e7ec932de3"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "baefe5a37a0c013c91ae2ea34d9d016e"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "c1b01df7adbb0ec7bd6e6ca3934c7036"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "4a54636e304608ca739e1908fbf553d8"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "81acc082b28b66182d4d0ff64abe531a"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "3692f2d972edabe243ce77fa95840ec8"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "49c05a8f1ed97854135e141e92967a69"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "c2ffd6ce7e1519aced2e840f67bd8ffe"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "4b00f52993c97180578e49d9d294f781"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "405fbb287fd1c36e2df2a62ed09b2bef"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "74c8650edc9aa43be99bbe11fc7e2d5a"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "7b3bf7c4e7956c615051867bd783f20c"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "8a453e36a3747afc84bed1f756092b5f"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "f2dcd09ef14965df02b19a616e8174fb"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "9529ce445bb1ed0c937741677a8a224d"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "0e135805d9fcf0a83df888e10886641b"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "0c376b1c3a8a554ef2dac977be9539c6"
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
    "revision": "34c95ea52636ff2b923463cf530648ae"
  },
  {
    "url": "join/index.html",
    "revision": "a5cef133483f097c88591b8a22a59e8e"
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
    "revision": "e8a1846517c9c585f8c6e40e4a20c1ef"
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
    "revision": "0f623c3506742d3788679d83411a09e2"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "6d879bb43b9a3ba8e530b2e68bc53b5e"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "eac3ce916aac032ce2857a3aaccf1c6f"
  },
  {
    "url": "search/index.html",
    "revision": "910bf859f1720cb76d5a395848ee27ba"
  },
  {
    "url": "tool/all/index.html",
    "revision": "2ad3960ec9032f8a7713acced315eb54"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "e4a501a21bed1a2844b2b5d5acbeb84b"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "8d1cdb9955b43aed38c6705f4ee11f11"
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
