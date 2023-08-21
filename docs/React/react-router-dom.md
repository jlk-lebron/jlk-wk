---
title: react-router-dom
date: 2023-08-19 16:55:45
permalink: /pages/91cc90/
categories:
  - React
tags:
  - 
---
# 单页面应用

单页面应用（single page web application，SPA），就是只有一张 Web 页面的应用，整个 web 应用只加载一个 HTML 页面并在用户与应用程序交互时动态更新该页面的 Web 应用程序。

## 单页面应用的优势和缺陷

- 优点

    1. 用户体验好. 切换页面不需要再次请求服务器获取页面,页面加载速度更快

    2. 减轻服务器压力. 因为只有一个 web 页面,视图切换时,不会再次向服务器发起请求

- 缺点

    1. 不利于 SEO. 因为所有的页面都在一个 web 页面中动态展示,SEO 效果不如静态页面

    2. 第一次加载耗时长. 整个应用的所有页面都写在一个 web 页面中,包裹 js 和 css 都打包成一个文件.第一次加载时就需要更长的时间

## 单页面应用原理

在单页 Web 应用程序中，当浏览器向服务器发出第一个请求时，服务器会发回 index.html 文件. 用户需要切换页面时,会改变浏览器地址的路径(但不发送请求). 路径发生变化之后,根据之前配置好的前端路由规则,找到与当前路径匹配的视图,让其视图展示.其他视图隐藏. 展示视图需要渲染的数据,通过 ajax 获取.然后在前端渲染

![](import/images/spa.png)

## 实现单页面应用要处理的三个问题

1. 定义路径和视图的一一对应规则(前端路由)

2. 监听浏览器地址栏路径的变化

3. 当路径变化,根据前端路由找到对应的视图并展示,其他视图不展示(在 react 中每一个页面视图都是一个组件)

# react-router 使用

> react-router 提供了三个包:

    - react-router 核心包

    - react-router-dom web 单页面应用使用的包,包含 react-router 核心包(我们下载并使用这个包)

    - react-router-native 原生 app 单页面应用使用的包,包含 react-router 核心包

## 基本使用

1. 下包

    ```JavaScript
      npm i react-router-dom
    ```

1. 在入口文件中使用`BrowserRouter`包裹整个应用结构

    > `<BrowserRouter>`包裹整个应用,只需要使用一次。

    ```Plain Text
    // index.js
    import * as React from 'react'
    import * as ReactDOM from 'react-dom/client'
    import { BrowserRouter } from 'react-router-dom'
    
    ReactDOM.createRoot(document.getELementById('root')).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
      )
    ```

1. 在根组件中配置前端路由规则:

    > `<Route>` 用于配置前端路由规则

    ```JavaScript
    import { Routes, Route } from 'react-router-dom'
    function App() {
      return (
        <>
          {/* Route必须被Routes包裹 */}
          {/* Route写在哪里,则Route对应的组件就渲染在哪里(这一点只针对一级路由) */}
          <Routes>
            {/* path属性用于定义路径  element属性用于定义当前路径所对应的组件 */}
            <Route path="/login" element={<Login />}></Route>
            {/* path也可以忽略 /  */}
            <Route path="home" element={<Home />}></Route>
            {/*Route 也可以不写element. 入按照下面的方式定义,则展示Demo组件的路径为: /users/xxx */}
            <Route path="users">
              <Route path="xxx" element={<Demo />} />
            </Route>
          </Routes>
        </>
      )
    }
    ```

`<Routes>` 每当路径发生变化时,都会查看其所有子 `<Route>` 元素以找到最佳匹配并呈现 UI

1. 利用 Link 组件定义导航按钮

    > 作用: 修改浏览器的地址栏路径,并且不发送请求(最终渲染的是 a 标签)

    ```JavaScript
    import { Link } from 'react-router-dom'
    
    function Test() {
      return (
        <div>
          <Link to="/home">点击展示home页面</Link>
        </div>
      )
    }
    ```

## 嵌套路由

![嵌套路由](import/images/router_demo.gif)

```Plain Text
// App.js
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
// 路由组件推荐使用懒加载的方式引入
const Home = React.lazy(()=>import('./pages/Home'))
const Login = React.lazy(()=>import('./pages/Login'))
const Test1 = React.lazy(()=>import('./pages/Test1'))
const Test2 = React.lazy(()=>import('./pages/Test2'))
import './App.css'
export default function App() {
  return (
    <>
      <div>
        <Link to="/home">首页</Link>
        <Link to="/login">登录页</Link>
        <hr />
      </div>
      <Routes>
        <Route path="/home" element={<Home />}>
          {/*Route里面的Route就是嵌套路由,Test1和Test2渲染在Home组件中*/}
          <Route path="/home/test1" element={<Test1 />}></Route>
          <Route path="/home/test2" element={<Test2 />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  )
}
```

```Plain Text
// Home.js
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ height: '100vh', backgroundColor: 'pink' }}>
      <h1>home</h1>
      <Link to="/home/test1">test1</Link> <br />
      <Link to="/home/test2">test2</Link>
      <hr />
      {/*Outlet组件决定了嵌套路由组件渲染的位置*/}
      <Outlet></Outlet>
    </div>
  )
}
```

# 编程式导航

> 通过运行代码导致的页面切换被叫做编程式导航

页面切换有两种场景:

1. 用户点击导航按钮

