---
layout: post
title: Android JNI(二)—Android.mk
date:  2018-03-07 18:20:00 +0900  
description: Android JNI—Android.mk
img: post-8.jpg # Add image post (optional)
tags: [Android,JNI]
author: # Add name author (optional)
androidoriginal: true
---
看一个简单的Android.mk的例子：
>LOCAL_PATH := $(call my-dir)<br>
>
>include $(CLEAR_VARS)<br>
>
>LOCAL_MODULE    := hello-jni<br>
>LOCAL_SRC_FILES := hello-jni.c<br>
>
>include $(BUILD_SHARED_LIBRARY)<br>





 <a href="http://blog.csdn.net/mynameishuangshuai/article/details/52577228" style="text-decoration: none;" target="_blank" title="参考网址">参考网址1</a><br>
 <a href="http://blog.csdn.net/zhangcanyan/article/details/51932758" style="text-decoration: none;" target="_blank" title="参考网址">参考网址2</a><br>
