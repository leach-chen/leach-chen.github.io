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
    "revision": "ce1d044cc2588d6b3c24f8a19e516dcd"
  },
  {
    "url": "assets/css/0.styles.618e63a4.css",
    "revision": "09429b50c24fc42aa5bebe6d2da1c858"
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
    "url": "assets/js/11.e1082d66.js",
    "revision": "1802bc5a46ddf60b12d8b6d0aabc9afd"
  },
  {
    "url": "assets/js/12.e2d78086.js",
    "revision": "67a3a8ae2ed8699bc92e5c563d5f8f9d"
  },
  {
    "url": "assets/js/13.7acac453.js",
    "revision": "50f71af7b7ede2b3c48a892295580844"
  },
  {
    "url": "assets/js/14.8846a669.js",
    "revision": "511373c90952ef507804b04d9fbf339f"
  },
  {
    "url": "assets/js/15.8cd7b643.js",
    "revision": "e9668bccbe8aa74da99781ad2667b594"
  },
  {
    "url": "assets/js/16.c4c6a5cc.js",
    "revision": "bb9782535e2eb07d3c57e6a54d458126"
  },
  {
    "url": "assets/js/17.ea532841.js",
    "revision": "af748f240b83ada85baa25bf31373860"
  },
  {
    "url": "assets/js/18.4e3b64b3.js",
    "revision": "e0b02461fed18406cf2c84e7d3f0a939"
  },
  {
    "url": "assets/js/19.5c24b583.js",
    "revision": "beef0125b2338b74009e345e16c86457"
  },
  {
    "url": "assets/js/2.27228e9c.js",
    "revision": "bc218038afa663b634738adf9e0607bd"
  },
  {
    "url": "assets/js/20.fcd34b36.js",
    "revision": "50ad5fe61503ce537d7e38c513be4789"
  },
  {
    "url": "assets/js/21.9035e626.js",
    "revision": "051c76bed4392c08600ed6ab9a7ae293"
  },
  {
    "url": "assets/js/22.4c3d030f.js",
    "revision": "484d6855f9516a6d6081c41350240147"
  },
  {
    "url": "assets/js/23.bdeee7a2.js",
    "revision": "4251b4552673c176a2104b5890753452"
  },
  {
    "url": "assets/js/24.8cd6f6ee.js",
    "revision": "f007ef39d637ba293aaf043cf3cff08e"
  },
  {
    "url": "assets/js/25.c41c0684.js",
    "revision": "ad1c1933d2b17446ee3b713130419191"
  },
  {
    "url": "assets/js/26.c786864d.js",
    "revision": "e31f07924a4138193a879bcdbd69a010"
  },
  {
    "url": "assets/js/27.a7591798.js",
    "revision": "646d958d39bdbf5256223dabd9f41919"
  },
  {
    "url": "assets/js/28.095dd441.js",
    "revision": "f30a1ef5c9de09b80b17c76ba5f53637"
  },
  {
    "url": "assets/js/29.ae3c82df.js",
    "revision": "eb769094c260a9499e7967ccc7a0691e"
  },
  {
    "url": "assets/js/3.05f21269.js",
    "revision": "236189752fe26e8141c8600615ecf872"
  },
  {
    "url": "assets/js/30.6ac19b97.js",
    "revision": "0e57afa4d4ffbd97104b81ed051cddca"
  },
  {
    "url": "assets/js/31.f77471b1.js",
    "revision": "cf0b22ade6b77aed58fc89107269ba11"
  },
  {
    "url": "assets/js/32.f77c0bd8.js",
    "revision": "d04d2e187d34b897bf88c7e85ee308a2"
  },
  {
    "url": "assets/js/33.a61ce228.js",
    "revision": "484f301809321c042fc5d1c5840111f2"
  },
  {
    "url": "assets/js/34.0dd8f116.js",
    "revision": "dc44ea32e4a2c0e2ffd53cae280ba53d"
  },
  {
    "url": "assets/js/35.bc4da097.js",
    "revision": "28f8eadeb8ae6d8c0c50aee6a793764f"
  },
  {
    "url": "assets/js/36.0f112964.js",
    "revision": "1a34a803ea9431511ed91eacd39b46ef"
  },
  {
    "url": "assets/js/37.c34080ac.js",
    "revision": "b9a2c09a8b659aebb98a18f6ee0494a8"
  },
  {
    "url": "assets/js/38.704c9954.js",
    "revision": "5cf483de4a45601e713476b5a4acf825"
  },
  {
    "url": "assets/js/39.03f0693e.js",
    "revision": "d3fd26ff8df963febbfcfcc61bfd013f"
  },
  {
    "url": "assets/js/4.038fb474.js",
    "revision": "a054ab2e88df8bcf91e4fe819346fd71"
  },
  {
    "url": "assets/js/40.871bdbd7.js",
    "revision": "778a0bf2375868140569ef6407f5fe03"
  },
  {
    "url": "assets/js/41.dd01427c.js",
    "revision": "10b6882531dac01e01849da78a8b2ca7"
  },
  {
    "url": "assets/js/42.7e67f130.js",
    "revision": "505dbd0b9207c28a5c10a8f2923122e2"
  },
  {
    "url": "assets/js/43.7b8a366f.js",
    "revision": "ffe072da5459bc236fb5ad3104eb8e3e"
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
    "url": "assets/js/5.22feb9ae.js",
    "revision": "b798b702c05e61666b86576ddb6b23b4"
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
    "url": "assets/js/app.aad88ebd.js",
    "revision": "fd5bcd9e62741f9fd7f9640569f46ce6"
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
    "revision": "bcc5bf45d1a60a9201121e0769c54663"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "0a0a84bab0e6294fca015cfa73028072"
  },
  {
    "url": "game/risk/index.html",
    "revision": "f6aa51d7398590ae2bafae9fdc8c0915"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "0665cf5caa54e2e4cdb0eb779a02362c"
  },
  {
    "url": "game/smart/index.html",
    "revision": "5981ded3b348b04978746be38163f0a0"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "90655f9ab4831a714f92011adc60374c"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "3502d03726bc2af7c9f7bb1e9de19bd4"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "70646b2d23ca9a99d1c64f9ffa824d79"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "f826a0d3c74bea7be10af73a80bf29c0"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "185d2574e152d4b04eb594479ff26f1c"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "16e986c878fca37d687a8829a083c6c0"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "a5cf256b0cdd6935f952f77ef6b0d9e9"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "81403f53a92829243082074c4636900c"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "78575733c70bff4092553a6fc1ab2353"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "3b0bf672389c958020700d0c87dbb82f"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "9c6729f622210026592b8904017c5aac"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "60a7ccd601242579eb03a02e2f8c2c6a"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "467ce141b3bb3a29dc3214c80bec78e9"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "7f1f39f489e004e1409d013093d68755"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "e2de965df28ad822ce437b5dcdb3a90f"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "70b2b0d595a60876893b167804ee9327"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "1388c6cedfb6199e953c3ee950c43535"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "dc373ae578f4e7c2feb87f6978a6d3a8"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "79985459dfd60974c933ad01f3fa02d1"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "e29f79d16c8878c3209574beef7bfb04"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "aac4ebd62376be77e1ba11ecb97c7e39"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "a106412784397c1a0078f3a22c8c7ea1"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "162ab6eb1e88ae12ef2a56d8e42f2c90"
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
    "revision": "55b982ea4fea75dbebf6be0274a6ecb1"
  },
  {
    "url": "join/index.html",
    "revision": "8b9caf68512b2647c3958a5f3f9ddaf0"
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
    "revision": "97bfd11ce28170effa0ffbd603b70429"
  },
  {
    "url": "search/index.html",
    "revision": "5a730de371f9f8d307a667dd0a853d6d"
  },
  {
    "url": "tool/all/index.html",
    "revision": "3ffcebcb39be79ed22ca677e08fc4de1"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "484a2028bdbe42bc3352428057661941"
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
