---
title: ES6
date: 2023-08-19 16:55:45
permalink: /pages/1876a3/
categories:
  - ES6
tags:
  - 
---
# JS严格模式

介绍：

1. 严格模式通过**抛出错误**来消除了一些原有**静默错误**。

2. 严格模式修复了一些导致 JavaScript 引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下**运行得更快**

开启严格模式：

- 整个脚本开启严格模式

```HTML
<script>
"use strict";

</script>
```

- 函数内开启

```JavaScript
function foo(){
 "use strict";
   
}
```

在严格模式下的，常见的变化有：

- 声明变量不加关键字var或let，抛出异常

- 全局中函数this不再是window，而是指向undefined

- 不能通过detete删除普通变量。注：但删除对象属性是可以的

- ....

示例

```HTML
 <script>
 // 整个脚本都开启严格模式
      'use strict'

      //   严格模式必须要加声明变量的关键字 var let
      var a = 100
      console.log(a)

      function test() {
        // 严格模式，函数没有调用者，this指向undefined
        console.log(this)
      }
      test()

      //   严格模式：不能删除普通变量
      //   var b = 200
      //   delete b

      //   删除对象的属性是可以
      var obj = { c: 1, d: 2 }
      delete obj.d
      console.log(obj)

 </script>
```

# ES6介绍

ECMA ( European Computer Manufacturers Association ) 中文名为欧洲计算机制造商协会, 这个组织的目标是评估, 开发和认可电信和计算机标准. 1994年后该组织改名为Ecma国际.

什么是ECMAScript

- ECMAScript 是由 Ecma 国际通过 ECMA-262标准化的脚本程序设计语言.

什么是 ECMA-262

