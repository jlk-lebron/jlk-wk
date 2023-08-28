---
title: 高阶组件和renderprops
date: 2023-08-19 16:55:45
permalink: /pages/2bb24a/
categories:
  - React
  - 基础
tags:
  -
---
# HOC 和 renderprops

## 组件中代码复用的问题

组件化开发之后,整个页面都是由组件组成. 不同的组件结构是有区别的,但是 state 和逻辑可能会出现大量相同的代码,这时,我们就希望将这些冗余代码封装起来.

以下面案例为例: 两个组件(Login 和 Registe)中存在着相同的状态和逻辑

- App 组件

  ```JavaScript
  import React, { Component } from 'react'
  import Login from './pages/Login'
  import Register from './pages/Register'

  export default class App extends Component {
    render() {
      return (
        <div>
          <h1>App</h1>
          <Login></Login>
          <Register></Register>
        </div>
      )
    }
  }
  ```
- Login 组件

  Login 组件中使用受控组件的方式,将表单元素的值存储在 state 里面

  ```JavaScript
  import React, { Component } from 'react'

  export default class Login extends Component {
    state = {
      username: '',
      password: '',
    }

    handleChange = (name) => {
      return (e) => {
        this.setState({
          [name]: e.target.value,
        })
      }
    }
    render() {
      return (
        <div>
          <h1>登录</h1>
          <form>
            用户名:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
            <br />
            密码:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
            <br />
            <input type="button" value="登录" />
          </form>
        </div>
      )
    }
  }
  ```
- Register 组件

  > Register 组件中同样使用受控组件的方式,将表单元素的值存储在 state 里面
  >

  ```JavaScript
  import React, { Component } from 'react'

  export default class Register extends Component {
    state = {
      username: '',
      password: '',
      repassword: '',
    }

    handleChange = (name) => {
      return (e) => {
        this.setState({
          [name]: e.target.value,
        })
      }
    }
    render() {
      return (
        <div>
          <h1>注册</h1>
          <form>
            用户名:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
            <br />
            密码:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
            <br />
            确认密码:
            <input
              type="password"
              value={this.state.repassword}
              onChange={this.handleChange('repassword')}
            />
            <br />
            <input type="button" value="注册" />
          </form>
        </div>
      )
    }
  }
  ```

这两个组件中存在着一些相同的代码,比如相同的 state,和相同的 change 事件处理函数. 也有不同的逻辑,比如注册按钮的逻辑和登录按钮的中请求的接口是不同的. 我们需要将相同的代码封装起来

这时,你可能会想到,将 Login 和 Register 中相同的 state 和 change 事件处理函数,定义在 App 中,将 state 和 change 事件处理函数以 props 的形式传递 Login 和 Register 组件.

- App 组件

  ```JavaScript
  import React, { Component } from 'react'
  import Login from './pages/Login'
  import Register from './pages/Register'

  export default class App extends Component {
    state = {
      username: '',
      password: '',
      repassword: '',
    }

    handleChange = (name) => {
      return (e) => {
        this.setState({
          [name]: e.target.value,
        })
      }
    }
    render() {
      const { username, password, repassword } = this.state
      return (
        <div>
          <h1>App</h1>
          <Login
            username={username}
            password={password}
            handleChange={this.handleChange}
          ></Login>
          <Register
            username={username}
            password={password}
            repassword={repassword}
            handleChange={this.handleChange}
          ></Register>
        </div>
      )
    }
  }
  ```
- Login 组件

  ```JavaScript
  import React, { Component } from 'react'
  export default class Login extends Component {
    render() {
      const { username, password, handleChange } = this.props
      return (
        <div>
          <h1>登录</h1>
          <form>
            用户名:
            <input
              type="text"
              value={username}
              onChange={handleChange('username')}
            />
            <br />
            密码:
            <input
              type="password"
              value={password}
              onChange={handleChange('password')}
            />
            <br />
            <input type="button" value="登录" />
          </form>
        </div>
      )
    }
  }
  ```
- Register 组件

  ```JavaScript
  import React, { Component } from 'react'

  export default class Register extends Component {
    render() {
      const { username, password, repassword, handleChange } = this.props
      return (
        <div>
          <h1>注册</h1>
          <form>
            用户名:
            <input
              type="text"
              value={username}
              onChange={handleChange('username')}
            />
            <br />
            密码:
            <input
              type="password"
              value={password}
              onChange={handleChange('password')}
            />
            <br />
            确认密码:
            <input
              type="password"
              value={repassword}
              onChange={handleChange('repassword')}
            />
            <br />
            <input type="button" value="注册" />
          </form>
        </div>
      )
    }
  }
  ```

