import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        test:()=>{}
        // setLogin()

        // setAuth(state, action) {
        //     state.value += action.payload;
        // }
    }
})

const {actions, reducer} = authSlice
export const {test} =actions
export default reducer