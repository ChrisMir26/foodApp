import { combineReducers } from "@reduxjs/toolkit"
import CartReducer from "./cart/cartSlice"


const rootReducer = combineReducers({
    cart:CartReducer
})

export default rootReducer