这样写完,看起来,我们解决了问题.将 Login 和 Register 中相同的 state 和函数,定义在 App 中只定义了一次. 但是实际使用时却有问题

这样写代码,Login 和 Register 使用的是同一份 state 数据,所以,当我们在 Login 中输入用户名或密码时,Register 的文本框中会出现同样的内容

![](import/images/l&r.png)

虽然这样的处理方式有问题,但是也给了我们新的灵感. 如果我们定义一个公共组件,在公共组件中定义相同的状态和逻辑, 给每一个需要使用这些状态和逻辑的组件,创建一个对应的公共组件实例. 这样每一个公共组件实例拥有一份独立数据,数据就不会冲突了

![](import/images/common.png)

HOC 和 renderProps 就是基于这样的原理,指导我们如何书写代码. 需要注意, HOC 和 renderProps 并不是 React 中提供的新的 API.而是基于之前学习的组件化开发技术的编程技巧. 下面我们就依次介绍 HOC 和 renderProps 是如何实现的

## 高阶组件(HOC)

> HOC (High Order Component) 高阶组件

- Common 组件

  ```JavaScript
  import React, { Component } from 'react'
  // 先定义一个函数,函数的返回值,才是真正的Common组件. 定义这个函数的目的是为了动态的接收需要数据和逻辑的子组件
  //WrappedComponent 用来接收Login或Register组件,因为接收的是组件,并且需要在Common中实例化这些组件,所以形参的首字母大写
  export default function (WrappedComponent) {
    return class Common extends Component {
      // 在Common组件中定义公共的状态和逻辑
      state = {
        username: '',
        password: '',
        repassword: '',
      }

      handleChange =>(name) => {
        return (e) => {
          this.setState({
            [name]: e.target.value,
          })
        }
      }
      render() {
        const { username, password, repassword } = this.state
        return (
          <WrappedComponent
            username={username}
            password={password}
            repassword={repassword}
            handleChange={this.handleChange}
          ></WrappedComponent>
        )
      }
    }
  }

  ```
- App 组件

  ```JavaScript
  import React, { Component } from 'react'
  import Login from './pages/Login'
  import Register from './pages/Register'
  import withCommon from './Common'
  // 一般HOC技术返回的函数名以with开头,小驼峰命名
  const WithLogin = withCommon(Login) // WithLogin 其实就是Common组件实例
  const WithRegister = withCommon(Register) // WithRegister 也是Common组件实例
  export default class App extends Component {
    render() {
      return (
        <div>
          <h1>高阶组件</h1>
          <WithLogin></WithLogin>
          <WithRegister></WithRegister>
        </div>
      )
    }
  }
  ```
- Login 组件

  ```JavaScript
  import React, { Component } from 'react'

  export default class Login extends Component {
    render() {
      const { username, password, handleChange } = this.props
      return (
        <div>
          <h1>登录</h1>
          <form>
            用户名:
            <input
              type="text"
              value={username}
              onChange={handleChange('username')}
            />
            <br />
            密码:
            <input
              type="password"
              value={password}
              onChange={handleChange('password')}
            />
            <br />
            <input type="button" value="登录" />
          </form>
        </div>
      )
    }
  }
  ```
- Register 组件

  ```JavaScript
  import React, { Component } from 'react'

  export default class Register extends Component {
    render() {
      const { username, password, repassword, handleChange } = this.props
      return (
        <div>
          <h1>注册</h1>
          <form>
            用户名:
            <input
              type="text"
              value={username}
              onChange={handleChange('username')}
            />
            <br />
            密码:
            <input
              type="password"
              value={password}
              onChange={handleChange('password')}
            />
            <br />
            确认密码:
            <input
              type="password"
              value={repassword}
              onChange={handleChange('repassword')}
            />
            <br />
            <input type="button" value="注册" />
          </form>
        </div>
      )
    }
  }
  ```

### 高阶组件需要注意的问题

