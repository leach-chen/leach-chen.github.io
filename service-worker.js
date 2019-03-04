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
    "revision": "79f33d98bb09c2b09b22cb3f7f10f039"
  },
  {
    "url": "assets/css/0.styles.ab36933c.css",
    "revision": "731795e2aeadcb69130446137c75d44e"
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
    "url": "assets/js/10.03489cea.js",
    "revision": "079283bb133f7ab5737f0779eff72b78"
  },
  {
    "url": "assets/js/11.a4933d4d.js",
    "revision": "03f934eca577acc4d240c452358842e9"
  },
  {
    "url": "assets/js/12.d9ea8610.js",
    "revision": "dc87825e61d5e39b63257cb2a9a24d6d"
  },
  {
    "url": "assets/js/13.fe52f06d.js",
    "revision": "ae9e541e166f708fa9eb7cafbab82502"
  },
  {
    "url": "assets/js/14.c182bf9a.js",
    "revision": "9770f18b201e1859660622f5e6aa69d8"
  },
  {
    "url": "assets/js/15.c799134c.js",
    "revision": "e504e2f68a48358f51aaf47507f766da"
  },
  {
    "url": "assets/js/16.eb74fbd7.js",
    "revision": "a24825d53d35deca30d694ad47128700"
  },
  {
    "url": "assets/js/17.52c0962e.js",
    "revision": "a5d45f1beae6f9e5a5daa029844aa238"
  },
  {
    "url": "assets/js/18.f3bf8031.js",
    "revision": "5c1378307b8502ac1cae4c2e5ef3ddc8"
  },
  {
    "url": "assets/js/19.5abc86b0.js",
    "revision": "6bc61b39b3ba89e07fbb51e5bcb271f0"
  },
  {
    "url": "assets/js/2.8b25eee7.js",
    "revision": "5d87f49a7964c523882ee16d3ea987af"
  },
  {
    "url": "assets/js/20.435895f4.js",
    "revision": "dca1b83d61af1d7b1ac79ac34647f1e2"
  },
  {
    "url": "assets/js/21.6dc743d7.js",
    "revision": "45eea5a813d6b5c37f3593b000223592"
  },
  {
    "url": "assets/js/22.73821876.js",
    "revision": "48977f5c03a6c68770baa9d6541317d5"
  },
  {
    "url": "assets/js/23.81f55848.js",
    "revision": "2397b9fc54fc4de5ed327b1138483e5c"
  },
  {
    "url": "assets/js/24.0033bd48.js",
    "revision": "f3ffc923cefc6e6b51948c05bd539571"
  },
  {
    "url": "assets/js/25.f33b955e.js",
    "revision": "ef8ccbecbf92d0008042dea26c95bccd"
  },
  {
    "url": "assets/js/26.adeafa7e.js",
    "revision": "570505b8ad64cb4d8900ec2942f33426"
  },
  {
    "url": "assets/js/27.e58b35dd.js",
    "revision": "c48689d70aa0fbc97d0d7a864822a86f"
  },
  {
    "url": "assets/js/28.01dbf534.js",
    "revision": "b441e3e8c003d5242efb30031015b232"
  },
  {
    "url": "assets/js/29.05521f34.js",
    "revision": "fc045a3d396a569a93fbc149948cc252"
  },
  {
    "url": "assets/js/3.5d529876.js",
    "revision": "eaae903e514b73b4eccc69d0eaa7c0fa"
  },
  {
    "url": "assets/js/30.7755e002.js",
    "revision": "9bba370f2e722d05d9de9d669b00642a"
  },
  {
    "url": "assets/js/4.1c4e20c1.js",
    "revision": "fcaa7731f00b4d67c2ff0ebb5a29102a"
  },
  {
    "url": "assets/js/5.c162b8fd.js",
    "revision": "62a5748caf9da784fd2787224d4c7c91"
  },
  {
    "url": "assets/js/6.882575ae.js",
    "revision": "4ef0abc5c1af79c2f06fdb5d206c0913"
  },
  {
    "url": "assets/js/7.0a814c17.js",
    "revision": "50b646ca68584537d00c067cb12c9919"
  },
  {
    "url": "assets/js/8.bb6db117.js",
    "revision": "022ffbcd73617a83933437cb5fb97b73"
  },
  {
    "url": "assets/js/9.b6101081.js",
    "revision": "080c1d4e3d13865c60892efdb6949d67"
  },
  {
    "url": "assets/js/app.aa032b17.js",
    "revision": "8d7595b53440203ba4f6b3b6abb6d0db"
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
    "revision": "80eb74e1aa0b38467e7fdcd58c43ba53"
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
    "revision": "1c9a9d8bf2e4257a4a525368917a0a49"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "e1a019bda90cdea9b27c4e4fbe8f2eac"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "d096cc93c8ff87f79537a67a0f939c47"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "8a0a6af95308363ef35db1492ee1f476"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "260c4e5801c243b8d3197c3c65cf7bf0"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "12ae5b8cb0ae929fd90200ee0da732c0"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "8ab2e2ece061e39ba331456e4b6b9f58"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "dda7b3aaf3e8fc7e88e1522dfbe774d2"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "0fec268125e34ed8826af0d6e2fbe0d4"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "b549f1facb7303a2836bc99d74ad745c"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "71234d6da975cb27f0125230a2ac71b5"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "03c4d3e6b8546084e30ca3a0eac86240"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "4660c9775da2fe62a6ac887a795258ed"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "db5581b1c3725a498ec96b02ff066986"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "63fe4506aa422299007d49707d222f24"
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
    "revision": "29de9e9201519f9d87cbb10bb1f87a09"
  },
  {
    "url": "join/index.html",
    "revision": "5d5ddc7215a5aa820457af86f3b8525a"
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
    "revision": "2f8223e594e9dc2eec5d5e44d271f999"
  },
  {
    "url": "js/data/Constant.js",
    "revision": "1e45d4013f2442170509f428eefc344d"
  },
  {
    "url": "js/data/DataFactory.js",
    "revision": "06c7dccf252c89b408fc7008d811563f"
  },
  {
    "url": "js/data/FlutterData.js",
    "revision": "27200de91a3735cd20bbdbc883f27e11"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "f4adb1e518cc1c3cded78a0a2be38625"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "acf3cb1a020320c067ed3ba13855e38b"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "c22fb2e33fe4d61711809c19b4be91ad"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "e714c3999a89635f295feae99812d580"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "d3061de326fec1439290865eaed66aa9"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "cd95727f7cbc89ecaf8afe13b6613c60"
  },
  {
    "url": "tool/all/index.html",
    "revision": "ed63e9a4e4d35de1389d2a6c1e056a31"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "8e31091f29c7bc2cbdc8769d32d4af36"
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
