import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../features/toggle/toggleSlice";
import productsReducer from "../features/products/productsSlice";
import filtersReducer from "../features/filters/filtersSlice";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        toggle: toggleReducer,
        products: productsReducer,
        filters: filtersReducer,
        cart: cartReducer,
        auth: authReducer,
    },
});