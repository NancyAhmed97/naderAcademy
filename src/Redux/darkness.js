import { createSlice } from "@reduxjs/toolkit";

export const darknessnSlice = createSlice({
  name: "darkness",
  initialState: {
    darknessState: true,
  },
  reducers: {
    darknessStatefu: (state, action) => {
      state.darkness = action.payload;
    },

  },
});

export const { darknessStatefu } = darknessnSlice.actions;


export default darknessnSlice.reducer;
