import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducser";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
