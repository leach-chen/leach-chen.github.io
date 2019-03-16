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
    "revision": "89b56609cbda1290010eecef2187a01f"
  },
  {
    "url": "assets/css/0.styles.b1f1dac1.css",
    "revision": "dd1cb6af73dddeb219ea7394e70c2dfe"
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
    "url": "assets/js/10.7b592c9b.js",
    "revision": "34a6687c4531d56ad40029d2e61300e5"
  },
  {
    "url": "assets/js/11.3c347520.js",
    "revision": "358ff533811f75145163f1265296cc2b"
  },
  {
    "url": "assets/js/12.cfebb7bc.js",
    "revision": "9fabce7df2b4ef9881178f9a35ca53e1"
  },
  {
    "url": "assets/js/13.52ee0932.js",
    "revision": "541152a86ee1491e6cbdd847006be16d"
  },
  {
    "url": "assets/js/14.b03a4522.js",
    "revision": "768dcb10684f048af8e61cf25f149714"
  },
  {
    "url": "assets/js/15.8b8cb59c.js",
    "revision": "af9e1b33781b84775b74f041b0485112"
  },
  {
    "url": "assets/js/16.cb752340.js",
    "revision": "485d24102f19f405673e1f948450cdd8"
  },
  {
    "url": "assets/js/17.fddb0246.js",
    "revision": "7d22da539add7fa1bc9f457793490ae1"
  },
  {
    "url": "assets/js/18.ec63c0e6.js",
    "revision": "76bd110f9e32873459516921f7c3138b"
  },
  {
    "url": "assets/js/19.7f546b73.js",
    "revision": "fbabdb9e09644a0bb71bac88e307eef9"
  },
  {
    "url": "assets/js/2.bdaa1680.js",
    "revision": "1ae1b1b8e6de029ef902c9cc329a43b3"
  },
  {
    "url": "assets/js/20.400a9843.js",
    "revision": "9ffba72982bf533677f6732befd41d1c"
  },
  {
    "url": "assets/js/21.09771453.js",
    "revision": "6b31f21e5571e4b67957c89c47a1e8bc"
  },
  {
    "url": "assets/js/22.038c6b2e.js",
    "revision": "6cef298c8a8c7279e981b18c4e56c7c9"
  },
  {
    "url": "assets/js/23.bff84225.js",
    "revision": "7dadbb3ce84cea7571d66ade493706ca"
  },
  {
    "url": "assets/js/24.d481f0d0.js",
    "revision": "0a37049e29c98312e746a359213c5a17"
  },
  {
    "url": "assets/js/25.f0aece43.js",
    "revision": "1ff543380875bd6b821d1c4f776a7e81"
  },
  {
    "url": "assets/js/26.58f4e2b3.js",
    "revision": "94c35a04e4bd205b4c9989590370640a"
  },
  {
    "url": "assets/js/27.015f35e5.js",
    "revision": "6bb4bd076f5e7620b224ce3370e44044"
  },
  {
    "url": "assets/js/28.7bd45a02.js",
    "revision": "95e293af545e552551774359b879dbbb"
  },
  {
    "url": "assets/js/29.3705197a.js",
    "revision": "f67884b9a8e62ebdce16dc526a020b6f"
  },
  {
    "url": "assets/js/3.50531389.js",
    "revision": "d044caf0e35a3b2d0e9264d7bc078234"
  },
  {
    "url": "assets/js/30.8c74f88d.js",
    "revision": "b4abde35be3676157f97e262c9976083"
  },
  {
    "url": "assets/js/31.379b73b8.js",
    "revision": "74d6105cf68535e649291461f71ef152"
  },
  {
    "url": "assets/js/32.dae111e2.js",
    "revision": "c0286d26cf383e5e5774ba53867571f9"
  },
  {
    "url": "assets/js/33.1f880627.js",
    "revision": "0adb61ed551a30ef3b9afa87f20ff79d"
  },
  {
    "url": "assets/js/34.e652d0be.js",
    "revision": "fbc5e35548644e80498fa12943fa2d5e"
  },
  {
    "url": "assets/js/35.5f4166e6.js",
    "revision": "a364c66cda66c544267049e6d0f006a8"
  },
  {
    "url": "assets/js/36.a046c03b.js",
    "revision": "205b35b0fadb38e2a5a5db7c7acdacb7"
  },
  {
    "url": "assets/js/4.0700bcde.js",
    "revision": "15d0daa582cd4261e92f35c8b0c5bf40"
  },
  {
    "url": "assets/js/5.b1945f7c.js",
    "revision": "5dac51f2123804a844c28ea782d80ccb"
  },
  {
    "url": "assets/js/6.874a6164.js",
    "revision": "df3b7c6be9280c084188adb3e31ca807"
  },
  {
    "url": "assets/js/7.1cb80599.js",
    "revision": "8cce6532df32d6b023ee4a58ca2ba2e5"
  },
  {
    "url": "assets/js/8.7f2c36d8.js",
    "revision": "9d5836b523c6f3c2fe38439e0f37f8fc"
  },
  {
    "url": "assets/js/9.cc66a26a.js",
    "revision": "61d7d962a28558e4dcec0893f1ad7f90"
  },
  {
    "url": "assets/js/app.fff31195.js",
    "revision": "2973dfdfc2a21159e1a13e3c8bbe351c"
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
    "revision": "6f2a02608db7aa3bc290e093330f6837"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "9b06818ac62545f515bc4fd2da9d6437"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "4754f5f555ffd6496c7df8cbe24def29"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "126ab2853a53f0f0474d3075390efd9f"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "f0777b7abb8f9128224f5a0019ea0186"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "2ca915c0bf0449b09c105abd62d9712b"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "172b7fae09a24cf3b8e47bb2dcc17d4d"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "29bdf485a000045d5718b442551ea7c2"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "fa0770c102cb27ca0f6adfa60233117d"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "61208adc91b430947c86b3b552b11c85"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "036511eb68a34ec4db5be8c7c0247ec5"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "69ed8a4379dd2d9d2c507362bf9216bf"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "a8995d274d026b1859e8030472b80201"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "2f418ca6352e3eb46ef60d74d3d3313a"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "b4eea89c2024e0574151ef6af6e816e3"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "4a72ef1560faa90bf4cf102b9cc39296"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "6d0ca01339cd5d6c93fcccab5277ebbd"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "f377ae6c4d8973850ab578900b0ce826"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "277c654a60a4c1fd201f0a9c80a5a427"
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
    "revision": "86d2d5ff35157c90a90ec331f3ab2f42"
  },
  {
    "url": "join/index.html",
    "revision": "c9caee704e04ae179f384297f6468508"
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
    "revision": "b030dcbbd15caf871b127324fec469c7"
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
    "revision": "4461bab3b971dc5cc50496e95ae96cf5"
  },
  {
    "url": "search/index.html",
    "revision": "b7dc9f5afb60ad1108cb649f47f7104a"
  },
  {
    "url": "tool/all/index.html",
    "revision": "ffcbe0b330041c0e63ed49e8c550ec98"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "3b8bc76bf50c9461b1c6d8e2cf1dad0a"
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
