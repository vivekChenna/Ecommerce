import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    DarkMode: false,
    cartItems: [],
    AllProducts: [],
  },

  reducers: {
    toggleMode: (state, actions) => {
      state.DarkMode = !state.DarkMode;
    },

    AddToCartItem: (state, actions) => {
      state.cartItems.push(actions.payload);
    },

    AllProductsData: (state, action) => {
      state.AllProducts = [...action.payload];
    },
  },
});

export const { toggleMode, AddToCartItem, AllProductsData } = appSlice.actions;

export default appSlice.reducer;
