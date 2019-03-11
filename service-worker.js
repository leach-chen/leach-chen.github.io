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
    "revision": "b6a21b4a3c60e62fceb9da214e2c6bd9"
  },
  {
    "url": "assets/css/0.styles.de440db9.css",
    "revision": "aded773488e64d5167b62c03d2504a32"
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
    "url": "assets/js/10.185cb21c.js",
    "revision": "edfaff4d8d12bcfcc120d1ce58c21641"
  },
  {
    "url": "assets/js/11.41be8b43.js",
    "revision": "ae9aef2b5fb1d0bf0a77f57d3c3cc76b"
  },
  {
    "url": "assets/js/12.b37cf359.js",
    "revision": "a5cdc1f89b31764b36cf2ea56592457d"
  },
  {
    "url": "assets/js/13.b1b6d0ba.js",
    "revision": "a60f2ee93f6a01af2849dd798ad3073c"
  },
  {
    "url": "assets/js/14.1bd78334.js",
    "revision": "af8f0ac34ed6507e1eb9118f47c01f08"
  },
  {
    "url": "assets/js/15.03b3aa40.js",
    "revision": "498de03f37477efcac6a9751647674bc"
  },
  {
    "url": "assets/js/16.6a06d416.js",
    "revision": "27b30082ea85958a4491cec5e7207bf0"
  },
  {
    "url": "assets/js/17.91e89cec.js",
    "revision": "350989fc3fd4edc90138bf511e47cd37"
  },
  {
    "url": "assets/js/18.de74c950.js",
    "revision": "1177fed8137b1a315c167799345e6d65"
  },
  {
    "url": "assets/js/19.860b3f2b.js",
    "revision": "26fb84c8cdf26b43a429df7f95d7d4ad"
  },
  {
    "url": "assets/js/2.433253b0.js",
    "revision": "90830462dc2768a6c3e4a79e9037b117"
  },
  {
    "url": "assets/js/20.b9555ffa.js",
    "revision": "87c45a558b7533f4e1464dd7beaf72da"
  },
  {
    "url": "assets/js/21.75a07a52.js",
    "revision": "784c458dcdfb6504e63005633f73808d"
  },
  {
    "url": "assets/js/22.caabedaa.js",
    "revision": "1f5092e0905440d7871d9ed26c15f87f"
  },
  {
    "url": "assets/js/23.e0d878ff.js",
    "revision": "0b46f7ff7d3cbe5461016fa753609713"
  },
  {
    "url": "assets/js/24.0b747188.js",
    "revision": "249a496ad7c27513cf542070d739cf93"
  },
  {
    "url": "assets/js/25.45cdd1bb.js",
    "revision": "ab1a6748dad3257bc49d79999b741652"
  },
  {
    "url": "assets/js/26.f067bef8.js",
    "revision": "a3111338304ce69be0edd622c1c683c2"
  },
  {
    "url": "assets/js/27.adf37740.js",
    "revision": "0b244b25858142597f6ad172b3707b36"
  },
  {
    "url": "assets/js/28.7c1f879b.js",
    "revision": "27f7b3ceed1293c46e0457a75c07895a"
  },
  {
    "url": "assets/js/29.a053eb4d.js",
    "revision": "15fc5225dacc6c07e451a3ae16996311"
  },
  {
    "url": "assets/js/3.95e2d68e.js",
    "revision": "fbae05a67ead646409709fa138b1abd4"
  },
  {
    "url": "assets/js/30.cf300a63.js",
    "revision": "a05e02fbc859b2586b2d445ec4482cb0"
  },
  {
    "url": "assets/js/31.8d7fc93d.js",
    "revision": "84a6ff5b6ad830e77a62a888a6682671"
  },
  {
    "url": "assets/js/32.26089e1a.js",
    "revision": "164e789ed16add4ce06b8bfd5fe4f5fe"
  },
  {
    "url": "assets/js/33.d19a43f9.js",
    "revision": "0e6b76ec57702d7dd5ff448edca9a195"
  },
  {
    "url": "assets/js/34.ea3f0fdb.js",
    "revision": "bb3c0887554378302f08dc08b2372b38"
  },
  {
    "url": "assets/js/4.c5f2c4f7.js",
    "revision": "06aaab05d870bdfb92076936eb0a4f4a"
  },
  {
    "url": "assets/js/5.e954a4f1.js",
    "revision": "ec0109d56c1789d371ab8a1ec9297ab7"
  },
  {
    "url": "assets/js/6.1ad99a8c.js",
    "revision": "8bc10633e26c88c8ce0d09f436aa2343"
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
    "url": "assets/js/app.efeafbf5.js",
    "revision": "28d21021230649ba7d2ead1d673f7f94"
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
    "revision": "25be2ea260902aeb1d96233f031103f9"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "04851880f5bef05e4667557d577dac27"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "ef4606eb4be455afd717fe29b229d16e"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "f9fa76e383806143b140eaeb277fca61"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "8732578336acc341f6a71ab13220a36e"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "40e2145e2a7f1aaf66df438050941f80"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "6052af83ef8403566957032c666ce3aa"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "6390a656db4c3ca00909df66094c80fb"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "5382c8809e0ed22d888bbcdfcb0a70eb"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "c1d0a24dade4fe044ee334034861b60c"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "06e09d313af1d35aadf7feb64175af42"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "8665f6b4547f6e2590800695e4c6ba3e"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "eb5051daf5eee3d78cbec017cb3c7feb"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "078ea5a8d239e1f65ee7805956c9559f"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "d528160a695bddef4b5f79c2ae5d9e85"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "77ac9e8b77a65139a477ba24e9d52604"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "1807b52de09590bd058984107ca293ad"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "b885231425454c7384b5e5deed0d9501"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "b048097bcdb0fa086d7772c842534f3d"
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
    "revision": "2b3039b413a2858b8b436aced4b8982b"
  },
  {
    "url": "join/index.html",
    "revision": "278e33754e5818b29579acc730af228c"
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
    "revision": "8bc5193ccf64410fac7b63adf2200663"
  },
  {
    "url": "tool/all/index.html",
    "revision": "4b2a69a5d1d1a04855fb6cbabeeb73d6"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "ac2f7393f327570e1a8b7e940d189faf"
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
