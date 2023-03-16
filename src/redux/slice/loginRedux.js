import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const postLoginAsync = createAsyncThunk('loginAsync', async (data)=>{
    const res = await axios.post('users/login/', data)
    return res.data
         
})


export const loginRedux = createSlice({
    name: 'login',
    initialState: {
        data: "",
        isLoading: false,
        error: null,
        succes: null,
    },
    reducers: {},
    extraReducers: {
        [postLoginAsync.pending]: (state, action)=>{
            state.isLoading = true
        },
        [postLoginAsync.fulfilled]: (state, action)=>{
            console.log(action);
            localStorage.setItem("token", action.payload.access)
            state.data = action.payload.user_details;
            state.succes = action.meta.requestStatus
        },
        [postLoginAsync.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.error.message
            

        }
    }

    
    
})



export default loginRedux.reducer;