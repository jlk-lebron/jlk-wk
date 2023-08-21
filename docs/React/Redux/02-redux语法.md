---
title: 02-redux语法
date: 2023-08-19 16:55:45
permalink: /pages/2819ae/
categories:
  - React
  - Redux
tags:
  - 
---
# redux 旧版语法

## redux 的基本使用

```JavaScript
// 1.下载redux包
 npm i redux
// 2. 定义redecer函数
function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        ...state, //不写这行代码,msg的数据就被覆盖了
        count:state.count + action.num
      }
    default:
        return state
  }
}
// 3.引入创建store的方法
// 如果在脚手架创建的项目执行,引入的代码必须写在最上面
import { createStore } from 'redux'
// 4. 创建store
// const store = createStore(reducer,初始数据对象)
const store = createStore(reducer,{count:1,msg:'hello redux'})

// 调用subscribe,监听state的变化 注意: 要在dispatch之前调用
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({ type: 'ADD', num: 1 }) // 触发reducer函数
store.dispatch({  type: 'ADD', num: 2 }) // 触发reducer函数

```

## 初始化 redux 的另一种方式(推荐)

```JavaScript
// 定义reducer的时候,把初始数据作为state的默认值
// 原理: 因为创建store的时候,reducer会被调用,此时store中的初始值是undefined.所以reducer接收到的state是undefined.那么默认值就生效了.最终走到default这里,将默认值的数据返回给store.从而完成初始化store数据的操作
function reducer(state = { count: 1, msg: 'hello redux' }, action) {
  console.log(state, action)
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + action.num,
      }
    default:
      return state
  }
}
// 3.引入创建store的方法
// 如果在脚手架创建的项目执行,引入的代码必须写在最上面
import { createStore } from 'redux'
// 4. 创建store
// const store = createStore(reducer,初始数据对象)
const store = createStore(reducer)

// 调用subscribe,监听state的变化 注意: 要在dispatch之前调用
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({ type: 'ADD', num: 1 }) // 触发reducer函数
store.dispatch({ type: 'ADD', num: 2 }) // 触发reducer函数
```

## redux-thunk

> 作用: redux 中默认不支持异步操作. 使用 redux-thunk,就可以在 redux 中执行异步代码

store.dispatch 默认只能传入 action 对象.使用了 redux-thunk, store.dispatch 中就可以传入一个回调函数,在回调函数中执行异步操作

### 使用步骤:

1. 下载：

    ```JavaScript
    npm i redux-thunk
    ```

1. 导入

    ```JavaScript
    import thunk from 'redux-thunk'
    ```

1. 导入 redux 中的一个函数：`applyMiddleware`

    ```JavaScript
    import { applyMiddleware } from 'redux'
    ```

1. 配置 redux-thunk

    ```JavaScript
    createStore(reducer, applyMiddleware(thunk))
    ```

1. 执行异步操作

    ```JavaScript
    dispatch((dispatch) => {
      // 这里执行异步代码,异步成功之后,调用回调中接收的dispatch
      setTimeout(() => {
        dispatch(action对象)
      }, 1000)
    })
    ```

### 补充说明:

redux 把 redux-thunk 称之为`中间件`.
何为中间件呢? 中间件本质上其实就是一个函数,在 dispatch 之后,reducer 调用之前执行

默认情况: dispatch 调用 --> reducer 执行
配置了 redux-thunk: dispatch 调用 --> 中间件函数执行 --> reducer 执行

我们现在分析一下刚才 redux-thunk 的第 5 步:

```JavaScript
// 配置redux-thunk之后,redux会判断dispatch传入的是action对象还是回调函数,如果传入action对象则直接触发reducer,如果传入回调,则执行回调.
// 其实这个回调才是真正的中间件,但是开发者交流的时候,会把redux-thunk称之为中间件
dispatch((dispatch) => {
  // 这里执行异步代码,异步成功之后,调用回调中接收的dispatch
  setTimeout(() => {
    dispatch(action对象)
  }, 1000)
})
```

## chrome 的 redux 插件

1. 在 chrome 中安装 Redux DevTools 插件

2. 创建 store 的时候进行配置

    ```JavaScript
    // 单独使用 redux 浏览器插件：
    const store = createStore(reducer,
         // 单独使用 redux 浏览器插件
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
    // 2. 和中间件配合使用
    npm i  redux-devtools-extension -D
    
    import { composeWithDevTools,applyMiddleware } from 'redux-devtools-extension'
    
    createStore(reducer,composeWithDevTools(applyMiddleware(logger)))
    ```

## combineReducers

> 实际开发中,大多数情况都是多人协作开发一个项目,为了尽可能避免代码冲突.每个开发者都会定义自己的 reducer 函数.但是创建 store 的时候只能传入一个 reducer 函数,所以就需要将多个 reducer 合并成一个.

**注意: 合并 reducer 之后,store 的数据结构会发生变化**

```JavaScript
import { createStore, combineReducers } from 'redux'
const rootReducer = combineReducers({
  zs: zs的reducer函数,
  ls: ls的reducer函数,
})

// 假设:
// zs的reducer函数:  function reducer(state={count:0},action){里面只写修改count的case和default}
// ls的reducer函数:  function reducer(state={ xxx: 0},action){里面只写修改xxx的case和default}

// 合并之后store中的数据结构: {zs:{count:0},ls:{xxx:'abc'}}
```

## redux 的使用规范

> 实际开发中,一般会把 redux 的代码分成 4 个文件:

- store.js 创建 store 对象

    ```JavaScript
    import {
      createStore,
      composeWithDevTools,
      applyMiddleware,
      combineReducers,
    } from 'redux'
    // 合并reducer
    const rootRedcuer = combineReducers({})
    // 创建store
    const store = createStore(
      rootRedcuer,
      // 使用redux调试工具和redux-thunk
      composeWithDevTools(applyMiddleware(thunk))
    )
    ```

- constants.js 定义常用

    ```JavaScript
    // 常量或变量有代码提示,直接拼写字符串没有代码提示
    export const ADD = 'ADD'
    ```

- actions.js 定义 actionCreator

    ```JavaScript
    // 可能项目中好几个地方都要用到同一个type的action对象,所以为了方便,定义一个函数,返回action对象. 这个函数被称为actionCreator
    import { ADD } from './constants'
    // 同步action
    function add(payload) {
      // action中的其他属性的名称,建议定义成payload
      return { type: ADD, payload }
    }
    
    // 异步action
    function asyncAdd(num) {
      return (dispatch) => {
        setTimeout(() => {
          dispatch(add(num))
        }, 2000)
      }
    }
    ```

- reducer.js 定义 reducer 函数

    > 如果有多个 reducer 函数,则需要定义多个 reducer 文件

    ```JavaScript
    export default function reducer(state = 初始数据, action) {
      switch (action.type) {
        case ADD:
          return { ...忽略 }
        default:
          return state
      }
    }
    ```

