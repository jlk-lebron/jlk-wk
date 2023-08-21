---
typora-copy-images-to: assets
title: DOM操作
date: 2023-08-19 16:55:45
permalink: /pages/f25ced/
categories: 
  - ES6
tags: 
  - 
---

# DOM操作

## 回顾js组成部分

两部分：

- ECMAScript

- web Apis (DOM、BOM)

- **ECMAScript**: 规定js语言的实现标准和规范。

- **DOM** （ Document Object Model）：文档对象模型。它提供了一套操作页面元素的API。作用：便于操作页面节点。如操作标签的颜色，背景，添加元素、删除元素等等。

- **BOM**（Browser Object Model  ）：浏览器对象模型。它提供了一套操作浏览器功能的API方法，可以操作浏览器窗口。比如：控制浏览器前进、后退、刷新、获取屏幕分辨率等

    > 简单理解：API（Application Programming Interface，应用程序接口）就是程序预留给程序员提供的一种工具，以便能够轻松的实现某些功能。如 弹窗 alert就是一个API。

我们先讲解DOM相关知识。

## document文档对象

DOM每个字母的含义：

- （Document）文档：表示的就是整个HTML网页文档.

- （Object）对象：表示将网页中的每个节点（如div）都视为了一个节点对象

- （Model）模型：描述了文档中每个节点之间的关系，这样便于我们操作整个文档。

一个HTML网页就是一个文档，其中的各种节点组成了**DOM树（文档树）**。 document就是文档对象

## 节点Node

- 节点（Node）： 是构成HTML文档最基本的单元。

- 节点分类:

    - 文档节点：整个HTML文档，也可称document节点

    - 元素节点：HTML文档中的某个HTML标签，如a节点,div节点

    - 属性节点：元素的属性，如 a标签的href属性

    - 文本节点：标签中文本内容。如 h1标签中的内容

    - 注释节点：我们所写的注释

```HTML
// div元素节点、id属性节点、content文本节点
<!-- 我是注释节点 -->
<div id="box">content</div>
```

## document文档对象属性

|**属性名**|**功能**|
|-|-|
|**document.head**|获取文档中的head标签|
|**document.body**|获取文档中的body标签对象（DOM节点、标签对象、元素）|
|**document.documentElement**|获取文档中根元素 html标签|
|**document.images**|获取文档中所有的图片元素 返回是一个集合|
|**document.title**|获取网页标题title|

> 注：凡是在JS中遇到“集合”两字  它就是一个伪数组 ，它的访问方式与数组一样，可通过下标来访问。也可以for循环遍历，也可以通过length长度来获取匹配的元素个数

```JavaScript
// 获取html根(root)标签
console.log(document.documentElement)
// 获取文档中的body标签
console.log(document.body)
// 获取文档中的head标签
console.log(document.head)
// 获取网页标题title
console.log(document.title);
// 获取所有的图片
console.log(document.images);
// 修改网页标题
document.title = '看世界杯'
```

## document查找元素节点的方法

想要找到页面中的某个节点进行操作，必须先找到它，才可以进行下一步的操作。

以下方法都是在文档中**找元素节点**。

- **document.getElementById("ID名")** : 通过id的属性值来获取节点对象。没找到,则返回null

- **document.getElementsByTagName("标签")**： 通过标签名来获取节点对象

- **祖先节点.getElementsByTagName("标签名")** :  也可通过祖先节点来获取其下面的指定标签名节点。

- **document.getElementsByClassName("类名")** : 通过类名来获取节点对象

- **document.getElementsByName('name名')** ：通过标签的name属性值来获取元素。

- **document. querySelector(selector)** ：返回选择器所匹配的第一个节点对象。 

- **document. querySelectorAll(selector)** ： 返回选择器所匹配的所有元素。

    > 参数selectors:相当于css选择器

上面的方法除了`document.getElementById("ID")`和`document. querySelector(selector)`都是返回一个指定的节点对象，其他方法都是返回一个节点集合（伪数组）。 只要带`Elements`的都是返回集合。

示例代码：

1. 通过id获取节点

```HTML
<body>
    <div id="box">小猪佩奇</div>
    <script>
        // 获取id=box的元素节点
        var boxEle = document.getElementById('box')
        // 设置文字颜色红色
        boxEle.style.color = 'red'
        // 设置内容
        boxEle.innerText = '冷冷的冰雨'
    </script>
</body>
```

1. 通过标签名获取节点

```HTML
<body>
    <ul>
        <li class="item">佩奇</li>
        <li class="item">乔治</li>
        <li class="item">猪爸爸</li>
    </ul>
    <script>
        // 获取标签名为li节点对象
        var lisEle = document.getElementsByTagName('li')
        console.log(lisEle); // HTMLCollection(3)
        // 修改集合中的下标为2的节点对象内容
        lisEle[2].innerText = '猪爷爷'
    </script>
</body>
```

1. 也可以通过类名获取：

