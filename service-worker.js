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
    "revision": "abd3ba962fbc1bb346f9afb4bf38f9ee"
  },
  {
    "url": "assets/css/0.styles.9add5c35.css",
    "revision": "3c8fed9ef2b58e8f793646ba53170bc3"
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
    "url": "assets/js/11.09a3a657.js",
    "revision": "b5faf5c2924624c3741bddace1d49e16"
  },
  {
    "url": "assets/js/12.6d505c8d.js",
    "revision": "7687987090d0365d6e4af485fa2af820"
  },
  {
    "url": "assets/js/13.e1c3d941.js",
    "revision": "7c8c4292a686cd871e212e7b35969c6a"
  },
  {
    "url": "assets/js/14.e439961e.js",
    "revision": "76daaa054659ae8bea7e4417f2167ca0"
  },
  {
    "url": "assets/js/15.77151f04.js",
    "revision": "a261bffd1c1be01870498bf09f9fc966"
  },
  {
    "url": "assets/js/16.281aa5d0.js",
    "revision": "95e29b13e872731cbd3d368c236af6f0"
  },
  {
    "url": "assets/js/17.e39572cf.js",
    "revision": "89b2e9dffa61cc60af90f0e5191d6eef"
  },
  {
    "url": "assets/js/18.d5a1078a.js",
    "revision": "49fe6da96528cf107cfde4349eb2b47b"
  },
  {
    "url": "assets/js/19.777e0399.js",
    "revision": "09c903b884a09be8ba1261fa692c9402"
  },
  {
    "url": "assets/js/2.315a9d71.js",
    "revision": "64e502acd4d96c3ea25c5ffdc172da4f"
  },
  {
    "url": "assets/js/20.cc0d7330.js",
    "revision": "2e3446fd906749c1ab4133b18c05f19d"
  },
  {
    "url": "assets/js/21.eb96f4de.js",
    "revision": "57abd171dfc1d471af4d1b2faeff4b02"
  },
  {
    "url": "assets/js/22.e66e30e2.js",
    "revision": "cafa41f924b6a0c5e21067f87b6cde89"
  },
  {
    "url": "assets/js/23.46c9f745.js",
    "revision": "e067d6220bae8380afb97e7d2229cf2e"
  },
  {
    "url": "assets/js/24.d10349ea.js",
    "revision": "582c11a1deed0180cc205074442f04d8"
  },
  {
    "url": "assets/js/25.21abf5d1.js",
    "revision": "772045f5c91004ef786773945e464ae5"
  },
  {
    "url": "assets/js/26.0b9396e6.js",
    "revision": "fe130d67367c354df6bf8d3f058c892e"
  },
  {
    "url": "assets/js/27.9fdb9a4a.js",
    "revision": "405d29d6f203902d89834a0dc449b51c"
  },
  {
    "url": "assets/js/28.f5242c01.js",
    "revision": "693cb8593726eb29e4a152cf186a3ede"
  },
  {
    "url": "assets/js/29.29808dc4.js",
    "revision": "478b59712ebc6a502e09b05ef7b24352"
  },
  {
    "url": "assets/js/3.ce47fad8.js",
    "revision": "a4ca4116708cc1c1877454355d02ccd9"
  },
  {
    "url": "assets/js/30.335ad48d.js",
    "revision": "b3b6d94d3b6b1e3f807d52c68b4bdafc"
  },
  {
    "url": "assets/js/31.f23a6037.js",
    "revision": "a245e0894ce5e65e7afe108834b43d35"
  },
  {
    "url": "assets/js/32.1acf2eec.js",
    "revision": "787739ded17ee0b87dc4dfb93e658a89"
  },
  {
    "url": "assets/js/33.9deb2306.js",
    "revision": "2f4eef8e73e6c91541cea212d555a034"
  },
  {
    "url": "assets/js/34.d47a432a.js",
    "revision": "b00b406b6c4f0f5c4743b774c9fd7a79"
  },
  {
    "url": "assets/js/35.6a0fc8ba.js",
    "revision": "fcf20cef95c9e41ccc46974690f9969d"
  },
  {
    "url": "assets/js/36.8a4024ed.js",
    "revision": "7752284f05e3552d13abdcbf21950530"
  },
  {
    "url": "assets/js/37.42d85840.js",
    "revision": "86ccc9aa03809fe220b586cb1a0e774b"
  },
  {
    "url": "assets/js/38.70fd9597.js",
    "revision": "7b5de045aac89c298b56036c986f0776"
  },
  {
    "url": "assets/js/39.c4743dd2.js",
    "revision": "beda82d4acdb3149c598a655b92162ad"
  },
  {
    "url": "assets/js/4.687f09cc.js",
    "revision": "f67cc0a7dafa4059322d00b07d0b500e"
  },
  {
    "url": "assets/js/40.0c6f4d43.js",
    "revision": "f0f2cbc989dc8f73b152a1a36d6fc401"
  },
  {
    "url": "assets/js/41.6a5aaddd.js",
    "revision": "9cd631dc1168395d554c0e4639d2ae35"
  },
  {
    "url": "assets/js/42.e9799144.js",
    "revision": "822126df0e2aec08a5334ff578dd5b5f"
  },
  {
    "url": "assets/js/43.30344d90.js",
    "revision": "093858ec52beb3e638f8db14e8e879b0"
  },
  {
    "url": "assets/js/44.1f6ed373.js",
    "revision": "2df9a5d3965ad89af3e96448d1f5ff66"
  },
  {
    "url": "assets/js/45.9b4cab9d.js",
    "revision": "ecbcb6d8769aac96a1db6eec00a2a3d6"
  },
  {
    "url": "assets/js/46.373d4bed.js",
    "revision": "0a24398d4e3592d1033ea650b370b100"
  },
  {
    "url": "assets/js/47.3b855bd5.js",
    "revision": "1e0c641edd183388004bfa940d26f03a"
  },
  {
    "url": "assets/js/48.71af10f7.js",
    "revision": "a5e3c34139d91302e02ad44e55b32780"
  },
  {
    "url": "assets/js/49.e0009e98.js",
    "revision": "b2b8a2994cbf34b514c772750b86216e"
  },
  {
    "url": "assets/js/5.d095469d.js",
    "revision": "cd7702171dfb2b2b22d02f11358b5c06"
  },
  {
    "url": "assets/js/50.4ab9697f.js",
    "revision": "ad96770b8e79a2a868604900aad6c27d"
  },
  {
    "url": "assets/js/6.bc11b620.js",
    "revision": "c503bdffc6eb79680c76063d300d642c"
  },
  {
    "url": "assets/js/7.6016f71c.js",
    "revision": "9d8e8483c9dedf6b69bc4d119f023b4c"
  },
  {
    "url": "assets/js/8.6821b785.js",
    "revision": "478a3dbb1942a126457db37e14a2a366"
  },
  {
    "url": "assets/js/9.04140810.js",
    "revision": "668353569b76d3357647ecc455aaecb8"
  },
  {
    "url": "assets/js/app.edd2a231.js",
    "revision": "c5a69683a55743eece437b311592773b"
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
    "revision": "2dbdf731ba7c257ca20cec5c8c32f3dc"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "f625ce9c31da969516f0963924b8f138"
  },
  {
    "url": "game/risk/index.html",
    "revision": "0d2413b4c06b98f746f50c7f1c6c7302"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "29feb2992a8750dc27ade4c9051c887a"
  },
  {
    "url": "game/smart/index.html",
    "revision": "ab1f032f218e2a90517e49d606336e57"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "58cf45a54882dfdbe76c573cc33d23c7"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "7e9b7bb6bfb28f11315c8652f7169202"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "ae89f0cce68d7e8aba797cb37f8e764f"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "78a7196b91ad020ef6821705759400ea"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "d06184be3a88e62726cc6e32d5999661"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "85abd9a5a63cc0625f1c62742a77e983"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "90006f9d1ccd5dcb93407a886211f24d"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "3d2aa954858d5765d51af136f2eef027"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "346ae2bbc37014df1a342241793dd7e3"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "46fea78894147a87716aa9f0685d7917"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "847975a86e48ef348bb6355c1e777189"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "e350eafabb0561f5fa122a7edc012c7d"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "b6595b9585de0db8f5296287b452d1bd"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "d278ac3ab3ac80163c15cd41da698548"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "c2f703690f0936ac89bc66490f6a177e"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "e083ef8c73d909132809cd5520ff9d53"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "a3ac409b30d3962bc6dfa387b32219d5"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "71979485ef44d4d89251649be784d291"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "be0712d6097da65496fd173c0d0622e7"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "7e34e4b79bd0d6315ea76784685589fd"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "be1b81a48a7e4d5fe67acd184b453c9a"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "1bc1b38d2f66db4f98348754e0621990"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "99ba8a4c2e1c7a977ea3ddedbdc3dbb0"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "582db0fb7cc052f3811ccb6f8ab1a351"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "50625e92a9403720d6367a77b2ae082c"
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
    "revision": "681fe587a042236acaef5363eb063cf1"
  },
  {
    "url": "join/index.html",
    "revision": "2c4f70845201ed671c944b148ae6b3a8"
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
    "revision": "e1deb0af533a4c79a631a93d3aa96f55"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "bc6a652033e92a4ec8ef69fc713cee22"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "9afe1324bbef474c3d6964cc9f117218"
  },
  {
    "url": "search/index.html",
    "revision": "55fabcb77cfabbbb2535eee8e7911385"
  },
  {
    "url": "tool/all/index.html",
    "revision": "4b60b0cf94cc14c9bed59987e9dddacc"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "ab92fcbba34de998cf3fe75066f8f419"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "7ba76eac4abc641c187aa005a699e960"
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
