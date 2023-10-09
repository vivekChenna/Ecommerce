import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    DarkMode: false,
  },

  reducers: {
    toggleMode: (state, actions) => {
      state.DarkMode = !state.DarkMode;
    },
  },
});

export const { toggleMode } = appSlice.actions;

export default appSlice.reducer;
