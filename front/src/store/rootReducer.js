import { combineReducers } from "@reduxjs/toolkit"
import CartReducer from "./cart/cartSlice"
import productReducer from "./menu/productsSlice"
import addressReducer from "./userInfo/addressSlice"


const rootReducer = combineReducers({
    cart:CartReducer,
    products: productReducer,
    address: addressReducer

})

export default rootReducer