(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{542:function(t,e,n){},618:function(t,e,n){"use strict";var o=n(542);n.n(o).a},621:function(t,e,n){"use strict";n.r(e);var o=n(41),a=n(0);const u={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"}};var s={data:function(){return{rawPopupConfig:!0,updateEvent:null}},created:function(){o.a.$on("sw-updated",this.onSWUpdated),this.rawPopupConfig=u},computed:{popupConfig:function(){return Object(a.i)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||u["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||u["/"].buttonText}},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then(function(){location.reload(!0)}),this.updateEvent=null)}}},i=(n(618),n(30)),p=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)},[],!1,null,"64bbe3ac",null);e.default=p.exports}}]);