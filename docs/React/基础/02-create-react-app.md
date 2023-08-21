---
title: 02-create-react-app
date: 2023-08-19 16:55:45
permalink: /pages/9705e8/
categories:
  - React
  - 基础
tags:
  - 
---
# create-react-app

> create-react-app 被称为`脚手架工具`

**作用:** 开发过程中开发者希望能够使用 `es6 模块化语法`或代码完成后希望对代码进行`打包`,这些操作就需要开发者通过打包工具(如 `webpack`)进行配置. 但是配置过程非常繁琐,所以利`create-react-app`,就可以帮助开发者快速创建 react 项目目录,配置 webpack 以及下载依赖包等,让开发者只需要关注项目的业务流程,提高开发效率

## 使用 create-react-app

1. 下载 create-react-app

    ```JavaScript
    // 这是一个全局包,只需要下载一次. 未来在命令行窗口中使用
    npm i create-react-app -g
    ```

1. 通过 create-react-app 创建项目目录以及 webpack 配置文件和依赖包

    ```JavaScript
    // 利用npm下载依赖包
    C:\Users\用户名\Desktop> create-react-app 项目名称
    
    // 利用yarn下载依赖包
    C:\Users\用户名\Desktop> yarn create react-app 项目名称
    
    //执行以上任意一条指令之后,create-react-app 会自动帮我们在桌面创建一个 react 项目
    ```

    **注意: 项目名称会成为项目的包名,所以项目名称不能用中文,不能有大写字母,也不要和当前项目中要下载的依赖包重名(否则未来重名的依赖包无法下载成功)**

## 项目目录介绍

![项目目录](import/images/project.png)

**注意:**
自动生成的项目目录中大部分文件是没有用的可以直接删除.最干净的项目目录结构如下:

![干净的项目目录](import/images/simple-project.png)

```JavaScript
// src目录下至少有一个index.js入口文件

// 引入react
import React from 'react'
// 引入react-dom(v18)
import ReactDOM from 'react-dom/client'
// 引入react-dom(v18之前)
// import ReactDOM from 'react-dom'
const title = <h1>利用create-react-app创建的react项目</h1>
// 渲染动态创建的元素(v18)
const root = ReactDOM.createRoot(document.getElementById('root')).render(title)
// 渲染动态创建的元素(v18之前)
// ReactDOM.render(title, document.getElementById('root'))
```

```Plain Text
<!-- public目录下至少有一个index.html文件, 文件中至少应该有一个根标签 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

## 启动和打包项目

- 开发环境启动项目

    ```JavaScript
    // 项目根目录执行 npm start 指令
    C:\Users\用户名\Desktop\my-project> npm start
    ```

- 项目完成后打包

    ```JavaScript
    // 项目根目录执行 npm run build 指令
    C:\Users\用户名\Desktop\my-project> npm run build
    ```

