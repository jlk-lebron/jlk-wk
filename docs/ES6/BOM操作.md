---
title: BOM操作
date: 2023-08-19 16:55:45
permalink: /pages/07a66a/
categories:
  - ES6
tags:
  - 
---
# BOM

JS的组成部分：

![](import/e996e5cd-6efb-4b9e-bc6c-1b1ff30ad989/assets/1662644581528.png)

三大部分：

- **ECMAScript**: 规定js语言的实现标准和规范。

- **DOM** （ Document Object Model）：文档对象模型。它提供了一套操作页面元素的API。作用：便于操作页面节点。如操作标签的颜色，背景，添加元素、删除元素等等。

- **BOM**（Browser Object Model  ）：浏览器对象模型。它提供了一套操作浏览器功能的API方法，可以操作浏览器窗口。比如：控制浏览器前进、后退、刷新、获取屏幕分辨率等

    > 简单理解：API（Application Programming Interface，应用程序接口）就是程序预留给程序员提供的一种工具，以便能够轻松的实现某些功能。如 弹窗 alert就是一个API。

## BOM模型结构图

![1666924335366](import/e996e5cd-6efb-4b9e-bc6c-1b1ff30ad989/assets/1666924335366.png)

- window对象，它是浏览器中最顶层的对象，它代表着当前的整个浏览器窗口对象，由浏览器创建。BOM中的其它的对象都是以属性的方式添加在window对象下面！

    > 比如：document对象它就是window对象下面的一个属性，但是它同时也是一个对象。它相对于window对象来说它就是一个属性 但相对于creatElement方法来说它就是一个对象。

- document：文档对象。它代表当前的整个HTML文档对象。由DOM（文档对象模型） 去操作文档中的元素节点。

- history：历史记录对象 它主要是用来记录浏览器的访问历史记录！,可以实现页面的前进和返回。**注意：**只有访问过后才会有历史记录。

- location：地址栏对象 它可以用来获取到当前浏览器上面的地址栏中相关数据。如域名、协议。

- navigator：浏览器对象 它可以获取到浏览器的相关数据。比如浏览器的名称、版本等等

- screen：屏幕对象 它可以获取到与屏幕相关的数据。比如：屏幕的分辨率

## window全局对象

