(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{509:function(t,a,e){"use strict";var n=e(12),i=e(31),s=e(181),l=e(178);e(179)("match",1,function(t,a,e,o){return[function(e){var n=t(this),i=null==e?void 0:e[a];return void 0!==i?i.call(e,n):new RegExp(e)[a](String(n))},function(t){var a=o(e,t,this);if(a.done)return a.value;var r=n(t),d=String(this);if(!r.global)return l(r,d);var u=r.unicode;r.lastIndex=0;for(var c,b=[],h=0;null!==(c=l(r,d));){var v=String(c[0]);b[h]=v,""===v&&(r.lastIndex=s(d,i(r.lastIndex),u)),h++}return 0===h?null:b}]})},574:function(t,a,e){"use strict";e.r(a),e.d(a,"isPhone",function(){return n});e(509);function n(){var t=navigator.userAgent,a=!t.match(/(iPad).*OS\s([\d_]+)/)&&t.match(/(iPhone\sOS)\s([\d_]+)/),e=t.match(/(Android)\s+([\d.]+)/);return!!(a||e)}},612:function(t,a,e){"use strict";e.r(a);e(76),e(120),e(121),e(122);var n=e(574),i={mounted:function(){if(n.isPhone()){var t=document.getElementById("pcuse");null!=t&&t.parentNode.removeChild(t),console.log("aaaaaaaaaaaaaa")}else{var a=document.getElementById("phoneuse");null!=a&&a.parentNode.removeChild(a),console.log("bbbbbbbbbbbb")}(adsbygoogle=window.adsbygoogle||[]).push({})}},s=e(30),l=Object(s.a)(i,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{attrs:{id:"pcuse",align:"center"}},[a("p",[this._v("aaaaaaaaa")]),this._v(" "),a("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-4924092018203651","data-ad-slot":"4765483933","data-ad-format":"auto","data-full-width-responsive":"true"}})]),this._v(" "),a("div",{attrs:{id:"phoneuse",align:"center"}},[a("p",[this._v("bbbbbbbbb")]),this._v(" "),a("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-format":"fluid","data-ad-layout-key":"-fb+5w+4e-db+86","data-ad-client":"ca-pub-4924092018203651","data-ad-slot":"6057013753"}})])])}],!1,null,null,null);a.default=l.exports}}]);