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