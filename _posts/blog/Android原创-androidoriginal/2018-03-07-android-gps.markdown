---
layout: post
title: Android GPS解析
date:  2018-03-07 15:09:00 +0900  
description: Android GPS解析
img: post-12.jpg # Add image post (optional)
tags: [Android,GPS]
author: # Add name author (optional)
androidoriginal: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}

在做轨迹相关功能时经常需要GPS解析，从GPS文件中我们可以提取出经纬度信息，速度，方向，时间等信息。<br>
GPS格式可阅读[这篇博客](https://leach-chen.github.io/GPS-file/ "点击前往")。
把GPS文件中的经纬度信息提取出来，我们就可以在地图上绘制轨迹信息了。这里有个GPS格式文件的[解析库](https://github.com/eantoranz/gps-parser "点击前往")，可解析出**经纬度，速度，方向，时间**等信息，具体用法可以在看文章底部提供的源码。

![](/assets/img/blog/androidoriginal/gps/gpsparase.gif)

**世界坐标转系火星坐标系**<br>
往往设备记录下来的坐标是原始坐标系，这是国际公认的世界标准坐标体系，我们地图上要绘制的时候一般要先转换为火星坐标系，通过下面代码中**transform(double wgLat, double wgLon)**，传入经纬度，便可得到转换后的经纬度信息了。

	public class EvilTransform {
	    final static double pi = 3.14159265358979324;

	    //
	    //
	    // a = 6378245.0, 1/f = 298.3
	    // b = a * (1 - f)
	    // ee = (a^2 - b^2) / a^2;
	    final static double a = 6378245.0;
	    final static double ee = 0.00669342162296594323;


	    final static double DEF_PI = 3.14159265359; // PI
	    final static double DEF_2PI = 6.28318530712; // 2*PI
	    final static double DEF_PI180 = 0.01745329252; // PI/180.0
	    final static double DEF_R = 6370693.5; // radius of earth


	    //
	    // World Geodetic System ==> Mars Geodetic System
	    public static double[] transform(double wgLat, double wgLon) {
	        double mgLat = 0;
	        double mgLon = 0;
	        if (outOfChina(wgLat, wgLon)) {
	            mgLat = wgLat;
	            mgLon = wgLon;

	        } else {
	            double dLat = transformLat(wgLon - 105.0, wgLat - 35.0);
	            double dLon = transformLon(wgLon - 105.0, wgLat - 35.0);
	            double radLat = wgLat / 180.0 * pi;
	            double magic = Math.sin(radLat);
	            magic = 1 - ee * magic * magic;
	            double sqrtMagic = Math.sqrt(magic);
	            dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
	            dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * pi);
	            mgLat = wgLat + dLat;
	            mgLon = wgLon + dLon;
	        }
	        double[] point = {mgLat, mgLon};
	        return point;
	    }

	    private static boolean outOfChina(double lat, double lon) {
	        if (lon < 72.004 || lon > 137.8347)
	            return true;
	        if (lat < 0.8293 || lat > 55.8271)
	            return true;
	        return false;
	    }

	    private static double transformLat(double x, double y) {
	        double ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
	        ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
	        ret += (20.0 * Math.sin(y * pi) + 40.0 * Math.sin(y / 3.0 * pi)) * 2.0 / 3.0;
	        ret += (160.0 * Math.sin(y / 12.0 * pi) + 320 * Math.sin(y * pi / 30.0)) * 2.0 / 3.0;
	        return ret;
	    }

	    private static double transformLon(double x, double y) {
	        double ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
	        ret += (20.0 * Math.sin(6.0 * x * pi) + 20.0 * Math.sin(2.0 * x * pi)) * 2.0 / 3.0;
	        ret += (20.0 * Math.sin(x * pi) + 40.0 * Math.sin(x / 3.0 * pi)) * 2.0 / 3.0;
	        ret += (150.0 * Math.sin(x / 12.0 * pi) + 300.0 * Math.sin(x / 30.0 * pi)) * 2.0 / 3.0;
	        return ret;
	    }

	    public static double GetShortDistance(double lon1, double lat1, double lon2,double lat2) {
	        double ew1, ns1, ew2, ns2;
	        double dx, dy, dew;
	        double distance;
	        // 角度转换为弧度
	        ew1 = lon1 * DEF_PI180;
	        ns1 = lat1 * DEF_PI180;
	        ew2 = lon2 * DEF_PI180;
	        ns2 = lat2 * DEF_PI180;
	        // 经度差
	        dew = ew1 - ew2;
	        // 若跨东经和西经180 度，进行调整
	        if (dew > DEF_PI)
	            dew = DEF_2PI - dew;
	        else if (dew < -DEF_PI)
	            dew = DEF_2PI + dew;
	        dx = DEF_R * Math.cos(ns1) * dew; // 东西方向长度(在纬度圈上的投影长度)
	        dy = DEF_R * (ns1 - ns2); // 南北方向长度(在经度圈上的投影长度)
	        // 勾股定理求斜边长
	        distance = Math.sqrt(dx * dx + dy * dy);
	        return distance;
	    }
	}

**获取轨迹距离**<br>
获取一段轨迹的距离，我们可以依次计算相邻两个轨迹点之间的距离，再累加起来，便可以得到这段轨迹的距离了，通过上面代码中**GetShortDistance(double lon1, double lat1, double lon2,double lat2)**函数，前两个参数是前一个点的经纬度，后两个参数是后一个点的经纬度。

源码参考samples里面的TestGps
<h1><a href="https://github.com/leach-chen/TestProject/tree/master/samples/TestGps" style="text-decoration: none;" target="_blank" title="源码下载">源码下载</a>
<h1>
