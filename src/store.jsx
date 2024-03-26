import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart/CartSlice";


export const CustomStore=configureStore({
    reducer:{
        basket:CartSlice
    }
})