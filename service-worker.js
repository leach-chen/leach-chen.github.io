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
    "revision": "655d32b25fb9ae32f6318cb05eeb24ba"
  },
  {
    "url": "assets/css/0.styles.86f07c90.css",
    "revision": "15429614e44bf2bdb14420b2987f35ad"
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
    "url": "assets/img/yanhua.d5507315.jpg",
    "revision": "d5507315681a654c8f1f5f00daf87783"
  },
  {
    "url": "assets/js/10.a5e92d6c.js",
    "revision": "86c4d050a8d99f3adb531838b171ec13"
  },
  {
    "url": "assets/js/11.b52a0d91.js",
    "revision": "ec7c81959650bac075a29adb042c6019"
  },
  {
    "url": "assets/js/12.6a7266ab.js",
    "revision": "9f2f5ef39e64e8021f3864f0068b4474"
  },
  {
    "url": "assets/js/13.02978522.js",
    "revision": "ddf798d27001ea3b8290576347b66830"
  },
  {
    "url": "assets/js/14.8094e4e4.js",
    "revision": "888f267acb9186613498ecafcb44c471"
  },
  {
    "url": "assets/js/15.dfb1d128.js",
    "revision": "3b6470ef3616745f4308df214fcdd062"
  },
  {
    "url": "assets/js/16.2b7eb2d9.js",
    "revision": "8fc25d295ce5bc14e1f67316dff73ce3"
  },
  {
    "url": "assets/js/17.c6eef2a4.js",
    "revision": "92b392290d0e67c1fe1b5235724c861b"
  },
  {
    "url": "assets/js/18.86f2408f.js",
    "revision": "1cdadb96573892299226a33a0c18c274"
  },
  {
    "url": "assets/js/19.8318e7e1.js",
    "revision": "b1589876e194ec7d0bf501b00083c12b"
  },
  {
    "url": "assets/js/2.27228e9c.js",
    "revision": "bc218038afa663b634738adf9e0607bd"
  },
  {
    "url": "assets/js/20.a47cd108.js",
    "revision": "ba5672d8a738b2eaa2f138a0122441ca"
  },
  {
    "url": "assets/js/21.8b2fc97b.js",
    "revision": "93df76e3a9f6b8c83bcce5b6df523f43"
  },
  {
    "url": "assets/js/22.b3960ac9.js",
    "revision": "0457c3566dcf4ee3cbbcfef979ef983c"
  },
  {
    "url": "assets/js/23.1d44497a.js",
    "revision": "f58639b0b20a9701a000b58779ba6c8d"
  },
  {
    "url": "assets/js/24.17c1cc80.js",
    "revision": "9ba237fb3ed2498d88d95aa2453f0871"
  },
  {
    "url": "assets/js/25.6e8d648e.js",
    "revision": "777e021bf3bb3e1bc5b8cbe4965aa23d"
  },
  {
    "url": "assets/js/26.df9355c1.js",
    "revision": "c528db1fe8ca3cb1966a5f34ecd6a20c"
  },
  {
    "url": "assets/js/27.9a422f26.js",
    "revision": "44f438f0ca30933dcd560e86daf601d6"
  },
  {
    "url": "assets/js/28.25370495.js",
    "revision": "be7570d7c704dc5b7205267d5a730413"
  },
  {
    "url": "assets/js/29.a8096d4b.js",
    "revision": "8458f2a9b208f27b42ea900f3f86e687"
  },
  {
    "url": "assets/js/3.05f21269.js",
    "revision": "236189752fe26e8141c8600615ecf872"
  },
  {
    "url": "assets/js/30.34fe31c7.js",
    "revision": "27b13cb18bcccb838409c1f16eaedaba"
  },
  {
    "url": "assets/js/31.1626e951.js",
    "revision": "7f217aab980e041bb8d306e91df97283"
  },
  {
    "url": "assets/js/32.006653e8.js",
    "revision": "fdf70bbb801412b8337386e7f083434d"
  },
  {
    "url": "assets/js/33.df78eb2e.js",
    "revision": "b2e27e7ac7101ba950b89833908624f1"
  },
  {
    "url": "assets/js/34.5ca9b732.js",
    "revision": "6729f087b34ffcf09fce5bae2c25731c"
  },
  {
    "url": "assets/js/35.1cc92347.js",
    "revision": "d3442955db5fad931a7a2b113a8baea1"
  },
  {
    "url": "assets/js/36.11f6c723.js",
    "revision": "8c33ab0c0c28606817d6c70deb1ab6ed"
  },
  {
    "url": "assets/js/37.7b9dff62.js",
    "revision": "4fc8a02456fb3194a8f8e89cc7dd87ba"
  },
  {
    "url": "assets/js/38.c80195b8.js",
    "revision": "329d304babb364d1e788487817b6c364"
  },
  {
    "url": "assets/js/39.c72a89e3.js",
    "revision": "65b324655e7b4834c678418533de0bfc"
  },
  {
    "url": "assets/js/4.038fb474.js",
    "revision": "a054ab2e88df8bcf91e4fe819346fd71"
  },
  {
    "url": "assets/js/40.d0c171a1.js",
    "revision": "4ca3d7a68b5bd2dfe4b888e504d907ec"
  },
  {
    "url": "assets/js/41.c9efff3e.js",
    "revision": "7c4d927734c3e6cb4f9848946e68f8b2"
  },
  {
    "url": "assets/js/42.0fb8f979.js",
    "revision": "7bc804a991fba262a474c207e99c75cf"
  },
  {
    "url": "assets/js/43.b507f776.js",
    "revision": "187c071de308f4e2aee59840ac00f5c8"
  },
  {
    "url": "assets/js/44.017d22c5.js",
    "revision": "343559b68c57fa0a9a7cdf7ea2179d5e"
  },
  {
    "url": "assets/js/45.ad3fe887.js",
    "revision": "885fa6cee0b867cb775ff625c9626339"
  },
  {
    "url": "assets/js/5.953ec2c2.js",
    "revision": "c31b79dadf7f6b49dc563f9c78dc8611"
  },
  {
    "url": "assets/js/6.13519067.js",
    "revision": "07732367464f7f7fa95a5fec32edf6ed"
  },
  {
    "url": "assets/js/7.f6ae611d.js",
    "revision": "c0d70206d48e75c9002dd9f4f402508a"
  },
  {
    "url": "assets/js/8.9ceed4fc.js",
    "revision": "2009499f19457e30f2a3cc70c6002790"
  },
  {
    "url": "assets/js/9.e2142760.js",
    "revision": "1475d973e75afdbe26498aaa900688b5"
  },
  {
    "url": "assets/js/app.ec7f85f8.js",
    "revision": "240374ada6f8809442e1eddc8149d186"
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
    "revision": "2b188138d27404cf02dde8b1b45b9586"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "a22c2f6d7af188304dbb4512d333a136"
  },
  {
    "url": "game/risk/index.html",
    "revision": "757ae5cbdb2c82452229ca4f68a8372a"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "e674ab2964ee60ad7ae853d3176ca6e0"
  },
  {
    "url": "game/smart/index.html",
    "revision": "305e41e4bac5b84087c45ff29ab7a147"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "1f8d75f49fcebd19f0a851fd50c60678"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "c5b655339e572c83cec5b3053e14914b"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "4ed96c1afe2a8b9f053c5f70c2d8951e"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "f05e9ad9e8c4be7c647ee30a007f2b98"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "5c6c2c1d7f032ea56317772cb20f113b"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "75f273696960e47977bc6d6661acbe13"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "e553794a4d87addc876706ad052a0b51"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "6612c377a401be452bf1cc5b31209175"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "88e1f2b66d7d2f3426ccb6e363ce0640"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "764bbd00721e0e2416033dfa6da59821"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "a65c558d71bd81acb77c2fcd9c19edb0"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "219b35d4b702161244183d1ca6365449"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "a6de9ec595d489e417a9a50995e82883"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "2cdcd0d5247b090b567179ef7f16ebd2"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "6620b3e359e7e4d61195af1c3b60ae25"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "8caf305f9e7ea07273f9232cadfba0be"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "8e09ea1ef1b5c2a83ac91845c3f6c574"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "5cd391b1a711af62550d4be368adce04"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "5a010684a46aa8e1f1e1fc8bce5cfedf"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "328dc8a8e4c2c0649c2059da72eed015"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "21896ca186ba6f68b11d6bbf9fb0d7ab"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "513641cdd717eb7acc2375389ab18363"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "bfccd3f7062c493cb5dac4a5ba71194a"
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
    "url": "img/yanhua.jpg",
    "revision": "d5507315681a654c8f1f5f00daf87783"
  },
  {
    "url": "index.html",
    "revision": "964d4786373b9f22c8350dac23d19d4b"
  },
  {
    "url": "join/index.html",
    "revision": "1eaeb0a4cb974448ae9435f62921e007"
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
    "revision": "a9ebe346fe81664b5e218b3336162013"
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
    "revision": "40fd7e9234606a341adcbb1ce0a15d51"
  },
  {
    "url": "js/yanhua.js",
    "revision": "fdd80010fb22905b481693978455de20"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "d06bde64ab9a80b99c01bb7b5ac50bd7"
  },
  {
    "url": "search/index.html",
    "revision": "4ee25e8b216e9fdf4b1e9105b8416794"
  },
  {
    "url": "tool/all/index.html",
    "revision": "59d238ed7f63ffe71e0dd41b7a35fa24"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "93385077a44f1b0c4ce684e5aa0e262a"
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
