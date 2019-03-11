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
    "revision": "03a08504140b50c0013b8d85f13a1106"
  },
  {
    "url": "assets/css/0.styles.de440db9.css",
    "revision": "aded773488e64d5167b62c03d2504a32"
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
    "url": "assets/js/10.9b33bbbc.js",
    "revision": "b287a308f5d423730b210969da0083ca"
  },
  {
    "url": "assets/js/11.00a24277.js",
    "revision": "96be562944f0292048928df55b9e362e"
  },
  {
    "url": "assets/js/12.653f414a.js",
    "revision": "a368f9940437f216710f6d0ca0507d3b"
  },
  {
    "url": "assets/js/13.9def23c9.js",
    "revision": "7eb6b7789d2b5f7845047fefffa51173"
  },
  {
    "url": "assets/js/14.dc7f53fa.js",
    "revision": "484d3ec68b17da6f8aa000ab60f7c2f1"
  },
  {
    "url": "assets/js/15.9196315f.js",
    "revision": "450e30d8afcfce00bd960a838888358f"
  },
  {
    "url": "assets/js/16.cbb7fb0d.js",
    "revision": "efd4eb51e79db199493144471ef4ed56"
  },
  {
    "url": "assets/js/17.a7e6edaa.js",
    "revision": "88cff6ce5d05181a03f557d7da9ba041"
  },
  {
    "url": "assets/js/18.8c04103d.js",
    "revision": "3f5befa09cc2e59ba458075a59d995fd"
  },
  {
    "url": "assets/js/19.b90baa8d.js",
    "revision": "ece170829d51996ac625cdb02ab60ce4"
  },
  {
    "url": "assets/js/2.71767fa7.js",
    "revision": "8c9fcba341476713560fd4cc6084639f"
  },
  {
    "url": "assets/js/20.ada24f2e.js",
    "revision": "0e79dc9f42b859e4d6724d3a103bf352"
  },
  {
    "url": "assets/js/21.6c7de26b.js",
    "revision": "8771cc0276eab0435b1cbd21640028e3"
  },
  {
    "url": "assets/js/22.5d226d4b.js",
    "revision": "3c139c9f3b3542c7aa84352bbad6ea21"
  },
  {
    "url": "assets/js/23.556d27c3.js",
    "revision": "0b4295d0597383dd4e5b8b673e3bf212"
  },
  {
    "url": "assets/js/24.c8e72b03.js",
    "revision": "4b1f4fde1741db65a116af2043a069b2"
  },
  {
    "url": "assets/js/25.a8e67cc4.js",
    "revision": "db48e98e685fb6ee0540a7dee3163bb5"
  },
  {
    "url": "assets/js/26.1d917a46.js",
    "revision": "912d5d9f24ec6ce4f2fc01258ab1d6a6"
  },
  {
    "url": "assets/js/27.4b9925f5.js",
    "revision": "e944eb7387b9f18c9fb833d46aa5039e"
  },
  {
    "url": "assets/js/28.ee5417c8.js",
    "revision": "89043b86c719424e2422dcfd40384782"
  },
  {
    "url": "assets/js/29.3e8ca72b.js",
    "revision": "59aa972ed1b3cb0327a00287f656e11b"
  },
  {
    "url": "assets/js/3.69e9f14a.js",
    "revision": "1890084bbc235fb61fa1fd97a94085fe"
  },
  {
    "url": "assets/js/30.1f85082f.js",
    "revision": "3587dde856cf07b65c123af24b71aca7"
  },
  {
    "url": "assets/js/31.16567179.js",
    "revision": "d2a3f2cd809ed9021b3119d1e74f3850"
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
    "url": "assets/js/5.fd286e4f.js",
    "revision": "3d1dc886694062819662ac91f51cd5b9"
  },
  {
    "url": "assets/js/6.5f0b2f84.js",
    "revision": "697358cbd68c63c7bdfa84b0247cc577"
  },
  {
    "url": "assets/js/7.f6b87e15.js",
    "revision": "9aba2e52316bfd9cf3ae09b573eef8c6"
  },
  {
    "url": "assets/js/8.afc95aea.js",
    "revision": "391ac621c9dc50ceeedb5d2597dc7636"
  },
  {
    "url": "assets/js/9.d854eb7d.js",
    "revision": "bea0271ce04ba31bdb2882bf9fbe1081"
  },
  {
    "url": "assets/js/app.ec807553.js",
    "revision": "d0326b9ef6038c92ef5b19c4b3587fac"
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
    "revision": "5e9db05c19e0893eac2ddb2df2fd81c5"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "0ac3912998b316425ec448eebdb5e1ec"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "5f0dac2cd075dbd1ade3fef62b2a2188"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "bdd335913d2c1ed1d525ad4a59b6f700"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "9f5985e973a785883b5c12409103d17d"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "77a6f8038a4c5d15605818ca985f6cd6"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "bce503debf336d56dba0ce27fea1e335"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "0f2c4567421ada5aa5d69762cdb8f740"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "ad672a74b26692cef2ea65bc6697f30e"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "8ff0d1cbbfadddb4d75dc7ab9296b9c6"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "27f2ff2279fb411bdd427d88fefbff8e"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "5001e7722c8cef4ecc9d3230777a7eab"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "96b8ffe37517a97c348d0796e7fb75c4"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "5e0ebf8b493d3c36465c3731e1067799"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "af904dde8a7fb4b2c0acdb854826929d"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "65894ea4ef64b7acdf42d2a902f2bf21"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "7308a927b7d973cbf391c962dd3caf1b"
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
    "revision": "d85824392dd201d1bf6d8e17679b4735"
  },
  {
    "url": "join/index.html",
    "revision": "fea589e61c257faac6100a8e136ddc94"
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
    "revision": "c30730df2ce54aa48f36f41e5828bb19"
  },
  {
    "url": "tool/all/index.html",
    "revision": "43fe14170dd921b10741ad95a3be26a1"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "f194c1886ddaa18ddacb944e91f6f165"
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
