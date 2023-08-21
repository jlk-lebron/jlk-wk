---
title: 05-ajax
date: 2023-08-19 16:55:45
permalink: /pages/418db7/
categories:
  - 工程化
tags:
  - 
---
# 05-ajax

# XMLHttpRequest对象

> 浏览器内建对象，用于与服务器通信(交换数据) ， 由此我们便可实现对网页的部分更新，而不是刷新整个页面。这个请求是异步的，即在往服务器发送请求时，并不会阻碍程序的运行，浏览器会继续渲染后续的结构。

```Plain Text
请求由客户端发起，其规范格式为：请求行、请求头、请求主体。
```

![Untitled+5ca9af65b3a045acadf728906047a0e2/https:/www.notion.so./assets/02-请求规范格式.png](Untitled+5ca9af65b3a045acadf728906047a0e2/https:/www.notion.so./assets/02-请求规范格式.png)

## 发送get请求

XMLHttpRequest以异步的方式发送HTTP请求，因此在发送请求时，一样需要遵循HTTP协议。

> 使用XMLHttpRequest发送get请求的步骤

```JavaScript
//1. 创建一个XMLHttpRequest对象var xhr = new XMLHttpRequest();//2. 设置请求行// 第一个参数:请求方式  get/post// 第二个参数:请求的地址 需要在url后面拼上参数列表// 第三个参数: 是否异步请求,默认是true  true就是异步,false是同步xhr.open("get", "http://localhost:5000/test?name=haha");//3. 设置请求头(get不用设置)//请求头中可以设置Content-Type,用以说明请求主体的内容是如何编码//get请求时没有请求体,无需设置请求头//4. 设置请求体//get请求的请求体为空,因为参数列表拼接到url后面了xhr.send(null);
```

注意点 :

- get请求,设置请求行时,需要把参数列表拼接到url后面

- get请求不用设置请求头, 不用说明请求主体的编码方式

- get请求的请求体为null

## 发送post请求

```JavaScript
var xhr = new XMLHttpRequest();// 1. 设置请求行 post请求的参数列表在请求体xhr.open("post", "http://localhost:5000/test");// 2. 设置请求头, post 请求必须要设置 content-type, 标记请求体内容的解析方式, 不然后端无法解析获取数据xhr.setRequestHeader( "content-type", "application/x-www-form-urlencoded" );//在请求发送过程中会对数据进行序列化处理，以键值对形式？key1=value1&key2=value2的方式发送到服务器// 3. 设置请求体xhr.send( "name=zs&age=18" );
```

注意点 :

- post请求, 设置请求行时, 不拼接参数列表

- post必须设置请求头中的content-type为application/x-www-form-urlencoded, 标记请求体解析方式

- post 请求需要将参数列表设置到请求体中

## 获取响应 readyState

readyState:记录了XMLHttpRequest对象的当前状态

```Plain Text
readyState有五种可能的值：
xhr.readyState = 0时，UNSENT open尚未调用
xhr.readyState = 1时，OPENED open已调用
xhr.readyState = 2时，HEADERS_RECEIVED 接收到响应头信息
xhr.readyState = 3时，LOADING 接收到响应主体
xhr.readyState = 4时，DONE 响应完成

不用记忆状态，只需要了解有状态变化这个概念
```

HTTP响应分为3个部分，状态行、响应头、响应体。

```JavaScript
//给xhr注册一个onreadystatechange事件，当xhr的状态发生状态发生改变时，会触发这个事件。xhr.onreadystatechange = function () {  if(xhr.readyState == 4){    //1. 获取状态码    console.log("状态行:"+xhr.status);    //2. 获取响应头    console.log("所有的响应头:"+xhr.getAllResponseHeaders());    console.log("指定响应头:"+xhr.getResponseHeader("content-type"));    //3. 获取响应体    console.log(xhr.responseText);  }}
```

# 同源与跨域

## 同源

### 同源策略的基本概念

> 1995年，同源政策由 Netscape 公司引入浏览器。目前，所有浏览器都实行这个政策。 同源策略：最初，它的含义是指，A网页设置的 Cookie，B网页不能打开，除非这两个网页“同源”。所谓“同源”指的是“三个相同”。

协议相同 域名相同 端口相同

举例来说，这个网址`http://www.example.com/dir/page.html`协议是`http://`，

