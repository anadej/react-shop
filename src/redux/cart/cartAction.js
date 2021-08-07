// =================================== toolkit =======================================

import { createAction } from "@reduxjs/toolkit";

const addToCart = createAction("cart/addToCart");
const removeFromCart = createAction("cart/removeFromCart");
const createOrder = createAction("cart/createOrder");
const setLoader = createAction("cart/setLoader");
const setError = createAction("cart/setError");
const resetError = createAction("cart/resetError");

export {
  addToCart,
  removeFromCart,
  createOrder,
  setLoader,
  setError,
  resetError,
};

// =================================== redux =======================================

// const ADD_TO_CART = "addToCart";
// const REMOVE_FROM_CART_BY_ID = "removeFromCart";
// const CREATE_ORDER = "createOrder";
// const SET_LOADER = "setLoader";
// const SET_ERROR = "setError";
// const RESET_ERROR = "resetError";
// export {
//   ADD_TO_CART,
//   REMOVE_FROM_CART_BY_ID,
//   CREATE_ORDER,
//   SET_LOADER,
//   SET_ERROR,
//   RESET_ERROR,
// };
// const addToCart = (product) => ({
//   type: ADD_TO_CART,
//   payload: product,
// });
// const removeFromCart = (id) => ({
//   type: REMOVE_FROM_CART_BY_ID,
//   payload: id,
// });
// const createOrder = () => ({ type: CREATE_ORDER });
// const setLoader = () => ({ type: SET_LOADER });
// const setError = (error) => ({ type: SET_ERROR, playload: error });
// const resetError = () => ({ type: SET_ERROR });

// export {
//   addToCart,
//   removeFromCart,
//   createOrder,
//   setLoader,
//   setError,
//   resetError,
// };
