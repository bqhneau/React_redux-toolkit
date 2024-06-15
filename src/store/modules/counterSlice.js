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
    // 3、reducers 操纵数据的方法  --- action
    reducers: {
        // 每个方法 都可接收两个参数
        // 参数1 初始数据 state
        // 参数2 载荷 调用方法传递的参数
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