```HTML
<body>
    <ul class="list">
        <li class="item">佩奇</li>
        <li class="item">乔治</li>
        <li class="item">猪爸爸</li>
    </ul>
    <script>
        // 获取类名为item的节点
        var lisEle = document.getElementsByClassName('item')
        console.log(lisEle); // HTMLCollection(3)
        lisEle[1].innerText = '猪妈妈'
    </script>
</body>
```

1. 通过name名称获取

```HTML
<body>
    <ul class="list">
        <li class="item" name="user">佩奇</li>
        <li class="item" name="user">乔治</li>
        <li class="item">猪爸爸</li>
    </ul>
    <script>
        // 获取name为user的节点
        var lisEle = document.getElementsByName('user')
        console.log(lisEle); // NodeList(2)
        lisEle[0].innerText = '猪姥姥'
    </script>
</body>
```

1. 通过选择器获取节点

```HTML
<body>
    <ul class="list">
        <li>佩奇</li>
        <li>乔治</li>
        <li>猪爸爸</li>
    </ul>
    <script>
        // 获取类名为list下面名为li的节点,仅返回匹配的第一个
        var lisEle = document.querySelector('.list li')
        console.log(lisEle);
        lisEle.innerText = '猪爷爷'
    </script>
</body>
```

1. 通过选择器来获取节点集合

```HTML
<body>
    <ul class="list">
        <li>佩奇</li>
        <li>乔治</li>
        <li>猪爸爸</li>
    </ul>
    <script>
        // 获取类名为list下面名为li的节点
        var lisEle = document.querySelectorAll('.list li')
        console.log(lisEle); // NodeList(3)
        // 修改集合中的下标为2的节点对象内容
        lisEle[2].innerText = '猪爷爷'
    </script>
</body>
```

注意：querySelector(css选择器)和querySelectorAll(css选择器)的区别：

- querySelector：仅返回匹配到的第一个节点对象

- querySelectorAll： 返回匹配到的所有节点对象

> 如果返回的是一个元素集合(HTMLCollection)还是一个节点列表（nodeList）,要操作其中的元素节点，必须通过下标取出来在操作

## 节点的类型

节点（Node）： 是构成HTML文档最基本的单元。

- 常用节点分为四类:

    - 元素节点：HTML文档中的某个HTML标签。平时使用最多的

    - 属性节点：元素的属性

    - 文本节点：HTML标签中的文本内容

    - 注释节点：我们所写的注释

通过节点对象的`node.nodeType`属性可以获取节点类型，创建节点类型如下：

```JavaScript
node.nodeType // 1 元素节点  (element Node)
node.nodeType // 2 属性节点  (attribute Node)
node.nodeType // 3 文本节点  (text Node)
node.nodeType // 8 注释节点 （Comment Node）
node.nodeType // 9 文档节点 （document Node）
```

> 其中元素节点用的是最多的！！

示例：

```HTML
<body>
    <div id="box">
        <!-- 我是一个盒子 -->
        我是一个盒子
        <div class="a b">八戒</div>
        <h3>悟空</h3>
    </div>
    <script>
        // 获取id=box的元素节点
        var boxEle = document.getElementById('box');
        console.log(boxEle.childNodes); // 获取所有的子节点
        console.log(boxEle.children);// 获取所有的子元素节点

        
        console.log(boxEle.childNodes[3].nodeType); // 1 节点类型
        console.log(boxEle.childNodes[3].nodeName); // DIV 节点名称
        console.log(boxEle.childNodes[3].localName); // div 节点名称
        console.log(boxEle.childNodes[3].className); // 'a b' 获取类名
        
    </script>
</body>
```

- childNodes: 获取某个节点下面的所有子节点

- children: 获取某个节点下面的所有子元素节点

## 节点的内容操作

### 针对元素节点

- 双标签：如a、h1-h6、div、li、span、button、p ，

    - innerHTML:操作标签内部内容（可解析标签）

    - innerText: 操作标签内部纯文本内容（不解析标签）

    - outerHTML: 获取标签整个内容（含标签）

    - outetText：获取标签整个纯文本内容（不含标签）

- 表单元素：如：input、textarea、radio、checkbox、select 即单标签:

    - value: 用户表单中输入的值

双标签操作内容：

```JavaScript
// 设置值
node.innerHTML = '新值';
// 获取值
var content = node.innerText
```

表单标签操作内容

```JavaScript
// 设置值
node.value = '新值';
// 获取值
var content = node.value
```

### 针对文本节点

相关属性：textContent

```HTML
<body>
    <ul id="list">
      你好
      <li>刘亦菲</li>
      <li>郭富城</li>
    </ul>
    <script>
      var list = document.getElementById('list')
      list.childNodes[0].textContent = '大家好才是真的好！'
    </script>
  </body>
```

> 注意：如果渲染的数据是用户在表单中输入的，若含有恶意的js代码，这时候用innerHTML是有一定的危险性，会造成XSS攻击（js攻击）。

## JS事件处理

### 什么是事件

