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
    "revision": "3e8ad791e44a9f2adca1b44a41608a38"
  },
  {
    "url": "assets/css/0.styles.a9e0909a.css",
    "revision": "e320d55d118e1b7da232a6f3c7d4201a"
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
    "url": "assets/js/10.68f3032f.js",
    "revision": "93b81779a548f2e861d170d3987184af"
  },
  {
    "url": "assets/js/11.3c347520.js",
    "revision": "358ff533811f75145163f1265296cc2b"
  },
  {
    "url": "assets/js/12.0a2cf535.js",
    "revision": "c4a13bf017471c800140d88da6e97431"
  },
  {
    "url": "assets/js/13.ca022c7b.js",
    "revision": "7ba042cb97652f5b04563456ef24030d"
  },
  {
    "url": "assets/js/14.9a92b2bd.js",
    "revision": "6ebf5d628929bc364316c53dac68f61a"
  },
  {
    "url": "assets/js/15.a22a4a34.js",
    "revision": "dc60ae5b5e2fd79552992ab90eb67832"
  },
  {
    "url": "assets/js/16.e82fd8b7.js",
    "revision": "26c381eed7903e7f087fc515e68b6c45"
  },
  {
    "url": "assets/js/17.cfa58144.js",
    "revision": "b42d6fd1e8394eaea60fad3081098861"
  },
  {
    "url": "assets/js/18.85ef16c6.js",
    "revision": "d6333888f48870c8774d2082513c2bef"
  },
  {
    "url": "assets/js/19.e75a5309.js",
    "revision": "7191615c4973db23332b9e29d4bddee0"
  },
  {
    "url": "assets/js/2.30b21f4f.js",
    "revision": "dfca37930e0f3852a9615b2024367af0"
  },
  {
    "url": "assets/js/20.9798fc72.js",
    "revision": "a18c9b0b1e12f7ddd4c7f8c347754986"
  },
  {
    "url": "assets/js/21.4dd2d244.js",
    "revision": "75f0b7b183837b7f46c09846517fbbdb"
  },
  {
    "url": "assets/js/22.0fd38148.js",
    "revision": "0815384ef918aea7182468e27ab82257"
  },
  {
    "url": "assets/js/23.3c4b4ece.js",
    "revision": "0a857ec3b1b4b46fa193178716a39d8f"
  },
  {
    "url": "assets/js/24.3e9a1d0a.js",
    "revision": "93783a1c6e5ae3f3297eec58bc452186"
  },
  {
    "url": "assets/js/25.a9eecbba.js",
    "revision": "4baf1a3898f4bb9316f96c321abaa861"
  },
  {
    "url": "assets/js/26.c1e3454d.js",
    "revision": "707febd56c7150adf3e892e2eeb8f119"
  },
  {
    "url": "assets/js/27.5ac547db.js",
    "revision": "e408b01afa7d3fe7823868cad741291c"
  },
  {
    "url": "assets/js/28.b0f9a176.js",
    "revision": "dae11338c7f0f64e6f40a47c03d1031b"
  },
  {
    "url": "assets/js/29.8ec1df57.js",
    "revision": "94c2e92edfb0e262222240690ba33466"
  },
  {
    "url": "assets/js/3.07df92ed.js",
    "revision": "7e8c50e6657ed398d6e5813bcee0ae8c"
  },
  {
    "url": "assets/js/30.2171c446.js",
    "revision": "e07b2fbf29f11f98e6302f4346dc3e0d"
  },
  {
    "url": "assets/js/31.ba84aee8.js",
    "revision": "d208ccace8282c9b89272bb5d88f4f1e"
  },
  {
    "url": "assets/js/32.d0b33f4a.js",
    "revision": "faebc94e8386b6144dd0998a21174edc"
  },
  {
    "url": "assets/js/33.3d5e7401.js",
    "revision": "851c69077463fa674e1ffc91a70aa3c3"
  },
  {
    "url": "assets/js/34.71162517.js",
    "revision": "24b9006a7522581d3cae0619d1d62b62"
  },
  {
    "url": "assets/js/35.36e485ee.js",
    "revision": "85718a6c61e8186704bff1878f18caf5"
  },
  {
    "url": "assets/js/4.b238e995.js",
    "revision": "8b4640b350b17cafc766e1ea65016461"
  },
  {
    "url": "assets/js/5.15807652.js",
    "revision": "344fc78ad92540d0653d87e0b64ecfce"
  },
  {
    "url": "assets/js/6.c0299919.js",
    "revision": "d0d965417c48b273ca30cf2dc4c542a9"
  },
  {
    "url": "assets/js/7.6921cbe6.js",
    "revision": "556ae9de11cdaa487671727d018ba67d"
  },
  {
    "url": "assets/js/8.54d6cee6.js",
    "revision": "4ec5a91ee6e0ab94fba1f4f2ef1eb205"
  },
  {
    "url": "assets/js/9.c0468bdf.js",
    "revision": "cdf5ad0b98514ab44e65e28e966c8dff"
  },
  {
    "url": "assets/js/app.cb8a9732.js",
    "revision": "531a02eae56dc9f87217a8cd273f6a53"
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
    "revision": "2fa0d83bd39d24ec266bab84ac76ef46"
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
    "revision": "02d24b0aa4e13f5c335190c22a27afc4"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "552f06043d3b6b5f778e71d4777a9534"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "90c1a5fe7e204f02324f856fa6151639"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "5e998187194e6c02a1899b5e4215b8da"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "1663071c4011a955c7771318cb9f962f"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "9cec6bc8d08734646daf22b7ba189711"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "defbb9a95ac9965b75a2fe48ab783212"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "cab24e5f83bd118fda25b0b05afab2fb"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "01f81c0c28773f66e0891bec6db4a9d9"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "348a041d725f8c566052b44dd5c91b6e"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "a7f5d24a64d0c7f69c8654686e450ab5"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "ed8026cfd0ec13412ec1fe91e4d7ae38"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "433fb1763b399bd7aaf516a4e5aed0ab"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "baddae8087eef3b8398426c76a163515"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "b66c082ea11c4661e203187309230470"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "2327b7ed5e1d1cbd8b4948400ba2fd70"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "b04f6755ca94f6008d1548bbdb247465"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "59dd7795b45503317ed8001aed9ab21f"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "a2d94b835df653342084f19736f71ebb"
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
    "url": "index.html",
    "revision": "2f1c813516e2d6539024def3ade8c178"
  },
  {
    "url": "join/index.html",
    "revision": "43874e9d4c93972c014caf787173723d"
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
    "url": "js/vconsole.min.js",
    "revision": "40fd7e9234606a341adcbb1ce0a15d51"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "4036e8e46f837932e6f2576e40512a34"
  },
  {
    "url": "search/index.html",
    "revision": "718da7536cfdb017ec9b86b1f817b933"
  },
  {
    "url": "tool/all/index.html",
    "revision": "214361a6e2e999be5571aa9b5f5a79cb"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "cfd7cd9b349c7f8ab3c9ab6e45d57bf4"
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
