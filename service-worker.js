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
    "revision": "89270de12420dea458063dec29a2cf27"
  },
  {
    "url": "assets/css/0.styles.24404687.css",
    "revision": "e0bfb20233ea72a48599c1b89d51bdae"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
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
    "url": "assets/js/10.f8dd9bb8.js",
    "revision": "831bdc12539406d5afbc24dc861b0488"
  },
  {
    "url": "assets/js/11.1cdb12c1.js",
    "revision": "8efd537105c56686a88b71ab0620a61a"
  },
  {
    "url": "assets/js/12.96bea1ea.js",
    "revision": "4dbeaedbbc943ef34cae08cb3730cf07"
  },
  {
    "url": "assets/js/13.e7d9454d.js",
    "revision": "ad3cb545ce77f18dd9c847669b001d53"
  },
  {
    "url": "assets/js/14.0707da2e.js",
    "revision": "0e78cdf4846af54ed24201c4922f833d"
  },
  {
    "url": "assets/js/15.4e75a98e.js",
    "revision": "c2a6a8750bc5ba6fd9bc6234188ee4bb"
  },
  {
    "url": "assets/js/16.aeb44d2a.js",
    "revision": "ee0e55b289811fc9d7cb11405db140c7"
  },
  {
    "url": "assets/js/17.2f0dd214.js",
    "revision": "8f426f4aacf3a92e86356810f4c426a0"
  },
  {
    "url": "assets/js/18.5c1197c5.js",
    "revision": "199b9d2115c2fdd5a78a1d7f19885adb"
  },
  {
    "url": "assets/js/19.af24de40.js",
    "revision": "0baa291baa90d67b7b207bc838bbe64e"
  },
  {
    "url": "assets/js/2.e72abf37.js",
    "revision": "3d6fe2be316286d98fddc8c0eb48f8b9"
  },
  {
    "url": "assets/js/20.41bd3179.js",
    "revision": "911345c35c87f22004385901ce64c173"
  },
  {
    "url": "assets/js/21.64d66ea9.js",
    "revision": "4b80770723a7cd8810496edb7391ca22"
  },
  {
    "url": "assets/js/22.942a9178.js",
    "revision": "4444cd34d175cefcae375569e89675f2"
  },
  {
    "url": "assets/js/23.0d9f765b.js",
    "revision": "774432a482a2983471f4996659631871"
  },
  {
    "url": "assets/js/24.c27850cd.js",
    "revision": "f84814a13f990cf6346cac73db4cf04b"
  },
  {
    "url": "assets/js/25.63be34f4.js",
    "revision": "77bec1d790595b3fed2657e7b84b6351"
  },
  {
    "url": "assets/js/26.529751fe.js",
    "revision": "b49cc2e5cd8e3cae0197f9facf5dcce6"
  },
  {
    "url": "assets/js/27.01352029.js",
    "revision": "243edd04fb87e64587c7d24cc93c90c6"
  },
  {
    "url": "assets/js/28.d0217fa9.js",
    "revision": "3015b68c7af297658fef828b5628102f"
  },
  {
    "url": "assets/js/29.7442bcf5.js",
    "revision": "66ba2422c5c3e07ee25335504e2fe54d"
  },
  {
    "url": "assets/js/3.d94211b1.js",
    "revision": "80a490336dd12423682f0aebf5cd3df9"
  },
  {
    "url": "assets/js/30.38539684.js",
    "revision": "466d569753dc1c4fab572f9dcfacbe19"
  },
  {
    "url": "assets/js/31.861aec26.js",
    "revision": "e85a3d4d0838298f92decf234fdc1995"
  },
  {
    "url": "assets/js/4.533b338a.js",
    "revision": "e11cb41342172f0b54c8d5a6fe5484ed"
  },
  {
    "url": "assets/js/5.3bf79261.js",
    "revision": "54abc674c377c1248e9cd1ffd4851149"
  },
  {
    "url": "assets/js/6.526bb80b.js",
    "revision": "dd5a63a9bd6a219ed516910dfbbeb7f6"
  },
  {
    "url": "assets/js/7.2ff6f501.js",
    "revision": "9ef7cd331dc0e2484f5e75ee40cd94c5"
  },
  {
    "url": "assets/js/8.d1d84fc1.js",
    "revision": "91346642c7b7c9e1204d90726fa7251f"
  },
  {
    "url": "assets/js/9.8516c470.js",
    "revision": "e2056e6ec540430f1c5bbfda543ac459"
  },
  {
    "url": "assets/js/app.34f3b4d9.js",
    "revision": "9fdd08557fe21ee766a00c52affa1f80"
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
    "revision": "87c5c34bfb61e0dc4654cccb2c137754"
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
    "revision": "52432b4c7069670e1212aad046550b8f"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "833622bff646853574aec37456a06e1a"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "fdcb02f67b0fb16903fe8d0fdeae8bba"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "b990df909816059eefde3e6b30246e9f"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "33b236c8921ca4648b761fd5a9d96720"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "4549515edcbc6fdd9b393b57517511d0"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "e1a70f718b29eb3212add8b242d2411e"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "22e759d6b800131675380deebf14354c"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "16cd1183199f15fe9357cfac50c658f9"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "e07ca9bbfa515d38c5950325ccd5339d"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "0bb76050b793375d9505917709bd275c"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "e26aaa2f1e47b44dfea446b7cb3e6287"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "2ae16354356b2d255d3982fb1d7f277f"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "336eb9b176d7db3bd7ea005b44daa8d9"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "c68fbb8b29b9c1b8faae485e8f7c5386"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "0c594ceedb3069dbec591e79c8a8f9c0"
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
    "revision": "91da1537bfdfa88366a97d6d9832f0c4"
  },
  {
    "url": "join/index.html",
    "revision": "7b7a20372801de29100973c71f39635b"
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
    "revision": "ee3385ea6fadc2d2a9b3303797c7f2f1"
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
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "21b2b5ecc80b907f30f9d5b2ea2394e3"
  },
  {
    "url": "tool/all/index.html",
    "revision": "dd247294ca9230fe241b4f8745fa7dcb"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "12c9a9c95749bbc625faa19545e63444"
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
