// =================================== toolkit =======================================

import { createAction } from "@reduxjs/toolkit";

const addProduct = createAction("product/addProduct");
const deleteProduct = createAction("product/deleteProduct");
const getLaptops = createAction("product/getLaptops");
const getPhones = createAction("product/getPhones");
const getAllProducts = createAction("product/getAllProducts");
const setLoader = createAction("product/setLoader");
const setError = createAction("product/setError");
const resetError = createAction("product/resetError");

export {
  addProduct,
  deleteProduct,
  getLaptops,
  getPhones,
  getAllProducts,
  setLoader,
  setError,
  resetError,
};

// =================================== redux =======================================

// const ADD_PRODUCT = "addProduct";
// const DELETE_PRODUCT = "deleteProduct";
// const GET_ALL_PRODUCTS = "getAllProducts";
// const GET_PHONES = "getPhones";
// const GET_LAPTOPS = "getLaptops";

// export {
//   ADD_PRODUCT,
//   DELETE_PRODUCT,
//   GET_ALL_PRODUCTS,
//   GET_PHONES,
//   GET_LAPTOPS,
// };
// const addProduct = (product) => ({
//   type: ADD_PRODUCT,
//   payload: product,
// });

// const deleteProduct = (category, id) => ({
//   type: DELETE_PRODUCT,
//   payload: { category, id },
// });
// const getLaptops = (laptops) => ({
//   type: GET_LAPTOPS,
//   payload: laptops,
// });
// const getPhones = (phones) => ({
//   type: GET_PHONES,
//   payload: phones,
// });
// const getAllProducts = (products) => ({
//   type: GET_ALL_PRODUCTS,
//   payload: products,
// });

// export { addProduct, deleteProduct, getLaptops, getPhones, getAllProducts };
