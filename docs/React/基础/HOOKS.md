---
title: HOOKS
date: 2023-08-19 16:55:45
permalink: /pages/ec14f2/
categories:
  - React
  - 基础
tags:
  -
---
# HOOK

## HOOK 是什么?

Hook 是 React 16.8 的新增特性。它可以让开发者在 react 中更多的使用函数组件进行开发

HOOK 本质上就是 react 包里面提供的一些函数

## HOOK 的使用规则

- 只在 React 函数组件中或其他 HOOK(自定义 HOOK)中使用. 不要在普通的 JavaScript 函数或类组件中调用 Hook
- 在函数组件或其他 hook 中使用时, 不要在循环，条件或嵌套函数中调用 Hook

## 自定义 HOOK

> 自定义 HOOK,其实就是自定义函数,只不过要求自定义 hook 的名字是以 use 开头的小驼峰形式. 比如: useXxx

```JavaScript
import { useState, useEffect } from 'react'
export default function usePosition() {
  let [x, setX] = useState(0)
  let [y, setY] = useState(0)

  function handle(e) {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handle)
    return () => {
      window.removeEventListener('mousemove', handle)
    }
  }, [])
  return { x, y }
}
```

## React 内置的 HOOK

### useState

> const [变量名, 修改数据的方法] = useState(初始值);

```JavaScript
import React, { useState } from 'react'

function Example() {
  // 1. 声明一个叫 "count" 的 state 变量
  // 2. setCount 是用来操作count的方法
  // 3. useState的值表示count的初始化值
  // 4. 在后续的重新渲染中，useState 返回的第一个值将始终是更新后最新的 state
  // 5. 如果有多个state数据,就调用多次useState
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('hook')
  return (
    <div>
      <p>你点了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>点我</button>
    </div>
  )
}
```

- 注意:

  - 调用了 useState 返回的 setXXX 方法,则会导致组件更新,函数组件结构中的代码,会被再次调用
  - useState 已经实现了优化,如果 state 数据没有变化,则组件不会重复更新
  - useState 内部缓存了上一次修改的新数据,所以更新时,不会初始值不会再次生效了

### useEffect

> useEffect 用来模拟类组件中的 componentDidMount,componentDidUpdate 和 componentWillUnmount

useEffect(()=>{

return ()=>{}

}, [])

useEffect 的回调函数,模拟 componentDidMount 或 componentDidUpdate

回调函数中返回的函数,模拟 componentWillUnmount

```JavaScript
import React, { useState, useEffect } from 'react'

function Example(props) {
  const [count, setCount] = useState(0)

  // 相当于 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    document.title = `你点了 ${count} 次`
    // 相当于componentWillUnmount
    return () => {
      // 完成一些清除工作...
    }
  }, [count, props.name])
  // 如果第二个参数不写, 则外层函数模拟挂载或更新,注意: 在更新之前,会先调用内部模拟卸载的函数. 因为挂载和更新是同一个函数,假如在挂载中订阅了pubsub,卸载中会清除指定订阅.这样更新时,先清除订阅.然后再重新订阅.避免订阅多次
  // 如果在useEffect的第二个参数,传入一个空的数组,则useEffect只模拟componentDidMount
  // 数组中可以传入state或porps数据,传入到数组的数据,就是被监听的数据,只要这些数据中有一个的值发生变化,外层的函数则会模拟更新.否则只模拟挂载

  return (
    <div>
      <p>你点了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>点我</button>
    </div>
  )
}
```

### useContext

> 作用: 在接收 context 数据的组件中,使用 useContext 快速拿到数据

const value = useContext(context 对象) 返回值 value 则是接收的数据

```JavaScript
// context.js
import React from 'react'
export default React.createContext()


// App.js
export default class App extends Component {
  render() {
    return (
      <testContext.Provider value={{ name: 'zs' }}>
        <Test></Test>
      </testContext.Provider>
    )
  }
}

// Test.js
import React, { useContext } from 'react'
import testContext from './context'
export default function Test() {
  const value = useContext(testContext)
  console.log(value) // value就是接收到的context数据
  return <div></div>
}
```

### useReducer

> 组件中有大量 state.使用 useState,就要写很多次.

使用 useReducer 更方便的管理数据

useReducer 用法与 redux 的用法极为相似.但也只是相似而已

