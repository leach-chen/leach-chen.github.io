---
layout: post
title: 逆向笔记
date:  2018-07-10 20:10:00 +0900
description: 逆向笔记
img: post-1.jpg # Add image post (optional)
tags: [随笔]
author: # Add name author (optional)
essays: true
---

**反编译**  <br>
```
apktool d -f apk路径 -o 输出路径

apktool d -f D:\test.apk D:\MyPart\nixiang\fanbianyi\test
```

**回编**  <br>
```
apktool b 反编译出来的包路径 -o 输出路径的apk路径

apktool b D:\MyPart\nixiang\fanbianyi\test -o D:\MyPart\nixiang\fanbianyi\a.apk
```

**密钥库文件生成** <br>
```
keytool -genkey -alias test.keystore -keyalg RSA -validity 20000 -keystore  test.keystore

其中，-genkey表示生成密钥，-alias表示密钥别名，-keyalg表示密钥的算法，-validity表示有效期，-keystor表示生成文件的名字
之后会提示输入相应的信息，输入后按Y确认即可。
```


**签名**  <br>
```
jarsigner -verbose -keystore test.keystore -signedjar testapk_signed.apk testapk.apk  test.keystore

jarsigner -verbose -keystore D:\test.key  -signedjar testapk_signed.apk D:\MyPart\nixiang\fanbianyi\a.apk test

-verbose表示显示出签名详细信息
-keystore表示使用当前目录中的test.keystore签名证书文件。
-signedjar testapk_signed.apk表示签名后生成的APK名称

testapk.apk表示未签名 的APK

test..keystore表示密钥的别名
```
