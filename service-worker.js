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
    "revision": "5969a09d519926d61dfb56924c38c72e"
  },
  {
    "url": "assets/css/0.styles.2e67945a.css",
    "revision": "3e63498c79ae12e4fdab701f85eb5402"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/alipayimg.76375138.jpg",
    "revision": "76375138cb4770eeb6837bc2d8d62cf1"
  },
  {
    "url": "assets/img/bk1.7c50ace6.jpg",
    "revision": "7c50ace6f872f9225f0574616415886c"
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
    "url": "assets/img/wechatgroup1.50cbcfa5.jpg",
    "revision": "50cbcfa5734cd073db4ce10d0a770551"
  },
  {
    "url": "assets/img/wechatimg.0714bed8.jpg",
    "revision": "0714bed8e9ff413c61280cda5079ae2f"
  },
  {
    "url": "assets/js/10.5d2fc58a.js",
    "revision": "e96fb0f12207a8402a675dc8b7ae1d3e"
  },
  {
    "url": "assets/js/11.b5d23943.js",
    "revision": "000de04ce6fcbdb8fd3392f8d13be8af"
  },
  {
    "url": "assets/js/12.8c0c638d.js",
    "revision": "0424663bd78ad774364ce16cc9440690"
  },
  {
    "url": "assets/js/13.d625a244.js",
    "revision": "2246a3b85d6b90fe95ba6f3f88334f68"
  },
  {
    "url": "assets/js/14.c96a000a.js",
    "revision": "852df8ac9cda85912017ea4b315b1d7a"
  },
  {
    "url": "assets/js/15.c1bebdb6.js",
    "revision": "bde4f5265c0cd4c4b0793cab68a97296"
  },
  {
    "url": "assets/js/16.fe25507e.js",
    "revision": "7e3eb94c5f64d7dbf9828a8c2aff3255"
  },
  {
    "url": "assets/js/17.09c95eb6.js",
    "revision": "be5e963f00b81c578d5ff649c22f8e2f"
  },
  {
    "url": "assets/js/18.f17e0f6c.js",
    "revision": "ef31607a0b45a3da7df01af05b029f2d"
  },
  {
    "url": "assets/js/19.30c64d6d.js",
    "revision": "83e64a61eac117064911c51d9a424ff9"
  },
  {
    "url": "assets/js/2.803779ff.js",
    "revision": "6197cb8f4957958f5d74b26834dc12dc"
  },
  {
    "url": "assets/js/20.b9e17ae9.js",
    "revision": "07fde18d1e43d4e2a4457a1e89659262"
  },
  {
    "url": "assets/js/21.503fcc21.js",
    "revision": "96cc4009730322b0ff175676eceb9530"
  },
  {
    "url": "assets/js/22.3828aea8.js",
    "revision": "0ebb4319daa3af8fe634fbfc470ca3b5"
  },
  {
    "url": "assets/js/23.191fc7c0.js",
    "revision": "a50b369c91b7c4f7f2479f06fc9b8344"
  },
  {
    "url": "assets/js/24.f97596f5.js",
    "revision": "263b4ed746e470d445f6acfd4f7c6e84"
  },
  {
    "url": "assets/js/25.f1578596.js",
    "revision": "67f939b56086672bb44c39cee8978eb7"
  },
  {
    "url": "assets/js/26.bf387404.js",
    "revision": "6cf2121449b6c545788202a390557bb4"
  },
  {
    "url": "assets/js/27.d87f943e.js",
    "revision": "b5657d471cd586bc1854d2282de77138"
  },
  {
    "url": "assets/js/28.a255f4ba.js",
    "revision": "d0b72f59c010110e3731844154ac3249"
  },
  {
    "url": "assets/js/29.fd8db7c1.js",
    "revision": "1c7bde0137a31a6557ab6d0eedfc5537"
  },
  {
    "url": "assets/js/3.2ac0c682.js",
    "revision": "caa02dea7131d79d3eb111679aaba5c2"
  },
  {
    "url": "assets/js/30.20bd6280.js",
    "revision": "91408dddab39eb48de4b7354766fa7fb"
  },
  {
    "url": "assets/js/31.861aec26.js",
    "revision": "e85a3d4d0838298f92decf234fdc1995"
  },
  {
    "url": "assets/js/4.ccf40d77.js",
    "revision": "bf01f80b55dc57b4a62bb6c86cb49ee2"
  },
  {
    "url": "assets/js/5.225b880d.js",
    "revision": "332b0b0d366f9515d603df53007c6214"
  },
  {
    "url": "assets/js/6.79796867.js",
    "revision": "cf179e6a5589e346a2629b4d2ace134a"
  },
  {
    "url": "assets/js/7.236c81df.js",
    "revision": "2f163c4cb4551d01a559ee9d81d7014f"
  },
  {
    "url": "assets/js/8.b0257eff.js",
    "revision": "c7153e97d58c49362ce1f47527708391"
  },
  {
    "url": "assets/js/9.8516c470.js",
    "revision": "e2056e6ec540430f1c5bbfda543ac459"
  },
  {
    "url": "assets/js/app.5783f783.js",
    "revision": "91bc676ccc5cffd844dee816bec08996"
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
    "revision": "87c5c34bfb61e0dc4654cccb2c137754"
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
    "revision": "4115bdf3ba603bcf91e854806bdcb81d"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "5071a04075f769f5695c06bf5f12726a"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "738c8a7d77163d9bac59eff9f4271f0a"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "48572eea8bad451362dc2deef03207d2"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "3ea01dfa1b986eeb0182de6ac372df07"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "06dac6afba2a09a67f0de8a082ef927e"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "0c9d3e52c757ecf5e3d630c794ab15b0"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "b4cea6d03183ab1e348607dedf4f7cb3"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "722ff7e0bd32c08d8dccd1ea3da3782b"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "8b1ca04f8390e427028993be9592e5bb"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "3234e8ad6f8ea203935aec3b95142152"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "39e93ace6cee8e1548577cc5e7e605a6"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "134600a8597c80bc3893d1917fbc5b17"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "7b974407e35c43e7f59c101ad9045ff1"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "89162a8dce26b0ab5b1313d6394deba7"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "383593f08b83a21b256d64a5949e21aa"
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
    "revision": "f48fc64636eb09e455c4d08a7a98665c"
  },
  {
    "url": "join/index.html",
    "revision": "69c6237abff48d92f0fce0a46e4e393d"
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
    "revision": "ee3385ea6fadc2d2a9b3303797c7f2f1"
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
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "5224b7a3285a3a22ffc27ce9db4bbe9f"
  },
  {
    "url": "tool/all/index.html",
    "revision": "e955d777dc78fb5c7aff301f4610d799"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "a8230bb19168d967f0f870b3ed3b2e37"
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
