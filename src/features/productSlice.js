import { createSlice } from "@reduxjs/toolkit";

const initialState = { size: null, quantity: 0 };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProductSize: (state, action) => {
      state.size = action.payload;
    },
    increaseProductQuantity: (state) => {
      state.quantity += 1;
    },
    decreaseProductQuantity: (state) => {
      state.quantity -= 1;
    },
    clearProduct: (state) => {
      state.size = null;
      state.quantity = 0;
    },
  },
});

export default productSlice.reducer;
export const { updateProductSize, increaseProductQuantity, decreaseProductQuantity, clearProduct } =
  productSlice.actions;
