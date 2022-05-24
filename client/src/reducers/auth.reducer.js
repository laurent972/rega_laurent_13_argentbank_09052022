import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "auth",
    initialState: {value:'false'},
    reducers : {
        getAuth : (state, action)=>{
            state.value = action.payload
        }
    }
})
export const {getAuth} = authSlice.actions;
export default authSlice.reducer