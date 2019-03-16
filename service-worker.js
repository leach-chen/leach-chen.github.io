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
    "revision": "173d31e9a75fb0bd338420bc893fa382"
  },
  {
    "url": "assets/css/0.styles.c42705bc.css",
    "revision": "3d7b253234d4e086a606452acd83fb85"
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
    "url": "assets/js/10.2ef50a10.js",
    "revision": "2889ba6ab61452347e430a511e6688a9"
  },
  {
    "url": "assets/js/11.31ccebcf.js",
    "revision": "5543a97b681e6e6e79a6f1b478e17ee9"
  },
  {
    "url": "assets/js/12.264ad393.js",
    "revision": "f854bfca60f58937c4c46053dc324190"
  },
  {
    "url": "assets/js/13.7e7ca649.js",
    "revision": "c2ead8527743e5ac3641f204e782f9c2"
  },
  {
    "url": "assets/js/14.4c6a0e3f.js",
    "revision": "4c2944835cbee870d4c596fd5005cdd8"
  },
  {
    "url": "assets/js/15.00ab0551.js",
    "revision": "5f01b637a899973ab22cfec8a6af2aa4"
  },
  {
    "url": "assets/js/16.10955ca1.js",
    "revision": "82c318c89ec8b5e905b3a4794e305056"
  },
  {
    "url": "assets/js/17.b9a5fef9.js",
    "revision": "5550dd4578dd2a968309ad614fa96d0f"
  },
  {
    "url": "assets/js/18.cfb1fe88.js",
    "revision": "bd48fcff02b5342b062d55040bdad396"
  },
  {
    "url": "assets/js/19.6fd6d751.js",
    "revision": "de072b3118ae15f8e351713895b17d43"
  },
  {
    "url": "assets/js/2.a11602b5.js",
    "revision": "b4299db3e7da314b5def8711d0970499"
  },
  {
    "url": "assets/js/20.00ff0f20.js",
    "revision": "4b0e68108851f0f7e9eb7ff10d5ab026"
  },
  {
    "url": "assets/js/21.851844e1.js",
    "revision": "21cb935bcc8bf8b557a86e69c736b7ba"
  },
  {
    "url": "assets/js/22.1524f739.js",
    "revision": "c60b78ebe5a6d5cf6fd63f77c5f9bf66"
  },
  {
    "url": "assets/js/23.777f6eef.js",
    "revision": "d215d8cc9f2195f5a920c9cb093f1ffc"
  },
  {
    "url": "assets/js/24.d529de81.js",
    "revision": "f50c292a2ee1f59c90f197ffe37954d3"
  },
  {
    "url": "assets/js/25.579574e9.js",
    "revision": "ccc8e9cc8f19f560ac88f04585165430"
  },
  {
    "url": "assets/js/26.10103919.js",
    "revision": "280c9d7e60e69cb4378f1389563d9d26"
  },
  {
    "url": "assets/js/27.0366bb38.js",
    "revision": "25b49dfe34a1267533a9945363e811aa"
  },
  {
    "url": "assets/js/28.416721d9.js",
    "revision": "03db12a3cdd09ebd6abfcafd9a3649ea"
  },
  {
    "url": "assets/js/29.c515aaaf.js",
    "revision": "8da118a56cff3b066e710849f3eeb91a"
  },
  {
    "url": "assets/js/3.aa33bd05.js",
    "revision": "addabd0adc1d7d03eb92f4f037ee96b3"
  },
  {
    "url": "assets/js/30.617d1f07.js",
    "revision": "52035b2c58c9df080e739ce955b8b27d"
  },
  {
    "url": "assets/js/31.e3ebdad2.js",
    "revision": "e217a1631ba187c171cc4155d69a0a81"
  },
  {
    "url": "assets/js/32.7d913e6c.js",
    "revision": "d6a9a5e7037e41316f5ad67a7bd842de"
  },
  {
    "url": "assets/js/33.2332be54.js",
    "revision": "23ee446a958f4ab93f8bd97788703392"
  },
  {
    "url": "assets/js/34.81755db8.js",
    "revision": "d241d267e126e4ad26fa00be6e7fe872"
  },
  {
    "url": "assets/js/35.0b1ae9d7.js",
    "revision": "3d838b29062fa13000f1dced4fc685c4"
  },
  {
    "url": "assets/js/36.d85ca285.js",
    "revision": "80d4caf3ea646a8a5b2c82087ed5fad9"
  },
  {
    "url": "assets/js/4.494d43c6.js",
    "revision": "46dd92e8e33b525ba6301f6486ea0b04"
  },
  {
    "url": "assets/js/5.ba441236.js",
    "revision": "759d23f10812d017b96666d54913d536"
  },
  {
    "url": "assets/js/6.efb164a3.js",
    "revision": "ebb6ad1d36458ef4ebeaf3e224d1821c"
  },
  {
    "url": "assets/js/7.42da066c.js",
    "revision": "8684ddfb27fa2dc30385fa837da9bee5"
  },
  {
    "url": "assets/js/8.5db7c189.js",
    "revision": "d88e47e654d6ec0b65734e04632eab0a"
  },
  {
    "url": "assets/js/9.acfd5637.js",
    "revision": "aebb73614f1500372be9f5c1b8277cfb"
  },
  {
    "url": "assets/js/app.542cdf1c.js",
    "revision": "818f02612991b74c96cdcc9ddc6a1474"
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
    "revision": "bc316969420467fa25acbb0adb780de2"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "0b251bd33d7f12973a29e6c88988019f"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "0eb61882b65f7a5c45cd4086eac7ce81"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "0029113388cd4edd704b088fc88124ab"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "bc650d74b6976a40d6b74fbb705292d5"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "4f8dfa4b855ab1af704af75985cb23ae"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "cd1d0b2fc0d33faecd4a2650c802e218"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "db17af901d6e8c7c8e31c64bb99f31ff"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "67634303956358d888ff3d4643dd7229"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "3eea7b1a5721a8f949cde40dd3929c8f"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "b98b6f0a2bdaea63e04b50993519eb8e"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "8d0c75e6896bf71998bca2991e481a2a"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "629f33daa3e29d75249f78da2002afd9"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "f1bf7f0a5c0a340ce759ca8fbe43b148"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "18d62f2877aa08c0f114ca05c86594f2"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "e2ac6d09567a19c6dc499df751105c9f"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "7d6c645422ca2123b44bfc3ef6a48363"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "4d27c8a2a00a72ad8d0ace5f96b9d201"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "46610b6575ac0b2dbe392039cd27dd1a"
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
    "revision": "034d80b6c02d76f53bf70da04af52fc1"
  },
  {
    "url": "join/index.html",
    "revision": "2679db88cfe6b4443cefcf9535aa4c0a"
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
    "revision": "2eabbd1d2256ba4e0ec107a3affaf21e"
  },
  {
    "url": "search/index.html",
    "revision": "96a832948e8b37dc4e28be91f6872329"
  },
  {
    "url": "tool/all/index.html",
    "revision": "448f238e899f753dd4911622d64eb636"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "f576427c9cc5f3c79a7969df2a05e8be"
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
