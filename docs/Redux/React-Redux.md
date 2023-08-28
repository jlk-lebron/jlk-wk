---
title: React-Redux
date: 2023-08-19 16:55:45
permalink: /pages/001ad6/
categories:
  - React
  - Redux
tags:
  -
---
# react-redux

> Redux 是独立的 js 库,如果要在 react 中使用 redux 数据,应该使用 react-redux 这个包将 react 和 redux 关联起来

使用之前应该先下载 npm i react-redux

![react-redux](import/d3b9e023-7347-4afe-9f5b-f406b0e46d52/C:/Users/luodi/Desktop/react全家桶-本地md/images/react-redux.png)

## react-redux 中的核心 API

- Provider 组件: 用来包裹整个 React 应用，向下传递 store 对象

  ```JavaScript
  // 入口文件
  import { Provider } from 'react-redux'
  // 引入store对象
  import store from './redux/store'
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  ```
- useSelector: 在 react 组件中使用,返回 store 中的数据.并且当数据发生变化,让 react 组件更新

  ```JavaScript
  import { useSelector } from 'react-redux'

  function Count() {
    // c接收到的就是回调中返回的值
    const c = useSelector((state) => {
      // state 是redux中所有数据
      // 返回当前组件需要的数据
      return state.count
    })
    return (
      <div>
        <p>{c}</p>
      </div>
    )
  }
  ```
- useDispatch: 在 react 组件中使用. 返回 store 的 disaptch 函数

  ```JavaScript
  import { useSelector, useDispatch } from 'react-redux'

  function Count() {
    // c接收到的就是回调中返回的值
    const c = useSelector((state) => {
      // state 是redux中所有数据
      // 返回当前组件需要的数据
      return state.count
    })
    const dispatch = useDispatch()
    return (
      <div>
        <p>{c}</p>
        <button
          onClick={() => {
            // 这个dispatch就是store.dispatch
            dispatch({ type: 'ADD', num: 8 })
          }}
        >
          +
        </button>
      </div>
    )
  }
  ```
