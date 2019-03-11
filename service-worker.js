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
    "revision": "425a9688bad6574e11e11e1d0b01409a"
  },
  {
    "url": "assets/css/0.styles.e1e68f44.css",
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
    "url": "assets/js/10.7d6dc629.js",
    "revision": "f1aae6e69ce499807eea053892305222"
  },
  {
    "url": "assets/js/11.e13375be.js",
    "revision": "5bfc3037c8037226f3743a555098b381"
  },
  {
    "url": "assets/js/12.5f6b863a.js",
    "revision": "de0bf10eb5433ad19d48b39468649acd"
  },
  {
    "url": "assets/js/13.3ea040f5.js",
    "revision": "1c089af48432ded5b1e51e07dc24abbf"
  },
  {
    "url": "assets/js/14.2ba4c00a.js",
    "revision": "9aa9d192ab30088635536b543fbd26de"
  },
  {
    "url": "assets/js/15.a79920e1.js",
    "revision": "8b324711f525d7e6f568723baaf24c8d"
  },
  {
    "url": "assets/js/16.bfae092a.js",
    "revision": "c2c645811228bff11bb653966f764657"
  },
  {
    "url": "assets/js/17.fcc8c45f.js",
    "revision": "58d757151eb8b60eeba9c631b790202b"
  },
  {
    "url": "assets/js/18.54478857.js",
    "revision": "e620598c84c7b56f8c388f4bd8f889af"
  },
  {
    "url": "assets/js/19.4249e4bc.js",
    "revision": "662c23191b6ae8e1dfb696618c21dbd4"
  },
  {
    "url": "assets/js/2.890b35fd.js",
    "revision": "00935717561073117ed10242b3be089f"
  },
  {
    "url": "assets/js/20.7257509d.js",
    "revision": "e62860d80bed4f6c8af933a08c4447eb"
  },
  {
    "url": "assets/js/21.5c0ad899.js",
    "revision": "341cc977232739f5879fd547ad972c70"
  },
  {
    "url": "assets/js/22.df32623f.js",
    "revision": "862e8efc1c463b58a23defe3f167887c"
  },
  {
    "url": "assets/js/23.64f26084.js",
    "revision": "3dd49b42134ccab920f1f532c6684037"
  },
  {
    "url": "assets/js/24.59c1aac6.js",
    "revision": "31719f2fcebf55104bec9bd027d94335"
  },
  {
    "url": "assets/js/25.752f75ff.js",
    "revision": "ef94f5f05d1fb56092dc3b799b6d7b7c"
  },
  {
    "url": "assets/js/26.e1c05983.js",
    "revision": "d84d9ea665ce5d9a1d7ba070e92b4c72"
  },
  {
    "url": "assets/js/27.5b287ea4.js",
    "revision": "e05a4a98c33c51cdc92fa6f831a7e10f"
  },
  {
    "url": "assets/js/28.f1971df9.js",
    "revision": "d4114a3c24d8b01f039c963d287ea141"
  },
  {
    "url": "assets/js/29.3aba06ab.js",
    "revision": "04bd5c7922b8b4a5bb45c68731d67127"
  },
  {
    "url": "assets/js/3.55e051ef.js",
    "revision": "a989dc09facadaa287c245975249cdb2"
  },
  {
    "url": "assets/js/30.7536c60b.js",
    "revision": "ec9811d9a460a59888c1971a16a276e2"
  },
  {
    "url": "assets/js/31.20d409a2.js",
    "revision": "5d1a78d571c0fa22fe23f41d9fde7026"
  },
  {
    "url": "assets/js/32.705b4d69.js",
    "revision": "7c4570bea9cb615e45e8ad15a3f945d8"
  },
  {
    "url": "assets/js/4.0289e5a4.js",
    "revision": "cc340a6fba1387844c77c3f019e60062"
  },
  {
    "url": "assets/js/5.0e7a3959.js",
    "revision": "cb5f1aaf7ab1b79a6d969ab6e7f6d23d"
  },
  {
    "url": "assets/js/6.067b5211.js",
    "revision": "2018b222fe104faf5ee56ef8cdb9254e"
  },
  {
    "url": "assets/js/7.c207290d.js",
    "revision": "1fff9be867fdb872ab36f92f4b744a60"
  },
  {
    "url": "assets/js/8.3cf4a8de.js",
    "revision": "6109b4244ce74f3471a9d9218ce9d5e6"
  },
  {
    "url": "assets/js/9.8516c470.js",
    "revision": "e2056e6ec540430f1c5bbfda543ac459"
  },
  {
    "url": "assets/js/app.21ad7155.js",
    "revision": "42ee25820c9fc1d28a07f18d95b90d42"
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
    "revision": "87370477864e9fc0a7fa60f01b684262"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "00daf43ae186c55444860d92f6ab8209"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "2e5679e863ad6b1a280c5dc4608ab034"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "648fcddfbb45173ab3b4c0eb215c2433"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "300a38328b290cf194521bcd2559ac59"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "95c025b13ea3105c5af7703f34f2fc66"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "db932b8673e3935a541635187c16ebcb"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "04b33647c1bfb681b1d8883d896c8f64"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "1c358d3789c9072eb3f2b267abf810e9"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "0a7f84219a99b5d03fa650949f41a11e"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "d08be9c95ea95270cbbc7d2d1a70563d"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "dbde8a3f356992e56e3410afde03b496"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "f60ba608f925d098c523a96adf3cf521"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "24a06846cd925a506e05f8882d1d00fe"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "19dbc904bdaeb92cc3fe7949598a8168"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "920abf5d68ed61231a7148a94bf7ded2"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "31f786e2233ef6486488d1f566fa41b8"
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
    "revision": "589a917cbb6332765eaecda832f30bbb"
  },
  {
    "url": "join/index.html",
    "revision": "f0b0f34dbc0383cc4d0a22d2696f257a"
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
    "revision": "9f14e9f71239f3f9922cd0cb30c020fa"
  },
  {
    "url": "tool/all/index.html",
    "revision": "cf89af714d97acc22855a1863dc8bc28"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "4759117f64a966c073f7df097a8a176f"
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
