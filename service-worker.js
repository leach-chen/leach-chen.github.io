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
    "revision": "35850c7aa435e3e988a001634895f3be"
  },
  {
    "url": "assets/css/0.styles.874389db.css",
    "revision": "3dfd53981952677ea91b8849abc1c3a8"
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
    "url": "assets/js/10.c45334d7.js",
    "revision": "2806314b987b050e71835870da2d9cb3"
  },
  {
    "url": "assets/js/11.21890998.js",
    "revision": "6c52ad7578a06a32f9d06532e4aa1869"
  },
  {
    "url": "assets/js/12.2ae2d922.js",
    "revision": "47c38b0382360fba85962a12f52f29d2"
  },
  {
    "url": "assets/js/13.419a0c93.js",
    "revision": "7177ec1ac163db5deeeced9e8826e545"
  },
  {
    "url": "assets/js/14.153461f7.js",
    "revision": "416e00924df89cf6aafc61a7ce12d9c9"
  },
  {
    "url": "assets/js/15.0f4b98f1.js",
    "revision": "29a242e27ff14922c172fc3ebd7efab3"
  },
  {
    "url": "assets/js/16.ca25333b.js",
    "revision": "4679671a8f72470f1b446752c5a634ce"
  },
  {
    "url": "assets/js/17.7569b438.js",
    "revision": "9ba18cc070718abe8845f5ed89650f35"
  },
  {
    "url": "assets/js/18.390abf2b.js",
    "revision": "07f4b344db58c96f6a249a669bbd100f"
  },
  {
    "url": "assets/js/19.6ceafcf0.js",
    "revision": "f15b382b677e247d006d3e495f73f147"
  },
  {
    "url": "assets/js/2.1b312f6d.js",
    "revision": "37e2978f752fb06c67595cc699b14e8b"
  },
  {
    "url": "assets/js/20.3d2118cf.js",
    "revision": "c9f3ea7f09b937768ae30ae5c7d7d7ec"
  },
  {
    "url": "assets/js/21.0352e244.js",
    "revision": "9d1972380a8eeb82bd933f206b1f42d5"
  },
  {
    "url": "assets/js/22.f5bb4187.js",
    "revision": "7f8d41ea4ebe488be84e98e63242f83c"
  },
  {
    "url": "assets/js/23.3eb4ac0d.js",
    "revision": "142740ff1e9a597cfeeec5d870194efa"
  },
  {
    "url": "assets/js/24.8fa65fa0.js",
    "revision": "0c71843fcf2b123daf64592a7a117455"
  },
  {
    "url": "assets/js/25.26622c7e.js",
    "revision": "596f2dee06f9819a3d5f761abdeb409a"
  },
  {
    "url": "assets/js/26.6f91474a.js",
    "revision": "73c4b1815451a4b7b507a5446b7d9ccc"
  },
  {
    "url": "assets/js/27.1eea543c.js",
    "revision": "964b97550fccd3585d7408652656f5b1"
  },
  {
    "url": "assets/js/28.6b3319c1.js",
    "revision": "51b549cafc6dae9877aab3b4144b66a8"
  },
  {
    "url": "assets/js/29.125e35fe.js",
    "revision": "38cf5df2b1006dcb13f1f06c38ba0e39"
  },
  {
    "url": "assets/js/3.e7a4f3b5.js",
    "revision": "50f5f14037bce8d79a3bfac994b2816e"
  },
  {
    "url": "assets/js/30.694aa218.js",
    "revision": "3b94be625745166b45f9bd1d3fdec2f1"
  },
  {
    "url": "assets/js/31.11841912.js",
    "revision": "d270a49bdec2c13dc0275d08d824b62f"
  },
  {
    "url": "assets/js/32.5965e008.js",
    "revision": "b8d81e7fad5f809fda8c8e7ca26399dc"
  },
  {
    "url": "assets/js/33.1fc65852.js",
    "revision": "cdd2ad27b705954a1de922807b2d8520"
  },
  {
    "url": "assets/js/34.bff2f40e.js",
    "revision": "c38507a52be0511a66934064e98eebe4"
  },
  {
    "url": "assets/js/35.1091bd49.js",
    "revision": "94bc9892b60c256b832b66bde498daad"
  },
  {
    "url": "assets/js/36.66390617.js",
    "revision": "115e05957fd8605bf3614d8ff8f0d037"
  },
  {
    "url": "assets/js/37.aea9265c.js",
    "revision": "1cb353953846cb537e2df3ed013f91c0"
  },
  {
    "url": "assets/js/38.6934cec3.js",
    "revision": "0f99ace1507b6a0a1516fe7d56fc10da"
  },
  {
    "url": "assets/js/39.e8e02cdb.js",
    "revision": "d3fd26ff8df963febbfcfcc61bfd013f"
  },
  {
    "url": "assets/js/4.e9b027da.js",
    "revision": "984c166fdb54dc68bd4f9ba0d44411ab"
  },
  {
    "url": "assets/js/40.9bbd4448.js",
    "revision": "d8ba3cc16188f03f08b8d27cbe23ae20"
  },
  {
    "url": "assets/js/41.06f124db.js",
    "revision": "8e558fd974dff696e60497f4243f680b"
  },
  {
    "url": "assets/js/42.8b0dccee.js",
    "revision": "b7c4fa4e22e4d6d2de016ee16bd72990"
  },
  {
    "url": "assets/js/5.f4972ee8.js",
    "revision": "2453bc135411aeba1077de59798bb000"
  },
  {
    "url": "assets/js/6.d42638f9.js",
    "revision": "b5eaf10369f466e2053dfea31c2c4c9c"
  },
  {
    "url": "assets/js/7.e67d5ddc.js",
    "revision": "79d3ea16ac00e67aece84e959979daa0"
  },
  {
    "url": "assets/js/8.c82421da.js",
    "revision": "cbc90544a8a08c275a5115dd9fce94b2"
  },
  {
    "url": "assets/js/9.c8b1d7e9.js",
    "revision": "0f74108ffc4666bdf8b01fb1363f46d4"
  },
  {
    "url": "assets/js/app.f0700528.js",
    "revision": "cb15e441011effc41770131be07dedfd"
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
    "revision": "5e73aa4757e3f392339c10df182a4e3f"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "c98fa347f9c990974e913dc2ba131a9c"
  },
  {
    "url": "game/risk/index.html",
    "revision": "f8dcafa91024241d6a0c9ce76391697e"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "e287cb2bcc21c7f48ba2e16c0167644e"
  },
  {
    "url": "game/smart/index.html",
    "revision": "b40dd53fdbee87c5905f8bfeaf8bf140"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "a288bd2d69a229b63362cf581123198e"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "daa255eb91ccd440b8b94f62c89cb39c"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "694e85aa32aaaade4d5439d913b4db43"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "ab115383447046426cf29819f74cc138"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "87db3ac1aa38f290be7f3eae7de8b30a"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "8ae49004f3fc6caefadc882914f859a8"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "0764194e79e1b940bcfebae9e2fcd173"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "fd68c4c2e446341319a08117c42c6ee7"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "d16fdb87001e87f7f49cebe17baf3933"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "e72e579ee5756f44e81b908757a18e15"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "dcbd3ae7583e1e7409a0e3f9782e9a1e"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "c3f3c2b37627d17854e6219a04812738"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "1a7141905afcfbc9f308dfd2c5b48d00"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "c89b2f940f72cf044788f389766e7e67"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "c801344a960ff9d377f44a038801e9dd"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "723915f32495e9d0d9de3f10d253ec1f"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "07e928d0e81a44da769bb2c18c027960"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "a1ef50002a78da053747138c4f10fde0"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "4f1ff21b8753573dcd3ec10ab3b1fc6d"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "7e0486b46c6be9cafcd51976f86c5ed5"
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
    "revision": "45424725cd785ccee9a27d43a98b573c"
  },
  {
    "url": "join/index.html",
    "revision": "918975cfde640c9da67a8840a9eb6820"
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
    "revision": "a03b6646236194579d6ea0e774b3ddb4"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "8118a6cb5aaa57c5401ec409a321ca07"
  },
  {
    "url": "search/index.html",
    "revision": "749039687479f4cc20567903f383f351"
  },
  {
    "url": "tool/all/index.html",
    "revision": "e108290a4b69c27290eb93920c234e7c"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "5f22241ba164da393364f74968101fef"
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
