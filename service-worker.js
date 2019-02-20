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
    "revision": "edb4c1630e877a092a1bb8cbadc082ee"
  },
  {
    "url": "about/index.html",
    "revision": "912b4ab67c1e8636c5c69e204cc31d85"
  },
  {
    "url": "assets/css/0.styles.f30e88de.css",
    "revision": "01b5c85592af0461e25d015324f85636"
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
    "url": "assets/js/10.d74aeece.js",
    "revision": "5085abfbb38a5138dff3cd95c706395d"
  },
  {
    "url": "assets/js/11.433136f5.js",
    "revision": "2778c1734b7327b2db397adaef924497"
  },
  {
    "url": "assets/js/12.3d7fa591.js",
    "revision": "7a6111b258e09579878a28fe979c79d3"
  },
  {
    "url": "assets/js/13.eae657ce.js",
    "revision": "2d303ecc0f489e695606a6250c7f4a0a"
  },
  {
    "url": "assets/js/14.ed2a73eb.js",
    "revision": "048238243001ddce56643183cb6af4a5"
  },
  {
    "url": "assets/js/15.004725b8.js",
    "revision": "16b8b6389da460216810a0adfa7a16ad"
  },
  {
    "url": "assets/js/16.56f43e95.js",
    "revision": "fd083337ffc107f4bcb8342fc4d1cce7"
  },
  {
    "url": "assets/js/17.8c998e1a.js",
    "revision": "8c6e023f70e83885c061ea707e4a47c5"
  },
  {
    "url": "assets/js/18.57ba6e8c.js",
    "revision": "a32ac305530e720e7ace375ee7fa88a2"
  },
  {
    "url": "assets/js/19.e726246d.js",
    "revision": "83e64a61eac117064911c51d9a424ff9"
  },
  {
    "url": "assets/js/2.9bb86e9c.js",
    "revision": "98e0ba432dcee8c22d4aa5f949816bae"
  },
  {
    "url": "assets/js/20.3c2772ea.js",
    "revision": "d57dac397124b94e7ab269cd350e882b"
  },
  {
    "url": "assets/js/21.d91fbae4.js",
    "revision": "814a54dbece8e5c1df73dc3d57ce3ca3"
  },
  {
    "url": "assets/js/22.2ea33da4.js",
    "revision": "f8e29a58c88710de672b852075414409"
  },
  {
    "url": "assets/js/23.0ff0c558.js",
    "revision": "dca907b114cf9f1bb592baf0d431fb46"
  },
  {
    "url": "assets/js/24.fb8439ae.js",
    "revision": "9a2418af8f363bba7314f15e861cad5f"
  },
  {
    "url": "assets/js/25.bd4aada6.js",
    "revision": "3d5757bfde74019cafb86ac36d56452d"
  },
  {
    "url": "assets/js/26.0578319e.js",
    "revision": "e328176f16a9845c8cbc3de10af72085"
  },
  {
    "url": "assets/js/27.d8001b20.js",
    "revision": "b0a6d213da83bab92731c1833daab629"
  },
  {
    "url": "assets/js/28.491dba13.js",
    "revision": "6457810e9cb0a98ff2597f9679ecfc7f"
  },
  {
    "url": "assets/js/29.c7d4027d.js",
    "revision": "649d7332526095eb6d267ca9d85aab4d"
  },
  {
    "url": "assets/js/3.7fce3dfe.js",
    "revision": "f39044d0386595d6744986f1cf39b48c"
  },
  {
    "url": "assets/js/30.b9154b62.js",
    "revision": "35bd6722f2f16a1a7541a952bee7ca99"
  },
  {
    "url": "assets/js/31.fe92e2b1.js",
    "revision": "00618d7487db9dac0e71c506d438a971"
  },
  {
    "url": "assets/js/32.e867592a.js",
    "revision": "fe6e1196e31ce07eb6b1e7d695b994c8"
  },
  {
    "url": "assets/js/4.d8ebfda1.js",
    "revision": "08f2fdb701499c5b28f7074a6030a4a3"
  },
  {
    "url": "assets/js/5.23955f1d.js",
    "revision": "1cd2e5a3bb4b3d3f89d4263f0ebca607"
  },
  {
    "url": "assets/js/6.7b8c897d.js",
    "revision": "60280aade9699d10ae0d30c8413b5890"
  },
  {
    "url": "assets/js/7.6805984c.js",
    "revision": "7f746954363d5467c46faeec02eac9ca"
  },
  {
    "url": "assets/js/8.936fc7d4.js",
    "revision": "2cd195cb33dd6acd13be5cc2401c5b23"
  },
  {
    "url": "assets/js/9.d84b5381.js",
    "revision": "8d637e9d234caae8a3618a2f149fb74f"
  },
  {
    "url": "assets/js/app.b1c58429.js",
    "revision": "465e30855e3578e44c1a1a729623b6b8"
  },
  {
    "url": "contribute/index.html",
    "revision": "410a7079b8081e05d4658992193a535a"
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
    "revision": "bc17bba1401bf2c966b8a0077e063fed"
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
    "revision": "0cc682dbe221dddaa409972d5fb32902"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "c0531f6e00d22aaa96db6d2756ef7b44"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "6b00d450b1e59f57cb4dee1aaac01fdd"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "7d7c43ee35f368f012dbfef67fe54000"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "35d7084256d4d23b47e2f3785c20eea1"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "ac4e16f66618919fcee55d610f8c6f27"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "f35686664ecc4355c221e3486107fe1a"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "3501465c9a352eab8d75feff5e1d30f5"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "486bde1139ead7837c9a34b5a4f506b9"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "e39a3035a002c12203cd9997b5d3c7e4"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "daa8408e6ee826805c3495720d6247c8"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "16dd255b3ea5cbfbf2f7eaa012dc0447"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "bfdcd02747125ad6f6dd5ff5e0226ee1"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "1ee6f9838fbaf0e8d13525fa13154513"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "f7937de59e2d0f33e60caa72485b0ece"
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
    "url": "index.html",
    "revision": "f6ce310cea5f394adb382c57fe3a79b9"
  },
  {
    "url": "js/aa.js",
    "revision": "86b7286f55a11d9073a687642759cfb0"
  },
  {
    "url": "js/av-min.js",
    "revision": "3794b439ca74957d61fc88df1f1ee315"
  },
  {
    "url": "js/data/AndroidData.js",
    "revision": "e43dae872c1e8fdd2ee8255a757d3a5a"
  },
  {
    "url": "js/data/Constant.js",
    "revision": "02f59405e51b6630f3bc6b07f3484e3b"
  },
  {
    "url": "js/data/DataFactory.js",
    "revision": "06c7dccf252c89b408fc7008d811563f"
  },
  {
    "url": "js/data/FlutterData.js",
    "revision": "4f6bf9769460afade8997126a79d8944"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "bcdc68ba37da3d98c7c412532b211272"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "8ad0e430e24c77c0816e00ff75656958"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "e510c7d52b2db84b23b4404f63288cab"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "64a246f136b472e454f7a326b874d958"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "d4aa85629f5f3d133dd0ba34810dc014"
  },
  {
    "url": "js/Valine.min.js",
    "revision": "778a678ba96bd5ee7c3a1f04a342fe0c"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "f17fe6f7c2ef7bfd678516689f956e6a"
  },
  {
    "url": "tool/all/index.html",
    "revision": "564c74c01e689e307aab72645afe01b7"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "5036a411ed86edf0874b91bc9de21a0e"
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
