(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{375:function(e,a,s){"use strict";s.r(a);var l=s(7),t=Object(l.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_07-项目构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_07-项目构建"}},[e._v("#")]),e._v(" 07-项目构建")]),e._v(" "),a("h1",{attrs:{id:"项目构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目构建"}},[e._v("#")]),e._v(" 项目构建")]),e._v(" "),a("h2",{attrs:{id:"什么是项目构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是项目构建"}},[e._v("#")]),e._v(" 什么是项目构建?")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("项目构建包括如下内容：`")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("代码转换：将 TypeScript 编译成JavaScript、将 LESS 编译成 CSS等。")])]),e._v(" "),a("li",[a("p",[e._v("文件优化：压缩JavaScript、CSS、HTML 代码等。")])]),e._v(" "),a("li",[a("p",[e._v("代码分割：提取多个页面的公共代码，提取首屏不需要执行部分代码让其异步记在。")])]),e._v(" "),a("li",[a("p",[e._v("模块合并：在采用模块化的项目里会有很多个模块和文件，需要通过构建功能将模块分类合并成一个文件。")])]),e._v(" "),a("li",[a("p",[e._v("自动刷新：监听本地源代码变化，自动重新构建、刷新浏览器。")])]),e._v(" "),a("li",[a("p",[e._v("代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。")])]),e._v(" "),a("li",[a("p",[e._v("等…")])])])]),e._v(" "),a("li",[a("p",[e._v("构建工具就是做以上这些事，将源代码转换成可以执行的JavaScript、CSS、HTML 代码。")])])]),e._v(" "),a("h2",{attrs:{id:"构建工具的认识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建工具的认识"}},[e._v("#")]),e._v(" 构建工具的认识")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("构建工具有很多，例如：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("fis3")])]),e._v(" "),a("li",[a("p",[e._v("grunt")])]),e._v(" "),a("li",[a("p",[e._v("gulp")])]),e._v(" "),a("li",[a("p",[e._v("webpack")])]),e._v(" "),a("li",[a("p",[e._v("parcel")])]),e._v(" "),a("li",[a("p",[e._v("Rollup")])]),e._v(" "),a("li",[a("p",[e._v("…")])])])]),e._v(" "),a("li",[a("p",[e._v("但是市面上最火，功能最强大的无非就是webpack")])])]),e._v(" "),a("h2",{attrs:{id:"构建环境的认识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建环境的认识"}},[e._v("#")]),e._v(" 构建环境的认识")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("我们对平时开发的代码区分了两种环境：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("开发环境 development")]),e._v(" "),a("ul",[a("li",[e._v("自动编译运行项目、检查语法错误、详细的错误提示等… （能帮助程序员更好的写代码, 在内存中编译运行，没有任何文件输出）")])])]),e._v(" "),a("li",[a("p",[e._v("生产环境 production")]),e._v(" "),a("ul",[a("li",[e._v("压缩代码、兼容性处理等…（生成打包后的项目文件，提供项目上线使用）")])])])])]),e._v(" "),a("li",[a("p",[e._v("而我们使用的库也分为两种依赖：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("开发依赖 devDependencies")]),e._v(" "),a("ul",[a("li",[e._v("项目构建打包需要的依赖")])])]),e._v(" "),a("li",[a("p",[e._v("生产依赖 dependencies")]),e._v(" "),a("ul",[a("li",[e._v("项目上线运行时需要的依赖")])])])])])]),e._v(" "),a("h1",{attrs:{id:"webpack-快速入门教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-快速入门教程"}},[e._v("#")]),e._v(" webpack 快速入门教程")]),e._v(" "),a("blockquote",[a("p",[e._v("官网: "),a("a",{attrs:{href:"https://webpack.js.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://webpack.js.org"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"_1、了解-webpack-相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、了解-webpack-相关"}},[e._v("#")]),e._v(" 1、了解 Webpack 相关")]),e._v(" "),a("ol",[a("li",[e._v("什么是 webpack")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Webpack 是一个模块打包器(bundler)。")])]),e._v(" "),a("li",[a("p",[e._v("在 Webpack 看来, 前端的所有资源文件(js/json/css/img/less/…)都会作为模块处理")])]),e._v(" "),a("li",[a("p",[e._v("它将根据模块的依赖关系进行静态分析，生成对应的静态资源")])])]),e._v(" "),a("ol",[a("li",[e._v("五大“护法”")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Entry：入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。")])]),e._v(" "),a("li",[a("p",[e._v("Output：output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist。")])]),e._v(" "),a("li",[a("p",[e._v("Loader：loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只能解析 JavaScript）。")])]),e._v(" "),a("li",[a("p",[e._v("Plugins：插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。")])]),e._v(" "),a("li",[a("p",[e._v("Mode：模式，有生产模式 production 和开发模式 development")])])]),e._v(" "),a("ol",[a("li",[e._v("理解 Loader")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Webpack 本身只能加载 JS/JSON 模块，如果要加载其他类型的文件(模块)，就需要使用对应的 loader 进行转换/加载")])]),e._v(" "),a("li",[a("p",[e._v("Loader 本身也是运行在 node.js 环境中的 JavaScript 模块")])]),e._v(" "),a("li",[a("p",[e._v("它本身是一个函数，接受源文件作为参数，返回转换的结果")])]),e._v(" "),a("li",[a("p",[e._v("loader 一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 json-loader。")])])]),e._v(" "),a("ol",[a("li",[e._v("理解 Plugins")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("插件可以完成一些 loader 不能完成的功能。")])]),e._v(" "),a("li",[a("p",[e._v("插件的使用一般是在 webpack 的配置信息 plugins 选项中指定。")])])]),e._v(" "),a("ol",[a("li",[e._v("配置文件(默认)")])]),e._v(" "),a("ul",[a("li",[e._v("webpack.config.js : 是一个 node 模块，内部暴露 webpack 配置对象")])]),e._v(" "),a("h2",{attrs:{id:"_2、准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、准备工作"}},[e._v("#")]),e._v(" 2、准备工作")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("初始化项目：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("生成 package.json 文件")])]),e._v(" "),a("li",[a("p",[e._v("命令："),a("code",[e._v("npm init -y")])])])])]),e._v(" "),a("li",[a("p",[e._v("安装 webpack")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("npm install webpack webpack-cli -g")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("npm install webpack webpack-cli -D")]),e._v(" 如果不在本地下载,后面搭建自动编译服务器就会有问题")])])])])]),e._v(" "),a("h2",{attrs:{id:"_3、小试牛刀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、小试牛刀"}},[e._v("#")]),e._v(" 3、小试牛刀")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("创建 js 文件")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("src/index.js")])]),e._v(" "),a("li",[a("p",[e._v("src/js/module1.js")])]),e._v(" "),a("li",[a("p",[e._v("src/js/module2.js")])]),e._v(" "),a("li",[a("p",[e._v("src/js/module3.js")])])])]),e._v(" "),a("li",[a("p",[e._v("创建 json 文件")]),e._v(" "),a("ul",[a("li",[e._v("src/json/data.json")])])]),e._v(" "),a("li",[a("p",[e._v("创建主页面:")]),e._v(" "),a("ul",[a("li",[e._v("src/index.html")])])]),e._v(" "),a("li",[a("p",[e._v("运行指令")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("开发配置指令："),a("code",[e._v("webpack ./src/index.js -o ./build/js --mode=development")])]),e._v(" "),a("ul",[a("li",[e._v("功能: webpack 能够编译打包 js 和 json 文件，并且能将 es6 的模块化语法转换成浏览器能识别的语法")])])]),e._v(" "),a("li",[a("p",[e._v("生产配置指令："),a("code",[e._v("webpack ./src/index.js -o ./build/js --mode=production")])]),e._v(" "),a("ul",[a("li",[e._v("功能: 在开发配置功能上加上一个压缩代码")])])])])]),e._v(" "),a("li",[a("p",[e._v("结论：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("webpack 能够编译打包 js 和 json 文件")])]),e._v(" "),a("li",[a("p",[e._v("能将 es6 的模块化语法转换成浏览器能识别的语法")])]),e._v(" "),a("li",[a("p",[e._v("能压缩代码")])])])]),e._v(" "),a("li",[a("p",[e._v("缺点：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("不能编译打包 css、img 等文件")])]),e._v(" "),a("li",[a("p",[e._v("不能将 js 的 es6 基本语法转化为 es5 以下语法")])])])]),e._v(" "),a("li",[a("p",[e._v("改善：使用 webpack 配置文件解决，自定义功能")])])]),e._v(" "),a("h2",{attrs:{id:"_4、使用-webpack-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、使用-webpack-配置文件"}},[e._v("#")]),e._v(" 4、使用 webpack 配置文件")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("目的：在项目"),a("strong",[e._v("根目录")]),e._v("定义配置文件，通过自定义配置文件，还原以上功能")])]),e._v(" "),a("li",[a("p",[e._v("文件名称："),a("code",[e._v("webpack.config.js")])])]),e._v(" "),a("li",[a("p",[e._v("文件内容：")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('const { resolve } = require("path"); // node内置核心模块，用来设置路径。module.exports = {  entry: "./src/index.js", // 入口文件  output: {    // 输出配置    filename: "./js/main.js", // 输出文件名    path: resolve(__dirname, "build"), // 输出文件路径配置(要求是绝对路径)    clean: true, // 清除打包目录的文件  },  mode: "development", // 开发环境(二选一)  // mode: \'production\'   // 生产环境(二选一)};\n')])])])]),e._v(" "),a("li",[a("p",[e._v("运行指令： "),a("code",[e._v("webpack")])])])]),e._v(" "),a("h2",{attrs:{id:"_5、js-语法检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、js-语法检查"}},[e._v("#")]),e._v(" 5、js 语法检查")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("缘由：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("webpack 本身可以将 js 文件 ES6 语法编译成浏览器能识别的模块化语法")])]),e._v(" "),a("li",[a("p",[e._v("但是开发时我们希望团队内部统一代码编程风格，不要你写你的样，我写我的样，这样看起来很难受")])]),e._v(" "),a("li",[a("p",[e._v("Eslint 工具就是用来做这个的，除此以外还能尽量规避一些开发时代码错误隐患")])])])]),e._v(" "),a("li",[a("p",[e._v("安装 loader")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("npm install eslint-loader@4.0.2 eslint@7.30.0 -D")])])])]),e._v(" "),a("li",[a("p",[e._v("配置 loader")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('module: {  rules: [    {      test: /\\.js$/, // 只检测js文件      exclude: /node_modules/, // 排除node_modules文件夹      enforce: "pre", //可能值: "pre" | "post". pre表示前置执行, post表示后置执行      use: {        // 使用eslint-loader解析        loader: "eslint-loader",      },    },  ],},\n')])])])]),e._v(" "),a("li",[a("p",[e._v("eslint 要想工作，必须定义配置文件，配置文件有两种写法")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v(".eslintrc.*")])])]),e._v(" "),a("li",[a("p",[e._v("package.json 文件中 "),a("code",[e._v("eslintConfig")])])])])]),e._v(" "),a("li",[a("p",[e._v("我们以第一种为例，项目根目录新建"),a("code",[e._v(".eslintrc.js")])]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('module.exports = {  // eslint配置  parserOptions: {    ecmaVersion: 8, // 声明代码使用的ECMAScript版本    sourceType: "module", //  声明代码使用ECMAScript模块  },  rules: {    // error 和 2 代表错误    // warn 和 1 代表警告    // off 和 0 代表关闭    semi: "error", // 是否加分号    "no-debugger": "warn", //是否使用debugger    eqeqeq: "off", // 必须使用三个等号  },};\n')])])])]),e._v(" "),a("li",[a("p",[e._v("运行指令："),a("code",[e._v("webpack")])])])]),e._v(" "),a("h2",{attrs:{id:"_6、js-语法转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、js-语法转换"}},[e._v("#")]),e._v(" 6、js 语法转换")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("缘由")]),e._v(" "),a("ul",[a("li",[e._v("webpack 只能编译 ES6 模块化语法，其他语法不编译，所以要借助 babel 帮我们编译，否则自己手动改太费劲了")])])]),e._v(" "),a("li",[a("p",[e._v("安装 loader")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("npm install babel-loader @babel/core @babel/preset-env -D")])])]),e._v(" "),a("li",[a("p",[e._v("@babel/core 是babel的核心包")])]),e._v(" "),a("li",[a("p",[e._v("@babel/preset-env 是babel的预设包,类似于babel的插件.")]),e._v(" "),a("ul",[a("li",[e._v("preset-env 将es6+的语法编译成兼容性更好的语法")])])])])]),e._v(" "),a("li",[a("p",[e._v("配置 loader")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('module: {  rules: [    // 省略之前配置    ...,    {      test: /\\.js$/,      exclude: /node_modules/,      use: {        loader: "babel-loader",        options: {          presets: ["@babel/preset-env"],        },      },    }  ],},\n')])])])]),e._v(" "),a("li",[a("p",[e._v("运行指令："),a("code",[e._v("webpack")])])])]),e._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[e._v("#")]),e._v(" 注意:")]),e._v(" "),a("blockquote",[a("p",[e._v("此时await和async无法使用(Uncaught ReferenceError: regeneratorRuntime is not defined)")])]),e._v(" "),a("h3",{attrs:{id:"解决await和async的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决await和async的问题"}},[e._v("#")]),e._v(" 解决await和async的问题")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("1. 下包: npm install --save-dev @babel/plugin-transform-runtime 这是babel的插件2. 给对应的babel-loader配置插件{    test: /\\.js$/,        exclude: /node_modules/,            use: {                loader: 'babel-loader',                options: {                      presets: ['@babel/preset-env'],                      plugins: [['@babel/plugin-transform-runtime']],                },            },},3. 此时await和async就可以使用了\n")])])]),a("h2",{attrs:{id:"_7、打包-less-资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、打包-less-资源"}},[e._v("#")]),e._v(" 7、打包 less 资源")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("创建 less 文件")]),e._v(" "),a("ul",[a("li",[e._v("src/less/test.less")])])]),e._v(" "),a("li",[a("p",[e._v("入口 index.js 文件")]),e._v(" "),a("ul",[a("li",[e._v("引入 less 资源")])])]),e._v(" "),a("li",[a("p",[e._v("安装 loader")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("npm install css-loader style-loader less-loader less -D")])])])]),e._v(" "),a("li",[a("p",[e._v("配置 loader")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('module: {  rules: [    // 省略之前配置    ...,    {      test: /\\.less$/,      use: ["style-loader", "css-loader", "less-loader"]    }  ],},\n')])])])]),e._v(" "),a("li",[a("p",[e._v("index.html 中创建相应的 DOM 结构")])]),e._v(" "),a("li",[a("p",[e._v("运行指令："),a("code",[e._v("webpack")])])])]),e._v(" "),a("h2",{attrs:{id:"_8、打包项目中的静态资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、打包项目中的静态资源"}},[e._v("#")]),e._v(" 8、打包项目中的静态资源")]),e._v(" "),a("blockquote",[a("p",[e._v("资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换之前使用的一些 loader：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("- `asset/resource` 发送一个单独的文件并导出 URL。之前通过使用 `file-loader` 实现。\n\n- `asset/inline` 导出一个资源的 data URI(base64格式)。之前通过使用 `url-loader` 实现。\n\n- `asset/source` 导出资源的源代码。之前通过使用 `raw-loader` 实现。\n\n- `asset` 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 `url-loader`，并且配置资源体积限制实现。\n")])])]),a("h3",{attrs:{id:"asset-resource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asset-resource"}},[e._v("#")]),e._v(" asset/resource")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("配置 loader")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('{  test: /\\.(png|jpe?g|gif)$/,  type: "asset/resource",}\n')])])])]),e._v(" "),a("li",[a("p",[e._v("使用")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("// index.jsimport reactUrl from '../imgs/react.jpg'document.querySelector('.react').src = reactUrl\n")])])])]),e._v(" "),a("li",[a("p",[e._v("让图片输出到指定目录")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('output: {   ...,  assetModuleFilename: "images/[hash:8][ext]",}或:{  test: /\\.(png|jpe?g|gif|svg)$/,  type: "asset/resource",  // generator只适用于asset和asset/resource  generator: {     filename: \'imgs/[name][hash][ext]\',  },}\n')])])])]),e._v(" "),a("li",[a("p",[e._v("运行指令："),a("code",[e._v("webpack")])])])]),e._v(" "),a("h3",{attrs:{id:"asset-inline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asset-inline"}},[e._v("#")]),e._v(" asset/inline")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("配置 loader")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("{  test: /\\.svg$/,  type: 'asset/inline'}\n")])])])]),e._v(" "),a("li",[a("p",[e._v("使用")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("// index.jsimport wexin from '../imgs/微信.svg'document.querySelector('.wexin').src = wexin\n")])])])]),e._v(" "),a("li",[a("p",[e._v("运行指令："),a("code",[e._v("webpack")])])])]),e._v(" "),a("h3",{attrs:{id:"asset-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asset-source"}},[e._v("#")]),e._v(" asset/source")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("配置 loader")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("{  test: /\\.txt/,  type: 'asset/source',}\n")])])])]),e._v(" "),a("li",[a("p",[e._v("使用")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("//hello.txt  hello中的文本// index.jsimport text from '../assets/hello.txt' //text就是hello.txt的内容document.querySelector('#txt').innerText = text\n")])])])]),e._v(" "),a("li",[a("p",[e._v("运行指令："),a("code",[e._v("webpack")])])])]),e._v(" "),a("h3",{attrs:{id:"asset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asset"}},[e._v("#")]),e._v(" asset")]),e._v(" "),a("blockquote",[a("p",[e._v("在asset/resource和asset/inline之间自动选择")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("配置 loader")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('{  test: /\\.(png|jpe?g|gif|svg)$/,  type: "asset",  parser: {     dataUrlCondition: {         maxSize: 3 * 1024, // 小于3kb以下的图片会被打包成base64格式      },  },}\n')])])])]),e._v(" "),a("li",[a("p",[e._v("使用")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("// index.jsimport reactUrl from '../imgs/react.jpg'document.querySelector('.react').src = reactUrl\n")])])])]),e._v(" "),a("li",[a("p",[e._v("让图片输出到指定目录")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('output: {   ...,  assetModuleFilename: "images/[hash:8][ext]",}或:{  test: /\\.(png|jpe?g|gif|svg)$/,  type: "asset",  // generator只适用于asset和asset/resource  generator: {     filename: \'imgs/[name][hash][ext]\',  },}\n')])])])]),e._v(" "),a("li",[a("p",[e._v("运行指令："),a("code",[e._v("webpack")])])])]),e._v(" "),a("h2",{attrs:{id:"_9、打包-html-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、打包-html-文件"}},[e._v("#")]),e._v(" 9、打包 html 文件")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("添加 html 文件")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("src/index.html")])]),e._v(" "),a("li",[a("p",[e._v("注意不要在 html 中引入任何 js 文件")])]),e._v(" "),a("li",[a("p",[e._v("安装插件 Plugins")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("npm install html-webpack-plugin -D")])])])])]),e._v(" "),a("li",[a("p",[e._v("在 webpack.config.js 中引入插件（插件都需要手动引入，而 loader 会自动加载）")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("const HtmlWebpackPlugin = require('html-webpack-plugin')")])])])]),e._v(" "),a("li",[a("p",[e._v("配置插件 Plugins")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('plugins: [  new HtmlWebpackPlugin({    template: "./src/index.html",  }),],\n')])])])]),e._v(" "),a("li",[a("p",[e._v("运行指令："),a("code",[e._v("webpack")])])])]),e._v(" "),a("h2",{attrs:{id:"_10、自动编译打包运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、自动编译打包运行"}},[e._v("#")]),e._v(" 10、自动编译打包运行")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("安装")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("npm install webpack-dev-server -D")])])])]),e._v(" "),a("li",[a("p",[e._v("修改 webpack 配置对象（注意不是 loader 中）")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v(" devServer: {    static: {      directory: resolve('build'), //基于打包后的文件夹作为静态资源服务器的根目录    },    port: 9000, //设置端口号    open: true, //自动打开浏览器  },\n")])])])]),e._v(" "),a("li",[a("p",[e._v("运行指令："),a("code",[e._v("webpack serve")])])]),e._v(" "),a("li",[a("p",[e._v("简化指令")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("修改 package.json 中 scripts 指令`")]),e._v(" "),a("ul",[a("li",[e._v("“start”: “webpack serve”,")])])]),e._v(" "),a("li",[a("p",[e._v("运行指令："),a("code",[e._v("npm start / npm run start")])])])])])]),e._v(" "),a("blockquote",[a("p",[e._v("以上就是 webpack 开发环境的配置，可以在内存中自动打包所有类型文件并有自动编译运行等功能。")])]),e._v(" "),a("h2",{attrs:{id:"_11、准备生产环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11、准备生产环境"}},[e._v("#")]),e._v(" 11、准备生产环境")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("创建文件夹 config，将 webpack.config.js 复制两份")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("webpack.dev.js")])]),e._v(" "),a("li",[a("p",[e._v("webpack.prod.js")])])])]),e._v(" "),a("li",[a("p",[e._v("修改 webpack.prod.js 配置，删除 devServer 配置")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('module.exports = {  mode: "production", // 修改为生产环境  target: "browserslist" // 为了后面处理css兼容做准备};\n')])])])]),e._v(" "),a("li",[a("p",[e._v("修改 package.json 的指令")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("“start”: “webpack serve –config ./config/webpack.dev.js”")])]),e._v(" "),a("li",[a("p",[e._v("“build”: “webpack –config ./config/webpack.prod.js”")])])])]),e._v(" "),a("li",[a("p",[e._v("开发环境指令")]),e._v(" "),a("ul",[a("li",[e._v("npm start")])])]),e._v(" "),a("li",[a("p",[e._v("生产环境指令")]),e._v(" "),a("ul",[a("li",[e._v("npm run build")])])])]),e._v(" "),a("h2",{attrs:{id:"_12、提取-css-成单独文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12、提取-css-成单独文件"}},[e._v("#")]),e._v(" 12、提取 css 成单独文件")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("安装插件")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("npm install mini-css-extract-plugin -D")])])])]),e._v(" "),a("li",[a("p",[e._v("引入插件")]),e._v(" "),a("ul",[a("li",[a("code",[e._v('const MiniCssExtractPlugin = require("mini-css-extract-plugin");')])])])]),e._v(" "),a("li",[a("p",[e._v("配置 loader")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("// 将 style-loader 提换成 MiniCssExtractPlugin.loader{  test: /\\.less$/,  use: [    MiniCssExtractPlugin.loader,    'css-loader',    'less-loader',  ]}\n")])])])]),e._v(" "),a("li",[a("p",[e._v("配置插件")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('new MiniCssExtractPlugin({  filename: "css/[name].[contenthash:8].css",}),\n')])])])]),e._v(" "),a("li",[a("p",[e._v("运行指令")]),e._v(" "),a("ul",[a("li",[e._v("npm run build")])])])]),e._v(" "),a("h2",{attrs:{id:"_13、添加-css-兼容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13、添加-css-兼容"}},[e._v("#")]),e._v(" 13、添加 css 兼容")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("安装 loader")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("npm install postcss-loader autoprefixer -D")])])])]),e._v(" "),a("li",[a("p",[e._v("配置 loader")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("{  test: /\\.less$/,  use: [    MiniCssExtractPlugin.loader,    'css-loader',    'postcss-loader',    'less-loader',  ]}\n")])])])]),e._v(" "),a("li",[a("p",[e._v("在项目根目录添加 postcss 配置文件：.postcssrc.js")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("module.exports = {  plugins: {    autoprefixer: {},  },};\n")])])])]),e._v(" "),a("li",[a("p",[e._v("在 package.json 中添加配置")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('// 配合: target: "browserslist""browserslist": [  "> 1%",  "last 2 versions"]\n')])])])]),e._v(" "),a("li",[a("p",[e._v("在webpack.prod.js中")]),e._v(" "),a("ul",[a("li",[e._v("和五大核心概念同级配置: target: “browserslist”")])])]),e._v(" "),a("li",[a("p",[e._v("运行指令：")]),e._v(" "),a("ul",[a("li",[e._v("npm run build")])])])]),e._v(" "),a("h2",{attrs:{id:"_14、压缩-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14、压缩-css"}},[e._v("#")]),e._v(" 14、压缩 css")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("安装插件")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("npm install css-minimizer-webpack-plugin -D")])])])]),e._v(" "),a("li",[a("p",[e._v("引入插件")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');")])])])]),e._v(" "),a("li",[a("p",[e._v("配置插件")]),e._v(" "),a("div",{staticClass:"language-Plain Text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("new CssMinimizerPlugin({}),\n")])])])]),e._v(" "),a("li",[a("p",[e._v("运行指令：")]),e._v(" "),a("ul",[a("li",[e._v("npm run build")])])])])])}),[],!1,null,null,null);a.default=t.exports}}]);