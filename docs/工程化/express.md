---
title: 03-express
date: 2023-06-19 16:55:45
permalink: /pages/1818c8/
categories:
  - 工程化
tags:
  -
---
# 03-express

# 介绍

> 使用express搭建服务器更方便

Express是Node.js的一种轻量级Web应用程序框架，它提供了一组强大的特性和工具，帮助开发人员快速创建可靠、灵活的Web应用程序。Express是一个基于中间件的框架，它允许开发人员通过编写简单的模块化代码来构建Web应用程序。

以下是Express的一些主要特点：

1. 中间件架构：Express基于中间件构建，允许开发人员将应用程序拆分为多个小的、可重用的部分，从而使应用程序更加灵活和易于维护。
2. 路由系统：Express提供了一个灵活的路由系统，允许开发人员将请求映射到相应的处理程序，使得代码的组织和管理变得更加容易。
3. 模板引擎：Express支持多种模板引擎，如EJS、Pug、Handlebars等，可以轻松地生成HTML视图。
4. 简单易用：Express提供了简单易用的API，使得开发人员可以快速编写Web应用程序，并且容易上手。
5. 丰富的插件：Express有大量的插件，可以帮助开发人员实现各种功能，如cookie解析、body解析、会话管理等等。

# 用nodejs原生搭建服务

```Plain
// 利用http内置模块,开启一个服务器// 1.  引入httpconst http = require('http')// 2. 创建服务对象const server = http.createServer((req, res) => {  // 用nodejs原生搭建服务的不便之处:  // 1. 响应中文的情况下,程序员需要额外进行编码  // 2. 所有的请求都进入了createServer的回调,增加的编码的难度(比如: 需要程序员判断请求方式)  // 3. 获取参数不方便  // 4. 其他...  res.setHeader('content-type', 'text/html;charset=utf-8')  if(req.url === '/a'){      res.end('你好, 接收到了path为/a的请求')  }  if(req.url.startsWith('/b')){      const query = req.url.split('?')[1]      res.end(`你好, 接收到了path为/b的请求以及参数${query}`)  }})// 3. 开启服务器server.listen(5000, (err) => {  if (err) console.log('服务器启动失败')  else console.log('服务器启动成功')})
```

# 用express搭建服务

> 需要提前下载express

npm i express

```SQL
// 1. 引入expressconst express = require('express')// 2. 创建应用对象const app = express()// 3. 配置路由// 路由: 路由是指在计算机网络中将数据包从源地址传递到目的地址的过程// 简单理解路由: 一套一一对应的规则// 后端路由: url和网络资源的一一对应规则app.get('/a', (req, res) => {  res.send('你好,哈哈哈-/a-get')})app.get('/b', (req, res) => {  const query = req.query //可以轻松获取到浏览器上传的查询字符串  res.send(`你好,哈哈哈-/b-get-${query.name}-${query.age}`)})app.post('/b', (req, res) => {  res.send('你好,嘻嘻嘻-/b-post')})//4. 开启服务器app.listen(5000, (err) => {  if (err) console.log('服务器启动失败')  else console.log('服务器启动成功')})
```

# express中req常用的属性和方法

| 属性/方法           | 描述                                                 |
| ------------------- | ---------------------------------------------------- |
| request.query       | 获取get请求查询字符串的参数，拿到的是一个对象        |
| request.params      | 获取get请求参数路由的参数，拿到的是一个对象          |
| request.get(‘键’) | 获取请求头中指定key对应的value                       |
| request.body        | 获取post请求体，拿到的是一个对象（要借助一个中间件） |

# express中res常用的属性和方法

