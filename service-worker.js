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
    "revision": "447c864fb4861f702dd81c1cf42f261d"
  },
  {
    "url": "assets/css/0.styles.cec8b941.css",
    "revision": "8a4e3183c3e0443c2aa004166fc2c7f9"
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
    "url": "assets/img/yanhua.d5507315.jpg",
    "revision": "d5507315681a654c8f1f5f00daf87783"
  },
  {
    "url": "assets/js/10.edfd794b.js",
    "revision": "505173527faca656c5ffe172289b505b"
  },
  {
    "url": "assets/js/11.909ee5f0.js",
    "revision": "42bb38b6998c276e6a8643fb962d7544"
  },
  {
    "url": "assets/js/12.759dd3a7.js",
    "revision": "5fa09c7800e806ebcef51f910842a7e7"
  },
  {
    "url": "assets/js/13.dbce8a1e.js",
    "revision": "6a914bc72fb23fb51fc1d5a989a21d2a"
  },
  {
    "url": "assets/js/14.f1c2e705.js",
    "revision": "487c3ab7eb425a0ce664564734e72ba8"
  },
  {
    "url": "assets/js/15.70cc8f2b.js",
    "revision": "327383cb0993082e4658f301bb475a19"
  },
  {
    "url": "assets/js/16.30bc34fa.js",
    "revision": "68696f15d7265c6b94a5453e1168cf1f"
  },
  {
    "url": "assets/js/17.575fb299.js",
    "revision": "2e00dce94dedf2ca2cc9281ea4f3d31c"
  },
  {
    "url": "assets/js/18.4dfd5c36.js",
    "revision": "0dd1a1e1f160e437ce8ff00d9ab8fd96"
  },
  {
    "url": "assets/js/19.eb96f432.js",
    "revision": "ed6f87aa4309ff8a36987d88b8058f3f"
  },
  {
    "url": "assets/js/2.398c7ca7.js",
    "revision": "d336f3f24692532aac43959378b68d37"
  },
  {
    "url": "assets/js/20.d047d96a.js",
    "revision": "8a2268166e1c0ac82dd84563fefd9bd1"
  },
  {
    "url": "assets/js/21.37ee0e36.js",
    "revision": "22550015cba233e2b55f93ad919708b5"
  },
  {
    "url": "assets/js/22.171241d2.js",
    "revision": "1676737e9553ee246cb772ee1a751855"
  },
  {
    "url": "assets/js/23.484483c6.js",
    "revision": "a84ec70565478f2e58fe79a38a31a4a8"
  },
  {
    "url": "assets/js/24.92be6a3f.js",
    "revision": "713a1edcc82f6029f01b4630900974ae"
  },
  {
    "url": "assets/js/25.fd161bd5.js",
    "revision": "e988f705aebbe224d339c6217075daad"
  },
  {
    "url": "assets/js/26.94f9149e.js",
    "revision": "21022f318dd3da75ad02c5d91edf0b10"
  },
  {
    "url": "assets/js/27.d2abf0d8.js",
    "revision": "ef6408c62099ef06cc2e837a6039521e"
  },
  {
    "url": "assets/js/28.ab7591da.js",
    "revision": "af70f361da63147669eb38e5139915c4"
  },
  {
    "url": "assets/js/29.d6c5d609.js",
    "revision": "ab3f573dba8355111be6135093066550"
  },
  {
    "url": "assets/js/3.d62f0a65.js",
    "revision": "28ead8af6d88262ad112ceb575d561a1"
  },
  {
    "url": "assets/js/30.7dc8e940.js",
    "revision": "e578f3a2c6a90d93a4021431df99d157"
  },
  {
    "url": "assets/js/31.88de6f78.js",
    "revision": "2e27824cf74a71ca9cb0d1b9e008b2d1"
  },
  {
    "url": "assets/js/32.e5539ba1.js",
    "revision": "ebdb7d28aabcbae09a571f237a08bd0a"
  },
  {
    "url": "assets/js/33.3759b261.js",
    "revision": "fc5353cfa11e0726b7eb913a189edf47"
  },
  {
    "url": "assets/js/34.8b7e7188.js",
    "revision": "21baee7671e224b37aa70472e2b01aa0"
  },
  {
    "url": "assets/js/35.7772b5ff.js",
    "revision": "9c819cc37292c0a29ee0a1bfb5186f06"
  },
  {
    "url": "assets/js/36.cb3953a9.js",
    "revision": "9e1dcda07424c44f55aa2cfe86de9aca"
  },
  {
    "url": "assets/js/37.8d3683cf.js",
    "revision": "30ba834aebdf9b0d128e80f927ca7075"
  },
  {
    "url": "assets/js/38.acae4ba9.js",
    "revision": "784a0d101c656c9c361bd4c1be7c2076"
  },
  {
    "url": "assets/js/39.68e35543.js",
    "revision": "3e383bfa01d2ddce2ec11aaf09530e6a"
  },
  {
    "url": "assets/js/4.897a2e3e.js",
    "revision": "03af7f7a0cbde2bf009c2aef292f8b5f"
  },
  {
    "url": "assets/js/40.1b5ca5b5.js",
    "revision": "7327e481f0e364bf69901919cb06b9fa"
  },
  {
    "url": "assets/js/41.16229199.js",
    "revision": "2d12074379f1c917899cc6a250c6cbc0"
  },
  {
    "url": "assets/js/42.177e020f.js",
    "revision": "b41b274a8ae481c243120e866b414cbb"
  },
  {
    "url": "assets/js/43.d08616e9.js",
    "revision": "959279744d45d88e8981957ca34d2fcf"
  },
  {
    "url": "assets/js/44.587dd81c.js",
    "revision": "a3a9706856789ffd15e5f2b33fe22d7d"
  },
  {
    "url": "assets/js/45.1912fc2d.js",
    "revision": "70c7b80d793fe452e45680f81f01cf2b"
  },
  {
    "url": "assets/js/46.0afa4d83.js",
    "revision": "ba28c9739317aa92470f91ac13c8a3e5"
  },
  {
    "url": "assets/js/47.71c4a203.js",
    "revision": "1f96d60239644d146d4e37c068639474"
  },
  {
    "url": "assets/js/48.57572248.js",
    "revision": "7176847dd7974d5541daf597c1e65c9c"
  },
  {
    "url": "assets/js/49.e6d57f05.js",
    "revision": "20aecd72632b754fd6972852eb472d01"
  },
  {
    "url": "assets/js/5.fe35351a.js",
    "revision": "d7da2d7052da7f87630a4c8291eb39db"
  },
  {
    "url": "assets/js/6.5d9e78b3.js",
    "revision": "2a48651ce25bed603422452547d8d62f"
  },
  {
    "url": "assets/js/7.4868af03.js",
    "revision": "a478db1446909839d25b8875b7e1f6e9"
  },
  {
    "url": "assets/js/8.044fc728.js",
    "revision": "71e5eddb81a23f63716c9168019b50af"
  },
  {
    "url": "assets/js/9.34ab27de.js",
    "revision": "ea3fdcc3ce9c14bf7b5500ed8173e3c8"
  },
  {
    "url": "assets/js/app.e8dc7465.js",
    "revision": "477d0610aab35c8cadf54f1ecf1a40bc"
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
    "revision": "f9eb85416c93fcd1a713bb0cd46564bb"
  },
  {
    "url": "game/chesscard/index.html",
    "revision": "a7712a9b78c55793e063f3c8f59601c9"
  },
  {
    "url": "game/risk/index.html",
    "revision": "e156d1c44fc9a292df8a38581c1f7544"
  },
  {
    "url": "game/shoot/index.html",
    "revision": "060f1fa6f5badf5f517f6c2fb03dd62b"
  },
  {
    "url": "game/smart/index.html",
    "revision": "205e1edd1e9013ba5800a7d654c23ff5"
  },
  {
    "url": "game/synthesize/index.html",
    "revision": "fdfdf17d52173c924956994decb62524"
  },
  {
    "url": "github/android/all/index.html",
    "revision": "6572264d22f6446f2ea9d5b8462e2689"
  },
  {
    "url": "github/android/animation/index.html",
    "revision": "64bfd94213bb70f3ef5e0a5a0086f717"
  },
  {
    "url": "github/android/architecture/index.html",
    "revision": "b24bd6ede99159bd4bf243478fd9c5e2"
  },
  {
    "url": "github/android/component/index.html",
    "revision": "57405e33c40cf302c6e0a8af2f689419"
  },
  {
    "url": "github/android/project/index.html",
    "revision": "dce073f29cbbb8c43e56abb8413a897f"
  },
  {
    "url": "github/android/synthesize/index.html",
    "revision": "e4c7694c78ce4de0fd1d331435eef643"
  },
  {
    "url": "github/android/view/index.html",
    "revision": "a2f139ca1abce5d63fadb75630b76462"
  },
  {
    "url": "github/flutter/all/index.html",
    "revision": "214f8f8259f400c332c7fae1f216320c"
  },
  {
    "url": "github/flutter/project/index.html",
    "revision": "e90344bd36361f4315eca42fa29d1763"
  },
  {
    "url": "github/h5/all/index.html",
    "revision": "92f12dab9a000939b5f28a805e050b8e"
  },
  {
    "url": "github/h5/h5/index.html",
    "revision": "0312abd885a133115755db80ef387b34"
  },
  {
    "url": "github/h5/hexo/index.html",
    "revision": "85980afb9ecb8b678e9f540fe635159e"
  },
  {
    "url": "github/h5/jekyll/index.html",
    "revision": "2e5815aeb9b122a4c925d11454e357e7"
  },
  {
    "url": "github/h5/php/index.html",
    "revision": "f87e3dc4dabda52ca745abfeeaee0662"
  },
  {
    "url": "github/ios/all/index.html",
    "revision": "708d6b2223146be16b6b387ac48c365c"
  },
  {
    "url": "github/ios/project/index.html",
    "revision": "a087ecb16b5b1b33c58b692eb9604ee9"
  },
  {
    "url": "github/ios/synthesize/index.html",
    "revision": "0acb0d534b4462e1f2ccd35ac60d8a68"
  },
  {
    "url": "github/reactnative/all/index.html",
    "revision": "84b6b9280d189cfd14d6025d1baef65c"
  },
  {
    "url": "github/reactnative/project/index.html",
    "revision": "46999b3ad4e5c5ef72143faa0c6feb0b"
  },
  {
    "url": "github/reactnative/synthesize/index.html",
    "revision": "f6dca589f259575c4eb2aebd81f30dd6"
  },
  {
    "url": "github/vue/all/index.html",
    "revision": "143cb1d517730e52f63ea8c5b6db2538"
  },
  {
    "url": "github/vue/project/index.html",
    "revision": "1f3a426bd945f05353aa236c1d712b8e"
  },
  {
    "url": "github/vue/synthesize/index.html",
    "revision": "e27d165e520a71effd17cdefd8d123fc"
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
    "url": "img/yanhua.jpg",
    "revision": "d5507315681a654c8f1f5f00daf87783"
  },
  {
    "url": "index.html",
    "revision": "53d23b7fa7b4bf23ca1d19a862c68c4a"
  },
  {
    "url": "join/index.html",
    "revision": "1f3b0ba99d34fdc0a05c4daccf147f51"
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
    "revision": "8ece01117b16685fe85af0346d452038"
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
    "url": "js/yanhua.js",
    "revision": "fdd80010fb22905b481693978455de20"
  },
  {
    "url": "logo.png",
    "revision": "458dfa103a0b6fae859da5869f0f525b"
  },
  {
    "url": "message/index.html",
    "revision": "5bfb6711c746a65eb472f91804feadfa"
  },
  {
    "url": "nixiang/article/index.html",
    "revision": "242497dd7a531c5f99ebfdb27090cc78"
  },
  {
    "url": "nixiang/tool/index.html",
    "revision": "ec26b7eead3ab58f50506afd67fbced5"
  },
  {
    "url": "search/index.html",
    "revision": "a1ab0403f5fae617c7ef5ca55495975e"
  },
  {
    "url": "tool/all/index.html",
    "revision": "984458a7121e45c6bb3c3f0b4c6dff2f"
  },
  {
    "url": "tool/imgoperate/index.html",
    "revision": "314eade7ba41743432ee2a2d0bd8c20c"
  },
  {
    "url": "tool/synthesize/index.html",
    "revision": "039c5d45b10b86097ec1d251a3fb22a9"
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
