import { configureStore } from "@reduxjs/toolkit";
import PizzaReducer from "../features/PizzSlices";
import orderSlice from "../features/orderSlice";

const store = configureStore({
    reducer:{
        PizzaReducer: PizzaReducer,
        OrderReducer: orderSlice
    }
})

export default store;