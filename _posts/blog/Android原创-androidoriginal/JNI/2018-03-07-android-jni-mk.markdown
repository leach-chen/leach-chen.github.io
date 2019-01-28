---
layout: post
title: Android JNI—Android.mk详解
date:  2018-03-07 18:20:00 +0900  
description: Android JNI—Android.mk详解
img: post-8.jpg # Add image post (optional)
tags: [Android,JNI]
author: # Add name author (optional)
androidoriginal: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

看一个简单的Android.mk的例子：
>LOCAL_PATH := $(call my-dir)<br>
>
>include $(CLEAR_VARS)<br>
>
>LOCAL_MODULE    := hello-jni<br>
>LOCAL_SRC_FILES := hello-jni.c<br>
>
>include $(BUILD_SHARED_LIBRARY)<br>

## **例子说明** ##
**LOCAL_PATH:=$(call my-dir)**<br>
Android.mk文件首先必须要指定LOCAL_PATH变量，用于查找源文件。一般情况下Android.mk和需要编译的源文件在同一目录下。上面的语句的意思是将LOCAL_PATH变量定义成本文件所在目录路径。

**include $(CLEAR_VARS)**<br>
Android.mk中可以定义多个编译模块，每个编译模块都是以include $(CLEAR_VARS)开始，以include $(BUILD_XXX)结束。<br>
CLEAR_VARS由编译系统提供，指定让GNU MAKEFILE为你清除除LOCAL_PATH以外的所有LOCAL_XXX变量，清除它们可以避免冲突，每一个原生组件被称为一个模块。如LOCAL_MODULE，LOCAL_SRC_FILES，LOCAL_SHARED_LIBRARIES，LOCAL_STATIC_LIBRARIES等。

**LOCAL_MODULE ：= hello-jni**<br>
LOCAL_MODULE模块必须定义，以表示Android.mk中的每一个模块。名字必须唯一且不包含空格。Build System会自动添加适当的前缀和后缀。例如，foo，要产生动态库，则生成libfoo.so. 但请注意：如果模块名被定为：libfoo.则生成libfoo.so. 不再加前缀。

**LOCAL_SRC_FILES：= hello-jni.c**<br>
LOCAL_SRC_FILES变量必须包含将要打包如模块的C/C++ 源码。不必列出头文件，build System 会自动帮我们找出依赖文件。缺省的C++源码的扩展名为.cpp. 也可以修改，通过LOCAL_CPP_EXTENSION。

**include $(BUILD_XXX)**<br>
BUILD_XXX是Build System提供的一个变量，指向一个GNU Makefile Script。它负责收集自从上次调用 include $(CLEAR_VARS)后的所有LOCAL_XXX信息。并决定编译为什么。<br>
BUILD_SHARED_LIBRARY：将你列出的Source编译成一个动态库。注意，在包含此文件前，至少应该包含：LOCAL_MODULE and LOCAL_SRC_FILES 。<br>
BUILD_STATIC_LIBRARY：将你列出的Source编译成一个静态库。静态库不能够加入到Project 或者APK中。但它可以用来生成动态库。。<br>
BUILD_EXECUTABLE：编译为Native C可执行程序<br>   


## **变量说明** ##

-------------------------------------
NDK Build System变量

**CLEAR_VARS**<br>
指向一个编译脚本。必须在新模块前包含之。
>include $(CLEAR_VARS)

**BUILD_SHARED_LIBRARY**<br>
指向一个编译脚本，它收集自从上次调用 include $(CLEAR_VARS)  后的所有LOCAL_XXX信息。
并决定如何将你列出的Source编译成一个动态库。 注意，在包含此文件前，至少应该包含：LOCAL_MODULE and LOCAL_SRC_FILES 例如：
>include $(BUILD_SHARED_LIBRARY)      

**BUILD_STATIC_LIBRARY**<br>
与前面类似，它也指向一个编译脚本，
收集自从上次调用 include $(CLEAR_VARS)  后的所有LOCAL_XXX信息。
并决定如何将你列出的Source编译成一个静态库。 静态库不能够加入到Project 或者APK中。但它可以用来生成动态库。
LOCAL_STATIC_LIBRARIES and LOCAL_WHOLE_STATIC_LIBRARIES将描述之。    
>include $(BUILD_STATIC_LIBRARY)

