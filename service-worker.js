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
    "revision": "86575583714febccd2748eef8fac0819"
  },
  {
    "url": "assets/css/0.styles.c04077b5.css",
    "revision": "42d39f07f75377077ff848731962deb5"
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
    "url": "assets/js/10.53e6976a.js",
    "revision": "5652bf8e4280afa9327c073837194045"
  },
  {
    "url": "assets/js/11.bada0da1.js",
    "revision": "4cbbbf89926749e01a0f1d72c670e998"
  },
  {
    "url": "assets/js/12.235131fa.js",
    "revision": "10b26f299a4b30651857eddab6856685"
  },
  {
    "url": "assets/js/13.f6ac6b3c.js",
    "revision": "a02de94d69d76383baa39ddd0f584ae1"
  },
  {
    "url": "assets/js/14.f1bd810b.js",
    "revision": "e73303c38631d1eb7e4057cadb9d9c18"
  },
  {
    "url": "assets/js/15.9f5bfc02.js",
    "revision": "36a7cfcb2a006edd3163f6b322a72a3f"
  },
  {
    "url": "assets/js/16.ec5c9e9c.js",
    "revision": "d6103c0a75e08b8e3c2d089198bd875e"
  },
  {
    "url": "assets/js/17.829f0601.js",
    "revision": "e230e6a76f033c18736eed3a0f0309b8"
  },
  {
    "url": "assets/js/18.a1e88c2c.js",
    "revision": "9d423962a90daf32cdac43a42ddee04c"
  },
  {
    "url": "assets/js/19.f60b5286.js",
    "revision": "573464146d2eedcbfa8da0cb48b30647"
  },
  {
    "url": "assets/js/2.15e9cb4b.js",
    "revision": "7a9c26cb0d614b1cfc78d976b0cefc94"
  },
  {
    "url": "assets/js/20.39b8d179.js",
    "revision": "855b29a781b8963781cb2fc18423e1aa"
  },
  {
    "url": "assets/js/21.1b223e1e.js",
    "revision": "8771cc0276eab0435b1cbd21640028e3"
  },
  {
    "url": "assets/js/22.caabedaa.js",
    "revision": "1f5092e0905440d7871d9ed26c15f87f"
  },
  {
    "url": "assets/js/23.3f4383ff.js",
    "revision": "61dbf530877ac049c3ba69d3b95b517b"
  },
  {
    "url": "assets/js/24.cb2ce8cb.js",
    "revision": "7218f96331ff8edc10d75f25523a8aa9"
  },
  {
    "url": "assets/js/25.5c1b5dfc.js",
    "revision": "54917baace585dba4bb6f80d6ebdf286"
  },
  {
    "url": "assets/js/26.f067bef8.js",
    "revision": "a3111338304ce69be0edd622c1c683c2"
  },
  {
    "url": "assets/js/27.6e44ed04.js",
    "revision": "eb9fa7791d5744ce804886d46307ad87"
  },
  {
    "url": "assets/js/28.6fc608fd.js",
    "revision": "55f565c255128ce86427ef8684b31b9e"
  },
  {
    "url": "assets/js/29.a020caaf.js",
    "revision": "18d83f7452de1d2cfd17e72dfd7903c4"
  },
  {
    "url": "assets/js/3.afbfb305.js",
    "revision": "610f0b1a29bf7a90850241a9ba317d13"
  },
  {
    "url": "assets/js/30.9491bd85.js",
    "revision": "cbfd6d48c1a2bb66add77643bf822fe4"
  },
  {
    "url": "assets/js/31.e64af12b.js",
    "revision": "98e6d5f4ee44bee3fe27167bcc96c873"
  },
  {
    "url": "assets/js/32.fbfe101b.js",
    "revision": "475fdbc662b0c81c8e8b13c257853c88"
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
    "url": "assets/js/4.551d2431.js",
    "revision": "bcc7ce3c16b845b294e477587cb61466"
  },
  {
    "url": "assets/js/5.08052912.js",
    "revision": "ac084907af2126096aef0f8e8bdc1f1d"
  },
  {
    "url": "assets/js/6.285f8bf2.js",
    "revision": "71803a70e559536ca7ee00b7556789bb"
  },
  {
    "url": "assets/js/7.5a8beb98.js",
    "revision": "d0c1cfd835980c3b7c1575e9db2b8747"
  },
  {
    "url": "assets/js/8.394e1658.js",
    "revision": "7928655a724101e36365d1101e84abd4"
  },
  {
    "url": "assets/js/9.23813700.js",
    "revision": "f3a3b7c5e6d367343edaa767b7cb6258"
  },
  {
    "url": "assets/js/app.93e84a66.js",
    "revision": "793817f9a5b1726ceebb5598c11f7731"
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
    "revision": "96d81304fad748971745c004e7995390"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "1b08115864fefb84a487ab3c70df4eeb"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "07518e16621e6e7325b98e8ca0e17573"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "a0c0defeeb96a9cf3230cfd5467884ca"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "82697296ba827fc6da0c8b0b166db396"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "73887c03ffb291b6c6c171792f767039"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "bd328d5ec57be503152ae7406db35a38"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "ba0397efb9a2b714c73914467a9ded2d"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "90ed0d8de2263d228e4acb9cf42e83aa"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "2298eab99a0db074ccca5e98e256b22f"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "75b055ad8cfaa1d519bab4db8ccecefa"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "e71c5d509591077e28adeaa4a826aac9"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "4f6467dff5be1acca1ac1252b0afe9e2"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "895bb52d5cf39828db36673fc8e9d4a8"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "b0704728f499335f3eb7943f7028e861"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "60eb7e9974fc0f1411c4f69733896873"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "138f6bd24bb8c12fafdc8fd4bab9f3c2"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "0de841393c0f6416c4f2bdb6e8af1dd1"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "5a30c5d8538fdd3bc046026b72e63881"
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
    "revision": "a4cc1f135223b808e8ef7384894b784a"
  },
  {
    "url": "join/index.html",
    "revision": "2ba19e71cfc0e78c5e6f13604505d87e"
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
    "revision": "38db382a54153ba932228def88780d1b"
  },
  {
    "url": "tool/all/index.html",
    "revision": "2dd2359a71c5c9d18dee26c5963ca753"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "07d88dca56d644703ebf5d611681547f"
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
