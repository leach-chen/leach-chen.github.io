---
layout: post
title: Flutter 基本用法摘记
date:  2018-06-26 17:54:00 +0900  
description: Flutter 基本用法摘记
img: post-2.jpg # Add image post (optional)
tags: [Flutter]
author: # Add name author (optional)
flutter: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

记录用Flutter开发一些基本用法，基于Android Studio,持续更新...

## 控件、布局 ##

**Contain**

```
new Container(
      alignment: Alignment.center,
      margin: new EdgeInsets.only(top: 83.0),
      padding: new EdgeInsets.only(top: 14.0, left: 22.0, bottom: 14.0, right: 22.0),
      child: new Text(
        "Register/Login",
        style: new TextStyle(
          fontSize: 16.0,
          color: const Color(0xffffffff),
        ),
      ),
      decoration: new BoxDecoration(
        color: const Color(0xFF03BEFD),
        borderRadius: BorderRadius.circular(100.0),
      ),
)
```

**Row**

```
new Row(
    mainAxisAlignment: MainAxisAlignment.center,
    crossAxisAlignment: CrossAxisAlignment.center,
    children: <Widget>[
    ],
)
```


**Column**

**Stack**

**Padding**

**Expanded**

```
An Expanded widget must be a descendant of a Row, Column, or Flex, and the path from the Expanded widget to its enclosing Row, Column, or Flex must contain only StatelessWidgets or StatefulWidgets (not other kinds of widgets, like RenderObjectWidgets).

Row(
  children: <Widget>[
    Container( /// 此组件在主轴方向占据48.0逻辑像素
      width: 48.0
    ),
    Expanded(
      child: Container() /// 此组件会填满Row在主轴方向的剩余空间，撑开Row
    )
  ]
)
```

See also:

不强制子组件填满可用空间的Flexible。
布局组件目录。


**SingleChildScrollView**
```
类似ScrollView
```

**Text**

```
new Text(
    "Register/Login",
    style: new TextStyle(
      fontSize: 16.0,
      color: const Color(0xffffffff),
    ),
)
```
**TextField**

```
new TextField(
  style: new TextStyle(color: Colors.white),
  decoration: InputDecoration(
      hintText: "Enter your email",
      hintStyle:new TextStyle(fontSize: 12.0,color: Colors.grey),
      border: InputBorder.none, //去掉边框
     /* labelText: "Email",  //编辑框对应的标签名称，就是点击编辑框，文字会上浮的那个
      labelStyle:new TextStyle(color: const Color(0xFF424242)),*/
  )
)
```


**Image**






## 函数、参数 ##

**Row,Column->MainAxisAlignment**
```
MainAxisAlignment.spaceBetween  //假设有1-2-3三个图片,居中，左边到1的间距，3到右边的间距为0，1-2,2-3之间间距相同

MainAxisAlignment.spaceAround  //假设有1-2-3三个图片,居中，1-2,2-3之间间距相同，且左边到1的间距，3到右边的间距的一半

MainAxisAlignment.spaceEvenly   //假设有1-2-3三个图片，居中，图片间距等值分配

MainAxisAlignment.start       //假设有1-2-3三个图片,居中及靠左，图片间距为0

MainAxisAlignment.end       //假设有1-2-3三个图片,居中及靠右，图片间距为0

MainAxisAlignment.center   //假设有1-2-3三个图片,居中，图片间距为0

new Center(
  child: new Column(
    mainAxisAlignment: MainAxisAlignment.center,  //需要依赖外层的Center，否则不生效
    children: <Widget>[
    new Text("you click:"),
    new Text('$count'),
  ],),
),

垂直方向
```

**Row,Column->CrossAxisAlignment**
```
CrossAxisAlignment.start       //假设有1-2-3三个图片,靠左及顶部，图片间距为0

CrossAxisAlignment.end       //假设有1-2-3三个图片,靠左及底部，图片间距为0

CrossAxisAlignment.center   //假设有1-2-3三个图片,居中及靠左，图片间距为0

水平方向
```


**TextDirection （排列方式）**

```

TextDirection.ltr   //假设有1-2-3三个图片,图片排列方式为1-2-3

TextDirection.rtr   //假设有1-2-3三个图片,图片排列方式为3-2-1

```


**Text----->overflow （排列方式）**

```
TextOverflow.ellipsis   //结尾省略号
```



**Container----->alignment （对齐方式）**

```
Alignment.topLeft   //假设一张图片,在一个比图大的布局里，则在布局里，靠左及顶部排列
Alignment.topCenter   //假设一张图片,在一个比图大的布局里，则在布局里，居中及顶部排列
Alignment.topRight   //假设一张图片,在一个比图大的布局里，则在布局里，靠右及顶部排列
...
```

**Image----->fit （图片填充方式）**

```
BoxFit.cover //中间部分填满布局
BoxFit.fill //整张图填满
BoxFit.fitWidth //宽度填满
BoxFit.fitHeight //等比缩放适配高度

```