**BUILD_EXECUTABLE**<br>
与前面类似，它也指向一个编译脚本，收集自从上次调用 include $(CLEAR_VARS)  后的所有LOCAL_XXX信息。
并决定如何将你列出的Source编译成一个可执行Native程序。  
>include $(BUILD_EXECUTABLE)

**PREBUILT_SHARED_LIBRARY**<br>
把这个共享库声明为 “一个” 独立的模块。
指向一个build 脚本，用来指定一个预先编译好多动态库。 与BUILD_SHARED_LIBRARY and BUILD_STATIC_LIBRARY不同，
此时模块的LOCAL_SRC_FILES应该被指定为一个预先编译好的动态库，而非source file.  LOCAL_PATH := $(call my-dir)

>include $(CLEAR_VARS)<br>
><br>
>LOCAL_MODULE := foo-prebuilt     # 模块名<br>
>LOCAL_SRC_FILES := libfoo.so     # 模块的文件路径（相对于 LOCAL_PATH）<br>
><br>
>include $(PREBUILT_SHARED_LIBRARY) # 注意这里不是 BUILD_SHARED_LIBRARY<br>

这个共享库将被拷贝到 $PROJECT/obj/local 和 $PROJECT/libs/<abi> (stripped)  主要是用在将已经编译好的第三方库
使用在本Android Project中。为什么不直接将其COPY到libs/armabi目录呢？因为这样做缺陷很多。下一节再详细说明。

**PREBUILT_STATIC_LIBRARY**<br>
预先编译的静态库。同上。

**TARGET_ARCH**<br>
目标ＣＰＵ架构名。如果为“arm” 则声称ARM兼容的指令。与CPU架构版本无关。

**TARGET_PLATFORM**<br>
目标平台的名字。

**TARGET_ARCH_ABI**<br>
Name of the target CPU+ABI  
armeabi For ARMv5TE  armeabi-v7a

**TARGET_ABI**<br>
目标平台和 ABI 的组合

<br>

-------------------------------------
NDK提供的功能宏<br>
GNU　Make 提供的功能宏，只有通过类似： $(call function)   的方式来得到其值，它将返回文本化的信息。

**my-dir: $(call my-dir)**<br>
返回最近一次include的Makefile的路径。通常返回Android.mk所在的路径。它用来作为Android.mk的开头来定义LOCAL_PATH.  
>LOCAL_PATH := $(call my-dir)

请注意：返回的是最近一次include的Makefile的路径。所以在Include其它Makefile后，再调用$(call my-dir)会返回其它Android.mk 所在路径。例如：  
>LOCAL_PATH := $(call my-dir)   ... declare one module <br>
>include $(LOCAL_PATH)/foo/Android.mk<br>
>LOCAL_PATH := $(call my-dir)   ... declare another module<br>

则第二次返回的LOCAL_PATH　为：$PATH/foo。 而非$PATH.   

**all-subdir-makefiles**<br>
返回一个列表，包含'my-dir'中所有子目录中的Android.mk。如结构如下：<br>
sources/foo/Android.mk   sources/foo/lib1/Android.mk   sources/foo/lib2/Android.mk<br>
在If sources/foo/Android.mk 中， include $(call all-subdir-makefiles)  那则自动include 了sources/foo/lib1/Android.mk and sources/foo/lib2/Android.mk。

**this-makefile**<br>
当前Makefile的路径。      

**parent-makefile**<br>
返回include tree中父Makefile 路径。 也就是include 当前Makefile的Makefile Path。  

**import-module**<br>
允许寻找并inport其它modules到本Android.mk中来。 它会从NDK_MODULE_PATH寻找指定的模块名。  
$(call import-module,<name>)

<br>

-------------------------------------
模块描述变量<br>
此类变量用来给Build System描述模块信息。在'include $(CLEAR_VARS)' 和 'include $(BUILD_XXXXX)'之间。必须定义此类变量。
include $(CLEAR_VARS) script用来清空这些变量。   
include $(BUILD_XXXXX)收集和使用这些变量。    

**LOCAL_PATH**<br>
这个值用来给定当前目录。必须在Android.mk的开是位置定义之。
例如：  LOCAL_PATH := $(call my-dir)   LOCAL_PATH不会被include $(CLEAR_VARS) 清理。     

**LOCAL_MODULE**<br>
modules名。在include $(BUILD_XXXXX)之前，必须定义这个变量。此变量必须唯一且不能有空格。   
通常，由此变量名决定最终生成的目标文件名。

