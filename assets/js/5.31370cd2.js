(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{534:function(t,s,e){},535:function(t,s,e){},583:function(t,s,e){t.exports=e.p+"assets/img/yanhua.d5507315.jpg"},584:function(t,s,e){t.exports=e.p+"assets/img/gameshow.10140594.jpg"},585:function(t,s,e){"use strict";var i=e(534);e.n(i).a},586:function(t,s,e){"use strict";var i=e(535);e.n(i).a},618:function(t,s,e){"use strict";e.r(s);e(73),e(117),e(118),e(119);var i,n,o,a,c,r,h=[],l=[],d=120,u=5,p=0,m=80,g=0,v=!1;function y(t,s){return Math.random()*(s-t)+t}function _(t,s,e,i){var n=t-e,o=s-i;return Math.sqrt(Math.pow(n,2)+Math.pow(o,2))}function w(t,s,e,i){for(this.x=t,this.y=s,this.sx=t,this.sy=s,this.tx=e,this.ty=i,this.distanceToTarget=_(t,s,e,i),this.distanceTraveled=0,this.coordinates=[],this.coordinateCount=3;this.coordinateCount--;)this.coordinates.push([this.x,this.y]);this.angle=Math.atan2(i-s,e-t),this.speed=2,this.acceleration=1.05,this.brightness=y(50,70),this.targetRadius=1}function f(t,s){for(this.x=t,this.y=s,this.coordinates=[],this.coordinateCount=5;this.coordinateCount--;)this.coordinates.push([this.x,this.y]);this.angle=y(0,2*Math.PI),this.speed=y(1,10),this.friction=.95,this.gravity=1,this.hue=y(d-20,d+20),this.brightness=y(50,80),this.alpha=1,this.decay=y(.015,.03)}function F(){requestAnimFrame(F),d+=.5,n.globalCompositeOperation="destination-out",n.fillStyle="rgba(0, 0, 0, 0.5)",n.fillRect(0,0,o,a),n.globalCompositeOperation="lighter";for(var t=h.length;t--;)h[t].draw(),h[t].update(t);for(t=l.length;t--;)l[t].draw(),l[t].update(t);g>=m?v||(h.push(new w(o/2,a,y(0,o),y(0,a/2))),g=0):g++,p>=u?v&&(h.push(new w(o/2,a,c,r)),p=0):p++}function b(){i=document.getElementById("canvas"),n=i.getContext("2d"),o=window.innerWidth,a=window.innerHeight,h=[],l=[],d=120,u=5,p=0,m=80,g=0,v=!1,i.width=o,i.height=a,i.addEventListener("mousemove",function(t){c=t.pageX-i.offsetLeft,r=t.pageY-i.offsetTop}),i.addEventListener("mousedown",function(t){t.preventDefault(),v=!0}),i.addEventListener("mouseup",function(t){t.preventDefault(),v=!1}),window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}w.prototype.update=function(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.targetRadius<8?this.targetRadius+=.3:this.targetRadius=1,this.speed*=this.acceleration;var s=Math.cos(this.angle)*this.speed,e=Math.sin(this.angle)*this.speed;this.distanceTraveled=_(this.sx,this.sy,this.x+s,this.y+e),this.distanceTraveled>=this.distanceToTarget?(!function(t,s){var e=30;for(;e--;)l.push(new f(t,s))}(this.tx,this.ty),h.splice(t,1)):(this.x+=s,this.y+=e)},w.prototype.draw=function(){n.beginPath(),n.moveTo(this.coordinates[this.coordinates.length-1][0],this.coordinates[this.coordinates.length-1][1]),n.lineTo(this.x,this.y),n.strokeStyle="hsl("+d+", 100%, "+this.brightness+"%)",n.stroke(),n.beginPath(),n.arc(this.tx,this.ty,this.targetRadius,0,2*Math.PI),n.stroke()},f.prototype.update=function(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=this.decay&&l.splice(t,1)},f.prototype.draw=function(){n.beginPath(),n.moveTo(this.coordinates[this.coordinates.length-1][0],this.coordinates[this.coordinates.length-1][1]),n.lineTo(this.x,this.y),n.strokeStyle="hsla("+this.hue+", 100%, "+this.brightness+"%, "+this.alpha+")",n.stroke()};var x={data:function(){return{testvalue:"",imgurlbk1:"",index:0,run1:0,run2:0,run3:0}},mounted:function(){var t=this;b(),F(),this.run1=setInterval(this.showcmd1,100),setTimeout(function(){document.getElementById("resultshow1").style.display="",document.getElementById("nameshow2").style.display="",document.getElementById("cmdshow2").style.display="",t.run2=setInterval(t.showcmd2,200),setTimeout(function(){document.getElementById("nameshow3").style.display="",document.getElementById("cmdshow3").style.display="",t.run3=setInterval(t.showcmd3,200),setTimeout(function(){document.getElementById("resultshow3").style.display=""},1200)},1200)},1e3)},created:function(){(new Date).getTime();var t=new Date,s=t.getFullYear(),e=t.getMonth()+1,i=t.getDate();t.getHours(),t.getMinutes(),t.getSeconds();this.imgurlbk1="https://www.leachchen.com/storeother/img/bk1.jpg?time="+s+e+i},methods:{goAndroid:function(){this.$router.push("/github/android/all/")},goIos:function(){this.$router.push("/github/ios/all/")},goFlutter:function(){this.$router.push("/github/flutter/all/")},goVue:function(){this.$router.push("/github/vue/all/")},goH5:function(){this.$router.push("/github/h5/all/")},goGame:function(){this.$router.push("/game/all/")},goTool:function(){this.$router.push("/tool/all/")},goContribute:function(){this.$router.push("/join/")},goGithub:function(){this.$router.push("/github/android/all/")},goBlog:function(){this.$router.push("https://www.leachchen.com/blog")},showcmd1:function(){if(null!=document.getElementById("cmdshow1place")){var t=document.getElementById("cmdshow1place").innerHTML;document.getElementById("cmdshow1").innerText=t.substring(0,this.index++),this.index>t.length&&(clearInterval(this.run1),this.index=0)}},showcmd2:function(){if(null!=document.getElementById("cmdshow2place")){var t=document.getElementById("cmdshow2place").innerHTML;document.getElementById("cmdshow2").innerText=t.substring(0,this.index++),this.index>t.length&&(clearInterval(this.run2),this.index=0)}},showcmd3:function(){if(null!=document.getElementById("cmdshow3place")){var t=document.getElementById("cmdshow3place").innerHTML;document.getElementById("cmdshow3").innerText=t.substring(0,this.index++),this.index>t.length&&(clearInterval(this.run3),this.index=0)}}}},C=(e(585),e(586),e(29)),I=Object(C.a)(x,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("el-container",{attrs:{direction:"vertical"}},[i("div",{staticClass:"commontent contentpart1",staticStyle:{"z-index":"2"}},[i("el-card",{staticClass:"box-card"},[i("h1",[t._v("资源小仓库")]),t._v(" "),i("p",[t._v("你想找的,或许这里就有。点击屏幕,让烟花尽情绽放吧~~~")]),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"imgcontent"},[i("div",{staticClass:"spanshow",staticStyle:{position:"absolute",margin:"10px","text-align":"left","z-index":"2"}},[i("span",{staticClass:"color_7ABA30",attrs:{id:"nameshow1"}},[t._v("leachchen@ubuntu"),i("span",{staticClass:"color_FFFFFF"},[t._v(":")]),i("span",{staticClass:"color_6487AD"},[t._v("~")]),i("span",{staticClass:"color_FFFFFF"},[t._v("$ ")])]),i("span",{staticClass:"color_FFFFFF",attrs:{id:"cmdshow1"}}),i("span",{staticStyle:{display:"none"},attrs:{id:"cmdshow1place"}},[t._v("ls /")]),i("br"),t._v(" "),i("span",{staticClass:"color_6487AD",staticStyle:{display:"none"},attrs:{id:"resultshow1"}},[t._v("资源库")]),i("br"),t._v(" "),i("span",{staticClass:"color_7ABA30",staticStyle:{display:"none"},attrs:{id:"nameshow2"}},[t._v("leachchen@ubuntu"),i("span",{staticClass:"color_FFFFFF"},[t._v(":")]),i("span",{staticClass:"color_6487AD"},[t._v("~")]),i("span",{staticClass:"color_FFFFFF"},[t._v("$  ")])]),i("span",{staticClass:"color_FFFFFF",staticStyle:{display:"none"},attrs:{id:"cmdshow2"}}),i("span",{staticStyle:{display:"none"},attrs:{id:"cmdshow2place"}},[t._v("cd 资源库/")]),i("br"),t._v(" "),i("span",{staticClass:"color_7ABA30",staticStyle:{display:"none"},attrs:{id:"nameshow3"}},[t._v("leachchen@ubuntu"),i("span",{staticClass:"color_FFFFFF"},[t._v(":")]),i("span",{staticClass:"color_6487AD"},[t._v("~/资源库")]),i("span",{staticClass:"color_FFFFFF"},[t._v("$ ")])]),i("span",{staticClass:"color_FFFFFF",staticStyle:{display:"none"},attrs:{id:"cmdshow3"}}),i("span",{staticStyle:{display:"none"},attrs:{id:"cmdshow3place"}},[t._v("ls /")]),i("br"),t._v(" "),i("span",{staticStyle:{display:"none"},attrs:{id:"resultshow3"}},[i("a",{on:{click:t.goAndroid}},[t._v("Android")]),t._v("     "),i("a",{on:{click:t.goIos}},[t._v("IOS")]),t._v("     "),i("a",{on:{click:t.goFlutter}},[t._v("Flutter")]),t._v("     "),i("a",{on:{click:t.goVue}},[t._v("Vue")]),t._v("    "),i("a",{on:{click:t.goH5}},[t._v("H5")]),t._v("     "),i("a",{on:{click:t.goGame}},[t._v("游戏")]),t._v("     "),i("a",{on:{click:t.goTool}},[t._v("工具")])]),i("br")]),t._v(" "),i("img",{staticStyle:{position:"absolute",height:"50px",bottom:"-50px","z-index":"3"},attrs:{src:e(583)}}),t._v(" "),i("canvas",{staticStyle:{height:"100%","background-color":"#310924"},attrs:{id:"canvas"}},[i("span",{staticClass:"STYLE1"},[t._v("Open IE effect more perfect ")])])]),t._v(" "),i("el-row",{staticStyle:{"margin-bottom":"10px"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.goGithub}},[t._v("探索资源")])],1),t._v(" "),i("Adsense")],1)],1),t._v(" "),i("div",{staticClass:"commontent contentpart2"},[i("el-card",{staticClass:"box-card"},[i("h1",[t._v("Github 资源站")]),t._v(" "),i("p",[t._v("在这里收集了Android，IOS，Flutter，Vue，H5完整项目，实用性高的组件。项目均包含源码及部分可直接预览效果，节省你的资源寻找及编译时间")]),t._v(" "),i("div",{staticClass:"imgcontent"},[i("img",{attrs:{src:t.imgurlbk1}})]),t._v(" "),i("el-row",{staticStyle:{"margin-bottom":"10px"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.goContribute}},[t._v("贡献资源")])],1),t._v(" "),i("Adsense")],1)],1),t._v(" "),i("div",{staticClass:"commontent contentpart3"},[i("el-card",{staticClass:"box-card"},[i("h1",[t._v("休闲一刻")]),t._v(" "),i("p",[t._v("在这里收集了众多可在线玩的游戏及源码")]),t._v(" "),i("div",{staticClass:"imgcontent"},[i("img",{attrs:{src:e(584)}})]),t._v(" "),i("el-row",{staticStyle:{"margin-bottom":"10px"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.goGame}},[t._v("立刻前往")])],1),t._v(" "),i("Adsense")],1)],1),t._v(" "),i("div",{staticClass:"commontent contentpart4"},[i("p",{staticStyle:{color:"#fff"}},[t._v("2019 © Leach Chen")]),t._v(" "),i("span",{staticStyle:{color:"#fff","font-size":"12px","margin-left":"10px","margin-top":"5px"},attrs:{id:"busuanzi_container_site_pv"}},[t._v("访问量："),i("span",{attrs:{id:"busuanzi_value_site_pv"}}),t._v("次")])])])},[],!1,null,"a01d9fc2",null);s.default=I.exports}}]);