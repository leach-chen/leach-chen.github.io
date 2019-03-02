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
    "revision": "c90d9858a01d70ba91585d018cf5c5c5"
  },
  {
    "url": "assets/css/0.styles.ad3baf4a.css",
    "revision": "dc2168f88810e45a373529994c72c44b"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
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
    "url": "assets/img/gamebk.f7c65fba.jpg",
    "revision": "f7c65fba306301f51a4e943fc94f37a4"
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
    "url": "assets/img/vue00001.ed258130.png",
    "revision": "ed258130dea35a0ff5e1ae1e93f2c553"
  },
  {
    "url": "assets/img/wechatimg.0714bed8.jpg",
    "revision": "0714bed8e9ff413c61280cda5079ae2f"
  },
  {
    "url": "assets/js/10.439118df.js",
    "revision": "f7d713b0ee3ed3e83adfedcdbabf8607"
  },
  {
    "url": "assets/js/11.53b57859.js",
    "revision": "583147c3fc52d7ced9b1a47d2519541e"
  },
  {
    "url": "assets/js/12.f2f2f8fb.js",
    "revision": "1a7adf04117750ba11de4f07540fbeb2"
  },
  {
    "url": "assets/js/13.109a1f98.js",
    "revision": "689ecc41069d1dbe48271a959f7dd7f9"
  },
  {
    "url": "assets/js/14.9ae7036c.js",
    "revision": "e7c98f576b27ee214e9b462e6468a1cf"
  },
  {
    "url": "assets/js/15.2ce502c5.js",
    "revision": "1eef72bbe98ec35cf76f0b979d709cac"
  },
  {
    "url": "assets/js/16.16ffab56.js",
    "revision": "e481f43ffb368af308c85c18d1c24b75"
  },
  {
    "url": "assets/js/17.5583b755.js",
    "revision": "8172b3f54df329c5d921f8d1b7af710c"
  },
  {
    "url": "assets/js/18.802867fb.js",
    "revision": "c0a04ded5590b59c69e55be6c5e401a5"
  },
  {
    "url": "assets/js/19.dc14b2d6.js",
    "revision": "71d90526dde5020d4254ed0a0a15b01d"
  },
  {
    "url": "assets/js/2.8108b74d.js",
    "revision": "159998eb476d59c13b5aeb43d327efe6"
  },
  {
    "url": "assets/js/20.8cc7afa8.js",
    "revision": "f9f9e9dbd8417da47b9d0a1b6444a473"
  },
  {
    "url": "assets/js/21.ab58396a.js",
    "revision": "2b8839c52e1bedf7036f1bc1861adf8c"
  },
  {
    "url": "assets/js/22.4bf825bf.js",
    "revision": "41c20dea22e39dd7d6dc6f697e58705a"
  },
  {
    "url": "assets/js/23.fe721ee0.js",
    "revision": "26ced0775d8938e4c16f1b8f289f0ecf"
  },
  {
    "url": "assets/js/24.06081116.js",
    "revision": "661207812aa365e422c57b806a496796"
  },
  {
    "url": "assets/js/25.902bf177.js",
    "revision": "119eb0468203b70bf0f3372d5ae4b197"
  },
  {
    "url": "assets/js/26.27a366b0.js",
    "revision": "0e46dd81403b3ba87f92f785641b02b0"
  },
  {
    "url": "assets/js/27.4c5e3836.js",
    "revision": "5e1b7764ccfa95f8c5ccf4af5198ce7a"
  },
  {
    "url": "assets/js/28.ce4bb74c.js",
    "revision": "0a09b22716bf54fe1ce0fc421ac45d35"
  },
  {
    "url": "assets/js/29.bcf84ed1.js",
    "revision": "95e5a894cd48534922456d706f28c487"
  },
  {
    "url": "assets/js/3.54e1e26c.js",
    "revision": "ecfa14835d80c8c155b2eb88a61cf408"
  },
  {
    "url": "assets/js/30.fca8ffd5.js",
    "revision": "00292fbcb0e667eb86cee525c055ca4a"
  },
  {
    "url": "assets/js/4.5144c8f9.js",
    "revision": "a07795b1855b0e18dd74fd2296f1809d"
  },
  {
    "url": "assets/js/5.ed3acb6e.js",
    "revision": "cdc2830befdd6efd8e57ceab43177a49"
  },
  {
    "url": "assets/js/6.32efc4fc.js",
    "revision": "84f479ea4f5e8d45be4325f8b2574800"
  },
  {
    "url": "assets/js/7.8bd9e6ce.js",
    "revision": "1d9e7a1d47113fea8d809f6ebcf6cbf2"
  },
  {
    "url": "assets/js/8.766bb66e.js",
    "revision": "986394d31104c19289650a3172cedc3b"
  },
  {
    "url": "assets/js/9.be6d202c.js",
    "revision": "378832bce5e4119bd66866c50a30089f"
  },
  {
    "url": "assets/js/app.57b03cd0.js",
    "revision": "413ed9dce8c80f9796c961c4ecd7f047"
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
    "revision": "40d24aac6c1e6edbdd1e9d685da9408f"
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
    "revision": "ceb732376b8e9ae1d3b8fae0728c87c6"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "505ce7228b9f7ffbc8b9e2cb52593531"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "ea5b66002b651a75a5609b89363c7f9c"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "70b3b2014ade3745afc04e094d226a8d"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "4d0556f03d064d06bdb3dd1e5c28a429"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "d6116cd745742bad5cf2687fdc86bbb6"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "d44e85397b2c33f6dfa45846e6292149"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "3efc43f951b2ca9417656c66177c091f"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "b1f676b0d783cc3e8d4d6f49e8a98f31"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "cfae7161fa2420729e2804e8873aff3b"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "96c55ee3aed96e406f88013e838b5631"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "198db3f75b033c26d2a0556e6bce510d"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "eaa0268f0eb99971ddf0414d88925b1a"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "ea52807fe98784ecba224fcab00e4440"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "598f6d3d6d3454ef9194086427d93c17"
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
    "url": "img/bk2.jpg",
    "revision": "1209247b082d08953a31d03ec8283a98"
  },
  {
    "url": "img/bk3.jpg",
    "revision": "35f33d34f2566c0a58329a334f69551a"
  },
  {
    "url": "img/bk4.jpg",
    "revision": "10140594110f4bb15e46b03be88519d4"
  },
  {
    "url": "img/bk5.jpg",
    "revision": "7305507b43f459dba4dab3db1a1af17e"
  },
  {
    "url": "img/bk6.jpg",
    "revision": "afa7c949589fa3580c21e89d01434a86"
  },
  {
    "url": "img/contact-bg.jpg",
    "revision": "90b89018c57623f25ff271dda0b322e8"
  },
  {
    "url": "img/gamebk.jpg",
    "revision": "f7c65fba306301f51a4e943fc94f37a4"
  },
  {
    "url": "img/homepage.png",
    "revision": "06fcd0809e42e78627818f7b14cd5ab9"
  },
  {
    "url": "img/logo.png",
    "revision": "f4a829f5dc3386effe048eae5d969558"
  },
  {
    "url": "img/planet.png",
    "revision": "26beb6d842c8846f4e0efceffc1b5333"
  },
  {
    "url": "img/public.jpg",
    "revision": "b14aac6b007a2a10eb04fac24db5ecd5"
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
    "url": "img/vue/vue00001.png",
    "revision": "ed258130dea35a0ff5e1ae1e93f2c553"
  },
  {
    "url": "img/wechatimg.jpg",
    "revision": "0714bed8e9ff413c61280cda5079ae2f"
  },
  {
    "url": "index.html",
    "revision": "4ab7401b1ba395a3e1a4659efdf75b9d"
  },
  {
    "url": "join/index.html",
    "revision": "8c7dc7ceba634a23936bd72954542410"
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
    "revision": "1be11e6f41ac2f9a62e9ab2793e77830"
  },
  {
    "url": "js/data/Constant.js",
    "revision": "e467d70b1001e855901e3658b3c839ee"
  },
  {
    "url": "js/data/DataFactory.js",
    "revision": "06c7dccf252c89b408fc7008d811563f"
  },
  {
    "url": "js/data/FlutterData.js",
    "revision": "a88113efbf0c6983fa5c34a93d722257"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "40821cdc4dd7eca6090685d326daf93b"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "0209fa7a108067c886a40f6f743af230"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "c23b3446153941e7189c0d67a55aa3d3"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "a1e33a942abb8cd99b42d22c74cb4f8e"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "d9f6433dbab36f040446d35514eb49eb"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "5f0a62111a2a9ce6784dc1933a69bef2"
  },
  {
    "url": "tool/all/index.html",
    "revision": "0ec6d1c7f5262d144fac28fb73985223"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "0540d1ea71285aab7407f05243e41e78"
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
