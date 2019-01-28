---
layout: post
title: Android JNI—数据类型及对JNI理解
date:  2018-03-07 18:22:00 +0900  
description: Android JNI——数据类型及对JNI理解
img: post-9.jpg # Add image post (optional)
tags: [Android,JNI]
author: # Add name author (optional)
androidoriginal: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

本节主要介绍下JNI的**函数命名及参数说明，数据类型对应关系，描述符及对JNI的理解**。

JNI Java Native Interface（Java本地接口）。做JAVA或者Android的朋友可能会接触到JNI的开发，特别是涉及到音视频、与硬件设备有交互的时候、封装一些复杂逻辑或者算法、上层处理性能跟不上等情况下。JNI开发偏底层开发，编译出来的库的后缀为.so，它也更安全更难破解。JNI开发需要懂C/C++，可基于Android Studio、Eclipse，VS等开发工具进行开发，一般由C/C++开发者进行开发并且支持Android，IOS平台。若你又精通Android上层开发，又精通JNI底层开发,那你的级别又将上升一个档次。

## **1. 函数命名及参数说明** ##
第一篇文章提到过静态注册和动态注册，若是静态注册，则命名需要为固定格式，动态注册则不需要，这里以静态注册方式来说：
>JNIEXPORT jstring JNICALL Java_com_leachchen_testjni_MainActivity_testMethod(JNIEnv \*env, jobject instance, jstring name_)

### **a.函数参数** ###
Java是函数的前缀，com_leachchen_testjni_MainActivity是函数所在类路径，testMethod是方法名；<br>

第一个参数：JNIEnv* 是定义任意native函数的第一个参数（包括调用JNI的RegisterNatives函数注册的函数），指向JVM函数表的指针，函数表中的每一个入口指向一个JNI函数，每个函数用于访问JVM中特定的数据结构。

第二个参数：调用java中native方法的实例或Class对象，如果这个native方法是实例方法，则该参数是jobject，如果是静态方法，则是jclass

第三个参数：Java对应JNI中的数据类型，Java中String类型对应JNI的jstring类型。

### **b.函数返回值** ###
JNIEXPORT和JNICALL宏中间的jstring，表示函数的返回值类型，对应Java的String类型

## **2. <a href="http://blog.csdn.net/xyang81/article/details/42047899" style="text-decoration: none;" target="\_blank"  title="点击前往">数据类型对应关系:</a>** ##   
在调用Java native方法将实参传递给C/C++函数的时候，会自动将java形参的数据类型自动转换成C/C++相应的数据类型，所以我们在写JNI程序的时候，必须要明白它们之间数据类型的对应关系。

### **a.基本数据类型** ###

Java Type | Native type | Description
:-: | :-: | :-:
boolean  | jboolean| unsigned 8 bits
byte | jbyte | signed 8 bits
char | jchar | unsigned 16 bits
short | jshort | signed 16 bits
int | jint | signed 32 bits
long | jlong | signed 64 bits
float | jfloat | 32 bits
double | jdouble | 64 bits

### **b.引用类型** ###

Java Type | Native type | Description
:-: | :-: | :-:
all object  | jobject|
java.lang.Class instances | jstring |
arrays | jarray |
Object[] | jobjectArray |
boolean[] | jbooleanArray |
byte[] | jbyteArray |
char[] | jcharArray |
int[] | jintArray |
long[] | jlongArray |
float[] | jfloatAyyay |
double[] | jdoubleArray |
java.lang.Throwable Objects | jthrowable |

## **3. <a href="http://blog.csdn.net/likuan0214/article/details/52584785" style="text-decoration: none;" target="\_blank"  title="点击前往">描述符</a>** ##  
### **a.类描述符** ###
类描述符用来表示一个类或者接口的名字。把类或者接口在java中所定义的完整名称中的"."替换成"/"就是类描述符。<br>
比如java.lang.String的类描述符为：**java/lang/string**<br>
数组类的描述符：在"["后面跟着数组元素的类型的字段描述符,如：<br>
**"int[]"**的类描述符为：**"[I"**<br>
**"double[][][]"**的类描述符为：**"[[[D"**<br>

