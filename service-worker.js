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
    "revision": "74ddf248c62a664f4c5600dc7762f234"
  },
  {
    "url": "assets/css/0.styles.d62380e1.css",
    "revision": "3181853282ed971233cab14a13015e97"
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
    "url": "assets/js/10.7b592c9b.js",
    "revision": "34a6687c4531d56ad40029d2e61300e5"
  },
  {
    "url": "assets/js/11.7699dbf2.js",
    "revision": "41299c1f3a6c601a79e5d41416fcaaaf"
  },
  {
    "url": "assets/js/12.7237f32b.js",
    "revision": "356ce4969c3de88fa44a55e7936c8648"
  },
  {
    "url": "assets/js/13.ca022c7b.js",
    "revision": "7ba042cb97652f5b04563456ef24030d"
  },
  {
    "url": "assets/js/14.9a92b2bd.js",
    "revision": "6ebf5d628929bc364316c53dac68f61a"
  },
  {
    "url": "assets/js/15.cc088ce3.js",
    "revision": "5bc130fcf604d81ef5d52d4d46244682"
  },
  {
    "url": "assets/js/16.7525e2e6.js",
    "revision": "5a846a9fc98eca3df2e916df0f7d01f0"
  },
  {
    "url": "assets/js/17.cfa58144.js",
    "revision": "b42d6fd1e8394eaea60fad3081098861"
  },
  {
    "url": "assets/js/18.f5515bd0.js",
    "revision": "88084962d01d01053fa0bb51d8f6db6a"
  },
  {
    "url": "assets/js/19.e75a5309.js",
    "revision": "7191615c4973db23332b9e29d4bddee0"
  },
  {
    "url": "assets/js/2.7cf1fb52.js",
    "revision": "aeb0f0a5e6ef2704594e5aa0c07ef9f8"
  },
  {
    "url": "assets/js/20.73285a0a.js",
    "revision": "bc4d1c5e6d620ccd543e89e0ecf1ef7c"
  },
  {
    "url": "assets/js/21.15472611.js",
    "revision": "d6cc04d305cb8990577ecf36ff64ef71"
  },
  {
    "url": "assets/js/22.31782185.js",
    "revision": "b6ee64f66eeb660dc61a5d73964cfe81"
  },
  {
    "url": "assets/js/23.623e98e8.js",
    "revision": "6cff1d308ee834b0fbd36bcd03ab2a0e"
  },
  {
    "url": "assets/js/24.cb1e7080.js",
    "revision": "1c165e1f2e29820259a517277055fe9e"
  },
  {
    "url": "assets/js/25.51997ed5.js",
    "revision": "8080783679d6d7fc0f4b1312646c8e18"
  },
  {
    "url": "assets/js/26.ade44f5c.js",
    "revision": "7354d1b8ae43eeb600428f7c43bc60c4"
  },
  {
    "url": "assets/js/27.62e163a4.js",
    "revision": "8f571d2fe84c7e9716920820fcf04e5d"
  },
  {
    "url": "assets/js/28.aea9c3f0.js",
    "revision": "c2f363e258cf39a37ea365d5d2c7d2a0"
  },
  {
    "url": "assets/js/29.17340e59.js",
    "revision": "4a5ff9b001088f7aadc0f41eb2e6a08c"
  },
  {
    "url": "assets/js/3.981ce503.js",
    "revision": "dd971bf2854b47f0159aacba5aabfdb5"
  },
  {
    "url": "assets/js/30.0fd2116d.js",
    "revision": "6e07eceb1ced216f61adc445fe2b5535"
  },
  {
    "url": "assets/js/31.16e36469.js",
    "revision": "1752fd898a1826bfc186bd8d09a1ac08"
  },
  {
    "url": "assets/js/32.12e6bf66.js",
    "revision": "1c042cf1dacb3394002582079b13700e"
  },
  {
    "url": "assets/js/33.2e0c447b.js",
    "revision": "ae9d955fab5b46937af35fbaaf54d569"
  },
  {
    "url": "assets/js/34.a30c8127.js",
    "revision": "89f547888222484852866a417f6dfd06"
  },
  {
    "url": "assets/js/35.36e485ee.js",
    "revision": "85718a6c61e8186704bff1878f18caf5"
  },
  {
    "url": "assets/js/4.081e40c6.js",
    "revision": "2f6f9a28c74ae97a74ea8353732ddd60"
  },
  {
    "url": "assets/js/5.e520199f.js",
    "revision": "cc0dd0287b48685b4a21fb05c24ac5e9"
  },
  {
    "url": "assets/js/6.90e232d0.js",
    "revision": "d393593c5f6cc11a4be297b3992fcd8a"
  },
  {
    "url": "assets/js/7.ca2ccf46.js",
    "revision": "801e20a960e3f55f94dfe6fe617d1e0b"
  },
  {
    "url": "assets/js/8.7f2c36d8.js",
    "revision": "9d5836b523c6f3c2fe38439e0f37f8fc"
  },
  {
    "url": "assets/js/9.d769c60e.js",
    "revision": "9d3b0d3d8ff78b95b8f30954450f736d"
  },
  {
    "url": "assets/js/app.d3201e8a.js",
    "revision": "12942e3e65c6aa3ea29fdb89e4d0d9d4"
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
    "revision": "2fa0d83bd39d24ec266bab84ac76ef46"
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
    "revision": "68cc3f0a6fb2b152a9466bdb9369f950"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "a8768505bfefea33100fc4b6527a9c2c"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "fe5b825e9c688343882c9f16139201f3"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "2af065f15076206f6a348ea9a4e15b1e"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "26688e3a65fe4a7012201c6c9afcdee0"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "d3f6c3599d5d825ed0c32a85d51f5a75"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "4248653e387e94c4e60d792e4544e9df"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "a219678cb8270dc1d8f8e699ea30250a"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "2f4b6bf7e331e687acb166ecf98de72b"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "bffc69f2ab6d9efb2e86201400b21ba6"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "500afcec99c16bcca0b3ae07b2e250ae"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "5e297a448d919c6f2afbec0431e1efab"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "c79b5eeaa37284d4fddfadc09dd18d60"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "ed14ee791b929f0eb3b10fb2ad76f6a5"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "670ae7c31337e5245648e9effd396592"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "ff785305117941e0ae23d840dd8b407f"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "f56d1860f13623a36dce7f0f1056080d"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "06f214e0e8e7c504dedefb7da6bb6221"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "dd5d491366f23351efff6aa1f1201e44"
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
    "revision": "dc81e389765de32387b0eed9b29d7703"
  },
  {
    "url": "join/index.html",
    "revision": "3362bd870a6a9ae031d31ae7bb110040"
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
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "dffe1d70201d29836d79a2596edf33fb"
  },
  {
    "url": "search/index.html",
    "revision": "facd841620a16d2a0d3570ab99685d70"
  },
  {
    "url": "tool/all/index.html",
    "revision": "a58832f3692bcbbef1ae06335d862c18"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "181b692efdb13bf1475f4501b6fdbddb"
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
