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
    "revision": "3692ad7bd60a5c709fc5071f6115c95e"
  },
  {
    "url": "assets/css/0.styles.3d27129e.css",
    "revision": "d065f08c5b6e7fbd6d00fe7de897b854"
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
    "url": "assets/js/10.2503d9bf.js",
    "revision": "66b66b121189323bcd425ba93376e0c7"
  },
  {
    "url": "assets/js/11.18df73f0.js",
    "revision": "3978717e712881f9a8e5b7add83d21c0"
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
    "url": "assets/js/16.e82fd8b7.js",
    "revision": "26c381eed7903e7f087fc515e68b6c45"
  },
  {
    "url": "assets/js/17.9449badf.js",
    "revision": "4fc07efaa969ed7ed945872dc5d89058"
  },
  {
    "url": "assets/js/18.f5515bd0.js",
    "revision": "88084962d01d01053fa0bb51d8f6db6a"
  },
  {
    "url": "assets/js/19.82dc711d.js",
    "revision": "4a55b382d9914405d428e26acdf4b60e"
  },
  {
    "url": "assets/js/2.b050b301.js",
    "revision": "dec6bef71971db8b852f82ba72fd0d3e"
  },
  {
    "url": "assets/js/20.85528131.js",
    "revision": "d90d9303808a5881ec1f9df690814cee"
  },
  {
    "url": "assets/js/21.82505b54.js",
    "revision": "5b0a7ea3bb4cb279623e2d383407fabf"
  },
  {
    "url": "assets/js/22.9bca401e.js",
    "revision": "ccb8a15c10d9067d9a8f2c7b7cc6ea32"
  },
  {
    "url": "assets/js/23.3c4b4ece.js",
    "revision": "0a857ec3b1b4b46fa193178716a39d8f"
  },
  {
    "url": "assets/js/24.6bf57e4a.js",
    "revision": "e5fb738cc6c104d4fdef1b3617e1a562"
  },
  {
    "url": "assets/js/25.4ada0208.js",
    "revision": "436c710fa1897e8adceccee890f1ad0d"
  },
  {
    "url": "assets/js/26.69016bb2.js",
    "revision": "1d43f825ee39c2bbed5cb3ab32c263f4"
  },
  {
    "url": "assets/js/27.62e163a4.js",
    "revision": "8f571d2fe84c7e9716920820fcf04e5d"
  },
  {
    "url": "assets/js/28.4811ccf0.js",
    "revision": "d31baa1def521005569e6d5a51d5837c"
  },
  {
    "url": "assets/js/29.ba18dfb2.js",
    "revision": "ef565334a631a8916be8514761b6f838"
  },
  {
    "url": "assets/js/3.d5c9b8ad.js",
    "revision": "6b91741eb21b3ecaf10d263e08d5cce0"
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
    "url": "assets/js/4.405e50f4.js",
    "revision": "95d1193349565b85cc7b43c7af28c703"
  },
  {
    "url": "assets/js/5.c8415dfa.js",
    "revision": "3bb560a01e7e2b609ac541076585e10f"
  },
  {
    "url": "assets/js/6.40533f90.js",
    "revision": "89e01c8daa1377b102b13064856bc8ef"
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
    "url": "assets/js/app.26507ee4.js",
    "revision": "a4830611eba4f9ebb428c4a5d3f7a91b"
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
    "revision": "176d9ac22d5b8ceaaa1aa41ab9b52e84"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "985d1c5d1dd23b442641a0218afd67c0"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "823804e12a9201bc309f12e07c67c5f3"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "8eeef35a5717031a8da55dab951ea7c8"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "7c0e0bb8c8c40eaccf61382a881d8afb"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "1ebfe95a4046afb2948bc9cda0daea21"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "b4a0204196401941ead41c43bde26edf"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "3d74cd792cdf56c8c7ab82666a8aa140"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "a859be8dd628506fd3491f173aa133fe"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "5f7313bc17930ac0b8806a98cad79b9b"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "723d90e9744b9e102b506d03abf94657"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "64e2c2f636794d6af850c02949ef6694"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "01c99af00c93feb432caf9f4806d5fcd"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "cb307d0ea656994c7d10fe1b4e10ddd7"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "d7605243e2d8a353e030a79a635c1db6"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "673ca4043aeda11a4016a3dd29c05e0d"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "120f385b501cb93231cc520da29dba31"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "fd1e64fa6706ac1b9fcff561a990d0e0"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "2e099603cbd471970eb5b9f069cefdae"
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
    "revision": "a45745aa03267cc27e3a1ad94e3806f8"
  },
  {
    "url": "join/index.html",
    "revision": "a3c159f199f4d5acc2c6ef901eef900b"
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
    "revision": "afeb9bab38efc1d8f01790aac6b86a96"
  },
  {
    "url": "search/index.html",
    "revision": "cb60ff21229f0b3910239f242373ca09"
  },
  {
    "url": "tool/all/index.html",
    "revision": "7a6d2c219f0a4bd6e230141c521daaa5"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "5158f5dcba27a185594edb91d6e3d704"
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
