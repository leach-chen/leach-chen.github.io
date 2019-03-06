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
    "revision": "e1c69c9b1b346ff7f4681e07bfc283d2"
  },
  {
    "url": "assets/css/0.styles.669dcd1f.css",
    "revision": "c620dc9edc961c5e77feb8a1e75bfde2"
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
    "url": "assets/js/10.da005ab2.js",
    "revision": "e8f85aa36c121d9eb471cba053b9da01"
  },
  {
    "url": "assets/js/11.e0ab26b6.js",
    "revision": "95a9c3db586050dfc0781565ffaea4e2"
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
    "url": "assets/js/15.cb83fae6.js",
    "revision": "d780dcd58eb816a99a144d73b0d90111"
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
    "url": "assets/js/2.6d314ecb.js",
    "revision": "31f98e955981dbfe2894a06b9ef32846"
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
    "url": "assets/js/25.1a2610a0.js",
    "revision": "1ef1dc9ce05c1923b80c82ff19322993"
  },
  {
    "url": "assets/js/26.1dedbb27.js",
    "revision": "dc782a2b81e9e64a0ff98b834e2818c4"
  },
  {
    "url": "assets/js/27.4c53d610.js",
    "revision": "79e9c83e14d97d8c21cb2197f840637f"
  },
  {
    "url": "assets/js/28.59e44d3a.js",
    "revision": "7780b170b1bb8908fda9f21ac795bbe0"
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
    "url": "assets/js/5.aa67d908.js",
    "revision": "34f679c6815e238865bac3de0478c098"
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
    "url": "assets/js/app.320424e3.js",
    "revision": "36e2be7e94d86d07f30c573a2cad9d7b"
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
    "revision": "af1da95e907541f2ed644edb22addceb"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "4ec0dfd731fa74a225baabd6ad1e7831"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "b09e0c9f4d1884ccac42709bab266751"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "d1927b4efce7ea569e84576959e26af0"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "5e5e25b45913d89f60bdb05a2b683d34"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "64f177e15240bc287fa1424b05477cd1"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "900e9e0865fb9141b736b546795471c0"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "52fb8488deec301686dcb8d5d7628567"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "02433152fbfd01d028cdb662c331c724"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "b188fbaed5c462b48770ce864f9ee168"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "4c55342c886236f27b18569d8106ceab"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "4cecc400c00246aa2878eeb98fdd816b"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "0ef10a21a48392c3998b93393cf06980"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "41ceff0c4b310d30069e4a3f10373a49"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "339cfeef47ddaa24dd97a0a0882cd86b"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "8135449f5c4f5f96f99974b02413df98"
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
    "revision": "9f2feb3175d6379b664ba72e07cf075e"
  },
  {
    "url": "join/index.html",
    "revision": "64319941685c9a7af6755fe3675a5145"
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
    "revision": "b20748c630b017dbe8f0a8d68f424bf2"
  },
  {
    "url": "js/data/Constant.js",
    "revision": "f78857f1730f2511dd8be8ed11c9fc75"
  },
  {
    "url": "js/data/DataFactory.js",
    "revision": "a0d9d49ef3903b95f26e2fe86eb72206"
  },
  {
    "url": "js/data/FlutterData.js",
    "revision": "6f5cf82ba045ca1f70905a9c723fee18"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "09407105c8272940fd9d2a9caae8c146"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "ee9571dd8f96ffd948659a5055a2f79f"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "a3c90e5fe6da378ab3a3101f291de7ff"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "d8fbe56fc6cfbe4c03ccab524f125c3b"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "d3f59051026da30a533b74d5addbf285"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "138692008edebf4f884dda921604848e"
  },
  {
    "url": "tool/all/index.html",
    "revision": "004aa16e378f9777a287f818576dd96b"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "1824a872dd41a1b1cb281e6f4b68f7fa"
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
