---
layout: post
title: Github+Jekyll 搭建个人网站详细教程
date:  2018-02-10 12:54:00 +0900 
description: Hello World！
img: post-2.jpg # Add image post (optional)
tags: [Jekyll,GitHub]
author: # Add name author (optional)
jekyll: true
---
GitHub搭建个人网站，大家在网上一搜能搜到一大把的教程，但是大部分都讲的差不多，并不能满足自己想搭建的网站详细需求。我之前在搭建本站的时候也是查了较多资料，学习了下jekyll语法，参考了几个主题模板，才把符合我需求网站搭建出来。那么今天我将详细介绍下本站从**github代码托管，jekyll安装，jekyll目录结构，jekyll基本语法，jekyll主题选择，jekyll主题修改，网站子功能整入**的详细过程。顺便当作自己记录下吧，防止以后忘记了。

GitHub搭建个人网站可基于jekyll或者hexo或者其它的，我看官方提供的主题jekyll更多，样式也更好看，而且能直接链接到源码主页，所以我选择的基于jekyll搭建的，若不明白jekyll是什么东西，别急，后面会解释到，下面开始讲解本站的搭建过程。

## **第一步 网站托管**<br> ##
我们知道，一个网站要能够在任何地方都能够被访问，那么需要部署到服务器上。其实github就提供了这样的功能，只要按照github格式要求，新建一个仓库，把你的网站代码上传到里面，那么就可以在任何时候任何地方都能够访问了，那么如何搭建这个代码托管仓库呢？<br>
可参考<a href="https://pages.github.com/" style="text-decoration: none;" target="_blank" title="代码托管">官方链接</a>，我这也把步骤写出来。<br><br>
**1.**首先你要到<a href="https://github.com/" style="text-decoration: none;" target="_blank" title="点击前往">GitHub</a>上注册一个账号,例如我注册的用户名为：leach-chen（用户名可以在设置里改）<br><br>
**2.**点击New repository-->输入仓库名称格式为：用户名.github.io(如：leach-chen.github.io)->点击Create repository<br>
<img src="/assets/img/blog/jekyll/jekyll_github/1.png" width = "300px" height = "300px" style="float:left"/>

<img src="/assets/img/blog/jekyll/jekyll_github/2.png" width = "300px" height = "300px"/><br>
**3.**浏览器里访问<a href="https://leach-chen.github.io/" style="text-decoration: none;" target="_blank"  title="点击前往">https://leach-chen.github.io/</a>,可以发现这个url可以被访问了，你可以把改仓库拉取到本地，然后在里面现在一个index.html,在里面输入任意内容，然后再把代码推送到git上，然后再访问改链接，可以发现index.html里面的内容被访问到了。<br><br>
到这里，一个免费且无限流量的github代码托管仓库就创建完成了。
## **第二步 Jekyll安装**<br> ##
首先解释下什么是jekyll，jekyll相当于一个编译工具，安装好jekyll后，你可以通过jekyll创建一个网站模板，创建好之后，我们就可以通过http://127.0.0.1:4000/访问刚刚创建的网站了（具体jekyll用法后面再介绍），我们可以实时修改刚刚创建的模板里面的内容，并可以实时通过本地url预览改动后的效果。我们把这个博客推送到上一步创建的代码仓库里，再通过<a href="https://leach-chen.github.io/" style="text-decoration: none;" target="_blank"  title="点击前往">https://leach-chen.github.io/</a>就可以访问到博客里面的内容了。有了Jekyll，我们不用每次改动一点点就把代码推送到仓库中进行预览，而是本地就可以预览。GitHub支持jekyll，hexo等语法解析。

那么如何安装jekyll呢？我这边只讲解windows下的安装步骤。

未完待续.................
