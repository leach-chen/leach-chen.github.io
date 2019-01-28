---
layout: post
title: 破解实战第一篇（某兔子游戏破解）
date:  2018-07-31 15:27:00 +0900
description: 破解实战第一篇（某兔子游戏破解）
img: post-8.jpg # Add image post (optional)
tags: [逆向]
author: # Add name author (optional)
hacker: true
category: blog
---

{{site.label1}} <a href="https://github.com/leach-chen/leach-chen.github.io/" target="\_blank">Leach Chen</a> {{site.label2}}


在吾爱破解里，看到<a href="https://www.52pojie.cn/forum.php?mod=viewthread&tid=745128&fromguid=hot&extra=&mobile=2" style="text-decoration: none;" target="\_blank"  title="">一个帖子</a>写了某兔子游戏破解，于是自己也实战了一下，成功操作，下面记录下破解过程，我破解的时候用的是1.0.1版本的APK，不保证后期版本会对这块进行修改。

1.**dex转成jar**

用解压文件解压APK，将classes.dex解压出来，通过命令转成jar,然后可以用jd-gui打开该jar文件，发现代码都没进行代码混淆

```
dex2jar.bat C:\Users\xxx\Desktop\test\classes.dex

protected void onCreate(Bundle paramBundle)
  {
    super.onCreate(paramBundle);
    if ((!isTaskRoot()) && (getIntent().hasCategory("android.intent.category.LAUNCHER")) && (getIntent().getAction() != null) && (getIntent().getAction().equals("android.intent.action.MAIN")))
    {
      finish();
      return;
    }
    setContentView(2130903078);
    getWindow().getDecorView().setSystemUiVisibility(2);
    Cocos2dxHelper.init(this);
    new Handler().postDelayed(new Runnable()
    {
      public void run()
      {
        Intent localIntent = new Intent(SplashScreen.this, OnyxActivity.class);
        SplashScreen.this.startActivity(localIntent);
        SplashScreen.this.finish();
      }
    }, SPLASH_TIME_OUT);
  }
  这是启动页里面的代码，跳转过去的页面是OnyxActivity
```


2.**反编译APK**

```
apktool d -f C:\Users\xxx\Desktop\test\疯狂兔子：无敌跑跑-1.0.1(安卓应用).apk -o C:\Users\xxx\Desktop\test\out
```

3.**打开AndroidManifest.xml**

```
<activity android:configChanges="keyboard|keyboardHidden|navigation|orientation|screenLayout|screenSize" android:name="com.ubisoft.OnyxEngine.SplashScreen" android:screenOrientation="sensorPortrait" android:theme="@style/AppNoTitleBarFullScreen">
          <intent-filter>
              <action android:name="android.intent.action.MAIN"/>
              <category android:name="android.intent.category.DEFAULT"/>
          </intent-filter>
</activity>

找到首先启动的Activity为 com.ubisoft.OnyxEngine.SplashScreen
```

4.**打开启动页的SplashScreen.smali文件加入Toast代码**
在onCreate处加入加入toast代码，要加在:goto_0之前，否则代码有异常

```
.line 385
 const-string v0, "Hello, test"
 const/4 v1, 0x1  
 invoke-static {p0, v0, v1}, Landroid/widget/Toast;->makeText(Landroid/content/Context;Ljava/lang/CharSequence;I)Landroid/widget/Toast;
 move-result-object v0
 invoke-virtual {v0}, Landroid/widget/Toast;->show()V
```

5.**回编apk**

```
apktool b C:\Users\xxx\Desktop\test\out  -o C:\Users\xxx\Desktop\test\a.apk
```

6.**回编出来的APK签名**

```
jarsigner -verbose -keystore C:\Users\xxx\Desktop\test\test.jks  -signedjar C:\Users\xxx\Desktop\test\out.apk  C:\Users\xxx\Desktop\test\a.apk test
```
签名完成后，安装out.apk,发现程序启动就闪退，于是我把启动页里面onCreate里面的代码注释掉，就加入toast，发现可以弹出，说明在启动页跳转过去的页面做了校验，其实是做了dex签名的校验，发现签名跟原来不一致，直接抛出异常退出APP

7.**进入OnyxActivity onCreate**

