---
layout: post
title: Appium+Python+uiautomatorviewer 移动端自动化测试
date:  2018-05-16 17:08:00 +0900  
description: 测试相关摘记
img: post-8.jpg # Add image post (optional)
tags: [测试]
author: # Add name author (optional)
abouttest: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

## 概念 ##
Appium是一个开源的自动化测试工具，其支持iOS和安卓平台上的原生的，基于移动浏览器的，混合的应用。<br>
Appium支持Selenium WebDriver支持的所有语言，如java、Object-C、JavaScript、Php、Python、Ruby、C#、Clojure，或者Perl语言，更可以使用Selenium WebDriver的Api。Appium支持任何一种测试框架.Appium实现了真正的跨平台自动化测试。


## Appium环境搭建（Android） ##
1. **java jdk** 下载地址:http://www.oracle.com/technetwork/java/javase/downloads/index.html, 假设安装至D:\Software\ ，配置环境变量:<br>
(1)新建->变量名JAVA_HOME，变量值D:\Software\Java\jdk1.8.0_05（即JDK的安装路径） <br>
(2)编辑->变量名Path，在原变量值的最后面加上;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin <br>
(3)新建->变量名CLASSPATH,变量值.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar <br>
1. **android SDK**，下载地址：http://developer.android.com/sdk/index.html，下载sdk tools，可能需要FQ，提供一个国内下载地址：http://www.androiddevtools.cn/ ,假设安装至D盘，配置环境变量:<br>
(1)新建->变量名ANDROID_HOME，变量值D:\Software\Android\android-sdk <br>
(2)编辑->变量名PATH，变量值 %ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools; <br>
1. **appium**，下载地址：http://appium.io/, 配置环境变量： <br>
(1)编辑->变量名PATH，假设安装至D盘，变量值 D:\Software\Appium\node_modules\.bin;  <br>
1. **nodejs**，下载地址：https://nodejs.org/en/, 配置环境变量:  <br>
(1)编辑->变量名PATH，假设安装至D盘，变量值 D:\Software\Appium\node_modules\.bin; 输入node -v，查看node安装版本,输入appium-doctor检查appium的安装环境是否成功
1. **appium lib**，下载地址：http://appium.io/downloads.html  选择Python版本的Lib: Appium-Python-Client-0.22.tar.gz,由于Appium依赖于Selemium,所以还要下载 Selemium Lib: selenium-2.53.2.tar.gz https://pypi.python.org/pypi/selenium
1. **python**, 下载地址：https://www.python.org/，  下载2.X 的版本(Windows x86-64 MSI installer),假设安装至D盘，D:\Software\Python27,配置环境变量： <br>
(1)编辑->变量名PATH，变量值 D:\Software\Python27  https://www.jianshu.com/p/21589ff62871 https://www.jianshu.com/p/2912482dba0b https://blog.csdn.net/azsx02/article/details/68947429<br>


## Uiautomatorviewer ##
Uiautomatorviewer是android SDK自带的工具。通过截屏并分析XML布局文件的方式，为用户提供控件信息查看服务，可以获取到界面上控件的id或者位置。该工具位于SDK目录下的tools\bin子目录下。可以看到，它是通过bat文件启动的。

## 开始例子（Python） ##
1. 打开windows的命令行，输入appium，显示成功启动<br>
1. 连接Android手机（或者模拟器）<br>
1. 编写客户端代码。<br>
假设我们的代码放在目录E:\PythonTest\AppiumClientPython 中。首先把 Appium-Python-Client-0.22.tar.gz 里面的 appium 目录解压到AppiumClientPython 中， 把 selenium-2.53.2.tar.gz里面的 selenium 目录解压到AppiumClientPython中。<br>
创建文件test.py , 编辑内容：<br>

```
# -*- coding:UTF-8 -*-
import time

from appium import webdriver

desired_caps = {}
desired_caps['platformName'] = 'Android'	#系统名称
desired_caps['deviceName'] = 'Android Emulator' #手机名称，这个没写对也没关系
desired_caps['platformVersion'] = '8.0'	#手机系统版本
#desired_caps['app'] = os.path.abspath('/Users/a58/Downloads/zhuanzhuan_market_923.apk')
desired_caps['appPackage'] = 'com.leachchen.autotest' #APP包名称
desired_caps['appActivity'] = '.UI.Start.WelcomeActivity' #APP启动页路径

wd = webdriver.Remote('http://127.0.0.1:4723/wd/hub', desired_caps)	#连接上设备

time.sleep(30);	#睡眠30S等APP启动完成

for i in range(10):	#循环执行下面代码10次
	#wd.find_element_by_id("com.leachchen.autotest:id/fl_deviceplay_snapshotphoto").click();  #找到id为fl_deviceplay_snapshotphoto的控件并进行点击
	#time.sleep(3);  #睡眠3S

	wd.tap(([6,441],[358,795]), 200)   #点击指定区域
	time.sleep(2);	#睡眠3S
	wd.find_element_by_id("com.leachchen.autotest:id/ll_title_left").click();   #找到id为ll_title_left的控件并进行点击
	#上面的id可以通过uiautomatorviewer获取到对应APP的控件的id
```

## 运行 ##
打开windows的命令行，cd到E:\PythonTest\AppiumClientPython 中，运行 python test.py。