#### **b.字段描述符:** ####

Java Type | Native type | Description
:-: | :-: | :-:
boolean  | Z|
byte | B |
char | C |
short | S |
int | I |
long | J |
float | F |
double | D |

引用类型的字段描述符的第一个字符是”L”，接着写类描述符，最后以”;”结尾。<br>
数组类型的字段描述符的定义规则和数组类描述符一致。 <br>
下面的例子是引用类型的字段描述符和他们相对应的java类型：<br>

Java Type | Native type | Description
:-: | :-: | :-:
String  | "Ljava/lang/String;"|
int[] | "[I" |
Object[] | "[Ljava/lang/Object;" |

### **c.方法描述符** ###
- 方法描述符首先在”()”中写所有的参数类型的字段描述符，然后在”()”后面接着写返回类型的字段描述符。
- 并且在参数类型的字段描述符之间不能有空格或者其他分隔符。
- "V"用来表示没有返回类型。
- 构造函数使用”V”做为返回类型，并且使用”< init>”做为函数名。

Java Type | Native type | Description
:-: | :-: | :-:
String f();  | 	"()Ljava/lang/String;"|
long f(int i, Class c); | "(ILjava/lang/Class;)J" |
String(byte[] bytes); | 	"([B)V" |

## **4. 理解** ##   
### **a.函数参数 (JNIEnv \*env, jobject instance )理解** ###
基本类型很容易理解，就是对C/C++中的基本类型用typedef重新定义了一个新的名字，在JNI中可以直接访问。
JNI把Java中的所有对象当作一个C指针传递到本地方法中，这个指针指向JVM中的内部数据结构，而内部的数据结构在内存中的存储方式是不可见的。只能从JNIEnv指针指向的函数表中选择合适的JNI函数来操作JVM中的数据结构。如访问java.lang.String对应的JNI类型jstring时，没有像访问基本数据类型一样直接使用，因为它在Java是一个引用类型，所以在本地代码中只能通过GetStringUTFChars这样的JNI函数来访问字符串的内容。如：
>testMethod(JNIEnv \*env, jobject instance, jstring name_)

Java内部的数据结构（除基本数据类型外）对JNI来说是不可见的，如上面函数中，Java传递过来了一个字符串类型的name_变量，name_变量在JVM中的数据结构对JNI来说是不可见的，那JNI如何访问到这个变量呢？\*env指针指向的函数表中的GetStringUTFChars变能访问到JVM中的数据结构，调用GetStringUTFChars可以获取到该字符串的值，然后再赋值给JNI中的变量，这样便完成了JAVA-》JNI的一个传值过程。若JNI想返回一个字符串给JAVA，那么需要调用NewStringUTF，将JNI中的字符串，包装成符合JAVA字符串数据结构，的字符串，然后返回JVM便能够识别到了。

jobject instance<br>
如果native方法不是static的话，这个obj就代表这个native方法的类实例
如果native方法是static的话，这个obj就代表这个native方法的类的class对象实例(static方法不需要类实例的，所以就代表这个类的class对象)

### **b.调用GetStringUTFChars后需要调用ReleaseStringUTFChars** ###
在调用GetStringUTFChars函数从JVM内部获取一个字符串之后，JVM内部会分配一块新的内存，用于存储源字符串的拷贝，以便本地代码访问和修改。即然有内存分配，用完之后马上释放是一个编程的好习惯。通过调用ReleaseStringUTFChars函数通知JVM这块内存已经不使用了，你可以清除了。注意：这两个函数是配对使用的，用了GetXXX就必须调用ReleaseXXX，而且这两个函数的命名也有规律，除了前面的Get和Release之外，后面的都一样。
