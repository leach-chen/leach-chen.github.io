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
    "revision": "e90796a0eb37d59ee8444269869f49de"
  },
  {
    "url": "assets/css/0.styles.3e207730.css",
    "revision": "a6d7db19483d942acbbbbfd6dedf4181"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/Algolia_logo_bg-white.f309cbb8.svg",
    "revision": "f309cbb84b60cd71bee3f21e7f24162e"
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
    "url": "assets/js/11.d497bc1c.js",
    "revision": "b36e532f3145a6007e105c0cf1234907"
  },
  {
    "url": "assets/js/12.10954977.js",
    "revision": "bc8817cc1accd0fa6ce450b390dfb373"
  },
  {
    "url": "assets/js/13.4af216b3.js",
    "revision": "0e1e63ff91ed2292a7c5344a91363019"
  },
  {
    "url": "assets/js/14.83de3d91.js",
    "revision": "3cc23500bf01a7edd45b0d43bdc983f4"
  },
  {
    "url": "assets/js/15.fcb34ae3.js",
    "revision": "7820fdabb34a468bf9bcff60d43d0feb"
  },
  {
    "url": "assets/js/16.6312480e.js",
    "revision": "dd3c2d179123e622230198041cd9d5c8"
  },
  {
    "url": "assets/js/17.65dca5ec.js",
    "revision": "782ed2ca981affc0fdc4ee36190f9778"
  },
  {
    "url": "assets/js/18.dd92dfd2.js",
    "revision": "6500c55f93fb5d80f616804a4ce2a620"
  },
  {
    "url": "assets/js/19.9febae5f.js",
    "revision": "607c56c848ccef6d9b7c75476ba69840"
  },
  {
    "url": "assets/js/2.1d7fe64d.js",
    "revision": "64642e2d43aa5d8a695c3521c5e937af"
  },
  {
    "url": "assets/js/20.1f28b101.js",
    "revision": "9a5f387f903c7486f747c3d6b1e099c4"
  },
  {
    "url": "assets/js/21.712ee028.js",
    "revision": "f096bbb808924348eb307aaaf8930f77"
  },
  {
    "url": "assets/js/22.bdaeb62a.js",
    "revision": "90a1a288c6552dd426e7b263557dd354"
  },
  {
    "url": "assets/js/23.a4d4c40f.js",
    "revision": "26e949cdfe25e310d95d72fc98e79fb0"
  },
  {
    "url": "assets/js/24.0b62adb1.js",
    "revision": "79821c4430750c9a376cf660cd922eca"
  },
  {
    "url": "assets/js/25.0684aac4.js",
    "revision": "d31b20576df8ed5f035de0dcdd4b4ae6"
  },
  {
    "url": "assets/js/26.6760456c.js",
    "revision": "ae604b0b1cb2d5f102e8b4c5cb7dc90e"
  },
  {
    "url": "assets/js/27.64331a28.js",
    "revision": "c273ca1793d453ebdb9dcc941f7007f5"
  },
  {
    "url": "assets/js/28.f8310b52.js",
    "revision": "a5a8fc79650353383cd66a91ba51b477"
  },
  {
    "url": "assets/js/29.63054227.js",
    "revision": "bbf94c8dbd5bb34b4070ba2644127f17"
  },
  {
    "url": "assets/js/3.3fc1d0fb.js",
    "revision": "b0ae445ef4cfdc695f1704ca6ae3eb0c"
  },
  {
    "url": "assets/js/30.1cbf0f7c.js",
    "revision": "f57dada7bebb2c1024b1c0fb9adc25f1"
  },
  {
    "url": "assets/js/31.450bfb29.js",
    "revision": "e4167e5a9a2f6060e906ccd3cac6c1ed"
  },
  {
    "url": "assets/js/32.c6f7edc3.js",
    "revision": "5895b05612e32602d2cb8d48ec0b11e2"
  },
  {
    "url": "assets/js/33.6b96fb6e.js",
    "revision": "ed0cc75e50a5d9b847faf20a724c4716"
  },
  {
    "url": "assets/js/34.b611ea27.js",
    "revision": "efb504ebf5a596d3e63127d3f27e338d"
  },
  {
    "url": "assets/js/35.34234ea8.js",
    "revision": "792e32a4b72ac180eb47c16e975cdbed"
  },
  {
    "url": "assets/js/36.120b6db7.js",
    "revision": "e23f8d68284b96b8cf495c357374e866"
  },
  {
    "url": "assets/js/37.5b9cd629.js",
    "revision": "b36728caa73e2d017356dd777724670d"
  },
  {
    "url": "assets/js/38.e06ed211.js",
    "revision": "eed831bc523cee56124b9ca5df86ccda"
  },
  {
    "url": "assets/js/39.845838e3.js",
    "revision": "002532c8b4bdbd142120b1d28d07d63e"
  },
  {
    "url": "assets/js/4.897a2e3e.js",
    "revision": "03af7f7a0cbde2bf009c2aef292f8b5f"
  },
  {
    "url": "assets/js/40.40f7a757.js",
    "revision": "c407cc989fb5efffdc9afced4e2ee81f"
  },
  {
    "url": "assets/js/41.eb415f62.js",
    "revision": "6161a1355b2fdb953fb4d765c55b901d"
  },
  {
    "url": "assets/js/42.170b2feb.js",
    "revision": "a04b5a1c34fbb40da4449506f61f1870"
  },
  {
    "url": "assets/js/43.35bed33e.js",
    "revision": "4467678f309e60ea50548ddd3b976ee6"
  },
  {
    "url": "assets/js/44.cb2cf515.js",
    "revision": "a8702f1916f364a9b2af1711f0f54c36"
  },
  {
    "url": "assets/js/45.67525d44.js",
    "revision": "93c62e0051062a9e69afcb750c64836a"
  },
  {
    "url": "assets/js/46.f0daf0e3.js",
    "revision": "3767ccd093a1a752a5ede6f70a5e8a84"
  },
  {
    "url": "assets/js/47.ccf0ba74.js",
    "revision": "0d6b04abe70b81c1ed8b9e71c20cacee"
  },
  {
    "url": "assets/js/48.4fe7729b.js",
    "revision": "69d13d7007866a72b6d8abad4e365fd1"
  },
  {
    "url": "assets/js/49.d3e59df0.js",
    "revision": "c8394fb59abdb091e1caab9e26766830"
  },
  {
    "url": "assets/js/5.d8ad9386.js",
    "revision": "13be6c23f55a4315ad768ab6f1007e79"
  },
  {
    "url": "assets/js/50.1e0eaf81.js",
    "revision": "0ade2b3c85e4a9d88711c88d3204e03c"
  },
  {
    "url": "assets/js/51.53c0e6c5.js",
    "revision": "88670cae3e496c97e6909cc5ecaa9cef"
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
    "url": "assets/js/6.ff244708.js",
    "revision": "18eaf26503402b88308a0c21d11c2051"
  },
  {
    "url": "assets/js/7.f7b3558e.js",
    "revision": "45d72336e9a88b603818de59257743d6"
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
    "url": "assets/js/app.7571dd78.js",
    "revision": "80cb6bfd8c15774612fbe20537a43a61"
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
    "revision": "1b176198cae87b7e8127aee74cbef034"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "3143da8f9094af1c9da6d8e91e0b85d4"
  },
  {
    "url": "game/risk/index.html",
    "revision": "fa24db637d0b3659837f3ce1a88e84ea"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "256234c67665ce0c85fb44559e65d8d1"
  },
  {
    "url": "game/smart/index.html",
    "revision": "f651d95e26d47ce88966690c2eac2cc5"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "5f4630c50a112482f2ed2d8cb373e264"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "51e7aebda7949ee6a9db4d857c4527b7"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "e066e9c5fe2c9e0a7bdfd1a011f44403"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "02bc1db687d5de3b11c3f6afb93aad91"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "364d147db5d361b4e542632aa7a5fcd1"
  },
  {
    "url": "github/android/media/index.html",
    "revision": "29e798128ee55881e84f7c7b42c35c7f"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "3ed720cff11b9f7a0e9a5fea31b0944a"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "87130eb971a5670bfc347dc4446e5cb1"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "5cc9ab5d107a4531e95766f888bdbbee"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "8a087eac8572517754303ed3b6b3bde7"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "cd8f6075b018e4cbf2d62f4edfda7e44"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "7191dc480acc0cad1754f6ef304b0bbe"
  },
  {
    "url": "github/h5/animationlib/index.html",
    "revision": "f02cf786112f2fee9488ab27900e1780"
  },
  {
    "url": "github/h5/coolh5/index.html",
    "revision": "11409c261c7051c1d823eddfb057cbc7"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "e7924c373b9a33bf09e3290be123f884"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "618375cbd40636cd441f9b1a7b0f8a29"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "a1ea2e1f516c53d321c8cc4fa737c914"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "2545be9cee2d6a33eebd336c15a4f489"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "efd74f3549aacb5a79ea468bff91fd49"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "f0d77bebb8b7dae47f6df777fb99bc12"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "0ef714f90f30c0f7d913bae49faee27c"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "a98cfeef2aac265e44255256635a6924"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "cb0a5f27b6346622a1838811a2e5247d"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "aaf188bc8eda85a81d8c265fd7a8945b"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "505ba4609ead70333f07c010d8fecd31"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "7ad9b159a175f3676649fd27f6832f1d"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "d3faeafc3451c84813383161544f0925"
  },
  {
    "url": "img/Algolia_logo_bg-white.svg",
    "revision": "f309cbb84b60cd71bee3f21e7f24162e"
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
    "revision": "39096ce413550d7b80b48ab824b8eda8"
  },
  {
    "url": "join/index.html",
    "revision": "33e36e4259694d01f3627a63b15969ab"
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
    "revision": "a03b6646236194579d6ea0e774b3ddb4"
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
    "revision": "91ea342eae8f8137c0317fc7053afda9"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "d3c1d0f18242d4e30fdb96e19158b729"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "ef5f20f9d282e222a2d14aed595b9439"
  },
  {
    "url": "search/index.html",
    "revision": "388630ad1551e716d8162a80d0dd298e"
  },
  {
    "url": "tool/all/index.html",
    "revision": "dc5c10bd99ded7847d5065428529655d"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "6d9c793c8f7163c821dd7c62e1cce919"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "35ce9f50afb49cf069849058dcad940c"
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
