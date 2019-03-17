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
    "revision": "97978820a45c3736bf7b819f1d1546a3"
  },
  {
    "url": "assets/css/0.styles.a2cf802d.css",
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
    "url": "assets/js/11.e96f3615.js",
    "revision": "a2cabb2cf8e3d2670a1a1ced2a15c769"
  },
  {
    "url": "assets/js/12.3ca26d49.js",
    "revision": "8d202bcd72aab2283578e44b6b5a6c88"
  },
  {
    "url": "assets/js/13.00b27c83.js",
    "revision": "c803cc31eb11eb61aa310a0c390824a0"
  },
  {
    "url": "assets/js/14.e1d3aad4.js",
    "revision": "3f1443fdc465138c511271d86d229af5"
  },
  {
    "url": "assets/js/15.3cb2decd.js",
    "revision": "bc2b46ecb85fd6585b92e8387a701c1a"
  },
  {
    "url": "assets/js/16.0ae34c15.js",
    "revision": "877b7b7fff85e255d1218be1d2518563"
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
    "url": "assets/js/2.e720d488.js",
    "revision": "a280914459a87d1153a70a273bfaec69"
  },
  {
    "url": "assets/js/20.8aad9a7d.js",
    "revision": "eb0f7b0392fafa0b0463f68109175638"
  },
  {
    "url": "assets/js/21.f5f010d5.js",
    "revision": "3acc8c8c3dddad2cf80ee11fe9ab8f84"
  },
  {
    "url": "assets/js/22.d7515dbf.js",
    "revision": "dd4b34e95662b43313fcf46fa5fce20a"
  },
  {
    "url": "assets/js/23.cab93898.js",
    "revision": "3ee0486d9da01344cfbb639c01e0aee7"
  },
  {
    "url": "assets/js/24.aabd23f9.js",
    "revision": "2b07b7a2c490d851cc008667c8160551"
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
    "url": "assets/js/4.f95e5058.js",
    "revision": "d7f4d824bb412155106bb66e5480381f"
  },
  {
    "url": "assets/js/5.199805cb.js",
    "revision": "bbee3cd63e744243df4a1ad7f9522c77"
  },
  {
    "url": "assets/js/6.efba52b8.js",
    "revision": "880ee9af63a18748fe98cc8de372f03c"
  },
  {
    "url": "assets/js/7.d052dd9e.js",
    "revision": "63bb6b326aec7772e5ccff18d40fb86b"
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
    "url": "assets/js/app.9062161a.js",
    "revision": "04f6af082dff1a7fa5bded97b197f160"
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
    "revision": "f7b2307809ff33aef39c45c50fbaeb68"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "c1344735c8360bd9ec2c7d01fe5e34f0"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "f6213026a50b198ddd1acff65488310f"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "8f5edc7107557b1ef51938c6858d92c2"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "4d71aeb0f9eb38f488113e35b1bc44a6"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "2851868b0b128a6f1dc0efc617f9f900"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "da134975c701bc23b90ed34df9c8696c"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "e2cb66e25750f2a32a408d161fc6bbd4"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "a8eada7e6672c763215be8ee7c46d199"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "1947bfc0830ce755ba82f37bca9fb84a"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "6e98cf98eebd889c740fa4d7f4d5e886"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "4c58f5d01f904e4319514c1bccb8fd76"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "9c2137e2fe00989da9ee0354b687917a"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "f9f04d623f72cbcd2de33add20f86598"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "89e73f00ee105bff5dd758c700d4d3b3"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "4217c7dcdc695dddce85b8218bb5dd6f"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "e2105890b73fadacd482dd0fc866efbe"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "018c0203d94006cbdb96adc15087999e"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "965edd9a8ec541b9c7ce69b7ce14153d"
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
    "revision": "0f4fb4e568c21865bd4770fb548dd69a"
  },
  {
    "url": "join/index.html",
    "revision": "342cf6c6632a105c2a2b79b0d2a70723"
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
    "revision": "5b6c4ab981d55792e3a1c38f99b444a5"
  },
  {
    "url": "search/index.html",
    "revision": "7fcae45d881bacf51d18ce6c74bef506"
  },
  {
    "url": "tool/all/index.html",
    "revision": "42446ebadf1cf996936bf03cbdff684b"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "19b0906675f2a7deac360a85a285746b"
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
