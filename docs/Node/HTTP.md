---
title: HTTP
date: 2023-05-19 16:55:45
permalink: /pages/c55f98/
categories:
  - Node
tags:
  -
---
# path路径模块

```Plain
const path = require('path')
```

常用的几个方法：

- `path.join([...paths]):`  `path.join()` 方法会将所有给定的 `path` 片段连接到一起（使用平台特定的分隔符作为定界符），然后规范化生成的路径。
- `path.resolve([...paths]): 生成规范化的路径`，并生成的路径会解析为绝对路径 。 如果没有传入 `path` 片段，则 `path.resolve()` 会返回当前工作目录的绝对路径 。
- `path.extname(path)`: 获取文件的后缀
- `path.dirname(path)`: 返回path路径的目录名

```JavaScript
const path = require('path')
let imgSrc = 'c:/a/b/c/111.png'

console.log(path.dirname(imgSrc)) // c:/a/b/c
console.log(path.extname(imgSrc)) // .png
console.log(path.isAbsolute(imgSrc)) // true
let { base } = path.parse(imgSrc)
console.log(base) // 111.png
```

# HTTP 协议

## 介绍

- HTTP（hypertext transport protocol）协议也叫『超文本传输协议』

  > **HTTPS**:超文本传输安全协议（**Hypertext Transfer Protocol Secure**）
  >
- 它是客户端和web服务器数据传输的基础
- http协议是一种基于 TCP/IP 的应用层通信协议，这个协议详细规定了浏览器和万维网服务器之间互相通信的规则。

协议主要规定了两方面的内容

- 客户端(浏览器)向服务器发送数据，称之为『请求报文』
- 服务器向客户端(浏览器)返回数据，称之为『响应报文』

**什么是服务器：**

简单来说，可以提供某种服务的机器。

## http抓包

抓取网页的所有请求与响应，也就是咱们俗称的抓包。常用抓包工具：

- 安装fiddler等其他工具 (看效果就行)
- 使用浏览器自带调试工具network

### 请求报文

一个完整的http请求应该包含 `请求报文(Request)`和 `响应报文(Response)`两部分。

HTTP 请求报文包括四部分

- 请求行
- 请求头
- 空行
- 请求体（仅限于post请求）

```HTTP
GET http://127.0.0.1:5500/index.html HTTP/1.1
Host: 127.0.0.1:5500
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
sec-ch-ua: "Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7


```

