(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-585b8ceb","chunk-746f172d"],{1213:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"f",(function(){return s})),a.d(t,"n",(function(){return l})),a.d(t,"g",(function(){return d})),a.d(t,"e",(function(){return u})),a.d(t,"h",(function(){return c})),a.d(t,"l",(function(){return p})),a.d(t,"m",(function(){return h})),a.d(t,"b",(function(){return f})),a.d(t,"k",(function(){return m})),a.d(t,"j",(function(){return g})),a.d(t,"i",(function(){return v})),a.d(t,"d",(function(){return b})),a.d(t,"c",(function(){return y}));var r=a("5530"),o=a("bc07"),n="/v1/storage";function i(e){return Object(o["a"])({url:n,method:"post",data:Object(r["a"])({method:"add.storage.directory.item"},e)})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"desc",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"storage_id";return Object(o["a"])({url:n,method:"post",data:{method:"get.storage.directory.select",order_type:e,order_field:t}})}function l(e,t){return Object(o["a"])({url:n,method:"post",data:{method:"set.storage.directory.default",storage_id:e,is_default:t}})}function d(e){return Object(o["a"])({url:n,method:"post",data:Object(r["a"])({method:"get.storage.list"},e)})}function u(e){return Object(o["a"])({url:n,method:"post",data:Object(r["a"])({method:"get.storage.collection"},e)})}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Object(o["a"])({url:n,method:"post",data:{method:"get.storage.navi",storage_id:e,is_layer:t}})}function p(e,t){return Object(o["a"])({url:n,method:"post",data:{method:"rename.storage.item",storage_id:e,name:t}})}function h(e,t){return Object(o["a"])({url:n,method:"post",data:{method:"set.storage.cover",storage_id:e,parent_id:t}})}function f(e){return Object(o["a"])({url:n,method:"post",data:{method:"clear.storage.cover",storage_id:e}})}function m(e,t){return Object(o["a"])({url:n,method:"post",data:{method:"move.storage.list",storage_id:e,parent_id:t}})}function g(e){return Object(o["a"])({url:n,method:"post",data:Object(r["a"])({method:"get.storage.thumb.url"},e)})}function v(e,t){return Object(o["a"])({url:n,method:"post",data:{method:"get.storage.thumb.info",url:e,source:t}})}function b(e){return Object(o["a"])({url:n,method:"post",data:{method:"del.storage.list",storage_id:e}})}function y(e){return Object(o["a"])({url:n,method:"post",data:{method:"clear.storage.thumb",storage_id:e}})}},4904:function(e,t,a){},8422:function(e,t,a){"use strict";a.r(t);a("4160"),a("b0c0"),a("159b");var r,o,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-upload",{attrs:{action:e.uploadUrl,data:e.params,"file-list":e.fileList,"list-type":e.listType,multiple:e.multiple,"show-file-list":e.showFileList,drag:e.drag,accept:e.accept,limit:e.limit,"auto-upload":e.autoUpload,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-upload":e.handleBeforeUpload,"on-success":e.handleSuccess,"on-error":e.handleError,"on-exceed":e.handleExceed}},[a("i",{staticClass:"el-icon-plus"}),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.uploadTip)+"大小不能超过 "+e._s(this.token["file_size"]))])]),null==e.storageId?a("el-cascader",{style:"width: "+e.fileWidth,attrs:{options:e.parentData,props:e.parentProps,filterable:""},model:{value:e.parentId,callback:function(t){e.parentId=t},expression:"parentId"}}):e._e()],1)},i=[],s=(a("a9e3"),a("99af"),a("a623"),a("c975"),a("a434"),a("b64b"),a("d3b7"),a("ac1f"),a("25f0"),a("1276"),a("5530")),l=a("ca00"),d=a("a320"),u=a("1213"),c={data:function(){return{moduleName:"",replaceId:0,updateToken:!0,token:{},params:{},uploadUrl:"",parentId:-1,parentData:[],parentProps:{value:"storage_id",label:"name",children:"children",checkStrictly:!0,emitPath:!1}}},methods:{getToken:function(){var e=this,t=Math.round(new Date/1e3)+100;return 0!==this.token.expires&&t>this.token.expires&&(this.updateToken=!0),new Promise((function(t){if(!e.updateToken)return t();e.params={},e.replaceId?Object(d["c"])(e.replaceId).then((function(a){e.token=a.data||{},e.uploadUrl=e.token.token.upload_url.upload_url,e.updateToken=!1,t()})):Object(d["b"])(e.moduleName).then((function(a){e.token=a.data||{},e.uploadUrl=e.token.token.upload_url.upload_url,e.updateToken=!1,t()}))}))},handleRemove:function(e,t){if("success"===e.status&&e.response){var a=e.response.data;if(a&&a[0].storage_id){var r=a[0].storage_id;Object(u["d"])(Array.isArray(r)?r:[r])}}this.$emit("upload",t)},handlePreview:function(e){if("success"===e.status){var t=e.response.data;if(t.length&&0===t[0].type)return void this.$preview(t[0].url)}this.$message.warning("当前模式或资源不支持预览")},handleBeforeUpload:function(e){var t=this;if(!this.token||!this.uploadUrl)return this.$message.error("上传组件初始化中或配置错误"),!1;var a=l["a"].stringToByte(this.token.file_size);if(a>0&&e.size>a)return this.$message.error("上传资源大小不能超过 ".concat(this.token.file_size)),!1;var r=e.name.toLowerCase().split(".").splice(-1).toString(),o=this.token.file_ext+","+this.token.image_ext;if(-1===o.indexOf(r))return this.$message.error("上传资源的文件后缀不允许上传"),!1;var n=this.token.token.upload_url.param;n.forEach((function(a){if("file"!==a.name&&(t.params[a.name]=Object.prototype.hasOwnProperty.call(t.token.token,a.name)?t.token.token[a.name]:a.default,!t.replaceId&&("x:filename"===a.name&&(t.params["x:filename"]=e.name),"x:parent_id"===a.name&&(t.params["x:parent_id"]=0,null!==t.storageId?t.params["x:parent_id"]=t.storageId:t.params["x:parent_id"]=t.parentId<=0?0:t.parentId),"key"===a.name))){var o=l["a"].guid();t.params.key="".concat(t.token.token.dir).concat(o,".").concat(r)}})),"careyshop"===this.token.token.upload_url.module&&(this.params.token=l["a"].cookies.get("token"),this.params.appkey=this.$baseConfig.APP_KEY,this.params.timestamp=Math.round(new Date/1e3)+100,this.params.format="json",this.params.method="add.upload.list",this.params.sign=l["a"].getSign(Object(s["a"])({},this.params))),this.autoUpload&&(this.loading=!0)},handleSuccess:function(e,t,a){if(200===e.status&&e.data)return 200!==e.data[0].status?void this.handleError(e.data[0].message,t,a):(this.$emit("upload",a),void this.handleChange(a));this.handleError(e.message,t,a)},handleError:function(e,t,a){this.$message.error("资源：".concat(t.name," 上传失败")),l["a"].log.danger("资源上传失败："+(e||t.response));for(var r=a.length-1;r>=0;r--)if(t===a[r]){a.splice(r,1),this.$emit("upload",a);break}this.handleChange(a)},handleExceed:function(e,t){if(t.length>=this.limit)this.$message.warning("最多只能上传 ".concat(this.limit," 个文件"));else if(e.length+t.length>this.limit){var a=this.limit-t.length;this.$message.warning("上传数量超出限制，最多还能选择 ".concat(a," 个文件"))}},handleChange:function(e){this.autoUpload&&Object.keys(e).every((function(t){return"success"===e[t].status}))&&(this.loading=!1)},getDirectory:function(){var e=this;null!==this.storageId||this.parentData.length>0||Object(u["f"])().then((function(t){e.parentData=l["a"].formatDataToTree(t.data.list,"storage_id"),e.parentData.unshift({storage_id:-1,parent_id:0,name:"根目录"}),e.parentId=t.data.default||-1}))}}},p={name:"cs-upload-comp",mixins:[c],props:{uploadTip:{type:String,required:!1,default:"请选择图片进行上传，"},listType:{type:String,required:!1,default:"picture-card"},multiple:{type:Boolean,required:!1,default:!1},showFileList:{type:Boolean,required:!1,default:!0},drag:{type:Boolean,required:!1,default:!1},accept:{type:String,required:!1,default:"image/*"},limit:{type:Number,required:!1,default:0},autoUpload:{type:Boolean,required:!1,default:!0},fileList:{type:Array,required:!1,default:function(){return[]}},storageId:{type:Number,required:!1,default:null},fileWidth:{type:String,required:!1,default:"30%"}},mounted:function(){this.getDirectory(),this.getToken()}},h=p,f=a("2877"),m=Object(f["a"])(h,n,i,!1,null,null,null),g=m.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"upload-control",on:{click:function(t){e.visible=!0}}},[e._t("control"),a("el-dialog",{attrs:{width:"400px",visible:e.visible,"append-to-body":!0,"close-on-click-modal":!1},on:{"update:visible":function(t){e.visible=t},open:e.handleOpen,close:e.handleClose}},[a("el-upload",{ref:"upload",attrs:{"list-type":e.listType,action:e.uploadUrl,data:e.params,multiple:e.multiple,"show-file-list":e.showFileList,drag:e.drag,accept:e.accept,limit:e.limit,"auto-upload":e.autoUpload,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-upload":e.handleBeforeUpload,"on-success":e.handleSuccess,"on-error":e.handleError,"on-exceed":e.handleExceed}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v("将资源拖到此处，或"),a("em",[e._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.uploadTip)+"大小不能超过 "+e._s(this.token["file_size"]))])]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"cs-fl"},[null==e.storageId?a("el-cascader",{attrs:{options:e.parentData,props:e.parentProps,size:"small",filterable:""},model:{value:e.parentId,callback:function(t){e.parentId=t},expression:"parentId"}}):e._e()],1),a("el-button",{attrs:{size:"small"},on:{click:e.handleClose}},[e._v("取消")]),a("el-button",{attrs:{loading:e.loading,type:"primary",size:"small"},on:{click:e.handleConfirm}},[e._v("确定")])],1)],1)],2)},b=[],y={name:"cs-upload-slot",mixins:[c],props:{uploadTip:{type:String,required:!1,default:"请选择资源进行(支持拖拽)上传，"},listType:{type:String,required:!1,default:"text"},multiple:{type:Boolean,required:!1,default:!0},showFileList:{type:Boolean,required:!1,default:!0},drag:{type:Boolean,required:!1,default:!0},accept:{type:String,required:!1,default:"*/*"},limit:{type:Number,required:!1,default:0},autoUpload:{type:Boolean,required:!1,default:!0},storageId:{type:Number,required:!1,default:null}},data:function(){return{visible:!1,loading:!1}},methods:{handleOpen:function(){this.getDirectory(),this.getToken()},handleClose:function(){this.replaceId>0&&(this.updateToken=!0),this.replaceId=0,this.visible=!1,this.loading=!1,this.$refs.upload&&this.$refs.upload.clearFiles()},handleConfirm:function(){this.$emit("confirm"),this.handleClose()}}},_=y,k=(a("e9ae"),Object(f["a"])(_,v,b,!1,null,"63ad4041",null)),O=k.exports,j={name:"cs-upload",props:{value:{type:Array,required:!1,default:function(){return[]}},confirm:{type:Function},type:{type:String,required:!1,default:"comp"}},data:function(){return{fileList:[],source:""}},computed:{component:function(){return"comp"===this.type?g:"slot"===this.type?O:"div"}},render:function(e){var t=this,a=[e("div",this.$slots.default)];return this.$slots.control&&a.push(e("div",{slot:"control"},[this.$slots.control])),e("div",{},[e(this.component,{ref:"upload",props:this.$attrs,on:{upload:function(e){"comp"===t.type&&t.$emit("input",t.getUploadData(e)),"slot"===t.type&&(t.fileList=e)},confirm:function(){"slot"===t.type&&(t.$emit("confirm",t.fileList,t.source),t.fileList=[])}}},a)])},methods:{getUploadData:function(e){var t=[];return e.forEach((function(e){e.response?t.push({name:e.response.data[0].name,source:e.response.data[0].url}):t.push({name:e.name,source:e.source})})),t},handleUploadDlg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";"slot"===this.type&&(this.$refs.upload.visible=!0,this.source=e)},setReplaceId:function(e){this.$refs.upload.replaceId=e,this.$refs.upload.updateToken=!0},setModuleName:function(e){this.$refs.upload.moduleName=e,this.$refs.upload.updateToken=!0}}},w=j,$=Object(f["a"])(w,r,o,!1,null,null,null);t["default"]=$.exports},a623:function(e,t,a){"use strict";var r=a("23e7"),o=a("b727").every,n=a("a640"),i=a("ae40"),s=n("every"),l=i("every");r({target:"Array",proto:!0,forced:!s||!l},{every:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},e9ae:function(e,t,a){"use strict";var r=a("4904"),o=a.n(r);o.a}}]);