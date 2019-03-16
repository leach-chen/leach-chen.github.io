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
    "revision": "da4ce14ac98400898a95e6d8f080939c"
  },
  {
    "url": "assets/css/0.styles.eb75968f.css",
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
    "url": "assets/js/10.9b14e4b1.js",
    "revision": "4df1cbbbc89ec1600dcb8ad792e91c63"
  },
  {
    "url": "assets/js/11.86c8318e.js",
    "revision": "d4c348b489292b6ec9c11aa11a3eb3f6"
  },
  {
    "url": "assets/js/12.d6986e63.js",
    "revision": "3e16b9a7fa48a5cfef5427156d198a0b"
  },
  {
    "url": "assets/js/13.c53d5fa1.js",
    "revision": "eb76d4b3884e13774802953d1069d878"
  },
  {
    "url": "assets/js/14.dc2bb815.js",
    "revision": "9c03cab42f3d2dbbb8e07430d1b166fb"
  },
  {
    "url": "assets/js/15.7fccc480.js",
    "revision": "15b79f0ba8f3b7354e4eab89e2eed926"
  },
  {
    "url": "assets/js/16.03bb3ed9.js",
    "revision": "5eeee6b4d079fc21491ad8862c2a87e3"
  },
  {
    "url": "assets/js/17.c2dd4f32.js",
    "revision": "ad4d7ed6bbeb378bd5aa8f2b79248ddc"
  },
  {
    "url": "assets/js/18.001a696c.js",
    "revision": "1c45768a71c03c3c2fb86917f6719a7a"
  },
  {
    "url": "assets/js/19.96dbbc3a.js",
    "revision": "002e92bc9bd03f6f7b9a9ec5666ce4b2"
  },
  {
    "url": "assets/js/2.8d9dc8c0.js",
    "revision": "780089a2773246e5cb4e2c7f5126199f"
  },
  {
    "url": "assets/js/20.06ebbe7e.js",
    "revision": "353e24e445d6652bff7349b94902c1e3"
  },
  {
    "url": "assets/js/21.804e2cf6.js",
    "revision": "506dc9a37817b7cea2907c4fd08f4548"
  },
  {
    "url": "assets/js/22.7c2eae29.js",
    "revision": "8263950f5909aa4d8944ff4bbf93cb63"
  },
  {
    "url": "assets/js/23.e99715db.js",
    "revision": "2cdc287c8f10c6d60d576bf5581dddf5"
  },
  {
    "url": "assets/js/24.b3f3b2b4.js",
    "revision": "3bfb678551684c50f1abcfd9eafc762d"
  },
  {
    "url": "assets/js/25.211a4f74.js",
    "revision": "7b7ba76f32941277c32ab40f86f5df2b"
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
    "url": "assets/js/28.416721d9.js",
    "revision": "03db12a3cdd09ebd6abfcafd9a3649ea"
  },
  {
    "url": "assets/js/29.2bd2810f.js",
    "revision": "83132c77d62c46517ac0aa73bde8f535"
  },
  {
    "url": "assets/js/3.f0bdef4e.js",
    "revision": "a952385666f19fcd97ba334da0d82adf"
  },
  {
    "url": "assets/js/30.1e2dcef8.js",
    "revision": "f0ca4ec8bb02906ce999852ae6b78338"
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
    "url": "assets/js/6.efba52b8.js",
    "revision": "880ee9af63a18748fe98cc8de372f03c"
  },
  {
    "url": "assets/js/7.1be12342.js",
    "revision": "7c2f58273dac292dbe6d29cbd3df2916"
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
    "url": "assets/js/app.fbeb9788.js",
    "revision": "96dc97ef94c69e0c71ba0a2f8d3a5342"
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
    "revision": "f2edf3c4e1838c47fe8c522777ac3b6e"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "ec2598dee056a1a6fe8869a770c3ce1c"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "57464ae73e0166b84dd2f3e37788f9eb"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "17a7ffb4c3d66b955786ee24fd077793"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "8f85f46006d6aa9681c130593f1246f1"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "0d277bbfeaba3f26623372830539fd45"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "c84d55e5e27898e88c6f10febfc489dd"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "cab8d137332f5ab5cf227b02735ca5dc"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "951c4047b0ff2f2e1a298816987acb11"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "ef153462e23abf13f0b12fe16877f1b6"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "8d7981afd7cdcad988e51ad9f06996d2"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "4c477e3029f6151b12c4c300ccaea272"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "8dcd4c142be57da2a8cd0dfbb53adab7"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "364c6b8e4b134b6b10b4e02547b742a8"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "6bf9d63db1e2e5d4015af3a164dfaaf7"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "0c95b89f46b5705b1d3affe66a260ccb"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "a1eac411915fdf52b666900242b88820"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "cbe237e0dd1ba0c7b25c1b2edb5fb24c"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "f833639fd3d7c092c30dd32feda4d316"
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
    "revision": "8aa683c4807d598db46b21493ec171cf"
  },
  {
    "url": "join/index.html",
    "revision": "1063465236f240285de68461e2159166"
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
    "revision": "1c2e893092431145049c9bcaccc2a4d5"
  },
  {
    "url": "search/index.html",
    "revision": "a6b4f07910fd44ac9aaacf749c50e7bf"
  },
  {
    "url": "tool/all/index.html",
    "revision": "402e191a2ababb25ad269a4ecb035bca"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "d18a0a839b4f8e2de848b88774482efd"
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
