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
    "revision": "ae412c80f472b9609857bce599e8d86c"
  },
  {
    "url": "assets/css/0.styles.e4c6596c.css",
    "revision": "aeed918f726da621cb2f0a6da3fe0a6b"
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
    "url": "assets/js/12.16c84030.js",
    "revision": "844d382fba5aeb41a58064fbc3e22a67"
  },
  {
    "url": "assets/js/13.bdc390a6.js",
    "revision": "a8b3aebdd8c7aa69af5440c1cb87da46"
  },
  {
    "url": "assets/js/14.b452e7b7.js",
    "revision": "ad575f0d6d12910527127147030be2e3"
  },
  {
    "url": "assets/js/15.05346d04.js",
    "revision": "f90792c7bfafe4f6f4e66bb5d2ca7e75"
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
    "url": "assets/js/18.50d9d589.js",
    "revision": "47b6e9ebf3aacc815b166e786fc0a15a"
  },
  {
    "url": "assets/js/19.12003889.js",
    "revision": "3992cb88327d8b3a518c08d70eb1d4b8"
  },
  {
    "url": "assets/js/2.2e00af6d.js",
    "revision": "3846055cd6187e77183a3b5787df7416"
  },
  {
    "url": "assets/js/20.851e8182.js",
    "revision": "6c4a46dae39f5deb07a273427c1679a0"
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
    "url": "assets/js/24.14280da6.js",
    "revision": "146b33bbc77abc78cfc5682c7698da43"
  },
  {
    "url": "assets/js/25.b4fbb56a.js",
    "revision": "89ec7c37a15e0db9429ec125ce5e2b2b"
  },
  {
    "url": "assets/js/26.8dfa104d.js",
    "revision": "77fe47f5d6a9055f6684e0035a9afdcb"
  },
  {
    "url": "assets/js/27.dd6bec77.js",
    "revision": "47fb48fabab16880f719220961014e4c"
  },
  {
    "url": "assets/js/28.dedd36ad.js",
    "revision": "202ab0ef655917def842ab1eb2cdf141"
  },
  {
    "url": "assets/js/29.f67c7982.js",
    "revision": "6deec9d46fba9cd20c97806021b526cd"
  },
  {
    "url": "assets/js/3.ce5d45af.js",
    "revision": "23c62ffb71252281e9a0d289c919983b"
  },
  {
    "url": "assets/js/30.5564fc3f.js",
    "revision": "5ccb6ba791389d1fff2742a5ee04c5a9"
  },
  {
    "url": "assets/js/31.d078e1d0.js",
    "revision": "202ff7b0144872587ecb8d549b0cb534"
  },
  {
    "url": "assets/js/32.9b89c71f.js",
    "revision": "a0bc630d32883f0b19a62f72a77563c9"
  },
  {
    "url": "assets/js/33.e6ca055e.js",
    "revision": "5d117a3f2de14b93daf84732b8dd0ef7"
  },
  {
    "url": "assets/js/34.bb18c931.js",
    "revision": "705578cb2ca0b9356143c6e999ef3bbb"
  },
  {
    "url": "assets/js/35.81a48083.js",
    "revision": "353afb6e45124ca8539903ffa55d0d97"
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
    "url": "assets/js/5.5b3b011f.js",
    "revision": "3f1477a6bd6c2b96f6e7f4aa6eb985a9"
  },
  {
    "url": "assets/js/6.1a689ade.js",
    "revision": "69a17f344b2866f4c58ca0df87aa94e8"
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
    "url": "assets/js/app.5d762475.js",
    "revision": "d4dcdcaa8a9653a4d7a748efaf04ff45"
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
    "revision": "3d82ec2a395b9ca1afdeeb8fea459888"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "b462d50c4d0e243c4aa4af8d6d0f2033"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "fba8ba001a0866ed5590f57f02d80db4"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "1c69d165beed33074fe69ab6ac8d061e"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "87bfe3c2b512f9febab01b48cc9d0995"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "f1e8a817f174f354d469634dbb69e039"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "7f3ff01555154041de9f10327582dcdb"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "d666f11eb76c1556fa33d55abf093430"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "c98f1a00d62293f4e00cb3426500a35d"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "376fa03bd62a09748803ab264864d5a6"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "aaf10b186c09970ee575a7b969d5641e"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "2594fdc9339a275d5fc1d0019fbd6bce"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "f299304c5c078fe396f198b3ca0f183c"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "20b03c648e41ce0bde798e68d0d1d95c"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "46f844e0c53aa2fbdf9788eef2b83b87"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "f61c72b7405a167593fc2171fa0360b0"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "ed0775423607d1c7dccd128b8c151874"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "ffcf7cb5601e5db7d5d1d22e08f05581"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "1fa18dd73c35302f4f51030c7eaed3aa"
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
    "revision": "580b9bd1cea104169d74b8a4090651b6"
  },
  {
    "url": "join/index.html",
    "revision": "cf692d1099f0864294ee23fa98b79e49"
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
    "revision": "552a3bd23c067ac8f42b2e98a7aecc54"
  },
  {
    "url": "search/index.html",
    "revision": "80c575524f1751266e31c4b47fb717de"
  },
  {
    "url": "tool/all/index.html",
    "revision": "1996af09f840bd25746e7a287b67d9f4"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "d4e6bfe56b0ff3a9c868c39211520098"
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
