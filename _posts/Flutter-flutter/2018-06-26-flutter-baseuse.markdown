---
layout: post
title: Flutter 基本用法摘记
date:  2018-06-26 17:54:00 +0900  
description: Flutter 基本用法摘记
img: post-2.jpg # Add image post (optional)
tags: [Flutter]
author: # Add name author (optional)
flutter: true
---
记录用Flutter开发一些基本用法，基于Android Studio,持续更新...

## 函数、参数 ##

**MainAxisAlignment**
```
MainAxisAlignment.spaceBetween  //假设有1-2-3三个图片,居中，左边到1的间距，3到右边的间距为0，1-2,2-3之间间距相同

MainAxisAlignment.spaceAround  //假设有1-2-3三个图片,居中，1-2,2-3之间间距相同，且左边到1的间距，3到右边的间距的一半

MainAxisAlignment.spaceEvenly   //假设有1-2-3三个图片，居中，图片间距等值分配

MainAxisAlignment.start       //假设有1-2-3三个图片,居中及靠左，图片间距为0

MainAxisAlignment.end       //假设有1-2-3三个图片,居中及靠右，图片间距为0

MainAxisAlignment.center   //假设有1-2-3三个图片,居中，图片间距为0

```

**CrossAxisAlignment**
```
CrossAxisAlignment.start       //假设有1-2-3三个图片,靠左及顶部，图片间距为0

CrossAxisAlignment.end       //假设有1-2-3三个图片,靠左及底部，图片间距为0

CrossAxisAlignment.center   //假设有1-2-3三个图片,居中及靠左，图片间距为0

```


**TextDirection**

```

TextDirection.ltr   //假设有1-2-3三个图片,图片排列方式为1-2-3

TextDirection.rtr   //假设有1-2-3三个图片,图片排列方式为3-2-1

```

## 其它 ##

**打印日志**

print(),debugPrint()
在命令行里执行flutter run 或者 flutter logs 在控制台可以看到日志，也可以用adb logcat 进行日志查看及过滤