参考文档：[https://developer.mozilla.org/zh-CN/docs/Web/API/Window#属性](https://developer.mozilla.org/zh-CN/docs/Web/API/Window#%E5%B1%9E%E6%80%A7)

**常用属性：**

- `innerHeight` ： 获取网页内容可视区域高度，包括滚动条

- `innerWidth` ： 获取网页内容可视区域宽度，包括滚动条

> document.documentElement.clientHeight / clientWidth是不含滚动条的

**常用方法：**

- `alert`： 弹窗

- `prompt`：接收用户输入的值。 返回的是字符串类型

- `setInterval`: 开启定时器 ，周期性执行。`clearInterval`  用来关闭定时器

- `setTimeout`: 延时器， 仅执行一次。`clearTimeout`  用来关闭延时器

- `confirm`:  展示消息确认框，返回布尔型

- ...

示例：

```HTML
<script>
    console.log('可视高度（含滚动条）:' + window.innerHeight)
    console.log('可视宽度（含滚动条）:' + window.innerWidth)
    // prompt：接收用户输入的值,返回值是字符串类型（string）
    var age = window.prompt('请输入你的年龄',18);
    console.log('输入的值：', age)

    var isDelete = window.confirm('确认删除吗')
    console.log('是否删除',isDelete)
</script>
```

## document 文档对象

所谓的document文档相当于是一个完整的html树，也叫DOM树。

参考文档：[https://developer.mozilla.org/zh-CN/docs/Web/API/Document](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)

常用属性和方法

```Plain Text
document.body
document.getElementById('box')
document.createElement('li')
...
```

## history 历史对象

作用： 控制浏览器前进、后退

参考文档：[https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history)

- 返回：history.back()  等价于 history.go(-1)

- 前进：history.forward() 等价于  history.go(1)

- 刷新：history.go(0)  等价于 location.reload()

## location 地址栏对象

作用：获取地址栏相关信息。

参考文档：[https://developer.mozilla.org/zh-CN/docs/Web/API/Location](https://developer.mozilla.org/zh-CN/docs/Web/API/Location)

- 地址栏信息： location.href ;

- 刷新：location.reload() 等价于 history.go(0)

- 跳转：location.href = "要跳转的url地址"

## screen 屏幕对象

作用：获取屏幕相关的信息，如分辨率等

```Plain Text
screen.width: 获取屏幕的宽度
screen.height： 获取屏幕的高度
```

参考文档：[https://developer.mozilla.org/en-US/docs/Web/API/Screen](https://developer.mozilla.org/en-US/docs/Web/API/Screen)

## navigator  浏览器导航对象

作用：获取关于浏览器和移动设备的一些信息。 可以识别出用户访问我们的网站是什么设备（android,ios,ipad, IE，firefox,chrome）

参考文档：[https://developer.mozilla.org/en-US/docs/Web/API/Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)

```Plain Text
// 常用的属性
navigator.appVersion
navigator.userAgent
```

每个浏览器`navigator.userAgent`获取到的值如下：

- chrome:

```Plain Text
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36"
```

- firefox:

```Plain Text
"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0"
```

- IE

```Plain Text
IE11 => "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko"

IE10 => "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)"

IE9 => "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)"

IE8 => "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)"

IE7 => "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)"

IE5 => "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)"
```

- Edge

```Plain Text
// 旧版本测试
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18363"

// 新版本测试
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.63'
```

- 移动端android:

```Plain Text
"Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Mobile Safari/537.36"
```

- 移动端iphone:

```Plain Text
"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
```

- IPAD:

```Plain Text
"Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1"
```

任务：

- 封装一个方法，判断是否是pc端，是返回true,否则返回false

- 封装一个方法，判断是否是移动端（android/ios/ipad），是返回true,否则返回false

- 封装一个方法，判断是否是IE浏览器，是返回true,否则返回false

```JavaScript
 
         

        function isMobile(){
            // 获取用户代理（用户的设备信息） 转小写，好判断
            // 判断是否有特殊关键字
            var userAgent = navigator.userAgent.toLowerCase(); 
            var isAndroid = userAgent.indexOf('android') > -1;
            var isIphone = userAgent.indexOf('iphone') > -1;
            var isPad = userAgent.indexOf('ipad') > -1;
            
            // 上面都为假则是pc端，有一个为真，则说明是移动端
            if(isAndroid || isIphone || isPad){
                return true;
            }

            return false;
        }

        console.log( '是否是移动端：',isMobile() )

		function isPC(){
            // 获取用户代理（用户的设备信息） 转小写，好判断
            // 判断是否有特殊关键字
            var userAgent = navigator.userAgent.toLowerCase(); 
            var isAndroid = userAgent.indexOf('android') > -1;
            var isIphone = userAgent.indexOf('iphone') > -1;
            var isPad = userAgent.indexOf('ipad') > -1;
            
            // 上面都为假则是pc端，有一个为真，则说明是移动端
            if(isAndroid || isIphone || isPad){
                return false;
            }

            return true;
        }

        console.log( isPC() )

        function isIE(){
            // 获取用户代理（用户的设备信息） 转小写，好判断
            // 判断是否有特殊关键字
       
            var userAgent = navigator.userAgent.toLowerCase(); 
            return （userAgent.indexOf('msie') > -1 || userAgent.indexOf('trident') > -1);
        }

        console.log( '是否是IE：',isIE() )
```

## BOM常用操作小结

常用的几点：

- 返回上一页  history.back()

- 刷新页面 location.reload()

- 判断用户设备 navigator.userAgent

- 跳转： location.href = '新地址'

- 查看api兼容性情况： [https://caniuse.com/](https://caniuse.com/)

