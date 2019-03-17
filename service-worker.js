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
    "revision": "be42580c8415aa3051b2966f8775c6a2"
  },
  {
    "url": "assets/css/0.styles.d94ac909.css",
    "revision": "0057ae0b1d350bf101b42846b9eb909d"
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
    "url": "assets/js/10.e9057c9c.js",
    "revision": "cc0a154039823d169b3234a67e21f581"
  },
  {
    "url": "assets/js/11.c56a1251.js",
    "revision": "4cb847cbe9167400872be135c5bab55c"
  },
  {
    "url": "assets/js/12.166520ec.js",
    "revision": "93e60676f4ec20938e352dd7a1361e8f"
  },
  {
    "url": "assets/js/13.b262f41b.js",
    "revision": "403a4cd6ae3b285f43f580eda8c03dc8"
  },
  {
    "url": "assets/js/14.eddf2cd3.js",
    "revision": "4b9a469d86e24ee023e1ddcf4a3e6192"
  },
  {
    "url": "assets/js/15.cbcbb81e.js",
    "revision": "fa0920b81784385eae9ce8c6baab4443"
  },
  {
    "url": "assets/js/16.368fa4a5.js",
    "revision": "a08485500247a678eb70dc0bac90169a"
  },
  {
    "url": "assets/js/17.c18e9060.js",
    "revision": "2495ae37ba3b834e6f9226c61ca065df"
  },
  {
    "url": "assets/js/18.1942fa18.js",
    "revision": "f7507611164e2c411e14203fa814a92f"
  },
  {
    "url": "assets/js/19.9e8cfa16.js",
    "revision": "f13bf491d28f3ffbe95191f3f596a6f2"
  },
  {
    "url": "assets/js/2.d2c89a87.js",
    "revision": "236bfed0c329c9a5a982795cef27afa4"
  },
  {
    "url": "assets/js/20.2c094bf5.js",
    "revision": "4b70c5f169373ad22df338ec0390ee82"
  },
  {
    "url": "assets/js/21.7125e00f.js",
    "revision": "58b5a6da71760c460bc9cb4b28ce5d8b"
  },
  {
    "url": "assets/js/22.b3f66bf8.js",
    "revision": "99049c19a27b01de0d0d1b204d75352d"
  },
  {
    "url": "assets/js/23.40758bf5.js",
    "revision": "3838f889e18820f772565a1fa1a005fb"
  },
  {
    "url": "assets/js/24.b3f3b2b4.js",
    "revision": "3bfb678551684c50f1abcfd9eafc762d"
  },
  {
    "url": "assets/js/25.1633928b.js",
    "revision": "05e111c36062721f3f6f45403488dc68"
  },
  {
    "url": "assets/js/26.51cfb0a6.js",
    "revision": "3f3f8faa3a135568a3ec11a0d0c25875"
  },
  {
    "url": "assets/js/27.8e0a816b.js",
    "revision": "48ee9beb3d306b7fa2c5e4d208acddbf"
  },
  {
    "url": "assets/js/28.eda916a7.js",
    "revision": "4ff8f7b03df4c126f3b4578acd4a5501"
  },
  {
    "url": "assets/js/29.c813d42f.js",
    "revision": "926e5c5d665364a32023312e393b921d"
  },
  {
    "url": "assets/js/3.87573312.js",
    "revision": "8532e0046329332b57a4b7ed0d1ecc94"
  },
  {
    "url": "assets/js/30.7c720b3f.js",
    "revision": "7caaf5c1ae6530a6bf2474d09d7dab9b"
  },
  {
    "url": "assets/js/31.d094aefe.js",
    "revision": "04152289c19a158b3815305ea9ca0b3c"
  },
  {
    "url": "assets/js/32.e1ce94db.js",
    "revision": "5231f091b8c7ed3b0a84f4b490f045e2"
  },
  {
    "url": "assets/js/33.4cca255d.js",
    "revision": "0563e997e02e0e0aae00b622a4cf5b1d"
  },
  {
    "url": "assets/js/34.a29de5a9.js",
    "revision": "8e7b6acdefb64dd7be8f87a4d6105f2b"
  },
  {
    "url": "assets/js/35.de6ccd23.js",
    "revision": "b8bd695032d0e5f71188f2529907ba39"
  },
  {
    "url": "assets/js/36.d85ca285.js",
    "revision": "80d4caf3ea646a8a5b2c82087ed5fad9"
  },
  {
    "url": "assets/js/4.4e6b2aba.js",
    "revision": "2daa52e22968c0d4e45de4797d5c783a"
  },
  {
    "url": "assets/js/5.5eed2eaa.js",
    "revision": "3690b44211e494b085aff5fc0f1a09da"
  },
  {
    "url": "assets/js/6.9da6a74c.js",
    "revision": "e3f3c4a0e1677d5d768fd94d08b94fce"
  },
  {
    "url": "assets/js/7.a4d9ae27.js",
    "revision": "aaa813ffa30433fbe02318c1ccf6119b"
  },
  {
    "url": "assets/js/8.ba3f0c76.js",
    "revision": "445ebd0718a8968aa1d41c9b6e3bc9ec"
  },
  {
    "url": "assets/js/9.a3f2da80.js",
    "revision": "3ba7f1ec20f76cfa112cc219c2b1c0bd"
  },
  {
    "url": "assets/js/app.bd33bfbe.js",
    "revision": "5c73b0c1f9f9501806d06d466eaf1c41"
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
    "revision": "eec707b91b49f02004bc3cdbdaf31c79"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "936075c025ea3073e35edbde61bb55c4"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "1875c95df0fad432171d0bfe019ddd60"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "ded5c4e7af0eb53572e9f050798dc113"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "711186d82e55cd245289bb73f0b073e4"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "4fb07a4556ea15e6043e6637c059c2dd"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "5c51201cc09b6a3e54ee1826cbfae3a5"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "edb709a6398f7cdc2e311277bb23743e"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "6a44da791cb69be1f7a63f778e5e4c43"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "340dfd0b37f0228b5f44742842a68cbd"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "838257cd52a61f63e1946d594c4c0b62"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "e5b7f68f9e83495ef8a18e86b783f721"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "af328856766480db20428d19ff4a465f"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "b9cbbe85e681f8650fa7ec142537c126"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "a973ebb8ace8576a8dabdd62195e6405"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "975eeef819838139267bb83acfe16d74"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "6c7bae7d30381dd878e9907779c0e88e"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "8b1eeddc5636da430083748d212c1915"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "08283676db313654037bb97c219e3851"
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
    "revision": "f50bea9cdd19f5ecb9f6af3bd3109be6"
  },
  {
    "url": "join/index.html",
    "revision": "f67b20f2f03ccff0744b485cb8a98040"
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
    "revision": "1c6748787e96fc8738b24675aa988f74"
  },
  {
    "url": "search/index.html",
    "revision": "e0946e5525bd1bb3b0af741990c43b2c"
  },
  {
    "url": "tool/all/index.html",
    "revision": "69a960bd88001caa06a5fe5926127e3c"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "613afbff0703c6e56c77c407cfbc20a9"
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