- 事件就是文档或浏览器窗口中发生的一些特定的交互瞬间。

- 如：鼠标单击、鼠标悬浮、键盘按下抬起等事件。

- JavaScript与HTML之间的交互就是通过事件实现的。

### 事件的绑定方式

事件的绑定常用的两种方式：

- 行内绑定

- 动态绑定(js)【用的多】

**绑定事件三要素**

- 确定事件源 （给哪个节点对象绑定）

- 事件类型： 如：onclick单击事件，onmouseover鼠标悬浮事件

- 事件的处理函数：处理事件的相关逻辑

1. **行内绑定**

说明：所谓的行内绑定事件 是将事件写在HTML标签里面

格式：`<标签名 事件名='函数名()' />`

```HTML
<button onclick="foo()">按钮</button>
<script>
    function foo(){ 
        alert('ok') 
    }
</script>
```

1. **js动态绑定**

即通过JS获取Dom对象,再给dom对象动态去绑定事件的方式。

格式：

```Plain Text
DOM对象.事件名 = 事件处理程序
```

事件的处理程序一般是一个匿名函数或是函数名。

```HTML
<button id="btn">按钮</buton>
<script>
    // 给id=btn的元素绑定单击事件
    document.getElementById('btn').onclick = function(){
        console.log('被点击了')
    }
</script>
```

### 常见事件

- 页面事件：

    - onload:页面元素结构和资源（图片、css、js）加载完毕后执行，一般给window绑定。

    - DOMContentLoaded:仅等待页面结构加载完毕后执行，不需等待完毕资源，所以速度快于onload。

    > 大部分我们只需要等待页面结构加载完毕之后就可以做一些初始化操作。所以DOMContentLoaded使用较多

    - onresize: 改变浏览器窗口大小触发

```HTML
<head>
    <script>
        // onload:会等待页面结构和资源（css,image）部加载完毕之后在执行
        window.onload = function () {
            console.log('页面加载完毕了')
            document.getElementById('btn').onclick = function () {
                alert('你好')
            }
        }
        
        // 页面元素内容（无需等待css、js、images）全部加载完毕后执行事件
        document.addEventListener('DOMContentLoaded',function(){
          console.log('DOMContentLoaded')
        }) 
        
        
        //   页面尺寸改变事件
      window.onresize = function () {
        console.log('尺寸改变了')
        console.log('浏览器可视宽:', window.innerWidth)
        console.log('浏览器可视高:', window.innerHeight)
      }
      
    	// 或有名函数
        function onresizeHandle() {
            // 获取网页可视宽高
            console.log('可视宽：', window.innerWidth)
            console.log('可视高：', window.innerHeight)
        }
        window.onresize = onresizeHandle // onresizeHandle为函数名，不能加小括号
        
    </script>
   
</head>
```

- 焦点（光标）事件：给input 输入框绑定

    - onblur：失去焦点

    - onfocus：获取焦点

    ```HTML
    <body>
        <!-- autocomplete：关闭缓存提示 -->
        <!-- placeholder：提示占位符 -->
        <input type="text" id="search" placeholder="输入关键字" autocomplete="off">
        <script>
            var searchEle = document.getElementById('search');
    
            // 获取焦点事件
            searchEle.onfocus = function(){
                console.log('我获取焦点了')
            }
            // 失去焦点事件(必须先获取焦点)
            searchEle.onblur = function(){
                console.log('我失去焦点')
            }
            
             // 自动获取焦点
          	searchEle.focus()
    
        </script>
    </body>
    ```

- 单击事件

    - onclick：单击

    - ondblclick：双击

    ```HTML
    <body>
        <div class="box"></div>
        <script>
            
            // 通过变量将节点缓存起来，避免查找多次，浪费性能
            var boxEle = document.getElementsByClassName('box')[0];
    
            // 单击事件
            boxEle.onclick = function(){
                console.log(this) // 当前调用者boxEle
                console.log('老铁你好')
            }
    
            // 双击事件
            boxEle.ondblclick = function(){
                console.log('爱心赞')
            }
        </script>
    </body>
    ```

事件的自执行：即让事件默认执行一次。如让单击事件默认执行一次。

```HTML
<body>
    <button id="btn">button</button>
    <script>
    let btnEle = document.getElementById('btn')
    btnEle.onclick = function(){
        console.log(1)
    }
    
    // 事件的自执行,后面加小括号（）即可执行
    btnEle.onclick()
</script>
</body>

```

- 鼠标事件：

    - onmouseover:鼠标悬浮时

    - onmouseout:鼠标离开时

    - onmousedown:鼠标按下时

    - onmousemove:鼠标移动时

    - onmouseup:鼠标抬起时

> onmousedown、onmouseup、onmousemove一般在鼠标拖拽的使用较多

