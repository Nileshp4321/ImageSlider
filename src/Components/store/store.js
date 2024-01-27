import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "@reduxjs/toolkit";
import ImgReducer from "../feature/Slice"
// const reducer=combineReducers({
    
// })
export const store=configureStore({
    reducer:ImgReducer
})