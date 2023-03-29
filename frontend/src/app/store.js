import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from '../slices/login/LoginSlice'
import CartReducer from '../slices/cart/CartSlice'

export default configureStore({
    reducer: {
        login: LoginReducer,
        cart: CartReducer,
    },
})