| 属性/方法                        | 描述                         | 注意                                                                                                                                 |
| -------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| response.send(响应内容)          | 给浏览器做出一个响应         | 1. 如果传入的是数字,则修改的是状态码(不建议传入数字) 2. 如果传入的是数组或对象,则自动转成字符串的形式3. 会自动设置响应头处理中文问题 |
| response.download(‘路径’)      | 告诉浏览器下载一个文件       | 相对路径和绝对路径都可以                                                                                                             |
| response.sendFile(‘路径’)      | 给浏览器发送一个文件         | 1. 必须传入绝对路径 2. 如果响应的文件,不是浏览器可以解析的文件,则直接下载.如果可以解析,则直接展示                                    |
| response.redirect(‘/目标路径’) | 重定向到一个新的地址（url）  |                                                                                                                                      |
| response.set(header,value)       | 自定义响应头内容             | 了解                                                                                                                                 |
| response.get(‘键’)             | 获取响应头指定key对应的value | 了解                                                                                                                                 |
| res.status(code)                 | 设置响应状态码               | 了解                                                                                                                                 |

# express的中间件

> 中间件（Middleware） 是一个函数，它可以访问请求对象（request）, 响应对象（response）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。

**中间件其实就是一个函数. 当浏览器给服务器发送请求,本来应该直接执行服务器的路由的回调. 但是如果有中间件,则先执行中间件,然后执行路由的回调**

## 中间的分类:

- 应用级中间件(自定义中间件): 我们自己写的中间件函数
- 内置中间件: express内置的中间件
- 第三方中间件: 别人写的中间件函数,使用之前,需要下载
- 路由器中间件: 抽离express路由

## 中间件的特点:

- 中间件是线性执行模式. 按照书写顺序,一个接着一个执行
- 整个请求响应过程中,req对象是同一个,res对象是同一个
- 中间件中的next表示下一个中间件, 如果调用next.才会继续往下执行.否则不执行后面的中间件和路由回调

**注意: 中间件定义时,一定要写在路由前面. 而且复杂的情况下,要考虑中间件的顺序问题**

## 应用级中间件的使用

```Plain
const express = require('express')const app = express()// app.use中的函数就是一个应用级的中间件app.use(function (req, res, next) {  //需求: 所有请求的响应头中都要加一个字段: xxx: 123  res.set('xxx', '123')  next()})app.get('/a', (req, res) => {  res.send([1, 2, 3])})app.listen(5000, (error) => {  if (error) console.log('失败')  else console.log('成功')})
```

## 内置中间件

```Plain
const express = require('express')const app = express()// express内置的中间件express.urlencoded可以将post请求请求主体的数据解析之后添加到req.body上app.use(express.urlencoded({ extended: false })) //使用express内置中间件app.post('/a', (req, res) => {  console.log(req.body)  res.send('post')})app.listen(5000, (error) => {  if (error) console.log('失败')  else console.log('成功')})
```

## 第三方中间件

```Plain
const express = require('express')// 下载 第三方中间件body-parser --> npm i body-parser// 引入第三方中间body-parserconst bodyParser = require('body-parser')//作用和express.urlencoded一样app.use(bodyParser.urlencoded({ extended: false })) // 使用第三方中间件app.get('/a', (req, res) => {  res.send([1, 2, 3])})app.post('/a', (req, res) => {  console.log(req.body)  res.send('post')})app.listen(5000, (error) => {  if (error) console.log('失败')  else console.log('成功')})
```

## 路由器(Router)中间件

> Router 是一个完整的中间件和路由系统，也可以看做是一个小型的app对象

为什么要使用Router: 为了更好的分类管理route

使用:

1. 新建一个router.js

   ```Plain
   //创建router对象const express = require('express')var router = express.Router();router.post('/a', function (req, res) {  res.send('a')})router.post('/b', function (req, res) {  res.send('/b')})//暴露路由器对象module.exports = router
   ```
2. 在server.js中

   ```Plain
   const express = require('express')// 引入router.jsconst router = require('./router')// 只用路由器中间件app.use(router) // 这样就把路由代码分离出去了app.listen(5000, (error) => {  if (error) console.log('失败')  else console.log('成功')})
   ```

