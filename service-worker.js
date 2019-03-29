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
    "revision": "4f28da9a9e5e15b7c02a0c5aa82df99a"
  },
  {
    "url": "assets/css/0.styles.93007fae.css",
    "revision": "22351c12272d95829e0a39a5ffab3c39"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/Algolia_logo_bg-white.8e0e9838.svg",
    "revision": "8e0e9838589ad42418fe5fa23fa7e9f1"
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
    "url": "assets/img/yanhua.d5507315.jpg",
    "revision": "d5507315681a654c8f1f5f00daf87783"
  },
  {
    "url": "assets/js/10.a5e92d6c.js",
    "revision": "86c4d050a8d99f3adb531838b171ec13"
  },
  {
    "url": "assets/js/11.1bb6aad1.js",
    "revision": "fef50857eeabedfa378fa9211e081c58"
  },
  {
    "url": "assets/js/12.802db894.js",
    "revision": "9137e19bfaae1bbddc712ed0928cac67"
  },
  {
    "url": "assets/js/13.c26883f5.js",
    "revision": "6c4dfcb5bc603970fde369bf99eb14fd"
  },
  {
    "url": "assets/js/14.b70b1aae.js",
    "revision": "215bdd706f4ace283b8fa8867c26b697"
  },
  {
    "url": "assets/js/15.57675bde.js",
    "revision": "c5f18c5084a69960293af59a58907c89"
  },
  {
    "url": "assets/js/16.2b7eb2d9.js",
    "revision": "8fc25d295ce5bc14e1f67316dff73ce3"
  },
  {
    "url": "assets/js/17.ea532841.js",
    "revision": "af748f240b83ada85baa25bf31373860"
  },
  {
    "url": "assets/js/18.3b51cb7d.js",
    "revision": "899ad6f974b708fd400435bd9013ef45"
  },
  {
    "url": "assets/js/19.8318e7e1.js",
    "revision": "b1589876e194ec7d0bf501b00083c12b"
  },
  {
    "url": "assets/js/2.27228e9c.js",
    "revision": "bc218038afa663b634738adf9e0607bd"
  },
  {
    "url": "assets/js/20.fcd34b36.js",
    "revision": "50ad5fe61503ce537d7e38c513be4789"
  },
  {
    "url": "assets/js/21.ac801ea3.js",
    "revision": "e5d3d48a008501f35fc3327d3aeabf25"
  },
  {
    "url": "assets/js/22.861edc9e.js",
    "revision": "81b4ef7083955c6fb66090cef9ad4928"
  },
  {
    "url": "assets/js/23.c9565175.js",
    "revision": "aa4dff3ca10bf91bb17658938c9600c9"
  },
  {
    "url": "assets/js/24.12b99193.js",
    "revision": "cada2e3407fb44c290da3859aaccb2ab"
  },
  {
    "url": "assets/js/25.c41c0684.js",
    "revision": "ad1c1933d2b17446ee3b713130419191"
  },
  {
    "url": "assets/js/26.4b8a0d87.js",
    "revision": "6d04a233adf62cba99ed0e6dcd0f71d1"
  },
  {
    "url": "assets/js/27.9a3eb1d1.js",
    "revision": "6070e78823979ca38368a441ffb8cad7"
  },
  {
    "url": "assets/js/28.049e5876.js",
    "revision": "f160deb6f057cc9f244e428dd0b9be4f"
  },
  {
    "url": "assets/js/29.16262a03.js",
    "revision": "fe2a84024a51086e3f19c74a534079b5"
  },
  {
    "url": "assets/js/3.05f21269.js",
    "revision": "236189752fe26e8141c8600615ecf872"
  },
  {
    "url": "assets/js/30.0199b319.js",
    "revision": "fb10608d7169deee359d9c669b0b926e"
  },
  {
    "url": "assets/js/31.1626e951.js",
    "revision": "7f217aab980e041bb8d306e91df97283"
  },
  {
    "url": "assets/js/32.44fd5074.js",
    "revision": "ec04d80b255deb0227a11b38f9130800"
  },
  {
    "url": "assets/js/33.a61ce228.js",
    "revision": "484f301809321c042fc5d1c5840111f2"
  },
  {
    "url": "assets/js/34.60dc807f.js",
    "revision": "7f8e915e4ffdea03ddd739884abe87a4"
  },
  {
    "url": "assets/js/35.1cc92347.js",
    "revision": "d3442955db5fad931a7a2b113a8baea1"
  },
  {
    "url": "assets/js/36.0032af87.js",
    "revision": "6cad6606c9b24be9c9d61a2d5f4b174c"
  },
  {
    "url": "assets/js/37.2e59c699.js",
    "revision": "d86f4fb5ae0b05a226424010f7672f2f"
  },
  {
    "url": "assets/js/38.bc20d6df.js",
    "revision": "e5d2d0ff321c01a692dcec19594bc12b"
  },
  {
    "url": "assets/js/39.03f0693e.js",
    "revision": "d3fd26ff8df963febbfcfcc61bfd013f"
  },
  {
    "url": "assets/js/4.038fb474.js",
    "revision": "a054ab2e88df8bcf91e4fe819346fd71"
  },
  {
    "url": "assets/js/40.d0c171a1.js",
    "revision": "4ca3d7a68b5bd2dfe4b888e504d907ec"
  },
  {
    "url": "assets/js/41.6706fc5d.js",
    "revision": "127b59a5f6403e4bef8befaaeda23377"
  },
  {
    "url": "assets/js/42.8fbe3aed.js",
    "revision": "cf6e9e308dcd753fe4170bdf75cadea5"
  },
  {
    "url": "assets/js/43.b507f776.js",
    "revision": "187c071de308f4e2aee59840ac00f5c8"
  },
  {
    "url": "assets/js/44.017d22c5.js",
    "revision": "343559b68c57fa0a9a7cdf7ea2179d5e"
  },
  {
    "url": "assets/js/45.ad3fe887.js",
    "revision": "885fa6cee0b867cb775ff625c9626339"
  },
  {
    "url": "assets/js/5.0f8f3891.js",
    "revision": "e1d0a2f5f0902f8585c726e41e8bd60b"
  },
  {
    "url": "assets/js/6.13519067.js",
    "revision": "07732367464f7f7fa95a5fec32edf6ed"
  },
  {
    "url": "assets/js/7.f6ae611d.js",
    "revision": "c0d70206d48e75c9002dd9f4f402508a"
  },
  {
    "url": "assets/js/8.9ceed4fc.js",
    "revision": "2009499f19457e30f2a3cc70c6002790"
  },
  {
    "url": "assets/js/9.e2142760.js",
    "revision": "1475d973e75afdbe26498aaa900688b5"
  },
  {
    "url": "assets/js/app.325e1fa3.js",
    "revision": "15da0b892fdcbda0af435bd9473bc1a2"
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
    "revision": "b740cdda4e26ee4cb3d74d95033d61b4"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "cf1f235a4aedfc130bcf311c9d38494e"
  },
  {
    "url": "game/risk/index.html",
    "revision": "94cb16e3db8147e72c63ac481d521c5c"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "7aaa5462d794de67aae1f31437e1eda7"
  },
  {
    "url": "game/smart/index.html",
    "revision": "dec075ebdf418f8dd13559a3c522d812"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "de85fda0dbd442758ec6942c47890973"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "f0cffd1c10ea068ed299fa9e84aebc3c"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "cfe6af435969673da45b4579a33517fb"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "bf43d9d8ee9a17bc9cb884f466237f29"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "996ad1fba03f1036dfcc638c5fd4647d"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "a094cb83bd0120047c389668e738044f"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "55532cfbb0abc8cbc8c0f8bd3a9c297d"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "78ebe535a7e757c03623808944d61ee6"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "596aeb87d0a08d1017e82fa318e9e8f5"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "ae3908d998acf3b151ed7d73b197232c"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "0a92c2ace98097821a4c5b4d251ff7e1"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "8b0d03a6a4e5f753d17c96071011d65f"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "c6536e0ecbb959490bb12f7219817d6a"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "b9b7fe5911c2f373d88fb9501566cf00"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "ed93fb62cbfec6dc69c4d88439f9328b"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "83e430103783754f2a3b1eb24c32b3b8"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "14385e863b519dad475c66764287be67"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "6396f2b95e5eda0bb01194fc53cb0b78"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "597ce8940035cd9099bb2c4a15f9bbd9"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "db4c17ff5377d979cc476ec5bfaf774e"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "c60539ffb106943bd61fc430d3158349"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "9ee75c7e3d69293abfef89a892af76b5"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "4e4aa4c276bdd80f0af2a219fb0ed48d"
  },
  {
    "url": "img/Algolia_logo_bg-white.svg",
    "revision": "8e0e9838589ad42418fe5fa23fa7e9f1"
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
    "url": "img/yanhua.jpg",
    "revision": "d5507315681a654c8f1f5f00daf87783"
  },
  {
    "url": "index.html",
    "revision": "93f8ffcc75f4bf92e7f94a90e6cdbe50"
  },
  {
    "url": "join/index.html",
    "revision": "79102e15bcc28c858ce4e8ef16529ba0"
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
    "revision": "a9ebe346fe81664b5e218b3336162013"
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
    "revision": "40fd7e9234606a341adcbb1ce0a15d51"
  },
  {
    "url": "js/yanhua.js",
    "revision": "fdd80010fb22905b481693978455de20"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "84356faef97e1573bd6bc53fab3e2cb5"
  },
  {
    "url": "search/index.html",
    "revision": "498e447c080ff7833992fa8edc8d6da7"
  },
  {
    "url": "tool/all/index.html",
    "revision": "4be32c1e15dfcdd334f2523258fd4e28"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "06d89c26167f2f34b3146bd199cab393"
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


