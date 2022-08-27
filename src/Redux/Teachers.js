import { createSlice } from "@reduxjs/toolkit";

export const teachersslice = createSlice({
  name: "teachers",
  initialState: {
    teachersState: [],
  },
  reducers: {
    teachersStatefu: (state, action) => {
      state.teachers = action.payload;
    },

  },
});

export const { teachersStatefu } = teachersslice.actions;


export default teachersslice.reducer;
