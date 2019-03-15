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
    "revision": "0028270edf3672d44ed5b2fd8709c342"
  },
  {
    "url": "assets/css/0.styles.0bfa3b4a.css",
    "revision": "5655c893b7f593868e26838df6eb97cd"
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
    "url": "assets/js/10.2d0be5da.js",
    "revision": "3a0580f127ff369608fed763d6f1e068"
  },
  {
    "url": "assets/js/11.897b2cdf.js",
    "revision": "8b9720e2a27778852b281301e5b17f86"
  },
  {
    "url": "assets/js/12.ce3dbe8f.js",
    "revision": "3547f9f97763f6c0255f88101f5d7b6a"
  },
  {
    "url": "assets/js/13.3b4b018c.js",
    "revision": "2af811c6ab587cec1b2b6bc57ecf9891"
  },
  {
    "url": "assets/js/14.fd78b306.js",
    "revision": "856ea5dadc546fd549defc8cbdd6167a"
  },
  {
    "url": "assets/js/15.1acc44d0.js",
    "revision": "d1846c3ec8e4a6f0d1ed38c4559b1569"
  },
  {
    "url": "assets/js/16.453b356c.js",
    "revision": "3589cb5103ac58c54b519bd6a0eaccc5"
  },
  {
    "url": "assets/js/17.17a7d1dd.js",
    "revision": "75775f64eb6765435d36705dc562710e"
  },
  {
    "url": "assets/js/18.19fc8c22.js",
    "revision": "e3d1560eab1e9b30c4feb19779ddbaa2"
  },
  {
    "url": "assets/js/19.6c65c931.js",
    "revision": "7455225bf893aa65908780c695a0b103"
  },
  {
    "url": "assets/js/2.cbf7da87.js",
    "revision": "4726e1bf3b1efdcf3956cbc218829caf"
  },
  {
    "url": "assets/js/20.3bdff1d9.js",
    "revision": "813b7966a604a1f317e4c9d61ca7f9ab"
  },
  {
    "url": "assets/js/21.2b75569c.js",
    "revision": "04b97d3f4d38ef7ff6b2bafc710b8ad1"
  },
  {
    "url": "assets/js/22.889d555f.js",
    "revision": "2a43c9504ca8e10bdd568e33bf34c830"
  },
  {
    "url": "assets/js/23.5154d0ab.js",
    "revision": "c7ae2108c60c6d357500a1db0af6a9b4"
  },
  {
    "url": "assets/js/24.8e286731.js",
    "revision": "22697800f3e4643a36a95b78b3105a1c"
  },
  {
    "url": "assets/js/25.2bcdbd0d.js",
    "revision": "ec29b02ce27662790c99ef0189c2e1c9"
  },
  {
    "url": "assets/js/26.c837d5d0.js",
    "revision": "81d5b01691321086b67f372b133f75b8"
  },
  {
    "url": "assets/js/27.b48dbd51.js",
    "revision": "cc1706a6b7a2e30cf5215237bfb1f7d3"
  },
  {
    "url": "assets/js/28.a726fb04.js",
    "revision": "0081abfe3711beba2e928d2e24f61687"
  },
  {
    "url": "assets/js/29.99d5a0e5.js",
    "revision": "89f3c35e4b148252ff89073f6f03ffc6"
  },
  {
    "url": "assets/js/3.d1440797.js",
    "revision": "8938588772d3e1098f34e4343acb897e"
  },
  {
    "url": "assets/js/30.3e5a4f1b.js",
    "revision": "cbfd6d48c1a2bb66add77643bf822fe4"
  },
  {
    "url": "assets/js/31.2e225590.js",
    "revision": "a37b6a71c1d25fe814b14b1546d56e9d"
  },
  {
    "url": "assets/js/32.85fb4862.js",
    "revision": "cf3d0080c550c751010999a41c02ee79"
  },
  {
    "url": "assets/js/33.5a76ff3e.js",
    "revision": "50914fe04c6d9f18e9853db0326aff4b"
  },
  {
    "url": "assets/js/34.9b135265.js",
    "revision": "a85a164a8d4c8bc916d6a25b4fc288fc"
  },
  {
    "url": "assets/js/35.81a48083.js",
    "revision": "353afb6e45124ca8539903ffa55d0d97"
  },
  {
    "url": "assets/js/36.a046c03b.js",
    "revision": "205b35b0fadb38e2a5a5db7c7acdacb7"
  },
  {
    "url": "assets/js/4.b2d139ac.js",
    "revision": "78ed6956c511422b69621971b837f409"
  },
  {
    "url": "assets/js/5.d298672c.js",
    "revision": "ccae9acadca4c7540356ff27e37cd54e"
  },
  {
    "url": "assets/js/6.3f7bd11e.js",
    "revision": "634198e504f274a2d25018e635e0b9e0"
  },
  {
    "url": "assets/js/7.2b5c66a0.js",
    "revision": "fbad54063bde406185b8ce39aff515f1"
  },
  {
    "url": "assets/js/8.7caefc07.js",
    "revision": "5194d9fd899a1283a74bc1d2cc4687d4"
  },
  {
    "url": "assets/js/9.9f2ff5cb.js",
    "revision": "3b94b21e62d7f4d3c42abbb692ebdac4"
  },
  {
    "url": "assets/js/app.8956ef1a.js",
    "revision": "8f148dd476c8893063a141da30c4326d"
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
    "revision": "63ea4ce8b6c2f8f4dfd4ab9324dffae5"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "2c7b18d3e66b17e5a469a59b3b02f3d9"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "3576c30079358c08358f9d42c64bb861"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "ab20a6dd0e8cb149d324c4e473eab9fa"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "dd2a6be30dc9ca610c731dce445db5b8"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "e7a087fe73df9d96bc58417c28b9969e"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "3013eabdeb2394954d77d4fea6aaa7cb"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "60d868df5c31a05a698688104d7f7c1d"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "4a98debcea3395703e1b494902a53be7"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "aa4c2fe7fcf0bb9904efe269ab600945"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "255cceec592a535423dfa80650f460a1"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "86b51373795729c84efe8e546426b8d0"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "a9c4222728f0499b59cdf840cef52a0c"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "ebf5b290297de4e8f6b0da4b3acb8ba1"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "f3233d6822ac224f26e8d19f503f441c"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "c5c7100a0e2138d39c759be4fd159d18"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "7afe3c0af93346f66eab89bba7cf139e"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "9a7199dad2e4602aa273b3f70e44d7e0"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "7550ea3357080d35237645eba5fbdfd0"
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
    "revision": "a3a01d0c401fc1c3c1fc45db1a6e2890"
  },
  {
    "url": "join/index.html",
    "revision": "5921bb646b6395d9d5bcaf03942eca93"
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
    "revision": "781ab6755f65fa2706725c8f947ee8f0"
  },
  {
    "url": "search/index.html",
    "revision": "daa1f7f4cc0b31da993647126357261a"
  },
  {
    "url": "tool/all/index.html",
    "revision": "6d5efac898347a92ade0d6401d091524"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "87e16a974cefe726021429e085deca82"
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
