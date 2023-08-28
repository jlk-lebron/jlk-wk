---
title: Redux介绍
date: 2023-08-19 16:55:45
permalink: /pages/8a2aaa/
categories:
  - React
  - Redux
tags:
  -
---
# redux

> Redux 是 JavaScript 应用的可预测状态容器，用来集中管理状态(数据)。
> 特点：集中管理、可预测、易于测试、易于调试、强大的中间件机制满足你所有需求。
> 注意：redux 是一个独立于 react 的库，可以配合任何 UI 库/框架来使用。

2015 年由 facebook 推出

![redux logo](import/images/redux-1.png)

## 为什么要做状态管理

因为项目中有很多组件要用到同一份数据,组件虽然可以通讯,但是传递过程很繁琐. 状态管理可以帮我们将公共数据集中管理起来.逻辑上更加简单

![状态管理](import/images/reduxdiff.png)

## redux 三个核心概念

- Action（产品经理）：描述需求
- Reducer（程序员）：具体的执行者
- Store（项目经理）：管理数据并且是 Action 和 Reducer 的桥梁，将 Action 传递给 Reducer。

![](import/images/reduxflow.png)

### action

> action 本质是一个 js 对象

作用：描述如何修改数据 => {type: '描述信息', 其他属性: 属性值}

action 相关的规范: 1. 至少有一个 type 属性,值是字符串 2. type 的字符串应该是大写的英文

```JavaScript
{ type: 'ADD', num: 1}
```

### reducer

> reducer 本质是一个函数。

作用：接收 action 和 state(store 中的数据), 对 state 进行修改，并返回新 state。

**注意: reducer 可以接收到一个 state,但是直接修改这个 state 并不能改变 store 中的数据,store 中的数据是由 reducer 函数的返回值决定的**

```JavaScript
function reducer (state, action) => {
    // state是store传递给reducer的数据
    // action是store传递给reducer的需求
  switch (action.type) {
    case 'ADD':
      return state + action.num
    //... 忽略其他
    default: // default 必须写,而且是固定代码
      return state
  }
}
```

### store

> 作用: 存储数据以及调用 reducer 函数。

一个应用程序只需要一个 store

#### store 提供的 api

1. 提供 dispatch 方法，调用则会导致 reducer 函数执行

   ```JavaScript
   store.dispatch({ type: 'XXX' })
   ```
2. 提供 getState 方法，返回当前 store 中存储的数据

   ```JavaScript
   const state = store.getState()
   ```
3. 提供 subscribe 方法，监听数据变化。

   ```JavaScript
   store.subscribe(() => {
     // 当数据发生变化,这个回调被调用
   })
   ```