```HTML
<body>
    <div id="box" class="box"></div>
    <script>
      //1. 获取元素
      var boxEle = document.getElementById('box')
      //2. 绑定事件
      boxEle.onmouseover = function () {
        console.log('鼠标悬浮')
      }
      boxEle.onmouseout = function () {
        console.log('鼠标离开')
      }
      boxEle.onmousemove = function () {
        console.log('鼠标移动')
      }
      boxEle.onmousedown = function () {
        console.log('鼠标按下')
      }
      boxEle.onmouseup = function () {
        console.log('鼠标抬起')
      }
    </script>
  </body>
```

- 切换事件（给input或select绑定）：

    - onchange：给select下拉框绑定。切换选项时触发。 也可以给文本域input （type=file、text）绑定，一般用于上传文件

- 内容改变事件（给input绑定）

    - oninput：监听input(type=text)框内容改变时触发。

- select下拉框切换事件

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    省：
    <select name="" id="province">
      <option value="">请选择</option>
      <option value="001">广东省</option>
      <option value="002" selected>江西省</option>
      <option value="003">湖南省</option>
      <option value="004" id="tws">台湾省</option>
    </select>
    <button id="btn">台湾默认选中</button>
    <script>
      var selectEle = document.getElementById('province')
      var btn = document.getElementById('btn')
      // 绑定切换事件 onchange
      selectEle.onchange = function () {
        // 获取当前切换的选项的value的值
        console.log(this.value)
      }

      btn.onclick = function () {
        // 方式1：让指定下拉框选项选中
        // selectEle.selectedIndex = 4
        // 方式2：直接获取指定option对象，设置selected为true
        document.getElementById('tws').selected = true
      }
    </script>
  </body>
</html>

```

- input内容改变事件：

```HTML

  <body>
    用户名：<input type="text" id="keyword" autocomplete="off" />
    <script>
      var keyEle = document.getElementById('keyword')

      //   输入框内容只要改变就会触发
      keyEle.oninput = function () {
        // 获取用户输入的值
        console.log('oninput', this.value)
      }
      //   只有输入框失去焦点且而内容改变时才触发
      keyEle.onchange = function () {
        // 获取用户输入的值
        console.log('onchange', this.value)
      }
    </script>
  </body>

```

- 滚动事件

    - onscroll: 滚动条滚动时触发

        ```JavaScript
        //  给页面绑定滚动事件
        window.onscroll = function () {
        	console.log('页面滚动了')
        }
        
        //  给id=box绑定滚动事件
        document.getElementById('box').onscroll = function () {
        	console.log('元素滚动了')
        }
        ```

- 键盘事件（给input绑定）：

    - onkeydown：键盘按下触发（并不需要抬起，若按着不放则一直触发）

    - onkeypress：键盘按下并抬起触发一些功能键键如：shift,ctrl，alt等无法得到识别。

    - onkeyup：（开发使用最多）任何键盘键按下并抬起时触发（任何键盘键都有效）

- 表单事件 (给form表单绑定)

    - onsubmit：表单提交时

    - reset：表单重置时(清除用户输入的信息)

示例：

```HTML
<body>
    <!-- action="aaa.php" 提交给服务器的url地址 -->
    <form action="aaa.php" onsubmit="return submitCallback()" id="loginForm">
        用户名: <input type="text" name="username" id="username"> <br />
        密码： <input type="password" name="password" id="password"> <br />
        <input type="submit" value="登录">
        <input type="reset" value="重置">
    </form>

    <script>
        // 点击form表单中的type=submit的按钮，会默认向action地址中跳转。这是默认行为
        // 跳转之前，起码要校验用户的信息是否合法才可以跳转，不合法则不跳转

        function submitCallback(){
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            if(username.trim() === '' || password.trim() === ''){
                alert('用户名或密码不能为空')
                return false; // 终止执行
            }
            // 重置表单
            // document.getElementById('loginForm').reset(); // 没有on
            // return true; 会跳转  
            // return false; 不会跳转  
            return true;
        }
    </script>
</body>
```

### 循环绑定单击事件索引越界的问题

```HTML
<body>
    <div>
        <span>黎海丹</span>
        <span>兰梅</span>
        <span>张先锐</span>
    </div>
    <script>
        var spans = document.getElementsByTagName('span')
        // var是全局变量
        for (var i = 0; i < spans.length; i++) {
           ;(function (i) {
                // 通过IIFE机制，每个函数都会产生一个局部变量i
                spans[i].onclick = function () {
                    // 当前函数作用域找不到i,则找到IIFE中的变量i
                    console.log(i); // 0 1 2
                    console.log(this.innerText)
                }
            })(i)

        }

    </script>
</body>

```

## 节点的样式操作

### 行内样式

仅操作元素的行内style样式，可通过dom对象的style属性进行操作：

```Plain Text
<style>
	#box {
        font-size:30px;
	}