# EJS模板引擎

## 前置知识

用户在浏览器中看到的页面大致可以分为两类:

1. 动态页面: 页面的数据会发生变化.比如:电商首页
2. 静态页面: 页面的数据不会发生变化. 比如:技术文档

其中动态页面按照动态插入数据的不同方式又分为

1. 前端渲染: 浏览器获取到的是一个不完整的页面,通过js动态插入数据. 也就是插入数据过程在浏览器端执行
2. 后端渲染: 浏览器获取到的是一个完整的页面. 动态插入数据的过程,是在服务器端执行的

前端渲染和后端渲染的优点和缺点:

1. 前端渲染利于前后端分离,缩短开发的周期.后端渲染开发周期相对更长
2. 前端渲染可以分担服务器的工作,减轻服务器压力. 后端渲染,后端要处理数据,也要往html中插入数据工作量太大
3. 前端渲染不利于SEO优化, 后端渲染利于SEO
4. 前端渲染可以让用户打开页面的速度更快. 后端渲染用户打开页面的速度相对较慢

### 利用模板引擎实现后端渲染

> 模板引擎工具有很多,当前课程中介绍使用ejs

1. 下载ejs npm i ejs
2. 将我们需要动态渲染的html页面改成.ejs index.html –> index.ejs
3. 把.ejs模板单独放到一个文件夹中
4. 在server.js中进行配置 app.set(‘view engine’, ‘ejs’) 告诉express.要使用ejs模板引擎 app.set(‘views’, ‘存放模板的路径’) // 告诉express. 模板存放在哪里
5. 使用模板引擎,动态渲染模板,然后响应浏览器 响应对象.render(‘模板的名称’, 数据) 注意: 一般数据就是一个对象
6. 修改模板 在ejs模板中. `<% %>`是ejs可以解析的语法. 这个语法中可以直接写js代码. 当模板解析的时候,`<% %>`里面的代码可以运行,但是运行的结果不会渲染到模板中. 如果需要将运行的结果渲染到模板中,应该写 `<%= js代码 %>` **注意: 如果需要渲染传入模板的数据 `<%= 传入对象的某个属性 %>`**

   ```Plain
   <!doctype html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Document</title>
   </head>
   <body>

   <h1>Hello EJS，这是我的第一个EJS</h1>
   <!-- 这些js代码可以被执行 -->
   <%
       console.log("Hello EJS");
       var a = 30;
   %>

   <!-- 输出转义的数据到模板上 -->
   <h2>用户名 : <%= username %></h2>
   <!-- 输出非转义的数据到模板上 -->
   <h2>用户名 : <%-username%></h2>

   <!--  可以包含JS代码与下面拼接在一起 -->
   <% if(a==20){ %>
    <h3>a的值是20</h3>
   <% } %>

   <% for(var i=0 ; i<3 ; i++){ %>
    <h3>老师真帅啊！！！！！</h3>
   <% } %>

   </body>
   </html>

   ```

# cookie和session

**注意: http协议是无状态的,浏览器每次给服务器发请求,服务器并不知道是哪个用户请求的,就无法实现登录保持和权限管理**

利用 `cookie`和 `session`可以解决上面描述的问题.

## cookie

- 什么是cookie ?

  cookie是浏览器端存储数据的一种方式.
- cookie的特点:

  当浏览器给服务器发送请求的时候,会先查看cookie中是否存储了对应的数据.如果存储了,则浏览器会自动把cookie中的数据添加到请求头中上传给服务器
- cookie的不足:

  各个浏览器对cookie的数量和大小都有不同的限制，这样就导致我们不能在Cookie中保存过多的信息。一般数量不超过50个，单个大小不超过4kb。

## session

- 什么是session?

  session是服务器端存储数据的一种方式
