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
    "revision": "68d59df818ebf9f7b9d1e617e5540660"
  },
  {
    "url": "assets/css/0.styles.10db3f3f.css",
    "revision": "7a78f24078cce6fe2d660cabf43ce3da"
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
    "url": "assets/js/10.684c8acf.js",
    "revision": "b93ecd92fd0a84c02c4d1b8ff79776c8"
  },
  {
    "url": "assets/js/11.17980678.js",
    "revision": "45568e430dfe4b2a9d2953f5bb2e7c51"
  },
  {
    "url": "assets/js/12.b37cf359.js",
    "revision": "a5cdc1f89b31764b36cf2ea56592457d"
  },
  {
    "url": "assets/js/13.b1b6d0ba.js",
    "revision": "a60f2ee93f6a01af2849dd798ad3073c"
  },
  {
    "url": "assets/js/14.13605c23.js",
    "revision": "843edf857b436cecf1b0cf1ef622a50c"
  },
  {
    "url": "assets/js/15.a073c871.js",
    "revision": "36fc17a98e9b9819c3906fad0ca8b5be"
  },
  {
    "url": "assets/js/16.89127742.js",
    "revision": "444321ccda1f189a35443eede0baaba9"
  },
  {
    "url": "assets/js/17.bb607719.js",
    "revision": "6dd24fc42ee1eb31e97ce30505894ce4"
  },
  {
    "url": "assets/js/18.8c04103d.js",
    "revision": "3f5befa09cc2e59ba458075a59d995fd"
  },
  {
    "url": "assets/js/19.a2448cb7.js",
    "revision": "4f3ef39c17d1cf962507cd3a3d750dbe"
  },
  {
    "url": "assets/js/2.71767fa7.js",
    "revision": "8c9fcba341476713560fd4cc6084639f"
  },
  {
    "url": "assets/js/20.46f0d446.js",
    "revision": "81294daaf941998311ace4f1313255bf"
  },
  {
    "url": "assets/js/21.f9b376b1.js",
    "revision": "a8fd68406c093676fde96c011269514e"
  },
  {
    "url": "assets/js/22.9cd40e98.js",
    "revision": "1644a62358990af5211548d8cf2bedc1"
  },
  {
    "url": "assets/js/23.15a5d642.js",
    "revision": "082e2a8d08e2510fa42e93c77e40f064"
  },
  {
    "url": "assets/js/24.5f1a2699.js",
    "revision": "0e5d2581604dd01d451e4e966ed81321"
  },
  {
    "url": "assets/js/25.c34e1a49.js",
    "revision": "8819d43d0fc216f5ffa62b2507bb9871"
  },
  {
    "url": "assets/js/26.1d917a46.js",
    "revision": "912d5d9f24ec6ce4f2fc01258ab1d6a6"
  },
  {
    "url": "assets/js/27.42c147e1.js",
    "revision": "8851fd4113a1eca4f90b7f386cc363fa"
  },
  {
    "url": "assets/js/28.f6e32097.js",
    "revision": "25f9473bc0f6d6864f8cbd2bf8f4253d"
  },
  {
    "url": "assets/js/29.07d0cc04.js",
    "revision": "abdd2d70a77f806de3baf9f97575e83c"
  },
  {
    "url": "assets/js/3.b8ec5d30.js",
    "revision": "34815af0be6d0c1db53c08cc8e94c93e"
  },
  {
    "url": "assets/js/30.2fdf070b.js",
    "revision": "97326e97a61a7b205c517c30c30db754"
  },
  {
    "url": "assets/js/31.e97007a9.js",
    "revision": "81ab896324740bc226e20dd8a8fbcda2"
  },
  {
    "url": "assets/js/32.82e1f3dd.js",
    "revision": "c085e05607276cd231d6d220372460c8"
  },
  {
    "url": "assets/js/4.e5775356.js",
    "revision": "e03c2d3ddd0975a67d1f6286c1c72a32"
  },
  {
    "url": "assets/js/5.fcc310b6.js",
    "revision": "e26ce2d9f052942eff7927b034b7f328"
  },
  {
    "url": "assets/js/6.5f0b2f84.js",
    "revision": "697358cbd68c63c7bdfa84b0247cc577"
  },
  {
    "url": "assets/js/7.1b78d481.js",
    "revision": "0746486a41acd0a4abb94d91bca70398"
  },
  {
    "url": "assets/js/8.410329a0.js",
    "revision": "203401da6c0d05b8051dd7e08c86cbc8"
  },
  {
    "url": "assets/js/9.d854eb7d.js",
    "revision": "bea0271ce04ba31bdb2882bf9fbe1081"
  },
  {
    "url": "assets/js/app.0489ec0e.js",
    "revision": "f5880e91fa55809fff6ae46cc711b127"
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
    "revision": "d5637087d1b080af578abcd821f9b317"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "7b82313320fdef32fedf3845abaf31d3"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "b606c16010d4af79ab768108892620d4"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "115e45de30578e18afcb1f2942cf5a6c"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "7bce72490604d7c9e3d09bef4f1b3216"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "3cab38ad4bf3d173dca4c312795725f3"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "5a538b17b18ff92cc1ef80adea1168bf"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "3ddde9eb21f847cc0ecdc1a07e317c41"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "b3ea2ec2e167a41f44c6b6952d39e0e0"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "aafe8ce642425ae983abea50552564e7"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "9c3ce94274e01c62e5497c6c453e63be"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "b50f57da5238bb25447ef6de661a105b"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "ae77d0e8157b03b0fb39c818c62de386"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "a6d834a92eb0d99502c17cf74a8e355c"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "9c251505647d71575277166c4ca13920"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "677ed9272bde8724626ff32ed068cbee"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "b0c82822d5d0d3f4accf9819521c6701"
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
    "revision": "60babffbc82f2fdb872f80504c51afb5"
  },
  {
    "url": "join/index.html",
    "revision": "6f1ec6701ecc404a20da06494dc40543"
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
    "revision": "dce68971f25d3ad8a06b5c3d5df0edd7"
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
    "revision": "ac95db57bf6faa574016f59187fbdb4c"
  },
  {
    "url": "tool/all/index.html",
    "revision": "e43e488e691faa456fd50d2da882419b"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "7cba583973947db30cefd1e0729e6234"
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
