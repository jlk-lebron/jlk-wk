(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{373:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_06-模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_06-模块化"}},[s._v("#")]),s._v(" 06-模块化")]),s._v(" "),a("h1",{attrs:{id:"js模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js模块化"}},[s._v("#")]),s._v(" JS模块化")]),s._v(" "),a("h2",{attrs:{id:"什么是模块和模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是模块和模块化"}},[s._v("#")]),s._v(" 什么是模块和模块化?")]),s._v(" "),a("h3",{attrs:{id:"什么是模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是模块"}},[s._v("#")]),s._v(" 什么是模块")]),s._v(" "),a("p",[a("strong",[s._v("在前端的语境中,一个js文件,就是一个模块")])]),s._v(" "),a("h3",{attrs:{id:"什么是模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是模块化"}},[s._v("#")]),s._v(" 什么是模块化")]),s._v(" "),a("p",[s._v("将一个复杂的程序依据一定的规则(规范)封装成几个块(文件), 并进行组合在一起")]),s._v(" "),a("p",[s._v("块的内部数据/实现是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信")]),s._v(" "),a("p",[a("strong",[s._v("用人话说就是把我们以前写在一个js文件里面的代码,分别写在多个js中")])]),s._v(" "),a("h2",{attrs:{id:"为什么要模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要模块化"}},[s._v("#")]),s._v(" 为什么要模块化")]),s._v(" "),a("ol",[a("li",[s._v("部署简单")]),s._v(" "),a("li",[s._v("降低复杂度，提高解耦性")]),s._v(" "),a("li",[s._v("避免命名冲突(减少命名空间污染)")]),s._v(" "),a("li",[s._v("更好的分离, 按需加载")]),s._v(" "),a("li",[s._v("更高复用性，高可维护性")])]),s._v(" "),a("h2",{attrs:{id:"现代模块化处理方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现代模块化处理方案"}},[s._v("#")]),s._v(" 现代模块化处理方案")]),s._v(" "),a("p",[s._v("对于模块化的解决方案,不同的人提出了不同的解决方案.目前主流的模块化解决方案有以下四种:")]),s._v(" "),a("ul",[a("li",[s._v("AMD 规范 被require.js实现 已经落伍")]),s._v(" "),a("li",[s._v("CMD规范 被sea.js实现 已经落伍")]),s._v(" "),a("li",[s._v("COMMONJS 被nodejs实现")]),s._v(" "),a("li",[s._v("ES6 目前的主流模块化方案")])]),s._v(" "),a("h2",{attrs:{id:"在浏览器中使用commonjs模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器中使用commonjs模块化"}},[s._v("#")]),s._v(" 在浏览器中使用commonjs模块化")]),s._v(" "),a("ol",[a("li",[s._v("创建项目结构")])]),s._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v('|-js\n  |-dist //打包生成文件的目录\n  |-src //源码所在的目录\n    |-module1.js\n    |-module2.js\n    |-module3.js\n    |-app.js //应用主源文件\n|-index.html\n|-package.json\n  {\n    "name": "browserify-test",\n    "version": "1.0.0"\n  }\n')])])]),a("ol",[a("li",[s._v("下载browserify")])]),s._v(" "),a("ul",[a("li",[s._v("全局: npm install browserify -g")]),s._v(" "),a("li",[s._v("局部: npm install browserify –save-dev")])]),s._v(" "),a("ol",[a("li",[s._v("定义模块代码")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("module1.js")]),s._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("module.exports = {  foo() {    console.log('moudle1 foo()')  }}\n")])])])]),s._v(" "),a("li",[a("p",[s._v("module2.js")]),s._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("module.exports = function () {  console.log('module2()')}\n")])])])]),s._v(" "),a("li",[a("p",[s._v("module3.js")]),s._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("exports.foo = function () {  console.log('module3 foo()')}exports.bar = function () {  console.log('module3 bar()')}\n")])])])]),s._v(" "),a("li",[a("p",[s._v("app.js (应用的主js)")]),s._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("//引用模块let module1 = require('./module1')let module2 = require('./module2')let module3 = require('./module3')let uniq = require('uniq')//使用模块module1.foo()module2()module3.foo()module3.bar()\n")])])])]),s._v(" "),a("li",[a("p",[s._v("打包处理js:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("browserify js/src/app.js -o js/dist/bundle.js")])])])]),s._v(" "),a("li",[a("p",[s._v("页面使用引入:")]),s._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v('<script type="text/javascript" src="js/dist/bundle.js"><\/script>\n')])])])])]),s._v(" "),a("h2",{attrs:{id:"在浏览器中使用es6模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器中使用es6模块化"}},[s._v("#")]),s._v(" 在浏览器中使用ES6模块化")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("定义package.json文件")]),s._v(" "),a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es6-babel-browserify"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("安装babel-cli, babel-preset-es2015和browserify")]),s._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v(" npm install babel-cli browserify -gnpm install babel-preset-es2015 -D (preset 预设将es6转换成es5的所有插件打包)\n")])])])]),s._v(" "),a("li",[a("p",[s._v("定义**.babelrc**文件 runtime control")]),s._v(" "),a("div",{staticClass:"language-JSON extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es2015"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("编码")])])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("js/src/module1.js")]),s._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("/ 分别导出export function foo() {  console.log('module1 foo()');}export function bar() {  console.log('module1 bar()');}export const DATA_ARR = [1, 3, 5, 1]\n")])])])]),s._v(" "),a("li",[a("p",[s._v("js/src/module2.js")]),s._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("// 统一导出let data = 'module2 data'function fun1() {  console.log('module2 fun1() ' + data);}function fun2() {  console.log('module2 fun2() ' + data);}export {fun1, fun2}\n")])])])]),s._v(" "),a("li",[a("p",[s._v("js/src/module3.js")]),s._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("// 默认导出export default {  name: 'Tom',  setName: function (name) {    this.name = name  }}\n")])])])]),s._v(" "),a("li",[a("p",[s._v("js/src/app.js")]),s._v(" "),a("div",{staticClass:"language-Plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("import {foo, bar} from './module1'import {DATA_ARR} from './module1'import {fun1, fun2} from './module2'import person from './module3'import $ from 'jquery'$('body').css('background', 'red')foo()bar()console.log(DATA_ARR);fun1()fun2()person.setName('JACK')console.log(person.name);\n")])])])])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("编译")]),s._v(" "),a("ul",[a("li",[s._v("使用Babel将ES6编译为ES5代码(但包含CommonJS语法) : babel js/src -d js/lib")]),s._v(" "),a("li",[s._v("使用Browserify编译js : browserify js/lib/app.js -o js/lib/bundle.js")])])]),s._v(" "),a("li",[a("p",[s._v("页面中引入测试")]),s._v(" "),a("div",{staticClass:"language-HTML extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("js/lib/bundle.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])])])]),s._v(" "),a("h1",{attrs:{id:"模块化注意项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化注意项"}},[s._v("#")]),s._v(" 模块化注意项:")]),s._v(" "),a("blockquote",[a("p",[s._v("下面总结的内容,所有模块化规范都支持")])]),s._v(" "),a("ol",[a("li",[s._v("如果引入第三方或内置模块,则直接写模块名,引入自定义模块要写路径")]),s._v(" "),a("li",[s._v("不管模块引入几次,模块中的代码只执行一次")]),s._v(" "),a("li",[s._v("引入模块时都可以忽略.js后缀名")])])])}),[],!1,null,null,null);a.default=r.exports}}]);