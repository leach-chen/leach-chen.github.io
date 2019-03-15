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
    "revision": "079688d4aa880277d6dd6b9ed71204e0"
  },
  {
    "url": "assets/css/0.styles.4f59b525.css",
    "revision": "f84ab1dde9589beadcf6cbcd8296725c"
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
    "url": "assets/js/11.220c2fc1.js",
    "revision": "4e6542880884a9a3c85974859c314345"
  },
  {
    "url": "assets/js/12.3452d8e8.js",
    "revision": "45992d2b753aada6f6f6826aea23fa94"
  },
  {
    "url": "assets/js/13.9a601c42.js",
    "revision": "cbc34d0b778552b0b4f995549c1db618"
  },
  {
    "url": "assets/js/14.b452e7b7.js",
    "revision": "ad575f0d6d12910527127147030be2e3"
  },
  {
    "url": "assets/js/15.6abeeed2.js",
    "revision": "59bbce8095d9495a220df80461acec42"
  },
  {
    "url": "assets/js/16.55ede861.js",
    "revision": "87d06099a5079e5118d6a25f99bc1243"
  },
  {
    "url": "assets/js/17.9449badf.js",
    "revision": "4fc07efaa969ed7ed945872dc5d89058"
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
    "url": "assets/js/22.9bca401e.js",
    "revision": "ccb8a15c10d9067d9a8f2c7b7cc6ea32"
  },
  {
    "url": "assets/js/23.3c4b4ece.js",
    "revision": "0a857ec3b1b4b46fa193178716a39d8f"
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
    "url": "assets/js/3.f3b8950a.js",
    "revision": "105b0ed9ca7bdb18af6cd66499fe86cd"
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
    "url": "assets/js/32.0e2ec92b.js",
    "revision": "346ec675dbb68869426b24e48f8e9afc"
  },
  {
    "url": "assets/js/33.ce67a2b2.js",
    "revision": "63a15e00550ded9104adde28456cb320"
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
    "url": "assets/js/4.cab7480e.js",
    "revision": "52d25d4f9c5cf340692887eeeaf0fd06"
  },
  {
    "url": "assets/js/5.8b5b55ec.js",
    "revision": "3125076356a9861bf3d84238a0ac4de3"
  },
  {
    "url": "assets/js/6.d3bf37cc.js",
    "revision": "bb1ace1dbb0a201b7e20634ff3d7796e"
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
    "url": "assets/js/app.2a75a2c4.js",
    "revision": "a4eda4f05cd2433c13886ca3f6bfb05f"
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
    "revision": "f1ad55bae694572f22319a87537dee2f"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "d5c6b7ff1e993959456f435b87f9915c"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "a355d09caf8b5139c0fa2ef29bec9e85"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "229e89181a61a29e995f5f569205e751"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "f9bcd0f493d67e06bc2ee2cc4f506442"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "8bc0c1019ea88927369b0136e9f215c8"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "decd69875b18183de26cf7095a4dc050"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "bdeee84bad94050c06defc731cb5f29b"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "8cb3ff6455c8562eef68de42e85539e2"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "e8c9301dfbc8e8150d4909604728181b"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "31675fc4af8b37e16483b503c8882462"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "e4087dcc957fc06ff800a539934c74d8"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "0bfb007131409e493cb819b73b333494"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "647e6cc024f2b69bc7f85b06598687b1"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "a74bd8a02793d3cc5684af0da1d60508"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "a8a42a6aa01c15b961078674febcb656"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "2732b0518ff57c4b2cc0d6ee312b5651"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "d6b555f852cea5fcbfff90aeec997bf4"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "57ef8243a9a04042cf5dcc700c89d3be"
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
    "revision": "5c465500ad608d43f554507a65a09163"
  },
  {
    "url": "join/index.html",
    "revision": "0fc8007f946ec97f3295c2da82deeaf1"
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
    "revision": "61c7ecea096137a0e571828d21d9ddb5"
  },
  {
    "url": "search/index.html",
    "revision": "829577e454c3be96bf6be0e0f2772f5f"
  },
  {
    "url": "tool/all/index.html",
    "revision": "ff38d389a4fac9484d3fdbfe9445ee87"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "a8664c9a78788aa85eabc0daafa035c5"
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
