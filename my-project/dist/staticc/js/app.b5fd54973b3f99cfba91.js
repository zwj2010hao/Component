webpackJsonp([1,0],[function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var i=s(14),a=o(i),n=s(1),r=o(n),l=s(13),c=o(l),d=s(3),u=o(d),p=s(2),v=o(p);a["default"].use(c["default"]);var f=new c["default"];f.map({"/":{component:u["default"]},"/button":{component:v["default"]}}),f.redirect({"*":"/"}),f.start(r["default"],"app")},function(t,e,s){var o,i;s(7),o=s(4),i=s(10),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,s){var o,i;s(9),o=s(5),i=s(12),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,s){var o,i;s(8),o=s(6),i=s(11),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e){"use strict"},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{msg:"button widget"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"HelloView",data:function(){return{navMsg:[{category:"pc",cates:[{name:"button",url:"button"}]}]}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports=" <router-view class=view keep-alive transition=slide> </router-view> <div id=returnIndex> <a href=/ >返回首页</a> </div> "},function(t,e){t.exports=' <div transition=app id=app> <div class="clearfix pageleft"> <ul class=nav> <li v-for="item in navMsg" class=cat1> {{item.category}} <ul> <li v-for="item in item.cates" class=cat2> <a v-link="{path: \'/\'+item.url}">{{item.name}}</a> </li> </ul> </li> </ul> </div> <div class=pageright id=pagecontent> <h1>Welcome to our Repository</h1> <p>This is a repository of excellent code.<br>There are so many css code that help us to realize some visual effects.<br> We hope that this repository will improve our quality of css code.<br><b>So enjoy it!!!</b></p> </div> </div> '},function(t,e){t.exports=' <div class=wrap _v-8246d7e8=""> <article class=clearfix _v-8246d7e8=""> <h2 _v-8246d7e8="">Button &lt;a&gt;</h2> <div class="section fl" _v-8246d7e8=""> <a href=javascript:void(0) class="btn btn-class1" _v-8246d7e8="">button</a> </div> <div class="section fl" _v-8246d7e8=""> <a href=javascript:void(0) class="btn btn-disabled" _v-8246d7e8="">Disabled button</a> </div> </article> <article class=clearfix _v-8246d7e8=""> <h2 _v-8246d7e8="">Button &lt;button&gt;</h2> <div class="section fl" _v-8246d7e8=""> <button class="button btn-class1" _v-8246d7e8="">button</button> </div> <div class="section fl" _v-8246d7e8=""> <button class="button btn-disabled" disabled=disabled _v-8246d7e8="">Disabled button</button> </div> </article> <article class=clearfix _v-8246d7e8=""> <h2 _v-8246d7e8="">Other (use tag a)</h2> <div class="section fl" _v-8246d7e8=""> <i class=iconfont _v-8246d7e8=""></i> <a href=javascript:void(0) class="btn btn-class1" _v-8246d7e8="">button</a> </div> </article> </div> '}]);
//# sourceMappingURL=app.b5fd54973b3f99cfba91.js.map