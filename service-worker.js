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
    "revision": "0d1e7acf055322033da2f53ed85c21b0"
  },
  {
    "url": "assets/css/0.styles.fef76381.css",
    "revision": "8c1a2ac783eb7be37853a1aa4ef03b44"
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
    "url": "assets/js/11.81a1e186.js",
    "revision": "b0ce150dd68b89135aa8a57300fad9ff"
  },
  {
    "url": "assets/js/12.043c41a8.js",
    "revision": "398e39bba7b2b1e0ed1d6986720e6595"
  },
  {
    "url": "assets/js/13.2e4ee7fa.js",
    "revision": "cc788715b7b9dca1a65df272fd249ce8"
  },
  {
    "url": "assets/js/14.6b13827f.js",
    "revision": "3b7544b83908a368ccda5fd8572ce52c"
  },
  {
    "url": "assets/js/15.2e17baaf.js",
    "revision": "3422037eea5c9eeab3bb82425ce5863e"
  },
  {
    "url": "assets/js/16.c30d4d86.js",
    "revision": "0224ec8b3a8caae002dbb8a8ae87bfee"
  },
  {
    "url": "assets/js/17.fb471421.js",
    "revision": "26704d2a61cd950c0bc6f9ecb252cc8f"
  },
  {
    "url": "assets/js/18.2578ce64.js",
    "revision": "714fed70428e60791f7e75a5ee69911a"
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
    "url": "assets/js/21.2cc1524f.js",
    "revision": "76ac45c2a3712d3209091d04484e420b"
  },
  {
    "url": "assets/js/22.41ce0c45.js",
    "revision": "55d16bdf0fbc1b6b6ff623bfc085ee36"
  },
  {
    "url": "assets/js/23.1835f94c.js",
    "revision": "eb6b101e93809f5514370ec65d84deb0"
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
    "url": "assets/js/28.be1784c3.js",
    "revision": "c578d02c87d2b0ca40bad8b0a3842f56"
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
    "url": "assets/js/33.ec1fb29c.js",
    "revision": "55d214458d97065814eccbc8c9ff5f36"
  },
  {
    "url": "assets/js/34.decb5d06.js",
    "revision": "1fb6a8f0c97798c6d0ea0af5b4cf52a2"
  },
  {
    "url": "assets/js/35.fe4f172e.js",
    "revision": "c9832ee6582875cfa1f19a3f2eb970e9"
  },
  {
    "url": "assets/js/36.974b57e1.js",
    "revision": "c77f76703e3501fa2fddfd99c50f7246"
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
    "url": "assets/js/40.c81129ea.js",
    "revision": "61562df484ba72e65967dd70cbb73b2b"
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
    "url": "assets/js/5.26f24c0a.js",
    "revision": "9905c0e759165c9db5511d81ff01d745"
  },
  {
    "url": "assets/js/6.b8e50c5f.js",
    "revision": "e0e35ea616d221a8aef6ae5e4f29920e"
  },
  {
    "url": "assets/js/7.72ea5456.js",
    "revision": "6313993096d14a1dd337717c4dfdf6b7"
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
    "url": "assets/js/app.5163267e.js",
    "revision": "264691d3dc5557f120e67e206cf0570a"
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
    "revision": "3b3aeb2cbba5865b1da0a2209978fd34"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "2414983ccecf3fd03f044c9bbad0ba8e"
  },
  {
    "url": "game/risk/index.html",
    "revision": "c5809fa6f11bf7e586d185deac273a76"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "3727b69630b7434c7ec01fc5aa10d253"
  },
  {
    "url": "game/smart/index.html",
    "revision": "b0534efb9b50db53e7bfa526d3f3bc14"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "811a37d622d8f37e1db3f45770a7bff0"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "131420676ce731b63df8b0da8431b49e"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "14f62765421f5febe6a29d4a01697865"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "62b5ba53c171bb3f01143484378227fb"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "29fe8456cb2419ab7eb503a7cd2e51d0"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "c315aeaf27a6c2c76abe492bd82529c6"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "39d7c822faf1b81fba8a9c66f9595c95"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "52d88f653c979c03f25d48cdfa67a8e7"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "0b56ca43cc8ff8a3b1ab50e280630575"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "490c33e64dbcd94b180cab221e430ce4"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "e02ce1b18f51b8f51cc4a1bc6f921646"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "80d6f843bb578a233eedee7eb3301d72"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "516eb253434219e51f797db2abd08947"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "17d6bc915dcd24a5e0ff623d998fdb97"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "b0e1de862d4a71a37c01b4f7ec1c434b"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "0fcd1547ec2ffeca1bf4893475453bc2"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "8af07b201eb834b3c4ca9f5455c20440"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "b56d64a544187df70f22b2ad282cd0a8"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "283bd1f009297c33b7a63c8d8ef1e920"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "56a6e542dd1881be607b2eee2fadaae8"
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
    "revision": "908d0fbd99e1a2ff9d3dfb91c58def5d"
  },
  {
    "url": "join/index.html",
    "revision": "0cda38bc08fe768fb8031a117adb4e84"
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
    "revision": "bfc5d3d48fc69588fdd684a98b3d1a6c"
  },
  {
    "url": "search/index.html",
    "revision": "891a2cc064c29ce29b41a7288e75cfc7"
  },
  {
    "url": "tool/all/index.html",
    "revision": "74ca44a7e572659bba311d84fed13b94"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "b5293d9cac4bd774234f8ece208b9ca7"
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
