import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: [],
    totalQuantity: 0,
    totalBill: 0
}

// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {

        // add to cart
        addToCart: (state, action) => {

            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, temp]

            }
            state.totalQuantity = state.carts.reduce((total, item) => total + item.quantity, 0);
            state.totalBill = state.carts.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

        // remove perticular iteams
        removeToCart:(state,action)=>{
            const data = state.carts.filter((ele)=>ele.id !== action.payload);
            state.carts = data
            state.totalQuantity = state.carts.reduce((total, item) => total + item.quantity, 0);
            state.totalBill = state.carts.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

        // remove single iteams
        removeSingleIteams:(state,action)=>{
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if(state.carts[IteamIndex_dec].qnty >=1){
                state.carts[IteamIndex_dec].qnty -= 1
            }
            else {
                state.carts = state.carts.filter((item) => item.id !== action.payload.id);
            }
            state.totalQuantity = state.carts.reduce((total, item) => total + item.quantity, 0);
            state.totalBill = state.carts.reduce((total, item) => total + (item.price * item.quantity), 0);

        },

        // clear cart
        emptycartIteam:(state,action)=>{
            state.carts = [],
            state.totalQuantity = 0;
            state.totalBill = 0;
        },
        updateTotalQuantity: (state) => {
            state.totalQuantity = state.carts.reduce((total, item) => total + item.qnty, 0);
        },

        // update total bill
        updateTotalBill: (state) => {
            state.totalBill = state.carts.reduce((total, item) => total + (item.price * item.qnty), 0);
        },
        initializeBillingData: (state, action) => {
            state.totalBill = action.payload.totalBill;
            state.totalQuantity = action.payload.totalQuantity;
        }
    }
});

export const { addToCart,removeToCart,removeSingleIteams ,emptycartIteam,updateTotalQuantity, updateTotalBill,initializeBillingData} = cartSlice.actions;

export default cartSlice.reducer;