- GET [http://localhost:5000/index.html](http://localhost:5000/index.html) HTTP/1.1：

  - GET请求
  - 请求路径为[http://localhost:5000/index.html](http://localhost:5000/index.html)
  - 协议是HTTP 1.1版本
- Host: 127.0.0.1:5500：请求的主机名为localhost，端口号3000
- Connection: keep-alive：处理完这次请求后继续保持连接，可减少建立和关闭TCP连接的开销
- Pragma: no-cache：不缓存该资源。http 1.0的规定。为了兼容只支持 HTTP/1.0的客户端
- Cache-Control: no-cache： 不缓存该资源 。http 1.1的规定，优先级更高
- Upgrade-Insecure-Requests: 1：告诉服务器，支持优先选择发送 https请求，更加安全
- User-Agent: Mozilla/5.0 (Windows ...) ：告诉服务器当前浏览器和操作系统相关的信息。
- Accept: text/html：告诉服务器，当前客户端可以接收的文档类型。
- Accept-Encoding: gzip, deflate, br：告知服务器客户端支持的压缩格式。数据在网络上传递时，服务器会把数据压缩后再发送客户端
- Accept-Language: zh-CN,zh;q=0.9：告知服务端客户端可支持的语言

### 响应报文

HTTP 响应报文也包括四个部分

- 响应行
- 响应头
- 空行
- 响应体

```HTTP
HTTP/1.1 200 OK
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Sun, 09 Apr 2023 12:50:37 GMT
ETag: W/"137-187661186c3"
Content-Type: text/html; charset=UTF-8
Content-Length: 1804
Date: Sun, 09 Apr 2023 12:59:08 GMT
Connection: keep-alive
Keep-Alive: timeout=5

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>首页</title>
</head>
<body>
  <h1>你好世界</h1>
</body>
</html>
```

- HTTP/1.1 200 OK：协议是HTTP 1.1版本，响应状态码为200代表请求成功，状态码文本为200
- Accept-Ranges: bytes：告诉浏览器支持多线程下载，而不是重新开始下载
- Cache-Control: public, max-age=0：对所有静态资源进行缓存控制。max-age指定多久缓存一次，0表示不缓存。
- Last-Modified: Wed, 21 Mar 2018 13:13:13 GMT：这个资源最后一次被修改的日期和时间
- ETag: W/"a9-16248b12b64"：请求资源的标记/ID
- Content-Type: text/html; charset=UTF-8：返回响应体资源类型
- Content-Length: 1804：响应体的长度，单位字节
- Date: Thu, 22 Mar 2018 12:58:41 GMT：提供了日期的时间标志，标明响应报文是什么时间创建的

## 创建 web 服务器

使用 nodejs 创建 HTTP 服务器

```JavaScript
// 1. 导入http模块，创建服务器
const http = require('http')

// 2. 创建一个服务器对象
const server = http.createServer((req, res) => {
  res.end('hello world')
})

// 3. 指定端口号，开启服务
server.listen(3000, () => {
  console.log('server is running at port 3000')
})

```

- request 是对请求的封装对象
- response 是对响应的封装对象

### 获取请求信息

```JavaScript
// 获取请求方法
console.log(req.method); // 

// 获取http版本
console.log(req.httpVersion);

// 获取请求路径
console.log(req.url);

// 获取请求头
console.log(req.headers);

// 获取请求体
req.on('data', function(chunk){})
req.on('end', function(){});
```

> URL(Uniform Resource Locator) :地址用于定位一个网络上的资源

### 设置响应信息

```JavaScript
// 设置响应状态码
res.statusCode = 200;
// 设置响应状态码对应的信息（不建议改）
res.statusMessage = 'OK'

// 设置响应头
res.setHeader('content-type','text/html;charset=utf-8');

// 设置响应体数据
res.write('body');

// 结束请求
res.end();

```

### 注意事项

1. 在监听request事件中，最后一定要 `res.end()`结束响应。否则浏览器会挂起

   浏览器显示中文可能是乱码，需设置响应头Content-type告诉浏览器显示时所使用的内容类型，且要在 `res.end()`之前设置  ，这样浏览器会用对应的方式去解析

```JavaScript
res.setHeader("Content-type","text/plain;charset=utf-8"); #响应为纯文本
res.setHeader("Content-type","text/html;charset=utf-8");  #响应为html格式
```

## GET 和 POST 的区别

GET 和 POST 是 HTTP 协议请求的两种方式

- GET 主要用来获取数据, POST 主要用来提交数据
- get和post本质上都是属于tcp连接
- 传参方式不一样：

  - get将参数附着在url后面传递，query String。 如 `http://127.0.0.1:3000/index.php?a=1&b=2`

    - post放在请求体（request body）中
- 传递数据格式不一样

  - get只能传递普通文本数据，
  - 而post可以传递二进制数据（如：图片、视频、音频）
- 传参大小不一样

  - get请求在url传递的参数有长度限制，而post没有。get传参大小一般在4kb,因浏览器而异同，
  - post请求基本没有限制
- 安全性

  - get没有post安全，因为get参数直接显示在url地址中，所以不能传递敏感数据
- 缓存

  - get请求浏览器会主动缓存，而post不会,除非主动设置
  - get请求历史记录会保存在浏览历史记录，而post请求不会

## GET 和 POST 使用场景

GET 请求的情况

- 在地址栏直接输入 url 访问
- 点击 a 连接
- link 标签引入 css
- script 标签引入 js
- img 标签引入 图片
- form 表单  `<form method="get">`
- AJAX GET 请求

post 请求的情况

- form 表单 `<form method="POST">`
- AJAX  POST 请求

## 响应状态码

[响应状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)代表着http请求是否成功，还是失败等信息。

状态码由三位数组构成：分为

- 1xx：信息性响应，表示服务器已接收请求，但需要客户端继续操作。
- 2xx：成功响应，表示服务器已成功处理请求。
- 3xx：重定向响应，表示需要客户端进一步操作以完成请求。
- 4xx：客户端错误响应，表示客户端发送的请求有误或无法被处理。
- 5xx：服务器错误响应，表示服务器无法完成请求或发生了错误。

常用的响应状态码：

- 200：请求成功，浏览器会把响应体内容（通常是html）显示在浏览器中；
- 301：永久重定向，被请求的旧资源永久移除了（不可以访问了），将会跳转到一个新资源，搜索引擎在抓取新内容的同时也将旧的网址替换为重定向之后的网址；
- 302：临时重定向，被请求的旧资源还在（仍然可以访问），但会临时跳转到一个新资源，搜索引擎会抓取新的内容而保存旧的网址；
- 304：（Not Modified）请求资源未被修改，浏览器将会读取缓存；
- 403：forbidden 禁止的
- 404：请求的资源没有找到not found，说明客户端错误的请求了不存在的资源；
- 500：请求资源找到了，但服务器内部出现了错误；

## 获取请求查询字符串

get方式的请求参数，参数是追加在请求url地址?的后面  ，叫做查询字符串

```Plain
http://localhost:3000/getUser?id=66&name=zhangsan
```

通过 `req.url`就可以获取上面路径信息，结果如下：

```Plain
 /getUser?id=66&name=zhangsan
```

不过上面路径 `/index`和参数 `name=zhangsan`是在一个字符串中，不便于获取参数，我们可以借助nodejs的内置url模块.

### url模块

作用：解析url路径中的相关信息

```JavaScript
// 调用parse()方法解析url地址,设置true可以把参数初始化为json对象格式，否则是查询字符串格式
var url = require('url');
var result = url.parse(req.url, true); 
console.log(result);
```

上面打印的结果：

```JavaScript
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?id=66&name=zhangsan',
  query: { id: '66', name: 'zhangsan' }, 
  pathname: '/index',
  path: '/index?id=66&name=zhangsan',
  href: '/index?id=66&name=zhangsan' 
}
```

> 重点掌握pathname和query两个属性。

## 实现不同url响应不同的内容

- 请求 / 或 /index，响应index内容
- 请求 /login，响应login内容
- 请求 /register，响应register内容
- 上面都没有匹配到，响应404 not found

## 搭建静态资源服务

实现的功能：

- 可以响应html的请求
- 可以响应css的请求
- 可以响应js的请求
- 可以响应图片的请求

参考代码：

```JavaScript
// 1. 引入 http 内置模块
const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

function getMIME(ext) {
  const mimes = {
    html: 'text/html;charset=utf-8',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    mp3: 'audio/mpeg',
    mp4: 'video/mp4',
    json: 'application/json',
    default: 'application/octet-stream', // 出现文件下载，浏览器默认情况
  }
  return mimes[ext] || mimes['default']
}

// 2. 创建服务
const server = http.createServer(function (req, res) {
  let { pathname } = url.parse(req.url, true)
  let fullFilePath = path.join(__dirname, pathname)
  let ext = path.extname(fullFilePath).substring(1)
  // 读文件
  fs.readFile(fullFilePath, (err, data) => {
    if (err) {
      res.setHeader('Content-type', getMIME('html'))
      if (pathname === '/') {
        res.end(fs.readFileSync('./index.html'))
        return
      }
      res.statusCode = 404
      res.end('<h1>404 not Found 找不到</h1>')
      return
    }
    res.setHeader('Content-type', getMIME(ext))
    res.end(data)
  })
})

// 3. 监听端口
server.listen(8000, () => {
  console.log('server is running at port 8000')
})

```

## 静态资源的MIME类型

HTTP服务可以设置响应头Content-type来表示响应头的MIME类型。

> 媒体**类型**（通常称为Multipurpose Internet Mail Extensions 或**MIME 类型**）

```JSON
 html: 'text/html',
 css: 'text/css',
 js: 'text/javascript',
 png: 'image/png',
 jpg: 'image/jpeg',
 mp3: 'audio/mpeg',
 mp4: 'video/mp4',
 json: 'application/json',
```

对于未知的资源类型，可以选择 `application/octet-stram`类型，浏览器遇到此类型时,会对响应体内容进行**下载**。

## 获取post请求体参数

与get请求不同的是，post传输的数据一般比get要大得多，所以服务端接收post请求体参数不是一次就可以获取的，通常需要多次。

具体实现：

- 浏览器每传输一部分post数据(buffer)到服务器就会触发一次 req对象的data 事件，传输完毕后会触发req对象的end事件。此时才代表post数据传输完毕。
- 所以我们可以监听req对象的**data事件**就可以获取每次传输的部分数据，最后在req对象的**end事件**中把数据进行合并即可。这样就可以获取完整的请求体数据了。

核心代码

```JavaScript
// 1. 导入http模块
const http = require('http')
const fs = require('fs')
const path = require('path')
const questString = require('querystring') // // 把查询字符串(a=1&b=2)解析成一个对象
// 2. 创建服务器对象
const server = http.createServer((req, res) => {
  // 获取请求方式
  let method = req.method.toLowerCase()
  res.setHeader('content-type', 'text/html;charset=utf-8')
  // 如果是get请求，则响应一个表单
  if (method === 'get') {
    const data = fs.readFileSync(path.join(__dirname, 'register.html'))
    res.end(data)
  } else {
    // post请求,由于post数据比较大，会分多次传输
    // 每次传输部分数据会触发req的data事件
    // 传输完毕后会触发req的end事件
    const bigBuf = []
    req.on('data', (chunk) => {
      // chunk：块，是一个buffer类型
      bigBuf.push(chunk)
    })
    req.on('end', () => {
      // 在这里将所有小chunk拼接在一起
      let body = Buffer.concat(bigBuf).toString()
      // 将字符串a=1&b=2解析成一个对象形式： {a:1,b:2}
      let { username, password } = questString.parse(body)
      console.log('请求体参数：', username, password)
    })
    res.end('post请求')
  }
})
// 3. 指定端口号，开启服务区
server.listen(3000, () => {
  console.log('服务已经启动了 端口号为3000')
})
```

[练习](HTTP+%E5%8D%8F%E8%AE%AE+2ee9e3c2-742c-4ace-a8ce-248a260dada0/%E7%BB%83%E4%B9%A0%20899f96fc-0924-49ce-a796-b0ccdfe673d2.md)

[随堂笔记](HTTP+%E5%8D%8F%E8%AE%AE+2ee9e3c2-742c-4ace-a8ce-248a260dada0/%E9%9A%8F%E5%A0%82%E7%AC%94%E8%AE%B0%204605b9a1-2c9d-40ae-b1a7-446cdaed8d09.md)
