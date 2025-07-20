import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './studentSlice'

const Store = configureStore({
    reducer:{
        students: studentReducer,
    },
})
export  default Store