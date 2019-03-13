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
    "revision": "70ae498b092c7c4d7a3caee5c8acc4a6"
  },
  {
    "url": "assets/css/0.styles.e5787468.css",
    "revision": "10eaccbf0bb3b652daf313eb88a232d9"
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
    "url": "assets/js/10.185cb21c.js",
    "revision": "edfaff4d8d12bcfcc120d1ce58c21641"
  },
  {
    "url": "assets/js/11.6c2ff8d9.js",
    "revision": "bb049442448802a3f5a56bb2ce335b38"
  },
  {
    "url": "assets/js/12.f95623ee.js",
    "revision": "66b03c7e75bb1b1814539fc2ee698bcd"
  },
  {
    "url": "assets/js/13.a6482888.js",
    "revision": "d34f53d02f73adb79654334b5c64aac6"
  },
  {
    "url": "assets/js/14.69ecbe07.js",
    "revision": "5b9d21be799c03d67bf05cb96e913573"
  },
  {
    "url": "assets/js/15.d79445a1.js",
    "revision": "46a60cfeace7abac4c0909d3920f2a4c"
  },
  {
    "url": "assets/js/16.ec5c9e9c.js",
    "revision": "d6103c0a75e08b8e3c2d089198bd875e"
  },
  {
    "url": "assets/js/17.c88edfc6.js",
    "revision": "bb1e3df7756213bf33f16e73121cdef5"
  },
  {
    "url": "assets/js/18.c73b5e21.js",
    "revision": "e17e331e0d1efb41b0308c5a858b155e"
  },
  {
    "url": "assets/js/19.5b872ed9.js",
    "revision": "3b35df371796bce5a609934821919f0e"
  },
  {
    "url": "assets/js/2.15e9cb4b.js",
    "revision": "7a9c26cb0d614b1cfc78d976b0cefc94"
  },
  {
    "url": "assets/js/20.7d88826f.js",
    "revision": "34b73463d7c83e0880481f38178ebfae"
  },
  {
    "url": "assets/js/21.e3d5b8fb.js",
    "revision": "8fcfebd212d673ca3073c7d63260c1e7"
  },
  {
    "url": "assets/js/22.3daa4967.js",
    "revision": "2526173ede7711606babf02f23c33981"
  },
  {
    "url": "assets/js/23.34204c51.js",
    "revision": "21c8888409bfd243090f5451c8f587f3"
  },
  {
    "url": "assets/js/24.c67f70ab.js",
    "revision": "701956154489670ae4bb54c4bd00c2fe"
  },
  {
    "url": "assets/js/25.7298f889.js",
    "revision": "16002f741a61e8c675b979b5d77beb7c"
  },
  {
    "url": "assets/js/26.190defd6.js",
    "revision": "f67ea81ae7308d771121123b3f84f4e7"
  },
  {
    "url": "assets/js/27.100ff2e2.js",
    "revision": "e797a388afdf23d65e00062ef2334846"
  },
  {
    "url": "assets/js/28.164fefa4.js",
    "revision": "b9ef51428e7d9a7a3fc71e4e5742872a"
  },
  {
    "url": "assets/js/29.133e0195.js",
    "revision": "a51aff717cbaa34145972e3e0ac9200e"
  },
  {
    "url": "assets/js/3.9746e4d8.js",
    "revision": "cb8ccb79b2fb49dbde57d2c4dc7f0780"
  },
  {
    "url": "assets/js/30.eb2c509b.js",
    "revision": "215b3820763580123462a598d6d10e84"
  },
  {
    "url": "assets/js/31.78a1f54b.js",
    "revision": "a20ecedafca23cc5ea53cd065f095258"
  },
  {
    "url": "assets/js/32.685ebfba.js",
    "revision": "1506a4814d6f26cd4b3333a40cdc4bed"
  },
  {
    "url": "assets/js/33.2ce424d7.js",
    "revision": "63a15e00550ded9104adde28456cb320"
  },
  {
    "url": "assets/js/34.ea3f0fdb.js",
    "revision": "bb3c0887554378302f08dc08b2372b38"
  },
  {
    "url": "assets/js/4.551d2431.js",
    "revision": "bcc7ce3c16b845b294e477587cb61466"
  },
  {
    "url": "assets/js/5.08052912.js",
    "revision": "ac084907af2126096aef0f8e8bdc1f1d"
  },
  {
    "url": "assets/js/6.911e81ad.js",
    "revision": "62c64c6c525254876b6d5b58e593538a"
  },
  {
    "url": "assets/js/7.5a8beb98.js",
    "revision": "d0c1cfd835980c3b7c1575e9db2b8747"
  },
  {
    "url": "assets/js/8.afc95aea.js",
    "revision": "391ac621c9dc50ceeedb5d2597dc7636"
  },
  {
    "url": "assets/js/9.23813700.js",
    "revision": "f3a3b7c5e6d367343edaa767b7cb6258"
  },
  {
    "url": "assets/js/app.6cd45013.js",
    "revision": "e0b49623627218d94acb9f913b94fe54"
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
    "revision": "1e55bf581ede81b109693523642af9d6"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "11be0eb34a01db01a7099be5d113272b"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "1192a0c94dfb1a4fe9c7498ca8ef9fc2"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "46318a778b6c107c2cc30e9125b546e3"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "74f698bea64e93d62012da899b6483f5"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "8ba70559781ae38dfcb28d39fac8d59c"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "99032269ccd983a5accbd80e2490f9c9"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "d776e8f52483ade15d35c9e375f71a1b"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "f5b099aabb085965960c3a2b49d9861a"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "d76b150e09ca8dd14b88ad68cdb8e6f7"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "588edcff14ac482da01d1b8499e2209c"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "7d6ea6d41b7b98e1a4e9a3e401a3eeab"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "0474755b72545d6d5e07a5986dc14571"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "122de658150f836ff4fe99bebc885b25"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "a11302e2bfc7204fbffe32739ed57a9e"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "6926be96a7d729758dfe4a42eaa16756"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "0d9e6a36530e3b00384e9404dddcee46"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "57fe57979e73ca350191fa8e86687579"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "4843b9403abe13fd4ce29bc392d46c6e"
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
    "revision": "057d4f3563b5f764cc4773dff040413a"
  },
  {
    "url": "join/index.html",
    "revision": "a2bfbe09af37a6614def3901c10cbb19"
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
    "revision": "7fa094257fa57f1626e9e8de2f668faa"
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
    "revision": "f0245d1e4d7a24356cee2544df5b2d18"
  },
  {
    "url": "tool/all/index.html",
    "revision": "973b1960e72476dacd6f4ec2dd1ef767"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "1ccd0bacc1a1c28d51b9ac456ae6134d"
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
