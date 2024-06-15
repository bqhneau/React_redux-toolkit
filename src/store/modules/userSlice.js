import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: '张三',
        userAge: 18,
        userPhone:'13112345678'
    },
    reducers: {
        update: (state, action) => {
            state.userName = '李四',
            state.userAge = 20,
            state.userPhone = '138985742212'    
        }
    }
})

export const { update } = userSlice.actions

export default userSlice.reducer