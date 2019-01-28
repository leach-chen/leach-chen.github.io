---
layout: post
title: Android JNI—项目配置及用法
date:  2018-03-07 18:18:00 +0900  
description: Android JNI—项目配置及用法
img: post-1.jpg # Add image post (optional)
tags: [Android,JNI]
author: # Add name author (optional)
androidoriginal: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

主要记录下Android Studio下JNI项目搭建**配置方法、C++支持方式、函数静态动态注册,打印LOG到控制台**。

Google官方JNI Demo <a href="https://github.com/googlesamples/android-ndk/tree/master/other-builds/ndkbuild" style="text-decoration: none;" target="\_blank"  title="点击前往">Android.mk方式</a>,JNI Demo <a href="https://github.com/googlesamples/android-ndk" style="text-decoration: none;" target="\_blank"  title="点击前往">CMakeLists.txt方式</a>,目前NDK支持Android.mk,CMakeLists.txt编译方式，CMakeLists.txt是谷歌后面推出的编译方式，也是谷歌目前推荐的编译方式。我们先以Android.mk方式讲解学习，后面再介绍CMakeLists.txt方式。

## 项目支持JNI配置 ##

首先我们新建一个Android 项目，命名为TestJni,默认我们创建的项目不支持JNI，我们需要进一步配置：

1. 在项目src/main目录下新建jni文件夹;<br>
2. 在jni目录下新建一个testjni.c的文件，再新建一个Android.mk的文件，mk文件里输入如下内容：<br>
>LOCAL_PATH := $(call my-dir)<br>
>include $(CLEAR_VARS)<br>
>LOCAL_MODULE:= testjni<br>
>LOCAL_LDLIBS += -llog -lz -landroid<br>
>LOCAL_SRC_FILES := testjni.c<br>
>include $(BUILD_SHARED_LIBRARY)<br>
3. 在项目目录下的build.gradle，android模块里面加入：
>externalNativeBuild {<br>
>     ndkBuild {<br>
>       path "src/main/jni/Android.mk"<br>
>     }<br>
>}<br>
![](/assets/img/blog/androidoriginal/jni/jniconfig/build_config.jpg)<br>
这样项目便支持JNI了，如果编写jni代码时，没有代码提示，尝试选择build->Refresh Linked C++ Projects


4. 创建对应的native方法，可以用命令行方式去创建也可以直接鼠标放在native方法上按下alt+enter(eclipse快捷键方式)
>![](/assets/img/blog/androidoriginal/jni/jniconfig/method_create.jpg)

## 项目配置支持C++ ##
1. 默认JNI支持的是C方式，JNI里面C方式代码如下：
>![](/assets/img/blog/androidoriginal/jni/jniconfig/c_part.jpg)

2. C里面有很多C++没有的函数，我们如果想JNI支持C++，那我们新建一个testjni.cpp的文件，新建一个Application.mk文件，在里面添加：<br>
>**APP_STL := gnustl_static<br>**
>**APP_CPPFLAGS := -frtti -fexceptions**<br><br>
重新Clean Project->Rebuild Project,C++方式写法如下：
![](/assets/img/blog/androidoriginal/jni/jniconfig/c_part1.jpg)

## 函数静态动态注册 ##

**静态注册方式**(函数名为JAVA_包名_类名_方法名组成):

	JNIEXPORT jstring JNICALL Java_com_leachchen_testjni_MainActivity_testMethod(JNIEnv *env, jobject instance, jstring name_) {
		const char *name = (*env)->GetStringUTFChars(env, name_, 0);
		char buff[128] = {0};
		sprintf(buff,"I am from C part String and get java part String:%s",name);
		(*env)->ReleaseStringUTFChars(env, name_, name);

		return (*env)->NewStringUTF(env, buff);
	}

**动态注册方式**(指定包名路径，然后可以自定义函数名称与native名称映射):

