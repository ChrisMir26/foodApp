import { combineReducers } from "@reduxjs/toolkit"
import CartReducer from "./cart/cartSlice"
import productReducer from "./menu/productsSlice"


const rootReducer = combineReducers({
    cart:CartReducer,
    products: productReducer

})

export default rootReducer