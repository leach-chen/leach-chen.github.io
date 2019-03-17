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
    "revision": "3af315653e8519c21de5f4d131a16532"
  },
  {
    "url": "assets/css/0.styles.61f85eec.css",
    "revision": "0057ae0b1d350bf101b42846b9eb909d"
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
    "url": "assets/js/10.1ad4be63.js",
    "revision": "825c8ceb0a0553c2136013fc9728b917"
  },
  {
    "url": "assets/js/11.7c345dbe.js",
    "revision": "8a6820b5fd87c709899659b24f052f3a"
  },
  {
    "url": "assets/js/12.55e203b6.js",
    "revision": "5ebf1f0b0e2dc2da527ef1b6563b0c63"
  },
  {
    "url": "assets/js/13.68204996.js",
    "revision": "3c5e209640c6a997e0cd1ac734ba41b0"
  },
  {
    "url": "assets/js/14.49f183c9.js",
    "revision": "834f94a93afa44b3704ff7bd3df04794"
  },
  {
    "url": "assets/js/15.86a65161.js",
    "revision": "8b8d5c92440fceb7a46269ec150812af"
  },
  {
    "url": "assets/js/16.3203710d.js",
    "revision": "5f3c0ae9ed3669d6347e8455072f81cf"
  },
  {
    "url": "assets/js/17.c65dbdb8.js",
    "revision": "80c6024b6db8ac7e249b8abb76c99fba"
  },
  {
    "url": "assets/js/18.b1d0537e.js",
    "revision": "9750c12829472ac5b51fa009764bba3b"
  },
  {
    "url": "assets/js/19.98be5e9a.js",
    "revision": "8583d0bcfef0e9f72c2ba4c5e1c1deeb"
  },
  {
    "url": "assets/js/2.02f2f5c5.js",
    "revision": "14d5544ea28a1df39959bb69ca7bbbd1"
  },
  {
    "url": "assets/js/20.69e561cb.js",
    "revision": "38896c832ac4d2488a0bf4e5af2ad2ae"
  },
  {
    "url": "assets/js/21.26d8ec3e.js",
    "revision": "2ffb3b257dd0108907736704960410da"
  },
  {
    "url": "assets/js/22.1b906344.js",
    "revision": "8d6bd09ce3c8743f598cde34d6d1fdd2"
  },
  {
    "url": "assets/js/23.69274730.js",
    "revision": "6f331ef67ab8a44a1a25c28d2a2b3069"
  },
  {
    "url": "assets/js/24.d402861f.js",
    "revision": "f3deb78ef347ceee5d301c3e1a6752f0"
  },
  {
    "url": "assets/js/25.ada4bc52.js",
    "revision": "f899251c60d97ccc77d2ed0c5d1b8e99"
  },
  {
    "url": "assets/js/26.809ccc77.js",
    "revision": "3a1dcd10caa122edeea3be236ac36853"
  },
  {
    "url": "assets/js/27.d2498d7d.js",
    "revision": "75d6f908987060d3e1695417dca47b27"
  },
  {
    "url": "assets/js/28.9c63079d.js",
    "revision": "2ee674a62b20b427b913d804c8acfee2"
  },
  {
    "url": "assets/js/29.c2d02628.js",
    "revision": "55c92c2de258a0122ceb1be091e7b625"
  },
  {
    "url": "assets/js/3.c540935d.js",
    "revision": "03929dc1b81ef057f1f1cad8e9fe9b2f"
  },
  {
    "url": "assets/js/30.d79deb4d.js",
    "revision": "d6228aac00fd83114305382d7655f7ee"
  },
  {
    "url": "assets/js/31.ece9c776.js",
    "revision": "5de18fef0bd733695edccb46a25e8637"
  },
  {
    "url": "assets/js/32.b1f19a57.js",
    "revision": "7d304f3cdf5bd6c603d01cd5ddc8d4ae"
  },
  {
    "url": "assets/js/33.e1e67784.js",
    "revision": "cb59661342cd1d3ee90e0c9ec113f351"
  },
  {
    "url": "assets/js/34.43535fb3.js",
    "revision": "742d3e80e40c2ecc405a2265fe67b0ee"
  },
  {
    "url": "assets/js/35.17ee8f66.js",
    "revision": "28bb02ad090b996b10ba22596a81900a"
  },
  {
    "url": "assets/js/36.6b2b22fe.js",
    "revision": "e33f1f4dc024a4b28af5d38b58cc84c4"
  },
  {
    "url": "assets/js/4.435f6df2.js",
    "revision": "c3e871695c0dbab9bd679f883b73f04d"
  },
  {
    "url": "assets/js/5.7e73f645.js",
    "revision": "050a3d65a55e8af6808c7898a49d13d9"
  },
  {
    "url": "assets/js/6.76afcb79.js",
    "revision": "315eff155730fcc6025c8dc1e1b644e7"
  },
  {
    "url": "assets/js/7.620e1bf1.js",
    "revision": "262d5de8257196df905b59efb4c72570"
  },
  {
    "url": "assets/js/8.f7e1e025.js",
    "revision": "c4a801156ca9771c5f7b767d221f68dd"
  },
  {
    "url": "assets/js/9.001833f4.js",
    "revision": "4f0dae6c3c6567117c78376c10e3307e"
  },
  {
    "url": "assets/js/app.1522ca34.js",
    "revision": "0e8d95bdfd85b6b2f3e78a1926f1cbaf"
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
    "revision": "5678b4dd11bb8c260794344e1efedd92"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "305a3766f8f0be1caf5e1f384e69774e"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "1597e9feaa52f4d699df438a5e4361d1"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "4e57521ea66b8df2d2164380aee6f149"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "599aa9d0a71c990033e3ad6c97dda082"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "c4f6c4162014ab672ff0bbc5e084087a"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "3aa2031eefc1638b0c351a17cd873126"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "84b728b1d0c75f6d49ba2c63dc073b5a"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "75a586198c6cd386fc7cd3f15e26813f"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "f3734be12e22b8e60933db8e978641bf"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "c2b6f23370e2bf295b9483bb7d305ab5"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "f4ed31ffba1cfb3ffdccf6d7ba785c7c"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "b2d7dc91d83d5b853327c672dddc7e45"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "34805322f0c56ac0c2fb57e7b020f59b"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "869ebcf865bcb4c6bc639bf858d10684"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "2b3c3d95c888e091ec530a0eb97c3516"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "2cc8d2100d639d7e09f06badf92bb3db"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "fd013bf86a46827b595366e342acd16f"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "cfe1944ca6cb7d02e070e79359194043"
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
    "revision": "a00ca98e5bdf732cc5cb9a2c579c633e"
  },
  {
    "url": "join/index.html",
    "revision": "69254564eccf7f8a1a2ee3518385d7b9"
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
    "revision": "15d1f5032fad2275d3f5263ec863328f"
  },
  {
    "url": "search/index.html",
    "revision": "020f6f9271a78da9318bc316701e1f39"
  },
  {
    "url": "tool/all/index.html",
    "revision": "5ff8830293513b955a01b7d38a04e1a3"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "8e7f71f07a6cfcbc5cf5892f7235f25e"
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
