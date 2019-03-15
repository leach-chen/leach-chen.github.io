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
    "revision": "d5cdd7b2d5d1c6b5af5ba2f886d16232"
  },
  {
    "url": "assets/css/0.styles.39cd46d5.css",
    "revision": "98709858c2986217154c6738bebc11dd"
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
    "url": "assets/js/10.2503d9bf.js",
    "revision": "66b66b121189323bcd425ba93376e0c7"
  },
  {
    "url": "assets/js/11.74e661ee.js",
    "revision": "4161be2102186e02a9c583ae5b793eb2"
  },
  {
    "url": "assets/js/12.3452d8e8.js",
    "revision": "45992d2b753aada6f6f6826aea23fa94"
  },
  {
    "url": "assets/js/13.9a601c42.js",
    "revision": "cbc34d0b778552b0b4f995549c1db618"
  },
  {
    "url": "assets/js/14.c6e56748.js",
    "revision": "fb9894b6a4437b38e10a5a831d82d1d8"
  },
  {
    "url": "assets/js/15.6abeeed2.js",
    "revision": "59bbce8095d9495a220df80461acec42"
  },
  {
    "url": "assets/js/16.55ede861.js",
    "revision": "87d06099a5079e5118d6a25f99bc1243"
  },
  {
    "url": "assets/js/17.50dd340d.js",
    "revision": "7bd6d218899015306ceaf29ab9939381"
  },
  {
    "url": "assets/js/18.44296e71.js",
    "revision": "229b972827cffc512e191edc3253aa44"
  },
  {
    "url": "assets/js/19.86a9a5e5.js",
    "revision": "5f18b9eccb45772b7dcd99d3ba7d66c1"
  },
  {
    "url": "assets/js/2.8c3a2ea1.js",
    "revision": "8f79d5bd7911fb1977bc7df18b22c03f"
  },
  {
    "url": "assets/js/20.9de3db4e.js",
    "revision": "c8e658eda112e4896432b7d48fe76443"
  },
  {
    "url": "assets/js/21.fd6537d1.js",
    "revision": "de2e134e22f5636093f08c30068203df"
  },
  {
    "url": "assets/js/22.31782185.js",
    "revision": "b6ee64f66eeb660dc61a5d73964cfe81"
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
    "url": "assets/js/28.0385287c.js",
    "revision": "ba19306f4bd7165188c0cdaa7103efa8"
  },
  {
    "url": "assets/js/29.ac5fab3f.js",
    "revision": "2dc6dcd376af82083313d06113e85e06"
  },
  {
    "url": "assets/js/3.8c117675.js",
    "revision": "0817acc38a104367d9171a676e24735f"
  },
  {
    "url": "assets/js/30.0c2fe720.js",
    "revision": "c237a8b464c24b67a3678e9e53f91b7e"
  },
  {
    "url": "assets/js/31.e82665e5.js",
    "revision": "7dbfcee0a6b7f585d3c677ef36463f78"
  },
  {
    "url": "assets/js/32.ec4cc178.js",
    "revision": "44b78a579da78589453c74863ca3205c"
  },
  {
    "url": "assets/js/33.11dc1a14.js",
    "revision": "33255930c512984e50596a78081808be"
  },
  {
    "url": "assets/js/34.4d84691d.js",
    "revision": "5717ab2797869c71cf696db5f6c9b9d9"
  },
  {
    "url": "assets/js/35.36e485ee.js",
    "revision": "85718a6c61e8186704bff1878f18caf5"
  },
  {
    "url": "assets/js/4.cab7480e.js",
    "revision": "52d25d4f9c5cf340692887eeeaf0fd06"
  },
  {
    "url": "assets/js/5.85c091da.js",
    "revision": "0189de8309baad878338667f44eea0ca"
  },
  {
    "url": "assets/js/6.1c73b0dd.js",
    "revision": "09408de6c52fb71acbb5393eb536be9e"
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
    "url": "assets/js/app.dee64073.js",
    "revision": "b0973ccfc4f28a43ab944faba6757f56"
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
    "revision": "2fa0d83bd39d24ec266bab84ac76ef46"
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
    "revision": "eb085c3f579c495e7c07d55604147026"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "9eafe625cc6cb9f64cffeab4ddfe1989"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "2d61c9899f3fb2752f0252684664a10b"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "a016ffdb4635d49b247768699d4c26ee"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "6aff16340a03fbd894b41f600710e98a"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "82338abe761323e1653bbafcb2299cf8"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "c368e1b77536376cbfb7be40933948ca"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "f83eb94175afaa9597320f20056ab1b3"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "8b707153047c393ce1a727014820fb7b"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "2de7ebf5cc3119e4684e7d0130689243"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "6f10261fd884040366e5ad5e20e055a2"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "e7e9c7d5a176f3af5b9404f6e187eb91"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "a2df9c7420384f943ccf38fe5203329f"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "047c7f2c244c5e7be877dcabf92e9c82"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "05ce43a4a8b58a9bd062b3f9bcb25617"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "50912271ae177ea81bfb89a0ca6dc95e"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "1ff0127478df70334b762f9f8783f396"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "aacc5e24407055c900dae8db4115cb2b"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "92b8e8ff3551f881c1b610966a2d8272"
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
    "url": "index.html",
    "revision": "efd1792afc24aade20124f6766be42a4"
  },
  {
    "url": "join/index.html",
    "revision": "aad12e2a0d0b938084c7e8273b74c932"
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
    "revision": "40fd7e9234606a341adcbb1ce0a15d51"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "da1800758732f0c32550abbec90a3fce"
  },
  {
    "url": "search/index.html",
    "revision": "5e2e1b044c10d36759c2b844fd6f948f"
  },
  {
    "url": "tool/all/index.html",
    "revision": "4bbd95ddd6c5d4c42b68b198c7c68993"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "57482f63a7f15987ac84de128f85631e"
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