**LOCAL_MODULE_FILENAME**<br>
可选。用来override LOCAL_MODULE. 即允许用户重新定义最终生成的目标文件名。    
LOCAL_MODULE := foo-version-1  LOCAL_MODULE_FILENAME := libfoo

**LOCAL_SRC_FILES**<br>
为Build Modules而提供的Source 文件列表。不需要列出依赖文件。 注意：文件相对于LOCAL_PATH存放，
且可以提供相对路径。 例如：  
LOCAL_SRC_FILES := foo.c               \ toto/bar.c

**LOCAL_CPP_EXTENSION**<br>
指出C++ 扩展名。(可选)  
LOCAL_CPP_EXTENSION := .cxx 从NDK R7后，可以写多个：  
LOCAL_CPP_EXTENSION := .cxx .cpp .cc      

**LOCAL_CPP_FEATURES**<br>
可选。用来指定C++ features。  
LOCAL_CPP_FEATURES := rtti  
LOCAL_CPP_FEATURES := exceptions

**LOCAL_C_INCLUDES**<br>
一个可选的path列表。相对于NDK ROOT 目录。编译时，将会把这些目录附上。  
LOCAL_C_INCLUDES := sources/foo  LOCAL_C_INCLUDES := $(LOCAL_PATH)/../foo

**LOCAL_CFLAGS**<br>
一个可选的设置，在编译C/C++ source 时添加如Flags。
用来附加编译选项。 注意：不要尝试在此处修改编译的优化选项和Debug等级。它会通过您Application.mk中的信息自动指定。  
也可以指定include 目录通过：LOCAL_CFLAGS += -I<path>。 这个方法比使用LOCAL_C_INCLUDES要好。因为这样也可以被ndk-debug使用。    

**LOCAL_CXXFLAGS**<br>
LOCAL_CPPFLAGS的别名。

**LOCAL_CPPFLAGS**<br>
C++ Source 编译时添加的C Flags。这些Flags将出现在LOCAL_CFLAGS flags 的后面。

**LOCAL_STATIC_LIBRARIES**<br>
要链接到本模块的静态库list。(built with BUILD_STATIC_LIBRARY)

**LOCAL_SHARED_LIBRARIES**<br>
要链接到本模块的动态库。      

**LOCAL_WHOLE_STATIC_LIBRARIES**<br>
静态库全链接。 不同于LOCAL_STATIC_LIBRARIES，类似于使用--whole-archive    

**LOCAL_LDLIBS**<br>
linker flags。 可以用它来添加系统库。 如 -lz:   
LOCAL_LDLIBS := -lz   

**LOCAL_ALLOW_UNDEFINED_SYMBOLS**<br>     

**LOCAL_ARM_MODE**<br>
缺省模式下，ARM目标代码被编译为thumb模式。每个指令16位。如果指定此变量为：arm。 则指令为32位。  
LOCAL_ARM_MODE := arm   其实也可以指定某一个或者某几个文件的ARM指令模式。

**LOCAL_ARM_NEON**<br>
设置为true时，会讲浮点编译成neon指令。这会极大地加快浮点运算(前提是硬件支持)
只有targeting 为 'armeabi-v7a'时才可以。   

**LOCAL_DISABLE_NO_EXECUTE**<br>

**LOCAL_EXPORT_CFLAGS**<br>
定义这个变量用来记录C/C++编译器标志集合，
并且会被添加到其他任何以LOCAL_STATIC_LIBRARIES和LOCAL_SHARED_LIBRARIES的模块的LOCAL_CFLAGS定义中         
LOCAL_SRC_FILES := foo.c bar.c.arm

## **Application.mk变量** ##
用于描述app需要的native model。

**APP_PROJECT_PATH**<br>
这个变量存储应用程序的项目根目录的绝对路径。

**APP_OPTIM**<br>
配置release和debug

**APP_CFLAGS**<br>
这个变量存储一组构建系统的C编译器标志传递给编译器编译任何C或c++源代码的任何模块，可以修改应用需要的构建模块而不用修改Android.mk文件

**APP_CPPFLAGS**<br>
和 APP_CFLAGS类似

**APP_LDFLAGS**<br>
 A set of linker flags that the build system passes when linking the application，只对 shared libraries 和 executables有效

**APP_BUILD_SCRIPT**<br>
指定Android.mk文件

