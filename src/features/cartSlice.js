import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: {} };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { initializeCart } = cartSlice.actions;
