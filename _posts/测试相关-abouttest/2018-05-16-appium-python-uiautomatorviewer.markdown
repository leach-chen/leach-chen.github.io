---
layout: post
title: Appium+Python+uiautomatorviewer 自动化测试
date:  2018-05-16 17:08:00 +0900  
description: 测试相关摘记
img: post-8.jpg # Add image post (optional)
tags: [测试]
author: # Add name author (optional)
abouttest: true
---

待完善...

https://www.jianshu.com/p/21589ff62871
https://www.jianshu.com/p/2912482dba0b


```
import time

from appium import webdriver

desired_caps = {}
desired_caps['platformName'] = 'Android'
desired_caps['deviceName'] = 'Android Emulator'
desired_caps['platformVersion'] = '8.0'
#desired_caps['app'] = os.path.abspath('/Users/a58/Downloads/zhuanzhuan_market_923.apk')
desired_caps['appPackage'] = 'com.vava.dashcam'
desired_caps['appActivity'] = '.UI.Start.WelcomeActivity'

wd = webdriver.Remote('http://127.0.0.1:4723/wd/hub', desired_caps)

time.sleep(30);

for i in range(10):
	#wd.find_element_by_id("com.vava.dashcam:id/fl_deviceplay_snapshotphoto").click();  
	#time.sleep(3);

	wd.tap(([6,441],[358,795]), 200)  
	time.sleep(2);
	wd.find_element_by_id("com.vava.dashcam:id/ll_title_left").click();  
```
