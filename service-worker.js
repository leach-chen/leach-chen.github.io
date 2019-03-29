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
    "revision": "969de7b7d7e636dd6f4f77b589617482"
  },
  {
    "url": "assets/css/0.styles.d555af10.css",
    "revision": "805cd71bb84d40430ae2ef78af579b99"
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
    "url": "assets/js/11.63e54942.js",
    "revision": "5375458afb3e2732a02f2dddd8c2c887"
  },
  {
    "url": "assets/js/12.47c580e0.js",
    "revision": "681ddaa608a9efc43057ba31f0741c34"
  },
  {
    "url": "assets/js/13.ddf2ffe8.js",
    "revision": "87aeab08e45229d61d28a1e2f479771c"
  },
  {
    "url": "assets/js/14.258098a6.js",
    "revision": "3aca78be36194d0ebc6d7d0c36a58a06"
  },
  {
    "url": "assets/js/15.35e10c07.js",
    "revision": "f948dace1b1c0ed98c2e737ba39ab4c5"
  },
  {
    "url": "assets/js/16.b3b6528e.js",
    "revision": "6d5f1f313ce5b2534d9888077303f014"
  },
  {
    "url": "assets/js/17.4e91a4c5.js",
    "revision": "d8d19efb432d2dc5ed263d88ce044b7d"
  },
  {
    "url": "assets/js/18.c6cf175e.js",
    "revision": "586d2c7aca1198a9b3665759b7590556"
  },
  {
    "url": "assets/js/19.5c24b583.js",
    "revision": "beef0125b2338b74009e345e16c86457"
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
    "url": "assets/js/21.771ec18c.js",
    "revision": "f55fc91426e1cdf9b80b5963d1c05285"
  },
  {
    "url": "assets/js/22.861edc9e.js",
    "revision": "81b4ef7083955c6fb66090cef9ad4928"
  },
  {
    "url": "assets/js/23.14cf887a.js",
    "revision": "a30f3d383e3f88d672ad1ea119874774"
  },
  {
    "url": "assets/js/24.d863c7d2.js",
    "revision": "61e3604a9db075f09d6badf1c7a934bf"
  },
  {
    "url": "assets/js/25.d7fa6bfc.js",
    "revision": "fe03679c44f03d77f7f67bca05c0aa91"
  },
  {
    "url": "assets/js/26.3cd8bb3b.js",
    "revision": "368c59a1c0c6cd192e206dde6d53b397"
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
    "url": "assets/js/33.f3dd8a0c.js",
    "revision": "63b5cdb153096c58c9a58ae8fd23ccb5"
  },
  {
    "url": "assets/js/34.86f00574.js",
    "revision": "a7d17343c65485c9a7b0650225922646"
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
    "url": "assets/js/39.f347e63e.js",
    "revision": "9f36398fa9ec0706a2e075da85a56322"
  },
  {
    "url": "assets/js/4.038fb474.js",
    "revision": "a054ab2e88df8bcf91e4fe819346fd71"
  },
  {
    "url": "assets/js/40.c8e1138b.js",
    "revision": "6be3c604b2e8e4f01eb3a6dbf8f111c5"
  },
  {
    "url": "assets/js/41.6706fc5d.js",
    "revision": "127b59a5f6403e4bef8befaaeda23377"
  },
  {
    "url": "assets/js/42.0fb8f979.js",
    "revision": "7bc804a991fba262a474c207e99c75cf"
  },
  {
    "url": "assets/js/43.b507f776.js",
    "revision": "187c071de308f4e2aee59840ac00f5c8"
  },
  {
    "url": "assets/js/44.54540149.js",
    "revision": "bb9672d05aac844d608f5b59ad4d7abe"
  },
  {
    "url": "assets/js/45.ad3fe887.js",
    "revision": "885fa6cee0b867cb775ff625c9626339"
  },
  {
    "url": "assets/js/5.13373078.js",
    "revision": "61fa1f94033fa0ba6f8d17de74c6d8e2"
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
    "url": "assets/js/app.a5835fd3.js",
    "revision": "7cafc593560d83cdc11b5415a1e2c161"
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
    "revision": "205216345e36ee10b73942707ebda4d5"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "772ab0902523ebd91a2d0994b4f7c65a"
  },
  {
    "url": "game/risk/index.html",
    "revision": "035f43ea0a220dc355daea20c44699e5"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "1813b32cc9ddb5b6f2c0d97a6e0fa7a9"
  },
  {
    "url": "game/smart/index.html",
    "revision": "7e4dba8923e48634f05ad9dbbf81af02"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "e61f3443d33fab9e39ca1c7fdd345d1e"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "d1ee21c7b8d81e656421c44dfad465e9"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "52ff457844047a0623d8d70973137dc2"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "f1cd01f6ec299748d009003dd4da241d"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "7efafd00cf3768e646823accffbd3718"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "3183f3e1ff0e0d0c9468652ba2b5a020"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "a198d9acfe75d0c518b033f79db70f7f"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "155bd94fa9792d3c54b0c8fa62c8f10c"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "bb9ffcee791c0f8bf1789461ec6bbbe1"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "29cbe3b458597eab174214b5545d32f9"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "b373b909b7f5a5c729a46a2b204c117b"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "48584b9b5b6e0f74a78d987cfad6f23b"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "0e753724686fe7b7abbac0bee8df68da"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "ccc9c1298f16cc266857f1862e28745a"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "77161d9e64fda8b32b310011723adfb0"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "5f3ce4cb46c40b1e33c5c2ca001c717c"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "1cd5c1a5c02fdee817ee0934363d25f9"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "62f63cb73996ebee2c75bb962d496998"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "ab5c1aca9f74940d580d3dd32d83d668"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "c5eb2a3a86e3354acd26323cb49fb830"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "d939accd31f021eff30fcaddeb6fcbe5"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "85888fb1d2308de1bc5a8af12b06795c"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "5a98229dadabed51b04680e5e3d9a21f"
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
    "revision": "5df9ecf96217dfdcc26857211e03db05"
  },
  {
    "url": "join/index.html",
    "revision": "7039ab8f5b8f34b46df8940474a66b27"
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
    "revision": "6524b0def1998b3de60920f8e1a62a42"
  },
  {
    "url": "search/index.html",
    "revision": "9ed8b71695e0fcf1005f60864cf7c79b"
  },
  {
    "url": "tool/all/index.html",
    "revision": "acb8b0e4de19a79f5bc993a6ffa1def5"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "28e5c74f3a67a556fe0507794565d24c"
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
