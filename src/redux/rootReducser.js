import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./product/productReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;
