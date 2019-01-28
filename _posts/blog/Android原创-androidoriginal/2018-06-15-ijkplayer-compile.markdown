---
layout: post
title: Ijkplayer 编译支持Https及用法
date:  2018-06-15 16:10:00 +0900  
description: Ijkplayer 编译支持Https及用法
img: post-4.jpg # Add image post (optional)
tags: [Ijkplayer]
author: # Add name author (optional)
androidoriginal: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

Ijkplayer 官方网址:<a href="https://github.com/Bilibili/ijkplayer" style="text-decoration: none;" target="\_blank"  title="点击前往">https://github.com/Bilibili/ijkplayer</a>

## 编译 ##

```
1. git clone https://github.com/Bilibili/ijkplayer.git ijkplayer-android
2. cd ijkplayer-android
3. git checkout -B latest k0.8.8
4. cd config
5. rm module.sh
6. ln -s module-default.sh module.sh  //编译的是完整版
7. sudo vim module.sh,再末尾加入export COMMON_FF_CFG_FLAGS="$COMMON_FF_CFG_FLAGS --enable-openssl"
8. cd android/contrib
9. sh compile-ffmpeg.sh clean
10. cd ..
11. cd ..
12. ./init-android.sh
13. ./init-android-openssl.sh
14. cd android/contrib
15. ./compile-openssl.sh clean
16. ./compile-openssl.sh all //编译OpenSSL
17. ./compile-ffmpeg.sh clean
18. ./compile-ffmpeg.sh all //编译ffmpeg,如果报错：fatal error: linux/perf_event.h: No such file or directory,打开第6步中的module.sh,在末尾加入 export COMMON_FF_CFG_FLAGS="$COMMON_FF_CFG_FLAGS --disable-linux-perf"
19. cd ..
20. ./compile-ijk.sh all  //编译生成各CPU架构的so，如果不加 all 默认只生成 armv7a 架构的 so,编译指定架构的so：compile-ijk.sh armv7a，具体参考 .sh 文件中的 Usage
```


## 用法 ##

1. 编译完成，在android/ijkplayer 目录下有各个平台对应的so，把so放入我们的项目中<br>
2. 在app下的build.gradle下面加入<br>
```
compile 'tv.danmaku.ijk.media:ijkplayer-java:0.8.8'
compile 'tv.danmaku.ijk.media:ijkplayer-exo:0.8.8'
```
3. 将android/ijkplayer/ijkplayer-example,里面widget目录里面的文件放入我们的项目中便可使用了。
