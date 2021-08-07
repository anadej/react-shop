// =================================== toolkit =======================================

import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  getLaptops,
  getPhones,
  getAllProducts,
  setLoader,
  setError,
  resetError,
} from "./productAction.js";

const productItemReducer = createReducer(
  { phones: [], laptops: [] },
  {
    [addProduct]: (state, { payload }) => ({
      ...state,
      [payload.category]: [...state[payload.category], payload],
    }),
    [deleteProduct]: (state, { payload }) => ({
      ...state,
      [payload.category]: state[payload.category].filter(
        (product) => product.id !== payload.id
      ),
    }),
    [getLaptops]: (state, { payload }) => ({ ...state, laptops: payload }),
    [getPhones]: (state, { payload }) => ({ ...state, phones: payload }),
    [getAllProducts]: (_, { payload }) => ({ ...payload }),
  }
);

const productsLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const productsErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

const productsReducer = combineReducers({
  items: productItemReducer,
  loader: productsLoaderReducer,
  error: productsErrorReducer,
});

export default productsReducer;

// =================================== redux =======================================

// import {
//   ADD_PRODUCT,
//   DELETE_PRODUCT,
//   GET_ALL_PRODUCTS,
//   GET_LAPTOPS,
//   GET_PHONES,
// } from "./productAction";

// const productItemReducer = (
//   state = { phones: [], laptops: [] },
//   { type, payload }
// ) => {
//   switch (type) {
//     case ADD_PRODUCT:
//       return {
//         ...state,
//         [payload.category]: [...state[payload.category], payload],
//       };
// case DELETE_PRODUCT:
//   return {
//     ...state,
//     [payload.category]: state[payload.category].filter(
//       (product) => product.id !== payload.id
//     ),
//   };
// case GET_LAPTOPS:
//   return {
//     ...state,
//     laptops: payload,
//   };
// case GET_PHONES:
//   return {
//     ...state,
//     phones: payload,
//   };
// case GET_ALL_PRODUCTS:
//   return {
//     ...payload,
//   };
//     default:
//       return state;
//   }
// };

// const productsLoaderReducer = (state = false) => {
//   return state;
// };

// const productsErrorReducer = (state = "") => {
//   return state;
// };

// const productsReducer = combineReducers({
//   items: productItemReducer,
//   loader: productsLoaderReducer,
//   error: productsErrorReducer,
// });

// export default productsReducer;
