(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{509:function(t,n,e){"use strict";var a=e(12),i=e(31),r=e(178),s=e(175);e(176)("match",1,function(t,n,e,l){return[function(e){var a=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,a):new RegExp(e)[n](String(a))},function(t){var n=l(e,t,this);if(n.done)return n.value;var o=a(t),d=String(this);if(!o.global)return s(o,d);var u=o.unicode;o.lastIndex=0;for(var c,f=[],v=0;null!==(c=s(o,d));){var h=String(c[0]);f[v]=h,""===h&&(o.lastIndex=r(d,i(o.lastIndex),u)),v++}return 0===v?null:f}]})},539:function(t,n,e){},613:function(t,n,e){"use strict";e.r(n),e.d(n,"isPhone",function(){return a});e(509);function a(){var t=navigator.userAgent,n=!t.match(/(iPad).*OS\s([\d_]+)/)&&t.match(/(iPhone\sOS)\s([\d_]+)/),e=t.match(/(Android)\s+([\d.]+)/);return!!(n||e)}},614:function(t,n,e){"use strict";var a=e(539);e.n(a).a},626:function(t,n,e){"use strict";e.r(n);e(119),e(180),e(181),e(182);var a=e(613),i={mounted:function(){if(a.isPhone()){var t=document.getElementById("pcuse");null!=t&&t.parentNode.removeChild(t)}else{var n=document.getElementById("phoneuse");null!=n&&n.parentNode.removeChild(n)}(adsbygoogle=window.adsbygoogle||[]).push({})}},r=(e(614),e(30)),s=Object(r.a)(i,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{attrs:{id:"pcuse",align:"center"}},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-4924092018203651","data-ad-slot":"4765483933","data-ad-format":"auto","data-full-width-responsive":"true"}})]),this._v(" "),n("div",{attrs:{id:"phoneuse",align:"center"}},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-4924092018203651","data-ad-slot":"5632623295"}})])])}],!1,null,null,null);n.default=s.exports}}]);