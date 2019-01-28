---
layout: post
title: Flutter 开发环境搭建及使用遇到的一些问题
date:  2018-06-25 15:50:00 +0900  
description: 开发环境搭建及使用遇到的一些问题
img: post-8.jpg # Add image post (optional)
tags: [Flutter]
author: # Add name author (optional)
flutter: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

官方中文网址：<a href="https://flutterchina.club/get-started/install/" style="text-decoration: none;" target="\_blank" title="">https://flutterchina.club/get-started/install/</a>,里面有详细的使用教程


## Windows Flutter Android Studio 开发环境搭建 ##

1. 电脑上要装有Git,没有装的可以去百度安装好

1. 假设在D盘创建Flutter目录 D:\Flutter，电脑打开命令行进入该目录，并执行：git clone -b beta https://github.com/flutter/flutter.git

1. 环境变量配置<br>
a. 在Path后面追加 D:\Flutter\flutter\bin;<br>
b. 添加环境变量PUB_HOSTED_URL，变量值：https://pub.flutter-io.cn <br>
c. 添加环境变量FLUTTER_STORAGE_BASE_URL，变量值：https://storage.flutter-io.cn <br>

1. 重启命令行以至环境变量生效，在命令行输入 **flutter doctor**，该命令会下载Dart及相关依赖

1. 电脑安装 3.0或更高版本以上的Android Studio，然后在File->settings...->Plugins->Browse repositiories...里面搜索安装两个插件:<br>
a. Flutter插件： 支持Flutter开发工作流 (运行、调试、热重载等).<br>
b. Dart插件： 提供代码分析 (输入代码时进行验证、代码补全等). <br>

1. 在File->settings...->Languages & Frameworks里面点击：<br>
a. Dart 选择 dart SDK路径D:\Flutter\flutter\bin\cache\dart-sdkFlutter <br>
b. Flutter 选择 Flutter SDK路径 D:\Flutter\flutter

## 创建应用 ##
1. 打开Android Studio 选择 File>New Flutter Project

1. 选择 Flutter application 作为 project 类型, 然后点击 Next

1. 输入项目名称 (如 myapp), 然后点击 Next

1. 点击 Finish，等待Android Studio安装SDK并创建项目.


## 相关问题 ##

**1. 添加依赖失败问题**

```
Error on line 6, column 5 of pubspec.yaml: A dependency may only have one source.
    sdk: flutter
    ^^^^^^^^^^^^^^
pub get failed (65)
```

**解决方案：** 注意 pubspec.yaml 文件添加依赖的内容，特别注意 sdk 对齐格式。如：
```
dependencies:
  flutter:
    sdk: flutter
  english_words: ^3.1.0
```