const [state, dispatch] = useReducer(reducer 函数, 初始值)

state 指向数据.

dispatch 是修改数据的方法 dispatch({type: '需求类型'})

```JavaScript
import React, { useReducer } from 'react'

const initialState = { count: 0, msg: '哈哈' }
// state是最新的数据,
// action是需求对象 用来描述要如何修改数据
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      throw new Error()
  }
}
export default function Test1() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      msg: {state.msg}
      {/* 调用dispatch方法,传入一个action对象. 可以触发reducer函数执行*/}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
```

### useCallBack

> 每次函数组件更新,函数组件内的函数会重新创建.使用 useCallBack 可以缓存函数

```JavaScript
import React, { useState, useCallback } from 'react'
export default function Test() {
  console.log('test渲染了')
  const [count, setCount] = useState(0)
  // 如果是空数组则回调函数只创建一次.如果不写第二个参数,或第二个参数监听数据,回调函数则创建多次
  const handle = useCallback(() => {
    console.log(count)
    setCount(count + 1)
  }, [count])
  return (
    <div>
      <div>{count}</div>
      <button onClick={handle}>按钮</button>
    </div>
  )
}
```

### useMemo

> 会缓存一个计算的结果,如果没有变化,则不会重新执行计算

```JavaScript
// 使用前
import React,{useState} from 'react';

export default function WithoutMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
 	// 当修改val的值时,expensive没有必要调用. 但是expensive还是被调用.
    function expensive() {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }

    return <div>
        <h4>{count}-{val}-{expensive()}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>+c1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}

// 使用后
export default function WithMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
    // useMemo的返回值是回调函数计算结果.会缓存起来
    const expensive = useMemo(() => {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }, [count]);

    return <div>
        <h4>{count}-{expensive}</h4>
        {val}
        <div>
            <button onClick={() => setCount(count + 1)}>+c1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}
```

### useRef

> 新的创建 ref 对象的方式

```JavaScript
function TextInputWithFocusButton() {
  const inputEl = useRef() // 传入的null表示inputEl.current的初始值
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus()
  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}
```

### useImperativeHandle

> `useImperativeHandle` 可以让你在使用 `ref` 时自定义暴露给父组件的实例值. `useImperativeHandle` 应当与 [`forwardRef`]一起使用

作用: 封装公共组件的时候,可以给使用公共组件的组件提供指定的 API. 有条件的操作公共组件的真实 dom

```JavaScript
//App.js
import React, { useState, useEffect } from 'react'
import FancyInput from './FancyInput'

const inputRef = React.createRef()
class App extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {

            console.log(inputRef.current.focus())
          }}
        >
          按钮
        </button>
        <FancyInput ref={inputRef}></FancyInput>
      </div>
    )
  }
}

export default App


//FancyInput.js
import React, { useRef, useImperativeHandle, forwardRef } from 'react'
function FancyInput(props, ref) {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {

      inputRef.current.focus()
    },
  }))
  return <input ref={inputRef} />
}
FancyInput = forwardRef(FancyInput)
export default FancyInput

```

### useLayoutEffect

> 作用与 `useEffect` 相同，但它是在组件渲染完毕之前调用

```JavaScript
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import TweenMax from 'gsap' // npm i gsap@3.7.0
import './index.css'

const Animate = () => {
  const REl = useRef(null)
  useLayoutEffect(() => {
    /*下面这段代码的意思是当组件加载完成后,在0秒的时间内,将方块的横坐标位置移到600px的位置*/
    TweenMax.to(REl.current, 0, { x: 600 })
  }, [])
  return (
    <div className="animate">
      <div ref={REl} className="square">
        square
      </div>
    </div>
  )
}

export default Animate
```

### useDebugValue

> useDebugValue 可用于在 React 开发者工具中显示 自定义 hook 的标签

注意:只能在自定义 hook 中使用

```JavaScript
import { useState, useDebugValue } from 'react'
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
}

export default function useFriendStatus() {
  const [isOnline, setIsOnline] = useState(null)

  setTimeout(() => {
    let result = getRandomIntInclusive(0, 1)
    console.log(result)
    setIsOnline(result ? 'online' : 'offline')
  }, 1000)

  // 在react开发者工具中的这个 Hook 旁边显示标签
  // "FriendStatus: Online"
  useDebugValue(isOnline)

  return isOnline
}
```