</style>
// 行内样式
<div style='color:red' id='box'>123</div>
```

示例：

```Plain Text
element.style.fontSize = '50px'; // 设置字体大小为50px
element.style.backgroundColor = 'green'; // 设置背景色为绿色，值设为16进制如#00ff00也行
```

```Plain Text
// 让元素显示或隐藏
element.style.display = 'none' ; // 隐藏
element.style.display = ''; // 显示 。 赋值为空字符，相当于删除行内样式
```

注意：通过js控制样式，把原来的css样式的写法改成小驼峰法即可.

```Plain Text
如： 
font-size => fontSize ,   
border-width => borderWidth， 
background-color =>  backgroundColor
```

- 示例

    ```HTML
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            #box {
                width: 200px;
                height: 200px;
                background-color: gray;
                font-size: 25px;
            }
        </style>
    </head>
    
    <body>
        <div id="box" style="font-size:20px">
            好好学习，天天向上
        </div>
        <button id="btn">变吧</button>
        <script>
            // 单击按钮，把id=box的元素节点字体大小改为30px,背景色改为red
            document.getElementById('btn').onclick = function () {
                var boxEle = document.getElementById('box')
                console.log(boxEle.style.fontSize) // '20px'
                boxEle.style.fontSize = '30px'
                boxEle.style.backgroundColor = 'red'
            }
        </script>
    </body>
    
    </html>
    ```

- 元素显示或隐藏

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            width: 200px;
            height: 200px;
            background-color: #aed;
        }
    </style>
</head>

<body>
    <div id="box"></div>
    <button id="show">显示</button>
    <button id="hide">隐藏</button>
    <script>
        var boxEle = document.getElementById('box');
        // 隐藏box
        document.getElementById('hide').onclick = function () {
            boxEle.style.display = 'none'
        }
        // 显示box
        document.getElementById('show').onclick = function () {
            // 给行内样式某个属性赋值为'',相当于删除
            boxEle.style.display = ''
        }
    </script>
</body>

</html>

```

- 在显示和隐藏间切换

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            width: 200px;
            height: 200px;
            background-color: #aed;
        }
    </style>
</head>

<body>
    <div id="box"></div>
    <button id="toggle">显示/隐藏</button>
    <script>
        // 需求：当前按钮让box在显示和隐藏两个状态间进行切换
        var isShow = true; // 默认是显示
        var boxEle = document.getElementById('box')
        document.getElementById('toggle').onclick = function () {
            if (isShow) {
                // 显示 =》 隐藏
                boxEle.style.display = 'none'
                // isShow = false
            } else {
                // 隐藏 =》 显示
                boxEle.style.display = ''
                // isShow = true
            }
            // 取反状态
            isShow = !isShow
        }

    </script>
</body>

</html>
```

- 隔行换色

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        li {
            list-style-type: none;
        }
    </style>
</head>

<body>
    <ul>
        <li>黄骞</li>
        <li>李雪敏</li>
        <li>田江博</li>
        <li>廖帅</li>
        <li>汪老师</li>
        <li>韩冰冰</li>
        <li>张倩倩</li>
    </ul>
    <script>
        // 获取所有的li，对下标进行奇偶数判断
        var lis = document.getElementsByTagName('li')
        for (var i = 0; i < lis.length; i++) {
            if (i % 2 === 0) {
                // 偶数
                lis[i].style.backgroundColor = '#f9f9f9'
            }
        }
    </script>
</body>

</html>
```

### getComputedStyle获取渲染后样式

DOM对象的style属性仅能操作和获取行内样式。如果要获取样式表中的css是做不到的。

`window.getComputedStyle()` 作用： 获取元素在页面中渲染后的最终css样式。

示例：

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./index.css">
    <!-- 
        index.css:
        .box {
            font-weight: 700;
        } 
    -->
    <style>
        .box {
            width: 200px;
            height: 200px;
            color: red;
            font-size: 20px;
            border: 1px solid green;
        }
    </style>
</head>
<body>
    <div class="box" id="box" style="font-size:30px;">
        我是一个盒子
    </div>
    <script>
        var boxEle = document.getElementById('box')
        // 获取元素css样式
        var cssStyle = window.getComputedStyle(boxEle,null)
       
        console.log(boxEle.style.height); // '' 仅能获取对象的style属性内的值
        console.log(cssStyle.height); // 200px

        console.log(cssStyle.fontSize); // 30px
        console.log(cssStyle['font-size']); // 30px

        console.log(cssStyle.getPropertyValue('height')); // 200px
        console.log(cssStyle.getPropertyValue('font-weight')); // 700
        // cssStyle.height = '500px' // 失败，cssStyle是只读属性
    </script>
</body>
</html>
```

课堂案例：

- 实现表格隔行换色

- 鼠标悬浮离开实现表格隔行换色

- 网页换肤，实现每隔2s自动换色（需要封装随机函数）

```JavaScript

// 需求：封装一个生成指定范围的随机数 3- 7
function randomInt(min, max) {
    return min + parseInt(Math.random() * (max - min + 1))
}