```
进入该页面我尝试过多种修改方式，程序始终启动就崩溃，然后参考上面帖子里，找到程序的校验点

OnyxActivity onCreate代码如下：
public void onCreate(Bundle paramBundle)
{
  super.onCreate(paramBundle);
  if ((!isTaskRoot()) && (getIntent().hasCategory("android.intent.category.LAUNCHER")) && (getIntent().getAction() != null) && (getIntent().getAction().equals("android.intent.action.MAIN")))
  {
    finish();
    return;
  }
  this.m_needQuit = false;
  byte[] arrayOfByte = new byte[2];
  arrayOfByte[0] = 5;
  arrayOfByte[0] = 6;
  new SecretKeySpec(arrayOfByte, "HmacSHA1");
  this.m_gestureListener = new OnyxGestureListener();
  this.m_gestureDetector = new GestureDetector(this, this.m_gestureListener);
  this.m_scaleGestureDetector = new ScaleGestureDetector(this, this.m_gestureListener);
  context = getApplicationContext();
  localActivity = this;
  localOnyxActivity = this;
  rootView = findViewById(16908290).getRootView();
  ImmersiveMode(true);
  MobileAuth.init(getOnyxActivity());
  mOurpalmChannel = new OurpalmChannel();
  mOurpalmChannel.Init(this);
  setFinishOnTouchOutside(false);
}

跳转mOurpalmChannel.Init(this); 列出部分代码：
public void Init(Activity paramActivity)
  {
    mActivity = paramActivity;
    mOurpalmChannel = this;
    mIAPIdentifier = new IAPIdentifier();
    mListener = new OurpalmIAPListener();
    Ourpalm_Entry.getInstance(mActivity).Ourpalm_Init("2", "1.0", "1.0", mListener);
    sTracking = new Tracking();
    ...
  }

跳转  Ourpalm_Entry.getInstance(mActivity).Ourpalm_Init("2", "1.0", "1.0", mListener);里面的Ourpalm_Init，列出部分代码：

public void Ourpalm_Init(String paramString1, String paramString2, String paramString3, Ourpalm_CallBackListener paramOurpalm_CallBackListener)
{
    ...
    Ourpalm_Statics.mCallBackListener = paramOurpalm_CallBackListener;
    GameInfo.GameType = paramString1;
    Ourpalm_Statics.GameRoleLoginType = 0;
    Ourpalm_Statics.IsExecute = false;
    Ourpalm_Statics.mSimType = Ourpalm_Statics.getSimType(Ourpalm_Entry_Model.mActivity);
    initMapPhoneInfo();
    this.ourpalm_jni = new ourpalm_android_SdkJni();
    this.ourpalm_jni.RunSign(Ourpalm_Entry_Model.mActivity.getApplicationContext());
    Ourpalm_Statics.Ourpalm_kkey = this.ourpalm_jni.getPublicKey();
    Ourpalm_Statics.UpdateSecretKey();
    Ourpalm_Entry_Model.getInstance().userInfo = new Ourpalm_UserInfo();
    Ourpalm_Entry_Model.getInstance().mOurpalm_Account_HeartBeat = new Ourpalm_Account_HeartBeat();
    Ourpalm_Entry_Model.getInstance().mGameInfo = new GameInfo();
    Ourpalm_Entry_Model.getInstance().mGameInfo.setGameResVersion(paramString3);
    str1 = Ourpalm_Statics.getAppVersion(Ourpalm_Entry_Model.mActivity).trim();
    if (Ourpalm_Statics.IsNull(str1)) {
      str1 = paramString2;
    }
  ...
}

在里面找到关键字眼函数 RunSign，跳转过去，发现是个native函数

```

8.**用IDA Pro打开libourpalm_sdk_a.so**

在函数列表里搜索那个native函数RunSign

<img src="/assets/img/blog/hacker/actualoperation1/1.jpg" height = "300px"/>

调整下设置，可显示函数地址：

<img src="/assets/img/blog/hacker/actualoperation1/2.jpg" height = "300px"/>

设置完成后如下图所示：

<img src="/assets/img/blog/hacker/actualoperation1/3.jpg" height = "300px"/>

上图中红色标记的是checksign，checkdexex的地址，下面那个红色框显示的是当前鼠标放在对应代码上的函数或者变量的内存地址，

checksign FF F7 3E FF  地址起始位置：00244C4

checkdexex FF F7 55 FD 地址起始位置：00244CE

我们需要注释掉这两个函数的调用，那如何注释掉呢？

9.**注释掉so里面方法调用 NOP**

用WinHex打开libourpalm_sdk_a.so，搜索checksign地址内容FFF73EFF,选择起始地址为00244C4的那项

<img src="/assets/img/blog/hacker/actualoperation1/4.jpg" height = "300px"/>

点击进去，将FF F7 3E FF 改成C0 46 C0 46

同样方法将checkdexex地址内容将FF F7 55 FD 改成C0 46 C0 46

将so保存后，重新用IDA Pro打开，按照上面方法，打开Runsign函数，可以发现这两个函数被注释掉了

<img src="/assets/img/blog/hacker/actualoperation1/5.jpg" height = "300px"/>

10.**在OnyxActivity.smali onCreate里面添加Toast代码**

```
打开OnyxActivity.smali，在onCreate里面末尾goto :goto_0之前添加如下Toast代码

.line 385
 const-string v0, "Hello, I come in,haha"
 const/4 v1, 0x1
 invoke-static {p0, v0, v1}, Landroid/widget/Toast;->makeText(Landroid/content/Context;Ljava/lang/CharSequence;I)Landroid/widget/Toast;
 move-result-object v0
 invoke-virtual {v0}, Landroid/widget/Toast;->show()V

  goto :goto_0
```

重新回编APK，签名，安装，发现可以正常跑起来了，但是我发现需要加载完成正常进入游戏，按返回键退出APP，否则会导致下次启动不起来

