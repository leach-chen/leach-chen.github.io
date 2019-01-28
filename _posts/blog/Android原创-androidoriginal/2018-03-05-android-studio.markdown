---
layout: post
title: Android Studio项目配置及问题
date:  2018-03-05 18:12:00 +0900  
description: Android Studio项目配置
img: post-12.jpg # Add image post (optional)
tags: [Android,tools]
author: # Add name author (optional)
androidoriginal: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

## **配置** ##

**1. 修改项目module名称**<br>
新建项目TestProject->app上右键Refactor->Rename,选择Rename directory重命名为TestView,在项目根目录下打开settings.gradle，将include ':app'，改成include ':TestView',或者直接选择Rename module重命名为TestView

**2. 将项目module名移至文件夹下**<br>
在上一步中，TestProject->右键New->Directory,输入名称samples，将TestView项目拖入samples文件夹下，在项目根目录下打开settings.gradle，将include ':TestView'改成include ':samples:TestView'

**3. 导入其它项目module**<br>
File->New->Import Module...->选择要导入的项目module位置，clean，rebuild下，否则可能跑不起来

**4. 让包有层次显示**<br>
项目右上角有个设置图标->点击取消勾选compact empty middle package，Studio 3.0 之后改成了Hide empty middle packages

**5. 修改包名**<br>
修改AndroidManifest.xml中package位置的包名，修改module目录下build.gradle里面的applicationId里面的包名，若想将文件结构改成和包名一致，则先执行步骤4，再进行修改

## **问题：** ##

**1. SDK manager打不开解决办法**<br>
去<a href="http://tools.android-studio.org/index.php/sdk" style="text-decoration: none;" target="_blank"  title="点击前往">SDK TOOLS</a>网站下SDK安装包，我下载的是installer_r24.4.1-windows.exe版本，下载完成后安装到任意位置，然后再复制安装好的SDK包里面的tools文件夹，替换你原来SDK目录下的该文件夹，<a href="http://blog.csdn.net/star714/article/details/70653201" style="text-decoration: none;" target="_blank"  title="点击前往">参考网址</a>

**2. SDK manager无法更新问题**<br>
按如下图设置,<a href="http://blog.csdn.net/lvxiangan/article/details/71425186?utm_source=itdadao&utm_medium=referral" style="text-decoration: none;" target="_blank"  title="点击前往">参考网址</a>:<br>
<img src="/assets/img/blog/androidoriginal/androidstudio/sdkupdate.jpg" height = "300px"/>