// 封装一个函数，随机返回16进制颜色：范围是0-9，a-f
function randomHexColor() {
    var str = '0123456789abcdef'
    var color = '#'
    // 随机去6个
    for (var i = 1; i <= 6; i++) {
        // 随机取出字符串中的任意一个下标0-15
        // 通过下标取值，最后拼接在color字符串中
        var index = randomInt(0, str.length - 1)
        color += str.charAt(index)
    }
    // 返回color
    return color
}
```

### 两个时间器函数

两个时间器函数,也有回调函数。

```JavaScript
var timer1 = setTimeout(callback,time): 延时器  （执行一次）
var timer2 = setInterval(callback,time): 定时器  （执行多次）
// 上面函数返回的timer是一个随机非0的数值 

clearTimeout(timer1); // 取消延时器
clearInterval(timer2); // 取消定时器

```

> 时间是毫秒为单位。 1s = 1000ms

随机换色，停止换色

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>

<body>
    <div id="box"></div>
    <button id="btn">开始</button>
    <button id="stop">停止</button>
    <script>
        var timer; // undefined
        // 开始随机换色
        document.getElementById('btn').onclick = function () {
          
            // 防止启动多个定时器，保证一个定时器在运行
            if (timer) {
                console.log('已经在跑了，不要在催了')
                return; // 终止函数
            }
            // 每隔2s自动更换背景色,setInterval返回的值是一个随机返回非0数值
            timer = setInterval(function () {
                document.getElementById('box').style.backgroundColor = randomHexColor()
            }, 50)
            console.log(timer);

        }

        // 停止
        document.getElementById('stop').onclick = function () {
            // 清除定时器（清除这个动作）
            clearInterval(timer)
            // timer要置为原来的值
            timer = undefined
        }


    </script>
</body>

</html>
```

## 节点的类名操作

语法：

```JavaScript
// 直接覆盖原class类名
 dom对象.className = '类名1 类名2'; 
 
// 添加一个或多个类，多个用逗号隔开
 dom对象.classList.add('类名1',...); 
 
// 移除一个或多个类，多个用逗号隔开
 dom对象.classList.remove('类名');  
 
// 把类a替换成类b。 有兼容性问题。不建议使用，可以先删除后添加，
dom对象.classList.replace('a','b');  
 
// 切换类。 有则移除，无则添加
 dom对象.classList.toggle('类名');   
 
// 判断是否有指定的类，有返回true,否则返回false
 dom对象.classList.contains('类名');
```

示例：

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            color:red;
            width: 200px;
            height: 200px;
            border: 1px solid green;
        }

        .active {
            font-style: italic;
        }

        #box.selected {
            color: pink;
            font-size: 50px;
            width: 400px;
        }

        .b {
            background-color: rgb(105, 126, 128);
        }

        .lmn {
            border-radius: 20px;
        }
    </style>
</head>
<body>
    <div id="box" class="active abc lmn">
        你真棒
    </div>
    <button id="btn">button</button>

    <script>
        var boxEle = document.getElementById('box');
        document.getElementById('btn').onclick = function(){

            // 在原有基础之上添加类名
            boxEle.classList.add('selected','b')

            // 直接覆盖原有类名
            // boxEle.className = 'selected b'

            console.log( boxEle.classList.contains('active') ); // true
            console.log( boxEle.classList.contains('d') ); // false

            // 类名之间进行切换，有则移除，无则添加
            boxEle.classList.toggle('lmn')
            
            // boxEle.classList.remove('abc'); // 删除类名abc
            // boxEle.classList.add('xyz'); // 添加类名xyz

            // 上面两行可以简化
            boxEle.classList.replace('abc','xyz')  
        }
       
    </script>
</body>
</html>
```

- 鼠标悬浮离开动态切换类名

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        li {
            list-style-type: none;
        }

        .active {
            background-color: #f9f9f9;
            font-size: 30px;
            color: red;
        }
    </style>
</head>

<body>
    <ul>
        <li>黄骞</li>
        <li>李雪敏</li>
        <li>田江博</li>
        <li>廖帅</li>
        <li>汪老师</li>
        <li>韩冰冰</li>
        <li>张倩倩</li>
    </ul>
    <script>
        // 1. 获取所有的li
        var lis = document.getElementsByTagName('li')
        // 2. 循环集合，给他们绑定鼠标悬浮和离开
        for (var i = 0; i < lis.length; i++) {
            // 悬浮
            lis[i].onmouseover = function () {
                // 把当前元素背景色改为#f9f9f9,字体大小改为30px
                // console.log(this);
                // this.style.backgroundColor = '#f9f9f9'
                // this.style.fontSize = '30px'
                // this.style.color = 'red'
                this.classList.add('active')
            }
            // 离开
            lis[i].onmouseout = function () {
                // 把上面悬浮的效果移除即可(复原)
                // this.style.backgroundColor = ''
                // this.style.fontSize = ''
                // this.style.color = ''
                this.classList.remove('active')
            }
        }

        // 如果以后要控制的样式比较多，可以将样式定义在类名中，后续操作元素的类名即可。这样更加方便。

    </script>
</body>

</html>
```

课堂案例：

- tab选修卡切换

