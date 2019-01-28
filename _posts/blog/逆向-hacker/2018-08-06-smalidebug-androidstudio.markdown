---
layout: post
title: Smali动态调试之Android Studio
date:  2018-08-06 17:18:00 +0900
description: Smali动态调试之Android Studio
img: post-2.jpg # Add image post (optional)
tags: [逆向]
author: # Add name author (optional)
hacker: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

动态调试Smali有多种方式，可以用IDA Pro，Eclipse或者Android Studio等，IDA Pro折腾了下没弄好，于是就折腾Android Studio，因为主要用android studio开发，用起来比较顺手，下面记录下Android Studio的动态调试Smali的主要过程。

**1.APK 反汇编及回编**

反编译得到Smali源码，反编译过程较简单，之前讲过，不在这里讲解。反编译后需要在Application上添加 android:debuggable="true" 选项，然后重新回编，签名APK，安装到手机上

**2.安装smalidea Android Studio 插件**

安装ideasmali插件,File->Settings->Plugins->Install plugin from disk...，安装之前下载的ideasmali插件。

下载地址:<a href="https://bitbucket.org/JesusFreke/smali/downloads/" style="text-decoration: none;" target="\_blank"  title="">https://bitbucket.org/JesusFreke/smali/downloads/</a>

**3.命令启动要调试的APK**

```
adb shell am start -D -n com.example/.start.StartupActivity
```

**4.启动DDMS获取端口号**

DDMS可以在开发工具里找到,启动的时候最好关闭Android Studio，找不到去到你的Android SDK安装目录tools/ddms.bat,双击ddms.bat启动DDMS，记下红色选择的端口7697,8700

<img src="/assets/img/blog/hacker/smaliandroidstudio/1.jpg" height = "300px"/>


记得要关闭DDMS再执行该命令，否则会提示端口被占用

不启动DDMS也可以获取端口号执行如下命令（若debug的时候无效，则需要先关）：

```
adb shell
top | grep apk包名关键字
```

<img src="/assets/img/blog/hacker/smaliandroidstudio/5.jpg" height = "300px"/>


**若android studio debug的时候无效，则需要先关闭android studio，再从头开始执行上面的步骤**

**5.进行端口转发**

打开命令行，执行

```
adb forward tcp:8700 jdwp:7697
```

**6.Android Studio导入Smali源码**

File->New->Import Project...,一直下一步

Run->Edit Configurations..,

点击+，输入一个名称如：DebugSmali，Port填入刚刚的8700

<img src="/assets/img/blog/hacker/smaliandroidstudio/2.jpg" height = "300px"/>


**7.配置JDK**

File->Project Structure...,按如下图配置,红框内内容根据你实际情况选择:

<img src="/assets/img/blog/hacker/smaliandroidstudio/3.jpg" height = "300px"/>

**8.启动调试**

点击工具栏的调试按钮即可启动调试

<img src="/assets/img/blog/hacker/smaliandroidstudio/4.jpg" height = "300px"/>

<a href="https://www.cnblogs.com/lanrenxinxin/p/4891424.html" style="text-decoration: none;" target="\_blank"  title="">参考1</a>
<a href="https://blog.csdn.net/daide2012/article/details/75332798" style="text-decoration: none;" target="\_blank"  title="">参考2</a>