<img src="/assets/img/blog/hacker/actualoperation1/6.jpg" height = "300px"/>

破解了这个之后，就可以在你想要继续破解的地方修改代码就可以了，目前我还没有去尝试，有些应用加了壳的话要先脱壳，拿到真正的dex，才能进入到下面一步

11.**开启debug模式**

在反编译出来的AndroidManifest.xml中将android:debuggable="false"改成android:debuggable="true"，如果没有这项则加上android:debuggable="true"

```
<application android:debuggable="true" android:hasCode="true" android:icon="@drawable/icon" android:label="@string/app_name" android:name="com.ubisoft.OnyxEngine.OnyxApplication">
```

12.**将程序里的log日志打出来**
log日志封装在com.ourpalm.tools.android.logs中，打开Logs.smali

```
# direct methods
.method static constructor <clinit>()V
    .locals 1

    .prologue
    const/4 v0, 0x0

    .line 10
    sput-boolean v0, Lourpalm/tools/android/logs/Logs;->isShowLog:Z

    .line 11
    sput-boolean v0, Lourpalm/tools/android/logs/Logs;->isShowLog_1:Z

    return-void
.end method


将  const/4 v0, 0x0改成  const/4 v0, 0x1，这样日志就可以输出来了，sput-boolean的解释是Puts boolean value in vx into a static field.
```
13.**支付破解**

在OnyxActivity.smali onCreate里面,进入 mOurpalmChannel.Init(this)代码，我们看到 Ourpalm_Entry.getInstance(mActivity).Ourpalm_Init("2", "1.0", "1.0", mListener);
一般支付都是回调回来的，我们进去mListener里面看是什么

```
class OurpalmIAPListener
    extends Ourpalm_PaymentCallBack
    implements Ourpalm_CallBackListener
  {
     ...
     public void Ourpalm_OrderSuccess(int paramInt, String paramString1, String paramString2)
   {
     Logs.i("MAIN", "Ourpalm_OrderSuccess, code = " + paramInt + " ,ssid = " + paramString1 + " ,pbid = " + paramString2);
     OurpalmChannel.PayResultCallBackNative(false);
   }

   public void Ourpalm_PaymentFail(int paramInt, String paramString1, String paramString2)
   {
     Logs.i("MAIN", "Ourpalm_PaymentFail, code = " + paramInt + " ,ssid = " + paramString1 + " ,pbid = " + paramString2);
     OurpalmChannel.PayResultCallBackNative(false);
   }

   public void Ourpalm_PaymentSuccess(int paramInt, String paramString1, String paramString2)
   {
     Logs.i("MAIN", "Ourpalm_PaymentSuccess, code = " + paramInt + " ,ssid = " + paramString1 + " ,pbid = " + paramString2);
     OurpalmChannel.PayResultCallBackNative(true);
     if (OurpalmChannel.sPayIndentifier_Track.contains("com.ubisoft.rabbids.plungerx"))
     {
       int i = Integer.parseInt(OurpalmChannel.sPayIndentifier_Track.replace("com.ubisoft.rabbids.plungerx", ""));
       Tracking.Pay_Coin(OurpalmChannel.sItemPrice_Track / 100.0F, i, OurpalmChannel.sPayIndentifier_Track);
       return;
     }
     Tracking.Pay_Item(OurpalmChannel.sItemPrice_Track / 100.0F, OurpalmChannel.sItemname_Track, 1, 1.0F, OurpalmChannel.sPayIndentifier_Track);
   }
     ...
  }
```
可以看到里面有支付相关的回调，支付成功失败区别是OurpalmChannel.PayResultCallBackNative(true); OurpalmChannel.PayResultCallBackNative(false)，我们要找到点击支付的位置，然后点击支付直接设置OurpalmChannel.PayResultCallBackNative(true)为支付成功，那我们打开OurpalmChannel.smali，可以找到public static void Pay(String paramString, float paramFloat, int paramInt)，可以在里面加入toast代码，发现点击支付确实是调用的该函数，那么我们把正在支付注释掉，直接设置支付成功,这样就可以随便买什么东西了，亲测有效

```
sget-object v9, Lcom/ubisoft/OnyxEngine/OurpalmChannel;->mListener:Lcom/ubisoft/OnyxEngine/OurpalmChannel$OurpalmIAPListener;

   const-string v10, ""

   const-string v11, ""


   #****************modify start
   #invoke-virtual/range {v0 .. v11}, #Lourpalm/android/pay/Ourpalm_Entry;->Ourpalm_Pay(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lourpalm/android/callback/Ourpal#m_PaymentCallBack;Ljava/lang/String;Ljava/lang/String;)V

  const/4 v0, 0x1
  invoke-static {v0}, Lcom/ubisoft/OnyxEngine/OurpalmChannel;->PayResultCallBackNative(Z)V
  #****************modify end

   .line 233
   sput-object p0, Lcom/ubisoft/OnyxEngine/OurpalmChannel;->sPayIndentifier_Track:Ljava/lang/String;

```
