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
    "revision": "06105998eca83245dc7b810a24721537"
  },
  {
    "url": "assets/css/0.styles.d62380e1.css",
    "revision": "3181853282ed971233cab14a13015e97"
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
    "url": "assets/js/10.7b592c9b.js",
    "revision": "34a6687c4531d56ad40029d2e61300e5"
  },
  {
    "url": "assets/js/11.e9ff9421.js",
    "revision": "9cf385c92e3dce008b0ce93352766212"
  },
  {
    "url": "assets/js/12.3452d8e8.js",
    "revision": "45992d2b753aada6f6f6826aea23fa94"
  },
  {
    "url": "assets/js/13.482e92c5.js",
    "revision": "64b06db3e056b17e620c1e800cdabf18"
  },
  {
    "url": "assets/js/14.8decdb3b.js",
    "revision": "6a3f6336c207311659b2966df8ee5824"
  },
  {
    "url": "assets/js/15.cc088ce3.js",
    "revision": "5bc130fcf604d81ef5d52d4d46244682"
  },
  {
    "url": "assets/js/16.28cd63ee.js",
    "revision": "40f8bc635b115282c4b3140e78cfd3ca"
  },
  {
    "url": "assets/js/17.613b0623.js",
    "revision": "681a4e5a3b729a9a4310176620a73335"
  },
  {
    "url": "assets/js/18.edf1ee41.js",
    "revision": "ad893205156083c0407f1ac212bd40e7"
  },
  {
    "url": "assets/js/19.e75a5309.js",
    "revision": "7191615c4973db23332b9e29d4bddee0"
  },
  {
    "url": "assets/js/2.7cf1fb52.js",
    "revision": "aeb0f0a5e6ef2704594e5aa0c07ef9f8"
  },
  {
    "url": "assets/js/20.01e65d49.js",
    "revision": "6a713edaa1cbbeefdc3368e4c57000c0"
  },
  {
    "url": "assets/js/21.15472611.js",
    "revision": "d6cc04d305cb8990577ecf36ff64ef71"
  },
  {
    "url": "assets/js/22.cbbda25e.js",
    "revision": "0f70db475d594fe2f579d2535c7e69c1"
  },
  {
    "url": "assets/js/23.fcf33245.js",
    "revision": "90a58454dd51183333d866181d1fc6bb"
  },
  {
    "url": "assets/js/24.bd0b8295.js",
    "revision": "3ebd00a5395b4cba3678c233e1a6ef81"
  },
  {
    "url": "assets/js/25.51997ed5.js",
    "revision": "8080783679d6d7fc0f4b1312646c8e18"
  },
  {
    "url": "assets/js/26.69016bb2.js",
    "revision": "1d43f825ee39c2bbed5cb3ab32c263f4"
  },
  {
    "url": "assets/js/27.d4f38621.js",
    "revision": "63b055c0405c065547d64ea431ae3807"
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
    "url": "assets/js/3.88f21666.js",
    "revision": "7758c746f52a7705303e5a1373633dfb"
  },
  {
    "url": "assets/js/30.4ff4a38e.js",
    "revision": "1db732a50e75ac65fd131842bc60566d"
  },
  {
    "url": "assets/js/31.92856086.js",
    "revision": "cf543a56f00c3b4b6cf2c87d089fac66"
  },
  {
    "url": "assets/js/32.8aaa5e7b.js",
    "revision": "bbb83c847cdfdb8b64b9c9b3207128ee"
  },
  {
    "url": "assets/js/33.2e0c447b.js",
    "revision": "ae9d955fab5b46937af35fbaaf54d569"
  },
  {
    "url": "assets/js/34.27343dfa.js",
    "revision": "5a40c42ffac235cea5e33efd9a01090c"
  },
  {
    "url": "assets/js/35.36e485ee.js",
    "revision": "85718a6c61e8186704bff1878f18caf5"
  },
  {
    "url": "assets/js/4.081e40c6.js",
    "revision": "2f6f9a28c74ae97a74ea8353732ddd60"
  },
  {
    "url": "assets/js/5.e520199f.js",
    "revision": "cc0dd0287b48685b4a21fb05c24ac5e9"
  },
  {
    "url": "assets/js/6.90e232d0.js",
    "revision": "d393593c5f6cc11a4be297b3992fcd8a"
  },
  {
    "url": "assets/js/7.ca2ccf46.js",
    "revision": "801e20a960e3f55f94dfe6fe617d1e0b"
  },
  {
    "url": "assets/js/8.7f2c36d8.js",
    "revision": "9d5836b523c6f3c2fe38439e0f37f8fc"
  },
  {
    "url": "assets/js/9.d769c60e.js",
    "revision": "9d3b0d3d8ff78b95b8f30954450f736d"
  },
  {
    "url": "assets/js/app.707582e1.js",
    "revision": "93e6c2950d0d7f185e545e78f9d0e69d"
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
    "revision": "e1a4107c20caa488d7b8ec7e34b8c1d7"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "93af30de945330789c9ca2c2ec65435d"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "12ae87607375c066a110644ad7bcb3cd"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "9930a8417a0128347706bf22834ab3cf"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "5a2b840d0cc8a954015ca5c9268a920c"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "d550a1a5f24b2e678e88c7e85ba82e80"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "1a1467393ac5a3e419a9cd6a2f8b770a"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "e7a200cf94f6c921f43c866917f95bf0"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "03c82bec76b758caa381f213a87580cf"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "7755c359731bfeceeb3ede835f147793"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "7e14149bff171fda8016002acff501ba"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "360eaa99be897afd26240ac791fd31cc"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "133d18f5e090055ab25d7c33dfe44cd7"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "dec970a5a141e2e9c0e596788ed847ca"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "7f24e8a6e3ad6031272188422e5b07d3"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "4b8af7b3468649f24fce68e3ce04b852"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "8078adfe2bec7a53ed63953b9b0d493a"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "556c168a720126c5500746ee976e39ec"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "17843b8d18528c85ff88423e99054457"
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
    "revision": "1550278fc2d46129583bb39ff2fbfaa8"
  },
  {
    "url": "join/index.html",
    "revision": "d8f3628c66351483ba68a94f7dad2ce3"
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
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "8bf943e0115b4704ac3193a686309df5"
  },
  {
    "url": "search/index.html",
    "revision": "5204ece461625322b70a3c5effc8d1f8"
  },
  {
    "url": "tool/all/index.html",
    "revision": "f0d17615a0550a3e32a0f5b4ae63166f"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "b08f1b964ea9dee1b3dcbb082ceca799"
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
