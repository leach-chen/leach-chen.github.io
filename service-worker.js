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
    "revision": "e4a0cdfbff049901416897e9fcba6fd5"
  },
  {
    "url": "assets/css/0.styles.9aeb6a61.css",
    "revision": "e6e95040c460badb96a2eed8569e244e"
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
    "url": "assets/js/12.0a2cf535.js",
    "revision": "c4a13bf017471c800140d88da6e97431"
  },
  {
    "url": "assets/js/13.bdc390a6.js",
    "revision": "a8b3aebdd8c7aa69af5440c1cb87da46"
  },
  {
    "url": "assets/js/14.b452e7b7.js",
    "revision": "ad575f0d6d12910527127147030be2e3"
  },
  {
    "url": "assets/js/15.6abeeed2.js",
    "revision": "59bbce8095d9495a220df80461acec42"
  },
  {
    "url": "assets/js/16.a1cbe3c1.js",
    "revision": "880ba8aa536ed6d260a67eb3f5629954"
  },
  {
    "url": "assets/js/17.ec5e8eb6.js",
    "revision": "c23f7778cb317d42d6f11b915fb89a49"
  },
  {
    "url": "assets/js/18.f5515bd0.js",
    "revision": "88084962d01d01053fa0bb51d8f6db6a"
  },
  {
    "url": "assets/js/19.f2fce359.js",
    "revision": "28ff72493d8d9b176923f3d6b75cf085"
  },
  {
    "url": "assets/js/2.b050b301.js",
    "revision": "dec6bef71971db8b852f82ba72fd0d3e"
  },
  {
    "url": "assets/js/20.628dec11.js",
    "revision": "d6dba29ddcd373b3963d7252de493753"
  },
  {
    "url": "assets/js/21.82505b54.js",
    "revision": "5b0a7ea3bb4cb279623e2d383407fabf"
  },
  {
    "url": "assets/js/22.8e237b66.js",
    "revision": "173940293e756a609820f476efd06a16"
  },
  {
    "url": "assets/js/23.3c4b4ece.js",
    "revision": "0a857ec3b1b4b46fa193178716a39d8f"
  },
  {
    "url": "assets/js/24.bd0b8295.js",
    "revision": "3ebd00a5395b4cba3678c233e1a6ef81"
  },
  {
    "url": "assets/js/25.65b5ca60.js",
    "revision": "2ef7b55ecb826822e0186407f879e3d0"
  },
  {
    "url": "assets/js/26.8934b08c.js",
    "revision": "55c51136adef7ae739f5768bd28ed8ec"
  },
  {
    "url": "assets/js/27.f76c5e63.js",
    "revision": "94222e4f397dec4e49d651627c917873"
  },
  {
    "url": "assets/js/28.5df5bb2a.js",
    "revision": "34faddd964986a752b60d6792a7ae01d"
  },
  {
    "url": "assets/js/29.17340e59.js",
    "revision": "4a5ff9b001088f7aadc0f41eb2e6a08c"
  },
  {
    "url": "assets/js/3.d5c9b8ad.js",
    "revision": "6b91741eb21b3ecaf10d263e08d5cce0"
  },
  {
    "url": "assets/js/30.6639d8c0.js",
    "revision": "18c0d92427754f1d2fe30aa4f902d129"
  },
  {
    "url": "assets/js/31.6eb44786.js",
    "revision": "d4665492679aa078ca11681e332c0649"
  },
  {
    "url": "assets/js/32.b483de7b.js",
    "revision": "b9170ebb52e7491290927f8fcfda7cf4"
  },
  {
    "url": "assets/js/33.ce67a2b2.js",
    "revision": "63a15e00550ded9104adde28456cb320"
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
    "url": "assets/js/4.405e50f4.js",
    "revision": "95d1193349565b85cc7b43c7af28c703"
  },
  {
    "url": "assets/js/5.1ab53c8d.js",
    "revision": "080594400ee6d9d2835ad9c4e51451cb"
  },
  {
    "url": "assets/js/6.3a417d6e.js",
    "revision": "15b18eab20779db39eb86c7748394131"
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
    "url": "assets/js/app.d218e99f.js",
    "revision": "c8b9ac54f5ab8711c03597c429c35ef5"
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
    "revision": "2e2afd1dacf0cc1dffef19129aa46a91"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "e2ee608e85bbec120db4e65c1581ed75"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "268a25d6e91396a9c8e1babc951a7f39"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "7ccf31b99504b6fdac1aa71f9ce58b30"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "38e57762b6ca3833c6ad670c639c015f"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "4709184536901edcc6e348f668f43f7c"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "63da5d9d8f5aba5ee0151481d4692414"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "903b625de469d38bff1246f44575dd31"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "b3f36b82d0f6a93cb75d17b6dcf809eb"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "d15a9cc5b472eddae6787e2e0495060f"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "5530e2fd46ad0cbe7ec77cbd0b43963e"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "086c4765e8ec41c484d8d7acb4b53ca4"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "4085ec32457ab67e4be346af0e686107"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "29d4b827e18d098f52d6822b8642d243"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "36904ff83d173fd1b8aefbb25a5cbe22"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "8a40849bf684751658649cd3cd3d25a8"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "bd635b4ff328ae77f5d04c218f3aa38b"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "175391c7eddc7106ea3ab018c7b09724"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "a915e1f25ca41849b658e1b63421bce1"
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
    "revision": "1f000755d478ce5e4b1c7598415bbdcd"
  },
  {
    "url": "join/index.html",
    "revision": "ff36af6012eef8212c95b904b464768f"
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
    "revision": "4009f7cab21f7f4d20f6939e5088ff89"
  },
  {
    "url": "search/index.html",
    "revision": "9c13d54792b60c39f6255b31484f7d91"
  },
  {
    "url": "tool/all/index.html",
    "revision": "942eaa5a17d45423f14590a132a8aa6a"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "6c4e88985580db799bfa4b6484b8bdb4"
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
