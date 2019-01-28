---
layout: post
title: Android 事件传递机制
date:  2018-04-08 15:57:00 +0900
description: Android 事件传递机制
img: post-1.jpg # Add image post (optional)
tags: [Android,自定义view]
author: # Add name author (optional)
androidoriginal: true
category: blog
---

## **事件传递机制** ##

事件传递机制，简洁概括如下，建议代码里面打log看调用顺序。

**1. dispatchTouchEvent**<br>
事件分发函数，return false事件向下分发，return true，事件不向下，也不向上分发了，到该层控件的onTouchEvent（反复执行）<br>
重写该函数的话需要调用super，否则事件不会分发出去

**2. onInterceptTouchEvent**<br>
负责事件是否向下传递，事件拦截函数，return false 不拦截事件，事件继续向下传递，return true拦截事件，事件不向下传递，从该层控件开始向上传递，直到Activity的onTouchEvent（反复执行）<br>
那这个函数一般什么时候用呢？一般是在一个可以滑动的列表里，有时事件需要让子控件处理时（requestDisallowInterceptTouchEvent），就要用到

**3. onTouchEvent**<br>
负责事件是否向上传递，return false事件继续向下传递,最终到Activity的onTouchEvent，return true消费事件，事件不继续向上传递及向下传递，反复循环执行该控件的onTouchEvent


如下，在布局里第一层放了一个LinearLayout，第二层也放了一个LinearLayout，第三层放了个TextView

```
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context="com.example.testeventpass.MainActivity">

    <com.example.testeventpass.MyLinearLayout
        android:layout_width="match_parent"
        android:layout_height="300dp"
        android:background="@color/colorPrimaryDark"
        android:gravity="center"
        android:layout_margin="20dp"
        >

        <com.example.testeventpass.MyLinearLayoutOther
            android:layout_width="match_parent"
            android:layout_height="200dp"
            android:background="#999999"
            android:gravity="center"
            android:layout_margin="20dp"
            >

            <com.example.testeventpass.MyTextView
                android:layout_width="150dp"
                android:layout_height="150dp"
                android:layout_gravity="center"
                android:background="@color/colorAccent"
                android:gravity="center"
                />
        </com.example.testeventpass.MyLinearLayoutOther>

    </com.example.testeventpass.MyLinearLayout>
</FrameLayout>
```

**a.默认返回值方式**

<img src="/assets/img/blog/androidoriginal/view/eventpass/first.jpg" height = "300px"/>

**b.dispatchTouchEvent 返回true**

<img src="/assets/img/blog/androidoriginal/view/eventpass/second.jpg" height = "300px"/>

**c.onInterceptTouchEvent 返回true**

<img src="/assets/img/blog/androidoriginal/view/eventpass/third.jpg" height = "300px"/>

**d.onTouchEvent 返回true**

<img src="/assets/img/blog/androidoriginal/view/eventpass/four.jpg" height = "300px"/>



```
    @Override
   public boolean onInterceptTouchEvent(MotionEvent ev) {
       Log.e("mytestt","..........MyLinearLayout onInterceptTouchEvent run");

       switch (ev.getAction())
       {
           case MotionEvent.ACTION_DOWN:
               Log.e("mytestt","MotionEvent.ACTION_DOWN");
              return true;
           case MotionEvent.ACTION_MOVE:
               Log.e("mytestt","MotionEvent.ACTION_MOVE");
               return false;
           case MotionEvent.ACTION_UP:
               Log.e("mytestt","MotionEvent.ACTION_UP");
               return false;
       }

       boolean value =  super.onInterceptTouchEvent(ev);
       Log.e("mytest","MyLinearLayout onInterceptTouchEvent:"+value);
       return true;
   }

   @Override
   public boolean onTouchEvent(MotionEvent event) {
       Log.e("mytestt","..........MyLinearLayout onTouchEvent run");

       switch (event.getAction())
       {
           case MotionEvent.ACTION_DOWN:
               Log.e("mytestt","onTouchEvent MotionEvent.ACTION_DOWN");
               return true;
           case MotionEvent.ACTION_MOVE:
               Log.e("mytestt","onTouchEvent MotionEvent.ACTION_MOVE");
               return false;
           case MotionEvent.ACTION_UP:
               Log.e("mytestt","onTouchEvent MotionEvent.ACTION_UP");
               return false;
       }

       boolean value =  super.onTouchEvent(event);
       Log.e("mytest","MyLinearLayout onTouchEvent:"+value);
       return value;
   }
```

在上述代码在MyLinearLayout中，onInterceptTouchEvent在ACTION_DOWN时return true，则事件向下传不到MyLinearLayoutOther,若在ACTION_MOVE或者ACTION_UP中return true，则不起作用，事件依然向下传递。<br>
onTouchEvent在ACTION_DOWN时return true，则事件向上传不到MainActivity,若在ACTION_MOVE或者ACTION_UP中return true，则不起作用，事件依然向上传递。




源码参考samples里面的TestEventPass
<h1><a href="https://github.com/leach-chen/TestProject/tree/master/samples/TestEventPass" style="text-decoration: none;" target="_blank" title="源码下载">源码下载</a><h1>
