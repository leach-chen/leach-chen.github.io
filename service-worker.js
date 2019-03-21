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
    "revision": "e08716752725d5b7f75636a9f8a9585d"
  },
  {
    "url": "assets/css/0.styles.40771158.css",
    "revision": "81b2c632c617fcceff5ea31d10f29468"
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
    "url": "assets/js/11.86570064.js",
    "revision": "9ce6a1f5459effcc89c14dfbce589afd"
  },
  {
    "url": "assets/js/12.859d1cd0.js",
    "revision": "3f150b3c1ee6a7890a7eb8bfb233c888"
  },
  {
    "url": "assets/js/13.aa311b5b.js",
    "revision": "75e00d25c3c4213c54a74734af6bb7cf"
  },
  {
    "url": "assets/js/14.34a6bde1.js",
    "revision": "cf2cb05887e1ca7a7898117aed4bd18e"
  },
  {
    "url": "assets/js/15.3c1c4aff.js",
    "revision": "c06787abcaba8f670842b573244f8ecc"
  },
  {
    "url": "assets/js/16.c30d4d86.js",
    "revision": "0224ec8b3a8caae002dbb8a8ae87bfee"
  },
  {
    "url": "assets/js/17.34789c4e.js",
    "revision": "0f0710647c64c6ac297b257510453968"
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
    "url": "assets/js/20.47d0932d.js",
    "revision": "98fb0e880bd604c1b1d8a91f86eae384"
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
    "url": "assets/js/23.1495e26c.js",
    "revision": "c5ebab1bf3c438b201b24258f6cd1ed4"
  },
  {
    "url": "assets/js/24.bd5878ac.js",
    "revision": "a78b315c494e8ad4086a5f77af63a44b"
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
    "url": "assets/js/29.9c7b16dc.js",
    "revision": "a773da8b1b3b055129bc08a594b768c2"
  },
  {
    "url": "assets/js/3.c0e9081b.js",
    "revision": "59d6c85d60c059ad797ba34c9a19124d"
  },
  {
    "url": "assets/js/30.e7439ff2.js",
    "revision": "c784202b110c8a8f48600f74c1c40e56"
  },
  {
    "url": "assets/js/31.ba5e58c8.js",
    "revision": "88244caac2711e0ebb07181cc41d8024"
  },
  {
    "url": "assets/js/32.a3665df5.js",
    "revision": "e0f88631210f3e904eba8d794683a69a"
  },
  {
    "url": "assets/js/33.e5130455.js",
    "revision": "ec0054b0f17c02889b08507a002ffc77"
  },
  {
    "url": "assets/js/34.c40f3b5b.js",
    "revision": "3d2f38dda70b2d7c9924ded3f356f926"
  },
  {
    "url": "assets/js/35.375e7dfb.js",
    "revision": "493ddab6581fbbb9a25e3db72340b0c7"
  },
  {
    "url": "assets/js/36.974b57e1.js",
    "revision": "c77f76703e3501fa2fddfd99c50f7246"
  },
  {
    "url": "assets/js/37.6a879c7d.js",
    "revision": "6ad9c57b9391e475d126498ee5ca9f67"
  },
  {
    "url": "assets/js/38.6934cec3.js",
    "revision": "0f99ace1507b6a0a1516fe7d56fc10da"
  },
  {
    "url": "assets/js/39.acee5553.js",
    "revision": "f732be6b2701fea943dc33e3e5fef8b0"
  },
  {
    "url": "assets/js/4.dbf62ca4.js",
    "revision": "b5c46557e60a1b162a56aa97b632c88a"
  },
  {
    "url": "assets/js/40.86c855f6.js",
    "revision": "e06f6e04c49cd1a42e2ee08e2236539d"
  },
  {
    "url": "assets/js/41.5d9e8b0f.js",
    "revision": "c1de251759895f1d9e6759366e245908"
  },
  {
    "url": "assets/js/42.5f277086.js",
    "revision": "f10d3d8b9650112d4a0e0e512555d9f0"
  },
  {
    "url": "assets/js/5.bf23bbc8.js",
    "revision": "e2f56a372f9e10f7a0c39d22e28b777f"
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
    "url": "assets/js/app.774a6f48.js",
    "revision": "3026dce02e6e18577afb053f5d995ab3"
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
    "revision": "c14d4f6422993ed269e0e20d1d7cff49"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "c438b53d87bbfacf8167c3c1646dfa4e"
  },
  {
    "url": "game/risk/index.html",
    "revision": "d934f64f4fbb20ccbe19d5d89b3660b3"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "6b043fe98b44ea435ef4f06f68b58e13"
  },
  {
    "url": "game/smart/index.html",
    "revision": "e7fdc8a00d281f30c01b257fa7cb262f"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "2eef5b0d280b9824cdeb3cc311e6e20f"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "8c2fd1ecafa44565be18176acc8bce15"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "c660649374d05caf955789ddfae86008"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "88b7e48fbc3edaee6022b17dc174f670"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "2ec2512dc7caa52b758358e7c9b05318"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "94378a14d9d85ccf9701ae6de0e3a1f8"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "491f95305211b2ffbae5bec799fb1e88"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "274203a8110c40c6a62aea5ceea7fcb8"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "c8d5fca5d891c38123d0e5b2a4b3e989"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "ab774782de57ddca2c4ea6526b9e9b31"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "ca9159b8d2cf9ea8e426eccbdbb62d29"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "54fe402538c53e72658f82bbae3d3730"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "0cbb8d9ba72a25766d78ee766c9af790"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "cb438543770e9da536b31bf5df75fcb8"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "1c9be0f4a7ebaaa1ebe34f26daf1c8ca"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "fbe1762f935e4fe11c55b93b80b289d4"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "b3546a39ef306735be1386890cc659e0"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "6133c1d19138a44fac50f91f04ec92f6"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "062d8e1a4ea23a0e7f4c203d2921c6e4"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "0768a119b907eceb3ab09937a66aafe0"
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
    "revision": "721c2f21b2b2abef6d9a6a1aaf9545cb"
  },
  {
    "url": "join/index.html",
    "revision": "98cbac6f889f737c915b0a1f7ede8e30"
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
    "revision": "d56319970294afd8af775b7c42849171"
  },
  {
    "url": "search/index.html",
    "revision": "24e83ddb0ad25474262631900c374b84"
  },
  {
    "url": "tool/all/index.html",
    "revision": "f6c9ef7ddf969df3d78f54d7b78afb2d"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "da1f2e3d92c585e6dcadcae3646b2c6e"
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
