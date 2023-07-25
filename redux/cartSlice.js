import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    quantity: 0,
    total: 0
};
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            state.products.push(action.payload)
            state.quantity += action.payload.quantity
            state.total += action.payload.price
        },
        resetCart: (state, action) => {
            state.products = [],
                state.quantity = 0,
                state.total = 0
        }
    }

})
export const { addProductToCart, resetCart } = cartSlice.actions
export default cartSlice.reducer