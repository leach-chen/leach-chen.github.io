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
    "revision": "f2684f54b70ffb321dc828bf32c702ab"
  },
  {
    "url": "assets/css/0.styles.b1f1dac1.css",
    "revision": "dd1cb6af73dddeb219ea7394e70c2dfe"
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
    "url": "assets/js/10.2d0be5da.js",
    "revision": "3a0580f127ff369608fed763d6f1e068"
  },
  {
    "url": "assets/js/11.b1a8a425.js",
    "revision": "32468f0cba03bac94d9fda89f7635411"
  },
  {
    "url": "assets/js/12.5f093fe1.js",
    "revision": "92fee7e336c8f35cb7a1b16398314812"
  },
  {
    "url": "assets/js/13.48e2e8b7.js",
    "revision": "1681a49bcacf689ca4f2cf1690119390"
  },
  {
    "url": "assets/js/14.770c2d7d.js",
    "revision": "8f9b5fbd167ef96b0a0d210f69f46e7e"
  },
  {
    "url": "assets/js/15.9efa2567.js",
    "revision": "952b70db5f904a9b888bf2a78756c5b4"
  },
  {
    "url": "assets/js/16.453b356c.js",
    "revision": "3589cb5103ac58c54b519bd6a0eaccc5"
  },
  {
    "url": "assets/js/17.51394e0b.js",
    "revision": "24af851d2e1156aa03e58cfad3145289"
  },
  {
    "url": "assets/js/18.14b794eb.js",
    "revision": "a5bff64330cb92d6348f517588a11fd8"
  },
  {
    "url": "assets/js/19.28dd254e.js",
    "revision": "060da5fe9ef133bddb9792c1dda76be1"
  },
  {
    "url": "assets/js/2.89753c70.js",
    "revision": "fa320d178ee9432aaabd0afd7134fa52"
  },
  {
    "url": "assets/js/20.928d1ade.js",
    "revision": "70e932198ef8ad175fa65bad67519e5b"
  },
  {
    "url": "assets/js/21.533783c6.js",
    "revision": "06b72401114530ec2eb8b32be6a193c2"
  },
  {
    "url": "assets/js/22.3f37a2d3.js",
    "revision": "3b9113f72acb4241d9f8995f39f421e4"
  },
  {
    "url": "assets/js/23.2a427cb8.js",
    "revision": "d3ffe59488b88cc8ccda236adc885416"
  },
  {
    "url": "assets/js/24.8e286731.js",
    "revision": "22697800f3e4643a36a95b78b3105a1c"
  },
  {
    "url": "assets/js/25.71397f96.js",
    "revision": "e8104c8fa1018018e047d853715df815"
  },
  {
    "url": "assets/js/26.400f2b7f.js",
    "revision": "9d22a931c34612b02b6b484511e9c582"
  },
  {
    "url": "assets/js/27.15d53595.js",
    "revision": "778f247f45bc8853619cecd4b2f3634e"
  },
  {
    "url": "assets/js/28.a726fb04.js",
    "revision": "0081abfe3711beba2e928d2e24f61687"
  },
  {
    "url": "assets/js/29.5f00d042.js",
    "revision": "a90287b31b1755857320d2cb3f31e7f8"
  },
  {
    "url": "assets/js/3.62756809.js",
    "revision": "2d8678c514a5b3780827b67c131aa2aa"
  },
  {
    "url": "assets/js/30.ce10de12.js",
    "revision": "7a71e8d01fd6cab04e2135afa4280f19"
  },
  {
    "url": "assets/js/31.3799f5af.js",
    "revision": "d78a10c312e0ef8b3b652c46a3d709fe"
  },
  {
    "url": "assets/js/32.bd6ddc62.js",
    "revision": "2e90547fcc1e0e01e7d812d297f89fa4"
  },
  {
    "url": "assets/js/33.b462b133.js",
    "revision": "2cda1d93c17ff3984ad5572d07c653c6"
  },
  {
    "url": "assets/js/34.715458f8.js",
    "revision": "7c7b2d91c9229944c86d737bbae30105"
  },
  {
    "url": "assets/js/35.81a48083.js",
    "revision": "353afb6e45124ca8539903ffa55d0d97"
  },
  {
    "url": "assets/js/36.a046c03b.js",
    "revision": "205b35b0fadb38e2a5a5db7c7acdacb7"
  },
  {
    "url": "assets/js/4.ac0c2f0d.js",
    "revision": "b8b9f5b61789cc5d54dac202a6171fae"
  },
  {
    "url": "assets/js/5.647539c8.js",
    "revision": "ae590b770b08988c7dff30df92991739"
  },
  {
    "url": "assets/js/6.43c0c9d7.js",
    "revision": "22b33eb99a9b822d7783b51d08dd8a1e"
  },
  {
    "url": "assets/js/7.69881686.js",
    "revision": "f2f297efdbd6468c2976f7973fa9383b"
  },
  {
    "url": "assets/js/8.7caefc07.js",
    "revision": "5194d9fd899a1283a74bc1d2cc4687d4"
  },
  {
    "url": "assets/js/9.9f2ff5cb.js",
    "revision": "3b94b21e62d7f4d3c42abbb692ebdac4"
  },
  {
    "url": "assets/js/app.2bd245da.js",
    "revision": "5054e682222bd3286f6431e4f05cadae"
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
    "revision": "a85cfbff0384a353898d6e6b9c1237f0"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "c252f1de0b28935437d4e8c056d84e09"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "59ae8770a136826074a8394caf325558"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "110f10dbebb09ab00fee966111ba993b"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "c5cf3cf0813ec9bc0a20fd5dceab8f23"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "b2b51d23bc23d20d8c3d17417f9f5b24"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "8cf7e9b99445abfef58ed03774368c00"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "f84fb2266eba40c59eb2cb4223b0caea"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "4f07aca4413537247e9a3d70607421de"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "db9ade5711774cfcd8f781cd67627cac"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "76ca0482f598df483880b2d28b9f7c67"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "a0fca35a06ee193142ff87edb90e60e2"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "fe0fdb1c7199542ccc30ffdf4872ad7c"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "15fe359ad85d3af4bcc81530a88da037"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "c558b6808d356a1cf341a5db84881d11"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "7fa31ddff7dd399dbdb41dd691fafc10"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "f9a0c827b3ebdf356e1e32546d474c12"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "37a7e6868782db3e22616f7aab3df8da"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "a6b4573b920d80025e62382c8519bbd5"
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
    "revision": "7b35d44fc26ce8b5ff220c3a468ace61"
  },
  {
    "url": "join/index.html",
    "revision": "1b58fb4e2ef27d67498776e5b23b14eb"
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
    "revision": "9c6c8ddd89f8d30cca324ea43130931d"
  },
  {
    "url": "search/index.html",
    "revision": "80c1902f66a49ff7332e38eda13d8e73"
  },
  {
    "url": "tool/all/index.html",
    "revision": "bc42043fc8285090f25b8205f81654c6"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "80e21742e5ce7cea2d06b50007288062"
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