**Container----->decoration （描述如何绘制容器）**

```
BoxDecoration({
   this.color,  //颜色   color: Colors.amberAccent
   this.image,  //背景图 image: new DecorationImage(image: new ExactAssetImage('images/mozi.jpeg'),fit: BoxFit.cover,)
   this.border, //边框颜色  border: new Border.all(  color: Colors.red,//边框颜色 width: 2.0,//边框宽度)
   this.borderRadius, //边框圆角,new BorderRadius.all(new Radius.circular(50.0))
   this.boxShadow, //阴影
   this.gradient, //渐变
   this.shape: BoxShape.rectangle //矩形，BoxShape.circle  //圆形
 })


 return new Center(
  child: new Container(
    width: 50.0,
    height: 50.0,
    decoration: new BoxDecoration(
      //背景色
      color: const Color(0xff7c94b6),
      //没有图片的小伙,注释掉image这个，用color背景也是可以看效果的
      image: new DecorationImage(
        image: new ExactAssetImage('images/lake.jpg'),
        fit: BoxFit.cover,
      ),
      //shape类型：rectangle|circle
      shape: BoxShape.rectangle,
      //边框颜色
      border: new Border.all(
        color: Colors.red,//边框颜色
        width: 2.0,//边框宽度
      ),
    ),
  ),
);

```

**Container----->margin （外边距）**

```
EdgeInsets.fromLTRB(this.left, this.top, this.right, this.bottom) //各个角边距
EdgeInsets.all(double value) //边距
```

**Container----->padding (内边距)**

```
EdgeInsets.fromLTRB(this.left, this.top, this.right, this.bottom) //各个角边距
EdgeInsets.all(double value) //边距

new Padding(
  padding: new EdgeInsets.all(8.0),
  child: const Card(child: const Text('Hello World!')),
)
```

**ListView----->scrollDirection（ListView 排列方向）**

```
Axis.horizontal  //水平排列
Axis.vertical //垂直排列
```


Container->Column->Expanded,导致均分右边有外边距 <br>
Column->Expanded,均分正常

## 其它 ##

**打印日志**

print(),debugPrint()
在命令行里执行flutter run 或者 flutter logs 在控制台可以看到日志，也可以用adb logcat 进行日志查看及过滤

Container，Padding均可让子控件获得padding属性

flutter upgrade


**问题**

**1：ListView放在Colum或者Row里面报错**

```

Widget _bulidMyCenter(BuildContext context) {
  return new Container(
    child: new Column(
      children: <Widget>[
        new ListView.builder(
          itemCount:listData.length,
          itemBuilder: (context, i) => rendUI(context, i),
        ),
      ],
    )
  );
}

I/flutter (29754): The following assertion was thrown during performResize():
I/flutter (29754): Vertical viewport was given unbounded height.
I/flutter (29754): Viewports expand in the scrolling direction to fill their container.In this case, a vertical
I/flutter (29754): viewport was given an unlimited amount of vertical space in which to expand. This situation
I/flutter (29754): typically happens when a scrollable widget is nested inside another scrollable widget.
I/flutter (29754): If this widget is always nested in a scrollable widget there is no need to use a viewport because
I/flutter (29754): there will always be enough vertical space for the children. In this case, consider using a Column
I/flutter (29754): instead. Otherwise, consider using the "shrinkWrap" property (or a ShrinkWrappingViewport) to size
I/flutter (29754): the height of the viewport to the sum of the heights of its children.

解决方案：

Widget _bulidMyCenter(BuildContext context) {
  return new Container(
    child: new Column(
      children: <Widget>[
        new Flexible(child: new ListView.builder(
          itemCount:listData.length,
          itemBuilder: (context, i) => rendUI(context, i),
        ),),
      ],
    )
  );
}

```

**2.TextField放在Row里面报错**

```

new Row(
 children: <Widget>[
   new Container(
     child: new TextField(
       decoration: InputDecoration(
           border: InputBorder.none,
           hintText: 'Please enter a search term'),
     ),
   )
 ],
)

I/flutter (12955): The following assertion was thrown during performLayout():
I/flutter (12955): BoxConstraints forces an infinite width.
I/flutter (12955): These invalid constraints were provided to RenderOpacity's layout() function by the following
I/flutter (12955): function, which probably computed the invalid constraints in question:
I/flutter (12955):   _RenderDecoration._layout.layoutLineBox (package:flutter/src/material/input_decorator.dart:750:11)
I/flutter (12955): The offending constraints were:
I/flutter (12955):   BoxConstraints(w=Infinity, 0.0<=h<=Infinity)

解决方案：
new Row(
  children: <Widget>[
    new Expanded(
      child: new TextField(
        decoration: InputDecoration(
            border: InputBorder.none,
            hintText: 'Please enter a search term'),
      ),
    )
  ],
)
```
