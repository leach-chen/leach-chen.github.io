---
layout: post
title: Android Studio项目配置
date:  2018-03-05 18:12:00 +0900  
description: Android Studio项目配置
img: post-12.jpg # Add image post (optional)
tags: [Android,tools]
author: # Add name author (optional)
androidoriginal: true
---

**1. 修改项目module名称**
新建项目TestProject->app上右键Refactor->Rename,重命名为TestView,在项目根目录下打开settings.gradle，将include ':app'，改成include ':TestView'

**2. 将项目module名移至文件夹下**
在上一步中，TestProject->右键New->Directory,输入名称samples，将TestView项目拖入samples文件夹下，在项目根目录下打开settings.gradle，将include ':TestView'改成include ':samples:TestView'

**3. 导入其它项目module**
File->New->Import Module...->选择要导入的项目module位置，clean，rebuild下，否则可能跑不起来

**4. 让包有层次显示**
项目右上角有个设置图标->点击取消勾选compact empty middle package，Studio 3.0 之后改成了Hide empty middle packages

***5. 修改包名**
修改AndroidManifest.xml中package位置的包名，修改module目录下build.gradle里面的applicationId里面的包名，若想将文件结构改成和包名一致，则先执行步骤4，再进行修改