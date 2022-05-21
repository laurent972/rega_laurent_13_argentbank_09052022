import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {value:{name:'toto'}},
    reducers : {
        getUserInfo : (state, action)=>{
            state.value = action.payload
        }
    }
})
export const {getUserInfo} = userSlice.actions;
export default userSlice.reducer