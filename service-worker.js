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
    "revision": "d6ea5c93062ec4b7d7e8653f3e41fba4"
  },
  {
    "url": "assets/css/0.styles.4fd24786.css",
    "revision": "3e63498c79ae12e4fdab701f85eb5402"
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
    "url": "assets/js/10.403be8ae.js",
    "revision": "337b49f819875303ffe9b4bdeaee0f8f"
  },
  {
    "url": "assets/js/11.73bcff28.js",
    "revision": "5e8df73e936216529674ed4f5709ca2d"
  },
  {
    "url": "assets/js/12.2df104d0.js",
    "revision": "b688d161b14d2d94616561afdc9399e7"
  },
  {
    "url": "assets/js/13.1b6caba6.js",
    "revision": "482996f9769cdf5eedf981ab49b345d4"
  },
  {
    "url": "assets/js/14.2ba4c00a.js",
    "revision": "9aa9d192ab30088635536b543fbd26de"
  },
  {
    "url": "assets/js/15.eac8643d.js",
    "revision": "c943437c5bccba44794ab1dd15aefe0a"
  },
  {
    "url": "assets/js/16.c2031ede.js",
    "revision": "d29334a5c4b88b92a148cd332a76237a"
  },
  {
    "url": "assets/js/17.de1a2e2a.js",
    "revision": "41b3f7b6ec17674040bd17298f25b422"
  },
  {
    "url": "assets/js/18.40c71af4.js",
    "revision": "7e0ee68af932136d84677c2778f43a32"
  },
  {
    "url": "assets/js/19.c0bc5c24.js",
    "revision": "1ec1c2e8ed3b4bb96f57f1f763d91fab"
  },
  {
    "url": "assets/js/2.5bfa3653.js",
    "revision": "057693f87784b3477d6e03d47fdfc410"
  },
  {
    "url": "assets/js/20.b9e17ae9.js",
    "revision": "07fde18d1e43d4e2a4457a1e89659262"
  },
  {
    "url": "assets/js/21.503fcc21.js",
    "revision": "96cc4009730322b0ff175676eceb9530"
  },
  {
    "url": "assets/js/22.3828aea8.js",
    "revision": "0ebb4319daa3af8fe634fbfc470ca3b5"
  },
  {
    "url": "assets/js/23.191fc7c0.js",
    "revision": "a50b369c91b7c4f7f2479f06fc9b8344"
  },
  {
    "url": "assets/js/24.b821dc41.js",
    "revision": "54b0282b2d518261150e9ea0cf652ba6"
  },
  {
    "url": "assets/js/25.8617b834.js",
    "revision": "6b80ea93a16cb30ee7063260d3145f1f"
  },
  {
    "url": "assets/js/26.dd7e8ac0.js",
    "revision": "b68b04adee7bfbe9ccf0bfbcbbc67a53"
  },
  {
    "url": "assets/js/27.d87f943e.js",
    "revision": "b5657d471cd586bc1854d2282de77138"
  },
  {
    "url": "assets/js/28.a255f4ba.js",
    "revision": "d0b72f59c010110e3731844154ac3249"
  },
  {
    "url": "assets/js/29.a9173134.js",
    "revision": "085ad0446fe6b39f5764e734e28fd303"
  },
  {
    "url": "assets/js/3.4229b3b3.js",
    "revision": "bbc2d3f4e3b2a5bc092ce929865065ae"
  },
  {
    "url": "assets/js/30.20bd6280.js",
    "revision": "91408dddab39eb48de4b7354766fa7fb"
  },
  {
    "url": "assets/js/31.861aec26.js",
    "revision": "e85a3d4d0838298f92decf234fdc1995"
  },
  {
    "url": "assets/js/4.056b313f.js",
    "revision": "f8f5c410e6125edb5cecb4c5eb5e51a8"
  },
  {
    "url": "assets/js/5.225b880d.js",
    "revision": "332b0b0d366f9515d603df53007c6214"
  },
  {
    "url": "assets/js/6.79796867.js",
    "revision": "cf179e6a5589e346a2629b4d2ace134a"
  },
  {
    "url": "assets/js/7.236c81df.js",
    "revision": "2f163c4cb4551d01a559ee9d81d7014f"
  },
  {
    "url": "assets/js/8.b0257eff.js",
    "revision": "c7153e97d58c49362ce1f47527708391"
  },
  {
    "url": "assets/js/9.8516c470.js",
    "revision": "e2056e6ec540430f1c5bbfda543ac459"
  },
  {
    "url": "assets/js/app.b14c867f.js",
    "revision": "59928c230dafdeb456d757c50325a828"
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
    "revision": "651d22f4dab17aabe7e3b7ba747e8007"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "39b6b0bac5168adcbb675a3aa8bd0d2b"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "9c04e016a79f801dd9a36612dd135a38"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "e9b4d68dc3cfd2e4f65e05d674940bf5"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "7b9d6449a01645ebe74ed149c8cfd017"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "d25f2ccc92e982bc6705434cc6bca21e"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "2cbeebf07eed7638edc1a756f1906d23"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "b50323d782e01843b4dd3940beb172f1"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "3152430855bc96d3b5de866d457b7b2e"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "9749f147dbcb9722fae1f41db6d706eb"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "966c62bf56b2f49d50ca5514fe1a6211"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "4e7d500324cb66532a81abea68c1138e"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "dd50084d62aea3ecf0eb604213518e50"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "847d97a0c4eb13f24bade302aaee79bb"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "8ff953c03a3bebd8c4a72185c6fbee3f"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "a41a8b3a0f6ae5728e6c3278cc133e0f"
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
    "revision": "100fbcd1d5d124cdc55c1e4455adbd88"
  },
  {
    "url": "join/index.html",
    "revision": "1a770da8ef1000299ceb5d471eb2d98e"
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
    "revision": "ee3385ea6fadc2d2a9b3303797c7f2f1"
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
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "6170de1eefd20afffba4e44a6a89e07b"
  },
  {
    "url": "tool/all/index.html",
    "revision": "ce231c4fd5cc3d14578029aee5fcbb59"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "7e49bac577074e5b4926ba61535d405e"
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
