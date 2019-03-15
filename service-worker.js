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
    "revision": "7ae69ae18ec418eaab119edef813bc10"
  },
  {
    "url": "assets/css/0.styles.99965490.css",
    "revision": "adde9b9be6ee8326d0bd78d16c7bb0c7"
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
    "url": "assets/js/10.2503d9bf.js",
    "revision": "66b66b121189323bcd425ba93376e0c7"
  },
  {
    "url": "assets/js/11.220c2fc1.js",
    "revision": "4e6542880884a9a3c85974859c314345"
  },
  {
    "url": "assets/js/12.7237f32b.js",
    "revision": "356ce4969c3de88fa44a55e7936c8648"
  },
  {
    "url": "assets/js/13.0bba5342.js",
    "revision": "b7145d98393b44ddd394fdedd0df0ad0"
  },
  {
    "url": "assets/js/14.7f36391f.js",
    "revision": "97b674411b76f2634b790135641dc499"
  },
  {
    "url": "assets/js/15.72ee033c.js",
    "revision": "443f50c9ba698a8d4fae3109716a6821"
  },
  {
    "url": "assets/js/16.221d0872.js",
    "revision": "d89f5dd71ad1bbf27289b5412336a281"
  },
  {
    "url": "assets/js/17.e5a5516e.js",
    "revision": "da8011e977f42234a2425be6221218f9"
  },
  {
    "url": "assets/js/18.9b2dd765.js",
    "revision": "310956396699e652c62494ee11727be7"
  },
  {
    "url": "assets/js/19.124afed3.js",
    "revision": "bb81525ce877b223f3bafc5a4ae010be"
  },
  {
    "url": "assets/js/2.8c3a2ea1.js",
    "revision": "8f79d5bd7911fb1977bc7df18b22c03f"
  },
  {
    "url": "assets/js/20.9de3db4e.js",
    "revision": "c8e658eda112e4896432b7d48fe76443"
  },
  {
    "url": "assets/js/21.82505b54.js",
    "revision": "5b0a7ea3bb4cb279623e2d383407fabf"
  },
  {
    "url": "assets/js/22.9bca401e.js",
    "revision": "ccb8a15c10d9067d9a8f2c7b7cc6ea32"
  },
  {
    "url": "assets/js/23.99be9163.js",
    "revision": "710ce71d1d3ae14d303796a825188a6f"
  },
  {
    "url": "assets/js/24.38b4f89c.js",
    "revision": "89b6d3bd595c64fe53d25c6f38e33b84"
  },
  {
    "url": "assets/js/25.9e4991f0.js",
    "revision": "acba7256d403975edd895fbad1fce783"
  },
  {
    "url": "assets/js/26.8934b08c.js",
    "revision": "55c51136adef7ae739f5768bd28ed8ec"
  },
  {
    "url": "assets/js/27.46b27005.js",
    "revision": "9f27b88b1978bb2527b84d134937d3c3"
  },
  {
    "url": "assets/js/28.74c7e424.js",
    "revision": "3f9797eec0d5bec57e2863e344a600ec"
  },
  {
    "url": "assets/js/29.ac5fab3f.js",
    "revision": "2dc6dcd376af82083313d06113e85e06"
  },
  {
    "url": "assets/js/3.e6e04651.js",
    "revision": "1be374a07dec7748afd330b24f489b01"
  },
  {
    "url": "assets/js/30.6639d8c0.js",
    "revision": "18c0d92427754f1d2fe30aa4f902d129"
  },
  {
    "url": "assets/js/31.1c34e837.js",
    "revision": "104f21dfd2d45b3aff4bc8d477457762"
  },
  {
    "url": "assets/js/32.b483de7b.js",
    "revision": "b9170ebb52e7491290927f8fcfda7cf4"
  },
  {
    "url": "assets/js/33.d209d755.js",
    "revision": "52d017e87ead408ff71e7dd52dc9319b"
  },
  {
    "url": "assets/js/34.6c60af3f.js",
    "revision": "9d8b1efdc618b92795ccff080b28b16b"
  },
  {
    "url": "assets/js/35.36e485ee.js",
    "revision": "85718a6c61e8186704bff1878f18caf5"
  },
  {
    "url": "assets/js/4.cab7480e.js",
    "revision": "52d25d4f9c5cf340692887eeeaf0fd06"
  },
  {
    "url": "assets/js/5.00b4459e.js",
    "revision": "91a8324b5fb982721d8088bc9b7eecda"
  },
  {
    "url": "assets/js/6.63891727.js",
    "revision": "1930bd8409bfed52ed89f6ac5e593047"
  },
  {
    "url": "assets/js/7.fd9cae55.js",
    "revision": "34e346a3ca977f94be866eff5d552624"
  },
  {
    "url": "assets/js/8.814fc7e1.js",
    "revision": "665eaa86f0afd3292558dde74ff104bf"
  },
  {
    "url": "assets/js/9.cc66a26a.js",
    "revision": "61d7d962a28558e4dcec0893f1ad7f90"
  },
  {
    "url": "assets/js/app.70072038.js",
    "revision": "050dae23e11bf8f39776081a34f5db02"
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
    "revision": "2fa0d83bd39d24ec266bab84ac76ef46"
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
    "revision": "31ffece0deee31370efe4a638f03daf4"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "d92fd716935c36aa29b2f6e7d5d40a3b"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "834d1b8bfbec208e81ee32def2fdb0c4"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "27804ccefcc8133ead0e8dff4f9fde0d"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "e6183c9fc384797d23b32de369b366f3"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "2db6354150937fc6b006cd006b8fcd47"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "59537e618f52c159719025ca73f3ffda"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "7617f3b5ef1d564169f1d8b644a4fcda"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "75fe2017a7c5e578a6266e3e09319601"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "432e4fe079509839129e4cc6737188e2"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "3df902964724caba64ce0f317804aa98"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "0cd67ac11aa4ce6cd907e29fedaa3f64"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "7b0ccaaef04728f530fab064b682cbb8"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "0c95ac7e8c00991f3726efe97251b233"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "db913888277eb1150bbb93812e552b71"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "d3df8a46a320fd6d09346d5581a324e7"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "2ec9ae9b1005e6bd63330d67579a2d95"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "4dcf1c0b5127d7992648ad5b2dc81b59"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "a4cf2147f868b3349d936149264e9374"
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
    "url": "index.html",
    "revision": "42c2948dbfba96be66c5a0304ea33989"
  },
  {
    "url": "join/index.html",
    "revision": "5b3b9f2db92af004c0b6a82f68cc1bcc"
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
    "revision": "ecf85f471cd1894456c761ef3c922ad2"
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
    "url": "js/vconsole.min.js",
    "revision": "40fd7e9234606a341adcbb1ce0a15d51"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "aff01fc6b0ba9755fc6246c9b6dd9964"
  },
  {
    "url": "search/index.html",
    "revision": "831b38e4e1a430573ad60e64ac48b532"
  },
  {
    "url": "tool/all/index.html",
    "revision": "a449c095d2c3a99e3be218fed2ce3a39"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "9359526eb540523f0faf37066d195fbe"
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
