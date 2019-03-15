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
    "revision": "286421ec48e781e4b8457fcf1c2716e8"
  },
  {
    "url": "assets/css/0.styles.bf52006f.css",
    "revision": "50480330f1de61242036b83f9c4f4dbd"
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
    "url": "assets/js/10.53b17461.js",
    "revision": "9021263d41476e36f006d4566a273501"
  },
  {
    "url": "assets/js/11.41680ef7.js",
    "revision": "a2c3545b81f712d603fde9a19d0d9703"
  },
  {
    "url": "assets/js/12.0a2cf535.js",
    "revision": "c4a13bf017471c800140d88da6e97431"
  },
  {
    "url": "assets/js/13.4dd95ada.js",
    "revision": "61048e244446d6e7018d428d41bc1ddc"
  },
  {
    "url": "assets/js/14.b452e7b7.js",
    "revision": "ad575f0d6d12910527127147030be2e3"
  },
  {
    "url": "assets/js/15.460574d5.js",
    "revision": "494c91369c8a1e5f798ea6fefdbd7969"
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
    "url": "assets/js/19.b545b200.js",
    "revision": "08342914f78421464240500e9b6c33ad"
  },
  {
    "url": "assets/js/2.2e00af6d.js",
    "revision": "3846055cd6187e77183a3b5787df7416"
  },
  {
    "url": "assets/js/20.0508b181.js",
    "revision": "570a23b89a8c99679658869679d0ec9b"
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
    "url": "assets/js/23.c14b42c3.js",
    "revision": "f9497b31003b37707c85822420abad94"
  },
  {
    "url": "assets/js/24.8e286731.js",
    "revision": "22697800f3e4643a36a95b78b3105a1c"
  },
  {
    "url": "assets/js/25.6f02c6b3.js",
    "revision": "fa7ba5f88ab1fe09a5851105068da687"
  },
  {
    "url": "assets/js/26.58f4e2b3.js",
    "revision": "94c35a04e4bd205b4c9989590370640a"
  },
  {
    "url": "assets/js/27.b11e682a.js",
    "revision": "dc23903da3a68f1eebe09dc5b51c6607"
  },
  {
    "url": "assets/js/28.a726fb04.js",
    "revision": "0081abfe3711beba2e928d2e24f61687"
  },
  {
    "url": "assets/js/29.99d5a0e5.js",
    "revision": "89f3c35e4b148252ff89073f6f03ffc6"
  },
  {
    "url": "assets/js/3.63f4592e.js",
    "revision": "f3200dac765351fb1ac994ccb822cce4"
  },
  {
    "url": "assets/js/30.305ccbd9.js",
    "revision": "856ad5e22f9e38aa2a118c7e9388c6c5"
  },
  {
    "url": "assets/js/31.e4179cda.js",
    "revision": "02850b7fc70485766cfbdbebed40cec5"
  },
  {
    "url": "assets/js/32.1bb9a3dd.js",
    "revision": "61e15187176fae437303992a62b255a7"
  },
  {
    "url": "assets/js/33.908aa395.js",
    "revision": "cbb43001b19e1e9c0392bc8cc9e300a6"
  },
  {
    "url": "assets/js/34.da37df61.js",
    "revision": "89dd3f42a01a59efd07ea87fe1c6c60d"
  },
  {
    "url": "assets/js/35.5f4166e6.js",
    "revision": "a364c66cda66c544267049e6d0f006a8"
  },
  {
    "url": "assets/js/36.a046c03b.js",
    "revision": "205b35b0fadb38e2a5a5db7c7acdacb7"
  },
  {
    "url": "assets/js/4.9593197c.js",
    "revision": "aece5df87791ebc7a44c1ffe3bb0b564"
  },
  {
    "url": "assets/js/5.d3f5b2bf.js",
    "revision": "068bf3f138e7f15a7483f37d5b4c2f54"
  },
  {
    "url": "assets/js/6.3a5326fc.js",
    "revision": "b85583b44add3b57ba89a08ffaec3dff"
  },
  {
    "url": "assets/js/7.1cb80599.js",
    "revision": "8cce6532df32d6b023ee4a58ca2ba2e5"
  },
  {
    "url": "assets/js/8.6a0e2b95.js",
    "revision": "68f2b70d02004660f154910c04060748"
  },
  {
    "url": "assets/js/9.cc66a26a.js",
    "revision": "61d7d962a28558e4dcec0893f1ad7f90"
  },
  {
    "url": "assets/js/app.9f60c121.js",
    "revision": "3f9314e613ea1b4fd17d843dba95d121"
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
    "revision": "864092635f3a33a428eb04965bbd3e21"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "1c077ff7af13fa96a50de4796e5da648"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "2125864f6d88264ed7edc54535b33db1"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "8dad15a670a3f3824cf09d6d36e1e552"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "4294ac1e75c2190352dc516c066d1f89"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "2e2e8fbfb40b08c68f9e920e7d5e7163"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "7c5d5f805126d169255a4a8d3b88f69b"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "78f5c0d052d1a516a40167cdabbdbdf3"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "915a2c5ad83e222934ea576e07a77b06"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "ac1161f06427ca87c1f462e90b6d6feb"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "0af2085d57d61d302da9238125c1d4cc"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "0f60272c6ba6f9a63534a9df4b166a05"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "3275fe3798dc7e10a721db75312c8391"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "782ebba479f3d1ecb4891416bde1bd5c"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "eff7ea6219a4917099a41cb12f671bfe"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "96d58742cb29b85b857e8fddab65647f"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "413721b4acacbc717db3f5d02db3b2d2"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "f591183a6d411a72db5cd212e1ce0183"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "ec5a5b10aff5ddfc9c8981f8788a70ae"
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
    "revision": "fe58911959b4ab5f0ba4803fa770ee4e"
  },
  {
    "url": "join/index.html",
    "revision": "e3d06d453ec9d50443b0d6c336161551"
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
    "revision": "00a84c47ef957ec7b7401a371d91c1c2"
  },
  {
    "url": "search/index.html",
    "revision": "efd39666e7d927b86d6056d90109b2f6"
  },
  {
    "url": "tool/all/index.html",
    "revision": "f867b26db0c1e50130ea5f26e913b0d3"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "a4d9b357ea5a340384a8634a0538d4a9"
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
