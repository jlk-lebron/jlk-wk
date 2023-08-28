(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{321:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bom"}},[t._v("#")]),t._v(" BOM")]),t._v(" "),s("p",[t._v("JS的组成部分：")]),t._v(" "),s("p",[s("img",{attrs:{src:"import/e996e5cd-6efb-4b9e-bc6c-1b1ff30ad989/assets/1662644581528.png",alt:""}})]),t._v(" "),s("p",[t._v("三大部分：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("ECMAScript")]),t._v(": 规定js语言的实现标准和规范。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("DOM")]),t._v(" （ Document Object Model）：文档对象模型。它提供了一套操作页面元素的API。作用：便于操作页面节点。如操作标签的颜色，背景，添加元素、删除元素等等。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("BOM")]),t._v("（Browser Object Model  ）：浏览器对象模型。它提供了一套操作浏览器功能的API方法，可以操作浏览器窗口。比如：控制浏览器前进、后退、刷新、获取屏幕分辨率等")]),t._v(" "),s("blockquote",[s("p",[t._v("简单理解：API（Application Programming Interface，应用程序接口）就是程序预留给程序员提供的一种工具，以便能够轻松的实现某些功能。如 弹窗 alert就是一个API。")])])])]),t._v(" "),s("h2",{attrs:{id:"bom模型结构图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bom模型结构图"}},[t._v("#")]),t._v(" BOM模型结构图")]),t._v(" "),s("p",[s("img",{attrs:{src:"import/e996e5cd-6efb-4b9e-bc6c-1b1ff30ad989/assets/1666924335366.png",alt:"1666924335366"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("window对象，它是浏览器中最顶层的对象，它代表着当前的整个浏览器窗口对象，由浏览器创建。BOM中的其它的对象都是以属性的方式添加在window对象下面！")]),t._v(" "),s("blockquote",[s("p",[t._v("比如：document对象它就是window对象下面的一个属性，但是它同时也是一个对象。它相对于window对象来说它就是一个属性 但相对于creatElement方法来说它就是一个对象。")])])]),t._v(" "),s("li",[s("p",[t._v("document：文档对象。它代表当前的整个HTML文档对象。由DOM（文档对象模型） 去操作文档中的元素节点。")])]),t._v(" "),s("li",[s("p",[t._v("history：历史记录对象 它主要是用来记录浏览器的访问历史记录！,可以实现页面的前进和返回。**注意：**只有访问过后才会有历史记录。")])]),t._v(" "),s("li",[s("p",[t._v("location：地址栏对象 它可以用来获取到当前浏览器上面的地址栏中相关数据。如域名、协议。")])]),t._v(" "),s("li",[s("p",[t._v("navigator：浏览器对象 它可以获取到浏览器的相关数据。比如浏览器的名称、版本等等")])]),t._v(" "),s("li",[s("p",[t._v("screen：屏幕对象 它可以获取到与屏幕相关的数据。比如：屏幕的分辨率")])])]),t._v(" "),s("h2",{attrs:{id:"window全局对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window全局对象"}},[t._v("#")]),t._v(" window全局对象")]),t._v(" "),s("p",[t._v("参考文档："),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window#%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/zh-CN/docs/Web/API/Window#属性"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("常用属性：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("innerHeight")]),t._v(" ： 获取网页内容可视区域高度，包括滚动条")]),t._v(" "),s("li",[s("code",[t._v("innerWidth")]),t._v(" ： 获取网页内容可视区域宽度，包括滚动条")])]),t._v(" "),s("blockquote",[s("p",[t._v("document.documentElement.clientHeight / clientWidth是不含滚动条的")])]),t._v(" "),s("p",[s("strong",[t._v("常用方法：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("alert")]),t._v("： 弹窗")]),t._v(" "),s("li",[s("code",[t._v("prompt")]),t._v("：接收用户输入的值。 返回的是字符串类型")]),t._v(" "),s("li",[s("code",[t._v("setInterval")]),t._v(": 开启定时器 ，周期性执行。"),s("code",[t._v("clearInterval")]),t._v("  用来关闭定时器")]),t._v(" "),s("li",[s("code",[t._v("setTimeout")]),t._v(": 延时器， 仅执行一次。"),s("code",[t._v("clearTimeout")]),t._v("  用来关闭延时器")]),t._v(" "),s("li",[s("code",[t._v("confirm")]),t._v(":  展示消息确认框，返回布尔型")]),t._v(" "),s("li",[t._v("...")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-HTML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'可视高度（含滚动条）:'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'可视宽度（含滚动条）:'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prompt：接收用户输入的值,返回值是字符串类型（string）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("prompt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请输入你的年龄'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'输入的值：'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isDelete "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("confirm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'确认删除吗'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'是否删除'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("isDelete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"document-文档对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document-文档对象"}},[t._v("#")]),t._v(" document 文档对象")]),t._v(" "),s("p",[t._v("所谓的document文档相当于是一个完整的html树，也叫DOM树。")]),t._v(" "),s("p",[t._v("参考文档："),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/zh-CN/docs/Web/API/Document"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("常用属性和方法")]),t._v(" "),s("div",{staticClass:"language-Plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[t._v("document.body\ndocument.getElementById('box')\ndocument.createElement('li')\n...\n")])])]),s("h2",{attrs:{id:"history-历史对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history-历史对象"}},[t._v("#")]),t._v(" history 历史对象")]),t._v(" "),s("p",[t._v("作用： 控制浏览器前进、后退")]),t._v(" "),s("p",[t._v("参考文档："),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("返回：history.back()  等价于 history.go(-1)")]),t._v(" "),s("li",[t._v("前进：history.forward() 等价于  history.go(1)")]),t._v(" "),s("li",[t._v("刷新：history.go(0)  等价于 location.reload()")])]),t._v(" "),s("h2",{attrs:{id:"location-地址栏对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location-地址栏对象"}},[t._v("#")]),t._v(" location 地址栏对象")]),t._v(" "),s("p",[t._v("作用：获取地址栏相关信息。")]),t._v(" "),s("p",[t._v("参考文档："),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Location",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/zh-CN/docs/Web/API/Location"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("地址栏信息： location.href ;")]),t._v(" "),s("li",[t._v("刷新：location.reload() 等价于 history.go(0)")]),t._v(" "),s("li",[t._v('跳转：location.href = "要跳转的url地址"')])]),t._v(" "),s("h2",{attrs:{id:"screen-屏幕对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screen-屏幕对象"}},[t._v("#")]),t._v(" screen 屏幕对象")]),t._v(" "),s("p",[t._v("作用：获取屏幕相关的信息，如分辨率等")]),t._v(" "),s("div",{staticClass:"language-Plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[t._v("screen.width: 获取屏幕的宽度\nscreen.height： 获取屏幕的高度\n")])])]),s("p",[t._v("参考文档："),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Screen",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/en-US/docs/Web/API/Screen"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"navigator-浏览器导航对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-浏览器导航对象"}},[t._v("#")]),t._v(" navigator  浏览器导航对象")]),t._v(" "),s("p",[t._v("作用：获取关于浏览器和移动设备的一些信息。 可以识别出用户访问我们的网站是什么设备（android,ios,ipad, IE，firefox,chrome）")]),t._v(" "),s("p",[t._v("参考文档："),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/en-US/docs/Web/API/Navigator"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-Plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[t._v("// 常用的属性\nnavigator.appVersion\nnavigator.userAgent\n")])])]),s("p",[t._v("每个浏览器 "),s("code",[t._v("navigator.userAgent")]),t._v("获取到的值如下：")]),t._v(" "),s("ul",[s("li",[t._v("chrome:")])]),t._v(" "),s("div",{staticClass:"language-Plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[t._v('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36"\n')])])]),s("ul",[s("li",[t._v("firefox:")])]),t._v(" "),s("div",{staticClass:"language-Plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[t._v('"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0"\n')])])]),s("ul",[s("li",[t._v("IE")])]),t._v(" "),s("div",{staticClass:"language-Plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[t._v('IE11 => "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko"\n\nIE10 => "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)"\n\nIE9 => "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)"\n\nIE8 => "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)"\n\nIE7 => "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)"\n\nIE5 => "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)"\n')])])]),s("ul",[s("li",[t._v("Edge")])]),t._v(" "),s("div",{staticClass:"language-Plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[t._v("// 旧版本测试\n\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18363\"\n\n// 新版本测试\n'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.63'\n")])])]),s("ul",[s("li",[t._v("移动端android:")])]),t._v(" "),s("div",{staticClass:"language-Plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[t._v('"Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Mobile Safari/537.36"\n')])])]),s("ul",[s("li",[t._v("移动端iphone:")])]),t._v(" "),s("div",{staticClass:"language-Plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[t._v('"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"\n')])])]),s("ul",[s("li",[t._v("IPAD:")])]),t._v(" "),s("div",{staticClass:"language-Plain extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[t._v('"Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1"\n')])])]),s("p",[t._v("任务：")]),t._v(" "),s("ul",[s("li",[t._v("封装一个方法，判断是否是pc端，是返回true,否则返回false")]),t._v(" "),s("li",[t._v("封装一个方法，判断是否是移动端（android/ios/ipad），是返回true,否则返回false")]),t._v(" "),s("li",[t._v("封装一个方法，判断是否是IE浏览器，是返回true,否则返回false")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v(" \n       \n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isMobile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取用户代理（用户的设备信息） 转小写，好判断")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否有特殊关键字")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" userAgent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isAndroid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isIphone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iphone'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isPad "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ipad'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          \n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上面都为假则是pc端，有一个为真，则说明是移动端")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isAndroid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" isIphone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" isPad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'是否是移动端：'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isMobile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取用户代理（用户的设备信息） 转小写，好判断")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否有特殊关键字")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" userAgent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isAndroid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'android'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isIphone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iphone'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isPad "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ipad'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          \n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上面都为假则是pc端，有一个为真，则说明是移动端")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isAndroid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" isIphone "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" isPad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isIE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取用户代理（用户的设备信息） 转小写，好判断")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否有特殊关键字")]),t._v("\n     \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" userAgent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" （userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'msie'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'trident'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'是否是IE：'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isIE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"bom常用操作小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bom常用操作小结"}},[t._v("#")]),t._v(" BOM常用操作小结")]),t._v(" "),s("p",[t._v("常用的几点：")]),t._v(" "),s("ul",[s("li",[t._v("返回上一页  history.back()")]),t._v(" "),s("li",[t._v("刷新页面 location.reload()")]),t._v(" "),s("li",[t._v("判断用户设备 navigator.userAgent")]),t._v(" "),s("li",[t._v("跳转： location.href = '新地址'")]),t._v(" "),s("li",[t._v("查看api兼容性情况： "),s("a",{attrs:{href:"https://caniuse.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://caniuse.com/"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);