# react-redux

## 1、为什么使用 redux ？
```
    1、在大型项目中，组件关系复杂，通过 props 传递数据 过于复杂
    2、redux 作为集中式状态管理工具 相当于全局的 state 
    3、使用 redux 随取随用 大大提高了开发效率
```

## 2、如何理解 redux ？
```
   理解 Redux，主要涉及以下几个核心部分：
    1、Store（存储）：
        Store 是 Redux 中的核心，它是一个对象，用来保存整个应用状态，在一个 Redux 应用中，整个应用只有一个 Store
        Store 提供了几个方法：
            a、dispatch(action) 来改变状态
            b、getState() 来获取当前状态
            c、subscribe(listener) 来注册监听器，监听状态的变化。

    2、Actions（动作）：
        Actions 是描述“发生了什么”的普通对象，它是改变状态的唯一途径；
        Action 必须有一个 type 属性来指示正在执行的操作类型；
        Actions 通常通过 dispatch() 方法发送到 Store。
       
    3、 Reducers（还原者）： 
        是一个函数，它负责根据 Action 的类型来更新状态，并返回新的状态。
        它接收两个参数：当前的状态和一个 Action。
        Reducers 必须是纯函数，也就是说，给定相同的输入，必须返回相同的输出，并且不应有副作用。
```

## 3、基本使用

### 3.1 创建根仓库
```
    1、configureStore 创建 根仓库
    2、根仓库的 reducer 中存放 切片(小仓库) --- module
```
```js
import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './modules/counterSlice'
import userSlice from './modules/userSlice';

// 使用 configureStore 创建 根仓库
export default configureStore({
    // reducer 中 存放着 很多 小仓库 (模块化) 的reducer
    reducer: {
        counter: counterSlice,
        user:userSlice
    }
})
```

### 3.2 创建小仓库
```
    1、createSlice 创建小仓库
    2、三个重要属性
        1、name 小仓库的唯一标识
        2、initialState 小仓库的数据
        3、reducers 操纵数据的方法 
            每个方法 都可接收两个参数
            参数1 初始数据 state
            参数2 载荷 action 
            对象中存在俩值 一个payload 调用方法传递的参数 一个type 类型
```
```js
import { createSlice } from '@reduxjs/toolkit'

// 使用 createSlice 声明小仓库 counterSlice
export const counterSlice = createSlice({
    // 1、name 小仓库的唯一标识
    name: 'counter',
    // 2、initialState 小仓库的数据
    initialState: {
        value: 1,
        list: [1, 2, 3, 4]
    },
    // 3、reducers 操纵数据的方法 
    reducers: {
        // 每个方法 都可接收两个参数
        // 参数1 初始数据 state
        // 参数2 载荷 action 
        // 对象中存在俩值 一个payload 调用方法传递的参数 一个type 类型
        increment: (state, action) => {
            console.log(action);  // action 对象中存在俩值 一个payload 一个type
            state.value += action.payload
            state.list.push(action.payload)
        },
        decrement: (state,action) => {
            state.value -= action.payload
            state.list.splice(action.payload)
        }
    }
})

// 将 小仓库 reducers 的方法 一一暴露出去
export const { increment,decrement } = counterSlice.actions

// 将 小仓库 reducer 暴露出去
export default counterSlice.reducer
```

### 3.3 主程序入口使用仓库
```
    1、Provider 提供数据组件
    2、store={store} 传递数据
```
```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 在程序入口文件 使用 Provider 将 store 数据 提供给全局
  <Provider store={store}>
    <App />
  </Provider>
)
```

### 3.4 获取和修改仓库内的数据
```
    1、useSelector 定位到 根仓库的 切片，获取里面的数据
    2、useDispatch 分发动作 更新数据
```
```js
import { useSelector, useDispatch } from 'react-redux';
import {increment,decrement} from '../store/modules/counterSlice'

export default function Person() {
    const { value,list} = useSelector((state) => {
        return state.counter
    })

    const dispatch = useDispatch()

    return (
        <>
            <h1>person</h1>
            <div>读取数据</div>
            <h2>
                value:{value}
                list:{list}
            </h2>
            <button onClick={() => {
                // 相当于 dispatch({ payload: 2,type: "counter/increment"})
                dispatch(increment(2))
            }}>increment</button>
            <button onClick={() => {
                dispatch(decrement(2))
            }}>decrement</button>
        </>
    )
}
```
