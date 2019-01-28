---
layout: post
title: Android自定义View—API
date:  2018-02-26 16:35:00 +0900
description: Android自定义View之API
img: post-3.jpg # Add image post (optional)
tags: [Android,自定义view]
author: # Add name author (optional)
androidoriginal: true
category: blog
---

## **Paint** ##

1. **reset()**	<br>
重置Paint。

1. **setFlags(int flags)** <br>
设置一些标志，比如抗锯齿，下划线等等。

1. **setAntiAlias(boolean aa)** <br>
设置抗锯齿，如果不设置，加载位图的时候可能会出现锯齿状的边界，如果设置，边界就会变的稍微有点模糊，锯齿就看不到了

1. **setDither(boolean dither)** <br>
设置是否抖动，如果不设置感觉就会有一些僵硬的线条，如果设置图像就会看的更柔和一些，

1. **setLinearText(boolean linearText)** <br>
这个是文本缓存，设置线性文本，如果设置为true就不需要缓存

1. **setSubpixelText(boolean subpixelText)** <br>
设置亚像素，是对文本的一种优化设置，可以让文字看起来更加清晰明显，可以参考一下PC端的控制面板-外观和个性化-调整ClearType文本

1. **setUnderlineText(boolean underlineText)** <br>
设置文本的下划线

1. **setUnderlineText(boolean underlineText)** <br>
设置文本的下划线

1. **setStrikeThruText(boolean strikeThruText)**  <br>
设置文本的删除线

1. **setFakeBoldText(boolean fakeBoldText)**  <br>
设置文本粗体

1. **setFilterBitmap(boolean filter)**  <br>
对位图进行滤波处理，如果该项设置为true，则图像在动画进行中会滤掉对Bitmap图像的优化操作，加快显示

1. **setColor(int color)**  <br>
设置画笔颜色

1. **setAlpha(int a)**  <br>
设置画笔的透明度[0-255]，0是完全透明，255是完全不透明

1. **setARGB(int a, int r, int g, int b)** <br>
设置画笔颜色，argb形式alpha，red，green，blue每个范围都是[0-255],

1. **setStrokeWidth(float width)** <br>
画笔样式为空心时，设置空心画笔的宽度

1. **setStrokeMiter(float miter)** <br>
当style为Stroke或StrokeAndFill时设置连接处的倾斜度，这个值必须大于0，看一下演示结果

1. **setShader(Shader shader)** <br>
设置着色器，用来给图像着色的，绘制出各种渐变效果，有BitmapShader，ComposeShader，LinearGradient，RadialGradient，SweepGradient几种

1. **setColorFilter(ColorFilter filter)** <br>
设置画笔颜色过滤器，有ColorMatrixColorFilter，LightingColorFilter，PorterDuffColorFilter几种，这个以后再单独分析

1. **setXfermode(Xfermode xfermode)** <br>
设置图形重叠时的显示方式

1. **setPathEffect(PathEffect effect)** <br>
设置绘制路径的效果，有ComposePathEffect，CornerPathEffect，DashPathEffect，DiscretePathEffect，PathDashPathEffect，SumPathEffect几种，以后在单独分析

1. **setMaskFilter(MaskFilter maskfilter)** <br>
对图像进行一定的处理，实现滤镜的效果，如滤化，立体等,有BlurMaskFilter，EmbossMaskFilter几种

1. **setTypeface(Typeface typeface)** <br>
设置字体样式，可以是Typeface设置的样式，也可以通过Typeface的createFromAsset(AssetManager mgr, String path)方法加载样式

1. **setShadowLayer(float radius, float dx, float dy, int shadowColor)** <br>
设置阴影效果，radius为阴影角度，dx和dy为阴影在x轴和y轴上的距离，color为阴影的颜色。注:在用该方法之前需要调用setLayerType( LAYER_TYPE_SOFTWARE , null);关闭硬件加速

1. **setTextLocale(Locale locale)** <br>
设置地理位置，比如显示中文，日文，韩文等，默认的显示Locale.getDefault()即可，

1. **setElegantTextHeight(boolean elegant)** <br>
设置优雅的文字高度，这个设置可能会对FontMetrics产生影响

1. **setTextSize(float textSize)** <br>
设置字体大小

1. **setTextScaleX(float scaleX)** <br>
设置字体的水平方向的缩放因子，默认值为1，大于1时会沿X轴水平放大，小于1时会沿X轴水平缩小

1. **setTextSkewX(float skewX)** <br>
设置文本在水平方向上的倾斜，默认值为0，推荐的值为-0.25，

