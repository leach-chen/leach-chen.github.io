---
layout: post
title: Jmeter教程—安装及遇到的问题
date:  2018-03-01 11:40:00 +0900  
description: Jmeter教程一（安装及遇到的问题）
img: post-5.jpg # Add image post (optional)
tags: [jmeter]
author: # Add name author (optional)
abouttest: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

JMeter是Apache组织开发的基于Java的压力测试工具,下面主要记录下jmeter的安装过程及安装过程中遇到的问题。<br><br>

**安装过程**<br><br>

1. 首先<a href="http://jmeter.apache.org/download_jmeter.cgi" style="text-decoration: none;" target="_blank"  title="点击前往">前往官网</a>，我是windows环境，在Binaries下面点击下载apache-jmeter-4.0.zip（目前是4.0版本），然后解压至你的电脑上你想放的目录，我解压至**E:\SoftwareInstall\StudySoftware\apache-jmeter-4.0**；
<br><br>
2. 安装java jdk及配置环境变量，具体安装教程可百度下，这里不做介绍；<br><br>
3. 新建环境变量变量名：JMETER_HOME，变量值：E:\SoftwareInstall\StudySoftware\apache-jmeter-4.0<br>
  打开系统变量ClassPath，在最后面添加;%JMETER_HOME%/lib/ext/ApacheJMeter_core.jar;%JMETER_HOME%/lib/jorphan.jar;%JMETER_HOME%/lib/logkit-2.0.jar;<br><br>
4. 点击E:\SoftwareInstall\StudySoftware\apache-jmeter-4.0\bin\jmeter.bat，即可启动jmeter；

**可能遇到问题**<br><br>

1. WIN10下启动失败 not able to find Java executable or version.Please check your java installation <br>
<a href="http://blog.csdn.net/dragonzard/article/details/77340399" style="text-decoration: none;" target="_blank"  title="点击前往">参考连接</a>

2. 启动提示 系统找不到文件C:\ProgramData\Oracle\Java\javapath\java.exe,
打开环境变量设置，打开Path，将C:\ProgramData\Oracle\Java\javapath放到%JAVA_HOME%\bin后面，<a href="http://blog.csdn.net/u012506661/article/details/52903613" style="text-decoration: none;" target="_blank"  title="点击前往">参考连接</a>

3. 修改jmeter修改语言
jmeter目录下找到jmeter.properties，打开找到#language=en，修改成language=zh_CN，重新启动jmeter