域名是`www.example.com`，端口是`80`（默认端口可以省略）。它的同源情况如下。

```JavaScript
http://www.example.com/dir2/other.html：同源file:///F:/phpStudy/WWW/day01/04-demo/04.html 不同源(协议不同)http://v2.www.example.com/dir/other.html：不同源（域名不同）http://www.example.com:81/dir/other.html：不同源（端口不同）//来源: http://127.0.0.1:5000/index.html// ajax地址: http://localhost:5000/test
```

### 同源策略的目的

> 同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。

### 同源策略的限制范围

> 随着互联网的发展，“同源策略”越来越严格，目前，如果非同源，以下三种行为都将收到限制。

```JavaScript
1. Cookie、LocalStorage 和 IndexDB 无法读取。2. DOM 无法获得。3. AJAX 请求不能发送。
```

虽然这些限制是很有必要的，但是也给我们日常开发带来不好的影响。比如实际开发过程中，往往都会把服务器端架设到一台甚至是一个集群的服务器中，把客户端页面放到另外一个单独的服务器。那么这时候就会出现不同源的情况，如果我们知道两个网站都是安全的话，我们是希望两个不同源的网站之间可以相互请求数据的。这就需要使用到**跨域** 。

## 跨域

### 解决跨域问题

### jsonp

> JSONP(JSON with Padding)、可用于解决主流浏览器的跨域数据访问的问题。

原理：服务端返回一个定义好的js函数的调用，并且将服务器的数据以该函数参数的形式传递过来，这个方法需要前后端配合

`script` 标签是不受同源策略的限制的，它可以载入任意地方的 JavaScript 文件。类似的还有`img`和`link`标签

```HTML
<!--不受同源策略限制的标签--><img src="http://www.api.com/1.jpg" alt=""><link rel="stylesheet" href="http://www.api.com/1.css"><script src="http://www.api.com/1.js"></script>
```

```JavaScript
// 浏览器端:  let btn = document.getElementById('btn')  btn.addEventListener('click',function () {    //1.动态生成一个script节点    let scriptNode = document.createElement('script')    //2.全局定义一个函数    window.getData = function (data) {      console.log(data)    }    //3.指定请求地址    scriptNode.src = 'http://localhost:3000/test?callBack=getData'    //4.添加节点    document.body.appendChild(scriptNode)  })// 服务器端:app.get('/test',(req,res)=>{    let {callBack} = req.query    let arr = [{name:'kobe',age:12},{name:'wade',age:13}]   // res.send(arr)    let str = callBack+'('+JSON.stringify(arr)+')'    //getData([{name:'kobe',age:12},{name:'wade',age:13}])    //res.send('alert2(0)')    res.send(str)})
```

1. 说白了，jsonp的原理就是 借助了script标签 src 请求资源时, 不受同源策略的限制.

2. 在服务端返回一个函数的调用，将数据当前调用函数的实参。

3. 在浏览器端，需要程序要声明一个全局函数，通过形参就可以获取到服务端返回的对应的值

jsonp原理大家需要知道，面试中经常会问到，实际工作中不用纠结, 因为jquery已经帮我们封装好了，我们使用起来非常的方便。

### 跨域资源共享(CORS)

### cors的使用

> 新版本的XMLHttpRequest对象，可以向不同域名的服务器发出HTTP请求。这叫做“跨域资源共享”（Cross-origin resource sharing，简称CORS）。

跨域资源共享（CORS）的前提

- 浏览器支持这个功能( 兼容性IE10+ )

- 服务器必须允许这种跨域。

服务器允许跨域的代码：

```PHP
//允许所有的域名访问这个接口header("Access-Control-Allow-Origin:*");//允许www.study.com这个域名访问这个接口header("Access-Control-Allow-Origin:http://www.study.com");
```

### CORS的具体流程（了解）

1. 浏览器在真正发送请求之前会先给服务器发送一个预请求,询问是否支持跨域

2. 服务器端收到这个请求后，在响应头中添加Access-Control-Allow-Origin Header资源权限配置。发送响应

3. 浏览器收到响应后，查看响应头中是否设置了`Access-Control-Allow-Origin:请求源域名或者*;`

    如果有,则浏览器发起真正的请求,如果没有,则浏览器不发送真正的请求并抛出跨域的错误

**注意:**

