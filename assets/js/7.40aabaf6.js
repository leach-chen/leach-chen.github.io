(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{509:function(t,e,a){"use strict";var n=a(12),i=a(31),r=a(181),s=a(178);a(179)("match",1,function(t,e,a,l){return[function(a){var n=t(this),i=null==a?void 0:a[e];return void 0!==i?i.call(a,n):new RegExp(a)[e](String(n))},function(t){var e=l(a,t,this);if(e.done)return e.value;var d=n(t),o=String(this);if(!d.global)return s(d,o);var u=d.unicode;d.lastIndex=0;for(var c,h=[],v=0;null!==(c=s(d,o));){var f=String(c[0]);h[v]=f,""===f&&(d.lastIndex=r(o,i(d.lastIndex),u)),v++}return 0===v?null:h}]})},574:function(t,e,a){"use strict";a.r(e),a.d(e,"isPhone",function(){return n});a(509);function n(){var t=navigator.userAgent,e=!t.match(/(iPad).*OS\s([\d_]+)/)&&t.match(/(iPhone\sOS)\s([\d_]+)/),a=t.match(/(Android)\s+([\d.]+)/);return!!(e||a)}},612:function(t,e,a){"use strict";a.r(e);var n=a(574),i={mounted:function(){if(n.isPhone()){var t=document.getElementById("pcuse");null!=t&&t.parentNode.removeChild(t)}else{var e=document.getElementById("phoneuse");null!=e&&e.parentNode.removeChild(e)}(adsbygoogle=window.adsbygoogle||[]).push({})}},r=a(30),s=Object(r.a)(i,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"pcuse",align:"center"}},[e("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-4924092018203651","data-ad-slot":"4765483933","data-ad-format":"auto","data-full-width-responsive":"true"}})]),this._v(" "),e("div",{attrs:{id:"phoneuse",align:"center"}},[e("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-4924092018203651","data-ad-slot":"5632623295"}})])])}],!1,null,null,null);e.default=s.exports}}]);