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
    "revision": "43bd691ec44ee69d0b30bed8085dde2c"
  },
  {
    "url": "assets/css/0.styles.62a3bbe4.css",
    "revision": "68b6392c071a139d900b32e65385b84e"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/Algolia_logo_bg-white.8e0e9838.svg",
    "revision": "8e0e9838589ad42418fe5fa23fa7e9f1"
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
    "url": "assets/js/11.d4fa257b.js",
    "revision": "a868b83e77c31307665422805031ca4d"
  },
  {
    "url": "assets/js/12.b7ea19ab.js",
    "revision": "21a4d8bacb9655966cb07c1bcb2b28dd"
  },
  {
    "url": "assets/js/13.2e4ee7fa.js",
    "revision": "cc788715b7b9dca1a65df272fd249ce8"
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
    "url": "assets/js/17.2e50fc1e.js",
    "revision": "1fe380d8a571fa043be3fc4efe12f399"
  },
  {
    "url": "assets/js/18.a6dec0bd.js",
    "revision": "0763da36b70785d83cb6946c852bbcf5"
  },
  {
    "url": "assets/js/19.933bf8cb.js",
    "revision": "42fd8a2b62f2022ac0f570631b1b6832"
  },
  {
    "url": "assets/js/2.27228e9c.js",
    "revision": "bc218038afa663b634738adf9e0607bd"
  },
  {
    "url": "assets/js/20.a47cd108.js",
    "revision": "ba5672d8a738b2eaa2f138a0122441ca"
  },
  {
    "url": "assets/js/21.c6b343cf.js",
    "revision": "7e3ce034b4137c6d377a5a8691ccef85"
  },
  {
    "url": "assets/js/22.65f1713c.js",
    "revision": "197eac2b251a0b02047e67c9594c90d6"
  },
  {
    "url": "assets/js/23.7ed29054.js",
    "revision": "2dd2bdf681632e90e961b217042095c7"
  },
  {
    "url": "assets/js/24.bd5878ac.js",
    "revision": "a78b315c494e8ad4086a5f77af63a44b"
  },
  {
    "url": "assets/js/25.9b6e1727.js",
    "revision": "4ef1e9aa31fd01d9c5a008d94dead476"
  },
  {
    "url": "assets/js/26.a846367d.js",
    "revision": "b8cf7256cb6fe0b6f70a2bd68b12fa35"
  },
  {
    "url": "assets/js/27.e7b069c8.js",
    "revision": "ac4e080c7acafb128e791036da7f7959"
  },
  {
    "url": "assets/js/28.978e902c.js",
    "revision": "96f131006176fb13b9af6dffa6ae18fe"
  },
  {
    "url": "assets/js/29.8382bd75.js",
    "revision": "a00a69d00dcbed4810cfbe606c11aa80"
  },
  {
    "url": "assets/js/3.6ff22a98.js",
    "revision": "7314cf50ca663dc90a724c900f51bd07"
  },
  {
    "url": "assets/js/30.e7439ff2.js",
    "revision": "c784202b110c8a8f48600f74c1c40e56"
  },
  {
    "url": "assets/js/31.20130a48.js",
    "revision": "7b3ac8c6fcef1dc4d98d6c67a5fb4e4b"
  },
  {
    "url": "assets/js/32.89e0c966.js",
    "revision": "de590a3b70b3e1873f48b11b1fe3f3e4"
  },
  {
    "url": "assets/js/33.e5130455.js",
    "revision": "ec0054b0f17c02889b08507a002ffc77"
  },
  {
    "url": "assets/js/34.e3573dbc.js",
    "revision": "34aa69a66d899819f58413b709bd3f94"
  },
  {
    "url": "assets/js/35.fe05fb87.js",
    "revision": "ade492459161dec6b309aa99cecba862"
  },
  {
    "url": "assets/js/36.d85bb57a.js",
    "revision": "2fa35f7b04dfc2c61d5b7d11795b80db"
  },
  {
    "url": "assets/js/37.c7b7c200.js",
    "revision": "5d1063771116b54a0a51b22cf6cf691d"
  },
  {
    "url": "assets/js/38.15122b58.js",
    "revision": "4918cec12a699003fd1c88cd61bf5fd2"
  },
  {
    "url": "assets/js/39.9e466206.js",
    "revision": "9f36398fa9ec0706a2e075da85a56322"
  },
  {
    "url": "assets/js/4.047eb14e.js",
    "revision": "5a3ba81411bca868d708156f3a4f5358"
  },
  {
    "url": "assets/js/40.79ad4cbf.js",
    "revision": "86ae7fe32fd4cedb2227e2db56a05a03"
  },
  {
    "url": "assets/js/41.767b40de.js",
    "revision": "5010a9ac7a164d255bd43e1637f23f6d"
  },
  {
    "url": "assets/js/42.5f277086.js",
    "revision": "f10d3d8b9650112d4a0e0e512555d9f0"
  },
  {
    "url": "assets/js/5.26dda92e.js",
    "revision": "8c29a26e5fc1e26414333f0808f53c1e"
  },
  {
    "url": "assets/js/6.3b8bf684.js",
    "revision": "50edcdfbba7cfc0caef59e72bb8ff9f7"
  },
  {
    "url": "assets/js/7.f6ae611d.js",
    "revision": "c0d70206d48e75c9002dd9f4f402508a"
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
    "url": "assets/js/app.bdf6bd8e.js",
    "revision": "ade42e2e7290a5bdb03ce1744dfcb009"
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
    "revision": "30005fb33e3243f5d44f6c4589235a18"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "07c1b6557da6f3606f56f450a229b196"
  },
  {
    "url": "game/risk/index.html",
    "revision": "2930228870dfa4b5de963bf6b9ce47f0"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "9cec22b4d6b54e7d17038d3ff1f47197"
  },
  {
    "url": "game/smart/index.html",
    "revision": "93c8d3edd0ba6726cc28959c39fd185b"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "929f59f8721598973087918e1ee03f50"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "0b1cd7889cda61cf2952b6a12a82fde2"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "1e4f89d2a2c5257c9e26e5f330076632"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "beb2b0017fdf4326e0e66b5a7d586bb5"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "e3e558e0f6c158be03e19664457633eb"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "b629b619751b9c9f260db815d6a84b64"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "55d69584a41ce63489a5595a0c0aea76"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "54ff5eb40f07265c30f58a49540914e4"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "c345c95a6eb855b50a6f6631b0a294b7"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "03283fda6e7f5c1b8cded3e07378ab14"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "7c74c866fa679c1d81dd9279bfc38f40"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "4d61716ed5c147480d184054e0635cd1"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "f4d03f1712667992b7c2384df751065b"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "d1bcf3d4db2006dfeca4b8b8706c8319"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "fac95b20e229a50815faf9cf3e13f362"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "632b7bfea4b8ce3ffb4acff8ebcd4c75"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "34659df69f777faa7a1e90dc38df7955"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "7c4ec5525ddd02d416d16b333a119b7a"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "dcb8cdee753da9dbf2225f71cca5ae4b"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "2854a753f806bd2a4222659171cf29eb"
  },
  {
    "url": "img/Algolia_logo_bg-white.svg",
    "revision": "8e0e9838589ad42418fe5fa23fa7e9f1"
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
    "revision": "4642c411c8881db87a7e0646bcf75965"
  },
  {
    "url": "join/index.html",
    "revision": "6c975420f8d50d3892e43390a07caf5c"
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
    "revision": "40fd7e9234606a341adcbb1ce0a15d51"
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
    "revision": "a00b70c432e6cd21213f04a1b281756f"
  },
  {
    "url": "search/index.html",
    "revision": "d8ec7d686296ceef9c68400e532908f9"
  },
  {
    "url": "tool/all/index.html",
    "revision": "1e352e23e93e4313995f9e9c40f8c12f"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "10ae49aa68cbcac8bb2f522cf671bd0c"
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
