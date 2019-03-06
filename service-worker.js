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
<<<<<<< HEAD
    "revision": "d32c466776340afc1df2e103b97dc7ba"
  },
  {
    "url": "assets/css/0.styles.816105ec.css",
    "revision": "eb6a116812c19a28e685d13fef624035"
=======
    "revision": "5e940baf8768db6d835543500f9dd595"
  },
  {
    "url": "assets/css/0.styles.8f7165cc.css",
    "revision": "c620dc9edc961c5e77feb8a1e75bfde2"
>>>>>>> ae3cdbcaadc41a1c5283f7497c1e8e0602fcdf14
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
<<<<<<< HEAD
    "url": "assets/js/10.f20236e6.js",
    "revision": "1907e4f2eeb9c75c277cd3149087304a"
  },
  {
    "url": "assets/js/11.1b283151.js",
    "revision": "7c035a286123914273adbab77bf1a8e7"
  },
  {
    "url": "assets/js/12.963a90f6.js",
    "revision": "9d160f5887cf310db00eb2f002844476"
  },
  {
    "url": "assets/js/13.04bc534e.js",
    "revision": "d3e003296c825a1bc1272cbcba0e3c19"
  },
  {
    "url": "assets/js/14.f6a3f712.js",
    "revision": "dedbc78a7b622bc62d61a6760fcc45f4"
  },
  {
    "url": "assets/js/15.47ad2169.js",
    "revision": "1db8e6ccffd48fe138ec83457e9b532a"
  },
  {
    "url": "assets/js/16.7e4e15e7.js",
    "revision": "5dba7b8b255a5debafe3733313caf989"
  },
  {
    "url": "assets/js/17.15536bc7.js",
    "revision": "62a4336b3b193b351ec7c79bed52baf2"
  },
  {
    "url": "assets/js/18.8292ed81.js",
    "revision": "c8ce7141bcd8932b97e8599e2927c023"
  },
  {
    "url": "assets/js/19.62ecb164.js",
    "revision": "33070a6d058382f5f85c5f7eb22ab2d2"
  },
  {
    "url": "assets/js/2.b7e902ed.js",
    "revision": "ebd04348a4a6d23cffc0700a88612a47"
  },
  {
    "url": "assets/js/20.46552c32.js",
    "revision": "fab72d5df72b20b2033539b93203aac5"
  },
  {
    "url": "assets/js/21.b9acacb8.js",
    "revision": "dde470e9c5d476250bae8be5b7ca65b4"
  },
  {
    "url": "assets/js/22.6965f14e.js",
    "revision": "303c51dc26c2d5637d35650352dea93c"
  },
  {
    "url": "assets/js/23.246d65e9.js",
    "revision": "bafabd638686e80624fdc12e7bcfa1e9"
  },
  {
    "url": "assets/js/24.82a2056e.js",
    "revision": "5a8c10aa562fa7c50e269583a167311f"
  },
  {
    "url": "assets/js/25.1ad2fa88.js",
    "revision": "d2d3d10cd4cb8a9cd9ab9bd5e0ea489e"
  },
  {
    "url": "assets/js/26.1c1216c4.js",
    "revision": "eaa2181f87367d22e1e90f3c63d85f5e"
  },
  {
    "url": "assets/js/27.3bd712ed.js",
    "revision": "437d7e39719931eed85f9530efb4fa73"
  },
  {
    "url": "assets/js/28.d9cd1b60.js",
    "revision": "1ef86833f489fbc125d784017b48eaf5"
  },
  {
    "url": "assets/js/29.bcf84ed1.js",
    "revision": "95e5a894cd48534922456d706f28c487"
  },
  {
    "url": "assets/js/3.42d8ce58.js",
    "revision": "83911798112097c55b10b437e1c470b9"
  },
  {
    "url": "assets/js/30.fca8ffd5.js",
    "revision": "00292fbcb0e667eb86cee525c055ca4a"
  },
  {
    "url": "assets/js/4.579a13db.js",
    "revision": "63ed67f563e7c91272363c1115531cd6"
  },
  {
    "url": "assets/js/5.dccbfbbe.js",
    "revision": "faacd747dc895b9f8f07841b10c0e6f5"
  },
  {
    "url": "assets/js/6.8ae3fdf7.js",
    "revision": "1036ba324c0791bcd9a075fb44fd102b"
  },
  {
    "url": "assets/js/7.aa4f540d.js",
    "revision": "d79b7767addb4c83e9c7067c49a6a4e4"
  },
  {
    "url": "assets/js/8.ee9a2090.js",
    "revision": "c2aca22da99ce829e2de4786a2f47522"
  },
  {
    "url": "assets/js/9.46c97f2f.js",
    "revision": "b9a2c74f2d90b8976befdec738218764"
  },
  {
    "url": "assets/js/app.53c79d89.js",
    "revision": "4b42274e48a430d1e322a9fb746eb77c"
=======
    "url": "assets/js/10.61768a1c.js",
    "revision": "6dfef993fed496d37f34360be58f1eda"
  },
  {
    "url": "assets/js/11.214b2702.js",
    "revision": "e78390802fbe6729d12a37999b0a8e40"
  },
  {
    "url": "assets/js/12.6c1425b6.js",
    "revision": "d9ca2e6fbbbc75467c6b1353eff122bc"
  },
  {
    "url": "assets/js/13.616eb804.js",
    "revision": "eb46529638fbf65895dc0669bc639fa3"
  },
  {
    "url": "assets/js/14.c182bf9a.js",
    "revision": "9770f18b201e1859660622f5e6aa69d8"
  },
  {
    "url": "assets/js/15.efecbf0e.js",
    "revision": "d092638262245bdb72d3215dfbbc99f3"
  },
  {
    "url": "assets/js/16.0b7f9e18.js",
    "revision": "d9c3648e94d0deddee97372a996693f6"
  },
  {
    "url": "assets/js/17.009962d3.js",
    "revision": "173f9c021531b54045555146fe8c7df7"
  },
  {
    "url": "assets/js/18.02ba6040.js",
    "revision": "4e22e4574b6494feb3edaa8950cd7444"
  },
  {
    "url": "assets/js/19.6ffc3ae4.js",
    "revision": "d57ab54e5ab60506ceab262504e4c49c"
  },
  {
    "url": "assets/js/2.5765391c.js",
    "revision": "06a8943c08f75ebbd839fa66287bafb6"
  },
  {
    "url": "assets/js/20.7d1fc449.js",
    "revision": "0ece8c3d6f324e9bd06729206e836335"
  },
  {
    "url": "assets/js/21.9142cdbc.js",
    "revision": "83011d948fa85c8a909216d2b7d4a911"
  },
  {
    "url": "assets/js/22.ecd251d3.js",
    "revision": "2611e6e7c97a4eb4980c1f496841b7a1"
  },
  {
    "url": "assets/js/23.48a5a806.js",
    "revision": "cae3f59c4a7ed1c13a490c4240d81380"
  },
  {
    "url": "assets/js/24.c0cb7f5a.js",
    "revision": "4f91d742a2b059bf3ff4407b417d46c3"
  },
  {
    "url": "assets/js/25.60260205.js",
    "revision": "6cb5480880ba26a0e831d97a463b69c4"
  },
  {
    "url": "assets/js/26.103ec837.js",
    "revision": "b055a2c88a5b9955e65dc5d9e41747e0"
  },
  {
    "url": "assets/js/27.e58b35dd.js",
    "revision": "c48689d70aa0fbc97d0d7a864822a86f"
  },
  {
    "url": "assets/js/28.cf13d480.js",
    "revision": "0f0b1913d5172bc7b451440131d94ac9"
  },
  {
    "url": "assets/js/29.c7fa5d2f.js",
    "revision": "4030a35b0d42b4502e1fffe178cba6ba"
  },
  {
    "url": "assets/js/3.ac3a3ecc.js",
    "revision": "ff43fb21b8d5d9e87d436e8480eed33c"
  },
  {
    "url": "assets/js/30.7755e002.js",
    "revision": "9bba370f2e722d05d9de9d669b00642a"
  },
  {
    "url": "assets/js/4.2588e2cc.js",
    "revision": "0fd607cd07e25eb38790d876b54d55a5"
  },
  {
    "url": "assets/js/5.14bc6f4e.js",
    "revision": "12bf908a8992fea101d8fef02ec5a311"
  },
  {
    "url": "assets/js/6.53a92b70.js",
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
    "url": "assets/js/app.9a4ac908.js",
    "revision": "1cdf9f2e7aac862d29796b2ea80fa922"
>>>>>>> ae3cdbcaadc41a1c5283f7497c1e8e0602fcdf14
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
<<<<<<< HEAD
    "revision": "39f2659d78b820f76f47467c0c6524c9"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "79999b480717ad3d15e1bce70e4cb3f8"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "e10d9f923108c090eca0233bff0af232"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "83628cf702fea112b29aaf6430c152b7"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "61652d2dd4d5ad4b57e77b9dc664ef6f"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "08078517821c79e1b777f1382008d2d8"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "f8e96b6f06f3269f0c408931fee851af"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "c08cd149bd4195ba020b5c70d0180c37"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "113ac83c5d2e5e66a92df598398c1e03"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "c06b9fcc6bac344ca17cacfb2ac27766"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "df4f33501749be889918e5a6b9ddac65"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "1abae7ad64a971702333dbf5690e4334"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "44e3e27cf625c0bb023516dd4d344f8e"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "3ff8765f9c329655aadc083c6db12ed6"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "570625d38aa5ead2640e893fdc4389a9"
=======
    "revision": "e925e362fbb840f5d025defec7404cae"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "00b681aa91e2887fef4d8843d9fcdc19"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "899c828512a7323fc52a0a60f493c662"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "b2de5ad1170770082ecf3306c8cac29d"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "a290fea11ec1dca6d5c370a7b6691525"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "5aa1cecbceec7cd4583678b4ec0da3da"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "141bd4fc36d4bc13e7fa196d7d530a82"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "fd8e251cb9c5270fc8824cdda2acbfa0"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "8df1202da0fe8146ccdabdad413215d7"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "649347161463417db47a2fa7dd7d6b31"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "aec516040c165c409961b7e2b5a024ad"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "bb425687c52cce3642255b91c7e738cc"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "144f1b9a36514f136a86a521e3ab2fa7"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "4339c411e54abb3077fb999597332544"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "fc277d9c88eb0b7bd67aadcdf5ccfb05"
>>>>>>> ae3cdbcaadc41a1c5283f7497c1e8e0602fcdf14
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
<<<<<<< HEAD
    "revision": "e53d29bc6ef1cb8bd50ba3319f0e7efe"
  },
  {
    "url": "join/index.html",
    "revision": "6c6f240a5ddde91db3e938aef4168336"
=======
    "revision": "18b00c2ac06a9d8390f967cad63fb6e5"
  },
  {
    "url": "join/index.html",
    "revision": "657e9c4a3bc4a6d338ef82dea30f17c9"
>>>>>>> ae3cdbcaadc41a1c5283f7497c1e8e0602fcdf14
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
    "revision": "bf15174f9dd97a9e65e0a851a8c7daa7"
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
    "revision": "bdaec29540c9a5a643457de752e15098"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "7fd4dab1f11d4f4d1bb2690bfdca711e"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "e420e292c2bd70c17bf9e524f5914bb8"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "6169ddf286aa82d2c2b835bf17fde4fd"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "e714c3999a89635f295feae99812d580"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "206b88d4f7219ce16dbabbbe72e4cc3e"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
<<<<<<< HEAD
    "revision": "b63383bc4a8101a0b948d88fe29e67cf"
  },
  {
    "url": "tool/all/index.html",
    "revision": "fec3ca77de5171b5f0082d4aed1d3e7f"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "65142a6c7f68a0becfd6102ebce6934c"
=======
    "revision": "7aa1f2f26abe37d302d3b810d105fc10"
  },
  {
    "url": "tool/all/index.html",
    "revision": "a79ef1efeea8740ade0f24586bc98e38"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "2613adafe836ce8d53633fd72dbe8836"
>>>>>>> ae3cdbcaadc41a1c5283f7497c1e8e0602fcdf14
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