1: 指定java里面的native方法所在类的路径#define CLASS_PATH_NAME	 "com/leachchen/testjni/MainActivity";<br>
2: 重写JNI_OnLoad方法:<br>
3: 在JNINativeMethod里面将java里面的native方法及jni里面的方法映射;<br>
4: 实现java要调用的方法jstring testJniMethod(JNIEnv *env, jobject instance, jstring name_)；

	//testjni.cpp
	#include <stdio.h>
	#include <jni.h>
	#include <iostream>
	using namespace std;

	#define CLASS_PATH_NAME	 "com/leachchen/testjni/MainActivity"

	/**
	 * 静态注册方式
	 */
	/*extern "C" JNIEXPORT jstring JNICALL
	Java_com_leachchen_testjni_MainActivity_testMethod(JNIEnv *env, jobject instance, jstring name_) {
		const char *name = env->GetStringUTFChars(name_, 0);
		char buff[128] = {0};
		sprintf(buff,"I am from C part String and get java part String:%s",name);
		env->ReleaseStringUTFChars(name_, name);

		return env->NewStringUTF(buff);
	}*/

	/**
	 * 动态注册方式
	 */
	jstring testJniMethod(JNIEnv *env, jobject instance, jstring name_) {
		const char *name = env->GetStringUTFChars(name_, 0);
		char buff[128] = {0};
		sprintf(buff,"I am from C part String and get java part String:%s",name);
		env->ReleaseStringUTFChars(name_, name);

		return env->NewStringUTF(buff);
	}


	//注册Java端的方法以及本地相对应的方法
	JNINativeMethod method[]={
		{
			  "testMethod", //Java中native函数的函数名
			  "(Ljava/lang/String;)Ljava/lang/String;", // Java中的native对应的native签名
			  (void *)testJniMethod //native 中的方法指针
		 }
	};

	//注册相应的类以及方法
	jint registerNativeMeth(JNIEnv *env){
		jclass cl=env->FindClass(CLASS_PATH_NAME);
		if((env->RegisterNatives(cl,method,sizeof(method)/sizeof(method[0])))<0){
			return -1;
		}
		return 0;
	}

	//实现jni_onload 动态注册方法
	jint JNI_OnLoad(JavaVM* vm, void* reserved) {
		JNIEnv* env = NULL;
		if (vm->GetEnv((void**) &env, JNI_VERSION_1_4) != JNI_OK) {
			return -1;
		}
		if(registerNativeMeth(env)!=JNI_OK){//注册方法
			return -1;
		}
		return JNI_VERSION_1_4;//必须返回这个值
	}

## 打印LOG到控制台 ##

1. 首先在Android要加上LOCAL_LDLIBS += -llog -lz -landroid，log支持库
>![](/assets/img/blog/androidoriginal/jni/jniconfig/log_config.jpg)

2. 定义如下宏定义，可定义在c,cpp或者.h头文件里
  >#include <android/log.h><br>
  >#define TAG "MYFFMPEG" // 这个是自定义的LOG的标识<br>
  >#define LOGD(...) __android_log_print(ANDROID_LOG_DEBUG,TAG ,__VA_ARGS__) // 定义LOGD类型<br>
  >#define LOGI(...) __android_log_print(ANDROID_LOG_INFO,TAG ,__VA_ARGS__) // 定义LOGI类型<br>
  >#define LOGW(...) __android_log_print(ANDROID_LOG_WARN,TAG ,__VA_ARGS__) // 定义LOGW类型<br>
  >#define LOGE(...) __android_log_print(ANDROID_LOG_ERROR,TAG ,__VA_ARGS__) // 定义LOGE类型<br>
  >#define LOGF(...) __android_log_print(ANDROID_LOG_FATAL,TAG ,__VA_ARGS__) // 定义LOGF类型<br>

3. 调用方式: LOGE("get java value:%s",value);



源码参考samples里面的TestJni
<h1><a href="https://github.com/leach-chen/TestProject/tree/master/samples/TestJni" style="text-decoration: none;" target="_blank" title="源码下载">源码下载</a>
<h1>
