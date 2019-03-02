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
    "revision": "0dc5d6f281c444108ed65ea39f5ca624"
  },
  {
    "url": "assets/css/0.styles.ccd542de.css",
    "revision": "465e09891651946a4c8bd74d413cf80b"
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
    "url": "assets/js/10.4e934c2d.js",
    "revision": "d01f556eee10bda85744dee12a609fa5"
  },
  {
    "url": "assets/js/11.da23d922.js",
    "revision": "ee989d79579e78d3885de970fa909570"
  },
  {
    "url": "assets/js/12.795b5d32.js",
    "revision": "866ed1b327ad3542521b30997697e3d3"
  },
  {
    "url": "assets/js/13.ed5b492b.js",
    "revision": "9b2075df501d432c3649d0924a1726d0"
  },
  {
    "url": "assets/js/14.edefd4c5.js",
    "revision": "8a220d27f45ca6a196bc745548649734"
  },
  {
    "url": "assets/js/15.2513dd93.js",
    "revision": "71b4215e5f99a8e226083d76409412d3"
  },
  {
    "url": "assets/js/16.16ffab56.js",
    "revision": "e481f43ffb368af308c85c18d1c24b75"
  },
  {
    "url": "assets/js/17.b3425a31.js",
    "revision": "41a4142de12b3b90784a5da3596245b9"
  },
  {
    "url": "assets/js/18.1138deb8.js",
    "revision": "28cb674c0ad1d20609d4483c7a915b07"
  },
  {
    "url": "assets/js/19.f2639e79.js",
    "revision": "f592ae76af47a7f9a87353057d8abbad"
  },
  {
    "url": "assets/js/2.e843b2d0.js",
    "revision": "f947e8c005c5c3fe188fb528b49717c9"
  },
  {
    "url": "assets/js/20.8ef0d0dd.js",
    "revision": "4afb2d878163ccec09cf5893bde6c676"
  },
  {
    "url": "assets/js/21.01c5b350.js",
    "revision": "3dadec335b2f4c33594331a4f1d542fa"
  },
  {
    "url": "assets/js/22.432fae9f.js",
    "revision": "91a58d6169ee789ec72a7eac6e129c8e"
  },
  {
    "url": "assets/js/23.a603bdb8.js",
    "revision": "a1f5a5f34155c2d91a5636cde8d69bfc"
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
    "url": "assets/js/26.1c1216c4.js",
    "revision": "eaa2181f87367d22e1e90f3c63d85f5e"
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
    "url": "assets/js/29.648405cb.js",
    "revision": "dfaa34a8bc874b916d24c3c9cafd7a02"
  },
  {
    "url": "assets/js/3.61d78ca8.js",
    "revision": "e01236aa0a2b86fd9308e2e2ba7b8ac1"
  },
  {
    "url": "assets/js/30.fca8ffd5.js",
    "revision": "00292fbcb0e667eb86cee525c055ca4a"
  },
  {
    "url": "assets/js/4.a489a3bf.js",
    "revision": "1c2e88ea93f25e965d8bf87a98a60713"
  },
  {
    "url": "assets/js/5.019dd347.js",
    "revision": "ac9741c61e67721686da3b5c4c52749a"
  },
  {
    "url": "assets/js/6.96b0417c.js",
    "revision": "8f7215045e1acec6f3b637060170284f"
  },
  {
    "url": "assets/js/7.16c04684.js",
    "revision": "8f12ec704f27777dec66fb2cb317d6eb"
  },
  {
    "url": "assets/js/8.bf19291f.js",
    "revision": "835c0a508a955485563c5fea4472dc5c"
  },
  {
    "url": "assets/js/9.3b416869.js",
    "revision": "73cd2949221074a77209faa52b5a8ed7"
  },
  {
    "url": "assets/js/app.87f2e922.js",
    "revision": "fce341931687dfa392c5b126b6b6bb01"
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
    "revision": "2e504052abb0e64e7398e5aee2fcc675"
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
    "revision": "87c001f6108e1334189aaa40e037abd5"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "6a44d9cf64728be309b44ffb71f52dc3"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "5a87fe7ad0bb120af48b17db1abaad0d"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "ea553c8bfae9e14e9b2c6bd05b240620"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "914ff636d5965ddc9b309ba8dc6748ef"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "adac4dd7b400b5c111b07409696e8cca"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "dce6b590ce7549e73ee1d0aa481f1713"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "47abc9cd2cef04ad2739b9b63bce3a14"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "4fbe0afe40cca899c5e57e89ca528541"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "30583f2cc1673fb52031d2c67bb2766d"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "21052dca281575505b5cfa9e85cbc548"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "dc02fa3bc5342313c72ff4aa460a9bb5"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "55bd99ad4782eec21780610d603cba1b"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "6ad0b4d32f43f0c1cdc0db06455abe31"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "eae466db5e3e6afc2c72a5ab8108348b"
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
    "revision": "6a5f311920e70c78cf6286b02f7656c7"
  },
  {
    "url": "join/index.html",
    "revision": "16ce82b3920aa28e54dcd6709d286714"
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
    "revision": "55b803884b6948b4be383b98d15cb7b5"
  },
  {
    "url": "tool/all/index.html",
    "revision": "5db12a23bc75802418a7dbcbc4af806b"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "4846620b548551cffc945a68224efff8"
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