**APP_ABI**<br>
指定abi

**APP_PLATFORM**<br>
指定android api版本

**APP_STL**<br>
链接其他的c＋＋支持

**NDK_TOOLCHAIN_VERSION**<br>
gcc编译版本

**APP_PIE**<br>

**APP_THIN_ARCHIVE**<br>


## **常用构建系统变量** ##
**构建共享库**<br>
为了建立可供主应用程序使用的模块，必须将该模块变成共享库。Android NDK构建系统将BUILD_STATIC_LIBRARY变量设置成build-shared-library.mk文件的保存位置。
>include $(BUILD_STATIC_LIBRARY)

**构建多个共享库**<br>
基于不同应用程序的体系结构，一个单独的Android.mk文件可能产生多个共享库模块，为了达到这个目的，需要在Android.mk文档中定义多个模块。例如：

>LOCAL_PATH := $(call my-dir)<br>
><br>
>#模块1<br>
><br>
>include $(CLEAR_VARS)<br>
>LOCAL_MODULE    := hello-jni1<br>
>LOCAL_SRC_FILES := hello-jni1.c<br>
><br>
>include $(BUILD_SHARED_LIBRARY)<br>
><br>
>#模块2<br>
><br>
>include $(CLEAR_VARS)<br>
>LOCAL_MODULE    := hello-jni2<br>
>LOCAL_SRC_FILES := hello-jni2.c<br>
><br>
>include $(BUILD_SHARED_LIBRARY)<br>

在处理完这个Android.mk构建文档之后，Android NDK构建系统会产生libhello-jni1.so和libhello-jni2.so两个共享库。

**构建静态库**<br>
Android NDK构建系统也支持静态库，静态库可以用来构建共享库，例如，在将第三方代码添加到现有原生项目中，不用直接将第三方源代码包括在原生项目中，而是将第三方代码编译成静态库，然后并入共享库。
>LOCAL_PATH := $(call my-dir)     <br>
>     <br>
>#第三方AVI库     <br>
>include $(CLEAR_VARS)     <br>
>     <br>
>LOCAL_MODULE    := avilib     <br>
>LOCAL_SRC_FILES := avilib.c     <br>
>     <br>
>include $(BUILD_SHARED_LIBRARY)     <br>
>     <br>
>#原生模块     <br>
>include $(CLEAR_VARS)     <br>
>     <br>
>LOCAL_MODULE    := hello-jni     <br>
>LOCAL_SRC_FILES := hello-jni.c     <br>
>     <br>
>LOCAL_SHARED_LIBRARIES：=avilib     <br>
>     <br>
>include $(BUILD_SHARED_LIBRARY)

将第三方代码模块生成静态库后，共享库就可以通过将它的模块名称添加到LOCAL_SHARED_LIBRARIES变量中来使用该模块。

**用公共库共享通用模块**<br>
静态库可以保证源代码模块化，但是，当静态库与共享库相连接时，就变成了共享库的一部分。在多个共享库的情况下，多个共享库与同一个静态库连接时，需要将通用模块的多个副本与不同共享库重复连接，这样就增加了应用程序的大小，在这种情况下，我们不用构建静态库，而是将通用模块作为共享库建立起来，而动态连接依赖模块以便消除重复的副本。
>LOCAL_PATH := $(call my-dir)     <br>
>     <br>
>#第三方AVI库     <br>
>include $(CLEAR_VARS)     <br>
>     <br>
>LOCAL_MODULE    := avilib     <br>
>LOCAL_SRC_FILES := avilib.c     <br>
>include $(BUILD_SHARED_LIBRARY)     <br>
>     <br>
>#原生模块1     <br>
>     <br>
>include $(CLEAR_VARS)     <br>
>LOCAL_MODULE    := hello-jni1     <br>
>LOCAL_SRC_FILES := hello-jni1.c     <br>
>LOCAL_SHARED_LIBRARIES：=avilib     <br>
>     <br>
>include $(BUILD_SHARED_LIBRARY)     <br>
     <br>
>#原生模块2     <br>
>     <br>
>include $(CLEAR_VARS)     <br>
>LOCAL_MODULE    := hello-jni2     <br>
>LOCAL_SRC_FILES := hello-jni2.c     <br>
>LOCAL_SHARED_LIBRARIES：=avilib     <br>
>     <br>
>include $(BUILD_SHARED_LIBRARY)     <br>

