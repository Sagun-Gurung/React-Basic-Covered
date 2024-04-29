import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "Scylla",
  age: 400,
  isMarried: false,
};

export const counterSlice = createSlice({
  // give unique name
  name: "infoSlice",
  initialState: initialStateValue,
  reducers: {
    changeName: (state, actions) => {
      // state.name = "Circe";
      state.name = actions.payload; //dynamic = taking value from
    },
    changeAge: (state) => {
      state.age = 455500;
    },
  },
});

export const { changeName, changeAge } = counterSlice.actions;
export default counterSlice.reducer;