**写DOM操作案例的基本思路：**

1. 先观察网页整体布局的结构，便于写网页结构（html）,在写css样式美化

2. 观察页面的变化效果，把变化效果css样式单独定义在一个class类名中,不建议用style属性一个个改

3. 绑定事件用js去动态的添加和移除类名，或修改结构和属性，从而改变页面效果

## 节点的属性操作

属性分类：

- 自定义属性：用户自己定义的属性。

- 内置属性：标签本身就具有属性。 `a => href`  、 `img=>src`, `id`、`class`、`title`等。

如下示例：

```Plain Text
<div id="box" title="悬浮我身上会看到我" class="a" a="1" b="2"></div>
内置属性：id、title、class
自定义属性：a、b
```

操作内置和自定义属性：

- 设置属性：dom对象.setAttribute(k,v);

- 获取属性：dom对象.getAttribute(k);

- 删除属性：dom对象.removeAttribute(k)
参数说明：

    - k:属性名（可以是自定义属性和内置属性）

    - v:属性值

`dom对象.属性名：`仅能操作内置属性：如下：

示例代码：

```HTML
    <div id="box" class="box" title="我是div" a='11'  b="200" >属性操作</div>
    <button id="btn">属性操作</button>
    
    <script>
    let btnEle = document.getElementById("btn")
    let boxEle = document.getElementById("box")

    btnEle.onclick = function(){
        // setAttribute 可以设置内置和自定义属性
        // 添加属性
        boxEle.setAttribute('c',300)
        // 添加属性
        boxEle.setAttribute('title','我是一个胖子')

        // 节点对象.属性名 = 属性值； 此方式只能操作内置属性
        boxEle.d = 400; // 失效，页面节点中不会有d属性

        // 获取属性
        console.log( boxEle.getAttribute('a') ); // '11'
        console.log( boxEle.a ); // undefined 仅能获取内置属性

        // 删除b属性
        boxEle.removeAttribute('b')
    }
</script>
```

**控制按钮是否可用：**

```HTML
<body>
    <!-- disabled 不可用 -->
    <button id="login">登录</button>
    <script>
        var btn = document.getElementById('login')
        //让按钮可用
        btn.disabled = false
        
        //让按钮不可用
        // btn.disabled = true
    </script>
</body>
```

控制复选框/单选框是否选中：

```Plain Text
input.checked = true; // true选中 ， false不选中
```

课堂案例：

- 反选、全选、全不选

- 优酷网站 密码框隐藏显示

## 元素的dataset属性

利用dataset属性可以访问元素以`data-***`打头的属性:

```HTML
<div id="box" data-name="kobe" data-age="18">篮球明星</div>
<script>
    var box = document.getElementById('box')
    console.log(box.dataset.name) // kobe
    console.log(box.dataset.age) // 18
</script>
```

## 节点的创建和追加操作

创建节点和追加节点操作:

```Plain Text
var node =  document.createElement("li"); // 创建节点对象
父节点.appendChild(子节点); // 将子节点到追加（移动）父节点内部后面
```

示例：

```HTML
<body>
    <ul id="starList">
        <li>高圆圆</li>
        <li>范冰冰</li>
        <li>韩冰冰</li>
        <li>李冰冰</li>
        <!-- <li>刘亦菲</li> -->

    </ul>
    <button id="btn">创建节点方式1</button>
    <button id="btn2">创建节点方式2</button>
    <script>
        // 1. 获取btn元素
        var btn = document.getElementById('btn')
        var starList = document.getElementById('starList')
        // 2. 绑定单击事件
        btn.onclick = function () {
            // 创建li元素节点对象
            var li = document.createElement('li')
            // 设置节点内容
            li.innerText = '刘亦菲'
            // 把li追加到父容器内部后面
            starList.appendChild(li)
        }

        // 创建节点方式2：字符串拼接方式
        // 思路：
        // 1。获取父节点内容在拼接上新节点字符串
        // 2. 把拼接好的内容在给父容器设置回去
        btn2.onclick = function () {
            var liStr = '<li>杨幂</li>'
            // 获取原内容
            var oldStrContent = starList.innerHTML
            // 和新字符串拼接
            var newStrContent = oldStrContent + liStr
            // 给容器设置新内容
            starList.innerHTML = newStrContent
        }
    </script>
</body>
```

注意：创建节点用createElement方式，还是字符串拼接方式？

- 主要看创建的节点的数量是否较多！ 多的话建议用字符串拼接方式。性能更好

- 创建节点少的话两者都行

插入到某个节点之前：

```Plain Text
父节点.insertBefore(新节点，null); // 把新节点插入到父节点内部最后面 等价于 appendChild
父节点.insertBefore(新节点，旧节点); // 把新节点插入到旧节点的前面
```

示例：

