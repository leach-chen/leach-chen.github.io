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
    "revision": "20924bd66808d3e204bf57cebb72c583"
  },
  {
    "url": "assets/css/0.styles.4980f21d.css",
    "revision": "4f769c83ac2d8ac3f2af6d55582e8ff4"
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
    "url": "assets/img/yanhua.d5507315.jpg",
    "revision": "d5507315681a654c8f1f5f00daf87783"
  },
  {
    "url": "assets/js/10.a5e92d6c.js",
    "revision": "86c4d050a8d99f3adb531838b171ec13"
  },
  {
    "url": "assets/js/11.81a1e186.js",
    "revision": "b0ce150dd68b89135aa8a57300fad9ff"
  },
  {
    "url": "assets/js/12.043c41a8.js",
    "revision": "398e39bba7b2b1e0ed1d6986720e6595"
  },
  {
    "url": "assets/js/13.2e4ee7fa.js",
    "revision": "cc788715b7b9dca1a65df272fd249ce8"
  },
  {
    "url": "assets/js/14.c4b31df5.js",
    "revision": "04925581b0e8d91d6593fe7cd04b5d80"
  },
  {
    "url": "assets/js/15.3c1c4aff.js",
    "revision": "c06787abcaba8f670842b573244f8ecc"
  },
  {
    "url": "assets/js/16.3d074d8c.js",
    "revision": "7ad54157d74e76b1eeaa3d04e72dc055"
  },
  {
    "url": "assets/js/17.8fa1f7c8.js",
    "revision": "f40a96419eb0f307088f5e6f618088f4"
  },
  {
    "url": "assets/js/18.622d6945.js",
    "revision": "7f8765ccf512540f9979b1f70dcfdfa3"
  },
  {
    "url": "assets/js/19.d085ef82.js",
    "revision": "a3b94c2c08ed2337ae96c58ff1fe85b9"
  },
  {
    "url": "assets/js/2.e07642db.js",
    "revision": "7781c363ae7663834f7ab80ed538a3ea"
  },
  {
    "url": "assets/js/20.b87f4118.js",
    "revision": "4a96c5407d398690257c8730895d444a"
  },
  {
    "url": "assets/js/21.8ca0e095.js",
    "revision": "57b7d19aa2e096ed5c7472f101df339c"
  },
  {
    "url": "assets/js/22.65f1713c.js",
    "revision": "197eac2b251a0b02047e67c9594c90d6"
  },
  {
    "url": "assets/js/23.3eb4ac0d.js",
    "revision": "142740ff1e9a597cfeeec5d870194efa"
  },
  {
    "url": "assets/js/24.8fa65fa0.js",
    "revision": "0c71843fcf2b123daf64592a7a117455"
  },
  {
    "url": "assets/js/25.26622c7e.js",
    "revision": "596f2dee06f9819a3d5f761abdeb409a"
  },
  {
    "url": "assets/js/26.67981cb2.js",
    "revision": "a36738db570eb9146dc2f6b703b96bc3"
  },
  {
    "url": "assets/js/27.15dbf77b.js",
    "revision": "3798099a961e413ee87785be8e2cdbbe"
  },
  {
    "url": "assets/js/28.978e902c.js",
    "revision": "96f131006176fb13b9af6dffa6ae18fe"
  },
  {
    "url": "assets/js/29.da108da6.js",
    "revision": "c278fdc08e79e080a9d9e2ba095a7aea"
  },
  {
    "url": "assets/js/3.c0e9081b.js",
    "revision": "59d6c85d60c059ad797ba34c9a19124d"
  },
  {
    "url": "assets/js/30.ece19cae.js",
    "revision": "ae93521d5f459bf95a317594af7f9f8c"
  },
  {
    "url": "assets/js/31.ad00267b.js",
    "revision": "8d3f75671c00df2ae8aaa5e26f3162b8"
  },
  {
    "url": "assets/js/32.6515e0c5.js",
    "revision": "acabba8251307d9a4a7eca813a0b51ee"
  },
  {
    "url": "assets/js/33.b7e66e24.js",
    "revision": "f510f1736bddb0de64ddd2bd4550f6f3"
  },
  {
    "url": "assets/js/34.decb5d06.js",
    "revision": "1fb6a8f0c97798c6d0ea0af5b4cf52a2"
  },
  {
    "url": "assets/js/35.c8e88a23.js",
    "revision": "cf8518aa341c8d04b336cfbf0455423f"
  },
  {
    "url": "assets/js/36.e199c723.js",
    "revision": "84516b19557cb13081c3f1b09477e061"
  },
  {
    "url": "assets/js/37.c34080ac.js",
    "revision": "b9a2c09a8b659aebb98a18f6ee0494a8"
  },
  {
    "url": "assets/js/38.3e4e1d70.js",
    "revision": "ae7cbc2a1c802c32fd1a4fd5209708cc"
  },
  {
    "url": "assets/js/39.e8e02cdb.js",
    "revision": "d3fd26ff8df963febbfcfcc61bfd013f"
  },
  {
    "url": "assets/js/4.dbf62ca4.js",
    "revision": "b5c46557e60a1b162a56aa97b632c88a"
  },
  {
    "url": "assets/js/40.ef42ff77.js",
    "revision": "0978c61f1bf09682e3f36dfa8c4d0eff"
  },
  {
    "url": "assets/js/41.767b40de.js",
    "revision": "5010a9ac7a164d255bd43e1637f23f6d"
  },
  {
    "url": "assets/js/42.5f277086.js",
    "revision": "f10d3d8b9650112d4a0e0e512555d9f0"
  },
  {
    "url": "assets/js/5.2691bd27.js",
    "revision": "67e854514ac61190bdddf54e9f34b885"
  },
  {
    "url": "assets/js/6.b8e50c5f.js",
    "revision": "e0e35ea616d221a8aef6ae5e4f29920e"
  },
  {
    "url": "assets/js/7.d37b025d.js",
    "revision": "4e087f92fa83270b7c40c1e740a4397c"
  },
  {
    "url": "assets/js/8.2782a6b9.js",
    "revision": "4ec5736a633c9297e5d0eb878d050567"
  },
  {
    "url": "assets/js/9.e2142760.js",
    "revision": "1475d973e75afdbe26498aaa900688b5"
  },
  {
    "url": "assets/js/app.a8c982e5.js",
    "revision": "737d896338f006e72c763752f2db4254"
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
    "revision": "24ba00d2379953c97094cc52ab9e2d31"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "5842cefb299c5108e2fb6085f00e44d0"
  },
  {
    "url": "game/risk/index.html",
    "revision": "24c342ba2177ceb7ded81752958eb359"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "5d48294603d3118bc85fbb37d24f67b9"
  },
  {
    "url": "game/smart/index.html",
    "revision": "f75919ce20a563fee51b079b047e2947"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "e6b335f8bc06136a86dda499abdc3989"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "16a8e29add789753402b10acfc2ebcb3"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "f3177ece2860ad6f8ea8515ff9c6d5c8"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "182f57e66b49a43686f9cc0e919f4279"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "46b40494508962eacb7d833a3ab8485f"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "1de01b2e8ba919194b122cd4c9002bd7"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "378234a1039a86a60f312bc79670bf85"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "180a28f157805a5944d5a2d158e9bbc6"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "4aeb57664bcc666f5ef627c12babbce4"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "10a85bb27a185719b5005f5633aded35"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "8d596ac7824b30e7e206dcc4637f2cd6"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "094d65b5691ebc4ed6bc9d97b03c27ba"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "d2065edb53493c6927cdb2907baedf04"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "473705561b7f532f95e5e244c5d6c82f"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "6fe36cdc70d22c5d3907e189cad4a43c"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "348679dea030265f9e3c628bdfd709dd"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "ab2dcaf8651b935379e467051025eb57"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "eec48bdfe7bb4cc1ddaccaa141772b8d"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "5c80fee2b15c851d39b5feef161bb7b9"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "ceb5a24ceaf2e47886a83ee8f67f8840"
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
    "url": "img/yanhua.jpg",
    "revision": "d5507315681a654c8f1f5f00daf87783"
  },
  {
    "url": "index.html",
    "revision": "2da1a93bf8bd74c1dfd30d48b6afa5cb"
  },
  {
    "url": "join/index.html",
    "revision": "b50cd3275a094caea56acfe70f8e58c6"
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
    "revision": "8fd44a7d1dbf0954c7fc70cbfbbf9d58"
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
    "url": "js/yanhua.js",
    "revision": "fdd80010fb22905b481693978455de20"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "f0fa2f0f79ceb08a91a2a9c45605e8d3"
  },
  {
    "url": "search/index.html",
    "revision": "3023a737cd38515c17d1f8d624cb38ef"
  },
  {
    "url": "tool/all/index.html",
    "revision": "e2c5a1a51ed80e5941db3b446866efa7"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "b0ac7b9d66c2858612c70d281465c373"
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
