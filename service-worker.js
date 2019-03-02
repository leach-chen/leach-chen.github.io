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
    "revision": "5132e9e1adea21d50ad2f377a9ddc0ed"
  },
  {
    "url": "assets/css/0.styles.950adf97.css",
    "revision": "c233f6e06beb2a46acde9a022e47d705"
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
    "url": "assets/js/10.32a75681.js",
    "revision": "9abe206376e699ecd43f3b89e61505e0"
  },
  {
    "url": "assets/js/11.a67b32e3.js",
    "revision": "b86ba06ec0e6cb662f98b866bea725f5"
  },
  {
    "url": "assets/js/12.89bfc74b.js",
    "revision": "89c2c4d6371e550abf5aaf1802325179"
  },
  {
    "url": "assets/js/13.22ddb1dd.js",
    "revision": "ef300c4b9c8b910b37c0600b5e0d1c8a"
  },
  {
    "url": "assets/js/14.9ae7036c.js",
    "revision": "e7c98f576b27ee214e9b462e6468a1cf"
  },
  {
    "url": "assets/js/15.b7c3bdd6.js",
    "revision": "94034e5365628d568e89d4d2c0461c9c"
  },
  {
    "url": "assets/js/16.7cf64cb0.js",
    "revision": "fb49edcefcdc250bcc97cc3f1e610e46"
  },
  {
    "url": "assets/js/17.099dd7a2.js",
    "revision": "253e5be0e8c3b6ceaf6dd02da4ca7fd8"
  },
  {
    "url": "assets/js/18.9f62da9f.js",
    "revision": "4564f917d174f002c29024eba0f04bf8"
  },
  {
    "url": "assets/js/19.b3033ada.js",
    "revision": "431adfd52a7394c2a119a14a84eb1b69"
  },
  {
    "url": "assets/js/2.43e0860d.js",
    "revision": "e0dfd2e1f3349f088185b7f77a99f57c"
  },
  {
    "url": "assets/js/20.874a157d.js",
    "revision": "e95fc793ed3fa94b2755cba77e1c7939"
  },
  {
    "url": "assets/js/21.aa18c786.js",
    "revision": "257ce86d3ad4978befd7e8a63d53cc86"
  },
  {
    "url": "assets/js/22.432fae9f.js",
    "revision": "91a58d6169ee789ec72a7eac6e129c8e"
  },
  {
    "url": "assets/js/23.246d65e9.js",
    "revision": "bafabd638686e80624fdc12e7bcfa1e9"
  },
  {
    "url": "assets/js/24.ce088b45.js",
    "revision": "fd07c824632f7029db529ccdd65c999d"
  },
  {
    "url": "assets/js/25.442ced85.js",
    "revision": "8c15cf8fb99fc07b83e555650bd02114"
  },
  {
    "url": "assets/js/26.d0d8f573.js",
    "revision": "0f7a4d1b74cc4933d660a23016e90082"
  },
  {
    "url": "assets/js/27.97dbe59c.js",
    "revision": "8b51ecea5c7d45de663f78b0dd17b125"
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
    "url": "assets/js/3.3c46373b.js",
    "revision": "d0e2126b4a49d29d30331242c989e694"
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
    "url": "assets/js/6.3860517d.js",
    "revision": "e194cdb71bb4bb7ae9d2034285eda28a"
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
    "url": "assets/js/app.cce9038c.js",
    "revision": "5998736adaee0b46a42af8f61a257b3d"
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
    "revision": "e25f38fd584c515e67b4bf5f649f3110"
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
    "revision": "841d177cf0214d0131bd49c68f8d7506"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "695897a365cf041743480ccbae995fa9"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "f30ff0324f00c370fd17f476b6b1fce1"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "fc5c328a92161bd066d632e849d04213"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "436824ac43356238b4b8d4d56a62d910"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "df47848fec4004167292aea00419eef7"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "fd8c948ab831d50cc37c8c80d5a98e96"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "09577c9298ebf5a6289e59c146cbdf97"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "853e62171d4a6936eec51ca7eae96541"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "9f20c47fd0b2ad9217302bd93cdcbf4f"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "5fd4b678db182693250bd8fffa108ba6"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "061555369670e22c3edcd4b44d7f68c5"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "a81d850c62813d0d49280998cf1392b9"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "245302c7b38052965bf6db2f4e92aedd"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "9b7443fbe9a6a00e7945241ce0bb9209"
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
    "revision": "ab3301e1fdf47da32ee09b3f4487e0ad"
  },
  {
    "url": "join/index.html",
    "revision": "1ed9630f1fdf7408d81a93cf18a849ee"
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
    "revision": "c8777ecdabca14b7e84ecf4b8c45002f"
  },
  {
    "url": "tool/all/index.html",
    "revision": "2349d66458c5c5bb0788b2cbc9adb051"
  },
  {
    "url": "tool/practical/index.html",
    "revision": "6331db01bc578b2ff16ec561ec4bff97"
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
