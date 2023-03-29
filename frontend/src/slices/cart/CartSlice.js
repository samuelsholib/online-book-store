import { createSlice } from '@reduxjs/toolkit'
import { loadState } from '../../app/localStorage'

const persistedState = loadState();

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: persistedState && persistedState.cart?
        persistedState.cart.value
        :{
            count: 0,
            items: [],

        },
    },
    reducers: {
        addToCart: (state, action) => {
            //add item to cart
            if(!state.value.items.find((book)=>book.bookId === action.payload.bookId)){
                state.value = {
                    count: state.value.count + 1,
                    items: [...state.value.items, action.payload]
                }
            }
        },
        removeFromCart: (state,action) => {
            //remove item from cart
            state.value = {
                count: state.value.count - 1,
                items: state.value.items.filter((book) => book.bookId !== action.payload)
            }   
        },
        emptyCart: (state) => {
            //remove user info
            state.value = {
                count: 0,
                items: []
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer