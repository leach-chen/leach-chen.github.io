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
    "revision": "0db692ecf170b94c44e44991821503e7"
  },
  {
    "url": "assets/css/0.styles.5d5c63a6.css",
    "revision": "8426e9e0c76a6abea97a21f5d2ea17ed"
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
    "url": "assets/js/11.0b94882e.js",
    "revision": "ea3f023a56f43e5322652589ab6946f2"
  },
  {
    "url": "assets/js/12.2f79bbc5.js",
    "revision": "39d614061ff98afb524bc8aed96db903"
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
    "url": "assets/js/17.416fea83.js",
    "revision": "15b5467c5bf94b4b94649816a35e2700"
  },
  {
    "url": "assets/js/18.50f3a041.js",
    "revision": "166b0cbe634c3f292109bc15ed89cd8a"
  },
  {
    "url": "assets/js/19.4d2d4d1a.js",
    "revision": "d8f18226f25322ea048356f27178a9e7"
  },
  {
    "url": "assets/js/2.8d9dc8c0.js",
    "revision": "780089a2773246e5cb4e2c7f5126199f"
  },
  {
    "url": "assets/js/20.1207371c.js",
    "revision": "e62860d80bed4f6c8af933a08c4447eb"
  },
  {
    "url": "assets/js/21.0dca1a23.js",
    "revision": "597f8c5fc5f745f225d3c201ec93b7c6"
  },
  {
    "url": "assets/js/22.6b72f477.js",
    "revision": "4d7a02ae78696862fd344adc1e8309b8"
  },
  {
    "url": "assets/js/23.6d115f42.js",
    "revision": "2fad7fb303b2adaa6c081ce1f103e813"
  },
  {
    "url": "assets/js/24.d529de81.js",
    "revision": "f50c292a2ee1f59c90f197ffe37954d3"
  },
  {
    "url": "assets/js/25.a2274138.js",
    "revision": "a2c8bc84c3e7e40bd9d64159aba442ff"
  },
  {
    "url": "assets/js/26.10103919.js",
    "revision": "280c9d7e60e69cb4378f1389563d9d26"
  },
  {
    "url": "assets/js/27.0366bb38.js",
    "revision": "25b49dfe34a1267533a9945363e811aa"
  },
  {
    "url": "assets/js/28.416721d9.js",
    "revision": "03db12a3cdd09ebd6abfcafd9a3649ea"
  },
  {
    "url": "assets/js/29.c515aaaf.js",
    "revision": "8da118a56cff3b066e710849f3eeb91a"
  },
  {
    "url": "assets/js/3.f0bdef4e.js",
    "revision": "a952385666f19fcd97ba334da0d82adf"
  },
  {
    "url": "assets/js/30.617d1f07.js",
    "revision": "52035b2c58c9df080e739ce955b8b27d"
  },
  {
    "url": "assets/js/31.e3ebdad2.js",
    "revision": "e217a1631ba187c171cc4155d69a0a81"
  },
  {
    "url": "assets/js/32.7d913e6c.js",
    "revision": "d6a9a5e7037e41316f5ad67a7bd842de"
  },
  {
    "url": "assets/js/33.2332be54.js",
    "revision": "23ee446a958f4ab93f8bd97788703392"
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
    "url": "assets/js/4.3ae734bd.js",
    "revision": "ce1aad8b54e596c00d7268aa33545408"
  },
  {
    "url": "assets/js/5.31fb2436.js",
    "revision": "c77d13cf2f07d5043c9c1a8cb291fec0"
  },
  {
    "url": "assets/js/6.9abf73bc.js",
    "revision": "8f48a2650d84b910166e46457c64b1ca"
  },
  {
    "url": "assets/js/7.40aabaf6.js",
    "revision": "96e5fdd63063825c23ca68b33d9c6123"
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
    "url": "assets/js/app.f44ba5e9.js",
    "revision": "5f4c4538d78d09cf283f4b52a0391d74"
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
    "revision": "f374969d2a7a375b1974b9690b64fac0"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "b9afd058025e247623bed9a5b9ce1d2f"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "15036f1173045650577d558fb034764d"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "14dab80ece563f0a0bdfe0190308db1c"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "aef634c29d414826a19525b326e7c372"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "a97838f0e7c8db3f6a73a049fff3d8a2"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "fe2f48f84140f714f6cffd484458c1d3"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "de5fbbf6e502ba6f934cce6c9861be53"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "5ffa7d18fc41f800ea0dbc1241d9547c"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "588c8df051592a62ee18f8d6c4e407bf"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "25cc4c0847b73283640917e9fad015bd"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "5e5bfc47989f27dfa53eb6606b6683ec"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "b8b39908c21f65c0ae64ed4b01ba8ea1"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "8f50e199b637a13516d98eebe35db73f"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "607d395d189a93428050bd283a4b5e95"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "ebfd03513a64eb16cf93a523e9870baf"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "f4ad3171d48f0d38538a23806fbff0f2"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "994fcbabfd29fa83326f2ae6d41f9edd"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "5a3148675530762d38507af0d8e60277"
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
    "revision": "1f84f898d039e9c60d606a48f83f483f"
  },
  {
    "url": "join/index.html",
    "revision": "659ddec16d02d91a178c679a1e3ad7dc"
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
    "revision": "b0677d0030f4ced0ac2c9a9132fa1d79"
  },
  {
    "url": "search/index.html",
    "revision": "55fe43c7f1abde2d2262534161ee2836"
  },
  {
    "url": "tool/all/index.html",
    "revision": "d6a0072afc2afddabf2ac10deb7cbcaa"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "aec081ba32080031ea8b69b239902a45"
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