1. **setLetterSpacing(float letterSpacing)** <br>
设置行的间距，默认值是0，负值行间距会收缩

1. **setFontFeatureSettings(String settings)** <br>
设置字体样式，可以设置CSS样式

1. **measureText(char[] text, int index, int count)，measureText(String text, int start, int end)，measureText(String text)，measureText(CharSequence text, int start, int end)** <br>
测量字体的长度

1. **breakText(char[] text, int index, int count,float maxWidth, float[] measuredWidth)，breakText(CharSequence text, int start, int end,boolean measureForwards,  floatmaxWidth, float[] measuredWidth)，breakText(String text, boolean measureForwards,float maxWidth, float[] measuredWidth)** <br>
剪切显示，就是大于maxWidth的时候只截取指定长度的显示

1. **getTextWidths(char[] text, int index, int count,float[] widths)，getTextWidths(CharSequence text, int start, int end, float[] widths)，getTextWidths(String text, int start, int end, float[] widths)，getTextWidths(String text, float[] widths)** <br>
提取指定范围内的字符串，保存到widths中

1. **getTextPath(char[] text, int index, int count, float x, float y, Path path)，getTextPath(String text, int start, int end, float x, float y, Path path)** <br>
获取文本绘制的路径，提取到Path中

1. **getTextBounds(String text, int start, int end, Rect bounds) ，getTextBounds(char[] text, int index, int count, Rect bounds)** <br>
得到文本的边界，上下左右，提取到bounds中，可以通过这计算文本的宽和高

1. <a href="http://blog.csdn.net/abcdef314159/article/details/51720686" style="text-decoration: none;" target="\_blank" >参考</a>

## **Canvas** ##

1. **translate(100, 50) <span style= "color:#033FA1">平移</span>**<br>
 参数1: 向X轴方向移动100距离 <br>
 参数2: 向Y轴方向移动50距离  <br>

1. **canvas.scale(2, 4) <span style= "color:#033FA1">缩放</span>** <br>
在X轴方向放大为原来2倍，Y轴方向方大为原来的4倍 <br>
参数1: X轴的放大倍数 <br>
参数2: Y轴的放大倍数 <br>
**canvas.scale(2, 4，100,100)**<br>
在X轴方向放大为原来2倍，Y轴方向方大为原来的4倍 <br>
参数1: X轴的放大倍数 <br>
参数2: Y轴的放大倍数 <br>
参数3: 原点X坐标<br>
参数4: 原点Y坐标<br>

1. **canvas.rotate(30) <span style= "color:#033FA1">旋转</span>** <br>
原点为中心，旋转30度（顺时针方向为正方向 ）<br>
参数: 旋转角度 <br>
**canvas.rotate(30,100,100)**<br>
以（100,100）为中心，旋转30度，顺时针方向为正方向 <br>
参数: 旋转角度<br>

1. **canvas.drawText("开始写字了！",50, 50, p) <span style= "color:#033FA1">画文字</span>** <br>
参数2：文本的x轴的开始位置 <br>
参数2：文本Y轴的结束位置 <br>
参数3：画笔对象 <br>
**canvas.drawText("开始写字了！",2,5, 50, 50, p)**<br>
参数2：要从第几个字开始绘制 <br>
参数3：要绘制到第几个文字 <br>
参数4：文本的x轴的开始位置 <br>
参数5：文本Y轴的结束位置 <br>
参数6：画笔对象 <br>
**canvas.drawTextOnPath("1234567890101123123", path, 0, -50, p)**<br>
参数2：路径 <br>
参数3：距离路径开始位置的偏移量 <br>
参数4：距离路径上下的偏移量（可以为负数） <br>
参数5：画笔对象 <br>

1. **canvas.drawCircle(200, 200, 100, p) <span style= "color:#033FA1">画圆</span>**<br>
参数1：圆心X <br>
参数2：圆心Y <br>
参数3：半径R <br>
参数4：画笔对象<br>

1. **canvas.drawLine(100, 100, 300, 300, p) <span style= "color:#033FA1">画线</span>**  <br>
参数1：startX <br>
参数2：startY <br>
参数3：stopX <br>
参数4：stopY <br>
参数5：画笔对象   <br>
**canvas.drawLines(new float[]{100,100,200,200,200,100,300,100}, p)** <br>
同时绘制多条线。  <br>
参数1：float数组：每四个一组为一条线。最后不足四个，就忽略那些值。  <br>
参数2：画笔对象 <br>

