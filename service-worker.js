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
    "revision": "e8281eaa59f66eecd651039f20ee2447"
  },
  {
    "url": "assets/css/0.styles.f3ff5cba.css",
    "revision": "dd1cb6af73dddeb219ea7394e70c2dfe"
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
    "url": "assets/js/10.53b17461.js",
    "revision": "9021263d41476e36f006d4566a273501"
  },
  {
    "url": "assets/js/11.52b810f5.js",
    "revision": "ec4576bfb6a1201763aa7f0dfd7a5b2e"
  },
  {
    "url": "assets/js/12.f41a43d3.js",
    "revision": "b2e3eecffad9ff803bc1b69fcb0d83aa"
  },
  {
    "url": "assets/js/13.7ba72762.js",
    "revision": "d0d2d0401e9a2364aad7393031fca6d1"
  },
  {
    "url": "assets/js/14.ff136265.js",
    "revision": "65e1dd473a515aded59f1d57ea089543"
  },
  {
    "url": "assets/js/15.1ed50de6.js",
    "revision": "34466bceb35cb3c9f2ebd72a3b63fbc0"
  },
  {
    "url": "assets/js/16.453b356c.js",
    "revision": "3589cb5103ac58c54b519bd6a0eaccc5"
  },
  {
    "url": "assets/js/17.bf93c756.js",
    "revision": "99aad6533ea915dede9eb3a642fc0947"
  },
  {
    "url": "assets/js/18.19fc8c22.js",
    "revision": "e3d1560eab1e9b30c4feb19779ddbaa2"
  },
  {
    "url": "assets/js/19.b545b200.js",
    "revision": "08342914f78421464240500e9b6c33ad"
  },
  {
    "url": "assets/js/2.54ef883b.js",
    "revision": "dec6bef71971db8b852f82ba72fd0d3e"
  },
  {
    "url": "assets/js/20.1456aa36.js",
    "revision": "8d859f1f9e7bbc6d5abf7805c3b2cfe6"
  },
  {
    "url": "assets/js/21.af1d3f40.js",
    "revision": "5698811e4c818b5e32d0aee8bd4361b4"
  },
  {
    "url": "assets/js/22.889d555f.js",
    "revision": "2a43c9504ca8e10bdd568e33bf34c830"
  },
  {
    "url": "assets/js/23.3eff795b.js",
    "revision": "ec277d818a4511758ad7233c7cbc40e9"
  },
  {
    "url": "assets/js/24.fa740825.js",
    "revision": "d63c77a9a8f038194d0e1ebeac4d2fbd"
  },
  {
    "url": "assets/js/25.2bcdbd0d.js",
    "revision": "ec29b02ce27662790c99ef0189c2e1c9"
  },
  {
    "url": "assets/js/26.c837d5d0.js",
    "revision": "81d5b01691321086b67f372b133f75b8"
  },
  {
    "url": "assets/js/27.e63b59a1.js",
    "revision": "9644173e18d9c0f06f4f673541407727"
  },
  {
    "url": "assets/js/28.a10ff990.js",
    "revision": "1daa60ef3f0bf8fa78a82feaf5a4a93d"
  },
  {
    "url": "assets/js/29.99d5a0e5.js",
    "revision": "89f3c35e4b148252ff89073f6f03ffc6"
  },
  {
    "url": "assets/js/3.50531389.js",
    "revision": "d044caf0e35a3b2d0e9264d7bc078234"
  },
  {
    "url": "assets/js/30.b8cdb06c.js",
    "revision": "f54495f3a4e52ae99762f97e26b2f193"
  },
  {
    "url": "assets/js/31.a518b3f6.js",
    "revision": "47f68086f4248b761a908ab2d1922a2c"
  },
  {
    "url": "assets/js/32.d60b5664.js",
    "revision": "d1a38601341eb01ae830aaa64d344e3b"
  },
  {
    "url": "assets/js/33.ed3edb79.js",
    "revision": "af00f429228543ddd73e64ab967437ac"
  },
  {
    "url": "assets/js/34.f68a7b04.js",
    "revision": "26daebb6dafa3581f8a9c0fc7325a39e"
  },
  {
    "url": "assets/js/35.16cb1db3.js",
    "revision": "f372fd65eba35ba24fc57a41ebd421af"
  },
  {
    "url": "assets/js/36.a046c03b.js",
    "revision": "205b35b0fadb38e2a5a5db7c7acdacb7"
  },
  {
    "url": "assets/js/4.6531bbd7.js",
    "revision": "95d1193349565b85cc7b43c7af28c703"
  },
  {
    "url": "assets/js/5.b1945f7c.js",
    "revision": "5dac51f2123804a844c28ea782d80ccb"
  },
  {
    "url": "assets/js/6.360ac92c.js",
    "revision": "84cad19b7ca784feafa9581845bb940c"
  },
  {
    "url": "assets/js/7.1cb80599.js",
    "revision": "8cce6532df32d6b023ee4a58ca2ba2e5"
  },
  {
    "url": "assets/js/8.31f1053d.js",
    "revision": "706255f3edfe92cd044d5b9076b6cb19"
  },
  {
    "url": "assets/js/9.cc66a26a.js",
    "revision": "61d7d962a28558e4dcec0893f1ad7f90"
  },
  {
    "url": "assets/js/app.b43386d6.js",
    "revision": "2f1dc7097ecb9898efe50f7d5ee2be77"
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
    "revision": "95632d8e1b2a484982bc91fdd98ab763"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "5609e40c48f087769ad0d176efda2188"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "0bfb578d2c2241eac06f66b74e4cd5ee"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "11fd293fdc47587e5d800f8c8325152a"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "7e0d3f34fe1800eef7d1d71b836979d0"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "a0517b8125cbc85008c52b1980c50dc6"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "a3c853346d58f4c208c542bb0ac3bd98"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "81656b42b0413758e4fdc8eeab8b01d5"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "5f6b10b43ec2a1a4254df322b5faf647"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "6ef714fd9272cd1ba7464008f9859cc0"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "9245dda909b36b88d7575219df3ed1e4"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "768d60a5e0ee51cb2c4e60a3a4c5d5ce"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "02fcb2b410f209bc5fa8ba6d851a0c6e"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "d79d3524831f8d95b9511744ef18bba2"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "9cfb0c016dbe2c231c92239108527ba7"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "f1e167ad7b3eb19c7ae57425a9ade57a"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "c9a32b00a182b92bc14789fdfe73e8b6"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "3fe1c82de3c53e83805751972ab152df"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "3bd826194b4783f562edf04b54cf3d44"
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
    "revision": "eb3d5a0766327d8ebd495d4983aa4500"
  },
  {
    "url": "join/index.html",
    "revision": "7cbc7023887309c985da3b220e2fac7c"
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
    "revision": "b030dcbbd15caf871b127324fec469c7"
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
    "revision": "84b755668506a715d5cd8d85323723d4"
  },
  {
    "url": "search/index.html",
    "revision": "27971b1ceacebdf2d8d017cf4cd8d57c"
  },
  {
    "url": "tool/all/index.html",
    "revision": "b39717d7b8ccd76072646d8e7517d1ff"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "00753765de69aadcd2995c42183c8798"
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
