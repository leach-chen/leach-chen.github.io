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
    "revision": "042c85c61a949a1463b336a59c2624a5"
  },
  {
    "url": "assets/css/0.styles.ce24d7c6.css",
    "revision": "ae83aa253d237d64cd8fd5e915e5e4c9"
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
    "url": "assets/js/10.bb14d3f6.js",
    "revision": "53662b44bcfdc6d97c372ef9a657e937"
  },
  {
    "url": "assets/js/11.33f26c06.js",
    "revision": "ef4415950a248785e80cd29be9608585"
  },
  {
    "url": "assets/js/12.dfc43c55.js",
    "revision": "7efb177174f69e1f9daa9431987fcdf1"
  },
  {
    "url": "assets/js/13.7e414992.js",
    "revision": "a99f3555ff383eba711564d695d7fcfb"
  },
  {
    "url": "assets/js/14.23f0a5d8.js",
    "revision": "d2d828cdba727f52142467b01e8ec055"
  },
  {
    "url": "assets/js/15.bc03e2e8.js",
    "revision": "557436398dd2075326a813834aec38d1"
  },
  {
    "url": "assets/js/16.d01fff92.js",
    "revision": "1aa2ec7ae783dbc0fc7311a00775beed"
  },
  {
    "url": "assets/js/17.bada92ff.js",
    "revision": "0ac5c65922bb30a7da3be5506224452a"
  },
  {
    "url": "assets/js/18.d81a89b7.js",
    "revision": "820ea1543fefee293673915c794116e8"
  },
  {
    "url": "assets/js/19.ec3e4f00.js",
    "revision": "0938ac93c7f26aeff7c86504edd5b9fd"
  },
  {
    "url": "assets/js/2.64d043c3.js",
    "revision": "9019f399c12bf8e87beba67be0778269"
  },
  {
    "url": "assets/js/20.3a674a6c.js",
    "revision": "e5afdd1ac1862af6b6dd7b7b78d471a0"
  },
  {
    "url": "assets/js/21.ff8438be.js",
    "revision": "bcd0e9fafed5748ed8da948bfc29e3fd"
  },
  {
    "url": "assets/js/22.66d0e2fb.js",
    "revision": "dcab029f09dabe8565b542885b5bbdec"
  },
  {
    "url": "assets/js/23.8b942684.js",
    "revision": "ce43e5e10df1a7e507e3bd4d326aebac"
  },
  {
    "url": "assets/js/24.2b1221cc.js",
    "revision": "6313ea27994e4465a06122eb06772a97"
  },
  {
    "url": "assets/js/25.b8b8e697.js",
    "revision": "aacf1df0205f4145a34278c5c8c73f9c"
  },
  {
    "url": "assets/js/26.9c818854.js",
    "revision": "152ff23015e93f78f6498e9e44dcf6f9"
  },
  {
    "url": "assets/js/27.08e8072b.js",
    "revision": "56bbc556aad788e1bda11e4e49c3d65f"
  },
  {
    "url": "assets/js/28.99b6d1e0.js",
    "revision": "1001e7849ea45529b75b946efa53ab5b"
  },
  {
    "url": "assets/js/29.8146ff44.js",
    "revision": "23d1f8a3fa6bf85cba3fa9f95a54b71a"
  },
  {
    "url": "assets/js/3.0aac7c35.js",
    "revision": "e628fad00facb3a383f4368bbcb217e7"
  },
  {
    "url": "assets/js/30.70a7bf33.js",
    "revision": "91408dddab39eb48de4b7354766fa7fb"
  },
  {
    "url": "assets/js/31.159b3f85.js",
    "revision": "ada67217fb3762068a0244dc91f8ef0f"
  },
  {
    "url": "assets/js/32.705b4d69.js",
    "revision": "7c4570bea9cb615e45e8ad15a3f945d8"
  },
  {
    "url": "assets/js/4.43a0f411.js",
    "revision": "db35a8b50e7538b66b28eb2987a87cbd"
  },
  {
    "url": "assets/js/5.ecf8a1d0.js",
    "revision": "381daacc0abff37d51b0701c966a8032"
  },
  {
    "url": "assets/js/6.6b82a275.js",
    "revision": "212655ac365072c2f2d75eb2737fa83d"
  },
  {
    "url": "assets/js/7.92781b9b.js",
    "revision": "0ff55449fc9dcd03b6817778059220fc"
  },
  {
    "url": "assets/js/8.a67dc969.js",
    "revision": "7dadb3d2edf6b2bbc5cc76e0679a7e3a"
  },
  {
    "url": "assets/js/9.8516c470.js",
    "revision": "e2056e6ec540430f1c5bbfda543ac459"
  },
  {
    "url": "assets/js/app.10325088.js",
    "revision": "a98a19984e0f8f59844a0e135d333ef4"
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
    "revision": "52b2dcea0bedbc68960b26514cf53aac"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "4a4d47552ffe2c5fa4c56dba217c1817"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "e62a10a6b6513355dfd419a5c697c00a"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "625d11a8710fe62beb9a3b7742d39efd"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "7432c831e7f0742184bfd397713a5c78"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "5c5081c36f0e3ce0df0b06f6b00ff3e2"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "664be50bcd1d96c5b8eba216392bcb0d"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "a7164da4ad2f49477192f81139c30da7"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "847f88e6f78f38a001a5fe4cf980b803"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "0d4f21813e832ec8326b929fcb7a0d1b"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "4a19a5766956c0d0af20f033a697ccfe"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "9e3f9076199f871e98865a104890b392"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "84a09366e7f5accada95fadde0ede815"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "ea582c8211fa773e42199f1df76e22d8"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "8bfe3c4520ccfe551616592b678a22f0"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "fca817d841bda491559c6cc6387a304d"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "5299954fb954c6e659f62661701093bb"
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
    "revision": "a6bd1e07055b9871d5ef532f8a8cc8f9"
  },
  {
    "url": "join/index.html",
    "revision": "439813a18605d635354063cd774d725e"
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
    "revision": "dce68971f25d3ad8a06b5c3d5df0edd7"
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
    "revision": "926949367a9c6c393e4fcd9a79f32205"
  },
  {
    "url": "tool/all/index.html",
    "revision": "d552cbf633255ff3a6582539537b7419"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "9429184d80ee3fe83e56fb82fd3cb0dc"
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
