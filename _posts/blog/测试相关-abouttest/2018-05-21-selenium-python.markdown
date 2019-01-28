---
layout: post
title: Selenium+Python Web自动化测试
date:  2018-05-21 18:22:00 +0900  
description: 测试相关摘记
img: post-2.jpg # Add image post (optional)
tags: [测试]
author: # Add name author (optional)
abouttest: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}


## 概念 ##
Selenium主要是用来做自动化测试，支持多种浏览器


## Selenium环境配置(Windows) ##
1. **python**, 下载地址：https://www.python.org/，下载2.X 的版本(Windows x86-64 MSI installer),假设安装至D盘，D:\Software\Python27,配置环境变量： <br>
(1)编辑->变量名PATH，变量值 D:\Software\Python27,变量值 D:\Software\Python27\Scripts <br>

1. **Selenium**，下载地址：selenium-3.12.0.tar.gz https://pypi.org/project/selenium/#files <br>
(1)下载完成后解压，如放到D:\Software\selenium-3.12.0  <br>
(2)进入该目录，命令行执行:pip install -U selenium，然后再执行 python setup.py install


## 下载支持浏览器的driver（Google为例） ##
1. 下载win32 google driver，下载地址：https://chromedriver.storage.googleapis.com/index.html?path=2.35/ <br>
1. 下载后，chromedriver.exe解压到D:\Software\Python27目录下，或者你想放的目录下，因为放在D:\Software\Python27时，已经指定了Python的环境变量，若放在其它目录下，则定义的时候要指定chromedriver.exe的路径：如browser = webdriver.Chrome(“D:\Google\chromedriver.exe”)  


## 开始例子（Python） ##
1. 编写客户端代码,创建test.py文件，并加入如下代码。<br>

```
# -*- coding: utf-8 -*-
import time

from selenium import webdriver
browser = webdriver.Chrome()  
browser.get('http://www.baidu.com/') #打开百度


elem = browser.find_element_by_id("kw") #找到输入框
elem.send_keys("selenium") #输入selenium
time.sleep(2); #等待2S

elem = browser.find_element_by_id("kw").clear() #清空输入框
elem = browser.find_element_by_id("kw")  #找到输入框
elem.send_keys("android") #输入android
browser.find_element_by_id("su").click() #点击搜索按钮
```

## 运行 ##
打开windows的命令行，cd到E:\PythonTest\AppiumClientPython 中，运行 python test.py。<br>
运行结果是先打开百度，输入selenium，等待2S，清空输入框，输入android，点击搜索按钮