1. **跨域行为是浏览器行为，响应是回来了, 只是浏览器安全机制做了限制, 对于跨域响应内容进行了忽略。**

2. **服务器与服务器之间是不存在跨域的问题的**

### jsonp与cors的对比

- jsonp兼容性好，老版本浏览器也支持，但是jsonp仅支持get请求，发送的数据量有限。使用麻烦

- cors需要浏览器支持cors功能才行。但是使用简单，**只要服务端设置允许跨域，对于客户端来说，跟普通的get、post请求并没有什么区别。**

- 跨域的安全性问题：**因为跨域是需要服务端配合控制的** ，也就是说不论jsonp还是cors，如果没有服务端的允许，浏览器是没法做到跨域的。

# XMLHttpRequest2.0

老版本的XMLHttpRequest的缺点：

```JavaScript
1. 仅支持传输文本数据，无法传输二进制文件，比如图片视频等。2. 传输数据时，没有进度信息，只能提示完成与否。3. 受到了"同源策略"的限制
```

新版本的功能：

```JavaScript
1. 可以设置timeout超时时间2. 可以使用formData对象管理表单数据3. 允许请求不同域名下的数据（跨域）4. 支持上传二进制文件5. 可以获取数据传输的进度信息
```

**注意：我们现在使用new XMLHttpRequest创建的对象就是2.0对象了，我们之前学的是1.0的语法，现在学习一些2.0的新特性即可。**

## timeout设置超时

```JavaScript
xhr.timeout = 3000;//设置超时时间xhr.ontimeout = function(){  alert("请求超时");}
```

## formData管理表单数据

> formData对象类似于jquery的serialize方法，用于管理表单数据

formData 仅支持 post 请求

不需要设置请求头, 浏览器会自动检测帮我们设置

```JavaScript
使用特点：1. 实例化一个formData对象， new formData(form); form就是表单元素2. formData对象可以直接作为 xhr.send(formData)的参数。注意此时数据是以二进制的形式进行传输。3. formData有一个append方法，可以添加参数。formData.append("id", "1111");4. 这种方式只能以post形式传递，不需要设置请求头，浏览器会自动为我们设置一个合适的请求头。
```

代码示例：

```JavaScript
//1. 使用formData必须发送post请求    xhr.open("post", "url");//2. 获取表单元素var form = document.querySelector("#myForm");//3. 创建form对象，可以直接作为send的参数。var formData = new FormData(form);//4. formData可以使用append方法添加参数formData.append("id", "1111");//5. 发送，不需要指定请求头，浏览器会自动选择合适的请求头xhr.send(formData);
```

## 文件上传

> 以前，文件上传需要借助表单进行上传，但是表单上传是同步的，也就是说文件上传时，页面需要提交和刷新，用户体验不友好，xhr2.0中的formData对象支持文件的异步上传。

```JavaScript
var formData = new FormData();//获取上传的文件，传递到后端var file = document.getElementById("file").files[0];formData.append("file", file);xhr.send(formData);
```

## 显示文件进度信息

> xhr2.0还支持获取上传文件的进度信息，因此我们可以根据进度信息可以实时的显示文件的上传进度。

```JavaScript
1. 需要注册 xhr.upload.onprogress = function(e){} 事件，用于监听文件上传的进度.注意：需要在send之前注册。2. 上传的进度信息会存储事件对象e中3. e.loaded表示已上传的大小   e.total表示整个文件的大小
```

代码参考：

```JavaScript
xhr.upload.onprogress = function (e) {  inner.style.width = (e.loaded/e.total*100).toFixed(2)+"%";  span.innerHTML = (e.loaded/e.total*100).toFixed(2)+"%";}xhr.send(formData);
```

# axios的使用

这里故意不写axios的使用代码,因为axios使用非常多.但是作为开发人员不可能记住所有axios的配置项.所以必须学会查看[axios官方文档](https://www.axios-http.cn/)

# fetch(了解)

> 是js原生提供的基于promise和http协议的发请求的新方式

```Plain Text
const response = await fetch(url地址,{    method: 请求方式. 不写默认是get,    body: post请求请求主体的数据    headers:{ //设置请求头        'content-type': 'application/json'    }})// response 是fetch中封装的一个响应数据对象,还需要调用自身的json方法,才能拿到响应主体的数据const data = await response.json() data才是真正的数据
```

