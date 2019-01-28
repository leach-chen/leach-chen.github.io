---
layout: post
title: python 开发环境搭建
date:  2018-05-25 15:45:00 +0900  
description: 开发工具
img: post-9.jpg # Add image post (optional)
tags: [Python]
author: # Add name author (optional)
python: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

## Python下载配置 ##

**python**, 下载地址：https://www.python.org/， 下载2.X 的版本(Windows x86-64 MSI installer),假设安装至D盘，D:\Software\Python27,配置环境变量： <br>
(1)编辑->变量名PATH，变量值 D:\Software\Python27<br>
(2)编辑->变量名PATH，变量值 D:\Software\Python27\Scripts <br>

或者安装最新版，勾选添加到Path选项就不用配置环境变量

## Pycharm 开发工具下载安装 ##

下载地址：https://www.jetbrains.com/pycharm/download/#section=windows

安装这两个东西就可以进行python开发了，Python开发还要依赖各种库，可以在Pycharm开发工具File->settings->project->Project Interpreter里面进行下载 或者在命令行里通过pip下载



## 问题 ##

A. import MySQLdb 报错
```
ImportError: No module named MySQLdb <br>
```
**解决办法:** pip install mysql-python or pip install mysqlclient

B. Python3.4 安装mysqlClient提示 Microsoft Visual C++ 10.0 is required (Unable to find vcvarsall.bat).错误的解决 <br>
**解决办法下载：** https://www.microsoft.com/en-us/download/details.aspx?id=44266

C. pip install MySQL-python 报错 <br>

```
_mysql.c(42) : fatal error C1083: Cannot open include file: 'config-win.h': No s
uch file or directory

error: command 'C:\\Program Files (x86)\\Common Files\\Microsoft\\Visual C++ for
 Python\\9.0\\VC\\Bin\\cl.exe' failed with exit status 2
```

**解决办法参考：** https://blog.csdn.net/yxwb1253587469/article/details/53310803    https://blog.csdn.net/fr4world/article/details/79615744




可参考：https://www.cnblogs.com/EmptyFS/p/6184627.html
