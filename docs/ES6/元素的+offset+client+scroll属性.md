---
title: 元素的+offset+client+scroll属性
date: 2023-08-19 16:55:45
permalink: /pages/1fc096/
categories:
  - ES6
tags:
  - 
---
# 元素offset属性

**offset**：offset翻译过来就是偏移量。

作用：

1. 获取元素自身宽高

2. 获取距离父容器的偏移量

|offset相关属性|作用|
|-|-|
|element.offsetTop|**HTMLElement.offsetTop** 为只读属性，它返回当前元素相对于其 最近的定位的祖先 元素的顶部内边距的距离|
|element.offsetLeft|**HTMLElement.offsetLeft** 为只读属性，它返回当前元素相对于其 最近的定位的祖先元素的左内边距的距离|
|element.offsetWidth|返回自身宽度大小，`width+padding*2+border*2`， 含滚动条|
|element.offsetHeight|返回自身高度大小，`height+padding*2+border*2`，含滚动条|

注意:返回的数值都不带单位，且上面属性都是只读属性。

![1662984259058](import/892812e8-6e25-4f37-ac4a-2475496e82bc/assets/1662984259058.png)

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
            width: 200px;
            height: 200px;
            border: 2px solid green;
            padding: 4px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div id="box">
       hello
    </div>
    <script>
        var box = document.getElementById('box')
        console.log('offsetTop:',box.offsetTop)
        console.log('offsetWidth:',box.offsetWidth)
    </script>
</body>
</html>
```

# 元素client属性

client作用：获取元素可视区的相关信息。

可视区：肉眼能看见的区域。

作用：

1. 获取元素宽高

2. 获取元素的边框大小

|client相关属性|作用|
|-|-|
|element.clientTop|返回元素上边框的大小|
|element.clientLeft|返回元素左边框的大小|
|element.clientWidth|返回自身宽度大小，`width+padding*2`，不含滚动条|
|element.clientHeight|返回自身高度大小，`height+padding*2`，不含滚动条|

> 注意和offsetWidth的区别，clientWidth是不含边框的。

![1662984884259](import/892812e8-6e25-4f37-ac4a-2475496e82bc/assets/1662984884259.png)

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
            width: 200px;
            height: 200px;
            border: 2px solid green;
            padding: 4px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div id="box">
       hello
    </div>
    <script>
        var box = document.getElementById('box') 
        console.log('offsetWidth:',box.offsetWidth)
        console.log('clientWidth:',box.clientWidth)
        console.log('clientTop:',box.clientTop)
    </script>
</body>
</html>
```

获取网页的可视宽度和高度

```JavaScript
// 可视宽度（不含滚动条）
document.documentElement.clientWidth
// 可视高度（不含滚动条）
document.documentElement.clientHeight

window.innerHeight ： 获取网页内容可视区域高度，包括滚动条
window.innerWidth ： 获取网页内容可视区域宽度，包括滚动条
```

# 元素scroll属性

scroll：翻译过来就是滚动的意思

作用：

- 获取元素的大小（含溢出）

- 获取元素卷上去的距离

|scroll相关属性|作用|
|-|-|
|element.scrollTop|获取被卷去的上侧距离，返回的数值不带单位|
|element.scrollLeft|获取被卷去的左侧距离，返回的数值不带单位|
|element.scrollWidth|返回自身宽度（包含width+padding+溢出内容）,不含边框，返回值不带单位|
|element.scrollHeight|返回自身高度（包含height+padding+溢出内容）,不含边框，返回值不带单位|

![1662991808910](import/892812e8-6e25-4f37-ac4a-2475496e82bc/assets/1662991808910.png)

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
            width: 200px;
            height: 200px;
            border: 2px solid green;
            padding: 4px;
            background-color: red;
            overflow: auto;
        }
    </style>
</head>
<body>
    <div id="box">
        11111111<br /><br /><br />
        11311111<br /><br /><br />
        111211<br />
        11111111<br /><br /><br />
        13111<br />
        11671111<br />
        11111111<br />
        115111<br />
        11111111<br />
    </div>
    <script>
        var box = document.getElementById('box')
        box.onscroll = function(){
            console.log('scrollTop:',this.scrollTop)
        }
    </script>
</body>
</html>
```

**获取网页卷上去的高度：**

1. 使用document.documentElement.scrollTop 或 使用document.body.scrollTop。

2. window新属性， window.pageYOffset 和 window.pageXOffset,    window.scrollY和window.scrollX， IE9和其他w3c标准浏览器开始支持

```JavaScript
// 获取文档doucment卷上去的高度。 兼容写法
var scrollTop =  document.documentElement.scrollTop || document.body.scrollTop;
```

# 案例-回到网页顶部

```JavaScript
// 方式1
document.documentElement.scrollTop  = document.body.scrollTop = 0;

