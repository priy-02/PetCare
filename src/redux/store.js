import { configureStore } from "@reduxjs/toolkit";

import petReducer from "./slices/petSlice.js";
import cartReducer from "./slices/cartSlice.js";

const store = configureStore({
  reducer: {
    pets: petReducer,
    cart: cartReducer,
  },
});

export default store;