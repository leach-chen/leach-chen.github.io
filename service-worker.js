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
    "revision": "f8c160c664e6ad66986fb6129fda135d"
  },
  {
    "url": "assets/css/0.styles.a69865b6.css",
    "revision": "05b3c2bf8d852ddc31761a2ea12b4244"
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
    "url": "assets/js/10.9b14e4b1.js",
    "revision": "4df1cbbbc89ec1600dcb8ad792e91c63"
  },
  {
    "url": "assets/js/11.6bf3ab9c.js",
    "revision": "3ee79c28d1ec06160511b9ac288be5e1"
  },
  {
    "url": "assets/js/12.58843da5.js",
    "revision": "3e8becaeb5a4879b2e0942e78326530e"
  },
  {
    "url": "assets/js/13.c53d5fa1.js",
    "revision": "eb76d4b3884e13774802953d1069d878"
  },
  {
    "url": "assets/js/14.e46fdb77.js",
    "revision": "48192e4c5d0d9a21ecd9fb2c76d6f755"
  },
  {
    "url": "assets/js/15.ae880709.js",
    "revision": "5ae8c123dda61da1f3100d8921b5051c"
  },
  {
    "url": "assets/js/16.10955ca1.js",
    "revision": "82c318c89ec8b5e905b3a4794e305056"
  },
  {
    "url": "assets/js/17.bf7ead2d.js",
    "revision": "db38881bd2be94ecfb896bc653d2fa54"
  },
  {
    "url": "assets/js/18.a7d7e439.js",
    "revision": "d218e3435e6e5998d59e422a9361ae4e"
  },
  {
    "url": "assets/js/19.642421c3.js",
    "revision": "beb206261b38feb64111fd5df66a269a"
  },
  {
    "url": "assets/js/2.e720d488.js",
    "revision": "a280914459a87d1153a70a273bfaec69"
  },
  {
    "url": "assets/js/20.efd001dc.js",
    "revision": "e2d24c563278da515f99788d5a5d7087"
  },
  {
    "url": "assets/js/21.60543faf.js",
    "revision": "5782858f5c684bc5b2fb4bb1449ddc32"
  },
  {
    "url": "assets/js/22.d7515dbf.js",
    "revision": "dd4b34e95662b43313fcf46fa5fce20a"
  },
  {
    "url": "assets/js/23.5d313c30.js",
    "revision": "c65228d42ed0894455092ff48a447973"
  },
  {
    "url": "assets/js/24.d529de81.js",
    "revision": "f50c292a2ee1f59c90f197ffe37954d3"
  },
  {
    "url": "assets/js/25.579574e9.js",
    "revision": "ccc8e9cc8f19f560ac88f04585165430"
  },
  {
    "url": "assets/js/26.82d07927.js",
    "revision": "b0c307c93176873cce999f19c4950aef"
  },
  {
    "url": "assets/js/27.5d224ef1.js",
    "revision": "6f7c34972e57d66c9e58218d43f0542f"
  },
  {
    "url": "assets/js/28.c34e1a2b.js",
    "revision": "08f65cd807028fc8fb76a63efaa95f51"
  },
  {
    "url": "assets/js/29.d37df1f2.js",
    "revision": "72e8e8ecc56396fa2abd646dbfeadab2"
  },
  {
    "url": "assets/js/3.8e621166.js",
    "revision": "19502434f4b4fc82e1834893703ee615"
  },
  {
    "url": "assets/js/30.1e2dcef8.js",
    "revision": "f0ca4ec8bb02906ce999852ae6b78338"
  },
  {
    "url": "assets/js/31.407272c5.js",
    "revision": "ec9ec725127c40d92301091edb3b9c22"
  },
  {
    "url": "assets/js/32.c905966e.js",
    "revision": "ec062656db4d333f2c0b25fe67803546"
  },
  {
    "url": "assets/js/33.a4fc20fe.js",
    "revision": "11e33d9bb5cc81b97f2face9c9f61224"
  },
  {
    "url": "assets/js/34.cd1443d6.js",
    "revision": "694656c8ff20a26d1068374e81985e65"
  },
  {
    "url": "assets/js/35.803e5500.js",
    "revision": "513306617cd67bdbfa8e7a4f0a74b7dd"
  },
  {
    "url": "assets/js/36.d85ca285.js",
    "revision": "80d4caf3ea646a8a5b2c82087ed5fad9"
  },
  {
    "url": "assets/js/4.f95e5058.js",
    "revision": "d7f4d824bb412155106bb66e5480381f"
  },
  {
    "url": "assets/js/5.ee951db7.js",
    "revision": "88c222236548968df805597aa60aeb6c"
  },
  {
    "url": "assets/js/6.b3ab1c99.js",
    "revision": "2df68f53e0d59f5add5ff1cb1983f72d"
  },
  {
    "url": "assets/js/7.63a38c0b.js",
    "revision": "e88c6cf0e018728f0211be2c9d4f4b04"
  },
  {
    "url": "assets/js/8.bd2ebe20.js",
    "revision": "160d8f9f7e310c39d4b0db0f6a249b87"
  },
  {
    "url": "assets/js/9.920fc062.js",
    "revision": "cd162f963667c0b54e5e632df8b9c4cb"
  },
  {
    "url": "assets/js/app.0a115771.js",
    "revision": "9eed39ca6b645c3b0ea82db452793090"
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
    "revision": "031d295e719db80e949fe00883bb6dae"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "2d859652a448c953f7e23550f5020afc"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "3f6bdf24c4240cd1daf64b97e33308cb"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "109cce384771d1b84647876ebd024253"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "239d33f42f9ca2c9d2b5075f2496fed5"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "c5ca021defabd6a264a915ac3cc0f538"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "88034d02bca50bb3a72547af5fab4080"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "d00e74c8ddd2c1e56b5295aaf0e05cfe"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "71ce4fb9874e25c1ecb327ce7962baa8"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "7b6b7090330274dbf5ee9be4f6d99397"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "f4081166194f69bcfdefd0a1009bd36c"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "32f15f7487962b120b7f146157cc1f84"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "a1107c969a34a75573ed7597cb87b994"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "fb4e5d77d95075694c5e9379ac8d134d"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "656e475e5ccddee018b7e532c866754e"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "8df490f533e638862d2eecb4e5871e93"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "245b73d839da5364b4ec65bf094c634b"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "34a59eb3f81c2a4343c29af34a6ebe4d"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "aaa89ed0af6b94ad13b7e7f1fc1316ac"
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
    "url": "index.html",
    "revision": "6377d206f1971f02f1bf0752001bc748"
  },
  {
    "url": "join/index.html",
    "revision": "ad1ae9eef00bf99ab2dbe44ccb0997ae"
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
    "url": "js/utils.js",
    "revision": "0ba5bf653aa1b7063257a2b368bf469d"
  },
  {
    "url": "js/vconsole.min.js",
    "revision": "a03b6646236194579d6ea0e774b3ddb4"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "60cf19c6a35e27baec2b7e55b49fac1d"
  },
  {
    "url": "search/index.html",
    "revision": "1cd5e18ca40a1bcb00352a3fd8d6399f"
  },
  {
    "url": "tool/all/index.html",
    "revision": "766d73f1e63099d968cd6cb823c95d99"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "603c7625eee8bc297e8f32c3766b4af0"
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