### useId( v18 新增)

> 用于在客户端和服务器上生成唯一 ID

```JavaScript
function Checkbox() {
  const id = useId() // :r0:
  return (
    <>
      <label htmlFor={id}>Do you like React?</label>
      <input id={id} type="checkbox" name="react" />
    </>
  )
}
```

### useTransition( v18 新增)

> 将一些状态更新标记为不紧急。默认情况下，状态更新被认为是紧急的,状态相关的结构会并行渲染。 使用 useTransition 将某些状态设置成不紧急的情况下,对应的结构会等待紧急任务渲染完成之后再渲染。

**以搜索 github 用户为例**: 输入关键字则立刻检索相关用户信息并渲染

![](import/images/v2.png)

App.js

```JavaScript
import React, { useState } from 'react'
import Card from './Card'
export default function App() {
  const [keyWord, setKeyWord] = useState('')
  return (
    <div>
      请输入关键字:
      <input
        type="text"
        value={keyWord}
        onChange={(e) => {
          setKeyWord(e.target.value.trim())
        }}
      />
      <hr />
      <Card searchQuery={keyWord}></Card>
    </div>
  )
}
```

Card.js

```JavaScript
import React from 'react'
import data from './data.json' // data.json中存储了很多github用户信息
export default function Card({ searchQuery }) {
  const filterData = data.filter((item) => {
    return item.login.includes(searchQuery)
  })
  return (
    <div className="row">
      {filterData.map((item) => {
        return (
          <div className="card" key={item.id}>
            <a target="_blank">
              <img src={item.avatar_url} style={{ width: '100px' }} />
            </a>
            <p className="card-text">{item.login}</p>
          </div>
        )
      })}
    </div>
  )
}
```

data.json

```JSON
[
  {
    "login": "yi-ge",
    "id": 6657330,
    "node_id": "MDQ6VXNlcjY2NTczMzA=",
    "avatar_url": "https://avatars.githubusercontent.com/u/6657330?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/yi-ge",
    "html_url": "https://github.com/yi-ge",
    "followers_url": "https://api.github.com/users/yi-ge/followers",
    "following_url": "https://api.github.com/users/yi-ge/following{/other_user}",
    "gists_url": "https://api.github.com/users/yi-ge/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/yi-ge/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/yi-ge/subscriptions",
    "organizations_url": "https://api.github.com/users/yi-ge/orgs",
    "repos_url": "https://api.github.com/users/yi-ge/repos",
    "events_url": "https://api.github.com/users/yi-ge/events{/privacy}",
    "received_events_url": "https://api.github.com/users/yi-ge/received_events",
    "type": "User",
    "site_admin": false,
    "score": 1.0
  }
  // ...忽略其他信息
]
```

**我们可以使用 `useTransition`告诉 react,更新文本框文字是紧急的,更新 searchQuery 是非紧急的.让 react 优先渲染文本框,然后再渲染用户列表**

```JavaScript
import React, { useState, useTransition } from 'react'
import Card from './Card'
export default function App() {
  const [keyWord, setKeyWord] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  // 调用 useTransition, 可以得到一个isPending和startTransition
  // isPending表示 非紧急渲染是否在等待中 是boolean值
  // startTransition中定义state update(更新状态)的代码
  const [isPending, startTransition] = useTransition()
  return (
    <div>
      请输入关键字:
      <input
        type="text"
        value={keyWord}
        onChange={(e) => {
          setKeyWord(e.target.value.trim())

          //startTransition中定义state update代码
          startTransition(() => {
            setSearchQuery(e.target.value.trim())
          })
        }}
      />
      <hr />
      {isPending && <Progress />}
      <Card searchQuery={searchQuery}></Card>
    </div>
  )
}
```

### useDeferredValue( v18 新增)

> 允许开发者推迟重新渲染树的非紧急部分。

```JavaScript
function App() {
  const [key, setKey] = useState('')
  const deferredKey = useDeferredValue(key)

  function handleChange(e) {
    setKey(e.target.value.trim())
  }
  return (
    <div className="App">
      {/* 文本框使用旧的值 */}
      <input value={text} onChange={handleChange} />
      {/* List使用新的值 */}
      <List text={deferredKey} />
    </div>
  )
}
```
