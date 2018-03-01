---
layout: post
title: Jmeter教程二（Jmeter用法）
date:  2018-03-01 11:40:00 +0900  
description: Jmeter教程二（Jmeter用法）
img: post-6.jpg # Add image post (optional)
tags: [jmeter]
author: # Add name author (optional)
abouttest: true
---
下面将记录下jmeter调用https方式的**登录接口**依赖**授权接口**返回值的调用过程<br><br>
**1.添加线程组**<br><br>
<img src="/assets/img/blog/abouttest/jmeter2/add_thread.jpg" height = "300px"/>
<br><br>
**2.添加默认http请求**<br><br>
为什么要添加这个呢？若要测试多个接口，每个接口都要去设置域名，端口等信息，那么会比较麻烦，我们可以设置一个默认的http请求，这样所有接口都能公用。<br>  
<img src="/assets/img/blog/abouttest/jmeter2/默认HTTP请求添加.jpg" height = "300px"/>
<img src="/assets/img/blog/abouttest/jmeter2/默认HTTP请求.jpg" height = "300px"/><br>
若是http请求，则在协议里面填入http，服务器名称或IP里面填入域名，端口号填80
若是https请求，则在协议里面填入https，服务器名称或IP里面填入域名，端口号填443,并且还需要添加证书
点击选项-->SSL管理器->在弹出框里面找到你的证书-->点击Open<br><br>
**3.信息头管理器添加**<br><br>
若你请求的接口为post方式，且post的参数为json格式，则要配置HTTP信息头，否则接口会调用失败。添加<br>**Content-Type:application/json,charset:UTF-8**<br>
<img src="/assets/img/blog/abouttest/jmeter2/信息头管理器.jpg" height = "300px"/>
<img src="/assets/img/blog/abouttest/jmeter2/信息头管理器详情.jpg" height = "300px"/><br><br>
**4.添加一个授权接口**<br><br>
<img src="/assets/img/blog/abouttest/jmeter2/add_http_request.jpg" height = "300px"/>
<img src="/assets/img/blog/abouttest/jmeter2/add_http_request_detail.jpg" height = "300px"/><br>
方式选择POST,路径为域名之后的那串如：/auth?type=101,Body Data里面为要Post提交的参数<br><br>
**5.查看接口执行情况**<br><br>
查看接口执行情况需要添加一个察看结果树<br>
<img src="/assets/img/blog/abouttest/jmeter2/result_tree.jpg" height = "300px"/><br><br>
点击菜单栏的绿色执行按钮即可在察看结果树里面看到该接口请求及返回值情况
<img src="/assets/img/blog/abouttest/jmeter2/result_tree_detail.jpg" height = "300px"/><br>
假设授权接口返回数据为{"code":"0","message":"success","data":{"accessToken":"123"}}<br><br>
**6.登录接口获取授权接口返回值**<br><br>
按照步骤4添加一个登录接口，登录接口请求的时候需要传入上面的accessToken值123，那么如果获取到这个token值呢？<br>
可以通过正则方式或者json方式去获取到授权接口的这个返回值，我们这里用json方式。<br>采用json方式需要先下载个插件：
下载地址为：<a href="https://jmeter-plugins.org/wiki/JSONPathExtractor/" style="text-decoration: none;" target="_blank"  title="点击前往">https://jmeter-plugins.org/wiki/JSONPathExtractor/</a>
下载完成后，将下载的jar包放到jmeter安装目录下lib\ext里面，重启jmeter。
此时可以添加一个Json Extractor<br>
<img src="/assets/img/blog/abouttest/jmeter2/json_create.jpg" height = "300px"/>
<img src="/assets/img/blog/abouttest/jmeter2/json_create_detail.jpg" height = "300px"/><br>
**Names of created variables**里面定义一个变量名，可随便取名,我这里就取名为accessToken<br>
**JSON Path expressions**里面为截取上面json里面的accessToken字段<br>
假设登录接口url为/auth?accessToken=,那么我们这样写/auth?accessToken=${accessToken}，这样在执行登录接口的时候就自动会获取到授权接口返回的accessToken值<br><br>
**7.添加断言**<br><br>
断言有多种，这里以响应断言为例子，就是判断这个接口是否执行成功，若不成功，则在察看结果树里面会看到该接口标记为红色，若断言放在线程组目录下，则对所有接口断言，若放在单个接口下面，则对该接口断言<br>
<img src="/assets/img/blog/abouttest/jmeter2/assert_create.jpg" height = "300px"/>
<img src="/assets/img/blog/abouttest/jmeter2/assert_create_detail.jpg" height = "300px"/><br>
上图的意思就是如果接口返回值里面包含"message":"success"文本，则断言成功，否则失败。下图是断言后执行效果，绿色是断言成功，红色是断言失败<br>
<img src="/assets/img/blog/abouttest/jmeter2/assert_result.jpg" height = "300px"/>



