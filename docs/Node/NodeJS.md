---
title: NodeJS
date: 2023-08-19 16:55:45
permalink: /pages/bbd6e3/
categories:
  - Node
tags:
  - 
---
# Nodejs

## 介绍

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，是一个应用程序。

官方网址 [https://nodejs.org/en/](https://nodejs.org/en/)，中文站 [http://nodejs.cn/](http://nodejs.cn/)

## 作用

- 解析运行 JS 代码

- 操作系统资源，如内存、硬盘、

## 应用场景

- api接口服务

- 网页聊天室

- 动态网站, 个人博客, 论坛, 商城等

- 后端的Web服务，例如服务器端的请求（爬虫）、搭建后台管理系统

- 前端项目打包(webpack）

## 使用

### 下载安装

#### 下载

- 官网：[https://nodejs.org/en，历史版本下载](https://nodejs.org/en，历史版本下载) [https://npm.taobao.org/mirrors/node/](https://npm.taobao.org/mirrors/node/)

- Nodejs 的版本号奇数为开发版本，偶数为发布版本，我们选择**偶数号的 LTS** 版本

    > Long Term Support（LTS）:长期支持版本。软件更新与安全和维护修复的时间很长

#### 安装

双击打开安装文件，一路下一步next即可，默认的安装路径是 `C:\Program Files\nodejs`

安装完成后，新建一个 CMD 命令行窗口下运行 `node -v`，如显示版本号则证明安装成功，反之安装失败，重新安装。

```Plain Text
C:\Users\汪玮>node -v
v18.15.0
```

### 初体验

#### 交互模式

在命令行下输入命令 `node`，这时进入 nodejs 的交互模式

```Shell
C:\Users\汪玮>node
Welcome to Node.js v18.15.0.
Type ".help" for more information.
> 1 + 1
2
```

#### 文件执行

创建文件 hello.js ，并写入代码 `console.log('hello world')`，命令行运行 `node hello.js`

快速启动命令行的方法

- 在文件夹上方的路径中，选中全部路径，直接输入 cmd 即可

- 使用vscode 自带的命令行终端

```Plain Text
C:\Users\汪玮\Desktop\demo> node .\hello.js
hello nodejs
```

#### VScode 插件运行

安装插件 『code Runner』, 文件右键 -> Run code

#### 注意

- 在 nodejs 环境下，不能使用 BOM 和 DOM

- 也没有全局对象 window，全局对象的名字叫 global

### Buffer(缓冲器)

#### 介绍

Buffer 是一个和数组类似的对象，不同是 Buffer 是专门用来保存二进制数据的

#### 特点

- 大小固定：在创建时就确定了，且无法调整

- 性能较好：直接对计算机的内存进行操作

- 每个元素大小为 1 字节（Byte）

#### 操作

#### 创建 Buffer

- 直接创建 Buffer.alloc

- 通过数组和字符串创建 Buffer.from

#### Buffer 读取和写入

可以直接通过 `[]` 的方式对数据进行处理，可以使用 toString 方法将 Buffer 输出为字符串

- 对 buffer 进行读取和设置

- toString 将 Buffer 转化为字符串

```JavaScript
// 创建一个10字节的buffer
const buf1 = Buffer.alloc(10)
console.log(buf1.toString()) // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 通过字符串创建buffer
const buf2 = Buffer.from('iloveyou') 
console.log(buf2) // <Buffer 69 6c 6f 76 65 79 6f 75> // 都是字符在 ASCII 码表中对应的数字, 是 16 进制的表示方式。如字符i对应ascii码是105，转16进制是69

console.log(buf2[0]) // 105   打印的是10进制

// 修改buffer
buf2[0] = 99 // 99对应ascii码表是c
console.log(buf2.toString()) // cloveyou
```

#### 关于中文

一个 UTF-8 的中文字符大多数情况都是占 3 个字节

```JavaScript
const buf = Buffer.from('我爱你')
console.log(buf) // <Buffer e6 88 91 e7 88 b1 e4 bd a0>
```

#### 关于单位换算

单位换算公式（注意 B、b 大小写）

1TB=1024GB

1GB=1024MB

1MB=1024KB

1KB=1024B

1B=8b(1Byte=8bit ,1字节=8位）Byte为字节，bit为位

平时所说的网速如： 10Mbps  这里指的是 10兆比特每秒 ，所以理论下载速度 除以 8 才是正常的理解的下载速度

10Mbps的下载速率= 10Mbps/8=1.25MB（除以8就是将小b转换成大B就可以了）

### 文件系统 fs

fs 全称为 file system，是 NodeJS 中的内置模块，可以对计算机硬盘中的文件进行增删改查等操作。

#### 文件写入

- 简单写入

    - fs.writeFile(file, data, [,options], callback);

    - fs.writeFileSync(file, data,[,options]);

        ```JavaScript
        const fs = require('fs')
        // flag 标志   a：append 追加  w：正常写入
        fs.writeFile('./index.html', '星星之火，可以燎原\r\n', { flag: 'a' }, (err) => {
          if (err) {
            return console.log(err)
          }
          console.log('写入成功...')
        })
        ```

        同步和异步的错误处理

        - 同步错误：try-catch

        - 异步错误：回调函数中err来判断

- 流式写入

    - fs.createWriteStream(path[, options])

        ```JavaScript
        const fs = require('fs')
        //创建写入流对象
        const ws = fs.createWriteStream('./admin.html')
        
        //写入内容
        writeStream.write('床前明月光\r\n')
        writeStream.write('疑是地上霜\r\n')
        writeStream.write('举头望明月\r\n')
        writeStream.write('低头思故乡\r\n')
        // 使用 end 方法告诉流写入数据已经结束，会触发finish事件
        writeStream.end()
        
        // 当所有数据都已写入文件时，finish 事件将被触发
        writeStream.on('finish', function () {
          console.log('写入完毕')
        })
        ```

    ​

#### 文件读取

- 简单读取

    - fs.readFile(file, function(err, data){})

    - fs.readFileSync(file)

        ```JavaScript
        fs.readFile('./index.html', (err, data) => {
          // err 错误对象  data 读取到的文件内容 是一个 Buffer 类型的数据
          if (err) {
            return console.log(err)
          }
          console.log(data.toString())
        })
        ```

        ​

- 流式读取

    - fs.createReadStream();

        ```JavaScript
        //1. 引入 fs 模块
        const fs = require('fs')
        
        //2. 创建读取流对象
        const readStream  = fs.createReadStream('./index.html')
        
        //3. 监听事件
        // 当可读流读取到数据时，data 事件将被触发
        readStream.on('data', (chunk) => {
          console.log(chunk.toString())
        })
        
        // 当可读流读取完文件时，end 事件将被触发
        readStream.on('end', function() {
          console.log('读取完毕');
        });
        ```

#### 两种方式操作文件区别

在Node.js中，`createReadStream`和`readFile`是两种不同的文件读取方法，它们在读取大文件和小文件时的表现是不同的。

`readFile`方法是将整个文件读取到内存中，然后返回其内容。如果读取的是大文件，这个过程会占用大量的内存资源，容易导致程序崩溃或者变慢。因此，`readFile`适合读取小文件，而不适合读取大文件。

相比之下，`createReadStream`方法则是将文件分成小块（chunk）逐一读取，每读取一个chunk就会将其推送到读取流中，这样可以逐步读取整个文件，而不会将整个文件加载到内存中。这种逐步读取的方式可以有效地避免内存资源占用过多的问题，从而适合读取大文件

所以：

- readFile/writeFile  ：读取小文件适合

- createReadStream  ：读取大文件适合

案例练习：复制大文件并重命名!!

```JavaScript
// 复制文件  ./夏天的风.mp3  =>  ./凉爽的风.mp3
const fs = require('fs')

// 1. 创建可读流
const readStream = fs.createReadStream('./夏天的风.mp3')
// 2. 创建可写流
const writeStream = fs.createWriteStream('./凉爽的风1.mp3')

// 3. 简便操作 ，使用 pipe() 管道方法将两个流连接起来，
readStream.pipe(writeStream) 

readStream.on('end', () => {
  console.log('文件读取完成')
})

writeStream.on('finish', () => {
  console.log('文件写入完成')
})
```

#### 文件删除

- fs.unlink('./test.log', function(err){});

- fs.unlinkSync('./move.txt');

    ```JavaScript
    const fs = require('fs')
    
    //异步删除  不进回收站  不能删除文件夹
    // fs.unlink('./home.html', (err) => {
    //   if (err) throw err
    //   //输出
    //   console.log('删除成功')
    // })
    
    //同步删除
    fs.unlinkSync('./test.html')
    ```

- __dirname: 获取当前文件所在的目录绝对路径

- __filename: 获取当前文件名的绝对路径

#### 移动文件 + 重命名

- fs.rename('./1.log', '2.log', function(err){})

- fs.renameSync('1.log','2.log')

    ```JavaScript
    const fs = require('fs')
    
    // 将index.html改名为admin.html
    // fs.renameSync('./index.html','admin.html')
    
    // 将admin.html移动./file目录中，并改名为base.html
    fs.rename('./admin.html', './file/base.html', (err) => {
      if (err) {
        return console.log(err.message)
      }
    s
      console.log('移动成功')
    })
    ```

    ​

#### 文件夹操作

- mkdir  创建文件夹

- rmdir 删除文件夹

- readdir  读取文件夹

- stat 读取文件的状态

    ```JavaScript
    const fs = require('fs')
    
    // 创建文件夹 assets 
    // fs.mkdir('./assets', (err) => {
    //   if (err) throw err
    //   //成功提示
    //   console.log('创建成功...')
    // })
    
    //递归创建
    fs.mkdir('./a/b/c', { recursive: true }, (err) => {
      if (err) throw err
      //成功提示
      console.log('创建成功...')
    })
    
    //读取文件夹
    fs.readdir('./file', (err, files) => {
      if (err) throw err
      console.log(files)
    })
    
    //绝对路径   d:/ 路径中 『/』 不能省略
    fs.readdir('d:/', (err, files) => {
      if (err) throw err
      //输出文件列表
      console.log(files)
    })
    
    //删除文件夹
    fs.rmdir('./assets', (err) => {
      if (err) throw err
      console.log('删除成功')
    })
    
    //递归删除
    fs.rm('./a', { recursive: true }, (err) => {
      if (err) throw err
      console.log('删除成功....')
    })
    
    //读取文件的状态
    fs.stat('./hi.html', (err, stats) => {
      if (err) throw err 
      // console.log(stats) 输出 状态对象 stats {size: 大小(字节)  atime: 最后的访问时间  mtime: 最后的修改时间，ctime:创建时间 }
      console.log(stats.isFile())
      console.log(stats.isDirectory())
    })
    ```