- session和cookie配合流程

  ![Untitled+5ca9af65b3a045acadf728906047a0e2/https:/www.notion.so./assets/cookie和session配合流程.png](Untitled+5ca9af65b3a045acadf728906047a0e2/https:/www.notion.so./assets/cookie和session配合流程.png)

## cookie和session的区别

1. 存在的位置：

   cookie 是浏览器端存储数据的方式

   session 是服务器端存储数据的方式
2. 安全性：

   cookie是以明文的方式存放在客户端的，安全性低，可以通过一个加密算法进行加密后存放

   session存放于服务器的内存中，所以安全性好
3. 有效期：

   cookie的默认有效期是一个 `会话的时间`(关闭浏览器器表示会话结束). 如果指定了时长,从创建时，就开始计时，固定时间后，cookie失效

   session的有效期可以被后端开发人员自定义.
4. 大小：

   cookie 保存的数据不能超过4K，很多浏览器都限制一个站点最多保存50个cookie

   session 保存数据理论上没有任何限制（内存有多大就能有多大）

## 在node中使用cookie

1. 下载安装

   npm i cookie-parser
2. 引入

   ```Plain
   var cookieParser = require("cookie-parser");
   ```
3. 设置为中间件

   ```Plain
   app.use(cookieParser());
   ```
4. 创建Cookie

   ```Plain
   res.cookie("键","值" [,配置对象]);//设置一个有效期为1天的cookieres.cookie("username","sunwukong" , {maxAge:1000*60*60*24});//设置一个永久有效的cookieres.cookie("username","sunwukong" , {maxAge:1000*60*60*24*365*10});
   ```
5. 修改Cookie

   ```Plain
   //Cookie一旦发送给浏览器，就不能再修改了//但是我们可以使用同名的cookie来替换已有cookieres.cookie("username","zhubajie");
   ```
6. 删除Cookie

   ```Plain
   //可以通过通过使用一个立即失效的cookie来替换cookie的形式来删除cookieres.cookie("username","11",{maxAge:0});//用来删除一个cookieres.clearCookie(“username”)用来删除一个指定cookie
   ```
7. 接收客户端传递过来的cookie：

   ```Plain
   // 备注：cookie-parser中间件会自动把客户端发送过来的cookie解析到request对象上。req.cookies.xxx ：获取cookie上xxx属性对应的值。
   ```

## 在浏览器中使用cookie

1. 设置cookie

   ```Plain
   document.cookie = "userId=nick123; expires=Wed, 15 Jan 2020 12:00:00 UTC"
   ```
2. 获取cookie

   ```Plain
   const cookie = document.cookieconsole.log(cookie) // "userId=nick123; expires=Wed, 15 Jan 2020 12:00:00 UTC"
   ```

## 在node中使用session

1. 下载安装：

   ```Plain
   npm i express-session  connect-mongo// express-session 提供开启session的中间件// connect-mongo 帮我们将session信息存储到数据库中
   ```
2. 引入express-session模块：

   ```Plain
   const session = require('express-session');
   ```
3. 引入connect-mongo模块：

   ```Plain
    const MongoStore = require('connect-mongo')(session);
   ```
4. 编写全局配置对象：

   ```Plain
   app.use(session({          name: 'userid',   //设置cookie的name，默认值是：connect.sid          secret: 'atguigu', //参与加密的字符串（又称签名）          saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id          resave: true ,//是否在每次请求时，强制重新保存session，即使他们没有变化          store: new MongoStore({            url: 'mongodb://localhost:27017/sessions_container',            touchAfter: 24 * 3600 //修改频率（例：//在24小时之内只更新一次）          }),          cookie: {            httpOnly: true, // 开启后前端无法通过 JS 操作cookie            maxAge: 1000*30 // 设置cookie的过期时间          },}));
   ```
5. 向session中添加一个信息

   ```Plain
   req.session.xxxx = yyy
   ```
6. 获取session上的xxx属性：

   ```Plain
   const {xxx} = req.session
   ```
