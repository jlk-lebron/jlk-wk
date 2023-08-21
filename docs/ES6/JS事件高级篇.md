---
title: JS事件高级篇
date: 2023-08-19 16:55:45
permalink: /pages/a08641/
categories:
  - ES6
tags:
  - 
---
·

# 事件对象event

## 什么是事件对象？

当一个事件被触发时，会创建一个对象(Event Object), 这个对象里面包含了与该事件相关的属性或方法。

作用：

- 获取在页面中点击的xy坐标，

- 按了什么键，如回车键，还是方向键等

- ...

事件对象会作为第一个参数传递给事件的处理函数。

```JavaScript
btnEle.onclick = function(event){
    console.log(event)
}
```

由于不同浏览器事件对象会有一点差异性，下面写法可兼容所有浏览器。

```JavaScript
btn.onclick=function(ev){
    // event(形参名):兼容所有的主流浏览器及（IE 9-10）
    // window.event:兼容IE(8以下)
    ev = ev || window.event   
 }
```

注意：如果是行内绑定事件，必须通过显式传递event才可获取事件对象，且名字必须是`event`

```HTML

    <div id="box" class="box" onclick="foo('hello',event)"></div>
    <script>
      function foo(msg,e) {
        console.log(msg)
        console.log(e)
      }
    </script>
```

## 事件对象属性和方法

事件对象常用属性:

- type：用于获取事件类型如单击事件为click,失去焦点为blur

- KeyCode或which： 获取键盘上面的键码值

- clientX: 获取在客户端浏览器中x坐标

- clientY: 获取在客户端浏览器中y坐标

- pageX【了解】: 获取在页面中x坐标, 考虑网页滚动的情况

- pageY【了解】: 获取在页面中y坐标，考虑网页滚动的情况

- target：事件发生的目标（主体）元素。即事件发生在哪个元素身上

- stopPropagation()阻止事件冒泡。低版本IE:使用cancelBubble = true阻止事件冒泡

- preventDefault()阻止事件默认行为。低版本IE:使用returnValue阻止事件默认行为

