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
    "revision": "9d75ba996b901def5a43817d782ad55c"
  },
  {
    "url": "assets/css/0.styles.01f1a517.css",
    "revision": "2e5d39b9c6183e191ccaa60f12c81cc1"
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
    "url": "assets/js/11.fa901dda.js",
    "revision": "7a0951a2af63d82fc5350996ae050377"
  },
  {
    "url": "assets/js/12.03d2c77f.js",
    "revision": "2ea24a28aa9f4931db569121b293103c"
  },
  {
    "url": "assets/js/13.d37d9a0b.js",
    "revision": "c9a1246ed9ee5da1956b83397ee1c5a0"
  },
  {
    "url": "assets/js/14.454ceb99.js",
    "revision": "fecbd48af7677411c708e91d7fe66387"
  },
  {
    "url": "assets/js/15.e23c6830.js",
    "revision": "dc46b5a26ba673f438277d6ed3cc74d0"
  },
  {
    "url": "assets/js/16.3f9db065.js",
    "revision": "63ac5133cb41b12a4a602effeeff2557"
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
    "url": "assets/js/22.f4a3b303.js",
    "revision": "ec94906aa5980ed46805aa49c713a2fd"
  },
  {
    "url": "assets/js/23.46c9f745.js",
    "revision": "e067d6220bae8380afb97e7d2229cf2e"
  },
  {
    "url": "assets/js/24.66c2279c.js",
    "revision": "f8c20bbba6f4b5796def7a48a1065ea2"
  },
  {
    "url": "assets/js/25.0d2c7afc.js",
    "revision": "2cce12c2e95364c5e4fe5a49e6f9c0b3"
  },
  {
    "url": "assets/js/26.3bfbae56.js",
    "revision": "5edba9bd5b9ec0c76c517d3defb59ec6"
  },
  {
    "url": "assets/js/27.8e87db2a.js",
    "revision": "d0a3cf229cd86740c5633fa8b1e264c2"
  },
  {
    "url": "assets/js/28.f8b07a5c.js",
    "revision": "95c281fb274d6bec619b1bb43e70ad41"
  },
  {
    "url": "assets/js/29.82951867.js",
    "revision": "75b9c0f066d05d6f13f28ec10bcdaa30"
  },
  {
    "url": "assets/js/3.0408f796.js",
    "revision": "a33c1769bc75bc33df711a748e12e566"
  },
  {
    "url": "assets/js/30.32b42b1b.js",
    "revision": "63bff25609911f1b1ea264b2d372d347"
  },
  {
    "url": "assets/js/31.8c4afbb5.js",
    "revision": "91f3147be3a4fc2b2f2c6cf27306c3e8"
  },
  {
    "url": "assets/js/32.03fbe710.js",
    "revision": "98d2652a32bad0d82fd1fcb2e66785cd"
  },
  {
    "url": "assets/js/33.7729b68b.js",
    "revision": "522281d261d92d7733952b461b0d39b2"
  },
  {
    "url": "assets/js/34.33b5365c.js",
    "revision": "b97dcb9b78c3d6431f4e476c024e72f8"
  },
  {
    "url": "assets/js/35.65b1bce1.js",
    "revision": "3907032b235b30a1854c8bb57502a31a"
  },
  {
    "url": "assets/js/36.31881b2d.js",
    "revision": "51678a614f72fb8f4c0ebaaec1145450"
  },
  {
    "url": "assets/js/37.b2896f95.js",
    "revision": "0e331a04cb6774230760e181610496ae"
  },
  {
    "url": "assets/js/38.86f27435.js",
    "revision": "272e8bf7632f10fe2595b532e4e78343"
  },
  {
    "url": "assets/js/39.5ec382f6.js",
    "revision": "0581a7b8d9fdd0d2e06bf24ef641eb51"
  },
  {
    "url": "assets/js/4.687f09cc.js",
    "revision": "f67cc0a7dafa4059322d00b07d0b500e"
  },
  {
    "url": "assets/js/40.d7499580.js",
    "revision": "4826632a6cf4114285113229a5d620a6"
  },
  {
    "url": "assets/js/41.8e110dac.js",
    "revision": "b39e6d7ffe7e2e9e98e69d54207333fd"
  },
  {
    "url": "assets/js/42.19c262db.js",
    "revision": "b6ae6572190b6e3fb6b0b0ae6463d468"
  },
  {
    "url": "assets/js/43.aba25794.js",
    "revision": "910164b00882136a38d5d3c4b1fd0148"
  },
  {
    "url": "assets/js/44.9d9cad34.js",
    "revision": "08feff86ff913bca85b9264ddc9e4516"
  },
  {
    "url": "assets/js/45.63b0d0a4.js",
    "revision": "a3954563eb454bb3bb9f4f7ee707f9da"
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
    "url": "assets/js/48.173d22d5.js",
    "revision": "d95f0775e2acb7c84ca5fc811e91b0fa"
  },
  {
    "url": "assets/js/49.b56e4add.js",
    "revision": "ea8f12250246f2506de2a6f9eb9515ae"
  },
  {
    "url": "assets/js/5.73554197.js",
    "revision": "0d4a8beea361dca8cbc14e22979831be"
  },
  {
    "url": "assets/js/50.4ab9697f.js",
    "revision": "ad96770b8e79a2a868604900aad6c27d"
  },
  {
    "url": "assets/js/6.440c8eec.js",
    "revision": "da98a3e5fb309d3eee5f918fe2f4ec35"
  },
  {
    "url": "assets/js/7.465d4b92.js",
    "revision": "87fc09a3ae5e434e527319cde6d351c1"
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
    "url": "assets/js/app.5c74ec9a.js",
    "revision": "e524cc5f6742245a39ec77dac3306654"
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
    "revision": "9760ae44f3f8ccb4af3a816966312983"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "7f957439883bd710fc8844a5f5e37b04"
  },
  {
    "url": "game/risk/index.html",
    "revision": "f437b9acdb99e31b40932c9a890d0ce1"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "d6ab21557c87377a26bbf8ea59fc98e4"
  },
  {
    "url": "game/smart/index.html",
    "revision": "2329a0cb3a67ecc22e7015d363180b84"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "cd5a1d6792e2f1a84de61ce06dc07f4b"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "d0eb0b6620d4eafd487f98d4a29b38c4"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "33a72b3efbbada2b2fc5cc83aebd2693"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "a5d33ddfd2630d58d0484ec5d5576b17"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "e239ff36dbf90881931fdd0f75e8b2fc"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "3958039e2fb90201853841c2c143be24"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "2644e86e47ae23263915e752a0e8a930"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "36150c5cf9fe96f402965447294ff853"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "4f1d856b10162693b9904f69d571c21f"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "6292bd08845be47e7ca8e882ed426754"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "b329d42223d66095bcccdc7c4f017575"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "b1198eb0fdf6e28113e3892cc29b058f"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "12c82cf22eccc1520e46783f7e54f6c2"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "eaa7c9f7a4438881b4da494284f96190"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "2000b9d57f048cdc37e2916d806b0a99"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "47a6c76ea632fa756240da05483508bc"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "639ed802785ff00ccb94dc49f648dd0c"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "b3f90cb39f55fbe07287314237f228b2"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "a1b9262ba7b6a917b85d09736595cc00"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "eb28608785647cd015446f25149f42c2"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "506789773b3c694fb35e5d6998705c2f"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "96f92d20cebac2ee1b48339ac72dd5a1"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "9781efc8977cc0e9c1ce1772c349ef43"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "83e8de5e84f4ffc77bf105028ab1aeee"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "a823f3a6a67a245dd167d380748cd1df"
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
    "revision": "f01ec29014e2860c99e7a34eb22d2136"
  },
  {
    "url": "join/index.html",
    "revision": "47bd9c88bd3fe0855b79ee99fcd8f6cf"
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
    "revision": "4e55b5bc61b4aabe6635a4a1a7515a69"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "c5d0040a1d3334e3f835e3216554d8e2"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "24b8adf9d6ac18fbe98fe8bfcbf9075f"
  },
  {
    "url": "search/index.html",
    "revision": "c72f9663a809c2c3b7bea7747f16730c"
  },
  {
    "url": "tool/all/index.html",
    "revision": "8c826966c031fdf37538d881ec97dd08"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "75d53c5dae03bb69f7f69aeb55fa2135"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "fc4f014e91c80b74ab81c1be61e3b2f1"
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
