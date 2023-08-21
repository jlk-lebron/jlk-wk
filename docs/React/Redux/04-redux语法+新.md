---
title: 04-redux语法+新
date: 2023-08-19 16:55:45
permalink: /pages/e1674d/
categories:
  - React
  - Redux
tags:
  - 
---
# redux 新版语法(@reduxjs/toolkit)

> @reduxjs/toolkit 是基于 redux 二次封装的 js 库. 主要集成了 redux 中的调试工具,合并 reducer,redux-thunk 等.

## 基本使用:

> 我们以计数案例,给大家介绍@reduxjs/toolkit 的使用

1. 下载 react-redux 和@reduxjs/toolkit

    ```JavaScript
    npm i react-redux @reduxjs/toolkit
    ```

1. 创建`src/redux/store.js`

    ```JavaScript
    // 引入创建store对象的configureStore
    // 引入创建slice对象的createSlice(slice集成了action和reducer)
    import { configureStore, createSlice } from '@reduxjs/toolkit'
    
    // 初始化数据
    const initialtestState = {
      count: 0,
      msg: 'hello',
    }
    // 创建slice
    export const testSlice = createSlice({
      name: 'xxx', //slice的名称
      initialState: initialtestState, // 初始化数据
      // 创建reducer
      reducers: {
        // 创建同步action
        add: function (state, action) {
          // @reduxjs/toolkit支持直接修改state数据
          state.count = state.count + 1
        },
        sub: (state, action) => {
          // 在@reduxjs/toolkit中action中传入的数据,属性名统一写成payload
          state.count = state.count - action.payload
        },
      },
    })
    // 创建store对象
    const store = configureStore({
      // 这里相当于合并reducer
      reducer: {
        test: testSlice.reducer,
      },
    })
    // 导出store对象
    export default store
    // 导出action
    export const { add, sub } = testSlice.actions
    
    // store.subscribe(() => {
    //   console.log(store.getState())
    // })
    // store.dispatch(testSlice.actions.add(undefined))
    // store.dispatch(testSlice.actions.sub(2))
    // console.log('action', testSlice.actions.sub(2))
    // store.dispatch({ type: 'xxx/sub', payload: 3 })
    ```

1. 在入口文件中使用 Provider,传递 store

    ```JavaScript
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    // 引入Provider
    import { Provider } from 'react-redux'
    
    import App from './App'
    // 引入store
    import store from './redux/store'
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    root.render(
        // 使用Provider,将store传递下去
        <Provider store={store}>
          <App />
        </Provider>
    )
    
    ```

1. App 中使用了 Count 组件

    ```JavaScript
    import React from 'react'
    import Count from './pages/Count'
    export default function App() {
      return (
        <div>
          <Count></Count>
        </div>
      )
    }
    ```

1. Count 组件中使用

    ```JavaScript
    import React from 'react'
    // 从react-redux中引入useDispatch和useSelector
    // useDispatch 返回 store.dispatch
    // useSelector 用来获取过滤state中的数据
    import { useDispatch, useSelector } from 'react-redux'
    // 引入action
    import { add, sub } from '../redux/store'
    
    export default function Test() {
      // 拿到dispatch方法
      const dispatch = useDispatch()
      // 拿到redux中的数据
      const state = useSelector((state) => {
        // 如果项目中使用了ts, 由于ts检查,这里会出现红色波浪线(暂时忽略ts的问题,点击页面中红色提示x号,代码可以正常运行).
        return state.test
      })
      return (
        <div>
          <h1>Test</h1>
          <div>{state.count}</div>
          <div>{state.msg}</div>
          <button
            onClick={() => {
              //dispatch({ type: 'xxx/add' })
              dispatch(add())
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              //dispatch({ type: 'xxx/sub', payload: 2 })
              dispatch(sub(2))
            }}
          >
            -
          </button>
        </div>
      )
    }
    ```

## 异步操作

1. store.js 中增加异步代码

    ```JavaScript
    // 引入createAsyncThunk
    import {
      configureStore,
      createSlice,
      createAsyncThunk,
    } from '@reduxjs/toolkit'
    
    const initialtestState = {
      count: 0,
      msg: 'hello',
    }
    
    //定义执行异步的函数.要求返回值是一个promise
    // 这里的yyy,会体现在action对象的type上面
    export const asyncMsg = createAsyncThunk('yyy', () => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('hahaha')
            // reject('123')
          }, 1000)
        })
    })
    
    export const testSlice = createSlice({
      name: 'xxx',
      initialState: initialtestState,
      reducers: {
        add: function (state, action) {
          state.count = state.count + 1
        },
        sub: (state, action) => {
          state.count = state.count - action.payload
        },
      },
      // 为异步操作定义action
      extraReducers(builder) {
        builder.addCase(asyncMsg.pending, (state, action) => {
          console.log('正在异步操作')
        })
        builder.addCase(asyncMsg.fulfilled, (state, action) => {
          console.log('成功', state, action)
          state.msg = action.payload
        })
        builder.addCase(asyncMsg.rejected, (state, action) => {
          console.log('失败')
        })
      },
    })
    
    const store = configureStore({
      reducer: {
        test: testSlice.reducer,
      },
    })
    
    export default store
    export const { add, sub } = testSlice.actions
    ```

1. 在 Count.js 中

    ```JavaScript
    import React from 'react'
    import { useDispatch, useSelector } from 'react-redux'
    import {
      add,
      sub,
      asyncMsg,
    } from '../redux/store'
    
    export default function Test() {
      const dispatch = useDispatch()
      const state = useSelector((state) => {
        return state.test
      })
      return (
        <div>
          <h1>Test</h1>
          <div>{state.count}</div>
          <div>{state.msg}</div>
          <button
            onClick={() => {
              // dispatch({ type: 'xxx/add' })
              dispatch(add())
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              // dispatch({ type: 'xxx/sub', payload: 2 })
              dispatch(sub(2))
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(asyncMsg())
            }}
          >
            点击异步修改msg的值
          </button>
        </div>
      )
    }
    ```

## 解决 TS 编译失败的问题

> 使用 TypeScript 写 redux,代码检查会有一些问题.如果不用 TypeScript 可以忽略当前小节

1. 在 store.ts 中新增代码

    ```Plain Text
    // ReturnType 是ts中内置类型,无需引入
    export type RootState = ReturnType<typeof store.getState> //解决获取状态时,ts编译错误
    export type AppDispatch = typeof store.dispatch // 解决异步操作时dispatch位置的ts编译错误
    ```

1. 在 Count.tsx 中修改代码

    ```Plain Text
    import React from 'react'
    // 新增代码: 引入TypedUseSelectorHook用来处理获取state数据时ts编译错误
    import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
    import {
      add,
      sub,
      asyncMsg,
      RootState,
      AppDispatch,
    } from '../redux/store'
    
    // 定义新的获取state数据和获取dispatch函数的方法
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
    const useAppDispatch = () => useDispatch<AppDispatch>()
    
    export default function Test() {
      // 修改的代码: 获取sate和dispatch时,使用新的函数
      const dispatch = useAppDispatch()
      const state = useAppSelector((state) => {
        return state.test
      })
    
      return (
        <div>
          <h1>Test</h1>
          <div>{state.count}</div>
          <div>{state.msg}</div>
          <button
            onClick={() => {
              // dispatch({ type: 'xxx/add' })
              dispatch(add())
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              // dispatch({ type: 'xxx/sub', payload: 2 })
              dispatch(sub(2))
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(asyncMsg())
            }}
          >
            点击异步修改msg的值
          </button>
        </div>
      )
    }
    ```