```HTML
<body>
    <ul id="list">
        <li>张学友</li>
        <li id="two">郭富城</li>
        <li>黎明</li>
    </ul>
    <button id="btn">创建节点并追加</button>

    <script>
        document.getElementById('btn').onclick = function(){
            var liEle = document.createElement('li');
            liEle.innerText = '刘德华';
            var ulEle = document.getElementById('list')
            var twoEle = document.getElementById('two')
            // ulEle.insertBefore(liEle,null); // 插入到父节点内部后面
            // ulEle.insertBefore(liEle,twoEle); // 插入到twoEle节点前面
        }
    </script>
</body>
```

## 节点删除和克隆（复制）

- 删除节点：父节点.removeChild(子节点)

- 浅克隆：node.cloneNode() ：只克隆node标签本身(即外壳)，返回克隆后新节点对象

- 深克隆：node.cloneNode(true) ：克隆node标签及内部所有节点（深层），返回克隆后新节点对象

删除示例：

```HTML
<body>
    <ul id="starList">
        <li>高圆圆</li>
        <li>范冰冰</li>
        <li id="bajie">八戒</li>
        <li>韩冰冰</li>
        <li>李冰冰</li>
    </ul>
    <button id="btn">删除节点</button>
    <script>
        var btn = document.getElementById('btn')
        var starList = document.getElementById('starList')
        btn.onclick = function () {
            // 父节点.removeChild(子节点)
            var bajieEle = document.getElementById('bajie')
            starList.removeChild(bajieEle)
        }
    </script>
</body>
```

克隆操作：

```HTML
<body>
    <ul id="starList">
        <li>高圆圆</li>
        <li>范冰冰</li>
        <li>韩冰冰</li>
        <li>李冰冰</li>
    </ul>
    <button id="btn">克隆</button>
    <script>
        var btn = document.getElementById('btn')
        var starList = document.getElementById('starList')
        btn.onclick = function () {
            // 克隆ul列表
            var newUlNode1 = starList.cloneNode(); // 浅克隆
            console.log(newUlNode1);

            var newUlNode2 = starList.cloneNode(true); // 浅克隆
            console.log(newUlNode2);
        }
    </script>
</body>
```

课堂案例

- 克隆美女图片

## 节点查找的相关属性

- 父节点.firstElementChild; // 获取父节点的第一个子元素节点

- 父节点.lastElementChild; // 获取父节点的最后一个子元素节点

- 父节点.children; // 获取父节点下的所有的子元素节点

- 节点.nextElementSibling ; //找当前节点对象的下一个兄弟元素节点

- 节点.previousElementSibling ; //找当前节点对象的上一个兄弟元素节点

- 子节点.parentElement/parentNode; // 获取子节点的父元素节点

- 获取父节点：

    - node.parentNode: 获取的是父节点

    - node.parentElement：获取的是父元素节点

```HTML
<body>
    <ul id="list"></ul>
    <script>
        var ulEle = document.getElementById('list')

        console.log(ulEle.parentElement.parentElement.parentElement); // null,注意 html 最顶层的父元素节点
        console.log(ulEle.parentNode.parentNode.parentNode); // document 最顶层父节点
    </script>
</body>
```

# 案例：随机点名器

# 创建option和Img元素

## 创建option节点

除了使用`document.createElement()`的方法创建option标签，还可以使用以下特有的方式来创建。

```Plain Text
var op = new Option('体育',5);
// 相当于创建标签: <option value='5'>体育</option>
```

创建好的option节点后，除了可以使用`appendChild`方法追加,还可以使用以下方法来实现。

```Plain Text
var select = docuement.getElementById('select');
var op = new Option('体育',5);
select.options.add(op);
```

示例：

```HTML
<body>
    <select id="province">
        <option value="湖北省">湖北省</option>
        <option value="四川省">四川省</option>
        <option value="山东省">山东省</option>
    </select>
    <button id="add">添加台湾省</button>
    <script>
        var select = document.getElementById('province');
        document.getElementById('add').onclick = function(){
            // 方式一：
            // var op = new Option('台湾省',5);
            // select.options.add(op)

            // 方式二：
            // var op = document.createElement('option')
            // op.value = 5;
            // op.innerText = '台湾省';
            // select.appendChild(op)
        }
    
    </script>
</body>
```

## Image()创建图像

`Image()`函数将会创建一个新`的HTMLImageElement`实例。

它的功能等价于 `document.createElement('img')`

示例:

```JavaScript
var imgNode = new Image(100, 200); // 宽100，高200，这两个参数是可选的
imgNode.src = 'picture.jpg';

// 图片加载成功的回调。
imgNode.onload = function(){
   console.log('加载成功')
}

// 图片加载失败的回调。图片加载失败或图片无效时触发
myImage.onerror = function(){
    console.log('加载失败')
}
```

上面代码的执行，相当在页面中定义了以下的HTML结构:

```HTML
<img width="100" height="200" src="picture.jpg">
```

- 友好提升：图片加载失败,可设置404图片

```JavaScript

 imgNode.onerror = function () {
      console.log('图片加载失败')
      this.src = './404.jpg'
 }
```

# 轮播图案例