// 方式2：scroll(x,y)
window.scroll(0,0); // 作用：滚动到文档某处,  当x,y为0时，相当于回到文档顶部
// 或
window.scrollTo(0,0)
```

设置平滑滚动，设置css中的html的滚动行为：

```CSS
html {
    scroll-behavior: smooth; /* smooth 丝滑 */
}
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
        html {
            scroll-behavior: smooth;
        }
        #backTop{
            position: fixed;
            right:20px;
            bottom:60px
        }

        div {
            font-size: 100px;
            text-align: center;
            width: 800px;
            height: 400px;
            line-height: 400px;
            margin: 10px auto;
            background-color: #4a9478;
        }

    </style>
</head>

<body>
    <button id="backTop">回到顶部</button>
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
    <div>E</div>
    <script>
        var backTop = document.getElementById('backTop')
        // 回到顶部
        backTop.onclick = function(){
            document.documentElement.scrollTop  = document.body.scrollTop = 0;
           // window.scrollTo(0,0)
        }
    </script>

</body>

</html>
```

控制回到顶部按钮的显示或隐藏

```JavaScript
//   给文档绑定滚动事件
      document.addEventListener('scroll', function () {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop >= 100) {
          // 显示回到顶部按钮
          backTop.classList.remove('hide')
        } else {
          // 隐藏
          backTop.classList.add('hide')
        }
      })
```

# 案例-实现图片懒加载

## 介绍

所谓的图片懒（延迟）加载就是指图片出现在我们的视口（viewport）内才进行加载，这样可以有效的减轻服务器压力和节省流量。

想想，如果一个长列表页面，共有100张图片，但是我们首先看到的只有视口内前几张，那么视口以下的图片我们可能并没有看到，这样如果全都下载，那么就是一种资源的浪费，增加服务器压力，同时也浪费流量。

## 实现思路

- 把图片的真实地址记录在图片的非src属性中，如data-src属性中。

- 等图片进入可视区内，则把img的data-src的属性值赋值给src属性，即可加载图片。

页面布局结构

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
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <img
      data-src="https://tse1-mm.cn.bing.net/th/id/OIP-C.R78qgeMyzQsqHRhqZc0-UAHaOH?w=181&h=345&c=7&r=0&o=5&pid=1.7"
      alt=""
    />
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <img
      data-src="https://tse1-mm.cn.bing.net/th/id/OIP-C.-hymx1fg76CijuTLrNJKhwHaEE?w=305&h=180&c=7&r=0&o=5&pid=1.7"
      alt=""
    />
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <img
      data-src="https://tse3-mm.cn.bing.net/th/id/OIP-C.t9EgVdwDMPPwvoC47_AmYAHaJY?w=196&h=248&c=7&r=0&o=5&pid=1.7"
      alt=""
    />
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <h1>买买买</h1>
    <img
      data-src="https://tse2-mm.cn.bing.net/th/id/OIP-C.kmR2P7xa78Rq6v20OWTCWwAAAA?w=115&h=180&c=7&r=0&o=5&pid=1.7"
      alt=""
    />
    <h1>买买买</h1>
    <script>
      var imgs = document.getElementsByTagName('img')
      // 1. 给文档绑定滚动事件
      document.addEventListener('scroll', function () {
        var pageViewHeight = document.documentElement.clientHeight // 网页的可视高度
        // 2. 循环所有的图片集合，判断图片是否进入可视区
        for (var i = 0; i < imgs.length; i++) {
          // 先判断一下，此图片是否已经加载过了
          if (imgs[i].getAttribute('loaded')) {
            continue // 继续下一次循环，判断下一张
          }
          // 元素距离视口的高度
          var imgViewHeight = imgs[i].getBoundingClientRect().top
          // 图片在可视区的条件： 元素距离视口的高度 < 网页的可视高度
          if (imgViewHeight <= pageViewHeight) {
            console.log('进入可视区了')
            // 若在可视区，则把当前图片data-src的值取出来，给当前图片src
            imgs[i].src = imgs[i].getAttribute('data-src')
            // 对于已经加载过得图片，给其加一个属性，说明已经加载过来，避免后续重复加载
            imgs[i].setAttribute('loaded', 'true')
          }
        }
      })
    </script>
  </body>
</html>
```

# 案例-轮播图动画

## 封装动画函数

## 结合轮播图使用

# 案例-放大镜效果

