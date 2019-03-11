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
    "revision": "c9b119e265265fe95932fee703349633"
  },
  {
    "url": "assets/css/0.styles.281bd790.css",
    "revision": "c9c33139bc9a05d7e0d246b66faaaaa7"
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
    "url": "assets/js/10.776badae.js",
    "revision": "de384ed6ffde5531b55327833ae91a94"
  },
  {
    "url": "assets/js/11.dcc032e4.js",
    "revision": "eca6ff04533c00ee52dfc4fd9dd6187d"
  },
  {
    "url": "assets/js/12.6f6ae3ea.js",
    "revision": "49707931a72bb5d981ae294178d5f041"
  },
  {
    "url": "assets/js/13.fbbd15ad.js",
    "revision": "76c84c650d58e61ed6ad4222058eb1f4"
  },
  {
    "url": "assets/js/14.f95eb131.js",
    "revision": "6b75089afb36ac7ffb84492daf64e091"
  },
  {
    "url": "assets/js/15.5d6df70d.js",
    "revision": "13f74d503dddf97e87181f26d01b1eb5"
  },
  {
    "url": "assets/js/16.6c99ae96.js",
    "revision": "8666c5582ceb57fc06b97ae75ef5f72a"
  },
  {
    "url": "assets/js/17.389e0009.js",
    "revision": "79ee8d2e9b41f5fd1f9619180a7008c2"
  },
  {
    "url": "assets/js/18.44b1ea78.js",
    "revision": "85cd837dc8bd8345ecf0103dce2cf412"
  },
  {
    "url": "assets/js/19.d279f4fb.js",
    "revision": "1c0aa07108580911fa62f387fb6468e2"
  },
  {
    "url": "assets/js/2.f9f49023.js",
    "revision": "013eb7aacbd288dbc75407e12df481f0"
  },
  {
    "url": "assets/js/20.7257509d.js",
    "revision": "e62860d80bed4f6c8af933a08c4447eb"
  },
  {
    "url": "assets/js/21.5abfb5d6.js",
    "revision": "27f9c35b815ac65cd66688db91daf233"
  },
  {
    "url": "assets/js/22.fbc1097b.js",
    "revision": "03cedaefb1a12694dbb3fd2856428cbf"
  },
  {
    "url": "assets/js/23.deed2b2f.js",
    "revision": "cd9a56c46e830e8ac12323f28ba38703"
  },
  {
    "url": "assets/js/24.03fd879f.js",
    "revision": "b2ae0883a1297c348954776c5aba603f"
  },
  {
    "url": "assets/js/25.53cadaf3.js",
    "revision": "f737b1efc3caaebdb8c3b61df1349944"
  },
  {
    "url": "assets/js/26.094bcbd4.js",
    "revision": "6b448564d6a221e8dc5526a92c53aa45"
  },
  {
    "url": "assets/js/27.08e8072b.js",
    "revision": "56bbc556aad788e1bda11e4e49c3d65f"
  },
  {
    "url": "assets/js/28.e45d7c3a.js",
    "revision": "38c71ce2cde7372de1527965de963ebe"
  },
  {
    "url": "assets/js/29.f1d2a550.js",
    "revision": "1da25721a2f45c9c89e9e46cded3d175"
  },
  {
    "url": "assets/js/3.fcafed87.js",
    "revision": "80a86976f9f93373dede5dc107ec51fb"
  },
  {
    "url": "assets/js/30.3d107eea.js",
    "revision": "9bd7c8bf5d173928e90e1110c7dfda72"
  },
  {
    "url": "assets/js/31.db8a7d48.js",
    "revision": "c8dc16df87a0b8c66cbb6867166a1f20"
  },
  {
    "url": "assets/js/32.705b4d69.js",
    "revision": "7c4570bea9cb615e45e8ad15a3f945d8"
  },
  {
    "url": "assets/js/4.e577d8b8.js",
    "revision": "d0c02e183cb61ce8f1776d34decdcbe0"
  },
  {
    "url": "assets/js/5.3bf79261.js",
    "revision": "54abc674c377c1248e9cd1ffd4851149"
  },
  {
    "url": "assets/js/6.d16db4b8.js",
    "revision": "8734b6ad1a12eb279baafa8d695af9bd"
  },
  {
    "url": "assets/js/7.5ee7c05d.js",
    "revision": "f67f21d873d8aaf215836a4dc44620d9"
  },
  {
    "url": "assets/js/8.3cf4a8de.js",
    "revision": "6109b4244ce74f3471a9d9218ce9d5e6"
  },
  {
    "url": "assets/js/9.8516c470.js",
    "revision": "e2056e6ec540430f1c5bbfda543ac459"
  },
  {
    "url": "assets/js/app.ab59a31b.js",
    "revision": "5632d59e56de9033224cd9fa8bd508c8"
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
    "revision": "ad1e6deca5807295d1286ae0cfdc25d3"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "0f3795cd8abab50ab734c06d43c19ee4"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "7ccf9b3e96f6d8faa2dd50c0dcce4b72"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "3e2180c0d4721102c13b906d2d4f3544"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "f20150741a46c16c8a9182c4648a24d2"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "bcc359f1fbc4250a024bcdec2c64a61d"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "6f26b26050aa7ed374ba3d312ffe3cc1"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "fb9d4a5279a024a1fa2b644162c1cb89"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "627fe091849b3e0e2f3e457cb85c8790"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "6ad3d31fac1b45c9370c489d3dfc3087"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "e021f4775d0acab63d67659075beb532"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "138e9999e766f623c4dc9526dc6645a8"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "07b8bb05fcff0d3263573c3bfbf02e60"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "5a7c9bae5ff03a10e896eb49c85331ff"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "be39f32894f6a60df90aa33da7a02bb4"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "6b4a11051638f04dda47f370f7f77bcf"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "8d3a98c58625a62c23f9dcfc3d3bf59e"
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
    "revision": "f4de8643e7aed0f6d733f837485f88f9"
  },
  {
    "url": "join/index.html",
    "revision": "4616f02f10e9bc398e6a29e85e50cb3f"
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
    "revision": "dce68971f25d3ad8a06b5c3d5df0edd7"
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
    "revision": "bc6651a42d9b050b6405e250810cc916"
  },
  {
    "url": "tool/all/index.html",
    "revision": "66c7412018705dbf89b7a8be986cf538"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "0a423ca0f08782dac34db87f78f56323"
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
