(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{321:function(t,a,n){"use strict";n.r(a);var s=n(1),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"android横竖屏知识点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#android横竖屏知识点","aria-hidden":"true"}},[t._v("#")]),t._v(" Android横竖屏知识点")]),t._v(" "),n("p",[t._v("Android开发过程中难免会遇到横竖屏切换的问题，当横竖屏切换时相应的布局也会切换，如果是在开发Camera相关的功能时，横竖屏切换还要改变摄像头的角度。本篇文章主要讲述横竖屏切换的知识点和实际开发过程中遇到的问题。\n")]),t._v(" "),n("h2",{attrs:{id:"禁止横竖屏切换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#禁止横竖屏切换","aria-hidden":"true"}},[t._v("#")]),t._v(" 禁止横竖屏切换")]),t._v(" "),n("p",[t._v("有些app可能会直接禁止横竖屏切换的功能，在这种情况下，只需要在AndroidManifest.xml中设置activity中的android:screenOrientation属性值来实现即可。")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("  android"),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("screenOrientation"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"portrait"')]),n("span",{attrs:{class:"token comment"}},[t._v("//竖屏")]),t._v("\n  android"),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("screenOrientation"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"landscape"')]),n("span",{attrs:{class:"token comment"}},[t._v("//横屏")]),t._v("\n")])])]),n("p",[t._v("也可以在activity中通过setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE)来设置。")]),t._v(" "),n("h2",{attrs:{id:"允许横竖屏切换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#允许横竖屏切换","aria-hidden":"true"}},[t._v("#")]),t._v(" 允许横竖屏切换")]),t._v(" "),n("p",[t._v("当允许app的横竖屏切换时，由于横竖屏的宽高不同，所以可能会需要不同的布局，切换布局有以下两种方法。")]),t._v(" "),n("ol",[n("li",[t._v("在res目录下建立layout-land和layout-port目录,相应的layout文件名不变，比如main.xml。layout-land是横屏的layout,layout-port是竖屏的layout,当横竖屏切换时,会重启Activity,程序会调用Activity的onCreate方法，从而加载相应的布局。")]),t._v(" "),n("li",[t._v("通过java代码来判断当前是横屏还是竖屏然后来加载相应的xml布局文件。因为当屏幕变为横屏的时候,系统会重新呼叫当前Activity的onCreate方法,你可以把以下方法放在你的onCreate中来检查当前的方向,然后可以让你的setContentView来载入不同的layout xml。")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getResources")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getConfiguration")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orientation"),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v("Configuration"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ORIENTATION_LANDSCAPE"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n   Log"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("i")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"info"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"landscape"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 横屏")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getResources")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getConfiguration")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orientation"),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v("Configuration"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ORIENTATION_PORTRAIT"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  Log"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("i")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"info"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"portrait"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 竖屏")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("注意：由于横竖屏切换会重启Activity，因此在Activity销毁之前要保存当前活动的状态，在Activity的onCreate方法中加载相应的状态即可。")]),t._v(" "),n("h2",{attrs:{id:"通过onconfigurationchanged拦截横竖屏切换时重启"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过onconfigurationchanged拦截横竖屏切换时重启","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过onConfigurationChanged拦截横竖屏切换时重启")]),t._v(" "),n("p",[t._v('Activity每次横竖屏切换都会重新调用onPause-> onStop-> onDestory-> onCreate->onStart->onResume，为此涉及到内容和数据的保存和读取，否则转屏之前的内容就会消失了。很多时候这样的结果让程序繁琐，为此Android提供了在manifest中设置android:configChanges属性，从而让Activity不延续上述的重建流程。在Android 3.2（API Level 13）以前的 SDK 可以使用如下配置android:configChanges="orientation|keyboardHidden"而 Android 3.2 以后的 SDK 则需要设置为android:configChanges="keyboardHidden|orientation|screenSize"。这样Activity横竖屏切换时不会重启，并且会回调onConfigurationChanged方法,并可以为其设置布局。')]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("onConfigurationChanged")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Configuration config"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("super")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("onConfigurationChanged")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orientation "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" Configuration"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ORIENTATION_PORTRAIT"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("setContentView")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//布局")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orientation "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" Configuration"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ORIENTATION_LANDSCAPE"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("setContentView")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("//布局")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"判断当前屏幕方向"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#判断当前屏幕方向","aria-hidden":"true"}},[t._v("#")]),t._v(" 判断当前屏幕方向")]),t._v(" "),n("p",[t._v("有了上面的横竖屏切换的回调，我们就可以及时感知到屏幕的状态变化。但因为竖屏、横屏都有两个不同的方向，所以Android系统又提供了方法给我们获取当前屏幕精确的旋转方向。")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("Display display "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" activity"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getWindowManager")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getDefaultDisplay")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("display"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getRotation")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" Surface"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ROTATION_90"),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("//旋转90度")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("break")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" Surface"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ROTATION_180"),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("//旋转180度")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("break")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" Surface"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ROTATION_270"),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("//旋转270度")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("break")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("//旋转0度")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("break")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"横竖屏切换时生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#横竖屏切换时生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 横竖屏切换时生命周期")]),t._v(" "),n("ol",[n("li",[t._v("不设置Activity的android:configChanges时，切屏会重新调用各个生命周期，切横屏时会执行一次，切竖屏时会执行两次。")]),t._v(" "),n("li",[t._v('设置Activity的android:configChanges="orientation"时，切屏还是会重新调用各个生命周期，切横、竖屏时只会执行一次。')])])])}],!1,null,null,null);o.options.__file="android18.md";a.default=o.exports}}]);