- Ecma国际制定了许多标准, 而 ECMA-262 只是其中的一个, 所有标准列表查看
[http://www.ecma-international.org/publications/standards/Standard.htm](http://www.ecma-international.org/publications/standards/Standard.htm)

在线版ECMA文档：[https://tc39.es/ecma262/#sec-json.parse。建议看MND](https://tc39.es/ecma262/#sec-json.parse。建议看MND)

## ECMAScript发展历史

|第 1 版|1997 年|制定了语言的基本语法|
|-|-|-|
|第 2 版|1998 年|较小改动|
|第 3 版|1999 年|引入正则、异常处理、格式化输出等。IE开始支持|
|第 4 版|1999 年|过于激进，未发布|
|第 5 版|2009 年|引入严格模式、JSON、扩展对象，数组、原型、字符串、日期方法|
|第 6 版(ES6)|2015 年|模块化、面向对象语法、Promise、箭头函数、let、const、数组解构赋值等等|
|第 7 版|2016 年|幂运算符、数组includes扩展|
|第 8 版|2017 年|字符串扩展、Async/await关键字|
|第 9 版|2018 年|对象解构赋值、正则扩展|
|第 10 版|2019 年|扩展对象、数组、字符串方法|
|ES.next||动态指向下一个版本|

注：从ES6开始，每年发布一个版本，版本号比年份最后一位大1。

**ES5之后的JS语法统称ES6！！！**

## 谁在维护 ECMA-262

[TC39](https://github.com/tc39/proposals)（Technical Committee 39）是推进 ECMAScript 发展的委员会。 其会员都是公司。（其中主要是浏览器厂商，有苹果、谷歌、微软、因特尔等）。TC39定期召开会议，会议由会员公司的代表与特邀专家出席。

会议的内容： 制定ECMAScript标准,标准生成的流程,并实现。

一个提案在成为标准之前会经历下面的步骤：

- 草案（ Sketch ）（非正式地：“普通人提案”）：提案特性的第一个描述。

- 提案（ Proposal ）：如果 TC39 认为某个特性是重要的，那么此特性就上升为官方提案状态。这并不会保证最终会成为标准，但是大大地增加了成为标准的可能性。 ES6 提案的截止日期是2011年5月，在这之后不会考虑重大的新提案。

- 实现（ Implementations ）：提案特性必须被实现，在理想情况下，要支持两种 JavaScript 引擎。在提案获得提升的时候，来自于社区的实现和反馈决定了提案的样子。

- 标准（ Standard ）：如果提案持续检验自身，并且被 TC39 接受，那么该提案将最终包含进 ECMAScript 标准的一个版本中。此时，就成了一个标准特性。

TC39会议内容： [https://github.com/tc39/notes/tree/211aa3f9e0fac861bba427776a9ecb8663fdf280/meetings](https://github.com/tc39/notes/tree/211aa3f9e0fac861bba427776a9ecb8663fdf280/meetings)

## 为什么要学习 ES6

- ES6 的版本变动内容较多，具有里程碑意义。

- ES6 加入许多新的语法特性，编程实现更简单、高效

- ES6 是前端发展趋势，就业必备技能

## ES6 兼容性（97%）

[http://kangax.github.io/compat-table/es6/](http://kangax.github.io/compat-table/es6/) 可查看兼容性

[https://caniuse.com/也可以看css的一些兼容性](https://caniuse.com/也可以看css的一些兼容性)

不兼容es6+语法的浏览器，后面会借助babel插件，将其转化es5。

## 常见的ES6新特性

- let、const

- 模板字符串

- 对象简写

- 解构赋值

- 剩余参数&扩展运算符

- 箭头函数

- class声明类 、extends来实现继承

- 数组、字符串、正则扩展方法

- Object扩展方法

- Symbol基本数据数据，表示独一无二的唯一值

- promise

- async/await

- ....

# symbol基本数据类型

基本数据类型：string、number、boolean、null、undefined、Symbol

**什么是Symbol?**
`Symbol`是`es6`中新引进的一种基本数据类型，表示独一无二的值。

每个从 Symbol() 返回的 symbol 值都是唯一的。

```JavaScript
//创建 Symbol
let s1 = Symbol();
console.log(s1, typeof s1);

//添加标识的 Symbol,方便代码阅读和后期调试
let s2 = Symbol('尚硅谷');
let s2_2 = Symbol('尚硅谷');
console.log(s2 === s2_2);//false

//使用 Symbol.for() 创建共享的Symbol,有全局缓存特点。如果已经定义过，就会返回原来的值。
let s3 = Symbol.for('尚硅谷');
let s3_2 = Symbol.for('尚硅谷');
console.log(s3 === s3_2); // true

```

**symbol类型应用场景：**
最合理的用法就是用Symbol创建的值作为对象的key，防止命名冲突。

```JavaScript
// 一个班级有两个同学，都叫张三，
// let users = {
//   张三: { age: 18, sex: '男' },
//   张三: { age: 20, sex: '女' },
// }

// console.log(users) // { '张三': { age: 20, sex: '女' } }

let key1 = Symbol('张三')
let key2 = Symbol('张三')

let users = {
  [key1]: { age: 18, sex: '男' },
  [key2]: { age: 20, sex: '女' },
}

console.log(users)
console.log(users[key2])
```

Symbol特点：

- Symbol值不能与其他数据进行运算。

- Symbol函数不能使用new，因为其不是一个构造器

- Symbol创建的属性名无法被枚举出来。即无法通过`Object.getOwnPropertyNames()、Object.keys()、for...in`遍历出来。但可以通过`Object.getOwnPropertySymbols()`进行遍历，会返回所有Symbol属性的数组

```JavaScript
var obj = {
  a: 1,
  b: 2,
  [Symbol('c')]: 3,
  [Symbol('d')]: 4,
}

for (var k in obj) {
  console.log(k) // 'a' , 'b'
}
console.log(Object.getOwnPropertyNames(obj)) // ['a','b']
console.log(Object.keys(obj)) // ['a','b']

// 获取Symbol的属性
console.log(Object.getOwnPropertySymbols(obj)) // [ Symbol(c), Symbol(d) ]
```

# let、const 关键字

## let特点

- 声明的变量属于块级作用域（block scope）

- 没有变量提升（存在TDZ），Temporal Dead Zone (暂时性死区)

> 暂时性死区TDZ(Temporal Dead Zone): 起始于函数的开头，终止与相关变量声明的一行。在这个范围内无法访问let或const声明的变量。这块死区就是TDZ。

- 不能声明相同变量

- 声明的全局变量和和函数不会成为全局对象window的属性

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26361372/1666242162387-18961df2-a292-46e3-8602-1b0b0568db84.png#averageHue=%23fdf4f4&clientId=u73fa2059-2017-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=284&id=u7edbf1da&margin=%5Bobject%20Object%5D&name=image.png&originHeight=284&originWidth=737&originalType=binary&ratio=1&rotation=0&showTitle=false&size=61787&status=done&style=none&taskId=u97f56fe5-a62f-458a-a508-70d610ed639&title=&width=737)

注意：以后声明变量使用let就对了。

## const特点

- 声明的量属于常量，也是属于块级作用域，必须要赋予初始值，且后续不能修改。

- 常量的名字一般都是约定大写

代码实例：

```JavaScript

// const PI = 3.14;
// PI = 3.15; // 报错
// console.log(PI)


const user = {age:18,sex:'男'};
// user = 123; // 报错
user.age = 19; // 正确
user.email = 'hehe@qq.com'; // 正确
console.log(user)


if(true){
  const TYPE = 2;
  console.log(TYPE)
}
// console.log(TYPE) 报错
```

注意：修改对象属性和数组元素不会发出const错误。

let和const使用场景：

- 对于需要写保护（防止被覆盖）的变量使用const

- 只有确定要改变变量的值的时候才用let

> 因为变量的值会不停的变化这也是导致很多bug的源头。

- 声明对象类型使用const，非对象类型使用let 。如对象、数组、函数用const声明。

# 模板字符串

用一对反引号包起来的部分就是模板字符串。

```Plain Text
`${表达式}`
```

作用：用于字符串和变量的拼接，且支持换行操作

表达式特点：一定会产生一个值。

其表达式的值可以是变量、属性调用、函数调用、三目运算符等

示例：

```JavaScript
    let name = "库里";
    let age = 28;

    function hello(name){
        return '你好：' + name 
    }

    let obj = {
        sex:"男"
    }

    let info = `my name is ${name},age is ${age},性别：${obj.sex},欢迎语：${hello()}`;
    console.log(info);

    // 模板字符串可以换行，保持代码的原格式
    let htmlStr = `<div>
        <h1>我是h1</h1>
    </div>`
    console.log(htmlStr);
```

# 对象简写

属性简写

方法简写

```JavaScript
    let name = 'kobe';
    let age = 24;
    let user1 = {
        name: name,
        age: age,
        getName:function(){
            return `my name is ${this.name}`;
        }
    }

    // 简写为：
    let user2 = {
        name,
        age,
        getName(){
            return `my name is ${this.name}`;
        }
    }

    console.log(user1)
    console.log(user2)
```

简写的属性定义在前面：

```JavaScript
let a = 1;
let b = 2;

// bad
const obj = {
  c: 3,
  d: 4,
  a,
  b,
};

// good 简写的属性定义在前面
const obj = {
  a,
  b,
  c: 3,
  d: 4,
};
```

> js代码规范：[https://github.com/libertyAlone/airbnb-javascript-style-guide-cn#%E5%88%86%E5%8F%B7](https://github.com/libertyAlone/airbnb-javascript-style-guide-cn#%E5%88%86%E5%8F%B7)

html代码规范：[https://github.com/fex-team/styleguide/blob/master/html.md](https://github.com/fex-team/styleguide/blob/master/html.md)

css代码规范：[https://github.com/fex-team/styleguide/blob/master/css.md](https://github.com/fex-team/styleguide/blob/master/css.md)

# 解构赋值

定义：可以对某个数据结构进行解开再把值赋值给其他变量。

## 对象的解构赋值

语法：解构时，可设置别名和默认值，语法：

```JavaScript
var {属性名,属性名：别名, 属性名=默认值} = 对象
```

示例：

```JavaScript
let age = 19
const obj = {
    name: '万志远',
    age: '18',
    address: { area: '后瑞村', number: '1312' },
    hobby: '抽烟',
}

let {
    age: myage, // 属性名：别名
    name,
    address: { number, area }, // 深层解构
    hobby = '翻墙', // 属性名：默认值
} = obj

let info = `我叫${name},年龄：${myage},住址：${area},门牌号：${number},爱好：${hobby}`
console.log(info)
```

对对象参数进行解构

```JavaScript
//   function hello(obj) {
//     console.log(`my name is ${obj.name},age is ${obj.age},sex:${obj.sex}`)
//   }

// 对对象的参数进行解构
function hello({ name, age, sex }) {
    console.log(`my name is ${name},age is ${age},sex:${sex}`)
}

hello({ name: '磊', age: 20, sex: '人妖', address: '泰国' })
```

## 数组的解构赋值

```JavaScript
var arr = [1,2];
// 变量a接收数组第一个元素,b接收第二个元素
var [a,b] = arr
console.log(a) // 1 
console.log(b) // 2

// 省略前几个数组元素
let player = ['张三','李四','王五'];
let [,,ww] = player;
console.log(ww) // '王五'

// 交换两个变量的值
let a = 10;
let b = 20;  
[a,b] = [b,a]
console.log(a,b)
```

# 扩展（剩余）运算符...

作用：

- 获取函数所有的实参或部分实参，可以替换arguments

- 合并对象或数组

- 获取数组剩余元素

```JavaScript
// 接收所有实参
function sum(...args){
  console.log(args); // [1, 2, 3]
}
sum(1,2,3)


// 接收部分剩余实参
function sum(a,...args){
    console.log(a); // 1
    console.log(args); // [ 2, 3]
}

sum(1,2,3)

```

- 合并对象或数组

```JavaScript
let user1 = {
	name:"张三",
  	age:"男"
}
// 合并属性，一般用在合并默认参数中较多
let user2 = {
  ...user1,
  email: "123@qq.com"
}

console.log(user2); // {name: "张三", sex: "男", email: "123@qq.com"}


// 合并数组
let A = [1,2,3];
let B = [3,4,5,6];

// console.log( A.concat(B) ) // es5
console.log( [...A,...B] ) // es6
```

- 接受数组剩余元素

```JavaScript
// 使用...将剩余元素都收集起来
let persons = ['猪爸爸','猪妈妈','佩奇','乔治'];
let [father,monther,...sons] = persons
console.log(father) // '猪爸爸'
console.log(monther) // '猪妈妈'
console.log(sons) // ['佩奇', '乔治']
```

# 箭头函数

相比于es5定义的函数更加简洁！

```JavaScript
// 函数定义
function sum1(n1,n2){
  return n1 + n2;
}

// 函数表达式
let sum2 = function(n1,n2){
  return n1 + n2;
}

// 箭头函数： () => {}
let sum3 = (n1,n2) => {
  return n1 + n2;
}

// 代码体{}内只有一行时可省略{}和return
let sum4 = (n1,n2) => n1 + n2
console.log( sum4(10,20) ); // 30


// 对象中箭头函数
let obj = {
  name: "小罗",
  getName:()=>{
    console.log('my name is 小罗')
  }
}

obj.getName()


```

## 箭头函数和普通函数的区别

- 而箭头函数中是没有this,会把this当做一个普通的变量，会去其所在的父级上下文中寻找

- 箭头函数中没有arguments(伪数组)。 用剩余参数`...args`可以替代。 args是一个真数组。

- 箭头函数不能new 操作。因为没有构造器 constructor

```JavaScript
      // 1. 没有构造器constructor,不能new操作
      //   const Person = () => {}
      //   new Person()

      //   ...扩展(展开)运算符
      // 2. 箭头函数没有arguments,可用...args来代替
      const sum = (...args) => {
        console.log(args)
      }

      sum(2, 3, 4, 5)

      //   3. 箭头函数中没有this，会把this当做普通变量，去找最近父级上下文中的this
      const obj = {
        name: '张三',
        age: '18',
        // 普通函数(简写而已)
        getName() {
          console.log(this.name)
        },
        // 箭头函数
        getAge: () => {
            // this 指向window对象
          console.log(this.age)
        },
      }

      obj.getName() // 张三
      obj.getAge() // undefined
```

注意：

- 如果不关心函数内部的this指向，可以使用箭头函数。

- 要考虑this指向，则还是用普通函数

# 可选链运算符

**可选链运算符**（**?.**）可以读取对象深层的属性值，可省去多余的判断步骤。

```JavaScript
const user = {
  	name: '张三',
    address: {
       city:'深圳',
       area:'地球村'
    },
}
console.log(user?.address?.city) // '深圳' 
```

# class声明类

> js没有class类的概念，但是在其他语言中如java、php都是有的。

es5中只能通过构造函数和原型对象结合的方式来模拟类的效果

es6可以直接使用class来定义一个类

- es5来实现构造函数(器)

```JavaScript

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function(){
    console.log(`my name is ${this.name}`)
}

Person.prototype.setName = function(newName){
    this.name = newName
}

```

- es6 通过class来模拟一个类（构造函数）

```JavaScript

    class Person {
        // 构造函数，用于初始化操作,new的时候会立即执行
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        getName() {
            console.log(`my name is ${this.name}`)
        }

        setName(newName){
            this.name = newName
        }
    }

    let p1 = new Person('小罗', 18)
    // p1.setName('小康')
    p1.getName()

```

> 注意： es6中的class其本质也是es5构造函数和原型对象的语法糖形式（简写形式）

# extends继承

```JavaScript
// 父类
class Animal {
    constructor(name) {
        this.name = name
    }

    drink() {
        console.log(this.name + '在喝水')
    }
}

// 子类 exntends 父类
class Dog extends Animal {
    constructor(name, age) {
        // 必须执行父类的构造函数
        super(name)
        this.age = age
    }

    eat() {
        console.log(this.name + '在吃骨头')
    }
}

const dog = new Dog('来福', 8)
dog.eat()
dog.drink()
```

# 静态属性和静态方法

- 成员（实例）属性：对象自身空间中有的属性，我们称之为实例属性。

- 静态属性/方法：由类名的设置的属性和方法。作用：一般用来实现一些辅助功能。

    > 静态属性/方法不属于对象的，所以不能通过对象操作。仅能由类名（构造函数名）操作

## es6中的静态属性和静态方法

```JavaScript
// es6 class关键字
class Person {
    constructor(name) {
        this.name = name
    }

    // 静态属性
    static abc = '静态属性abc'
    // 静态方法
    static test() {
        console.log('test静态函数')
    }
}

// 静态属性只能由类名去访问或设置，不能通过对象去操作
Person.def = '静态属性def'
Person.xyz = function () {
    console.log('静态方法xyz')
}


const obj = new Person('张三')
console.log(Person.abc)
console.log(Person.def)

//  作用：通过静态函数实现一些辅助函数
Person.isArray = function (data) {
    return Array.isArray(data)
}

console.log(Person.isArray([])) // true
```

- 像数组的Array.isArray和Array.from也是属于静态方法。

- 如数组的push、pop等都是属于实例方法，即只能通过数组对象才可以调用

## es5中的静态属性和静态方法

```JavaScript
 // Person是构造函数的名字
function Person(name){
    this.name = name;
}

// 添加静态属性
Person.version = '1.0.0';
// 添加静态方法
Person.getInfo = function(){
    console.log('我是静态方法getInfo')
}

// 静态的属性或方法只能用构造函数名去调用
console.log(Person.version)
Person.getInfo();
```

# 对象中setter和getter

可实现对对象属性的劫持

```JavaScript
let name = '张三'
let obj = {
  name,
  get name() {
      // 获取name的时候触发
    console.log('get name')
  },
  set name(newName) {
      // 设置name的时候触发
    console.log('set name', newName)
  },
}

obj.name // 触发 getter
obj.name = '456' // 触发setter

```

# Object 常用的方法

## Object.keys()和Object.values()

- Object.keys(): 返回对象的所有的key到一个数组中。但不含symbol的key

- Object.values()：返回对象的所有value到一个数组中

```JavaScript
var obj = {
  name: '张三',
  age: '18',
}
console.log(Object.keys(obj)) // ['name', 'age']
console.log(Object.values(obj)) // ['张三', '18']
```

## Object.assign()

- Object.assign(target,source):  将源对象身上中的属性复制到目标对象中，若有同名属性，将会覆盖目标对象。此方法返回修改后的目标对象

```JavaScript
const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }

const returnedTarget = Object.assign(target, source)

console.log(target) // { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target) // true 
```

作用：可以合并默认参数

```JavaScript
// 需求：对指定的url地址发起get或post请求,
function request(data) {
   // 默认参数
   const defaultParams = {
       type: 'get', // 默认发起get请求
   }
   // 将data传进来的参数和默认参数进行一个合并
   const params = Object.assign(defaultParams, data)

   console.log(`对地址${params.url}发了一个${params.type}请求`)
}

request({ url: 'http://123.23.11.9/' })
request({ type: 'post', url: 'http://103.21.11.9/' })
```

## Object.create()

- Object.create()： 用于创建一个新对象，使用现有的对象来作为新创建对象的原型

```JavaScript
const parentObj = {
    getName() {
        console.log('my name is ' + this.name)
    },
}
// 创建一个对象，且以parentObj作为其原型对象
const obj = Object.create(parentObj)

console.log(obj.__proto__)
obj.name = '李雪敏'
obj.getName()

//创建一个没有任何原型的对象，即非常干净的对象
const myObj = Object.create(null)
console.log(myObj)
```

## Object.is()

- Object.is()： 判断两个值是否为同一个值。

```JavaScript
console.log(+0 == -0) // true , 不一样的值，我们希望是false
console.log(null == undefined) // true, 不一样的值，我们希望是false
console.log(NaN == NaN) // false,一样的值，我们希望是true


// 所以 Object.is() 应运而生, 仅判断是一样的值即可。更符合我们思维方式
console.log(Object.is(+0, -0)) // false
console.log(Object.is(null, undefined)) // false
console.log(Object.is(NaN, NaN)) // true
```

## Object.defineProperty()

- Object.defineProperty()：给对象添加或修改属性，对属性可以有更加细粒度的控制。如控制是否可以被枚举、删除、修改等操作，此方法返回修改后的对象

属性相关的描述配置：

```JavaScript
const person = {
  name: "大锤",
}
// 给对象添加一个age属性
Object.defineProperty(person,'age',{
  // 数据描述符
  value:18, // 设置默认值
  enumerable: true,   // 控制属性是否可以枚举(for...in、Object.keys )出来，默认值是false
  writable: true,     // 控制属性是否可以被修改，默认值是false
  configurable: true, // 控制属性是否可以被删除，默认值是false
})
```

对属性getter和setter进行拦截描述配置。

```JavaScript
      // Object.defineProperty()：给对象添加或修改属性，
      // 对属性可以有更加细粒度的控制。如控制是否可以被枚举、删除、修改等操作，此方法返回修改后的对象
      const person = { name: '英英' }

      let age = 20
      // 给对象person添加一个age属性。
      Object.defineProperty(person, 'age', {
        // 存取描述符
        enumerable: true, // 是否可以枚举（for-in,Object,keys()）
        get() {
          console.log('getter')
          return age
        },
        set(newAge) {
          console.log('setter：', newAge)
          age = newAge
        },
      })

      console.log(person.age) // 触发getter

      person.age = 21 // 触发setter
      console.log(person.age)
    </script>
```

注意，上面对属性设置的描述可以分为两大类：

||configurable|enumerable|value|writable|get|set|
|-|-|-|-|-|-|-|
|数据描述符|可以|可以|可以|可以|不可以|不可以|
|存取描述符|可以|可以|不可以|不可以|可以|可以|

> 通过defineProperty设置symbol属性同样也是无法被枚举的，只能通过Object.getOwnPropertySymbols去获取

# 迭代器iterator[理解即可]

> 迭代器（Iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要实现了 Iterator 接口，就可以通过for-of实现遍历操作。

一句话：可以让不支持遍历的数据结构 -》 可遍历

原生具备iterator接口的数据(即都可用for of遍历)

- Array

- Arguments

- Set

- Map

- String

- NodeList

- ....

以字符串、数组作为示例：

```JavaScript
let str = 'abc'
for (let item of str) {
    console.log(item)
}

const arr = ['西瓜', '菠萝', '草莓']
for(let item of arr){
    console.log(item);
}
```

数组也一样：

```JavaScript
const array = [1, 2, 3]

// 获取数组的迭代器对象
const iterator = array[Symbol.iterator]()
console.log(iterator.next()) // {value: 1, done: false}   value代表值，done是否获取完成
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 3, done: false}
console.log(iterator.next()) // {value: undefined, done: true}

```

`next`一次仅能获取一次值。要获取所有则可以用for-of来进行迭代

**迭代器工作原理：**

```Plain Text
  1.  创建一个指针对象，指向当前数据结构的起始位置
  2.  第一次调用对象的next方法，指针自动指向数据结构的第一个成员
  3.  接下来不断调用next方法，指针一直往后移动，直到指向最后一个成员
  4.  每调用next方法返回一个包含value和done属性的对象
```

**迭代器应用场景：需要自定义遍历数据的时候，就要自定义迭代器**

协议

- 可迭代协议： Symbol.iterator  其值是一个函数

    ```Plain Text
    - 必许有这个协议属性。 如 变量名[Symbol.iterator]
    ```

- 迭代器协议：

    ```Plain Text
    - 必须返回一个对象
    - 返回的对象要有next方法
    - next方法也要返回一个对象，并且有value 和 done两个属性
    
    形如：
    return {
        next(){
            return {
                value:xxx,	// value当前迭代的值
                done:boolean // true 遍历完毕， false 没有遍历完毕，可继续遍历
            }
        }
    }
    ```

## 自定义遍历数据【了解】

**迭代器应用场景：需要自定义遍历数据的时候，就要想到迭代器**

需求：重写数组迭代器，用于迭代下标为偶数的元素

```JavaScript
      const users = ['苹果', '榴莲', '车厘子', '香蕉', '梨子']

      //   重写user数组的迭代器接口
      users[Symbol.iterator] = function () {
        let i = 0
        return {
          next: () => {
            // 2 * i++：取偶数下标
            let value = this[2 * i++]
            return {
              value, // value当前迭代的值
              done: value ? false : true, // true 迭代完毕， false 没有迭代完毕，
            }
          },
        }
      }

      const iterator = users[Symbol.iterator]()
      //   console.log(iterator.next())
      //   console.log(iterator.next())
      //   console.log(iterator.next())
      //   console.log(iterator.next())
      //   console.log(iterator.next())
      //   console.log(iterator.next())

      for (let item of users) {
        console.log(item)
      }
```

# 汇总常用的循环技巧

```Plain Text
    <script>
      // 1. for/while/do-while循环： 作用：循环数组、字符串
      // 2. for-in: 循环对象可枚举的属性，不包含Symbol。
      // 3. forEach: 循环数组和部分伪数组（querySelectorAll）
      // 4. map/filter/reduce/some/every/find/findIndex:用于数组
      // 5. for-of: 用来迭代具有实现迭代器（Symbol.iterator）接口的对象
```

# 数组的find和findIndex

- find: 返回数组中第一个满足指定条件的元素

- findIndex： 返回数组中第一个满足指定条件的元素下标

```JavaScript
     const users = ['秀儿', '丽丽', '雨雨', '吓吓', '丽丽']

      let user = '丽丽'

      // find找符合第一个条件的元素
      let result = users.find((item) => item === user)
      // findIndex找符合第一个条件的元素下标
      let index = users.findIndex((item) => item === user)
      console.log(result)
      console.log(index)

      // 以下两个方法仅用于基本数据类型的判断
      console.log(users.indexOf(user))
      console.log(users.indexOf('英英'))

      console.log(users.includes(user))
      console.log(users.includes('英英'))

      // 判断对象某个属性得用find或者是findIndex
      const arr = [
        { id: 1, name: '刘建新' },
        { id: 2, name: '陈鹏宇' },
        { id: 3, name: '文理东' },
      ]

      let result2 = arr.find(function (item) {
        return item.name === '文理东'
      })

      console.log(result2)

      let index2 = arr.findIndex(function (item) {
        return item.name === '文理东'
      })

      console.log(index2)
```

# 伪数组和真数组

- 伪数组（likeArray）：和真数组差不多，可以通过下标索引取值，也有`length`属性，但不能调用真数组的方法如push。如 arguments，getElementsByTagName,querySelectorAll等返回都是伪数组。

```JavaScript
const obj = {
  0: 'apple',
  1: 'orange',
  2: 'banana',
  length: 3,
}
console.log(obj[1]) // 'orange'

for (let i = 0; i < obj.length; i++) {
  console.log(obj[i])
}
//obj.push('pear')// 报错,因为push是真数组方法
```

## 伪数组转真数组

```JavaScript
function sum() {
    console.log(arguments)
    // 方式1：伪数组转成真数组(要求伪数组具有迭代器接口(Symbol.iterator))
    // const args = [...arguments]
    // 方式2：
    // const args = Array.from(arguments)
    // 方式3：
    // const args = Array.prototype.slice.call(arguments)
    const args = [].slice.call(arguments)
    args.push(4)
    console.log(args)
}

sum(1, 2, 3)
```

# Set 集合

ES6 提供了新的数据结构 Set（集合）。它类似于数组，但成员的值都是唯一的，集合实现了iterator接口，所以可以使用『for…of…』进行遍历。

Set 中的元素是唯一的

```JavaScript
let s = new Set([1, 2, 3, 2])
console.log(s) // Set(3) { 1, 2, 3 }
```

Set 的属性和方法

- add 添加元素,支持链式操作

```JavaScript
s.add(5);
s.add(6).add(7);
```

- delete 删除

```JavaScript
s.delete(2);
```

- clear 清空

```JavaScript
s.clear()
```

- size 返回集合中唯一元素的个数

```JavaScript
s.size
```

- has 检查集合中是否包含某个元素，返回boolean

```JavaScript
s.has(2);
```

- set 的遍历

```JavaScript
// forEach
s.forEach(item=>{
    console.log(item);
})

// 实现了iterator接口 可以使用for of进行遍历
for(let item of s){
    console.log(item);
}
```

## set应用场景

将集合set转为数组：

```Plain Text
Array.from(set) // 或 [...set集合]
```

```JavaScript
// 实现数组去重
const arr = [1, 2, 3, 2, 3, 1]
// 思路：1.转成集合 2. 在转回数组
const newArr = [...new Set(arr)]
console.log(newArr)
```

## Set 和 数组区别

- Api不同

- Set元素不能重复

- Set是无序结构，操作很快。数组有序，操作慢

```JavaScript
// arr 数组有多慢
let arr = []
for (var i = 0; i < 1000000; i++) {
    arr[i] = i
}
console.time('arr 访问')
console.log(arr[10000])
console.timeEnd('arr 访问')

console.time('arr 头部插入')
arr.unshift('哈哈')
console.timeEnd('arr 头部插入')

// set 有多快
let myset = new Set()
for (var j = 0; j < 1000000; j++) {
    myset.add(j)
}
console.time('set 访问')
myset.has(10000)
console.timeEnd('set 访问')

console.time('set 插入')
myset.add('哈哈')
console.timeEnd('set 插入')
```

# Map映射

> ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

Map也实现了iterator接口，所以可以使用『扩展运算符』和『for…of…』进行遍历。

Map的属性和方法

- size    返回Map的元素个数

- set     增加一个新元素，返回当前Map

- get     返回键名对象的键值

- has     检测Map中是否包含某个元素，返回boolean值

- delete 函数对应key

- clear   清空集合，返回undefined

```JavaScript
const myMap = new Map();

// 将一个新元素添加到 Map 对象
myMap.set('a', 'a1')
myMap.set(1, '2').set(2,'3')
myMap.set({a:3}, '4');
console.log(myMap.get('a')); // 'a1'
console.log( myMap.size ) // 3
```

- map的遍历

```JavaScript
const map1 = new Map()
map1.set('a', 'a1')
map1.set('b', 'b2')

// for..of来迭代
for (var item of map1) {
  console.log(item)
}
// 或
console.log([...map1]) // [ [ 'a', 'a1' ], [ 'b', 'b2' ] ]


// 解构赋值
for (var [k, v] of map1) {
  console.log(k, v)
}
```

## Map 和 Object区别

- Map可以以任意类型数据作为key，而Object只能是string类型的key

- Map可以迭代（for-of），object不可以

- map是有序的，Object不能保证顺序

参考map和Object区别：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

```JavaScript
// map可以为任意类型为key
let m1 = new Map()
let obj = { a: '1' }
m1.set(obj, '2')
m1.set('b', '3')
console.log(m1)

// Map可以迭代
const map1 = new Map()
map1.set('a', 'a1')
map1.set('b', 'b2')
// ...来迭代
console.log([...map1]) // [ [ 'a', 'a1' ], [ 'b', 'b2' ] ]
// for..of来迭代
for (var item of map1) {
  console.log(item)
}
for (var [k, v] of map1) {
  console.log(k, v)
}

// object不可以迭代,会报错
const obj = { a: 'a1', b: 'b2' }
for (var item of obj) {
  console.log(item) // error obj is not iterable 不是迭代器
}
```

# 扩展的字符串函数

- padStart:开头填充字符串

- padEnd:末尾填充字符串

- startsWith:判断一个字符串是否以特定字符串开头，满足返回true,否则返回false

- endsWith:判断一个字符串是否以特定字符串结尾，满足返回true,否则返回false

- trim: 去除两边连续的空格

- trimStart: 去除开头连续的空格

- trimEnd: 去除结尾连续的空格

示例代码：

```JavaScript

console.log( "5".padStart(5,0) ) // '00005'
console.log( "5".padEnd(3,0) ) // '500'
console.log( "5".padEnd(3,'abc') ) // '5ab'

console.log( 'v-model'.startsWith('v-') ); // true
console.log( 'modelhtmltext'.startsWith('model') ); // true
console.log( 'modelhtmltext'.startsWith('html') ); // false

console.log( 'v-model'.endsWith('model') ); // true
console.log( 'modelhtmltext'.endsWith('html') ); // false

console.log( '  abc  ' ); // '  abc  '
console.log( '  abc  '.trim() ); // 'abc'
console.log( '  abc  '.trimStart() ); // 'abc  '
console.log( '  abc  '.trimEnd() ); // '  abc'
```

# 扩展的数值函数

- **Math.pow(n,m)**: 返回以n为底的m次方。

    > 或 n**m

- **Number.parseInt()**：返回转换值的整数部分

- **Number.parseFloat()**：返回转换值的浮点数部分

- **Number.isNaN()**：是否为NaN

- **Number.isInteger()**：是否为整数

- **Math.trunc()**：返回数值整数部分

```JavaScript
 // Math.pow(n,m): 返回以n为底的m次方。
console.log(Math.pow(2, 4)) // 16
//   或 n**m
console.log(2 ** 5) // 32
// - Number.parseInt()：提取的整数部分
let str = '123.45bc'
console.log(parseInt(str))
console.log(Number.parseInt(str))
// - Number.parseFloat()：提取的浮点数部分
console.log(parseFloat(str))
console.log(Number.parseFloat(str))
// - Number.isNaN()：是否为NaN
console.log(isNaN(5)) // false
console.log(isNaN(undefined++)) // true
console.log(Number.isNaN(undefined++)) // true

 //   是否为整数
console.log(Number.isInteger(134)) // true

//   Math.trunc()：返回数值整数部分
console.log(Math.trunc('123.45')) // 123
console.log(Number('123.45')) // 123.45
```

# 扩展的数组函数[重要]

常用的有： forEach、map、filter、every, some, find, findIndex，reduce。

上面方法特点：

1. 都是不可变方法

2. 除了forEach函数没有返回值，其他函数都有返回值。

每个函数的作用：

- forEach: 对数组中每个元素进行遍历，此方法没有返回值

- map: 对数组中每个元素进行加工处理，返回一个加工后的新数组

- filter:   对数组中的元素进行筛选，返回一个筛选后的新数组

- find: 返回数组中第一个满足指定条件的元素

- findIndex： 返回数组中第一个满足指定条件的元素下标

- every: 若数组中每个元素是否都满足指定的条件，才返回true,否则返回false 

- some: 若数组中只要有一个元素是否满足指定的条件，才返回true,否则返回false

- reduce: 连续操作器

```JavaScript

// forEach: 对数组中每个元素进行遍历，此方法没有返回值
let arr = [1,2,3,4] 
arr.forEach(function(item,index){
//     // item: 循环的数组元素, indexs:循环元素的索引
     console.log(item,index)
})

// map: 主要对数组中每个元素进行加工处理，返回一个新数组
let arr2 = [4,5,6];
let result1 = arr2.map((item,index)=>{
     return item*item; 
})
console.log(result1)


// filter:  对数组中的元素进行筛选，返回一个筛选后新数组 
// 返回真值，则留下，否则舍去
let arr3 = [6,7,8,9,10];
// 打印数组中的奇数
let result2 =  arr3.filter( item => item % 2 === 1 )
console.log(result2)

// every: 判断数组中每个元素是否都满足指定的条件，都符合才返回true,否则返回false
let arr4 = [4,5,6,7,8];
let result4 = arr8.every((item)=>{
  return item >= 3;
})
console.log(result4)

// some: 数组中的任意一个元素，只要满足指定的条件，则返回true,否则返回false
let arr5 = [4,5,6,7,8];
let result5 = arr9.some((item)=>{
  return item >= 5;
})
console.log(result5)

// find: 返回数组中满足条件的第一个元素
let students = [
  {name:"小罗",age:18},
  {name:"小里",age:28},
  {name:"小虎",age:38},
]

let stu = students.find( item =>{
  // 匹配满足条件的元素,匹配成功，会立即停止向后匹配
  return item.age === 28
})
console.log( stu )

// findIndex： 返回数组中满足条件的第一个元素下标
let stuIndex = students.findIndex( item =>{
  // 匹配满足条件的元素,匹配成功，会立即停止向后匹配
  return item.age === 28
})
console.log(stuIndex); // 1


```

## 链式操作

- 找出所有的女同学，并且添加score属性统计每个女同学他们所有科目的总分 ,数据如下：

```JavaScript
let students = [
        { name: '王宁', sex: '男', html: 80, css: 90, js: 80 },
        { name: '王慧', sex: '女', html: 88, css: 90, js: 80 },
        { name: '咏升', sex: '男', html: 84, css: 96, js: 59 },
        { name: '汪哥', sex: '男', html: 80, css: 90, js: 77 },
        { name: '黄骞', sex: '男', html: 40, css: 87, js: 96 },
        { name: '李雪敏', sex: '女', html: 80, css: 19, js: 80 },
  ]
```

## 数组交集、并集、差集

```JavaScript
// 取交集
let arr1 = [1,2,3, 4, 5]
let arr2 = [2, 6, 1, 3, 8, 9]
let result = arr1.filter( item => arr2.includes(item) )
console.log(result) // [1, 2, 3]

// 取并集
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [2, 6, 1, 3, 8, 9]
let result = [...new Set([...arr1, ...arr2])] // 合并去重
console.log(result) // [1, 2, 3, 4, 5, 6, 8, 9]

// 取差集 取arr1在arr2中的差集
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [2, 6, 1, 3, 8, 9]
let result = arr1.filter( item => !arr2.includes(item) )
console.log(result) // [4, 5]

```

## reduce函数（连续操作器）

- 语法

```Plain Text
arr.reduce(callback(accumulator, currentValue,[index],[array]), [initialValue])
```

callback四个参数：

- `accumulator 累计器`

- `currentValue 当前值`

- `currentIndex 可选，当前索引`

- `array 可选，源数组`

---

- `initialValue`可选，累加器函数初始值

reduce连续操作器特点：

- 若传了初始化值initval,则从数组下标0 开始循环

- 若没传初始化值initval,则将数组下标为0的值作为初始值，从下标1开始循环

- callback函数返回的累计器的值会作为下一次循环累计器的值，reduce函数最终会得到最后一次累计器的值

```JavaScript
// 未提供初始值initialValue -》下标1开始循环,数组的第0个元素作为result的初始值
var arr = [1,2,3,4];
var data = arr.reduce(function (result, item, index) {
    return result + item;
});

console.log(data) // 10
```

```JavaScript
// 提供初始值initialValue  -》下标0开始循环,则初始值100作为result的初始值
var arr = [1, 2, 3, 4];
var data = arr.reduce(function (result, item, index) {
    return result + item;
},100);

console.log(data) // 110
```

## flat扁平化数组

**flat()** ：实现数组扁平化。即将多维数组变为一维数组。

```JavaScript
flat(depth) // depth深度默认1， Infinity为任意深度
```

作用：扁平化嵌套数组

```JavaScript
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

# 扩充的正则功能

## 字符串matchAll函数

- matchAll: 返回正则匹配的所有结果及捕获组的迭代器。

    > matchAll要求正则必须有标识符g

```JavaScript
var str = 'gfdg13411112222fdgdg18944445555'

// 匹配手机号
var reg = /1[3-9]\d{5}\d{4}/gi

var itera = str.matchAll(reg)
// 迭代
for (var item of itera) {
  console.log(item)
}

// 或
console.log([...str.matchAll(reg)])
```

## 捕获组(分组)命名

就是给捕获组内容起个别名，方便引用

语法：在小括号前面添加`?<标识符>`

```Plain Text
(?<标识符>)
```

如：获取手机号前三位和后四位

```JavaScript
var reg = /(?<first>1[3-9]\d)\d{4}(?<after>\d{4})/gi
var itera = str.matchAll(reg)
console.log([...str.matchAll(reg)])
```

## 正则非捕获组

捕获组特点：捕获匹配的内容会放置到正则缓冲区中，便于程序后面进行反向引用。

- 为什么要使用捕获组（分组）

    - 为了当做整体去匹配  /(1\d){5}/,即把`1\d`当做一个整体去匹配

    - 为了反向引用

如果仅仅只是为了当做一个整体去匹配，并不需要反向引用，我们可以采用非捕获组进行优化。意味后续也就不可以反向引用了。

```Plain Text
(?:)
```

匹配邮箱：

```JavaScript
// 邮箱正则
// 634563456@qq.com  gsdgfs_gdg@gmail.com  gsdfgs545@163.cn  wangwei@atguigu.cn
// gsdfgs@yoo.com.cn
var reg = /^\w+@(?:[0-9a-z]+\.)+[a-zA-Z]{2,6}$/i

console.log(reg.test('634563456@qq.com'))
console.log(reg.test('gsdgfs_gdg@gmail.com'))
console.log(reg.test('gsdfgs545@163.cn'))
console.log(reg.test('wangwe@iatguigu.cn'))
console.log(reg.test('gsdfgs@yoo.com.cn'))
```

正则图形化工具：[https://regexper.com/，便于理解正则，更加直观，形象！](https://regexper.com/，便于理解正则，更加直观，形象！)

# 解决深拷贝中的互相引用问题

为什么要深拷贝，到底解决了什么问题？

答：避免影响原对象数据。

互相引用：一个或多个对象中某个属性互相引用

如：

- 对象自身引用

```JavaScript
var obj = { a: 1, b: 2 }
obj.a = obj
console.log(obj);
```

- 对象互相引用

```JavaScript
var obj1 = { a: 1 }
var obj2 = { b: 1 }

obj2.c = obj1
obj1.d = obj2

console.log(obj1);
console.log(obj2);
```

在递归深拷贝中，如果对象中存在互相引用的问题，会导致递归无法停止，从而导致调用栈溢出。

> 报错信息：Maximum call stack size exceeded  超过调用栈大小

解决办法：

- 通过创建一个map容器，作为缓存使用，每次递归时，将新对象存入进去。

- 再次进入递归时判断缓存中是否已经存在的对象，存在则返回，这样避免进入死递归。

```JavaScript
        function cloneDeep(target, cacheMap = new Map()) {
            if (typeof target !== 'object') {
                return target
            }
            // 判断map缓存中是否有，有则返回
            if (cacheMap.has(target)) {
                return cacheMap.get(target)
            }
            var data = Array.isArray(target) ? [] : {}
            // 将拷贝的对象作为key,data作为value存入缓存中，便于后续的判断
            cacheMap.set(target, data)
            
            if (Array.isArray(target)) {
                // 数组
                for (var i = 0; i < target.length; i++) {
                    data.push(cloneDeep(target[i], cacheMap)) // 递归调用 
                }
            } else {
                // 对象
                for (var k in target) {
                    data[k] = cloneDeep(target[k], cacheMap) // 递归调用
                }
            }
            
            return data
        }

        var obj1 = { name: '王磊', hobby: ['打球', '按摩'], a: [1, 2] }


        // 互相引用
        obj1.hobby.push(obj1.a)
        obj1.a.push(obj1.hobby)

        // 深拷贝
        var obj2 = cloneDeep(obj1)

        obj2.hobby.push('敲代码')

        console.log(obj1);
        console.log(obj2);
```

数据结构和和算法的图形化（毕业后再看）：[https://visualgo.net/zh/](https://visualgo.net/zh/)

## 扩展Vue源码缓存函数

```Plain Text
/**
       * 对一个具有单参数的函数的结果进行缓存
       * {参数值1：结果1，参数值2：结果1}
       *
       * {ABC:'Abc',def:'Def'}
       */
      function cached(fn) {
        var cache = Object.create(null)
        return function (str) {
          var hit = cache[str]
          return hit || (cache[str] = fn(str))
        }
      }

      // 封装一个函数：将首字母大写，其他都小写
      function UpperStr(str) {
        console.log('自己函数执行了')
        str = str.toLowerCase()
        return str.charAt(0).toUpperCase() + str.substring(1)
      }

      // 得到一个UpperStr的函数缓存版本
      const CacheUpperStr = cached(UpperStr)

      console.log(CacheUpperStr('0')) // Abc
      console.log(CacheUpperStr('ABC')) // Abc
      console.log(CacheUpperStr('constructor')) // 'Constructor'
```

闭包应用场景：

- 防抖

- 节流

- 一次性函数

- 缓存函数

