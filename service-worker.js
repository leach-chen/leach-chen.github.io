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
    "revision": "56255bcecd6b8aeed419b2ab8c7a5752"
  },
  {
    "url": "assets/css/0.styles.7e33f228.css",
    "revision": "ca5c8c19bd19fb0dba8a4dc8fc354a9a"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/Algolia_logo_bg-white.f309cbb8.svg",
    "revision": "f309cbb84b60cd71bee3f21e7f24162e"
  },
  {
    "url": "assets/img/alipayimg.76375138.jpg",
    "revision": "76375138cb4770eeb6837bc2d8d62cf1"
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
    "url": "assets/img/wechatimg.0714bed8.jpg",
    "revision": "0714bed8e9ff413c61280cda5079ae2f"
  },
  {
    "url": "assets/js/10.448266bf.js",
    "revision": "64f3bdbbdd233310a5cbfe6898222d3c"
  },
  {
    "url": "assets/js/11.7a459262.js",
    "revision": "084a71a1ea07238e8ce60291ee42aade"
  },
  {
    "url": "assets/js/12.07d7493b.js",
    "revision": "7d13a14cfda01089784b1d7a68c165cc"
  },
  {
    "url": "assets/js/13.10db68ab.js",
    "revision": "291e50a136f161a1da5012756ba22e59"
  },
  {
    "url": "assets/js/14.b452e7b7.js",
    "revision": "ad575f0d6d12910527127147030be2e3"
  },
  {
    "url": "assets/js/15.6abeeed2.js",
    "revision": "59bbce8095d9495a220df80461acec42"
  },
  {
    "url": "assets/js/16.e82fd8b7.js",
    "revision": "26c381eed7903e7f087fc515e68b6c45"
  },
  {
    "url": "assets/js/17.0f8e44f9.js",
    "revision": "2508d61bc641ed3497cc6e40ab5a686d"
  },
  {
    "url": "assets/js/18.edf1ee41.js",
    "revision": "ad893205156083c0407f1ac212bd40e7"
  },
  {
    "url": "assets/js/19.ac5a3485.js",
    "revision": "69415677791c5f4acc975dc1e12ebc8c"
  },
  {
    "url": "assets/js/2.54ef883b.js",
    "revision": "dec6bef71971db8b852f82ba72fd0d3e"
  },
  {
    "url": "assets/js/20.a7154915.js",
    "revision": "64ba6904abc8a643e97d3c1d9c79f198"
  },
  {
    "url": "assets/js/21.82505b54.js",
    "revision": "5b0a7ea3bb4cb279623e2d383407fabf"
  },
  {
    "url": "assets/js/22.360144d9.js",
    "revision": "8b91ff0aef02cc3357998ffac72cd284"
  },
  {
    "url": "assets/js/23.3c4b4ece.js",
    "revision": "0a857ec3b1b4b46fa193178716a39d8f"
  },
  {
    "url": "assets/js/24.bd0b8295.js",
    "revision": "3ebd00a5395b4cba3678c233e1a6ef81"
  },
  {
    "url": "assets/js/25.9e4991f0.js",
    "revision": "acba7256d403975edd895fbad1fce783"
  },
  {
    "url": "assets/js/26.c1e3454d.js",
    "revision": "707febd56c7150adf3e892e2eeb8f119"
  },
  {
    "url": "assets/js/27.cf2f0fc6.js",
    "revision": "784757b588321c9b497768b199c6cd19"
  },
  {
    "url": "assets/js/28.5df5bb2a.js",
    "revision": "34faddd964986a752b60d6792a7ae01d"
  },
  {
    "url": "assets/js/29.17340e59.js",
    "revision": "4a5ff9b001088f7aadc0f41eb2e6a08c"
  },
  {
    "url": "assets/js/3.93114e5b.js",
    "revision": "21ad32ddf8f60c86b7a99bb7991ae42e"
  },
  {
    "url": "assets/js/30.6639d8c0.js",
    "revision": "18c0d92427754f1d2fe30aa4f902d129"
  },
  {
    "url": "assets/js/31.6eb44786.js",
    "revision": "d4665492679aa078ca11681e332c0649"
  },
  {
    "url": "assets/js/32.b483de7b.js",
    "revision": "b9170ebb52e7491290927f8fcfda7cf4"
  },
  {
    "url": "assets/js/33.ce67a2b2.js",
    "revision": "63a15e00550ded9104adde28456cb320"
  },
  {
    "url": "assets/js/34.6c60af3f.js",
    "revision": "9d8b1efdc618b92795ccff080b28b16b"
  },
  {
    "url": "assets/js/35.36e485ee.js",
    "revision": "85718a6c61e8186704bff1878f18caf5"
  },
  {
    "url": "assets/js/4.6531bbd7.js",
    "revision": "95d1193349565b85cc7b43c7af28c703"
  },
  {
    "url": "assets/js/5.2fee7225.js",
    "revision": "bd4149375dd65bd3a57b8eafc0bd05e4"
  },
  {
    "url": "assets/js/6.360ac92c.js",
    "revision": "84cad19b7ca784feafa9581845bb940c"
  },
  {
    "url": "assets/js/7.fd9cae55.js",
    "revision": "34e346a3ca977f94be866eff5d552624"
  },
  {
    "url": "assets/js/8.814fc7e1.js",
    "revision": "665eaa86f0afd3292558dde74ff104bf"
  },
  {
    "url": "assets/js/9.cc66a26a.js",
    "revision": "61d7d962a28558e4dcec0893f1ad7f90"
  },
  {
    "url": "assets/js/app.2f2ae4cf.js",
    "revision": "e6c54aaecd63a40d6104dba2f219aace"
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
    "revision": "2e03755fdf60b73549d437a72927ed71"
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
    "revision": "674e61b151172da786e92e05ce3de4ce"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "89edc0b14eeb194572f55014cc7215e0"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "b3bfb7095c15a601d9ca5cd8cde406d5"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "c97adc5bab448a4366f351b75c3a6862"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "a3b7845658638361dcad33329a84f6c9"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "550e247817d48a1b39cf7afe0e7adbd1"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "a1559fa8025044af669f1134ac896d48"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "ca30f69a6607a60d746559fe61816ec2"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "176815f68bed5d5f386d98bebcd1c384"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "64978fc3fc076be24ce2a05bbf73ff89"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "656399936369cc6587699dce34355615"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "b6e71c1e3c8f194589790a5e4215ccb4"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "3b3ccafb6742619cfc30308ff6fc346d"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "fef72b6179e8a40f762bfb23241bb569"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "2dffbc9888796da28fc9a535d2098482"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "a9f8402797084f3fd35cfcb029dff798"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "19d2079ee332ad755f5cf477fb735966"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "8edd670645121aa71f4faf014cb48892"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "aa3600979ed78aa5e15bd08c80932954"
  },
  {
    "url": "img/Algolia_logo_bg-white.svg",
    "revision": "f309cbb84b60cd71bee3f21e7f24162e"
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
    "revision": "e3e31fc3f055740b4e0095364b43ac89"
  },
  {
    "url": "join/index.html",
    "revision": "a044d9b3a19bd5d5d6646f94f862b5d7"
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
    "url": "js/data/android/data_android_animation1.js",
    "revision": "0d18530bb9c9967a70c6b9244248b001"
  },
  {
    "url": "js/data/android/data_android_full1.js",
    "revision": "5738824d20d44b19625e538acab49d47"
  },
  {
    "url": "js/data/android/get_android_data.js",
    "revision": "71e82d6e89ac891692b22a00790d583b"
  },
  {
    "url": "js/data/AndroidData.js",
    "revision": "f2ff3e71d1a98e024683e5e40096347e"
  },
  {
    "url": "js/data/Constant.js",
    "revision": "ecf85f471cd1894456c761ef3c922ad2"
  },
  {
    "url": "js/data/DataFactory.js",
    "revision": "a0d9d49ef3903b95f26e2fe86eb72206"
  },
  {
    "url": "js/data/flutter/data_flutter_full1.js",
    "revision": "6d81b04805fc663bb3b77555b2c32613"
  },
  {
    "url": "js/data/flutter/get_flutter_data.js",
    "revision": "3cc5dce2790aa2c384b5e60b297f2447"
  },
  {
    "url": "js/data/FlutterData.js",
    "revision": "63a9e73d1a30ca69bb564d739e9c7472"
  },
  {
    "url": "js/data/game/data_game_synthesize1.js",
    "revision": "adbd9babbe185c3572d99d939d728e3a"
  },
  {
    "url": "js/data/game/get_game_data.js",
    "revision": "9c4cf39cd67a459cda4fc1d893c13d1e"
  },
  {
    "url": "js/data/GameData.js",
    "revision": "08d1eea8907396819cc714fa347e3e6c"
  },
  {
    "url": "js/data/H5Data.js",
    "revision": "462ea478690bc64e09ead671fb3b8749"
  },
  {
    "url": "js/data/ios/data_ios_full1.js",
    "revision": "a3ce9ddbcd90168dff141f4d1ba42f27"
  },
  {
    "url": "js/data/ios/get_ios_data.js",
    "revision": "c3a65247af62b1068eaf6e5a3f60c0fb"
  },
  {
    "url": "js/data/IosData.js",
    "revision": "5c876a814382bb4b05487d6eab4a0527"
  },
  {
    "url": "js/data/tool/data_tool_synthesize1.js",
    "revision": "6a96f6d126ba867364c8df44c21a812b"
  },
  {
    "url": "js/data/tool/get_tool_data.js",
    "revision": "30f8db02025e811e83b4f2f5a59a0634"
  },
  {
    "url": "js/data/ToolData.js",
    "revision": "1776031778fa0e4607b6ad238cfc2693"
  },
  {
    "url": "js/data/vue/data_vue_full1.js",
    "revision": "75838da525fc02ee7276326f46e641c1"
  },
  {
    "url": "js/data/vue/get_vue_data.js",
    "revision": "947f253fe44dda6d2aac3beca3b4f50a"
  },
  {
    "url": "js/data/VueData.js",
    "revision": "232ed3ee657f781f48d06e3e97b89340"
  },
  {
    "url": "js/data/website/data_website_css1.js",
    "revision": "221cbf36f9cfaa0974cbd86712729d86"
  },
  {
    "url": "js/data/website/data_website_hexo1.js",
    "revision": "dee8a7a62aa5e0585148f347153538c8"
  },
  {
    "url": "js/data/website/data_website_jekyll1.js",
    "revision": "ce3ab8f699f7382412ead348c50834fa"
  },
  {
    "url": "js/data/website/data_website_php1.js",
    "revision": "0ecdeedbc579c17582ff17f56cc14681"
  },
  {
    "url": "js/data/website/get_website_data.js",
    "revision": "38be6dad394191039f3f2e7935f388f3"
  },
  {
    "url": "js/vconsole.min.js",
    "revision": "a03b6646236194579d6ea0e774b3ddb4"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "b282c1afc24feca3fab530081baa8510"
  },
  {
    "url": "search/index.html",
    "revision": "e13603529d566bd5f5245de1039c3d48"
  },
  {
    "url": "tool/all/index.html",
    "revision": "8176fd5f28ea46480bc37d69dcc7c19c"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "c11b5a994cd74dc2a1c088306fef7fc5"
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