1. **RectF oval = new RectF(150, 200, 500, 400); canvas.drawOval(oval, p) <span style= "color:#033FA1">画椭圆</span>** <br>
参数1：float left <br>
参数2：float top <br>
参数3：float right <br>
参数4：float bottom <br>

1. **canvas.drawArc(oval, 20, 180, false, p) <span style= "color:#033FA1">画弧度</span>** <br>
参数1：RectF对象。 <br>
参数2：开始的角度。（水平向右为0度顺时针反向为正方向） <br>
参数3：扫过的角度 <br>
参数4：是否和中心连线 <br>
参数5：画笔对象 <br>

1. **canvas.drawRect(100,100, 200, 200, p) <span style= "color:#033FA1">画矩形</span>** <br>
参数1：float left  <br>
参数2：float top <br>
参数3：float right <br>
参数4：float bottom <br>
**canvas.drawRoundRect(oval3, 20, 5, p) 画圆角矩形**  <br>
RectF oval3 = new RectF(80, 260, 200, 300);// 设置个新的长方形    
canvas.drawRoundRect(oval3, 20, 5, p);//第二个参数是x半径，第三个参数是y半径

1. **canvas.drawPath(path, p) <span style= "color:#033FA1">画多边形</span>**  <br>
Path类封装复合(多轮廓几何图形的路径 由直线段*、二次曲线,和三次方曲线，也可画以油画。drawPath(路径、油漆),要么已填充的或抚摸(基于油漆的风格),或者可以用于剪断或画画的文本在路径。  
Path path = new Path();  路径对象  <br>
path.moveTo(80, 200);	此点为多边形的起点    <br>
path.lineTo(120, 250);  <br>
path.lineTo(80, 250);    
//....  可以添加多个点。构成多边形  <br>
path.close(); // 使终点和起点链接，构成封闭图形   <br>
canvas.drawPath(path, p);<br>

1. **canvas.drawPath(path2, p) <span style= "color:#033FA1">画贝塞尔曲线</span>** <br>
p.setStyle(Style.STROKE);  <br>
Path path2=new Path();     <br>
path2.moveTo(100, 100);//设置Path的起点    <br>
path2.quadTo(300, 100, 400, 400); //设置贝塞尔曲线的控制点坐标和终点坐标。<br> 参数1、2：x1，y1为控制点的坐标值，参数3、4：x2，y2为终点的坐标值<br>
path2.quadTo(500, 700, 800, 800);   <br>
canvas.drawPath(path2, p);//画出贝塞尔曲线  <br>


1. **canvas.drawPoint(60, 390, p) <span style= "color:#033FA1">画一个点</span>**<br>
参数1、2：点的x、y坐标 <br>
**canvas.drawPoints(new float[]{60,400,65,400,70,400}, p) 画多个点**<br>
参数1：多个点，每两个值为一个点。最后个数不够两个的值，忽略。<br>

1. **canvas.drawBitmap(bitmap, 200,300, p) <span style= "color:#033FA1">画图片</span>** <br>
Bitmap bitmap = BitmapFactory.decodeResource(getResources(), R.drawable.ic_launcher);   <br>
canvas.drawBitmap(bitmap, 200,300, p); <br>
参数1：bitmap对象 <br>
参数2：图像左边坐标点 <br>
参数3：图像上边坐标点 <br>

1. <a href="https://www.jianshu.com/p/f69873371763" style="text-decoration: none;" target="\_blank" >参考</a>

## **Path** ##
1. **moveTo** <br>
moveTo表示将绘制点移动到某一个坐标处，该方法并不会进行绘制，主要是用来移动画笔。默认情况下起始坐标位于（0，0）点，我们可以手动调整默认位置。

1. **lineTo**  <br>
lineTo表示绘制一条直线，参数表示目标坐标如下： <br>
Path path = new Path();   <br>
path.lineTo(getResources().getDimensionPixelSize(R.dimen.dot1x),
getResources().getDimensionPixelSize(R.dimen.dot1x));   <br>
canvas.drawPath(path, paint);   <br>

1. **quadTo** <br>
quadTo可以用来绘制一个带控制点的曲线，说白了，其实就是贝塞尔曲线。如下：<br>
Path path = new Path();  <br>
path.moveTo(0, 300);  <br>
path.quadTo(150, 0, 300, 300);  <br>
canvas.drawPath(path, paint); <br>

1. **cubicTo** <br>
cubicTo可以用来绘制具有两个控制点的贝塞尔曲线，代码如下：
Path path = new Path();  <br>
path.moveTo(300, 0);  <br>
path.cubicTo(0, 150, 300, 450, 0, 600);  <br>
canvas.drawPath(path, paint);  <br>

1. **arcTo** <br>
artTo用来绘制一段圆弧，实际上是截取圆或者椭圆的一部分，比如下面一段代码：<br>
Path path = new Path();  <br>
RectF oval = new RectF(0, 0, 300, 300);  <br>
path.arcTo(oval, 0, 90);  <br>
canvas.drawPath(path, paint);  <br>

1. **addArc、addRoundRect、addOval、addRect、addCircle** <br>
addArc，添加一个圆弧到路径中，这个圆弧实为圆或者椭圆的一部分，如下一段代码： <br>
Path path = new Path();   <br>
RectF oval = new RectF(0, 200, 300, 500);   <br>
path.addArc(oval, 0, 180);   <br>
canvas.drawPath(path, paint);   <br>
<br><br>
Path path = new Path();  <br>
RectF oval = new RectF(50, 50, 150, 150);  <br>
path.addRoundRect(oval,25,25, Path.Direction.CCW);  <br>
RectF oval2 = new RectF(50, 200, 250, 300);  <br>
path.addOval(oval2, Path.Direction.CCW);  <br>
RectF oval3 = new RectF(50, 350, 150, 450);  <br>
path.addRect(oval3, Path.Direction.CCW);  <br>
path.addCircle(100, 550, 50, Path.Direction.CCW);  <br>
canvas.drawPath(path, paint);  <br>

1. **Path.Op** <br>
Path.Op.DIFFERENCE表示从path中去除path2的部分，保留path的部分。如下案例：<br>
Path path = new Path();  <br>
Path path2 = new Path();  <br>
path.addCircle(200, 200, 100, Path.Direction.CCW);  <br>
path2.addRect(200, 200, 300, 300, Path.Direction.CCW);  <br>
path.op(path2, Path.Op.DIFFERENCE);  <br>
canvas.drawPath(path, paint);  <br>

1. **Path.Op.INTERSECT** <br>
Path.Op.INTERSECT表示取path和path2相交的部分显示出来，如下：<br>
Path path = new Path();  <br>
Path path2 = new Path();  <br>
path.addCircle(200, 200, 100, Path.Direction.CCW);  <br>
path2.addRect(200, 200, 300, 300, Path.Direction.CCW);  <br>
path.op(path2, Path.Op.INTERSECT);  <br>
canvas.drawPath(path, paint);  <br>

1. **Path.Op.REVERSE_DIFFERENCE**  <br>
Path.Op.REVERSE_DIFFERENCE表示除去path的部分，只显示path2的部分，如下：<br>
Path path = new Path();   <br>
Path path2 = new Path();   <br>
path.addCircle(200, 200, 100, Path.Direction.CCW);   <br>
path2.addRect(200, 200, 300, 300, Path.Direction.CCW);   <br>
path.op(path2, Path.Op.REVERSE_DIFFERENCE);   <br>
canvas.drawPath(path, paint);   <br>

1. **Path.Op.UNION** <br>
Path.Op.UNION表示path和path2的部分都要显示出来，如下： <br>
Path path = new Path();  <br>
Path path2 = new Path();  <br>
path.addCircle(200, 200, 100, Path.Direction.CCW);  <br>
path2.addRect(200, 200, 300, 300, Path.Direction.CCW);  <br>
path.op(path2, Path.Op.UNION);  <br>
canvas.drawPath(path, paint);  <br>

1. **Path.Op.XOR** <br>
Path.Op.XOR表示显示path和path2但是不包含二者的交集。如下：<br>
Path path = new Path();  <br>
Path path2 = new Path();  <br>
path.addCircle(200, 200, 100, Path.Direction.CCW);  <br>
path2.addRect(200, 200, 300, 300, Path.Direction.CCW);  <br>
path.op(path2, Path.Op.XOR);  <br>
canvas.drawPath(path, paint);  <br>

1. <a href="http://blog.csdn.net/u012702547/article/details/52454406" style="text-decoration: none;" target="\_blank" >参考</a>


## **其它** ##
1. **最小滑动距离值,大于该值则认为是滑动**
ViewConfiguration configuration = ViewConfiguration.get(context);<br>
int touchSlop = ViewConfigurationCompat.getScaledPagingTouchSlop(configuration);<br>

1. **requestDisallowInterceptTouchEvent**
当用户按下的时候，我们告诉父组件，不要拦截我的事件（这个时候子组件是可以正常响应事件的），拿起之后就会告诉父组件可以阻止。