- 传递 props 的问题

  ```JavaScript
  export default class App extends Component {
    render() {
      return (
        <div>
          <h1>高阶组件</h1>
          {/* 需求: 在App中将数据传递给Login组件*/}

          {/* WithLogin 其实是Common组件, 所以test数据并没有直接传递给Login组件,而是传递给了Common组件*/}
          <WithLogin test={'测试字符串'}></WithLogin>
          <WithRegister></WithRegister>
        </div>
      )
    }
  }
  ```

  解决办法:

  ```Plain
  // Common.js
  render() {
        return (
          <WrappedComponent
            {...this.state}
  		  // 我们无法确定传递过来的是什么数据,所以将传递给Common的props数据,直接继续传递下去就可以了
  	      {...this.props}
            handleChange={this.handleChange}
          ></WrappedComponent>
        )
   }
  ```
- React 调试工具中显示问题

  > 真正的 state 数据是存储在 Common 组件的实例中的. 所以如果需要查看 Login 或 Register 的 state 数据,要找的应该是 Common 组件. 组件多的情况下,需要先查找 Common 子组件是谁,才知道对应的数据,存储在哪个 Common 组件中. 我们可以通过自定义 react 调试工具中组件的显示名称来解决这个问题
  >

  ![](import/images/rdt.png)

  **解决方式:**

  默认情况下, react 调试工具展示的是组件定义时的名称. 而组件的名称是存储在组件的静态属性 name 上面的

  可以给组件添加静态属性 displayName. react 调试工具优先显示 displayName 属性的值,没有 displayName 才展示 name 属性的值

  ```JavaScript
  export defualt function(WrappedComponent){
    return class Common extends Component {
        static displayName = 'with'+ WrappedComponent.name
        // ... 下面代码忽略
    }
  }
  ```

  ![](import/images/rdt_d.png)

<!-- - 高阶组件在使用时,也可以使用 es7 的装饰器语法.这样写更简单.但是要先保证你的当前环境中支持这种语法(可以通过配置 webpack 实现)

  ```js
  import Common from '../Common'
  @Common
  export default class Login extends Component {
    render() {
     	... 忽略代码
    }
  }
  ```

  ```js
  //App组件中
  import React, { Component } from 'react'
  // 这里引入Login和Register其实不是真正的Login和Register组件,是通过装饰器语法得到的Common组件
  import Login from './pages/Login'
  import Register from './pages/Register'

  export default class App extends Component {
    render() {
      return (
        <div>
          <h1>高阶组件</h1>
          <Login></Login>
          <Register></Register>
        </div>
      )
    }
  }
  ``` -->


## renderprops

> renderprops 的原理和 HOC 一样,只是具体的实现方式不同而已

- Common 组件

  ```JavaScript
  import { Component } from 'react'
  // 直接定义并导出Conmon组件, Common的子组件通过props.render接收
  export default class Common extends Component {
    state = {
      username: '',
      password: '',
      repassword: '',
    }

    handleChange = (name) => {
      return (e) => {
        this.setState({
          [name]: e.target.value,
        })
      }
    }
    render() {
      // this.props.render()的返回值就是Login或Register组件
      return this.props.render(this.state, this.handleChange)
    }
  }
  ```
- App 组件

  ```JavaScript
  import React, { Component } from 'react'
  import Login from './pages/Login'
  import Register from './pages/Register'
  import Common from './Common'

  export default class App extends Component {
    render() {
      return (
        <div>
          <h1>高阶组件</h1>
          {/* 
          直接使用Common组件,给Common添加render属性,值为函数,函数的返回值Login组件实例 
          所以在Common中 通过this.props.render可以获取到这里的render指向的函数
          this.props.render()的返回值就是Login组件,让Login和Common形成了子父关系
          再利用调用render时传递的实参,将state和事件处理函数传递到render指向的函数形参
          最后通过props传递给Login组件
          */}

          <Common
            render={(state, handleChange) => {
              return <Login {...state} handleChange={handleChange}></Login>
            }}
          ></Common>
          <Common
            render={(state, handleChange) => {
              return (
                <Register {...state} handleChange={handleChange}></Register>
              )
            }}
          ></Common>
        </div>
      )
    }
  }
  ```
  也可以利用 props.children 实现

  ```JavaScript
  ;<Common>
    {(state, handleChange) => (
      <Login {...state} handleChange={handleChange}></Login>
    )}
  </Common>

  // 对应的在Common组件中
  this.props.children(this.state, this.handleChange)
  ```
