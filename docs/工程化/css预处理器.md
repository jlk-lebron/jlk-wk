---
title: css预处理器
date: 2023-06-19 16:55:45
permalink: /pages/bd281e/
categories:
  - 工程化
tags:
  -
---
# css预处理器-less

# 为什么需要css预处理器

传统的css带来的问题

1. 重复的选择器，代码冗余，改了一个类名，其他地方都要改

```CSS
.nav .list  .item {}
.nav .abc  .item  .d a {}
.nav .list  .item .def a {}
.nav .list  .item a:hover {
  
}
```

1. 重复的样式,太多硬编码（写死的），不易维护。哪天换个主体风格，如都改为绿色，所有红色的主体都要改过来的。

```CSS

.box {
    color: red
}
.list {
    color: red
}
.nav {
    color: red
}
```

# 什么是 CSS 预处理器

**CSS 预处理器**是一个特殊的编程语言，能够编写独有的语法来扩展CSS的语法。

作用：让 CSS 写起来更容易维护。

常见的css预处理器：

- [Sass](https://sass-lang.com/)
- [LESS](https://lesscss.org/)
- [Stylus](https://stylus-lang.com/)

这里以讲解less为例。

- less中文文档：[https://less.bootcss.com/](https://less.bootcss.com/)
- 官网： [https://lesscss.org/](https://lesscss.org/)

Less 到底为 CSS 添加了什么功能？

- 变量声明
- 嵌套规则
- 混合(mixin)
- 父元素选择器&
- 导入样式
- ...

# 安装 Easy LESS 编译器扩展

浏览器默认不识别 `.less`的文件，所以需要借助编译器将less转为原生的css。

这里推荐大家在vscode中安装Easy LESS编译器。

安装好后，可以将 `.less`变成为 `.css`文件

测试：

1. 项目中创建 `index.less`文件,内容如下：

```LESS
@width: 100px;
@height: @width + 50px;

#box {
  width: @width;
  height: @height;
  background-color: red;
}
```

1. 保存后，会在当前目录自动生成与less同名的index.css的文件。
2. 在html静态文件中，导入index.css文件

## 配置less编译选项

安装上面插件后，可以进行个性化的配置，less参考配置如下：

配置文件路径：File -> Preferences -> settings ， 切换:edit in settings.json文件模式

```JavaScript
{
    "window.zoomLevel": 2,
    "files.autoSave": "afterDelay",
    "workbench.sideBar.location": "right",
    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
    "less.compile": {			// less相关配置
        "compress": true, // 压缩。即是否删除多余空白字符
        "sourceMap": false, // 是否创建相应的source map文件，此文件主要用来调试源代码
        "out": "./css/", // 输出的目录名
        "outExt": ".css", // 输出文件的后缀,默认为.css
    }
}
```

注意配置文件的**优先级**：

```Plain
vscode用户默认配置（settings.json） > 插件默认配置
```

> 注：通过后面学习的打包工具如：webpack也可以将less编译成浏览器可以识别的css。

# less常用的功能

## 变量声明

通过变量声明的方式，减少了原来在 CSS 中无法避免的硬编码重复。硬编码相当于代码写死了不够灵活。

示例： 创建 `index.less`文件,内容如下：

```LESS
@width: 10px;
@height: @width + 10px;

#box {
  width: @width;
  height: @height;
}
```

编译为：

```LESS
#box {   
  width: 10px;  
  height: 20px; 
} 
```

**变量的作用域：**

Less 中的作用域与 CSS 中的作用域非常类似。首先在本地查找变量，如果找不到，则从“父”级作用域继承。

```LESS
@var: red;	// 定义变量

#box {
  @var: green;
  #list {
    color: @var; // 引用变量
  }
}
```

## 嵌套

Less 提供了使用嵌套代替传统的层叠能力。
作用： 避免了重复输入父选择器，让复杂的 CSS 结构层次更清晰也便于维护。

假设我们有以下 CSS 代码：

```CSS
#box {   
  color: red; 
} 
#box .header {   
  font-size: 12px; 
} 
#box .footer ul li a {   
  width: 300px; 
} 

```

用 Less 语言我们可以这样书写代码：

```LESS
#box {   
  color: red;   
  .header {   
    font-size: 12px;   
  }   
  .footer {   
    width: 300px;   
      ul {
          li {
              a {
                  width: 300px; 
              }
          }
      }
  } 
}
```

## 引用父选择器

&： 引用父选择器

```LESS
a {
  color: pink;
  &:hover {
    color: skyblue;
  }
}
```

最终编译为：

```CSS
a {
  color: pink;
}
a:hover {
  color: skyblue;
}
```

## 混合（Mixins）

混合（Mixin）：可以将一组css样式混入到另一个css样式中。提高css的复用性

假设我们定义了一个类（class）如下：

```LESS
.bordered {   
  border-top: dotted 1px black;   
  border-bottom: solid 2px black; 
}
```

引入混合：

```LESS
#menu a {   
  color: #111;   
  .bordered();  // 导入mixins,	.bordered 类所包含的属性就会出现在 #menu a样式中了
} 
```

## 导入样式

如某些样式被多个地方同时使用，可以将其定义一个公共的样式文件中，然后进行导入。

这样可提高样式的复用性和可维护性。

创建 `common.less`文件,定义了一些公共样式,内容如下：

```LESS
// common.less
@bgColor: yellow;

// 实现元素水平垂直居中
.flex-c-c {
  display: flex;
  justify-content: center;
  align-items: center;
}

// 实现单行显示省略号
.line_ellipsis_1 {
  overflow: hidden;
  white-space: nowrap; 		/*先强制一行内显示文本,不换行*/
  text-overflow: ellipsis;   /*文字用省略号替代超出的部分*/
}

// 实现两行显示省略号
.line_ellipsis_2 {
  overflow: hidden;
  text-overflow: ellipsis;			/*文本溢出显示省略号*/
  display: -webkit-box;				/*弹性伸缩盒子模型显示*/
  -webkit-line-clamp: 2;   			/*限制在一个块元素显示的文本的行数*/
  -webkit-box-orient: vertical; 	/*设置或检索伸缩盒对象的子元素的排列方式*/
}

```

导入上面的文件，采用 `@import`语法进行导入。

```LESS
// index.less
@import "common.less"; // .less 扩展名也可省略
```

使用类名：

```HTML
<div class="flex-c-c">
     八戒
</div>
<div class="line_ellipsis_1">中国中国中国中国中国中国中国中国</li>

<div class="text line_ellipsis_2">
    中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国
    中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国
    中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国中国
</div>
```
