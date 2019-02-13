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
    "revision": "7fc9b718fc98c46ab6f229e74f480b26"
  },
  {
    "url": "about/index.html",
    "revision": "06ed8cc128aa30d86bbb1f9479f159a6"
  },
  {
    "url": "android/android1.html",
    "revision": "c7ebfd8025455856b7cda7cd64fb2e45"
  },
  {
    "url": "android/android10.html",
    "revision": "7284a53064aafed17443dc5494e7fe45"
  },
  {
    "url": "android/android11.html",
    "revision": "b5f2ff3f304bdb79bf4b7b333af464bd"
  },
  {
    "url": "android/android12.html",
    "revision": "7ecb6acb8b54c8cda1e485e4d439202d"
  },
  {
    "url": "android/android13.html",
    "revision": "c741409c86389d122e225d0d0e3ce31f"
  },
  {
    "url": "android/android15.html",
    "revision": "26a4465c0c0ef120ee4298cd8fc7f919"
  },
  {
    "url": "android/android16.html",
    "revision": "15cf0250d7e1c794d83b705196de4907"
  },
  {
    "url": "android/android17.html",
    "revision": "8ca554fa261f5786992da19777ebd79b"
  },
  {
    "url": "android/android18.html",
    "revision": "e39e9a1b14685576258a4a2c702db51a"
  },
  {
    "url": "android/android19.html",
    "revision": "ed657719cf76dd72a26fbfd3a95e101e"
  },
  {
    "url": "android/android2.html",
    "revision": "3838a909b114c06e0dc8315fc04dbf3d"
  },
  {
    "url": "android/android20.html",
    "revision": "38faddd37038a5036185bc5b6a12e70c"
  },
  {
    "url": "android/android21.html",
    "revision": "1a5fa1efaba484dee16088bcc5e2d432"
  },
  {
    "url": "android/android22.html",
    "revision": "46ccf7f24380e6c1a1cb51f6142d939f"
  },
  {
    "url": "android/android25.html",
    "revision": "e48f3cf96d8bad2c2a912e26c07764b0"
  },
  {
    "url": "android/android26.html",
    "revision": "550b257d6cb70b777f6f1901751f8d1b"
  },
  {
    "url": "android/android27.html",
    "revision": "92d95d6daf259ec50056e74074d7aeaa"
  },
  {
    "url": "android/android28.html",
    "revision": "3477f1c54ebcd7d95b1abafbcbb1d4ba"
  },
  {
    "url": "android/android29.html",
    "revision": "219ecb4c7479998b75cbf2d9ad587c87"
  },
  {
    "url": "android/android3.html",
    "revision": "8cd37edddc1551f7944ddb6d7c4a0467"
  },
  {
    "url": "android/android30.html",
    "revision": "6449b7617b71fd33628e73a04f68d9d3"
  },
  {
    "url": "android/android31.html",
    "revision": "0d4fbf46633d8d37f6a1eea3cbde5ad0"
  },
  {
    "url": "android/android32.html",
    "revision": "ed1910426477e7e56de50ba9375df3f4"
  },
  {
    "url": "android/android33.html",
    "revision": "8eea184e20200ef7d1428facb942882a"
  },
  {
    "url": "android/android34.html",
    "revision": "6ebbad33d3f12050596fa00db2808898"
  },
  {
    "url": "android/android35.html",
    "revision": "db58b39f3d93ecb41ca827323861bfcd"
  },
  {
    "url": "android/android36.html",
    "revision": "d172c4db0a930641cb7a660ec9157ac2"
  },
  {
    "url": "android/android37.html",
    "revision": "5fba13c5d1462f2ad7f7519c3db29ccc"
  },
  {
    "url": "android/android38.html",
    "revision": "18c0a28ad78befd207978bf6f62ecbfe"
  },
  {
    "url": "android/android39.html",
    "revision": "55114ec2db781fe1ca30433b02d12696"
  },
  {
    "url": "android/android4.html",
    "revision": "5d9ba69bd8383aaefd1f9598c880f4cf"
  },
  {
    "url": "android/android40.html",
    "revision": "17aaf0667e1495fde0d56f53b9e8f6cb"
  },
  {
    "url": "android/android41.html",
    "revision": "d0780e292b624e34a6e30266ee37a2bc"
  },
  {
    "url": "android/android42.html",
    "revision": "fb36b87f159d4f305ba5a17db565006f"
  },
  {
    "url": "android/android43.html",
    "revision": "ac7bc61f4ae0dc277548a8d3c024501d"
  },
  {
    "url": "android/android44.html",
    "revision": "4c32b0cc877433a2209ce370950be49e"
  },
  {
    "url": "android/android45.html",
    "revision": "2331ad8650ab0535bf3de15027446037"
  },
  {
    "url": "android/android46.html",
    "revision": "0d70648895c966d17e8c918bbf2977ca"
  },
  {
    "url": "android/android47.html",
    "revision": "f231f154075ffc623a0d3866b33aeec2"
  },
  {
    "url": "android/android48.html",
    "revision": "834a2a149665a8a0862fba824257fbc4"
  },
  {
    "url": "android/android49.html",
    "revision": "360279e0f7355fdbce09e5e4aa39b9b0"
  },
  {
    "url": "android/android5.html",
    "revision": "704bacf94d87897adf81fccb03d6ceb0"
  },
  {
    "url": "android/android50.html",
    "revision": "ed65c32e3b99927a8c3e27883c50e1f1"
  },
  {
    "url": "android/android6.html",
    "revision": "63eab38de877ee9a28886f5912a78efb"
  },
  {
    "url": "android/android7.html",
    "revision": "ce31d18a7544e23b9567ca73781d369e"
  },
  {
    "url": "android/android8.html",
    "revision": "2cc00ce2565bdd6014e7f854e40d0bd0"
  },
  {
    "url": "android/android9.html",
    "revision": "ffa2787ffde3cfe2258ba7a61ab91a1d"
  },
  {
    "url": "android/index.html",
    "revision": "8ea5564572aa93f54f891bd784b652fb"
  },
  {
    "url": "artificial/index.html",
    "revision": "6841f9f42c7a603dc1b1acb491a75e7f"
  },
  {
    "url": "artificial/tensorflow1.html",
    "revision": "e18970faac1099e48fbc988f8aab13c0"
  },
  {
    "url": "artificial/tensorflow2.html",
    "revision": "4cf3d739dec005ffd0e6e19adf49c03d"
  },
  {
    "url": "artificial/tensorflow3.html",
    "revision": "aa6b5f48bb8963eec367b1144f70bf98"
  },
  {
    "url": "assets/css/0.styles.52e0878b.css",
    "revision": "56daf6c292207a7d0a87ed0ec43fbe00"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/contact-bg.90b89018.jpg",
    "revision": "90b89018c57623f25ff271dda0b322e8"
  },
  {
    "url": "assets/img/logo.f4a829f5.png",
    "revision": "f4a829f5dc3386effe048eae5d969558"
  },
  {
    "url": "assets/img/planet.26beb6d8.png",
    "revision": "26beb6d842c8846f4e0efceffc1b5333"
  },
  {
    "url": "assets/img/public.b14aac6b.jpg",
    "revision": "b14aac6b007a2a10eb04fac24db5ecd5"
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
    "url": "assets/js/10.a7897d03.js",
    "revision": "78d1f98b15b737a1a0dbc3b9091e12b5"
  },
  {
    "url": "assets/js/11.e94820a6.js",
    "revision": "1d87de19c06c7eb1e6441d79c45e53ff"
  },
  {
    "url": "assets/js/12.f597dc89.js",
    "revision": "8ec37e70f793ca1d654c5a9fd09b249b"
  },
  {
    "url": "assets/js/13.a4743c29.js",
    "revision": "ea8d8d35f8d3b69c0cf8f57e8e5a9982"
  },
  {
    "url": "assets/js/14.a396d039.js",
    "revision": "2bbcbbd3dc6fb75db80870db85f51dd7"
  },
  {
    "url": "assets/js/15.c62519e3.js",
    "revision": "1441ce53f363aeec5d0e95e49761e762"
  },
  {
    "url": "assets/js/16.38c031f4.js",
    "revision": "0d6a3076f67b5fe18986cc1085055eab"
  },
  {
    "url": "assets/js/17.a9d50609.js",
    "revision": "bcfed14f3c7121ba6e7429a6a2eb0be3"
  },
  {
    "url": "assets/js/18.196e544f.js",
    "revision": "1b91d8d9ba6feb9a06bcc0b51bad0a80"
  },
  {
    "url": "assets/js/19.f2c26eae.js",
    "revision": "9ea5162d56aa30389959c46e5134f6ef"
  },
  {
    "url": "assets/js/2.29c28724.js",
    "revision": "1aca3ab8c1b5f9338a5b734006638f80"
  },
  {
    "url": "assets/js/20.a950d96d.js",
    "revision": "b0f58b3937be3f74353a53e855ca05f9"
  },
  {
    "url": "assets/js/21.2538e3ea.js",
    "revision": "3bf0d36e6fbb95fe2b82d97e408b1af3"
  },
  {
    "url": "assets/js/22.1fc70280.js",
    "revision": "1b2d50c5229dae3d237b228301f69fd7"
  },
  {
    "url": "assets/js/23.e98db1df.js",
    "revision": "ef85b9a0f2fe898aea19bf9d1fc3a740"
  },
  {
    "url": "assets/js/24.4161f596.js",
    "revision": "0e6957149e86e484d739b5377dc0f63f"
  },
  {
    "url": "assets/js/25.617b73da.js",
    "revision": "a13bc728de5858a1be0040acfa4f9185"
  },
  {
    "url": "assets/js/26.1e1a058e.js",
    "revision": "145805c650395abd434ff25d7b457a97"
  },
  {
    "url": "assets/js/27.1812940c.js",
    "revision": "91fa9b8f0c62ab8b2117a86f89ac8fa6"
  },
  {
    "url": "assets/js/28.3759b37e.js",
    "revision": "ab6a00bc6f3cb512ff0aa835e7080301"
  },
  {
    "url": "assets/js/29.0ddc2475.js",
    "revision": "b5f063195b7c5f21caaa91219c40b2d8"
  },
  {
    "url": "assets/js/3.8f22df73.js",
    "revision": "ff2a533045adc016609d3aa5d090f6ce"
  },
  {
    "url": "assets/js/30.c5ba2042.js",
    "revision": "8e9b2235efb7aef4a36a3bca51ba3f1c"
  },
  {
    "url": "assets/js/31.b6934313.js",
    "revision": "5c03b6371dc3ee598ac4c3473a94880e"
  },
  {
    "url": "assets/js/32.b874975a.js",
    "revision": "b49d1dd701de71234bcd5cc3a17be8bb"
  },
  {
    "url": "assets/js/33.cf2c3a92.js",
    "revision": "d803c146504e5f9dd008d30f4c7d8647"
  },
  {
    "url": "assets/js/34.66ee74dc.js",
    "revision": "56fbbf6aa1d0beae212d493b9748b09b"
  },
  {
    "url": "assets/js/35.3b514791.js",
    "revision": "28d77b873ed9fe3b34e2f640c616c76e"
  },
  {
    "url": "assets/js/36.d5f00059.js",
    "revision": "438c1c103843b519c2a7deb3a8064d28"
  },
  {
    "url": "assets/js/37.d056c131.js",
    "revision": "508b5733534f9c583fba06cce9aba9c3"
  },
  {
    "url": "assets/js/38.20f79e96.js",
    "revision": "9fde00b9d007113a1cf97772c895cdd4"
  },
  {
    "url": "assets/js/39.5cf1caf2.js",
    "revision": "5d840f46045ce91c89fb5c6270005b54"
  },
  {
    "url": "assets/js/4.0a1168bd.js",
    "revision": "9b673837dcf1f10d2fb03dc1b0fee7e5"
  },
  {
    "url": "assets/js/40.b9ffe895.js",
    "revision": "10e5ef33b9b7b2ba1116b4df3b3e9707"
  },
  {
    "url": "assets/js/41.78ab46ac.js",
    "revision": "c16bb127abc4b0301e8c840164d204d1"
  },
  {
    "url": "assets/js/42.8e78aecf.js",
    "revision": "0c4a2aff389196ca959eec1febcd103b"
  },
  {
    "url": "assets/js/43.fc2f2587.js",
    "revision": "cb1ad43091365b038c4ebc4281b10cbe"
  },
  {
    "url": "assets/js/44.b1607f7c.js",
    "revision": "1cba5748a5c1cdb31620dfd5c9ba20c6"
  },
  {
    "url": "assets/js/45.541d46ba.js",
    "revision": "270f8e7cf6abb76642edf895d0b89134"
  },
  {
    "url": "assets/js/46.3d859b54.js",
    "revision": "8f8add4945e86888dfc3204e57e26935"
  },
  {
    "url": "assets/js/47.be4b4c6f.js",
    "revision": "e4d243aba4bf60acadb5efbd2459c0b4"
  },
  {
    "url": "assets/js/48.16e421f1.js",
    "revision": "6edc4c2c0af90f235235bd0e6870dbc9"
  },
  {
    "url": "assets/js/49.19d698db.js",
    "revision": "891aa3054e3f524fbd5b71bdf71e0bea"
  },
  {
    "url": "assets/js/5.52c3f0e6.js",
    "revision": "3a9b81840a0724c0b9ae0764a591f1cf"
  },
  {
    "url": "assets/js/50.e47fbafd.js",
    "revision": "5c73696ea3c8082de20571e6ee402db9"
  },
  {
    "url": "assets/js/51.7d066c6b.js",
    "revision": "3c9780dd2efecc5ee045cbc997580db9"
  },
  {
    "url": "assets/js/52.b317e309.js",
    "revision": "5252c6602f1e1770cebf36327bfef590"
  },
  {
    "url": "assets/js/53.787d9a0d.js",
    "revision": "117d614381d0a528f99714145205218a"
  },
  {
    "url": "assets/js/54.505535d4.js",
    "revision": "58deac543f1affb257ae035608ec1f5e"
  },
  {
    "url": "assets/js/55.d12b4ff6.js",
    "revision": "2a27341e9d5057e31c4fdfeaf44f0ed3"
  },
  {
    "url": "assets/js/56.6810a81d.js",
    "revision": "555c9f6e41fa0a11cea9e0fa11c6671d"
  },
  {
    "url": "assets/js/57.6cc28f87.js",
    "revision": "efcea47cdc0332de5d2aee7b018b8923"
  },
  {
    "url": "assets/js/58.f32ae4e3.js",
    "revision": "7f5ad7c537af952d6997e5aedab8738f"
  },
  {
    "url": "assets/js/59.1955a2ae.js",
    "revision": "7479ea5a8d4b9aca0ad06e6c2323dfd4"
  },
  {
    "url": "assets/js/6.58509a1f.js",
    "revision": "4e79fcf76c5ab1d502418a2cd1e57a80"
  },
  {
    "url": "assets/js/60.1e496a44.js",
    "revision": "e4a240aaee4c450d4f4df9724000ce00"
  },
  {
    "url": "assets/js/61.eef3a2bf.js",
    "revision": "02873054137020b8f5ee651d38bbbe78"
  },
  {
    "url": "assets/js/62.5f118134.js",
    "revision": "be8724ce261571490b339be4b325a35b"
  },
  {
    "url": "assets/js/63.24ac0f2a.js",
    "revision": "3b58fc088d8994b48adf3eaa3cff00d7"
  },
  {
    "url": "assets/js/64.5ccb0d54.js",
    "revision": "307ffea936ccda82f392d69f477a3602"
  },
  {
    "url": "assets/js/65.cfab7485.js",
    "revision": "28f00d930db9c34b564d94555b041894"
  },
  {
    "url": "assets/js/66.f39dbae2.js",
    "revision": "7726eab443f7c9fdff2ac49132596a6f"
  },
  {
    "url": "assets/js/67.2a4fdf1d.js",
    "revision": "6739f5573ec3d28e07a23887373b3e07"
  },
  {
    "url": "assets/js/68.60f6966c.js",
    "revision": "314923fbac315776d9f19214deeaf1c1"
  },
  {
    "url": "assets/js/69.9e358efc.js",
    "revision": "cd62387e33775282f8b985aa53cc52e1"
  },
  {
    "url": "assets/js/7.e4fa29b4.js",
    "revision": "cb20a531f6014669a962d3d7c024f097"
  },
  {
    "url": "assets/js/70.2525c840.js",
    "revision": "9745cba661722bda6e74807c4323d14e"
  },
  {
    "url": "assets/js/71.12426f28.js",
    "revision": "7e0ba5e4f54ffce5953dee2baa408d90"
  },
  {
    "url": "assets/js/72.296240d4.js",
    "revision": "14a1ced8b714f231a5d3da85d58237bb"
  },
  {
    "url": "assets/js/73.c13a386d.js",
    "revision": "467d99a0eb1ca573d1d6c0a58ce71dd8"
  },
  {
    "url": "assets/js/74.f993cb90.js",
    "revision": "5102c99f50a07ab11c4445481ae70975"
  },
  {
    "url": "assets/js/75.e078a987.js",
    "revision": "5ee63c2d0a365a55bcad02ae4bdf88bc"
  },
  {
    "url": "assets/js/76.206718fc.js",
    "revision": "8c69286dd145ce0e511a10430040be3c"
  },
  {
    "url": "assets/js/77.3d3d1a69.js",
    "revision": "4d4cd6b9a8be7f0d43d355873d91795d"
  },
  {
    "url": "assets/js/78.5579aea5.js",
    "revision": "0b7d740de187990e6696b289248944f6"
  },
  {
    "url": "assets/js/79.181b0cbe.js",
    "revision": "13257ea00ad5a8513bf6fecfbe0fe67e"
  },
  {
    "url": "assets/js/8.e887c9a2.js",
    "revision": "95fbfe501fb125ac552c6eb2ee40ca6f"
  },
  {
    "url": "assets/js/9.6b1555d7.js",
    "revision": "ed552c778ffed667d4953c765bd9f85b"
  },
  {
    "url": "assets/js/app.04fffddf.js",
    "revision": "0c0afd652c6d43dbb286f874c5098834"
  },
  {
    "url": "css/devices.min.css",
    "revision": "36a97a89581e084b0912b5f6a8833cf6"
  },
  {
    "url": "hybrid/hybrid1.html",
    "revision": "f5c267244ac4087be51761495d390be9"
  },
  {
    "url": "hybrid/index.html",
    "revision": "8f8ad398127cd2a4796d68579718d3a6"
  },
  {
    "url": "ide/index.html",
    "revision": "e8b6f0208f2adf922bb451ae9c63eb82"
  },
  {
    "url": "img/contact-bg.jpg",
    "revision": "90b89018c57623f25ff271dda0b322e8"
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
    "revision": "d26dab4d4d184c0920761435871b7fcf"
  },
  {
    "url": "ios/index.html",
    "revision": "dc1837c77763edc449500054559c8dcd"
  },
  {
    "url": "ios/ios1.html",
    "revision": "49c90693f5f79eaf870a5475797d4668"
  },
  {
    "url": "opencv/index.html",
    "revision": "2c63cc06f130814703ece30d36c7f8e6"
  },
  {
    "url": "opencv/opencv1.html",
    "revision": "52e8022f17d379687dcfa2532caa5ac7"
  },
  {
    "url": "opencv/opencv2.html",
    "revision": "8882ab30dfedb9565411b973af74e648"
  },
  {
    "url": "unity/index.html",
    "revision": "5df50cf9789af21f023495dd5fbd9a29"
  },
  {
    "url": "unity/unity1.html",
    "revision": "d8ec1310b6267a4e482a6881e3fb09d0"
  },
  {
    "url": "web/index.html",
    "revision": "283d41851de5d7e3627c9c4268ca7c5a"
  },
  {
    "url": "web/web1.html",
    "revision": "7d7802741e898aa08e065ce0d2489910"
  },
  {
    "url": "web/web2.html",
    "revision": "20253a82b3e38e5f1c30153765a73a2b"
  },
  {
    "url": "web/web3.html",
    "revision": "9762e293550e6604b40b1ae672c022f2"
  },
  {
    "url": "web/web4.html",
    "revision": "bae95c7cecf3ff37302e33e8565e06a7"
  },
  {
    "url": "web/web5.html",
    "revision": "002bb1c01a7c41f0e14b14ae520f100f"
  },
  {
    "url": "web/web6.html",
    "revision": "49e39ac450f8ab180e4d21524b59a23c"
  },
  {
    "url": "web/web7.html",
    "revision": "39c450d884f2c9f9e5bf42181b47263e"
  },
  {
    "url": "web/web8.html",
    "revision": "0757841100c0cbc23d4da2b1a7a9204e"
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
