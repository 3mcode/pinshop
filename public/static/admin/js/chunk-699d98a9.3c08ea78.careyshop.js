(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-699d98a9"],{"0a61":function(t,e,n){"use strict";var a=n("c3f1"),o=n.n(a);o.a},"707d":function(t,e,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function a(t,e,n,a){return new(n||(n=Promise))((function(o,r){function i(t){try{l(a.next(t))}catch(t){r(t)}}function c(t){try{l(a.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}l((a=a.apply(t,e||[])).next())}))}function o(t,e){var n,a,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(o=2&r[0]?a.return:r[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,r[1])).done)return o;switch(a=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,a=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(o=i.trys,!((o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=e.call(t,i)}catch(t){r=[6,t],a=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}}n.d(e,"a",(function(){return C}));var r=function(t){};function i(t){r(t)}(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]");var c,l,u,s,d="undefined"==typeof navigator?void 0:navigator,v=null==d?void 0:d.clipboard,f=(null===(c=null==v?void 0:v.read)||void 0===c||c.bind(v),null===(l=null==v?void 0:v.readText)||void 0===l||l.bind(v),null===(u=null==v?void 0:v.write)||void 0===u||u.bind(v),null===(s=null==v?void 0:v.writeText)||void 0===s?void 0:s.bind(v)),p="undefined"==typeof window?void 0:window,m=(null==p||p.ClipboardItem,p);function b(){return"undefined"==typeof ClipboardEvent&&void 0!==m.clipboardData&&void 0!==m.clipboardData.setData}var h=function(){this.success=!1};function y(t,e,n){for(var a in i("listener called"),t.success=!0,e){var o=e[a],r=n.clipboardData;r.setData(a,o),"text/plain"===a&&r.getData(a)!==o&&(i("setting text/plain failed"),t.success=!1)}n.preventDefault()}function g(t){var e=new h,n=y.bind(this,e,t);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return e.success}function w(t,e){x(t);var n=g(e);return k(),n}function x(t){var e=document.getSelection();if(e){var n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}}function k(){var t=document.getSelection();t&&t.removeAllRanges()}function _(t){return a(this,void 0,void 0,(function(){var e;return o(this,(function(n){if(e="text/plain"in t,b()){if(!e)throw new Error("No `text/plain` value was specified.");if(a=t["text/plain"],m.clipboardData.setData("Text",a))return[2,!0];throw new Error("Copying failed, possibly because the user rejected it.")}var a;return g(t)?(i("regular execCopy worked"),[2,!0]):navigator.userAgent.indexOf("Edge")>-1?(i('UA "Edge" => assuming success'),[2,!0]):w(document.body,t)?(i("copyUsingTempSelection worked"),[2,!0]):function(t){var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important"),e.textContent="temporary element",document.body.appendChild(e);var n=w(e,t);return document.body.removeChild(e),n}(t)?(i("copyUsingTempElem worked"),[2,!0]):function(t){i("copyTextUsingDOM");var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important");var n=e;e.attachShadow&&(i("Using shadow DOM."),n=e.attachShadow({mode:"open"}));var a=document.createElement("span");a.innerText=t,n.appendChild(a),document.body.appendChild(e),x(a);var o=document.execCommand("copy");return k(),document.body.removeChild(e),o}(t["text/plain"])?(i("copyTextUsingDOM worked"),[2,!0]):[2,!1]}))}))}function C(t){return a(this,void 0,void 0,(function(){return o(this,(function(e){if(f)return i("Using `navigator.clipboard.writeText()`."),[2,f(t)];if(!_(function(t){var e={};return e["text/plain"]=t,e}(t)))throw new Error("writeText() failed");return[2]}))}))}(function(){function t(t,e){var n;for(var a in void 0===e&&(e={}),this.types=Object.keys(t),this._items={},t){var o=t[a];this._items[a]="string"==typeof o?D(a,o):o}this.presentationStyle=null!==(n=null==e?void 0:e.presentationStyle)&&void 0!==n?n:"unspecified"}t.prototype.getType=function(t){return a(this,void 0,void 0,(function(){return o(this,(function(e){return[2,this._items[t]]}))}))}})();function D(t,e){return new Blob([e],{type:t})}},c3f1:function(t,e,n){},c9d8:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",{attrs:{"is-back":!1}},[n("el-form",{staticClass:"form-box cs-m",attrs:{"label-width":"150px","label-position":"left"}},[n("el-form-item",{staticClass:"action",attrs:{label:t.delivery.name}},[n("span",[t._v(t._s(t.delivery.value))]),n("el-button",{staticClass:"form-button active",attrs:{type:"text",size:"small"},on:{click:function(e){return t.copyData(t.delivery.value)}}},[t._v("复制")])],1),n("el-form-item",{staticClass:"action",attrs:{label:t.captcha.name}},[n("span",[t._v(t._s(t.captcha.value))]),n("el-button",{staticClass:"form-button active",attrs:{type:"text",size:"small"},on:{click:function(e){return t.copyData(t.captcha.value)}}},[t._v("复制")])],1),n("el-form-item",{staticClass:"action",attrs:{label:t.qrcode.name}},[n("span",[t._v(t._s(t.qrcode.value))]),n("el-button",{staticClass:"form-button active",attrs:{type:"text",size:"small"},on:{click:function(e){return t.copyData(t.qrcode.value)}}},[t._v("复制")])],1),n("el-form-item",{staticClass:"action",attrs:{label:t.barcode.name}},[n("span",[t._v(t._s(t.barcode.value))]),n("el-button",{staticClass:"form-button active",attrs:{type:"text",size:"small"},on:{click:function(e){return t.copyData(t.barcode.value)}}},[t._v("复制")])],1),n("el-form-item",{attrs:{size:"small"}},[n("el-button",{on:{click:function(e){return t.getInfoData("操作成功")}}},[t._v("刷新")])],1)],1)],1)},o=[],r=(n("4160"),n("159b"),n("2400")),i=n("707d"),c={name:"setting-setting-info",data:function(){return{delivery:{name:"快递鸟推送回调URL",value:""},qrcode:{name:"二维码调用URL",value:""},barcode:{name:"条形码调用URL",value:""},captcha:{name:"应用验证码调用URL",value:""}}},mounted:function(){this.getInfoData()},methods:{getInfoData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=[{version:"v1",controller:"delivery_dist",method:"get.delivery.dist.callback"},{version:"v1",controller:"qrcode",method:"get.qrcode.callurl"},{version:"v1",controller:"barcode",method:"get.barcode.callurl"},{version:"v1",controller:"app",method:"get.app.captcha.callurl"}];Object(r["a"])(n).then((function(n){n.data.forEach((function(e){if(200===e.status)switch(e.method){case"get.delivery.dist.callback":t.delivery.value=e.data.callback_url;break;case"get.app.captcha.callurl":t.captcha.value=e.data.call_url;break;case"get.qrcode.callurl":t.qrcode.value=e.data.call_url;break;case"get.barcode.callurl":t.barcode.value=e.data.call_url;break}})),e&&t.$message.success(e)}))},copyData:function(t){var e=this;i["a"](t).then((function(){e.$message.success("已复制到剪贴板")})).catch((function(t){e.$message.error(t)}))}}},l=c,u=(n("0a61"),n("2877")),s=Object(u["a"])(l,a,o,!1,null,"e61cc176",null);e["default"]=s.exports}}]);