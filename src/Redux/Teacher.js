import { createSlice } from "@reduxjs/toolkit";

export const teacherslice = createSlice({
  name: "teacher",
  initialState: {
    teacherState: [],
  },
  reducers: {
    teacherStatefu: (state, action) => {
      state.teacher = action.payload;
    },

  },
});

export const { teacherStatefu } = teacherslice.actions;


export default teacherslice.reducer;
