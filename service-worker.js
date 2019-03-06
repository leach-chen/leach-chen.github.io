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
    "revision": "a6d2695ec2612c824b8571bf0a34cf29"
  },
  {
    "url": "assets/css/0.styles.fb0ca93c.css",
    "revision": "a457f6025fd97c1734631d5878f4f134"
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
    "url": "assets/js/10.36cf5b93.js",
    "revision": "bd8f0cd654a932b347bfb52261df75cb"
  },
  {
    "url": "assets/js/11.998350e6.js",
    "revision": "e617e6de81aa1a027b213ef3d2669c82"
  },
  {
    "url": "assets/js/12.d44e8acc.js",
    "revision": "8ffe29116e54372f4b825aa0f5e16c59"
  },
  {
    "url": "assets/js/13.78181339.js",
    "revision": "d36cabec12f62f744811dbc86912f80d"
  },
  {
    "url": "assets/js/14.bf874d64.js",
    "revision": "5597750ef54150dcf76f28c031780a48"
  },
  {
    "url": "assets/js/15.85320a3a.js",
    "revision": "2ac6e2bc598e737324a58c95a73ad929"
  },
  {
    "url": "assets/js/16.845fba02.js",
    "revision": "5d2b0f9c18b2c9c65e13475b5a8da5ba"
  },
  {
    "url": "assets/js/17.0976eff4.js",
    "revision": "ef8b17933f35c12724683f89f6266f0f"
  },
  {
    "url": "assets/js/18.dca9c84a.js",
    "revision": "061f0112d97e593528ba4901a589bcbd"
  },
  {
    "url": "assets/js/19.7e477094.js",
    "revision": "e886068beb3b0ea173f35568d15663a0"
  },
  {
    "url": "assets/js/2.86466d4a.js",
    "revision": "c22b89ef56f5e870af16a3095a4f6637"
  },
  {
    "url": "assets/js/20.8ebed818.js",
    "revision": "37e8e5d15f7786023286b7f9a1571765"
  },
  {
    "url": "assets/js/21.5d7fab45.js",
    "revision": "5cb3831bcf927e899d4e1bd769882103"
  },
  {
    "url": "assets/js/22.942fabca.js",
    "revision": "f8d1a81d71fa562396b081e8d7271e54"
  },
  {
    "url": "assets/js/23.186da920.js",
    "revision": "bc5bb270e0ddab1b9e5011b39bef8de6"
  },
  {
    "url": "assets/js/24.506b8dbd.js",
    "revision": "259cffce323a28cb48dedcad15200af6"
  },
  {
    "url": "assets/js/25.3627241f.js",
    "revision": "16ea95efde1ba25422d8dd7e20ae413c"
  },
  {
    "url": "assets/js/26.5a5678b0.js",
    "revision": "7dc30514f0d861821245307da797abe8"
  },
  {
    "url": "assets/js/27.93411417.js",
    "revision": "c0d9ad65ea984ec1fec96c9ea253051e"
  },
  {
    "url": "assets/js/28.caf7ce6c.js",
    "revision": "29655e1d2783f316c1ae35bcb96d9f53"
  },
  {
    "url": "assets/js/29.648a112a.js",
    "revision": "a999e23b364eaa9e9c79b5b409d512b2"
  },
  {
    "url": "assets/js/3.3dce1de8.js",
    "revision": "83911798112097c55b10b437e1c470b9"
  },
  {
    "url": "assets/js/30.f850134a.js",
    "revision": "d31d5bb334a2a1e46c2383040c92dd2c"
  },
  {
    "url": "assets/js/31.4e1099d3.js",
    "revision": "90aaf71adeef05a6b3ba036fb973c644"
  },
  {
    "url": "assets/js/4.1b9b02fc.js",
    "revision": "63ed67f563e7c91272363c1115531cd6"
  },
  {
    "url": "assets/js/5.c5bb523e.js",
    "revision": "4855718f83cb6bba044a9f75c5255e03"
  },
  {
    "url": "assets/js/6.f55aa393.js",
    "revision": "f89e1c4e98a0142df360873c86574143"
  },
  {
    "url": "assets/js/7.d03c98a1.js",
    "revision": "a883948c1cfccc93bdbc84ee3156f3ea"
  },
  {
    "url": "assets/js/8.dd47f5d4.js",
    "revision": "37bf90b71d485f2694fb39bc5859d13a"
  },
  {
    "url": "assets/js/9.46c97f2f.js",
    "revision": "b9a2c74f2d90b8976befdec738218764"
  },
  {
    "url": "assets/js/app.9d495415.js",
    "revision": "d9ea3262447c69d2c1da51dc8cc53140"
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
    "revision": "0a68a98437922bfda031cd2903f3a45f"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "87cf740200bad25a058db12a9c2789db"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "31a83d8fd1e7554c46092a5e5fa37518"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "a9833665cb4452553ca3ca7452f69d56"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "34a68440a118096c0d86daa5b3f0d42d"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "99aa097ec683fcc7b55276fe90a44eea"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "15713494eecec9ce6517e7111c33a932"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "27dd67271bd34e783f29540031dd77cc"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "1bfe2939ea12d7a1558ece8a9b5afda1"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "219411bb9c5b94d1a590bf1e6b34f92c"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "ff98c428ba906d50f75ea374574d6a0e"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "1810c6871f971344cfaf5c456c3fe26e"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "38eb4e79521d2fb925524fe2a030467a"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "65dafb2882ab7400ddc8a71735e95ca5"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "c218af59957b702feabb5a6299469d76"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "0d8a323c3cea08897c94f368d822b8c8"
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
    "revision": "0e24dddeb5735d88813a3e61a3a88e31"
  },
  {
    "url": "join/index.html",
    "revision": "59edc55ab12c40204bb5bb5a96965c92"
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
    "revision": "16cf22e28900ac514b05cc89e340079d"
  },
  {
    "url": "js/data/Constant.js",
    "revision": "ad9d16365941e7cf2b1d0e7650db1f54"
  },
  {
    "url": "js/data/DataFactory.js",
    "revision": "a0d9d49ef3903b95f26e2fe86eb72206"
  },
  {
    "url": "js/data/FlutterData.js",
    "revision": "7d42057e11c7ff259399d185b9a955a5"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "5fd46c90756e37c4dc7edc65c4d7dc44"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "d1c9726a47ce7743761646ffaba8ed95"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "d0bf71d7fa3dd40c9888a18c0e041637"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "915cdf99dce94171d43f1c8caf554d53"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "63ad438245f82d0d04be730a43e944e8"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "03e243fde04ec1bb683172eadc6d0126"
  },
  {
    "url": "tool/all/index.html",
    "revision": "399f8de72c5a4da701b36fd70a6b4358"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "52124c2d4cdb4fd23858c9e000782bdb"
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
