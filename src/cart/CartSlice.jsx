import { createSlice } from "@reduxjs/toolkit";


export const CartSlice=createSlice({
    name:"basket",
    initialState:{
        items:JSON.parse(localStorage.getItem("basket")) || []
    },
    reducers:{
        addBasket:(state,action)=>{
            const existingIndex=state.items.findIndex(item=>item.id===action.payload.id)
            if (existingIndex>=0) {
                state.items[existingIndex].count+=1
                localStorage.setItem("basket",JSON.stringify(state.items))
            }         
            else{
                state.items.push(action.payload)
                localStorage.setItem("basket",JSON.stringify(state.items))
            }
        },
        changeCount: (state, action) => {
            const existingIndex = state.items.findIndex(product => product.id === action.payload.id);
            if (existingIndex >= 0) {
                if (state.items[existingIndex].count > 1) {
                    state.items[existingIndex].count -= 1;
                } else {
                    state.items = state.items.filter(product => product.id !== action.payload.id);
                }
                localStorage.setItem("basket", JSON.stringify(state.items));
            }
        },
        removeBasket:(state,action)=>{
            state.items=state.items.filter(product=>product.id!==action.payload)
            localStorage.setItem("basket",JSON.stringify(state.items))
        }
    }
})

export const {addBasket,changeCount,removeBasket}=CartSlice.actions
export default CartSlice.reducer