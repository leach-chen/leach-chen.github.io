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
    "revision": "12c4fb20910995751e0be0e10ec2115b"
  },
  {
    "url": "assets/css/0.styles.7d07e3aa.css",
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
    "url": "assets/js/11.41680ef7.js",
    "revision": "a2c3545b81f712d603fde9a19d0d9703"
  },
  {
    "url": "assets/js/12.b989f62a.js",
    "revision": "52a5e64861a2af20a68ad1b7e261976d"
  },
  {
    "url": "assets/js/13.10db68ab.js",
    "revision": "291e50a136f161a1da5012756ba22e59"
  },
  {
    "url": "assets/js/14.c6e56748.js",
    "revision": "fb9894b6a4437b38e10a5a831d82d1d8"
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
    "url": "assets/js/17.df0cb24d.js",
    "revision": "3e9be57a94dac089b308306a20909317"
  },
  {
    "url": "assets/js/18.72a89261.js",
    "revision": "864e15e4cb0a7ae4dcad8378a886fcf0"
  },
  {
    "url": "assets/js/19.e3b7a94a.js",
    "revision": "9d5890399ca7eb70221155d0ca10e66d"
  },
  {
    "url": "assets/js/2.54ef883b.js",
    "revision": "dec6bef71971db8b852f82ba72fd0d3e"
  },
  {
    "url": "assets/js/20.5f69b4e0.js",
    "revision": "f3606c1a87e3c7807e11cccc903e4762"
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
    "url": "assets/js/app.0b1ad68e.js",
    "revision": "64b033ccd08eb30d87925a8114a6f516"
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
    "revision": "579aa440e0134892c36494288a054ad2"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "e6338a112c890e3aa4b08ae1dbff16bc"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "ca00e4b48658f40879edb3e9fb3159d0"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "07460fe59b88763211b61b4d7188ce9b"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "18ee4d5d03a83522c8b663c61627b4d3"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "95b108cd05b996398511a09317ba4b67"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "5d95812ef87d184e9d6563570abd0288"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "e7b0238f93d227fe67224bc0cd5d980f"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "ecf767e14224b6f586ae4d946ab4f5bb"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "018006aa78de1f3d440339b752becfba"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "3285bb06462c8bf8f812741a1a11e838"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "30aee11f3a137ab94e0abca530da1fe9"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "c13f36187ed75dc0f094d92aac7e0b44"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "cd4afa0a88c42349a0b04057363448b6"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "a5d13b6f16cd3f73f17db70a5f3bd6f5"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "d201b5cccec894981855121bcd517071"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "e67d57e3072dd763094eace3f5159307"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "f0a69b2964a520d74466faa7cd4048b7"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "cf383667932dde875df95ba019d24474"
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
    "revision": "28c517baf60234188835459881f879e1"
  },
  {
    "url": "join/index.html",
    "revision": "296fcc12206ff6136234b6effc69433a"
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
    "revision": "a4064ac75bea8fd47048e118016a49df"
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
    "revision": "9950aea37a8e4ae62f4ba758d6c53393"
  },
  {
    "url": "search/index.html",
    "revision": "fa8bbbd97b0a648dbdab96609a8e6779"
  },
  {
    "url": "tool/all/index.html",
    "revision": "16326278a5141cdf482ac0861ed7d1dd"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "b454f7054c824bb11d0b80cbcf8cfee7"
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
