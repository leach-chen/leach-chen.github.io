(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{509:function(t,e,a){"use strict";var n=a(12),i=a(31),s=a(181),r=a(178);a(179)("match",1,function(t,e,a,d){return[function(a){var n=t(this),i=null==a?void 0:a[e];return void 0!==i?i.call(a,n):new RegExp(a)[e](String(n))},function(t){var e=d(a,t,this);if(e.done)return e.value;var l=n(t),o=String(this);if(!l.global)return r(l,o);var u=l.unicode;l.lastIndex=0;for(var c,f=[],h=0;null!==(c=r(l,o));){var v=String(c[0]);f[h]=v,""===v&&(l.lastIndex=s(o,i(l.lastIndex),u)),h++}return 0===h?null:f}]})},574:function(t,e,a){"use strict";a.r(e),a.d(e,"isPhone",function(){return n});a(509);function n(){var t=navigator.userAgent,e=!t.match(/(iPad).*OS\s([\d_]+)/)&&t.match(/(iPhone\sOS)\s([\d_]+)/),a=t.match(/(Android)\s+([\d.]+)/);return!!(e||a)}},612:function(t,e,a){"use strict";a.r(e);a(77),a(120),a(122),a(123);var n=a(574),i={mounted:function(){if(n.isPhone()){var t=document.getElementById("pcuse");null!=t&&t.parentNode.removeChild(t)}else{var e=document.getElementById("phoneuse");null!=e&&e.parentNode.removeChild(e)}(adsbygoogle=window.adsbygoogle||[]).push({})}},s=a(30),r=Object(s.a)(i,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"pcuse",align:"center"}},[e("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-4924092018203651","data-ad-slot":"4765483933","data-ad-format":"auto","data-full-width-responsive":"true"}})]),this._v(" "),e("div",{attrs:{id:"phoneuse",align:"center"}},[e("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-format":"fluid","data-ad-layout-key":"-fb+5w+4e-db+86","data-ad-client":"ca-pub-4924092018203651","data-ad-slot":"6057013753"}})])])}],!1,null,null,null);e.default=r.exports}}]);