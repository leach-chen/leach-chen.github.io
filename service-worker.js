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
    "revision": "53e4e494bdaf62ccba3297ea7b2d435a"
  },
  {
    "url": "assets/css/0.styles.1cb66364.css",
    "revision": "76aa1758e69b271abca8f0a1288984c6"
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
    "url": "assets/js/10.f5932f87.js",
    "revision": "dad9d119b52129beafad48f9f89bae83"
  },
  {
    "url": "assets/js/11.bffde767.js",
    "revision": "c2b972a2969ed1b5f89e7101f07ebd1d"
  },
  {
    "url": "assets/js/12.f95623ee.js",
    "revision": "66b03c7e75bb1b1814539fc2ee698bcd"
  },
  {
    "url": "assets/js/13.77dec94c.js",
    "revision": "cf5ec1f07a0ba592489219285bbf23b0"
  },
  {
    "url": "assets/js/14.9baf50a2.js",
    "revision": "74e000b0b1fee7cff1c483fa266b3a4b"
  },
  {
    "url": "assets/js/15.9f5bfc02.js",
    "revision": "36a7cfcb2a006edd3163f6b322a72a3f"
  },
  {
    "url": "assets/js/16.7555d642.js",
    "revision": "5baf13b142fffb3a904850ff2cf95740"
  },
  {
    "url": "assets/js/17.316284d9.js",
    "revision": "b8ec014f882d78574a7153ff4b9db3c1"
  },
  {
    "url": "assets/js/18.7700021f.js",
    "revision": "dd58caf2e436576962c9d9bf9b1ba4c8"
  },
  {
    "url": "assets/js/19.2268ce83.js",
    "revision": "3d5c903d166f265a592d39e9b2fb30b8"
  },
  {
    "url": "assets/js/2.c2517cf4.js",
    "revision": "4340e4a58d08e29420596ec85704c3d0"
  },
  {
    "url": "assets/js/20.4f8af7c7.js",
    "revision": "66406717459250f67aa9f1000073a872"
  },
  {
    "url": "assets/js/21.309936ff.js",
    "revision": "a8fd68406c093676fde96c011269514e"
  },
  {
    "url": "assets/js/22.c022c0ed.js",
    "revision": "b99f7ed4bfb0950301f3db7e0568e860"
  },
  {
    "url": "assets/js/23.4afaf057.js",
    "revision": "a05a0163c88b0ddbc415926088f08c0e"
  },
  {
    "url": "assets/js/24.93b6d5cf.js",
    "revision": "6482e744de7305f6efbf0d49d5031ee1"
  },
  {
    "url": "assets/js/25.e3a00297.js",
    "revision": "64acb50dcf1b959af914c68f958f5790"
  },
  {
    "url": "assets/js/26.b2b293d0.js",
    "revision": "fa023c6234c39bf62d026d0f3e9ccad6"
  },
  {
    "url": "assets/js/27.7514c470.js",
    "revision": "5744b44519b7bcb241ee5db2077e9814"
  },
  {
    "url": "assets/js/28.041e7717.js",
    "revision": "1f73efa94aeea487477528b9e36237c7"
  },
  {
    "url": "assets/js/29.d57a563a.js",
    "revision": "f24603c779b1621b2704688fc4ac8a70"
  },
  {
    "url": "assets/js/3.df83f7b9.js",
    "revision": "d8cfead74314e9fad4e5479a2bc0735a"
  },
  {
    "url": "assets/js/30.eb2c509b.js",
    "revision": "215b3820763580123462a598d6d10e84"
  },
  {
    "url": "assets/js/31.5a4ea06a.js",
    "revision": "39a889d0096bff2b4eb865b92bbd931b"
  },
  {
    "url": "assets/js/32.1235369a.js",
    "revision": "b89d245556b0a206eb97ff0ec181fc74"
  },
  {
    "url": "assets/js/33.87b8f867.js",
    "revision": "7076d18c19f38c0b0612377dd82b3d6f"
  },
  {
    "url": "assets/js/34.ea3f0fdb.js",
    "revision": "bb3c0887554378302f08dc08b2372b38"
  },
  {
    "url": "assets/js/4.cd76ee97.js",
    "revision": "239f7c1036145ab5d6317fd3b74e8a61"
  },
  {
    "url": "assets/js/5.a7e92233.js",
    "revision": "40675f94602373456f180011371c5d83"
  },
  {
    "url": "assets/js/6.503ef616.js",
    "revision": "c392d3e5c203294500a28bbb6dd92f13"
  },
  {
    "url": "assets/js/7.b5e37801.js",
    "revision": "15f822fa71138aec0efc46e8df0e1aef"
  },
  {
    "url": "assets/js/8.410329a0.js",
    "revision": "203401da6c0d05b8051dd7e08c86cbc8"
  },
  {
    "url": "assets/js/9.d854eb7d.js",
    "revision": "bea0271ce04ba31bdb2882bf9fbe1081"
  },
  {
    "url": "assets/js/app.612a697e.js",
    "revision": "539e81550db4e90b8685e6d63eeb2f9b"
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
    "revision": "16cc3ff85530f227f2db7bbd409d2dd0"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "44dbccd948999bb7a27a3a27624f42d2"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "34e02003dcb31afb641f0493ee198a49"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "827a8bd4a455e511217addab301017a7"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "659ddf9ba1ee3e7f54fd589e88e477c2"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "75bcecf4c9fc006db248135290da3414"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "6dd20a3a460433df1c3225d82ec38f12"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "d0114bf07254d93db28427bc4cfa94c2"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "9c5a58d0713b6012f3d2e366ad653b42"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "e10faaf74ed0ee42140c25aaeff09433"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "3698b8ddf8d83e8b1009f907bf6dcb47"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "636a8ad729a7a578e653d70eaf5cb962"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "f69031a5d1037dce95c9ffd4d0e8dc69"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "e43c2fb156cf9a74c243899cb1574cf0"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "93626ddf461790aa316a5cbbd86b8efc"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "c213c777f3cd594982ca64f7b5e7f5ba"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "57a3b3717989cc28e6ddeaf7c2a17c65"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "1c73d8dbf51958f0e4f19ef13aa4ae71"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "8a8cfdc06b2637b84a2fb5108bc48d10"
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
    "revision": "ca3b1aa5c79161dd6a4f32040508394e"
  },
  {
    "url": "join/index.html",
    "revision": "6c3d8a99c2350a73d2675cc2a51d702c"
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
    "revision": "7fa094257fa57f1626e9e8de2f668faa"
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
    "revision": "3ff50f1616464bc6ea97a89684d9058f"
  },
  {
    "url": "tool/all/index.html",
    "revision": "1334694d5f95d8655577508c53a4234c"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "1be128cfb66f2a0e861e8c93df252216"
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
