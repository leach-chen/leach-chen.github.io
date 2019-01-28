---
layout: post
title: python 基本操作
date:  2018-05-25 16:49:00 +0900  
description: 开发工具
img: post-6.jpg # Add image post (optional)
tags: [Python]
author: # Add name author (optional)
python: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

## 数据库操作 ##
```
#!/usr/bin/python
# -*- coding: UTF-8 -*-

import MySQLdb

db = MySQLdb.connect("localhost","root","","leachchen" ) #打开数据库连接
cursor = db.cursor() #使用cursor()方法获取操作游标
data = cursor.execute("SELECT * FROM persons") #使用execute方法执行SQL语句
result = cursor.fetchall() #获取查询结果

for row in result:  #循环输出数据库表中各字段结果
    id = row[0]
    lastname = row[1]
    firstname = row[2]
    address = row[3]
    city = row[4]

print id,lastname,firstname,address,city

db.close()  # 关闭数据库连接
```
