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
    "revision": "f9445ecb8ab7d7a00c5a0fd45942b499"
  },
  {
    "url": "assets/css/0.styles.ff4ed60a.css",
    "revision": "42eadb12b0e3e6f0718728222901ef2f"
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
    "url": "assets/js/10.8d934aa8.js",
    "revision": "28558bf0458e81f380e7aef506a14551"
  },
  {
    "url": "assets/js/11.8da4b36c.js",
    "revision": "ce75718cc1b383437b30996ebe36b98e"
  },
  {
    "url": "assets/js/12.b9959c0e.js",
    "revision": "ec752b6f461a51fb62c35ed13916c8d5"
  },
  {
    "url": "assets/js/13.e9ea6ca6.js",
    "revision": "f7595ddf5771d474530c0aba355cee17"
  },
  {
    "url": "assets/js/14.30ace240.js",
    "revision": "ea407f992f2e04ef8ebf27cbd10ad417"
  },
  {
    "url": "assets/js/15.fa3764b0.js",
    "revision": "fd51eda382c810ef1b7a7dbf75e8cb6e"
  },
  {
    "url": "assets/js/16.69b9b6bb.js",
    "revision": "f6c7fa8c9c22c057ef270b3acc4207a1"
  },
  {
    "url": "assets/js/17.01fe3e14.js",
    "revision": "66d9147d4800cf7bad995393f968f415"
  },
  {
    "url": "assets/js/18.8bd07fdc.js",
    "revision": "c4dc60062da4ec9046726d74bf97c796"
  },
  {
    "url": "assets/js/19.0f8461e6.js",
    "revision": "a1f6df1a5bdeaaa16d7c0c8212f4eb0c"
  },
  {
    "url": "assets/js/2.27228e9c.js",
    "revision": "bc218038afa663b634738adf9e0607bd"
  },
  {
    "url": "assets/js/20.28fe333a.js",
    "revision": "2d5af1cd0435f0c1475099ce174b696d"
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
    "url": "assets/js/23.68c8c239.js",
    "revision": "c9f98081f9ed93db505fa71f0ccd3f83"
  },
  {
    "url": "assets/js/24.12b99193.js",
    "revision": "cada2e3407fb44c290da3859aaccb2ab"
  },
  {
    "url": "assets/js/25.f0ef6066.js",
    "revision": "ac585cdcb26111e4884cbc38eb5f773d"
  },
  {
    "url": "assets/js/26.4b8a0d87.js",
    "revision": "6d04a233adf62cba99ed0e6dcd0f71d1"
  },
  {
    "url": "assets/js/27.ba977e51.js",
    "revision": "47e82bef72f5ec1b489bac2c32e1ebef"
  },
  {
    "url": "assets/js/28.39d9374e.js",
    "revision": "180735c5d1a9b68253d0948071426837"
  },
  {
    "url": "assets/js/29.2bb2f0cd.js",
    "revision": "28389d2cff5c17a47c2d97ccb5c0ab76"
  },
  {
    "url": "assets/js/3.05f21269.js",
    "revision": "236189752fe26e8141c8600615ecf872"
  },
  {
    "url": "assets/js/30.e4e44459.js",
    "revision": "a01a329866b0bd4f73f60a11373abd50"
  },
  {
    "url": "assets/js/31.32abf314.js",
    "revision": "ba0099cdd6a71436975fbb939ab407aa"
  },
  {
    "url": "assets/js/32.cf35b638.js",
    "revision": "4dc3e4d4d9abc53c85f00b7d9b649fc0"
  },
  {
    "url": "assets/js/33.fd2a164a.js",
    "revision": "3110dd76dba1d6dd54edb8e7a2484147"
  },
  {
    "url": "assets/js/34.65f336a5.js",
    "revision": "19bdca6eb47ad619104b1ca6c0c24baa"
  },
  {
    "url": "assets/js/35.a2cf8b33.js",
    "revision": "f60dae0b9abadced93ec8ff95e9fc04c"
  },
  {
    "url": "assets/js/36.efe77056.js",
    "revision": "c61e4b15f355e5f1e4a5cfa31f860436"
  },
  {
    "url": "assets/js/37.e640ca9d.js",
    "revision": "1ff7061dee688e6083e83aad8d5d9fca"
  },
  {
    "url": "assets/js/38.9dec359f.js",
    "revision": "ecacfe5e2d397e4e6348346c89a92900"
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
    "url": "assets/js/40.37e406e3.js",
    "revision": "bfbbdbe9959f050007f8cb3392f148a6"
  },
  {
    "url": "assets/js/41.3fdd3de9.js",
    "revision": "3226112a6c346a7350c26a8fa68bf379"
  },
  {
    "url": "assets/js/42.f756cbd9.js",
    "revision": "254a19d15239611598de1aa27966320e"
  },
  {
    "url": "assets/js/43.cc52fa6d.js",
    "revision": "525de5bdcece8e6d472d620e4f52e943"
  },
  {
    "url": "assets/js/44.f8c00d46.js",
    "revision": "e939d79880740d8b759c483f36bd100d"
  },
  {
    "url": "assets/js/45.88b9f5ad.js",
    "revision": "1af3260dcb6dc30aa8384cbf72bfc6ca"
  },
  {
    "url": "assets/js/46.bf2eba72.js",
    "revision": "87a2d5dfaea07e02232df26f3ab13053"
  },
  {
    "url": "assets/js/47.fd3c71ff.js",
    "revision": "0b2016cf209f5cf0db9fcdf30c97534a"
  },
  {
    "url": "assets/js/5.51adfdb5.js",
    "revision": "607764e0bc7f52ad873164fd2f4b638a"
  },
  {
    "url": "assets/js/6.13519067.js",
    "revision": "07732367464f7f7fa95a5fec32edf6ed"
  },
  {
    "url": "assets/js/7.30542440.js",
    "revision": "6267b1d9521d842a5cc001f65c1b2991"
  },
  {
    "url": "assets/js/8.2782a6b9.js",
    "revision": "4ec5736a633c9297e5d0eb878d050567"
  },
  {
    "url": "assets/js/9.e2142760.js",
    "revision": "1475d973e75afdbe26498aaa900688b5"
  },
  {
    "url": "assets/js/app.564f7602.js",
    "revision": "796cac94abd5c3b05ea3a7ea8c8cc4e8"
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
    "revision": "5709c0c895e4423d918b87afe2800a4e"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "7d5e8549e33cb0215126558e8af41367"
  },
  {
    "url": "game/risk/index.html",
    "revision": "453906bb9303bfe7976164942d16e6c3"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "a5ad03537a4de59805b428e87e198563"
  },
  {
    "url": "game/smart/index.html",
    "revision": "1d6290dcfd31e9f9056b2ffb6aca3e62"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "0c499be12a358fd84d62b9f760cacf05"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "aabd2c172ec5e4db0f8dc8525e84a4d5"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "3fba795660a3a62bffb724b525e32288"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "f7226008f546709bb4e253dfcd228956"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "d82de46015998781f2712bf11bb61ac1"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "838473921d6d75a89366bc945da2852d"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "95d1c85fa6eb743f6da55c645d303736"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "45dfda3265c973278b2cf478adf2fb36"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "4fc43c41cc425a9cc8eb6e2b6be86b39"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "802b7ae9c2f340fb448f5695bb9ef547"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "8b6c35e9d0ba38d50361b0b88d15f530"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "8a25347b2d30676ccb6c17a148bde738"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "f3fcda5d6958a09445c93782dc0c2ad1"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "4f7b7865a41c13aba0c39b5645657b83"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "20518e1cdae0a2e79d6f73f39d4ed81f"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "689df3fee147f99909b16e1803937678"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "f4a58a2a30905d3f98bb7667a40aa01b"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "63a0b29b4462e405ebe52462ddb57aaa"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "c64ffa1a412d3016778ffa17ce866a1f"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "c82d2e9f97be67a15f0228ddeec57864"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "83a7579713b1d4cb967ad8cd6b5135bd"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "7e1ed96200b9022ea7216577b8dfb777"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "00f973fa83a9a3c21791dafa05a2dc9a"
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
    "revision": "60108dd5f4b024cbc379cf4a401bb718"
  },
  {
    "url": "join/index.html",
    "revision": "8ca3ff7bf7da4fcc3431c094bab6855d"
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
    "revision": "3baca45db94bae8d2818a5e43b6f9e5e"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "541b133ffd16a26ec40de064e33584ef"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "660e3f68da6c194dc45e29afb258b382"
  },
  {
    "url": "search/index.html",
    "revision": "b3c53f9b72ca11b9c4736c8e3f926095"
  },
  {
    "url": "tool/all/index.html",
    "revision": "6d85e783e2d106eccef3f2f33e20b354"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "29b3d7fd5a01a8bb46b1762823418a03"
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
