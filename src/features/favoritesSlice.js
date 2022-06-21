import { createSlice } from "@reduxjs/toolkit";

const initialState = { length: 0, products: [] };

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    initializeFavorites: (state, action) => {
      state.products = action.payload;
      state.length = state.products?.length;
    },
    addToFavorites: (state, action) => {
      const { id } = action.payload;
      if (state.products.find((prod) => prod.id === id)) {
        return;
      } else {
        state.products.push(action.payload);
        state.length = state.products.length;
      }
    },
    removeFromFavorites: (state, action) => {
      state.products = state.products.filter((prod) => prod.id !== action.payload);
      state.length = state.products.length;
    },
  },
});

export default favoritesSlice.reducer;
export const { addToFavorites, removeFromFavorites, initializeFavorites } = favoritesSlice.actions;

export const selectProductIds = (state) => state.favorites.products.map((prod) => prod.id);
