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
    "revision": "25360783c6a065bb6aef46c6bcd2363d"
  },
  {
    "url": "assets/css/0.styles.0bfa3b4a.css",
    "revision": "5655c893b7f593868e26838df6eb97cd"
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
    "url": "assets/js/11.0af3b265.js",
    "revision": "83f4cd34a43a719a06cfc80f6bd5b6d1"
  },
  {
    "url": "assets/js/12.738af314.js",
    "revision": "857fe71cc203b2b35d4e9079890c39f5"
  },
  {
    "url": "assets/js/13.48e2e8b7.js",
    "revision": "1681a49bcacf689ca4f2cf1690119390"
  },
  {
    "url": "assets/js/14.6ca2f602.js",
    "revision": "f26c13d495ab07291d626f763bd724ce"
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
    "url": "assets/js/18.19fc8c22.js",
    "revision": "e3d1560eab1e9b30c4feb19779ddbaa2"
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
    "url": "assets/js/20.feebcade.js",
    "revision": "b4df7e51a970eda1609acf0572c0adf4"
  },
  {
    "url": "assets/js/21.2a0f3ac1.js",
    "revision": "fb8def0dbbd1445b2dd0a3ff68bd4e5f"
  },
  {
    "url": "assets/js/22.889d555f.js",
    "revision": "2a43c9504ca8e10bdd568e33bf34c830"
  },
  {
    "url": "assets/js/23.3eff795b.js",
    "revision": "ec277d818a4511758ad7233c7cbc40e9"
  },
  {
    "url": "assets/js/24.e14ad752.js",
    "revision": "043897e40d7e4e78fe143b3ccc7d586d"
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
    "url": "assets/js/27.89d5f125.js",
    "revision": "2131411008c4c2c4ea5dd61d0e7654d7"
  },
  {
    "url": "assets/js/28.d5a787c8.js",
    "revision": "f48a5cd0c3c35b0fa7d3f419452e3a28"
  },
  {
    "url": "assets/js/29.013b1c57.js",
    "revision": "d410446877e1f3513814ef9dffa03442"
  },
  {
    "url": "assets/js/3.d1440797.js",
    "revision": "8938588772d3e1098f34e4343acb897e"
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
    "url": "assets/js/34.a5ce8be2.js",
    "revision": "b3b99758f59628ddfbf13325123b0d69"
  },
  {
    "url": "assets/js/35.96e1c211.js",
    "revision": "ef03a011735ab48e436198e24b96f5ca"
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
    "url": "assets/js/5.d298672c.js",
    "revision": "ccae9acadca4c7540356ff27e37cd54e"
  },
  {
    "url": "assets/js/6.28675e42.js",
    "revision": "3411dc17ca3127bf5e8c75e31beaeedc"
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
    "url": "assets/js/app.6bb67613.js",
    "revision": "436c59a483ed2d59c245e3a76bc7c14b"
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
    "revision": "42412f45f037dfd69fa675e4cf922b5c"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "7237420c86776efefec47f7b4c45e415"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "0f23a54e983f16f7e192764aee6a40ba"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "441003804718cdf5688650f1ffd01596"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "2ae0568d906086b611a3edf0a06d9a40"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "83e8d694635a77ab5bdea18069168c05"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "92bedc04eb3361e75600b8388d946554"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "246652e28e84d3c39390b0a9eca73095"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "a10852dcd10869ba6030f2714865de2d"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "1d11707ab263cb924338c9751441d56f"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "c81607593ef1fe88c1109e6eea411afd"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "af3f32815d48cedca336f0948fd1f9d0"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "cfe4bd745f90a223db84a476e098bf55"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "ddf1390a2d73281562e6d07673d82039"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "eb0f087a93a3a6e0f2b9a6978ff2ab22"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "1a6bf1952be18c66960aedd4d5032f76"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "d1c05ae352c1e48cc3046b5ba683c8f0"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "fb00f3b59fd7b4f02c15a9f144c312b6"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "536092cac74e64a46933126cf053659d"
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
    "revision": "1c6bd5a116e6a0a54521165d0737dce8"
  },
  {
    "url": "join/index.html",
    "revision": "ab600953b24bc6431fc89aa1eb3edbc4"
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
    "revision": "68a59672c1f670657f6be9a1ec455bde"
  },
  {
    "url": "search/index.html",
    "revision": "d2c3d3c5ef3e986a740d3f877d4934ad"
  },
  {
    "url": "tool/all/index.html",
    "revision": "1d80dde90b47611c39ae93ea03b3abb8"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "efe19987093e9ab874ad24ecc43a3b16"
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
