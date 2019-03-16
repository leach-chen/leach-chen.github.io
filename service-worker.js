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
    "revision": "8fee42cabfc12e70c01fa60cc72442c8"
  },
  {
    "url": "assets/css/0.styles.bf1fbd40.css",
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
    "url": "assets/js/10.9b14e4b1.js",
    "revision": "4df1cbbbc89ec1600dcb8ad792e91c63"
  },
  {
    "url": "assets/js/11.0b94882e.js",
    "revision": "ea3f023a56f43e5322652589ab6946f2"
  },
  {
    "url": "assets/js/12.3ca26d49.js",
    "revision": "8d202bcd72aab2283578e44b6b5a6c88"
  },
  {
    "url": "assets/js/13.3e5580d5.js",
    "revision": "093fa2543b1f25b3a9a8674ffc570a82"
  },
  {
    "url": "assets/js/14.e1d3aad4.js",
    "revision": "3f1443fdc465138c511271d86d229af5"
  },
  {
    "url": "assets/js/15.a55972db.js",
    "revision": "2098e3b1e41f224df5683bd3f8facaa1"
  },
  {
    "url": "assets/js/16.10955ca1.js",
    "revision": "82c318c89ec8b5e905b3a4794e305056"
  },
  {
    "url": "assets/js/17.0ae571e8.js",
    "revision": "b8f319b1c95feea0b5a313a3bb60c83e"
  },
  {
    "url": "assets/js/18.504c4858.js",
    "revision": "c06286ccb6167905ec7fe587c87947d5"
  },
  {
    "url": "assets/js/19.96dbbc3a.js",
    "revision": "002e92bc9bd03f6f7b9a9ec5666ce4b2"
  },
  {
    "url": "assets/js/2.9ddf48e6.js",
    "revision": "8ff868c0c0c44836983b96013ed53dca"
  },
  {
    "url": "assets/js/20.8aad9a7d.js",
    "revision": "eb0f7b0392fafa0b0463f68109175638"
  },
  {
    "url": "assets/js/21.b5352905.js",
    "revision": "23af6d03253845edc8c4c96db4e89f22"
  },
  {
    "url": "assets/js/22.1524f739.js",
    "revision": "c60b78ebe5a6d5cf6fd63f77c5f9bf66"
  },
  {
    "url": "assets/js/23.cab93898.js",
    "revision": "3ee0486d9da01344cfbb639c01e0aee7"
  },
  {
    "url": "assets/js/24.7d47d346.js",
    "revision": "bba89994f682845a8cba58c4bb5df6da"
  },
  {
    "url": "assets/js/25.b8c46b58.js",
    "revision": "870323d9216502f5fa200ef9f66bc2ab"
  },
  {
    "url": "assets/js/26.10103919.js",
    "revision": "280c9d7e60e69cb4378f1389563d9d26"
  },
  {
    "url": "assets/js/27.53d080ba.js",
    "revision": "58848e32708336324817bf5867daf0b1"
  },
  {
    "url": "assets/js/28.e3638eb5.js",
    "revision": "f748fea68d6fb236ba73936f8a164292"
  },
  {
    "url": "assets/js/29.2bd2810f.js",
    "revision": "83132c77d62c46517ac0aa73bde8f535"
  },
  {
    "url": "assets/js/3.f0bdef4e.js",
    "revision": "a952385666f19fcd97ba334da0d82adf"
  },
  {
    "url": "assets/js/30.c39d965c.js",
    "revision": "c784202b110c8a8f48600f74c1c40e56"
  },
  {
    "url": "assets/js/31.407272c5.js",
    "revision": "ec9ec725127c40d92301091edb3b9c22"
  },
  {
    "url": "assets/js/32.c905966e.js",
    "revision": "ec062656db4d333f2c0b25fe67803546"
  },
  {
    "url": "assets/js/33.76a25679.js",
    "revision": "e0ac476e3408a9f3a13cd40fe1d30731"
  },
  {
    "url": "assets/js/34.81755db8.js",
    "revision": "d241d267e126e4ad26fa00be6e7fe872"
  },
  {
    "url": "assets/js/35.a7a0dbc9.js",
    "revision": "7d06113157137f6afcb9836fc086315f"
  },
  {
    "url": "assets/js/36.d85ca285.js",
    "revision": "80d4caf3ea646a8a5b2c82087ed5fad9"
  },
  {
    "url": "assets/js/4.bdd13182.js",
    "revision": "efce11ed6708d9848a379948aa6d0392"
  },
  {
    "url": "assets/js/5.31fb2436.js",
    "revision": "c77d13cf2f07d5043c9c1a8cb291fec0"
  },
  {
    "url": "assets/js/6.efba52b8.js",
    "revision": "880ee9af63a18748fe98cc8de372f03c"
  },
  {
    "url": "assets/js/7.40aabaf6.js",
    "revision": "96e5fdd63063825c23ca68b33d9c6123"
  },
  {
    "url": "assets/js/8.bd2ebe20.js",
    "revision": "160d8f9f7e310c39d4b0db0f6a249b87"
  },
  {
    "url": "assets/js/9.920fc062.js",
    "revision": "cd162f963667c0b54e5e632df8b9c4cb"
  },
  {
    "url": "assets/js/app.7b724856.js",
    "revision": "a59457af5bb3abb4ac2d69b7760fee89"
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
    "revision": "28f59b03391440a116fbf78d20678397"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "b6a9aa3210d2f3701b82bcee6fb3a817"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "3d326b703d8abb707e34547daa758056"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "4f049be7139f9798a72b3ed2301dd2e3"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "bbce580ccd91918d6f64f6a6f077b7d0"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "b6e0c83cf709c5b8149de7fc25739f4c"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "b1edbd05396b75e925fba2885ed320c3"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "ccdfcf26c3794f0f0a23afdce2a605bb"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "45c8cd3709e971363b07dc21c57c9fd6"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "b4bb47e2d087ee3960e46747d013dec9"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "0e2a96986d54b74815ec76cc00a0b95c"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "ca019fdcb936c6d3584139f88ed35845"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "f501f155c37027b40b61b7b6d70c619b"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "542827f14c7182e95a854ceb45cd49fa"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "047ce5c21f1e731f5c0832c09078f009"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "6aef16b957660ead703a233d5c9c4fa1"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "01d5714f9bdb97cc5cec5a2c997591c8"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "9bb5d37b6b3ce2bbda2a8934958cd0d0"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "82ed84e655e5ee7b830595c2cc6af493"
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
    "revision": "1d4043ff6e379a1fc9d6db43c8b5e347"
  },
  {
    "url": "join/index.html",
    "revision": "6cf3ddb1d71761203f64e242b5cdc8e0"
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
    "revision": "36bd79654ad52d1e8359a9f8c9136409"
  },
  {
    "url": "search/index.html",
    "revision": "d9844fb0d52f08a4358f16572c51de8b"
  },
  {
    "url": "tool/all/index.html",
    "revision": "eb3a1a4a89e46b7b1e4bcafcdeae8fdc"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "87a8f127a1e841abc47305861af09652"
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
