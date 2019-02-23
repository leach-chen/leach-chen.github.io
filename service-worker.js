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
    "revision": "b63fdbcb34adb78c4187e2d8b85a1455"
  },
  {
    "url": "assets/css/0.styles.505c60d6.css",
    "revision": "2a7138e8646d83ab3b4f235f9fc91ec9"
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
    "url": "assets/img/wechatimg.0714bed8.jpg",
    "revision": "0714bed8e9ff413c61280cda5079ae2f"
  },
  {
    "url": "assets/js/10.9bc5f15e.js",
    "revision": "1b098b98901a021aec37aaac70573ed6"
  },
  {
    "url": "assets/js/11.b4f64c50.js",
    "revision": "ccda7a09d50acf10d84624245fe86824"
  },
  {
    "url": "assets/js/12.ceac004c.js",
    "revision": "d4c88fc7f2ed029266f42aab71769848"
  },
  {
    "url": "assets/js/13.2777cd9b.js",
    "revision": "7edf979f30103848d66beb6951756b6c"
  },
  {
    "url": "assets/js/14.95b1cbb4.js",
    "revision": "4f03275e4a27004ecea9a3c9def36192"
  },
  {
    "url": "assets/js/15.42545632.js",
    "revision": "bedbfa014b41acb96f9e026fe77eabc6"
  },
  {
    "url": "assets/js/16.223d5414.js",
    "revision": "d1fd1d72a1f3f00396a7dcf5b2e0fbf5"
  },
  {
    "url": "assets/js/17.a6fcefd1.js",
    "revision": "ab7e825ad725f3b30e6960ef3df14e0d"
  },
  {
    "url": "assets/js/18.05207242.js",
    "revision": "0f62d27326420f308bafaae76f054563"
  },
  {
    "url": "assets/js/19.a45f4cba.js",
    "revision": "f3ebf9a064738a6aef9c9addc1c04753"
  },
  {
    "url": "assets/js/20.caa38abc.js",
    "revision": "5690de40cfbea719b22d6d8c00cfd060"
  },
  {
    "url": "assets/js/21.6ed27451.js",
    "revision": "1930a764186244483813a70fc09678ba"
  },
  {
    "url": "assets/js/22.82d9b56a.js",
    "revision": "da4ab62b1952e7e21bc7e6e17910c812"
  },
  {
    "url": "assets/js/23.b86fce28.js",
    "revision": "47f90f12ab045502b7d04a5e6549c6fb"
  },
  {
    "url": "assets/js/24.d70125e1.js",
    "revision": "34cd4ae623d9c68a6ed383156ec3464c"
  },
  {
    "url": "assets/js/25.6e305f75.js",
    "revision": "5760618fec44396b1b86dee2e004add2"
  },
  {
    "url": "assets/js/26.f3b13477.js",
    "revision": "252f630908b8faff92d3e149e5b06f6e"
  },
  {
    "url": "assets/js/27.a96de367.js",
    "revision": "b0d9754ddfb7e893e70ec167c468be36"
  },
  {
    "url": "assets/js/28.26d0c192.js",
    "revision": "27b37b8958c8781a58f475ecbc6f9806"
  },
  {
    "url": "assets/js/29.8de18014.js",
    "revision": "a7d90247f1fdd844fdd7eece2a67333e"
  },
  {
    "url": "assets/js/3.c3fc7678.js",
    "revision": "7fab351836f75716efc7360f2eccb612"
  },
  {
    "url": "assets/js/30.8786193e.js",
    "revision": "7283db2616a19266603e4473402e3674"
  },
  {
    "url": "assets/js/31.4e1099d3.js",
    "revision": "90aaf71adeef05a6b3ba036fb973c644"
  },
  {
    "url": "assets/js/4.45e21813.js",
    "revision": "57940a357d019f7dd1fcd34441d0d12d"
  },
  {
    "url": "assets/js/5.4de5c215.js",
    "revision": "9511b4e8585ea12ecea6731b4b65c332"
  },
  {
    "url": "assets/js/6.83a0ec8b.js",
    "revision": "ae20bccd1bd13c022286a67169d632f4"
  },
  {
    "url": "assets/js/7.2b9dff86.js",
    "revision": "eb998dba8bce8919c2d864e3c7e8ef58"
  },
  {
    "url": "assets/js/8.74a03982.js",
    "revision": "d50c934eecf3be9c5f126468a1711b5d"
  },
  {
    "url": "assets/js/9.d05a77cc.js",
    "revision": "85f0a805e1576f2b320a33f6a61778e9"
  },
  {
    "url": "assets/js/app.ebd1b0be.js",
    "revision": "0ccbc2574476e17d8cfb7a788a56407f"
  },
  {
    "url": "assets/js/vendors~docsearch.9c00b52c.js",
    "revision": "6ace64c811abe0e20f145dd6ce8f7611"
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
    "revision": "b74706dd878a6692cab4acda48b4295e"
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
    "revision": "359d86b89dc6271c7f13caa446b89a8e"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "f3d4867cff00e8f00da664791d0cb722"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "fe592d7fc0bd30e2c252341b3fcf173d"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "4a71e32672618287e614bfc6197f0f03"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "23832042dd06b14f298abd55306f4703"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "413544bccf3ee36f1d223be7ec61c6d5"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "2a1882ef15d5fb27e331627382a43cb6"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "4eb524c9b6bd0cbfbef00bc5e189787c"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "f969c7bfbed8e4080b7028fde0c4fce0"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "882ac0d8116a1af7d7846265652e24dd"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "c1549933e724124fbec79a020d3c02c4"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "a7c84b200b3f1e1baa7ce2a93b863fe2"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "08b251ee4e5d212d0f3dee2a86fa0106"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "80591b2a63441a7e5e7d83c027e77eec"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "97b96c52585f9b8d4c2996a3f80e8790"
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
    "url": "img/wechatimg.jpg",
    "revision": "0714bed8e9ff413c61280cda5079ae2f"
  },
  {
    "url": "index.html",
    "revision": "211219cc9db8d1b2565b66c377f85bc0"
  },
  {
    "url": "join/index.html",
    "revision": "462b41bc10618e74794c6989778011c1"
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
    "revision": "3b6e053d7709c92ecba65e931c9cc244"
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
    "revision": "50a4e55b4bb2e4fdb881f02281877fbb"
  },
  {
    "url": "tool/all/index.html",
    "revision": "5267630757ba50cc10a501b21c964765"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "1a890ed0b9f90fba1af778208abb64cc"
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
