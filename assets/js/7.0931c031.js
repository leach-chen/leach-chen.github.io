(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{509:function(t,n,e){"use strict";var a=e(12),i=e(31),r=e(181),s=e(178);e(179)("match",1,function(t,n,e,l){return[function(e){var a=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,a):new RegExp(e)[n](String(a))},function(t){var n=l(e,t,this);if(n.done)return n.value;var o=a(t),d=String(this);if(!o.global)return s(o,d);var u=o.unicode;o.lastIndex=0;for(var c,f=[],v=0;null!==(c=s(o,d));){var h=String(c[0]);f[v]=h,""===h&&(o.lastIndex=r(d,i(o.lastIndex),u)),v++}return 0===v?null:f}]})},531:function(t,n,e){},575:function(t,n,e){"use strict";e.r(n),e.d(n,"isPhone",function(){return a});e(509);function a(){var t=navigator.userAgent,n=!t.match(/(iPad).*OS\s([\d_]+)/)&&t.match(/(iPhone\sOS)\s([\d_]+)/),e=t.match(/(Android)\s+([\d.]+)/);return!!(n||e)}},576:function(t,n,e){"use strict";var a=e(531);e.n(a).a},614:function(t,n,e){"use strict";e.r(n);e(76),e(120),e(121),e(122);var a=e(575),i={mounted:function(){if(a.isPhone()){var t=document.getElementById("pcuse");null!=t&&t.parentNode.removeChild(t)}else{var n=document.getElementById("phoneuse");null!=n&&n.parentNode.removeChild(n)}(adsbygoogle=window.adsbygoogle||[]).push({})}},r=(e(576),e(30)),s=Object(r.a)(i,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{attrs:{id:"pcuse",align:"center"}},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block"},attrs:{"data-ad-client":"ca-pub-4924092018203651","data-ad-slot":"4765483933","data-ad-format":"auto","data-full-width-responsive":"true"}})]),this._v(" "),n("div",{attrs:{id:"phoneuse",align:"center"}},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-4924092018203651","data-ad-slot":"5632623295"}})])])}],!1,null,null,null);n.default=s.exports}}]);