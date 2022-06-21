import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice";
import favoritesReducer from "../features/favoritesSlice";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    favorites: favoritesReducer,
    user: userReducer,
  },
});
