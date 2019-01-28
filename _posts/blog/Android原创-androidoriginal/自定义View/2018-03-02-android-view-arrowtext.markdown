---
layout: post
title: Android自定义View—带箭头文本
date:  2018-03-02 13:36:00 +0900
description: Android自定义View之带箭头文本
img: post-11.jpg # Add image post (optional)
tags: [Android,自定义view]
author: # Add name author (optional)
androidoriginal: true
category: blog
---
本章将讲解下如何自定义一个带箭头指向的TextView,很简单，先看下效果

<img src="/assets/img/blog/androidoriginal/arrowtextview/preview.jpg" height = "300px"/>

那么如何实现呢？

1. 既然是文本，那么我们就新建一个类继承TextView；

2. 上图中TextView区域实际为颜色灰色的区域，我们需要框定出一个圆角矩形的文本显示区域，可用如下方式：

    canvas.drawRoundRect(new RectF(getPaddingLeft() - 20,getPaddingTop() - 20,width - getPaddingRight() + 20,height - getPaddingBottom()+20),30,30,paint);

	其中加20，-20是让文本在圆角矩形内缩进，否则文本是紧贴着圆角矩形边框的；

3. 三角指示器绘制，我们需要在布局里给该文本设置内边距，该边距要能放下三角指示器，否则圆角矩形填满TextView，三角指示器就没有空间显示了，然后利用Path进行描点绘制三角指示器就可以了；

**全部代码：**

    public class ArrowTextView extends TextView{

    public ArrowTextView(Context context) {
        super(context);
    }

    public ArrowTextView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public ArrowTextView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        Paint paint = new Paint();
        paint.setAntiAlias(true);   //设置画笔抗锯齿
        paint.setStrokeWidth(2);    //设置线宽
        paint.setColor(Color.WHITE);  //设置线的颜色

        int height = getHeight();   //获取View的高度
        int width = getWidth();     //获取View的宽度

        //框定文本显示的区域
        canvas.drawRoundRect(new RectF(getPaddingLeft() - 20,getPaddingTop() - 20,width - getPaddingRight() + 20,height - getPaddingBottom()+20),30,30,paint);

        Path path = new Path();

        //以下是绘制文本的那个箭头
        path.moveTo(width / 2, height);// 三角形顶点
        path.lineTo(width / 2 - 20, height - getPaddingBottom());   //三角形左边的点
        path.lineTo(width / 2 + 20, height - getPaddingBottom());   //三角形右边的点

        path.close();
        canvas.drawPath(path, paint);
        super.onDraw(canvas);
    }
}

**布局代码：**

    <?xml version="1.0" encoding="utf-8"?>
	<android.support.constraint.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#000000"
    tools:context="com.example.testview.Activity.ArrowTextViewActivity">

    <com.example.testview.View.ArrowTextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textColor="#000000"
        android:padding="20dp"
        android:text="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        android:background="#666666"
        />

	 </android.support.constraint.ConstraintLayout>

源码参考samples里面的TestView
<h1><a href="https://github.com/leach-chen/TestProject/tree/master/samples/TestView" style="text-decoration: none;" target="_blank" title="源码下载">源码下载</a><h1>
