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
    "revision": "ccdaf9eebf1cb62c0b23a81a516e568c"
  },
  {
    "url": "assets/css/0.styles.15714f46.css",
    "revision": "39067385f8c13ecc0de3616d311fccc4"
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
    "url": "assets/js/11.c39e8531.js",
    "revision": "27dda7a292137cdf45221558dfbdf683"
  },
  {
    "url": "assets/js/12.4d22f0fc.js",
    "revision": "aecf60c27e1443ec0065e5aeceac4eca"
  },
  {
    "url": "assets/js/13.e2b79cec.js",
    "revision": "b95774ee29cac17ce5581799d3b22087"
  },
  {
    "url": "assets/js/14.514e66bc.js",
    "revision": "782fe2b42c93e9ef8bcebe982a2dada9"
  },
  {
    "url": "assets/js/15.82bc24ff.js",
    "revision": "88207ec0e4ca13271bd49d21f1928f84"
  },
  {
    "url": "assets/js/16.39d95d5f.js",
    "revision": "90073dfabc8017c1c75ec349e4db59e5"
  },
  {
    "url": "assets/js/17.1462011a.js",
    "revision": "4ca8c21302eddfe369144cbd5d6a9831"
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
    "url": "assets/js/20.c6138442.js",
    "revision": "87b7670bb79909455188a281d3ce1ad4"
  },
  {
    "url": "assets/js/21.963aec48.js",
    "revision": "0b4e3d066fb47cd4f7efbf1de77f4cc8"
  },
  {
    "url": "assets/js/22.8ff23be6.js",
    "revision": "913b74c90fe89fb11cc57ad483f49b04"
  },
  {
    "url": "assets/js/23.c067eabb.js",
    "revision": "34ba9bf0f88796aaf07298e5c9ba1beb"
  },
  {
    "url": "assets/js/24.9957fbc3.js",
    "revision": "defec89f4b5bc442dd4390cd820a19c9"
  },
  {
    "url": "assets/js/25.b74f93f7.js",
    "revision": "c7ee93b46870696502786738993a3a52"
  },
  {
    "url": "assets/js/26.92aaf887.js",
    "revision": "30334ca603e43abe7caebbde7bcb7057"
  },
  {
    "url": "assets/js/27.94605942.js",
    "revision": "ee3e5da0efc34967023573a501070bda"
  },
  {
    "url": "assets/js/28.a66a1ed9.js",
    "revision": "44df3f8083350c35dbe61501247530ad"
  },
  {
    "url": "assets/js/29.84de5ae0.js",
    "revision": "e94744f724a20d8114a97b5837eb68fc"
  },
  {
    "url": "assets/js/3.83258ddd.js",
    "revision": "b73f65aef3e5f07b124a27b5e52d26aa"
  },
  {
    "url": "assets/js/30.97f95b51.js",
    "revision": "573e734e60c44fd5207d0c94a19c3e55"
  },
  {
    "url": "assets/js/31.cbc92e8f.js",
    "revision": "33c0363e880c848f31760c75690141c0"
  },
  {
    "url": "assets/js/32.af9534eb.js",
    "revision": "16fbc0e88bc68c57735de59ef323d34a"
  },
  {
    "url": "assets/js/33.aadb1664.js",
    "revision": "43e8044456339829053c5bbfd95d6958"
  },
  {
    "url": "assets/js/34.00d7c93a.js",
    "revision": "2a01b40f1e618711ff8ac7f3b0e250ef"
  },
  {
    "url": "assets/js/35.d1940b24.js",
    "revision": "525db9efc815d60594ef250b93bde0e2"
  },
  {
    "url": "assets/js/36.8e8305fb.js",
    "revision": "609ec65714bde498b9113f9710ed767c"
  },
  {
    "url": "assets/js/37.ec41dc1a.js",
    "revision": "018854c3118524ae39bd933b1eadcfdf"
  },
  {
    "url": "assets/js/38.6de6839c.js",
    "revision": "ddff8fdf35273c9cfeb526535c9a5e88"
  },
  {
    "url": "assets/js/39.0ec256eb.js",
    "revision": "e31736a4515af0e2f6feee27a67a38ae"
  },
  {
    "url": "assets/js/4.6e93ce45.js",
    "revision": "a9368beebeeb5a08031edb7c4882ccbc"
  },
  {
    "url": "assets/js/40.f5fba6e3.js",
    "revision": "31ef1f26b836d457c05c7ec200049037"
  },
  {
    "url": "assets/js/41.330ba8c2.js",
    "revision": "9560798c2eb27ac09a994be6bc660788"
  },
  {
    "url": "assets/js/42.7a2103f1.js",
    "revision": "7a967af7351ab928495431f5c8b30a84"
  },
  {
    "url": "assets/js/43.42d68257.js",
    "revision": "26170a6b72f1a714927b33b199db6993"
  },
  {
    "url": "assets/js/44.bab23e6b.js",
    "revision": "4aa56395525f1d3fc02144b881ac4f90"
  },
  {
    "url": "assets/js/45.176eca16.js",
    "revision": "29b6e3478702b77ba82ac696e56a32c5"
  },
  {
    "url": "assets/js/46.1a17f4f3.js",
    "revision": "44f714536a0a63320652fdaba33a0d54"
  },
  {
    "url": "assets/js/47.40866b11.js",
    "revision": "dcd80dea110955cbc74e1ceb03cb95bc"
  },
  {
    "url": "assets/js/48.2a036d37.js",
    "revision": "a75e8582b53dd3511d558a2254130bef"
  },
  {
    "url": "assets/js/49.206f242f.js",
    "revision": "8661b371070dc800967e1353efd68964"
  },
  {
    "url": "assets/js/5.87d5a356.js",
    "revision": "1e04ae4b46ee108d28f08f6741e605a7"
  },
  {
    "url": "assets/js/50.bed02c15.js",
    "revision": "110d5cc5a3b60d8f7b6fca433c1bc952"
  },
  {
    "url": "assets/js/51.13902f0c.js",
    "revision": "47e729bc1e1b8f874fcee00e63400882"
  },
  {
    "url": "assets/js/52.5e34c7f1.js",
    "revision": "f43189d070bf1f6e15503c8f68e7b6e6"
  },
  {
    "url": "assets/js/53.6f9268a5.js",
    "revision": "057af8f33b2698089758e2c03d1d57ca"
  },
  {
    "url": "assets/js/54.7bfbf281.js",
    "revision": "6cb693dfc2dd70d38f5051301f836c3e"
  },
  {
    "url": "assets/js/55.cdab018e.js",
    "revision": "3e4386c208db38dcb687792408bce437"
  },
  {
    "url": "assets/js/56.8d4794b2.js",
    "revision": "e8edfac8422a0b1994c55a20e37223ef"
  },
  {
    "url": "assets/js/6.bc11b620.js",
    "revision": "c503bdffc6eb79680c76063d300d642c"
  },
  {
    "url": "assets/js/7.35841e56.js",
    "revision": "6145bd8b046295dedf96c8dc7dd6c927"
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
    "url": "assets/js/app.d84ce8d3.js",
    "revision": "12e0b966c5df19492f2b6826313a3ede"
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
    "revision": "7b1eed78d7bee8f09c9d93e92e2c6e4f"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "d87033f35e298521f9632084d5bd915c"
  },
  {
    "url": "game/risk/index.html",
    "revision": "43523831156766c2af179fbde0353f1b"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "b9d0062bcc51f14baf30527e72fb1dad"
  },
  {
    "url": "game/smart/index.html",
    "revision": "48aeb1edae350198e81e1db42f805425"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "27ba7e992eefc090e26d986a668f30f2"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "c0e46dbc317688c681423089d79228dd"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "f0c0184c0b3873eb725c6590283b67c5"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "cdb8c50e9b76cbdc9e43517daca18c77"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "b6a00462752eec4f0c2d2140aac8f1a2"
  },
  {
    "url": "github/android/media/index.html",
    "revision": "5224c68df9051de58a1bbaa647bf3aa0"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "9dba02e5a0f6b95dbe04a5be376c82c0"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "e442a78295e155cd7efe44f7ca36d1ca"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "46bebb4bd33c43f36cab59bb9e9a9364"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "f1d1aa46d1401da64bb8ac2f5288da4e"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "13beb72e2fa713150d0fa49ae3d236cc"
  },
  {
    "url": "github/flutter/synthesize/index.html",
    "revision": "c7a26977aa5bcbfaf1aecf39b952fda0"
  },
  {
    "url": "github/flutter/view/index.html",
    "revision": "fa3f8808ea06ac0e2707efc7cb45509d"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "68568f8a8d1d94c6881b9f7ed345e555"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "58355bb054ee67d623dd33c8105b3bfc"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "f4a2d26653e6e72b8eea6928f7c205c2"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "c4130e0a7b1ce02d34dddd7d435a827a"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "b4dc4a27d7d02a386ee16f4c479b67b7"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "77548e95da02cb5b3483f57de02630ca"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "6eec0862c7ac443216a4a1eaa680bedf"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "6f65b933630eabb930b4ebc05336ceac"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "8744170472a3499900b3562acdd7d26e"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "aa996c66f7bf148ce5a2ecdbb6a13d93"
  },
  {
    "url": "github/ios/view/index.html",
    "revision": "e977d3330ef4cd429295f534e6a89ec3"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "ca6e8791ee061b4c62ecaa8fc2b110ba"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "c3c1e54ac12deb8e06cf69da3430ce60"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "daf8d911fefeac47fd69dab23b70dd97"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "ae1fd77eb32f7d4e4e23750d22618b2b"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "b211bd887ff1ce50f5436970d5e38db9"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "5266421deff8a12e6dedbdac53c1d12b"
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
    "revision": "88dd960e1a546b76efdf7510755692e7"
  },
  {
    "url": "join/index.html",
    "revision": "bf0dd56315a8b27d51c2a9d9c7e1c242"
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
    "revision": "eec66192eb9dec5181d546ace50a7d20"
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
    "revision": "a324ae7649a3af249384c5bfbd9626d7"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "b91df7dab698292ec8339359fbc055eb"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "dd04f1396a3dddd15caf2c0359fb36a8"
  },
  {
    "url": "search/index.html",
    "revision": "d5fb81340b20fb3cd9fd5c9cfabdecac"
  },
  {
    "url": "tool/all/index.html",
    "revision": "d74dc7c269cf062049982dc2cdabeb62"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "84db0f9f0668d77cec5c0befa4985e54"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "a99b07caa421a6c60f575ad3be8ade78"
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
