import { createSlice } from "@reduxjs/toolkit";

export const profillice = createSlice({
  name: "profil",
  initialState: {
    profilState: {},
  },
  reducers: {
    profilStatefu: (state, action) => {
      state.profil = action.payload;
    },

  },
});

export const { profilStatefu } = profillice.actions;


export default profillice.reducer;