## 案例-实现回车键登录

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        .box {
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="box" id="box"></div>
    <input type="text" id="user" autocomplete="off">
    <script>
        document.getElementById('box').onclick = function(event){
           console.log('回车键登录')
        }

        // 绑定键盘事件 keyup:按下并抬起触发
        document.getElementById('user').onkeyup = function(event){
            // 获取键盘的键码值,回车键enter为13
            if(event.keyCode === 13){
                console.log('回车键登录')
            }
        }

    </script>
</body>
</html>
```

常见的键码:

- Enter: 13

- Left: 37

- Up:38

- Right:39

- Down:40

## 案例-跟随鼠标飞翔的小猪

实现思路：

- 给移动区域绑定onmousemove事件。

- 移动时候可以获取鼠标的xy坐标，xy设置给图片的left和top偏移量

```HTML
<head>
    <style>
        .pig {
            position: absolute;
        }
    </style>
</head>

<body>
    <img class="pig" src="./images/pig.jpg" alt="">
    <script>
        var img = document.getElementsByClassName('pig')[0]
        // 1. 给网页文档绑定移动事件
        document.onmousemove = function (event) {
            event = event || window.event
            // 获取基于浏览器客户端x和y坐标
            var X = event.clientX
            var Y = event.clientY
            console.log('move', X, Y);
            // 获取图片的宽高
            var imgCssStyle = window.getComputedStyle(img, null)
            var imgWidth = parseInt(imgCssStyle.width) / 2
            var imgHeight = parseInt(imgCssStyle.height) / 2
            // 2. 把坐标设置给图片left和top即可
            img.style.left = X - imgWidth + 'px'
            img.style.top = Y - imgHeight + 'px'

        }
    </script>
</body>

```

# 事件模型

在JavaScript中事件模型总共可以分为三类：

- DOM 0级模型（原始事件模型）

- DOM 2级模型（W3C标准模型）

- IE事件模型（了解）

不同的事件模型区别

- 绑定事件和解绑的方式不一样，

- 事件流也不一样。

## DOM0事件模型

绑定事件有以下两种方式

- HTML代码中直接绑定(行内绑定方式也叫做静态绑定):

```Plain Text
<input type="button" onclick="f1()" value="按钮">
```

- 通过JS代码绑定（动态绑定）

```HTML
<button id="btn1">点击</button>
    <button id="btn2">取消点击</button>
    <script>
      var btn1 = document.getElementById('btn1')
      var btn2 = document.getElementById('btn2')
      // DOM0绑定事件的方式
      btn1.onclick = function () {
        console.log('我叫佩奇')
      }

      // 单击btn2解绑（移除）btn1的单击事件
      btn2.onclick = function () {
        btn1.onclick = null
      }
    </script>
```

DOM0级的好处：所有浏览器都支持，即兼容性最好

示例：

```HTML
<body>
    <button id="btn1">好痛</button>
    <button id="btn2">不痛</button>
    <script>
        var btn1 = document.getElementById('btn1')
        var btn2 = document.getElementById('btn2')

        // DOM0: 
        // 绑定事件：元素节点.事件名 = 事件处理函数
        // 解绑事件：元素节点.事件名 = null
        btn1.onclick = function () {
            alert('痛痛痛')
        }

        btn2.onclick = function () {
            // 解绑btn1的单击事件
            btn1.onclick = null
        }
    </script>
</body>
```

## DOM2事件模型

介绍

- 属于W3C标准模型，现代标准浏览器(除低版本IE（5，6,7,8）)都支持该模型。

DOM2事件模型绑定事件的方式:

事件绑定监听函数的方式如下:

```JavaScript
dom对象.addEventListener(eventType, handler, useCapture)
```

事件移除监听函数的方式如下:

```JavaScript
dom对象.removeEventListener(eventType, handler, useCapture)
```

> 注意：如果事件处理函数handler是有名函数，则可以通过名字来移除，匿名函数无法移除

参数说明：

- eventType 指定事件类型(不要加前缀on)

- handler事件的处理函数

- useCapture可选。布尔值，指定事件是否在捕获或冒泡阶段执行。

    - true 事件监听函数在捕获阶段执行

    - false 默认，事件监听函数在冒泡阶段执行

代码如下：

```HTML
<body>
    <button id="btn1">好痛</button>
    <button id="btn2">不痛</button>
    <script>
        var btn1 = document.getElementById('btn1')
        var btn2 = document.getElementById('btn2')

        // DOM2: 
        // 绑定事件：元素节点.addEventListener(事件名,事件的处理函数)
        // 解绑事件：元素节点.removeEventListener(事件名,事件的处理函数)
        // 解绑事件必须要通过有名函数才可以解绑！！

        function fn() {
            alert('痛痛痛');
        }
        btn1.addEventListener('click', fn)


        btn2.addEventListener('click', function () {
            // 解绑btn1单击事件
            btn1.removeEventListener('click', fn)
        })

    </script>
</body>
```

## IE事件模型（了解）

绑定事件和移除事件（仅适用于IE浏览器）:

绑定事件方式如:

```Plain Text
dom对象.attachEvent(eventType, handler);
```

解绑事件方式如下

```Plain Text
dom对象.detachEvent(eventType, handler);
```

参数说明:

​	eventType指定事件类型(注意加前缀on)

​	handler是事件处理函数

示例：

```HTML
<body>
    <button id="btn1">好痛</button>
    <button id="btn2">不痛</button>
    <script>
        var btn1 = document.getElementById('btn1')
        var btn2 = document.getElementById('btn2')

        function fn() {
            console.log('痛痛痛')
        }

        // IE事件模型(了解，IE11不行，以下都可以)
        btn1.attachEvent('onclick', fn)

        btn2.attachEvent('onclick', function () {
            // 解绑btn1单击事件
            btn1.detachEvent('onclick', fn)
        })

    </script>
</body>          

```

# 获取元素距离视口的距离

内置api方法：Element.getBoundingClientRect()

作用： 返回元素的大小和相对于浏览器视口的位置。

视口：可见看见的区域

![1665983154952](import/7022b298-7e3e-4080-944c-1e455c54b4a7/assets/1665983154952.png)

示例：

```JavaScript
window.scroll = function(){
	let boxEle = document.getElementById('box')
 	let result = boxEle.getBoundingClientRect()
 	console.log(result.top); // 距离浏览器视口的高度距离
    console.log(result.left); // 距离浏览器视口的左边距离
}
```

# 案例-实现拖拽功能

原生拖拽需要结合鼠标的三个事件：

- onmousedown 鼠标按下

- onmousemove 鼠标移动

- onmouseup 鼠标抬起

基本思路：

- 1.盒子鼠标按下onmousedown的时候，要先得到鼠标在盒子内的坐标

- 2.给document绑定鼠标移动事件，移动的时候，要获取鼠标在浏览器中的xy坐标，最后减去上面在盒子内的坐标，把减去的结果的值设置为盒子的left和top的值即可。

- 3.给元素绑定鼠标抬起onmouseup事件，移除文档docuement的onmousemove事件

示例：

```HTML

  <head>
    <style>
      .box {
        position: absolute;
        width: 200px;
        height: 200px;
        background-color: rgb(39, 106, 103);
        cursor: move;
      }
    </style>
  </head>
  <body>
    <div id="box" class="box"></div>
    <script>
      var box = document.getElementById('box')
      // 1. 给box绑定鼠标按下事件
      box.addEventListener('mousedown', function (event) {
        // 获取在盒子内的点击的位置
        var downX = event.clientX - box.getBoundingClientRect().left
        var downY = event.clientY - box.getBoundingClientRect().top
        console.log(downX, downY)
        // 2. 按下的时候，给文档docuement绑定移动事件,因为盒子是在整个文档中移动
        function move(event) {
          // 获取当前距离浏览器的xy坐标
          var moveX = event.clientX
          var moveY = event.clientY
          //  把坐标设置盒子的left和top,再减去鼠标在盒子内按下的距离
          box.style.left = moveX - downX + 'px'
          box.style.top = moveY - downY + 'px'
        }
        document.addEventListener('mousemove', move)
        // 3. 给box绑定鼠标抬起事件
        box.addEventListener('mouseup', function () {
          // 要解绑文档的移动事件
          document.removeEventListener('mousemove', move)
        })
      })
    </script>
  </body>
```

# 事件流

1. 什么是事件流？

事件流：即当一个事件发生时，事件会在特点的节点之间按照特定的顺序传播。该事件的传播过程就叫做事件流

1. 事件流的三个阶段

- 事件捕获阶段：由顶层元素先触发，然后逐级向下传播，直到目标元素。

- 事件目标阶段：触发当前自身的事件。

- 事件冒泡阶段：由当前目标元素逐级向上传播。

![1666021606315](import/7022b298-7e3e-4080-944c-1e455c54b4a7/assets/1666021606315.png)

以上面的图解为例，如果给上图的四个元素都绑定单击事件，由图可以很清晰地看出事件的触发顺序为：

事件流顺序：捕获（从上往下）=》目标（自身）=》冒泡（从下往上）

- DOM0事件模型：目标阶段和冒泡阶段

- DOM2事件模型：捕获阶段、目标阶段和冒泡阶段

- IE事件模型：目标阶段和冒泡阶段

注意：并不是所有的事件都有冒泡：常见的有click,mouseover会有冒泡

```HTML
	<body>
        <div class="yeye" id="yeye">
            <div class="parent" id="parent">
                <div class="son" id="son"></div>
            </div>
        </div>
    </body>
    <script>
        let yeyeEle = document.getElementById('yeye')
        let parentEle = document.getElementById('parent')
        let sonEle = document.getElementById('son')
    
        yeyeEle.addEventListener('click',function(){
            alert('yeye')
        },false); // 默认false在冒泡阶段执行,true只在捕获阶段执行
        
        /* yeyeEle.addEventListener('click',function(){
            alert('yeye')
        },true); */ // 默认false在冒泡阶段执行,true只在捕获阶段执行
    
        parentEle.addEventListener('click',function(){
            alert('parent')
        },false) // false在冒泡阶段
    
        sonEle.addEventListener('click',function(){
            alert('son') 
        },false) // false在冒泡阶段
    </script>
    </html>

```

# 事件冒泡

**介绍:**

事件冒泡：事件由目标元素开始接收，然后逐级向上传播。这种机制称之为事件冒泡。

**冒泡原理:**

根据用户点击的xy坐标来判断是否在祖先父容器的xy坐标区域内，如果在，相应的事件就会逐级向上传播。

有冒泡的事件：click,mouseover和mouseout 。

其他事件都不会冒泡

> 注意：mouseenter（鼠标悬浮）和mouseleave（鼠标离开）:不会冒泡

**如何阻止事件冒泡:**

可通过事件对象相应的方法实现，进而阻止向上传播

```JavaScript
e.stopPropagation(); // w3c事件对象
e.cancelBubble = true; // IE事件对象
```

如何判断是w3c事件对象?  通过对象的方法名进行判断，

```JavaScript
// 对象的方法名可以作为对象的属性进行判断，从而知道是什么浏览器
if ( event.stopPropagation ){
	event.stopPropagation();	// w3c
}else{
	event.cancelBubble = true;	// IE
}
```

示例：

```HTML

<head>
    <style>
        .flex-c-c {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .yeye {
            width: 200px;
            height: 200px;
            background-color: rgb(255, 47, 0);
        }

        .parent {
            width: 100px;
            height: 100px;
            background-color: rgb(0, 128, 49);
        }

        .son {
            width: 60px;
            height: 60px;
            background-color: rgb(0, 217, 255);
        }
    </style>
</head>
<body>
    <!-- 嵌套的页面结构 -->
    <div class="yeye flex-c-c" id="yeye">
        <div class="parent flex-c-c" id="parent">
            <div class="son" id="son"></div>
        </div>
    </div>
    <script>
        let yeye = document.getElementById('yeye');
        let parent = document.getElementById('parent');
        let son = document.getElementById('son');

       
        yeye.addEventListener('click',function(){
            console.log('yeye')
        },false); // false默认值，默认在冒泡阶段执行，true捕获阶段

        parent.addEventListener('click',function(){
            event = event || window.event;
            // 阻止冒泡向上传播
            // event.stopPropagation(); // w3c 方式
            // event.cancelBubble = true; // IE 方式
            // 判断是否是属于w3c标准浏览器
            if(event.stopPropagation){
                event.stopPropagation(); // w3c 方式
            }else {
                event.cancelBubble = true; // IE 方式
            }
            console.log('parent')
        },false); // false默认值，即在冒泡阶段执行，true捕获阶段

        son.addEventListener('click',function(event){
            console.log('son')
        },false); // false默认值，即在冒泡阶段执行，true捕获阶段
        
    </script>
</body>

```

# 默认行为

什么是默认行为，即标签本身就有的行为特征！

哪些标签有默认行为呢？，常见的有以下两个标签：

- 链接 `<a href="./index.php">点我</a>`  ，默认行为会往属性href指定的地址跳转

- 表单内点击提交按钮（type=submit） ，  默认行为会往form表单属性action指定的地址跳转

这里注意 和 的区别：

- type=submit :点击默认提交表单，即有默认行为。等同于一对Button标签

- type=button:就是一个普通的按钮，点击不会提交表单，需要给其绑定事件才可以提交表单。

阻止默认行为有两种方式：

- 通过事件对象

    ```Plain Text
     event.preventDefault(); // w3c
     event.returnValue = false; // IE
    ```

- 或者给事件处理函数返回一个false。

```HTML
<!-- action:跳转的地址  -->
<form action="/login" onsubmit="return false;"> 
  用户名： <input type="text" name="username">
 <input type="submit" value="提交">
</form>

<a href="http://baidu.com" onclick="return false">百度</a>
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
</head>
<body>
    <!-- 含有默认行为两个标签： a标签，form表单(type=submit / 一对button标签) -->
    <!-- <a href="javascript:;">京东</a> -->
    <a href="javascript:void(0);">京东</a>
    <a href="https://baidu.com" id="go">百度</a>

    <form action="./aaa.php" id="loginForm">
        用户名：<input type="text" name="username"> <br />
        <!-- type=button没有默认行为 -->
        <!-- <input type="button" value="登录0"> -->

        <!-- 下面两个有默认行为 -->
        <input type="submit" value="登录">
        <!-- <button>登录2</button> -->
    </form>
    <script>
        document.getElementById('go').onclick = function(event){
            alert('去百度')
            event = event || window.event;
            if(event.preventDefault){
                event.preventDefault();
            }else {
                event.returnValue = false;
            }
            // return false;
        }



        var loginForm = document.getElementById('loginForm')
        loginForm.onsubmit = function(event){
            event = event || window.event;
            alert('跳转');
            // 方式1： return false
            // return false;

            // 方式2：通过事件对象来阻止默认行为
            //  event.preventDefault(); // w3c   
            // event.returnValue = false; // IE
            if(event.preventDefault){
                event.preventDefault();
            }else {
                event.returnValue = false;
            }

        }
    </script>

</body>
</html>
```

如果a标签本身就没有设置跳转的链接地址，而是通过js动态绑定的方式进行跳转，我们一般设置href为：`href="javascript:;"`

```HTML
<!-- href="#" 空链接，点击的时候地址栏会有个#号，比较丑 -->
<a href="#" id="login">登录</a>

<!-- 给a连接的href属性设置javascript:; 或 javascript:void(0)  -->
<a href="javascript:;" id="login">登录</a>
<script>
	document,getElementById('login').onclick = function(){
        console.log('登录中...')
	}
</script>
```

# 鼠标右键菜单事件contextmenu

```JavaScript
document.addEventListener('contextmenu',function(event){
      event.preventDefault(); // 阻止鼠标右键菜单事件
})
```

示例：

```HTML
<head>
    <style>
        li {
            list-style: none;
        }
        #menu {
            position: absolute;
            display: none;
            border: 1px solid red;
        }
        li:hover {
            background-color: rgb(58, 20, 20);
        }
    </style>
</head>
<body>
    <!-- 自定义菜单 -->
    <ul id="menu">
        <li>点赞</li>
        <li>收藏</li>
        <li>投币</li>
    </ul>
    <script>
        var menu = document.getElementById('menu')
        document.addEventListener('contextmenu',function(event){
            event.preventDefault();
            var X = event.clientX;
            var Y = event.clientY;
            menu.style.left = X + 'px'
            menu.style.top = Y + 'px'
            menu.style.display = 'block'
        })

        document.onclick = function(){
            menu.style.display = 'none'
        }
    </script>
</body>
```

# 

# 事件委托（事件代理）

事件委托也叫事件代理，就是将子元素的事件绑定在其祖先元素上。

通俗的说就是某个事件本来该是自己完成的，但是自己不干，就叫父亲来干，这就叫事件委托。

好处：提高事件的绑定性能，可避免循环对子元素绑定事件。

## 传统多元素绑定事件方式

传统的做法给如下的li标签都绑定单击事件：

```HTML
<ul id="list">
    <li>李同学</li>
    <li>胡同学</li>
    <li>刘同学</li>
    <li>新同学</li>
    <li>王磊同学</li>
</ul>
<button>新增新同学<button>
```

如果我们需要给上面的所有的li绑定单击事件我们一般会这么做，如下：

```JavaScript
var lis = document.getElementsByTagName('li');
for(var i = 0,length = lis.length; i < length;i++){
      lis[i].onclick=function(event){ 
         console(this.innerHTML);		//打印当前元素的标签中的内容
      }
}
```

缺点：

以上代码有个不好的地方,就是当给ul中动态添加li节点时,添加后的li是没有onclick事件的,这在开发中是不不允许的。且上面的写法是循环给每个li都绑定onclick事件,一旦li节点比较多的时候，这时候性能非常差。

怎么解决？ 通过事件委托，委托给li的祖先元素，如委托给ul即可。

## 通过委托方式给多元素绑定事件

- 事件委托并不是每个子节点单独设置事件监听。

- 相反是把事件绑定在其祖先节点上。

​

实现委托的步骤：

- 给ul设置单击事件，因为点击ul内的li，根据冒泡原理，事件会冒泡到ul上，ul有注册事件，就会触发其事件。

- 然后利用事件对象的target属性来找到当前点击的目标元素li，并处理相应业务逻辑

```HTML

  <body>
    <ul id="list">
      <li>李同学</li>
      <li>胡同学</li>
      <p>隔壁同学</p>
      <li>刘同学</li>
    </ul>
    <button id="btn">新增新同学</button>
    <script>
      // 传统循环绑定方式
      var list = document.getElementById('list')
      var btn = document.getElementById('btn')
      //   动态新增元素
      btn.onclick = function () {
        var liNode = document.createElement('li')
        liNode.innerText = '王磊同学'
        list.appendChild(liNode)
      }

      // 将li的单击事件委托给父亲ul
      list.onclick = function (event) {
        // 要判断点击的目标元素是否是li,是的话才处理相应业务逻辑
        // console.log(event.target.localName)
        if (event.target.localName === 'li') {
          console.log(event.target.innerText)
        }
      }
    </script>
  </body>

```

**事件委托优势：**

- 事件只绑了一次，提高了绑定事件的性能

**什么时候使用事件委托呢**

- 需要给列表元素绑定事件时。

- 让动态新增的元素也有事件

# [了解]动态和静态获取节点

示例：

- 通过`document.getElementsBy******`方式获取到的节点都是动态的

- 通过`document.querySelectAll`方式获取到的节点都是静态的

动态的(可以感知DOM树变化，可以影响到原集合对象)

静态的(没法感知DOM树变化，不会影响到原集合对象)

```HTML
<body>
    <div id="box">
    	<span>刘德华</span>
    </div>
    <script>
        // 动态的(可以感知DOM树变化，可以影响到原集合对象)
        // var spans = document.getElementsByTagName('span'); 
        
        // 静态的(没法感知DOM树变化，不会影响到原集合对象)
        var spans = document.querySelectorAll('span'); 

        setTimeout(function () {
            var spanNode = document.createElement('span')
            spanNode.innerText = '刘德华'
            document.getElementById('box').appendChild(spanNode)
        }, 2000)


        setTimeout(function () {
            console.log(spans.length); // 
        }, 3000)

    </script>
</body>
```

