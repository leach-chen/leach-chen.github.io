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
    "revision": "e137907de9cc7df68ffaad8ae8fdcd03"
  },
  {
    "url": "assets/css/0.styles.68b097ca.css",
    "revision": "3e8c29af8e623c8d65d666a0e1b937ac"
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
    "url": "assets/js/11.7d85da08.js",
    "revision": "8db6058172df2487c0751d2d839e5ca8"
  },
  {
    "url": "assets/js/12.859d1cd0.js",
    "revision": "3f150b3c1ee6a7890a7eb8bfb233c888"
  },
  {
    "url": "assets/js/13.d2ebb053.js",
    "revision": "bcb1b9dd034b5e071dd65d496d5bf236"
  },
  {
    "url": "assets/js/14.c4b31df5.js",
    "revision": "04925581b0e8d91d6593fe7cd04b5d80"
  },
  {
    "url": "assets/js/15.2e17baaf.js",
    "revision": "3422037eea5c9eeab3bb82425ce5863e"
  },
  {
    "url": "assets/js/16.bfac7bc0.js",
    "revision": "bc8e7470ce450e98dc371b97a22b0fc1"
  },
  {
    "url": "assets/js/17.8fa1f7c8.js",
    "revision": "f40a96419eb0f307088f5e6f618088f4"
  },
  {
    "url": "assets/js/18.a6dec0bd.js",
    "revision": "0763da36b70785d83cb6946c852bbcf5"
  },
  {
    "url": "assets/js/19.50cbc2ef.js",
    "revision": "8635ea25efe016ec1db37fd10cd63595"
  },
  {
    "url": "assets/js/2.e07642db.js",
    "revision": "7781c363ae7663834f7ab80ed538a3ea"
  },
  {
    "url": "assets/js/20.b87f4118.js",
    "revision": "4a96c5407d398690257c8730895d444a"
  },
  {
    "url": "assets/js/21.bdb56c3d.js",
    "revision": "c161eeb59838148231f1cc84354eb371"
  },
  {
    "url": "assets/js/22.41ce0c45.js",
    "revision": "55d16bdf0fbc1b6b6ff623bfc085ee36"
  },
  {
    "url": "assets/js/23.3eb4ac0d.js",
    "revision": "142740ff1e9a597cfeeec5d870194efa"
  },
  {
    "url": "assets/js/24.e81ece45.js",
    "revision": "fc54dac4f19c5da3c90a994659befc54"
  },
  {
    "url": "assets/js/25.26622c7e.js",
    "revision": "596f2dee06f9819a3d5f761abdeb409a"
  },
  {
    "url": "assets/js/26.86db83b1.js",
    "revision": "40f432f9f665edcea1a81c2f1e5cae61"
  },
  {
    "url": "assets/js/27.15dbf77b.js",
    "revision": "3798099a961e413ee87785be8e2cdbbe"
  },
  {
    "url": "assets/js/28.2849dd33.js",
    "revision": "37b49bbe7f9c0e78caf2906ad0bd3395"
  },
  {
    "url": "assets/js/29.d27c8536.js",
    "revision": "8f1ddaec94a57d7548ec46c3c0ba9388"
  },
  {
    "url": "assets/js/3.c0e9081b.js",
    "revision": "59d6c85d60c059ad797ba34c9a19124d"
  },
  {
    "url": "assets/js/30.ece19cae.js",
    "revision": "ae93521d5f459bf95a317594af7f9f8c"
  },
  {
    "url": "assets/js/31.ad00267b.js",
    "revision": "8d3f75671c00df2ae8aaa5e26f3162b8"
  },
  {
    "url": "assets/js/32.89e0c966.js",
    "revision": "de590a3b70b3e1873f48b11b1fe3f3e4"
  },
  {
    "url": "assets/js/33.88915404.js",
    "revision": "5ea891ea28c62a0176a058af2776102f"
  },
  {
    "url": "assets/js/34.3ea04921.js",
    "revision": "4f5784a999a5e0a468a6573127010d8e"
  },
  {
    "url": "assets/js/35.fe05fb87.js",
    "revision": "ade492459161dec6b309aa99cecba862"
  },
  {
    "url": "assets/js/36.2762dafc.js",
    "revision": "fd927efcba23f26912046fc2bdcc3541"
  },
  {
    "url": "assets/js/37.99cb59ff.js",
    "revision": "6609fe2096200ec7987ec0dacf0df5aa"
  },
  {
    "url": "assets/js/38.3e4e1d70.js",
    "revision": "ae7cbc2a1c802c32fd1a4fd5209708cc"
  },
  {
    "url": "assets/js/39.bb6e4dbc.js",
    "revision": "037a7bf5b8f47d866ae75269af933134"
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
    "url": "assets/js/41.d45b3441.js",
    "revision": "fe61b11dd081ed1ae0dcef0717353c92"
  },
  {
    "url": "assets/js/42.5f277086.js",
    "revision": "f10d3d8b9650112d4a0e0e512555d9f0"
  },
  {
    "url": "assets/js/5.8292ec5e.js",
    "revision": "ca941cdeffd57fbaeb055593e7468625"
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
    "url": "assets/js/app.f056e26e.js",
    "revision": "6991c7a302761224f41459eadc2868e5"
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
    "revision": "e5bf42d388a5074a8e5159f1ba1c9bf2"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "5cb71e73448346227b2b3f28600ea23a"
  },
  {
    "url": "game/risk/index.html",
    "revision": "da2b0f203006c36b76ca3709b5439e60"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "eb3f7030de096e741a2c402a8eff0d49"
  },
  {
    "url": "game/smart/index.html",
    "revision": "dff50846a066a4f55aa20312e17bccf7"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "0e102e2023115da587a429ac6a2822bf"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "84338c36707d22ab2e9f490981163aed"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "06226ddb7be72b3aea898001326e756f"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "f936fa3e329c8380bde16fc359e3a075"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "7ac7cc631de99794d632088c9ef9e49a"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "3862766ce3f307f31ecf853f02efd4af"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "94c59715d2c74119de2da238fbfffe67"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "f7cce7e6019c4f676e3c1a91a08c6fb1"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "76d4301bc3d2d38f3c5c1024c56cb248"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "4fb1f4d54551b4e65d1727c6ca050935"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "d98875188fdcb63e7c2e077f3a29c3bc"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "7e114f78bb0e941a1ca8aa441fd31378"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "bbaa4e47f9549490a61a291cb0c9d8d9"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "6dae82f64665b84b2335f9a1a514f2be"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "138b585fd58b36fd31befa52b5ea95e4"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "b6955887171f8398be8d31660164615c"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "9856f5e4322b69b8bfc2f6834bfcbf63"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "a38fd5b1030dc44c41ac915e9f636947"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "23d5e7769b688409e1ab7b351fd3e3d9"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "8f89fedb5acffa18c4b0020680e48c89"
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
    "revision": "aa85770b7895f576516c55653647e757"
  },
  {
    "url": "join/index.html",
    "revision": "c05cf3b4073fe9d60a34f5898bc9f90a"
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
    "revision": "c8c1848ff45f26ff3513612cc72dbb8e"
  },
  {
    "url": "search/index.html",
    "revision": "35a41e257c99f372a921ad2ff990f05b"
  },
  {
    "url": "tool/all/index.html",
    "revision": "418e0deaeb56a12e36cdaf04f45262ae"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "2d063c871445aa03f969a90de89bd164"
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
