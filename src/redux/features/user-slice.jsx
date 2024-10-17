import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {},
    isLogin: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.data = action.payload
            state.isLogin = true;
        },
        removeUser: (state) => {
            state.data = {}
            state.isLogin =  false;
        }
    },
})

export const { addUser, removeUser} = userSlice.actions

export default userSlice.reducer