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
    "revision": "ec3605759bc90f1abe5842472c4f37ac"
  },
  {
    "url": "assets/css/0.styles.5b587c12.css",
    "revision": "e85061e0b489d395e1bf741f45a2b8ef"
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
    "url": "assets/js/10.2ef50a10.js",
    "revision": "2889ba6ab61452347e430a511e6688a9"
  },
  {
    "url": "assets/js/11.6f4293cb.js",
    "revision": "5951c382926a0c81db54f5af3191c5d8"
  },
  {
    "url": "assets/js/12.c46ff250.js",
    "revision": "a98a4f87ec65959da0991a3b2ac4cb92"
  },
  {
    "url": "assets/js/13.30dd534b.js",
    "revision": "f0272f81cce2c9873f0a385e98c2b993"
  },
  {
    "url": "assets/js/14.8697dec8.js",
    "revision": "dddf7d4818c504b2439126b4a1f44ba3"
  },
  {
    "url": "assets/js/15.e6052c5f.js",
    "revision": "277da0dafa9f7a8e6393aed35970e418"
  },
  {
    "url": "assets/js/16.10955ca1.js",
    "revision": "82c318c89ec8b5e905b3a4794e305056"
  },
  {
    "url": "assets/js/17.b9a5fef9.js",
    "revision": "5550dd4578dd2a968309ad614fa96d0f"
  },
  {
    "url": "assets/js/18.50f3a041.js",
    "revision": "166b0cbe634c3f292109bc15ed89cd8a"
  },
  {
    "url": "assets/js/19.983c30f8.js",
    "revision": "e9fec47a45c18f8a439b65005c4c059d"
  },
  {
    "url": "assets/js/2.a11602b5.js",
    "revision": "b4299db3e7da314b5def8711d0970499"
  },
  {
    "url": "assets/js/20.06ebbe7e.js",
    "revision": "353e24e445d6652bff7349b94902c1e3"
  },
  {
    "url": "assets/js/21.851844e1.js",
    "revision": "21cb935bcc8bf8b557a86e69c736b7ba"
  },
  {
    "url": "assets/js/22.1524f739.js",
    "revision": "c60b78ebe5a6d5cf6fd63f77c5f9bf66"
  },
  {
    "url": "assets/js/23.cab93898.js",
    "revision": "3ee0486d9da01344cfbb639c01e0aee7"
  },
  {
    "url": "assets/js/24.aabd23f9.js",
    "revision": "2b07b7a2c490d851cc008667c8160551"
  },
  {
    "url": "assets/js/25.579574e9.js",
    "revision": "ccc8e9cc8f19f560ac88f04585165430"
  },
  {
    "url": "assets/js/26.10103919.js",
    "revision": "280c9d7e60e69cb4378f1389563d9d26"
  },
  {
    "url": "assets/js/27.53d080ba.js",
    "revision": "58848e32708336324817bf5867daf0b1"
  },
  {
    "url": "assets/js/28.69241bfc.js",
    "revision": "356851f6dc2a9ac25947747722a5cb7f"
  },
  {
    "url": "assets/js/29.c515aaaf.js",
    "revision": "8da118a56cff3b066e710849f3eeb91a"
  },
  {
    "url": "assets/js/3.0505e2e7.js",
    "revision": "3971faff9ed93c4a8776cab246119bb1"
  },
  {
    "url": "assets/js/30.025da7ab.js",
    "revision": "3b94be625745166b45f9bd1d3fdec2f1"
  },
  {
    "url": "assets/js/31.00edc9e1.js",
    "revision": "5eeac2e552abd30d0ef4fa89f2461030"
  },
  {
    "url": "assets/js/32.8475ee8c.js",
    "revision": "336cb69d8c63ce0197eccb95cf1fd61c"
  },
  {
    "url": "assets/js/33.0fd8a42d.js",
    "revision": "1402b553b1ee36da40604c08f7c7289b"
  },
  {
    "url": "assets/js/34.a29de5a9.js",
    "revision": "8e7b6acdefb64dd7be8f87a4d6105f2b"
  },
  {
    "url": "assets/js/35.0b1ae9d7.js",
    "revision": "3d838b29062fa13000f1dced4fc685c4"
  },
  {
    "url": "assets/js/36.d85ca285.js",
    "revision": "80d4caf3ea646a8a5b2c82087ed5fad9"
  },
  {
    "url": "assets/js/4.494d43c6.js",
    "revision": "46dd92e8e33b525ba6301f6486ea0b04"
  },
  {
    "url": "assets/js/5.be353146.js",
    "revision": "f282126fe1f50c1dcc0545ac4bf565b4"
  },
  {
    "url": "assets/js/6.5310d543.js",
    "revision": "52732c83e33e9f23dbcadd87a554872b"
  },
  {
    "url": "assets/js/7.d0b7ce86.js",
    "revision": "dd75006e57bc4922d10247030062059f"
  },
  {
    "url": "assets/js/8.5db7c189.js",
    "revision": "d88e47e654d6ec0b65734e04632eab0a"
  },
  {
    "url": "assets/js/9.acfd5637.js",
    "revision": "aebb73614f1500372be9f5c1b8277cfb"
  },
  {
    "url": "assets/js/app.a22f6237.js",
    "revision": "93d1d3a2f1c63def50386df31e797284"
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
    "revision": "492a810554b1a30f690196aa1afe909d"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "9f6da1c634789ee24a0873bccf897dd1"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "70738b75561d75843a4c97fc7cb5cd2f"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "bec1155e55536a6f26fed21d7346d4e7"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "68f02426ec93e8770f1bc668b336968e"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "27be6685e7b8b0f13f6d04f345cdad2c"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "80c7e0cc19985c309e1edf64de5fec8d"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "22d5a0f201694e5e0a3ebba58c10c7f8"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "f80841e29fe6f205a239dbe44288890f"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "e3dab232c17e994033ff6131e69ff81a"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "1feded50673ec8a328ee04beaff1e120"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "2924c3e0344f783533d1e733fbdd81e6"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "bb3e0c7e6388b3e234422997150baed2"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "1b306196eea6d8259cc453db6ff0531d"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "ff0847d37c8840c4d04dea58f5ccf044"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "9fcf5ecf2b025a4f5f1ffd4344a07463"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "bc9d08c2295368849752199d4c678513"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "31c3f787ad8917c2a0aaff3e2cfaf580"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "acc4cbcdf01a54134d9e90f29dd46098"
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
    "revision": "8da173b387c534b41abc8ff3f775cc28"
  },
  {
    "url": "join/index.html",
    "revision": "0b8420efd3b6faa73fb201aaefd708b1"
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
    "revision": "4cf3d2cd3edc4b4b50b7ab50994cfce9"
  },
  {
    "url": "search/index.html",
    "revision": "6c730a2c355c581c62ac2a4a36b62db6"
  },
  {
    "url": "tool/all/index.html",
    "revision": "01561b7fe4532a432c940273edaa2565"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "a77b507598eecd07e3519d597b23ed48"
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
