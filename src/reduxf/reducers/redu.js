import { createSlice } from "@reduxjs/toolkit";

export const incSlices = createSlice({
  name: "counter",
  initialState: 10,
  reducers: {
    Inc: (state, action) => {
      return (state += action.payload);
    },
    Dec: (state, action) => {
      return state > 0 ? (state -= action.payload) : 0;
    },
  },
});

export const { Inc, Dec } = incSlices.actions;
export default incSlices.reducer;