2. 程序运行到某个指定阶段自动切换页面(比如: 登录成功之后,页面自动切换到首页)

## 实现

> 引入`useNavigate`并调用,返回一个函数.执行返回的函数就可以实现编程式导航

```Plain Text
import { useNavigate } from 'react-router-dom'
export default function Test2() {
  const navigate = useNavigate()
  const handle = () => {
    //  navigate('目标页面的路径', {
    //   replace: true, // 是否开启替换历史记录 true为开启,默认值是false
    // })
    navigate('/login', {
      replace: true
    })

    // 或 navigate(-1) //类似于history.go()方法
  }
  return (
    <div>
      <h1>test2</h1>
      <button onClick={handle}>按钮</button>
    </div>
  )
}
```

# 路由传参

> 路由传参是值: 页面切换的时候,给目标页面传递数据

路由传参有三种方式:

1. 路由参数(数据在路径中,只能传递简单数据)

2. state(可以传递任何数据)

3. 查询字符串(不推荐)

## 路由传参

1. 定义路由参数

    ```JavaScript
    function App() {
      return (
        <Routes>
          {/*:id 为路由参数(必填), 可以配置多个*/}
          <Route path="about/:id" element={<About />}></Route>
    
          {/*:id 为可选路由参数 */}
          <Route path="about">
            <Route path=":id" element={<About />} />
            <Route path="" element={<About />} />
          </Route>
        </Routes>
      )
    }
    ```

1. 传递路由参数

    ```JavaScript
    // 切换页面的时候传递
    navigate('/about/1') //这个1就是路由参数
    <Link to="/about/2"></Link>
    <NavLink to="/about/3"></NavLink> //2 和 3 就是路由参数
    ```

1. 接收路由参数

    ```JavaScript
    // 在目标路由组件中接收
    import { useParams } from 'react-router-dom'
    // params 是一个对象,里面可以获取到路由参数具体的值
    const params = useParmas()
    console.log(params) // {id:1}
    ```

## state

1. 传递

    ```JavaScript
    <Link to="/目标路径" state={要传递数据}></Link>
    <NavLink to="/目标路径" state={要传递数据}></NavLink>
    navigate('/目标路径', {
     state: 要传递的数据
    })
    ```

1. 接收

    ```JavaScript
    import { useLocaiton } from 'react-router-dom'
    const location = useLocation()
    location.state //可以获取到数据
    ```

## 查询字符串

1. 传递

    ```JavaScript
    <Link to="/目标路径?name=zs&age=18" ></Link>
    <NavLink to="/目标路径?name=zs&age=18" ></NavLink>
    navigate('/目标路径?name=zs&age=18')
    ```

1. 接收

    ```JavaScript
    const [query, setQuery] = useSearchParams()
    // query是类似formdata对象,获取数据:query.get('name')
    console.log(query.get('name')) // zs
    // setQuery 可以修改地址栏查询字符串 setQuery("x=1&y=2")
    ```

# 通过路由表定义路由规则

实际开发中一般会使用`路由表`动态创建`Routes`和`Route`.

路由表其实就是一个数组,如下所示:

```JavaScript
const routes = [
  {
    path: 'home', //path 对应 Route的path
    element: <Home></Home>, //element 对应Route的element
    // children 对应 嵌套路由
    children: [
      {
        path: 'test1',
        element: <Test1></Test1>,
      },
      {
        path: 'test2',
        element: <Test2></Test2>,
      },
    ],
  },
  {
    path: 'about',
    children: [
      {
        path: ':id',
        element: <About></About>,
      },
      {
        path: '',
        element: <About></About>,
      },
    ],
  },
]
```

## useRoutes

调用 `useRoutes`,传入`路由表`,返回动态创建的 `Routes` 和 `Route`

```JavaScript
import { useRoutes } from 'react-router-dom'
import routes from './routes' //引入路由表
function App() {
  return <>{useRoutes(routes)}</>
}

// 上面的useRoutes返回的结果:
;<Routes>
  <Route path="home" element={<Home />}>
    <Route path="test1" element={<Test1 />}></Route>
    <Route path="test2" element={<Test2 />}></Route>
  </Route>
  <Route path="about" >
    <Route path=":id" element={<About />}>
    <Route path="" element={<About />}>
  </Route>
</Routes>
```

# 其他组件

## NavLink

> 作用: 与 Link 组件一样,但是可以快速实现导航高亮

```JavaScript
// 注意: 默认类名是active, 下面是自定义的style和类名
<NavLink
    to="login"
    style={({ isActive }) => {
        console.log('login', isActive)
        return isActive ? activeStyle : undefined
    }}>
        login
</NavLink>

<NavLink
    to="home"
    className={({ isActive }) => {
        console.log('home', isActive)
        return isActive ? 'base one' : 'base'
    }}>
        home
</NavLink>

// 注意:  默认,当Home的子组件匹配成功,Home的导航也会高亮.当NavLink上添加了end属性,则Home的子组件匹配成功的时候,Home的导航没有高亮效果
<NavLink
    to="home"
    end
	>
        home
</NavLink>
```

## Navigate

> 只要 Navigate 组件被解析,就会修改路径,切换视图

一般用来展示 404 页面

```JavaScript
useRoutes([
  {
    ...忽略,
  },
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
])
```

## HashRouter

> 作用与 BrowserRouter 一样,但是修改的是地址栏的 hash 值.

# 案例

![案例](import/images/rdemo.gif)

