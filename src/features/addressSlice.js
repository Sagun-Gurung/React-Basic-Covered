import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  city: "Edinburgh",
  province: 9724954,
};

export const counterSlice = createSlice({
  // give unique name
  name: "addressSlice",
  initialState: initialStateValue,
  reducers: {
    changeCity: (state) => {
      state.city = "Glasgow";
    },
    changeProvince: (state, actions) => {
      state.province = actions.payload;
    },
  },
});

export const { changeCity, changeProvince } = counterSlice.actions;
export default counterSlice.reducer;
