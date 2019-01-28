---
layout: post
title: Smali 语法一
date:  2018-07-26 10:30:00 +0900
description: Smali 语法一
img: post-7.jpg # Add image post (optional)
tags: [逆向]
author: # Add name author (optional)
hacker: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

**主要摘记Smali相关语法**  <br>

分两篇博客来记录，第一篇是比较全面的介绍，第二篇主要记录与smali操作相关的指令

<a href="https://blog.csdn.net/u012573920/article/details/44034397" style="text-decoration: none;" target="\_blank"  title="">本博文参考至</a> 我觉得写得比较好就直接套过来了,<Android软件安全与逆向分析>3.2.5章节也有类似介绍 <br>


###  (1)数据类型 ###
dalvik字节码有两种类型，原始类型和引用类型。对象和数组是引用类型，其它都是原始类型。

**基本类型的表示形式：**<br>
smali数据类型都是用一个字母表示，如果你熟悉Java的数据类型，你会发现表示smali数据类型的字母其实是Java基本数据类型首字母的大写，除boolean类型外，在smail中用大写的”Z”表示boolean类型。

| 类型 | 描述 |
| - | :-: |
| V | void，只能用于返回值类型 |
| Z | boolean |
| B | byte |
| S | short |
| C | char |
| I | int |
| J | long (64 bits) |
| F | float |
| D | double (64 bits) |
| L | Java类型 |
| [ | 数组类型 |
对象以Lpackage/name/ObjectName;的形式表示。前面的L表示这是一个对象类型，package/name/是该对象所在的包，ObjectName是对象的名字，“;”表示对象名称的结束。相当于java中的package.name.ObjectName。

例如：Ljava/lang/String;相当于java.lang.String


**数组的表示形式：**<br>
[I——表示一个整型一维数组，相当于java中的int[]。 对于多维数组，只要增加[就行了。[[I相当于int[][]，[[[I相当于int[][][]。注意每一维的最多255个。

**对象数组的表示：**<br>
[Ljava/lang/String;表示一个String对象数组。

### (2)方法 ###

方法通常必须详细的指定方法类型（？the type that contains the method） 方法名，参数类型，返回类型，所有这些信息都是为虚拟机是能够找到正确的方法并执行。

方法表示形式：Lpackage/name/ObjectName;->MethodName(III)Z

在上面的例子中，Lpackage/name/ObjectName;表示类型，MethodName是方法名。III为参数（在此是3个整型参数），Z是返回类型（bool型）。

方法的参数是一个接一个的，中间没有隔开。

一个更复杂的例子：method(I[[IILjava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

在java中则为：String method(int, int[][], int, String, Object[])

一个比较全面的例子：

```
.class public interface abstract Lcom/kit/network/CachableImage;
.super Ljava/lang/Object;
.source "SourceFile"

# virtual methods
.method public abstract getIsLarge()Z
.end method
.method public abstract getUrl()Ljava/lang/String;
.end method

.method public abstract getViewContext()Landroid/content/Context;
.end method

.method public abstract setBitmap(Landroid/graphics/Bitmap;Z)V
.end method
.method public abstract setIsLarge(Z)V
.end method
.method public abstract setUrl(Ljava/lang/String;)V
.end method

```

上面的smali代码还原后的java代码为：

```
//#注：在实际代码中我们还必须引入相关的包
import android.content.Context;
import android.graphics.Bitmap;

public interface CachableImage {

	public abstract boolean getIsLarge();

	public abstract String getUrl();

	public abstract Context getViewContext();

	public abstract void setBitmap(Bitmap bitmap);

	public abstract void setIsLarge(boolean islarge);

	public abstract void setUrl(String url);
}
```


### (3)字段 ###
表示形式：Lpackage/name/ObjectName;->FieldName:Ljava/lang/String;即包名，字段名和各字段类型。例如:
```
.field private _requestLayout:Z

.field public isLarge:Z

.field public resize:Z

.field public thumbnailSize:I

.field public url:Ljava/lang/String;
```

上面的smali代码还原后的java代码为：

```
public boolean _requestLayout;
public boolean isLarge;
public boolean resize;
public int thumbnailSize;
public String url;
```

### (4)示例 ###

新建一个HelloWorld安卓项目，在MainActivity中只保留onCreate函数。代码如下：
```
package com.fusijie.helloworld;
  import android.app.Activity;
  import android.os.Bundle;
  public class MainActivity extends Activity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.activity_main);
  }
 }
```

反编译后的Smali文件如下：

```
.class public Lcom/fusijie/helloworld/MainActivity;
  .super Landroid/app/Activity;
  .source "MainActivity.java"
  # direct methods
  .method public constructor ()V
    .locals 0
    .prologue
    .line 14
    invoke-direct {p0}, Landroid/app/Activity;->()V
    return-void
  .end method
  # virtual methods
  .method protected onCreate(Landroid/os/Bundle;)V
    .locals 1
    .parameter "savedInstanceState"
    .prologue
    .line 18
    invoke-super {p0, p1}, Landroid/app/Activity;->onCreate(Landroid/os/Bundle;)V
    .line 19
    const/high16 v0, 0x7f03
    invoke-virtual {p0, v0}, Lcom/fusijie/helloworld/MainActivity;->setContentView(I)V
    .line 20
    return-void
  .end method
```

对比一下，可以比较清楚的看出来，smali代码其实就是对java代码一个翻译，只是没有java看起来那么简单，smali把很多应该复杂的东西还原成复杂的状态了。简单解释下这段代码。
```
前三行指明了类名，父类名，和源文件名。
类名以“L”开头相信熟悉Jni的童鞋都比较清楚。
“#”是smali中的注释。
“.method”和“.end method”类似于Java中的大括号，包含了方法的实现代码段。
方法的括号后面指明了返回类型，这同样类似与Jni的调用。
“.locals”指明了这个方法用到的寄存器数量，当然寄存器可以重复利用，从“V0”起算。
“.prologue”指定了代码开始处。
“.line”表明这是在java源码中的第几行，其实这个值无所谓是多少，可以任意修改，主要用于调试。
“invoke-direct”这是对方法的调用，可以看到这里调用了是Android.app.Activity的init方法，这在java里是隐式调用的。
“return-void”表明了返回类型，这和java不一样，即使没有返回值，也需要这样写。
接下来是onCreate方法，“.parameter”指明了参数名，但是一般没有用，需要注意的是p0代表的是this，p1开始代表函数参数，静态函数没有this，所以从p0开始就代表参数。
在实现里先是调用了父类的方法，然后再调用setContentView，注意这里给了一个传参。整形的传参，这个值是先赋给寄存器v0，然后再调用的使用传递进去的。smali中都是这么使用，所有的值必须通过寄存器来中转。这点和汇编很像。
```
对比了Java代码和Smali代码，可以很清楚的看到，原本只有几行的代码到了Smali，内容被大大扩充了。Smali还原了Java隐藏的东西，同时显式地指定了很多细节。这还只是个最基本的HelloWorld的onCreate函数，如果有内部类，还会分文件显示。

### (5)动手尝试 ###

了解了Smali的基本语法，那我们要动手试一下，Smali能做什么？仍然以HelloWorld为例，假如我们没有Android项目的源代码，只有一个APK，给他加个新功能吧！

这个功能很简单，只是在HelloWorld中输出一个“Hello, Smali”。

(1)第一步还是先使用apktool来反编译HelloWorld.apk。

(2)打开smali下的com/fusijie/helloworld/MainActivity.smali文件。

(3)原本我们在Java中要写的代码是：

```
Toast.makeText(this, "Hello, Smali", Toast.LENGTH_LONG).show();
```

翻译成Smali就是：

```
.line xx
   const-string v0, "Hello, Smali"
   const/4 v1, 0x1
   invoke-static {p0, v0, v1}, Landroid/widget/Toast;->makeText(Landroid/content/Context;Ljava/lang/CharSequence;I)Landroid/widget/Toast;
   move-result-object v0
   invoke-virtual {v0}, Landroid/widget/Toast;->show()V
```

(4)最后在插入Smali的时候，我们需要修改2个地方：

“.locals 1”，因为本来只用到了v0，现在多用了一个v1，所以改为“.locals 2”。<br>
“.line xx” xx随意改为一个不重复的值即可。

(5)使用apktool打包成apk，因为打包完后原有的密钥会丢失，所以需要重新打上我们自己的密钥
