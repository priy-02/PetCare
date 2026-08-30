import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },


    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (!existingItem) {
        return;
      }

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload
        );
      }
    },


    clearCart: (state) => {
      state.items = [];
    },

  },
});


export const {
  addToCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;


export default cartSlice.reducer;