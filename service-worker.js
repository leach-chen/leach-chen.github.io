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
    "revision": "15ad0a4114b66d32a8828a4ffbd65539"
  },
  {
    "url": "assets/css/0.styles.398c6624.css",
    "revision": "f8156929dc6634cd531d5f5f09938af6"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/Algolia_logo_bg-white.8e0e9838.svg",
    "revision": "8e0e9838589ad42418fe5fa23fa7e9f1"
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
    "url": "assets/img/yanhua.d5507315.jpg",
    "revision": "d5507315681a654c8f1f5f00daf87783"
  },
  {
    "url": "assets/js/10.a5e92d6c.js",
    "revision": "86c4d050a8d99f3adb531838b171ec13"
  },
  {
    "url": "assets/js/11.81a1e186.js",
    "revision": "b0ce150dd68b89135aa8a57300fad9ff"
  },
  {
    "url": "assets/js/12.859d1cd0.js",
    "revision": "3f150b3c1ee6a7890a7eb8bfb233c888"
  },
  {
    "url": "assets/js/13.1ae023ee.js",
    "revision": "2906cdf33fdd644b71927c98d0bdc629"
  },
  {
    "url": "assets/js/14.8a4f74ae.js",
    "revision": "4b519fec77003b26509eb205aeb133d0"
  },
  {
    "url": "assets/js/15.2e17baaf.js",
    "revision": "3422037eea5c9eeab3bb82425ce5863e"
  },
  {
    "url": "assets/js/16.c30d4d86.js",
    "revision": "0224ec8b3a8caae002dbb8a8ae87bfee"
  },
  {
    "url": "assets/js/17.34789c4e.js",
    "revision": "0f0710647c64c6ac297b257510453968"
  },
  {
    "url": "assets/js/18.622d6945.js",
    "revision": "7f8765ccf512540f9979b1f70dcfdfa3"
  },
  {
    "url": "assets/js/19.d085ef82.js",
    "revision": "a3b94c2c08ed2337ae96c58ff1fe85b9"
  },
  {
    "url": "assets/js/2.27228e9c.js",
    "revision": "bc218038afa663b634738adf9e0607bd"
  },
  {
    "url": "assets/js/20.b87f4118.js",
    "revision": "4a96c5407d398690257c8730895d444a"
  },
  {
    "url": "assets/js/21.8ca0e095.js",
    "revision": "57b7d19aa2e096ed5c7472f101df339c"
  },
  {
    "url": "assets/js/22.b81bdf08.js",
    "revision": "c25b693450c58791a979e7002861fa9d"
  },
  {
    "url": "assets/js/23.fce17532.js",
    "revision": "03ebcafef7803d78c342e41c77ccc79e"
  },
  {
    "url": "assets/js/24.d8a3386f.js",
    "revision": "e41ade2b4bd0ee3f1980af223464f9d7"
  },
  {
    "url": "assets/js/25.9b6e1727.js",
    "revision": "4ef1e9aa31fd01d9c5a008d94dead476"
  },
  {
    "url": "assets/js/26.a846367d.js",
    "revision": "b8cf7256cb6fe0b6f70a2bd68b12fa35"
  },
  {
    "url": "assets/js/27.15dbf77b.js",
    "revision": "3798099a961e413ee87785be8e2cdbbe"
  },
  {
    "url": "assets/js/28.978e902c.js",
    "revision": "96f131006176fb13b9af6dffa6ae18fe"
  },
  {
    "url": "assets/js/29.9c7b16dc.js",
    "revision": "a773da8b1b3b055129bc08a594b768c2"
  },
  {
    "url": "assets/js/3.23c7b486.js",
    "revision": "1ca71161ebc73ca60261e0ca4bf4d599"
  },
  {
    "url": "assets/js/30.e7439ff2.js",
    "revision": "c784202b110c8a8f48600f74c1c40e56"
  },
  {
    "url": "assets/js/31.ba5e58c8.js",
    "revision": "88244caac2711e0ebb07181cc41d8024"
  },
  {
    "url": "assets/js/32.a3665df5.js",
    "revision": "e0f88631210f3e904eba8d794683a69a"
  },
  {
    "url": "assets/js/33.ec1fb29c.js",
    "revision": "55d214458d97065814eccbc8c9ff5f36"
  },
  {
    "url": "assets/js/34.52d9f324.js",
    "revision": "5b1103a33d9e747c6411cf5d3eb4f9c2"
  },
  {
    "url": "assets/js/35.375e7dfb.js",
    "revision": "493ddab6581fbbb9a25e3db72340b0c7"
  },
  {
    "url": "assets/js/36.974b57e1.js",
    "revision": "c77f76703e3501fa2fddfd99c50f7246"
  },
  {
    "url": "assets/js/37.6a879c7d.js",
    "revision": "6ad9c57b9391e475d126498ee5ca9f67"
  },
  {
    "url": "assets/js/38.6934cec3.js",
    "revision": "0f99ace1507b6a0a1516fe7d56fc10da"
  },
  {
    "url": "assets/js/39.acee5553.js",
    "revision": "f732be6b2701fea943dc33e3e5fef8b0"
  },
  {
    "url": "assets/js/4.047eb14e.js",
    "revision": "5a3ba81411bca868d708156f3a4f5358"
  },
  {
    "url": "assets/js/40.86c855f6.js",
    "revision": "e06f6e04c49cd1a42e2ee08e2236539d"
  },
  {
    "url": "assets/js/41.5d9e8b0f.js",
    "revision": "c1de251759895f1d9e6759366e245908"
  },
  {
    "url": "assets/js/42.5f277086.js",
    "revision": "f10d3d8b9650112d4a0e0e512555d9f0"
  },
  {
    "url": "assets/js/5.c1e99a4a.js",
    "revision": "73e726e58d1e54b1f30d7363fdb0d78b"
  },
  {
    "url": "assets/js/6.13519067.js",
    "revision": "07732367464f7f7fa95a5fec32edf6ed"
  },
  {
    "url": "assets/js/7.719250be.js",
    "revision": "f3db43e3fd7a51f5a509f36ebc8984be"
  },
  {
    "url": "assets/js/8.2782a6b9.js",
    "revision": "4ec5736a633c9297e5d0eb878d050567"
  },
  {
    "url": "assets/js/9.e2142760.js",
    "revision": "1475d973e75afdbe26498aaa900688b5"
  },
  {
    "url": "assets/js/app.94b4c848.js",
    "revision": "006cf9e9dddad5601cdf3b81a9d75e3d"
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
    "revision": "3ae1a0e11d3d7921514ab8f03acbcbb9"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "4d29fe0c5063fdac0a9dcf2f10f72d16"
  },
  {
    "url": "game/risk/index.html",
    "revision": "7e6b2c2b0223b2bef84427081c6562a9"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "e461ce7d400347d87b4d1da6cf6f3fe7"
  },
  {
    "url": "game/smart/index.html",
    "revision": "f334ed0873f2e3fdbc7eba2a55d24e03"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "9da6fb47bd65f8fd70a13fb733eaf424"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "2a28f183553b53fabc99ef93a802626c"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "5c758880d0060afe846622c353bb3993"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "3ea00b953a2714a53a63602389669dcf"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "a5880766714f96c24fa78fe8971fafe6"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "9f1f33fe0e2e3c014280e91ef9e541b6"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "632c0476d7216335b6ac75a03ca2e515"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "2ea940dbfdad13b1110c35b8ce51b4b4"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "d854ca00fd23ecb71c1b433df5b2fff4"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "91f2e16dcba94399c767e65fb35ea843"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "2b87edb81d30197457eedca07e8eafa4"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "8b4ec50fb1ac1bc5edb0bb4f12a7e5fa"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "b7be46005a8c3098c35109e8222400cd"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "9ca273e30522f1889698aed1eec63623"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "b8be77f96ead14043fe9a9d9132d4da3"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "4a954903823962378df3626f65651b00"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "3a73eb876f701661192e1b047ff89afe"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "e86cc3d82a1193714d5bc90867576d0b"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "bc14db1d559a42e190fc50379e26b35f"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "ce36a7c21d79735303dff83d09db4535"
  },
  {
    "url": "img/Algolia_logo_bg-white.svg",
    "revision": "8e0e9838589ad42418fe5fa23fa7e9f1"
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
    "url": "img/yanhua.jpg",
    "revision": "d5507315681a654c8f1f5f00daf87783"
  },
  {
    "url": "index.html",
    "revision": "41375ffb09f12ec379ce4d7b67f0d761"
  },
  {
    "url": "join/index.html",
    "revision": "aac5594e56d422f67ecb72f39633dc96"
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
    "revision": "8fd44a7d1dbf0954c7fc70cbfbbf9d58"
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
    "url": "js/utils.js",
    "revision": "0ba5bf653aa1b7063257a2b368bf469d"
  },
  {
    "url": "js/vconsole.min.js",
    "revision": "40fd7e9234606a341adcbb1ce0a15d51"
  },
  {
    "url": "js/yanhua.js",
    "revision": "fdd80010fb22905b481693978455de20"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "3d9546aa65bf928815def3f86b42650b"
  },
  {
    "url": "search/index.html",
    "revision": "c409d09a52833e977b2e93c2b911d35e"
  },
  {
    "url": "tool/all/index.html",
    "revision": "2429f37ecb4571503b24cf188e89b33c"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "5ae1f6e200263c566eecd1164172d3d2"
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
