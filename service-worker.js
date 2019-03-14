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
    "revision": "5f2de97c692e7c11b86d4722b53d2ecb"
  },
  {
    "url": "assets/css/0.styles.122455b0.css",
    "revision": "317ab59d3b91b4cd8ebdde560166d90f"
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
    "url": "assets/js/10.05d5ea2c.js",
    "revision": "634e57eacdcb3ad6d7deba9ac1965643"
  },
  {
    "url": "assets/js/11.7a459262.js",
    "revision": "084a71a1ea07238e8ce60291ee42aade"
  },
  {
    "url": "assets/js/12.7237f32b.js",
    "revision": "356ce4969c3de88fa44a55e7936c8648"
  },
  {
    "url": "assets/js/13.78692e8c.js",
    "revision": "46ae5542fb7fc89aa42e0b4ac4739564"
  },
  {
    "url": "assets/js/14.936e0233.js",
    "revision": "6fd2e69dcc7ec19947f2ca4b399468b7"
  },
  {
    "url": "assets/js/15.6abeeed2.js",
    "revision": "59bbce8095d9495a220df80461acec42"
  },
  {
    "url": "assets/js/16.f6386c4d.js",
    "revision": "a9acd6caa392ef7e55c37f95aa10444e"
  },
  {
    "url": "assets/js/17.ec5e8eb6.js",
    "revision": "c23f7778cb317d42d6f11b915fb89a49"
  },
  {
    "url": "assets/js/18.44296e71.js",
    "revision": "229b972827cffc512e191edc3253aa44"
  },
  {
    "url": "assets/js/19.124afed3.js",
    "revision": "bb81525ce877b223f3bafc5a4ae010be"
  },
  {
    "url": "assets/js/2.8c3a2ea1.js",
    "revision": "8f79d5bd7911fb1977bc7df18b22c03f"
  },
  {
    "url": "assets/js/20.9de3db4e.js",
    "revision": "c8e658eda112e4896432b7d48fe76443"
  },
  {
    "url": "assets/js/21.82505b54.js",
    "revision": "5b0a7ea3bb4cb279623e2d383407fabf"
  },
  {
    "url": "assets/js/22.720139bb.js",
    "revision": "964fbf3f71d6be6bb291c20eed8776c4"
  },
  {
    "url": "assets/js/23.e6a7e073.js",
    "revision": "a6c11a84b9a7933947feb095a96c8d55"
  },
  {
    "url": "assets/js/24.3e9a1d0a.js",
    "revision": "93783a1c6e5ae3f3297eec58bc452186"
  },
  {
    "url": "assets/js/25.4ada0208.js",
    "revision": "436c710fa1897e8adceccee890f1ad0d"
  },
  {
    "url": "assets/js/26.c1e3454d.js",
    "revision": "707febd56c7150adf3e892e2eeb8f119"
  },
  {
    "url": "assets/js/27.5ac547db.js",
    "revision": "e408b01afa7d3fe7823868cad741291c"
  },
  {
    "url": "assets/js/28.5df5bb2a.js",
    "revision": "34faddd964986a752b60d6792a7ae01d"
  },
  {
    "url": "assets/js/29.ba18dfb2.js",
    "revision": "ef565334a631a8916be8514761b6f838"
  },
  {
    "url": "assets/js/3.331f8f2f.js",
    "revision": "2028120e3a710ec9574886d80b0880d2"
  },
  {
    "url": "assets/js/30.241c42e9.js",
    "revision": "8fee4f3124a4c310e7d323567a9fd696"
  },
  {
    "url": "assets/js/31.96a6dc63.js",
    "revision": "446dec8fed1f87223bfec596df921d38"
  },
  {
    "url": "assets/js/32.cd03bacc.js",
    "revision": "4acc894205e9aae2531b85815d8213c6"
  },
  {
    "url": "assets/js/33.96f5ee06.js",
    "revision": "c0f8de32c76a91be4077a7803a4c8e82"
  },
  {
    "url": "assets/js/34.17f3b34a.js",
    "revision": "efec3465f653a63f51947d20b51612de"
  },
  {
    "url": "assets/js/35.36e485ee.js",
    "revision": "85718a6c61e8186704bff1878f18caf5"
  },
  {
    "url": "assets/js/4.59b60720.js",
    "revision": "d4b026fa7a8a9f595f61203e3d3fdbfe"
  },
  {
    "url": "assets/js/5.23bc1973.js",
    "revision": "051b2de3bb77a3b7be7c53fae2ee6c25"
  },
  {
    "url": "assets/js/6.cbc66dd3.js",
    "revision": "b072c8990af8640556718bbe03f15246"
  },
  {
    "url": "assets/js/7.fd9cae55.js",
    "revision": "34e346a3ca977f94be866eff5d552624"
  },
  {
    "url": "assets/js/8.814fc7e1.js",
    "revision": "665eaa86f0afd3292558dde74ff104bf"
  },
  {
    "url": "assets/js/9.cc66a26a.js",
    "revision": "61d7d962a28558e4dcec0893f1ad7f90"
  },
  {
    "url": "assets/js/app.ed786c93.js",
    "revision": "b06e39d087d20bc3c9e57a9a6e998f45"
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
    "revision": "cd6ff2eefedc34d218765b4bd618fc53"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "c84b7f7b606f73f212696e9bc93421fb"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "dc56d9025b6a6031868a64f6ee3ca92b"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "be976808e49accf3fdda786445c0f17b"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "1fc56245e8a384a46402f9161b936512"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "8b3c990bf3690af26b76c95f25087694"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "933beb846669673b9c5852b9c9479a70"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "ad09d0f5839fac2fbc9792f2428a96cb"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "e5ca223bbe9cc93173c1a5474afdb6f7"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "808dda3f5ed4f842ba92dbab9e420495"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "915e4ef438737ef07aed9f0b9d23de2f"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "efb1120b3c0178b4da8a2edec91f9efa"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "803bd1dcd5c2e12eaa599e386e414f0c"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "957b285b58ff7371486d3111e7faa199"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "380c0938aa97d9f46fca759682addd26"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "e3139b0c7ceba4ddfec18828849d9b2f"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "a7275999875820d4ad69bc984d490bc1"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "066fc3d8ad626b07f06d95913710d742"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "eef9d43f1014d4f33ba4ec3800098686"
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
    "url": "index.html",
    "revision": "c7202adc6a6dabb5f4b0748251e5327c"
  },
  {
    "url": "join/index.html",
    "revision": "edcbbb08f8dabf598150e4855318c5da"
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
    "url": "js/vconsole.min.js",
    "revision": "40fd7e9234606a341adcbb1ce0a15d51"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "361a1653efe743d9288582d4636505a1"
  },
  {
    "url": "search/index.html",
    "revision": "99760bb83a8f355317e5d3f70b43d33f"
  },
  {
    "url": "tool/all/index.html",
    "revision": "fb917fe89c2ecd368285a3fc386d55f9"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "56af2a21fdf7d3f31db867aff35d97ec"
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
