import { configureStore } from "@reduxjs/toolkit";
import loginRedux from "./slice/loginRedux";


export default configureStore({
    reducer: {
        login: loginRedux,
    }
})