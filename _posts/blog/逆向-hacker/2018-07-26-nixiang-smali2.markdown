---
layout: post
title: Smali 语法二
date:  2018-07-26 10:55:00 +0900
description: Smali 语法二
img: post-5.jpg # Add image post (optional)
tags: [逆向]
author: # Add name author (optional)
hacker: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}


1. **.method和.end method**
```
类似于Java中的大括号，包含了方法的实现代码段。
```

1. **.locals**
```
指明了这个方法用到的寄存器数量，当然寄存器可以重复利用，从“V0”起算
使用这个指定表明方法中非参寄存器的总数，放在方法的第一行。
```

1. **.registers**
```
 使用这个指令指定方法中寄存器的总数
```

1. **v、p0、p1**
```
public void int foo(int a,int b)
{
  return (a+b)*(a-b);
}
v命名法采用以小写字母v开头的方式表示函数中用到的局部变量与参数，所有的寄存器命名从v0开始，v0,v1用来表示函数的局部变量寄存器，v2表示传入的对象引用，v3，v4表示两个传入的整形参数
p命名法，v0,v1用来表示函数的局部变量寄存器，p0表示传入的对象的引用，p1，p2分别表示传入的两个整形参数
p0代表的是this，p1开始代表函数参数，静态函数没有this，所以从p0开始就代表参数
```

1. **.prologue**
```
指定了代码开始处
```

1. **.line**
```
表明这是在java源码中的第几行，其实这个值无所谓是多少，可以任意修改，主要用于调试
```

1. **invoke-direct**
```
这是对方法的调用，可以看到这里调用了是Android.app.Activity的init方法，这在java里是隐式调用的
```

1. **.parameter**
```
指明了参数名
```

1. **return-void**
```
返回类型
```

1. **invoke-static**
```
用于调用static函数,invoke-static后面有一对大括号“{}”，其实是调用该方法的实例+参数列表
invoke-static {v3,v0}, Landroid/util/log;->v(Ljava/lang/String;Ljava/lang/String;)
```

1. **invoke-virtual**
```
用于调用protected或public函数，同样注意修改smali时不要错用invoke-direct或invoke-static
invoke-virtual {v1}, Landroid/app/Activity;->getApplicationContext()Landroid/content/Context;
```

1. **invoke-direct**
```
调用private函数
invoke-direct {v0, v4}, Lcom/android/server/LightsService;-><init>(Landroid/content/Context;)V
```

1. **invoke-super**
```
调用父类方法用的指令，一般用于调用onCreate、onDestroy等方法。
invoke-super {p0, p1}, Landroid/preference/PreferenceActivity;->onCreate(Landroid/os/Bundle;)V    //p0：this，p1：Bundle
invoke-super {p0, p1, p2}, Landroid/view/View;->onKeyUp(ILandroid/view/KeyEvent;)Z
invoke-super {p0, p1}, Landroid/app/Activity;->onCreate(Landroid/os/Bundle;)V
```

1. **invokeinterface**
```
调用接口方法，调用的方法运行时确认实际调用，即会在运行时才确定一个实现此接口的对象。
```

1. **const**
```
const v0, 0x7f04001b  //将值0x7f04001b 放入寄存器v0
const/4 v2, 0x1       //4字节常量   v2=1
```

1. **new-instance**
```
新建一个实例
new-instance v1, Lcom/droider/crackme0502/MainActivity$1; #新建一个MainActivity$1实例  
invoke-direct {v1, p0}, Lcom/droider/crackme0502/MainActivity$1;-><init>(Lcom/droider/crackme0502/MainActivity;)V # 初始化MainActivity$1实例  
```

1. **iput-object**
```
对象赋值
iput-object v1, p0, Lcom/leachchen/testnixiang/MainActivity;->tree:Lcom/leachchen/testnixiang/Tree;  相当于tree = new Tree(); tree是类成员变量
```
1. **iget-object**
```
调用对象
iget-object v1, p0, Lcom/leachchen/testnixiang/MainActivity;->tree:Lcom/leachchen/testnixiang/Tree; 相当于获取到tree对象
invoke-virtual {v1}, Lcom/leachchen/testnixiang/Tree;->go()V  相当于调用Tree类的go方法，tree.go();
```

1. **if-eq vA, vB, :cond_**
```
如果vA等于vB则跳转到:cond_
```

1. **if-ne vA, vB, :cond_**
```
如果vA不等于vB则跳转到:cond_**
```

1. **if-lt vA, vB, :cond_**
```
如果vA小于vB则跳转到:cond_**
```

1. **if-ge vA, vB, :cond_**
```
如果vA大于等于vB则跳转到:cond_**
```

1. **if-gt vA, vB, :cond_**
```
如果vA大于vB则跳转到:cond_**
```

1. **if-le vA, vB, :cond_**
```
如果vA小于等于vB则跳转到:cond_**
```

1. **if-eqz vA, :cond_**
```
如果vA等于0则跳转到:cond_**
```

1. **if-nez vA, :cond_**
```
如果vA不等于0则跳转到:cond_**
```

1. **if-ltz vA, :cond_**
```
如果vA小于0则跳转到:cond_**
```

1. **if-gez vA, :cond_**
```
如果vA大于等于0则跳转到:cond_**
```

1. **if-gtz vA, :cond_**
```
如果vA大于0则跳转到:cond_**
```

1. **if-lez vA, :cond_**
```
如果vA小于等于0则跳转到:cond_**
```

1. **sput-boolean**
```
Puts boolean value in vx into a static field.
```