**在多个NDK项目间共享模块**<br>
同时使用静态库和共享库时，可以在模块间共享通用模块。但是要注意的是，所有这些模块必须属于同一个NDK项目。<br>
1.首先将avilib源代码移动到当前NDK项目以外的位置，如：D:\shared-moudles\transcode\avilib<br>
2.作为共享模块，avilib需要自己的Android.mk文件，具体配置如下：<br
>LOCAL_PATH := $(call my-dir)    <br>
>    <br>
>#第三方AVI库    <br>
>include $(CLEAR_VARS)    <br>
>    <br>
>LOCAL_MODULE    := avilib    <br>
>LOCAL_SRC_FILES := avilib.c    <br>
>include $(BUILD_SHARED_LIBRARY)    <br>

3.现在可以将avilib模块从当前NDK项目的Android.mk文件中移除。通常，为了避免冲突，我们将以transcode/avilib为参数调用函数宏import-module不分添加在构建文档的末尾。
>#原生模块    <br>
>include $(CLEAR_VARS)    <br>
>    <br>
>LOCAL_MODULE    := hello-jni1    <br>
>LOCAL_SRC_FILES := hello-jni1.c    <br>
>LOCAL_SHARED_LIBRARIES：=avilib    <br>
>    <br>
>include $(BUILD_SHARED_LIBRARY)    <br>
>    <br>
>$(call import-module,transcode/avilib)    <br>

4.import-module函数宏需要先定位共享模块，然后将它导入到NDK项目中。默认情况下，import-module函数宏只搜索/sources目录。为了搜索D:\shared-moudles目录，定义一个名为NDK_MODULE_PATH的新环境变量并将它设置成共享模块的根目录，例如D:\shared-moudles。

**用Prebuilt库**<br>
prebulit库有两大作用：
1.想在不发布源代码的情况下将你的模块发布给他人
2.想使用共享模块的预建版来加速构建过程
>LOCAL_PATH := $(call my-dir)<br>
><br>
>#第三方AVI库<br>
>include $(CLEAR_VARS)<br>
><br>
>LOCAL_MODULE    := avilib<br>
>LOCAL_SRC_FILES := libavilib.so<br>
>include $(PREBUILT_SHARED_LIBRARY)<br>

其中，LOCAL_SRC_FILES 变量指向的不是源文件，而是实际Prebuild库相对于LOCAL_PATH的位置。

**构建独立的可执行文件**<br>
有时候为了方便快速测试和原型设计，我们可能会需要Android NDK构建独立的可执行文件，它们不用打包成APK文件既可以赋值到android设备上的常规Linux应用程序，而且它们可以直接执行，而不通过java应用程序加载。生成独立的可以执行文件需要再Android.mk构建文档中导入BUILD_EXECUTABLE变量。
>#独立可执行的原生模块
>include $(CLEAR_VARS)<br>
><br>
>LOCAL_MODULE    := moudles<br>
>LOCAL_SRC_FILES := moudles.c<br>
>LOCAL_SHARED_LIBRARIES：=avilib<br>
><br>
>include $(BUILD_EXECUTABLE)<br>

独立的可执行文件以与模块相同的名称放在libs/目录下。

**定义新变量**<br>
开发人员可以定义其他新变量来简化他们的构建文件。以LOCAL_和NDK_前缀开头的名称预留给Android NDK构建系统使用，建议大家使用MY_开头。例如：
MY_SRC_FILIES:=avilib.c

**条件操作**<br>
Android.mk构建文件可以包含某些关于这些变量的条件操作，例如，在某个体系结构中包含一个不同的源文件集：
>……<br>
>ifeq($(TARGET_ARCH),arm)<br><br>
>LOCAL_SRC_FILES += armonly.c<br>
>else<br>
>LOCAL_SRC_FILES += generic.c<br>
>endif<br>
>……




 <a href="http://blog.csdn.net/zhangcanyan/article/details/51932758" style="text-decoration: none;" target="_blank" title="参考网址">参考网址1</a><br>
 <a href="http://blog.csdn.net/mynameishuangshuai/article/details/52577228" style="text-decoration: none;" target="_blank" title="参考网址">参考网址2</a><br>
 <a href="http://blog.csdn.net/qq_21430549/article/details/53365915" style="text-decoration: none;" target="_blank" title="参考网址">参考网址3</a><br>
