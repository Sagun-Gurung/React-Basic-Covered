import { createSlice } from "@reduxjs/toolkit";

let initialStateValue = {
  name: "Apple",
  price: 5000000,
  quantity: 300,
};

export const productSlice = createSlice({
  name: "productsInfo",
  initialState: initialStateValue,
  reducers: {
    changePName: (state, action) => {
      state.name = action.payload;
    },
    changePrice: (state) => {
      state.price = 3020392;
    },
    changeQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { changePName, changePrice, changeQuantity } =
  productSlice.actions;
export default productSlice.reducer;
