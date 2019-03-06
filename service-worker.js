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
    "revision": "4292251bef94debdf5ccab5f3754070b"
  },
  {
    "url": "assets/css/0.styles.824f2194.css",
    "revision": "eb6a116812c19a28e685d13fef624035"
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
    "url": "assets/img/bk1.7c50ace6.jpg",
    "revision": "7c50ace6f872f9225f0574616415886c"
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
    "url": "assets/img/wechatgroup1.50cbcfa5.jpg",
    "revision": "50cbcfa5734cd073db4ce10d0a770551"
  },
  {
    "url": "assets/img/wechatimg.0714bed8.jpg",
    "revision": "0714bed8e9ff413c61280cda5079ae2f"
  },
  {
    "url": "assets/js/10.27ccac40.js",
    "revision": "510989f9335da42dd247c9cb17d6309f"
  },
  {
    "url": "assets/js/11.797e59b9.js",
    "revision": "7fbe3d17c49b66713b9137542046dc9f"
  },
  {
    "url": "assets/js/12.0a928703.js",
    "revision": "b9905c43a98db631f5faca966027ef71"
  },
  {
    "url": "assets/js/13.b7dc852d.js",
    "revision": "0981f60c902233507adc69799fcc19f0"
  },
  {
    "url": "assets/js/14.c7cd2d3d.js",
    "revision": "7641e6509b9cebfe2ffa910eee86b984"
  },
  {
    "url": "assets/js/15.f21844fe.js",
    "revision": "4c7f9df238c003229a175090e1de2a89"
  },
  {
    "url": "assets/js/16.22fe4ebc.js",
    "revision": "4ee76932c3f0ee040a5393cbb5da6e44"
  },
  {
    "url": "assets/js/17.5dfd9450.js",
    "revision": "4cac399bffbe5575773ffc740997ed3c"
  },
  {
    "url": "assets/js/18.e4eb04a6.js",
    "revision": "72874c4406b89effde75ff4ed56669f5"
  },
  {
    "url": "assets/js/19.23071265.js",
    "revision": "abf26d5d7d01a37b425bac25fd83bb32"
  },
  {
    "url": "assets/js/2.8f96d30e.js",
    "revision": "06a8943c08f75ebbd839fa66287bafb6"
  },
  {
    "url": "assets/js/20.09ea0faa.js",
    "revision": "9959d98f27f65eba683bc167b4a08300"
  },
  {
    "url": "assets/js/21.76321d2c.js",
    "revision": "efccb9eba2373d899e982732109acbc9"
  },
  {
    "url": "assets/js/22.797df314.js",
    "revision": "93c80ab791b54baef433551b33c7347d"
  },
  {
    "url": "assets/js/23.120fa1ca.js",
    "revision": "f8eb46dab96b79fa58184ff4decabc47"
  },
  {
    "url": "assets/js/24.a51a174a.js",
    "revision": "d8eed3139d70409b541546f933a5e692"
  },
  {
    "url": "assets/js/25.d434bbfb.js",
    "revision": "b9cf720f64fe82bd38261feee211e3ac"
  },
  {
    "url": "assets/js/26.c01c1a84.js",
    "revision": "a55afe6f093c9e368e0c9537358a9ff6"
  },
  {
    "url": "assets/js/27.e5c32055.js",
    "revision": "b0a6d213da83bab92731c1833daab629"
  },
  {
    "url": "assets/js/28.138eb4cc.js",
    "revision": "bc8419507232daf9459fa5396b72199e"
  },
  {
    "url": "assets/js/29.67e2be13.js",
    "revision": "0376e6a5ec9c01188a94cf85411d42b6"
  },
  {
    "url": "assets/js/3.b2e60589.js",
    "revision": "ff43fb21b8d5d9e87d436e8480eed33c"
  },
  {
    "url": "assets/js/30.69043a73.js",
    "revision": "9e087b68e20d64f4881fbd83196a724f"
  },
  {
    "url": "assets/js/31.0f50fc4b.js",
    "revision": "4f3f58efac219b78fbd8f578c7e14553"
  },
  {
    "url": "assets/js/4.a674e90c.js",
    "revision": "cae0088c6b5d7638564b974ca8b1aa7a"
  },
  {
    "url": "assets/js/5.55760ca4.js",
    "revision": "133d67747db4d7df8d25d9b9ea2d067b"
  },
  {
    "url": "assets/js/6.674ed33d.js",
    "revision": "4ef0abc5c1af79c2f06fdb5d206c0913"
  },
  {
    "url": "assets/js/7.d9659f60.js",
    "revision": "f44fc0fb42ffcf5229b487c6c51d1fdd"
  },
  {
    "url": "assets/js/8.b525df00.js",
    "revision": "3750f0553168251f9ad6056919c09d2a"
  },
  {
    "url": "assets/js/9.b6101081.js",
    "revision": "080c1d4e3d13865c60892efdb6949d67"
  },
  {
    "url": "assets/js/app.c9e43a9f.js",
    "revision": "91a5540a7452fc2c9878b458405b6f9f"
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
    "revision": "2fd16c8ff599d89355eb792294eb4018"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "e29263584d6108903ffa07355df0fc69"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "89a9806be328dddfe3b45380aedee782"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "ea1a4ce647d8d88feaf7b0897db4168c"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "584a53d95a00761ad8167c648ba6b023"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "6de1927572531012fe6b46c13f00517d"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "fb22e90f3777b7f51fd11ccf773c5d04"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "6417c484e0fc20d05b9005cb26681704"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "1bea1fff086f5d3f4df0f219667ed021"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "5404b6e79efc9a2e496c06aca0957571"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "9b5e2deb12afe17072102681800fb769"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "cfea9a760f5595a5b1c040adf85071ff"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "402c1ef0b4531f119d9c523a9c3ec28e"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "061ae4c22991f4a86aaf4d3fd7a2ebb3"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "9ab482f107ea577eb443551fcad7f6d8"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "c70bd692090add8ac21ea3d82733f46b"
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
    "revision": "fca2aae6743e38b8e0e132016177ac66"
  },
  {
    "url": "join/index.html",
    "revision": "f2d9ecda071652ce5de3421452043074"
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
    "url": "js/data/AndroidData.js",
    "revision": "b32b9952c7e7e40e770061c5c75a095b"
  },
  {
    "url": "js/data/Constant.js",
    "revision": "c9bc1032d5458ea0845f779f6feec291"
  },
  {
    "url": "js/data/DataFactory.js",
    "revision": "a0d9d49ef3903b95f26e2fe86eb72206"
  },
  {
    "url": "js/data/FlutterData.js",
    "revision": "8f58d12729411776ba973e44bdf3703e"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "be97423fa41cf34a28cfa6386d79728e"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "ee58ff6d163253f31567a647f22c1e58"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "46d8aab7d32e972682cea8547376f779"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "68165ad5642a65b0a41e0e4c7a9b3f5e"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "d4f26a2d86b44118f028c4eb6709130c"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "b08c92eb6a89b8ebf06edd51344d989e"
  },
  {
    "url": "tool/all/index.html",
    "revision": "70021d1764553167aca485c5a45cfc14"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "ae64d3e71371f8dce5f511983ae5a294"
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
