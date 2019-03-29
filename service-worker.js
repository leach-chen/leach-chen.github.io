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
    "revision": "6cae3d1df3daf354176849bdc0992ea5"
  },
  {
    "url": "assets/css/0.styles.42dfa4ba.css",
    "revision": "805cd71bb84d40430ae2ef78af579b99"
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
    "url": "assets/js/11.1bb6aad1.js",
    "revision": "fef50857eeabedfa378fa9211e081c58"
  },
  {
    "url": "assets/js/12.802db894.js",
    "revision": "9137e19bfaae1bbddc712ed0928cac67"
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
    "url": "assets/js/25.c45eddc1.js",
    "revision": "7c74d56212413bf951841a4151be65e9"
  },
  {
    "url": "assets/js/26.3cd8bb3b.js",
    "revision": "368c59a1c0c6cd192e206dde6d53b397"
  },
  {
    "url": "assets/js/27.9a3eb1d1.js",
    "revision": "6070e78823979ca38368a441ffb8cad7"
  },
  {
    "url": "assets/js/28.25e24a24.js",
    "revision": "dff6e815771bc7d3ba482961d7fa2a1a"
  },
  {
    "url": "assets/js/29.16262a03.js",
    "revision": "fe2a84024a51086e3f19c74a534079b5"
  },
  {
    "url": "assets/js/3.05f21269.js",
    "revision": "236189752fe26e8141c8600615ecf872"
  },
  {
    "url": "assets/js/30.0199b319.js",
    "revision": "fb10608d7169deee359d9c669b0b926e"
  },
  {
    "url": "assets/js/31.f77471b1.js",
    "revision": "cf0b22ade6b77aed58fc89107269ba11"
  },
  {
    "url": "assets/js/32.cf35b638.js",
    "revision": "4dc3e4d4d9abc53c85f00b7d9b649fc0"
  },
  {
    "url": "assets/js/33.f3dd8a0c.js",
    "revision": "63b5cdb153096c58c9a58ae8fd23ccb5"
  },
  {
    "url": "assets/js/34.0dd8f116.js",
    "revision": "dc44ea32e4a2c0e2ffd53cae280ba53d"
  },
  {
    "url": "assets/js/35.9dced831.js",
    "revision": "ba0ea7bed274bf2c187b217bbe46370a"
  },
  {
    "url": "assets/js/36.0032af87.js",
    "revision": "6cad6606c9b24be9c9d61a2d5f4b174c"
  },
  {
    "url": "assets/js/37.2e59c699.js",
    "revision": "d86f4fb5ae0b05a226424010f7672f2f"
  },
  {
    "url": "assets/js/38.bc20d6df.js",
    "revision": "e5d2d0ff321c01a692dcec19594bc12b"
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
    "url": "assets/js/40.9e70dbb6.js",
    "revision": "ca20112b8416ab2c2ebf9f913f785151"
  },
  {
    "url": "assets/js/41.6706fc5d.js",
    "revision": "127b59a5f6403e4bef8befaaeda23377"
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
    "url": "assets/js/5.13373078.js",
    "revision": "61fa1f94033fa0ba6f8d17de74c6d8e2"
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
    "url": "assets/js/app.252bab2e.js",
    "revision": "d35a4a86d876e0e570e129e6d0527ff1"
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
    "revision": "f593502c7a536386a2207910a87deeae"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "3dd475ef010020a21deb0b60c6a44ec4"
  },
  {
    "url": "game/risk/index.html",
    "revision": "29e2d04ff257968374c7ae9c5610822e"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "20254ff80c65058665ab144d60df0b29"
  },
  {
    "url": "game/smart/index.html",
    "revision": "40b54a9dafa775058859d42955abacc5"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "9a6d543a19ab68f748810b4705305663"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "58829af137116481a36eb8e181fe5e18"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "ad1023c2950c1dd5fcf828032213af89"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "abbc76aa5de5230b4ce7f22ee0b37faf"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "f7a2609a11b8cb5c96e0b8eec31b8d59"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "d21187a4c3f08fb460be77d4bc81651f"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "a6ef4e5d22b4b894f0beb6ced59c791a"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "8ba2e4d5233f07e4696217bbb4dbe568"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "3cce514e9de4e7543f54a5272a029f73"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "bb83324e0403d4703e474e3196bab76a"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "0ae77b50b33fc816291e266cd5c7d217"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "c2bf84248ca4868b3fc8aab76ce2b8d4"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "b566a9a91757a380b03c92fbe93194f1"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "4c434f35ba2fded82f685d3d577ac76a"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "9bac351cddea3ef189399cd74250bc62"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "cd95c4d56ed264630a003464a232559a"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "228049bcf7023776ceed38422cc096e2"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "dfbb35a0619ef4888027503cf45ffb24"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "991ff8228b9fafa66aa136c48c9fe75f"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "2f5ffdf2c26c47712d62566eb01ad0f2"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "5777f4fb293c5e74a95acbbb24bc7abd"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "9fcc4e6e69f5912afd4bb1dc29cd1a84"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "6a8cf4be2319da2bbabae2a8812e4ee7"
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
    "revision": "2d300721db528baf78af94489c4c547f"
  },
  {
    "url": "join/index.html",
    "revision": "8678dafbb6c6c3566b5f132a37e08bd1"
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
    "revision": "fe0a850a05d85286b1ea43771e489f68"
  },
  {
    "url": "search/index.html",
    "revision": "cc841a3be595555473773e52240d4b11"
  },
  {
    "url": "tool/all/index.html",
    "revision": "213419f81a20ca85f563cd81436d4e48"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "a3650d7f8781813df415be2bf95db613"
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


