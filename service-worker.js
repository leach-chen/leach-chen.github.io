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
    "revision": "29f9a9754f9ebdd0050bf673cb7fec17"
  },
  {
    "url": "assets/css/0.styles.95988a77.css",
    "revision": "3dfd53981952677ea91b8849abc1c3a8"
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
    "url": "assets/js/10.4a95064e.js",
    "revision": "342596dc5286c0e52a20a6f989ffa450"
  },
  {
    "url": "assets/js/11.cd9c903b.js",
    "revision": "d75afa92c72454f9189662ed7e85235f"
  },
  {
    "url": "assets/js/12.b7ea19ab.js",
    "revision": "21a4d8bacb9655966cb07c1bcb2b28dd"
  },
  {
    "url": "assets/js/13.500c04fd.js",
    "revision": "1ae54521d8b86c0008ef945e8ff3a22b"
  },
  {
    "url": "assets/js/14.969bb3ae.js",
    "revision": "54d6d688fc4c4239cfee9065c8fd991f"
  },
  {
    "url": "assets/js/15.6e08a14f.js",
    "revision": "51b11efa6f49f0abd706dde78add1286"
  },
  {
    "url": "assets/js/16.c3a1bdea.js",
    "revision": "8c084adf63b11ac655c724749ff4cc84"
  },
  {
    "url": "assets/js/17.8fa1f7c8.js",
    "revision": "f40a96419eb0f307088f5e6f618088f4"
  },
  {
    "url": "assets/js/18.5601b184.js",
    "revision": "5d69bbc51b1c3b387a432b9dec7f4925"
  },
  {
    "url": "assets/js/19.4f02ce76.js",
    "revision": "953fd4bbe418aca2b3ffbec9faea5b7d"
  },
  {
    "url": "assets/js/2.e09a2162.js",
    "revision": "07fca3f0486bc20fef6e934b3c2387e3"
  },
  {
    "url": "assets/js/20.a47cd108.js",
    "revision": "ba5672d8a738b2eaa2f138a0122441ca"
  },
  {
    "url": "assets/js/21.da01d2ad.js",
    "revision": "a6fa1063f0b7a3764cacddd19cde3f03"
  },
  {
    "url": "assets/js/22.8348ab28.js",
    "revision": "f02504e3a0e99f93d3ff3c32a39c4d46"
  },
  {
    "url": "assets/js/23.f29d00ff.js",
    "revision": "9ebbc01068fadfb48e6a72d562618d1d"
  },
  {
    "url": "assets/js/24.d63c2119.js",
    "revision": "98e92fa43c945150a920e616a1189aa2"
  },
  {
    "url": "assets/js/25.9b6e1727.js",
    "revision": "4ef1e9aa31fd01d9c5a008d94dead476"
  },
  {
    "url": "assets/js/26.6f91474a.js",
    "revision": "73c4b1815451a4b7b507a5446b7d9ccc"
  },
  {
    "url": "assets/js/27.15dbf77b.js",
    "revision": "3798099a961e413ee87785be8e2cdbbe"
  },
  {
    "url": "assets/js/28.d4a7564d.js",
    "revision": "c89ac20d063e8debd81db82210b9146b"
  },
  {
    "url": "assets/js/29.799fbc67.js",
    "revision": "489993772bb6981db256c830f8aa5661"
  },
  {
    "url": "assets/js/3.e5158c09.js",
    "revision": "b33c77772e9975cbdd96a3229d5edd85"
  },
  {
    "url": "assets/js/30.0199b319.js",
    "revision": "fb10608d7169deee359d9c669b0b926e"
  },
  {
    "url": "assets/js/31.0ccfe76b.js",
    "revision": "716e34dffd64d2036293c42e559bb213"
  },
  {
    "url": "assets/js/32.b7aab759.js",
    "revision": "74fc18ec0fa525245a18996210ae1b68"
  },
  {
    "url": "assets/js/33.94f6ee49.js",
    "revision": "0d60eb5abaa7deb5faf9d2ecd96654c1"
  },
  {
    "url": "assets/js/34.bff2f40e.js",
    "revision": "c38507a52be0511a66934064e98eebe4"
  },
  {
    "url": "assets/js/35.fc4b837b.js",
    "revision": "c0bae9324143103a346ae9cc544cdb80"
  },
  {
    "url": "assets/js/36.76ca5724.js",
    "revision": "f566d3c15eeceaef086cf5ca707e8c6d"
  },
  {
    "url": "assets/js/37.5df5db9a.js",
    "revision": "a3b02777c6d4517a8d7e921d91eeaa70"
  },
  {
    "url": "assets/js/38.43b65ee5.js",
    "revision": "2fcd0df2d708bfd61f9659784ca7f42e"
  },
  {
    "url": "assets/js/39.a52e0a12.js",
    "revision": "1ab322c0aad40db94aad18533cb3a44d"
  },
  {
    "url": "assets/js/4.bf633a2c.js",
    "revision": "912dec1668890ac0296c6963f3e64e2e"
  },
  {
    "url": "assets/js/40.168137c1.js",
    "revision": "686a02b57484f90d176d97581aa1c2b8"
  },
  {
    "url": "assets/js/41.f2ec6ae0.js",
    "revision": "8929c1994880b231d06981ae7f3e973b"
  },
  {
    "url": "assets/js/42.5f277086.js",
    "revision": "f10d3d8b9650112d4a0e0e512555d9f0"
  },
  {
    "url": "assets/js/5.b880515b.js",
    "revision": "f175751802c1fea370b035d7d2267c9b"
  },
  {
    "url": "assets/js/6.69b75268.js",
    "revision": "09f5fbb6ec76a08bc0898007d0ec89c1"
  },
  {
    "url": "assets/js/7.ed2cbb82.js",
    "revision": "7522c765a7e608343d31aee2c6f435d3"
  },
  {
    "url": "assets/js/8.503f0d09.js",
    "revision": "39c437cecb8a0c250bef100d643fcc60"
  },
  {
    "url": "assets/js/9.17ef67de.js",
    "revision": "de18f0f1172f44b768bdf448190aa29d"
  },
  {
    "url": "assets/js/app.358ab551.js",
    "revision": "2d14217f517bec67c8b71aa9ec7213b3"
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
    "revision": "4d10b4d3f16a4e35d3c90dd44e189982"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "7cac5190746ae52ac6ffc7c9de120a03"
  },
  {
    "url": "game/risk/index.html",
    "revision": "48a7200be0d931dcbf96ec58cbc83c6d"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "9b1e97929084598913a9635d31e640ed"
  },
  {
    "url": "game/smart/index.html",
    "revision": "b1f39323a03f61f1b128c51f3b8ee4a1"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "6fa2284e690cc3075870bcb03e05c548"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "cdf4ec9dc6171cd828236bcf872fe5b0"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "4e97282988cc91b4fe035e70c68b9af9"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "ece164025584c87ae5447ee532defbc7"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "ee99b8279473b36b6cebcf2d26d0512e"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "c1d02b90007925f805bbac12e17d783d"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "f831a38e3fb2f0c34850fbaf3f293157"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "76fca2dfb639a4691182681173a5b807"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "e838c135c14e1a5cb0fc12e9f4b0b314"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "2e75b148fe1877522836219b517ab7b4"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "b197bcaf3a652de28cb5d304a5cba4c3"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "ee4e5ca9f2a2f9bf365032d67cad3b91"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "89cc341e2ee42d23b9ec74a71f9cb60e"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "0e98e5d5bd6c2d6a8004220e01d3e0ef"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "6886a15bcfe89b4df2dd84bab6871f69"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "d8c575eefc7ce69e14608c25538bbc87"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "6b7ab5004119083df0f53768ec6fff10"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "5735a4344fafd6d51d82786d521a9e9b"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "c600567c1aeb796a3bcfc3503e6d21ff"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "eff9f12b363dc86c9980ac439a5b29da"
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
    "revision": "780391bcf2a03d69d109621f7fcc7f9e"
  },
  {
    "url": "join/index.html",
    "revision": "124bffb002eaf1174ae394e6341c33bd"
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
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "3ff4b2e0e6a3a20df0afa053607bd685"
  },
  {
    "url": "search/index.html",
    "revision": "b073f2d4c59a0660b8248bf8c7936a62"
  },
  {
    "url": "tool/all/index.html",
    "revision": "7792c7509472e48c15a8868dfb963de9"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "fe1054b0e4fe10be0fd67932a54ea72e"
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
