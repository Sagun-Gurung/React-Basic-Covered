import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import addressSlice from "../features/addressSlice";
import productSlice from "../features/productSlice";
import { productApi } from "../projectComponent/services/api/productService";

export const store = configureStore({
  reducer: {
    info: counterSlice,
    address: addressSlice,
    product: productSlice,

    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware]),
});
