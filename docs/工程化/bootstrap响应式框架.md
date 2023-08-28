---
title: bootstrap响应式框架
date: 2023-06-19 16:55:45
permalink: /pages/9817b8/
categories:
  - 工程化
tags:
  -
---
# Bootstrap UI框架的使用

## 介绍

一个前端 UI 框架，由 twitter 公司开发，2013 年 7 月发布 1.0 版本

- 官方网址 [https://getbootstrap.com/](https://getbootstrap.com/)
- 中文站 [https://www.bootcss.com/](https://www.bootcss.com/)

## 作用

快速开发响应式网页.

- 不适合针对设计稿
- 适合仿站，适合写一些网页demo，做一些响应式网站

## 版本选择

    [    ] 2.x

    [ √ ] 3.x   3.4.1  文档：[https://v3.bootcss.com/](https://v3.bootcss.com/)

    [    ] 4.x

## 两个容器类

- `container` 类  ：

  - 用于固定宽度并支持响应式布局的容器，且在不同的屏幕尺寸下面宽度是不一样的

    - 大屏（>= 1200px）宽度为1170px
    - 中屏（>= 992px）宽度为970px
    - 小屏（>= 768px） 宽度为750px
    - 超小屏（100%）, 默认占父容器整个宽度，这就是为什么bootstrap说移动设备优先的原因，因为移动设备没有设置媒体查询。
  - 应用场景：适用仿站，**当做版心类名来使用**。
- `container-fluid` 类 ：

  - 占据视口宽度的 100% ，相当于通栏。不是响应式的。

> 注意，由于 `padding` 等属性的原因，这两种 容器类 `不能互相嵌套`

```HTML
<div class="container">container</div>
<div class="container-fluid">container-fluid</div>
```

## 栅格系统（响应式原理）

栅格化系统原理：

1. 根据css媒体查询把设备分成4个尺寸，在不同设备下应用不同的类名
2. 将元素的宽度进行 12 等分。

- 大屏幕（>1200）：应用类名：col-lg-* 	lg (large)，如 col-lg-3，在大屏幕中占据宽度为3等份
- 中屏幕（>992）：应用类名：col-md-*       md(middle)，
- 平板屏幕（>768）：应用类名：col-sm-*   sm （small）
- 移动设备（<768）：应用类名：col-xs-12 ,默认占据12列（即占满父容器一行）  xs  (extra small)

示例代码：

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./bootstrap-3.4.1-dist/css/bootstrap.css">
    <style>
     
        .row div:first-child {
            background-color: pink;
        }

        .row div:nth-child(2) {
            background-color: #ccc;
        }

        .row div:last-child {
            background-color: skyblue;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-8 col-sm-2">1</div>
            <div class="col-lg-6 col-md-2 col-sm-5">2</div>
            <div class="col-lg-2 col-md-2 col-sm-5">3</div>
        </div>
    </div>
</body>
</html>
```

- “行（row）”必须包含在 `.container` （固定宽度）或 `.container-fluid` （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
- 通过“行（row）”在水平方向创建一组“列（column）”。

## 列偏移

使用 `.col-md-offset-*` 类可以将列向右侧偏移。这些类实际是通过使用 `*` 选择器为当前元素增加了左侧的边距（margin）。例如，`.col-md-offset-4` 类将 `.col-md-4` 元素向右侧偏移了4个列（column）的宽度

```HTML
<div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-4 col-md-offset-1 col-lg-offset-6">
          col-lg-6 col-md-4
        </div>
      </div>
    </div>
```

下面的所有UI组件，大家重点看效果。每个类名会有不同的效果。

## 按钮


## 表格

## 表单

## 辅助类

## 字体图标

可选，用阿里矢量图标也可以

## bootstrap JS 插件

- 其依赖jquery插件。确保要先引入jquery插件
- jquery就是一个DOM操作的工具库（了解）

## 模态框

## 导航条

## 图片占位符holder.js

文档：[https://github.com/imsky/holder](https://github.com/imsky/holder)

示例：

```HTML
 <body>
    <img src="holder.js/140x140" alt="..." class="img-rounded" />
     <img src="holder.js/300x500" class="img-rounded" />
    <img src="holder.js/140x140?text=hello world" class="img-rounded" />
    <img
      src="holder.js/140x140?text=hello world&bg=#123aca"
      class="img-rounded"
    />
    <img
      src="holder.js/140x140?text=hello world&bg=#123aca&fg=#f00"
      class="img-rounded"
    />
    <script src="https://cdn.bootcdn.net/ajax/libs/holder/2.9.8/holder.js"></script>
  </body>
```
