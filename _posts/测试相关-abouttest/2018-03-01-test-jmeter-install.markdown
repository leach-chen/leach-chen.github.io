---
layout: post
title: Jmeter教程一（安装及遇到的问题）
date:  2018-03-01 11:40:00 +0900  
description: Jmeter教程一（安装及遇到的问题）
img: post-5.jpg # Add image post (optional)
tags: [jmeter]
author: # Add name author (optional)
abouttest: true
---
JMeter是Apache组织开发的基于Java的压力测试工具,下面主要记录下jmeter的安装过程及安装过程中遇到的问题。<br><br>

**安装过程**<br><br>

1. 首先<a href="http://jmeter.apache.org/download_jmeter.cgi" style="text-decoration: none;" target="_blank"  title="点击前往">前往官网</a>，我是windows环境，在Binaries下面点击下载apache-jmeter-4.0.zip（目前是4.0版本），然后解压至你的电脑上你想放的目录，我解压至**E:\SoftwareInstall\StudySoftware\apache-jmeter-4.0**；
<br><br>
2. 安装java jdk及配置环境变量，具体安装教程可百度下，这里不做介绍；<br><br>
3. 新建环境变量变量名：JMETER_HOME，变量值：E:\SoftwareInstall\StudySoftware\apache-jmeter-4.0<br>
  打开系统变量ClassPath，在最后面添加;%JMETER_HOME%/lib/ext/ApacheJMeter_core.jar;%JMETER_HOME%/lib/jorphan.jar;%JMETER_HOME%/lib/logkit-2.0.jar;<br><br>
4. 点击E:\SoftwareInstall\StudySoftware\apache-jmeter-4.0\bin\jmeter.bat，即可启动jmeter；

**可能遇到问题**<br><br>

#language=en

language=zh_CN

jmeter.properties



http://blog.csdn.net/beauty_shimei/article/details/53784531  用法

http://blog.csdn.net/fvafuc/article/details/49761237  添加证书

https://www.cnblogs.com/liyuhang/p/6694442.html 设置支持post json数据

https://www.cnblogs.com/liyuanhong/p/7087401.html http://www.cnblogs.com/liyuanhong/articles/7082998.html http://blog.csdn.net/dreamtl/article/details/68957122 https://my.oschina.net/u/3748347/blog/1619775上一个接口返回值作为下一个接口的请求参数


https://www.cnblogs.com/LiangHu/p/6229864.html  http://blog.csdn.net/github_27109687/article/details/71968662断言


http://blog.csdn.net/github_27109687/article/details/71968662 综合用法


https://www.cnblogs.com/by-dream/p/5611555.html  http://blog.csdn.net/sunwangdian/article/details/50738870 https://zhidao.baidu.com/question/365092914594067132.html https://www.cnblogs.com/wangcp-2014/p/4934728.html压测


  