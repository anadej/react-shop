// =================================== toolkit =======================================

import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addToCart,
  removeFromCart,
  createOrder,
  setLoader,
  setError,
  resetError,
} from "./cartAction";

const cartItemsReducer = createReducer([], {
  [addToCart]: (state, action) => [...state, action.payload],
  [removeFromCart]: (state, action) =>
    state.filter((cartItem) => cartItem.id !== action.payload),
  [createOrder]: () => [],
});

const cartLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const cartErrorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
  [resetError]: () => "",
});

const cartReducer = combineReducers({
  items: cartItemsReducer,
  loader: cartLoaderReducer,
  error: cartErrorReducer,
});

export default cartReducer;

// =================================== redux =======================================

// import {
//   ADD_TO_CART,
//   CREATE_ORDER,
//   REMOVE_FROM_CART_BY_ID,
//   RESET_ERROR,
//   SET_ERROR,
//   SET_LOADER,
// } from "./cartAction";

// const cartItemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return [...state, action.payload];
//     case REMOVE_FROM_CART_BY_ID:
//       return state.filter((cartItem) => cartItem.id !== action.payload);
//     case CREATE_ORDER:
//       return []; //после отправки на бекенд инфо о создании заказа, просто возвращем пустой массив для очистки содержимого корзины
//     default:
//       return state;
//   }
// };

// const cartLoaderReducer = (state = false, { type }) => {
//   switch (type) {
//     case SET_LOADER:
//       return !state;
//     default:
//       return state;
//   }
// };

// const cartErrorReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case SET_ERROR:
//       return payload;
//     case RESET_ERROR:
//       return "";
//     default:
//       return state;
//   }
// };

// const cartReducer = combineReducers({
//   items: cartItemsReducer,
//   loader: cartLoaderReducer,
//   error: cartErrorReducer,
// });

// export default cartReducer;
