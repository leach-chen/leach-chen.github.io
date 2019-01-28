---
layout: post
title: 破解预防
date:  2018-07-26 10:56:00 +0900
description: 破解预防
img: post-4.jpg # Add image post (optional)
tags: [逆向]
author: # Add name author (optional)
hacker: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}


**主要记录预防破解的一些思路**  <br>

持续更新...

首先，完全避免破解是不可能的，我们能做的工作就是尽最大可能去妨碍破解者破解游戏，提高破解成本。

一定要使用混淆。不单单是第三方SDK，你的代码也是。破解游戏很重要一点就是要抓住游戏的逻辑。代码混淆后，Smali更加晦涩难懂，逻辑也更难掌握。
回到开头的话，解读汇编比解读Smali难度大的多得多。所以重要的逻辑可以放到C/C++层去处理就不要放在Java层上去处理。
多用连续调用的方式。这样出来的效果是Java只有一行，Smali可能有好几十行，看着都蛋疼。当然这对熟练的破解老手无效～
在一些关键的点上，比如支付，多绕一下。

禁止代理抓包

加壳

底层做签名校验

代码混淆

取消接口json打印

反调试

1：上层做防签名篡改或者底层做防签名篡改（底层更安全）
2：应用smali代码防调式处理
3：接口禁止抓包
4：第三方加固
5：关键逻辑结果处理复杂些不要最终通过true或者false来判断
6：删除日志模块
7：代码混淆
8：自己对dex文件做加固处理
9：避免string关键字找到代码位置
