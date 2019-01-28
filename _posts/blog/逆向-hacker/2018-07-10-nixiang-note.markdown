---
layout: post
title: 逆向笔记
date:  2018-07-10 20:10:00 +0900
description: 逆向笔记
img: post-1.jpg # Add image post (optional)
tags: [逆向]
author: # Add name author (optional)
hacker: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}


**概念**  <br>
```
反编译后生成smali格式的反编译代码，然后阅读smali文件的代码来理解程序的运行机制，找到突破口，进行修改，最后使用APKTool重新编译生成APK文件，并签名。

使用apktool反编译后所有的索引值保存在string.xml文件同目录下的public.xml文件中

Smali是Dalvik的寄存器语言

Java 虚拟机运行的是Java字节码，Dalvik虚拟机运行的是Dalvik字节码，传统java程序经过编译，生成java字节码保存在class文件中，java虚拟机通过解码class文件中的内容来运行程序，而Dalvik虚拟机运行的是Dalvik字节码，所有的Dalvik字节码由java字节码转换而来，被打包到一个Dex可执行文件中，Dalvik虚拟机通过解释DEX文件来执行这些字节码。

```


**apktool-反编译**  <br>
```
apktool 地址：https://ibotpeaches.github.io/Apktool/

apktool d -f apk路径 -o 输出路径

apktool d -f D:\test.apk -o D:\MyPart\nixiang\fanbianyi\test
```

**apktool-回编**  <br>
```
apktool b 反编译出来的包路径 -o 输出路径的apk路径

apktool b D:\MyPart\nixiang\fanbianyi\test -o D:\MyPart\nixiang\fanbianyi\a.apk
```

**密钥库文件生成** <br>
```
keytool -genkey -alias test.keystore -keyalg RSA -validity 20000 -keystore  test.keystore

其中，-genkey表示生成密钥，-alias表示密钥别名，-keyalg表示密钥的算法，-validity表示有效期，-keystor表示生成文件的名字
之后会提示输入相应的信息，输入后按Y确认即可。
```


**签名**  <br>
```
jarsigner -verbose -keystore test.keystore -signedjar testapk_signed.apk testapk.apk  test.keystore的别名（alias）

jarsigner -verbose -keystore D:\test.key  -signedjar D:\testapk_signed.apk D:\MyPart\nixiang\fanbianyi\a.apk test

-verbose表示显示出签名详细信息
-keystore表示使用当前目录中的test.keystore签名证书文件。
-signedjar testapk_signed.apk表示签名后生成的APK名称

testapk.apk表示未签名 的APK

test..keystore表示密钥的别名
```

**生成Dex**

```
javac Hello.javac

dx --dex --output=Hello.dex Hello.class

这样很可能生成不出dex文件来

出现：
trouble processing:
bad class file magic (cafebabe) or version (0034.0000)
...while parsing D:/MyPart/NiXiang/other/Hello.class
...while processing D:/MyPart/NiXiang/other/Hello.class
1 warning
no classfiles specified

解决办法：javac -source 1.6 -target 1.6 Hello.java

出现：
trouble processing:
class name (Hello) does not match path (D:/MyPart/NiXiang/other/Hello.class)
...while parsing D:/MyPart/NiXiang/other/Hello.class
...while processing D:/MyPart/NiXiang/other/Hello.class
1 warning
no classfiles specified

解决办法：如果我们使用javac -source 1.6 -target 1.6 D:\Android\sdkme\build-tools\25.0.1\Hello.java生成class文件并且有警告未设置引导类路径时，生成dex时使用class的相对路径如果我们是用Javac Hello.java生成的class文件，用dx.dat时就要用绝对路径来生成dex文件

出现：
UNEXPECTED TOP-LEVEL EXCEPTION:
java.lang.RuntimeException: Hello.class: file not found
        at com.android.dx.util.FileUtils.readFile(FileUtils.java:55)
        at com.android.dx.cf.direct.ClassPathOpener.processOne(ClassPathOpener.j
ava:134)
        at com.android.dx.cf.direct.ClassPathOpener.process(ClassPathOpener.java
:109)
        at com.android.dx.command.dexer.Main.processOne(Main.java:422)
        at com.android.dx.command.dexer.Main.processAllFiles(Main.java:333)
        at com.android.dx.command.dexer.Main.run(Main.java:209)
        at com.android.dx.command.dexer.Main.main(Main.java:174)
        at com.android.dx.command.Main.main(Main.java:91)
1 error; aborting

解决办法：指定dx.bat路径为指定的版本的


完整生成命令：
javac -source 1.6 -target 1.6 Hello.java

E:\AndroidStudio\sdk\build-tools\25.0.0\dx.bat --dex --output=D:\MyPart\NiXiang\other\Hello.dex Hello.class

```

**反编译dex成smali**

```
之前是用一直报错：java -jar baksmali.jar -o baksmali Hello.dex

Exception in thread "main" com.beust.jcommander.MissingCommandException: Expecte
d a command, got -o
        at com.beust.jcommander.JCommander.parseValues(JCommander.java:725)
        at com.beust.jcommander.JCommander.parse(JCommander.java:304)
        at com.beust.jcommander.JCommander.parse(JCommander.java:287)
        at org.jf.baksmali.Main.main(Main.java:90)

解决方案：baksmali.jar disassemble Hello.dex

```
