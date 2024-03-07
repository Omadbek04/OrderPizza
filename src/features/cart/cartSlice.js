import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteItem: (state, action) => {},
    addItem: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    clearCart: (state, action) => {},
    increaseQuantitiy: (state, action) => {},
    decreaseQuantitiy: (state, action) => {},
    getTotalQuantitiy: (state) => {
      state.quantity = state.cart.reduce((prev, current) => (prev += current.quantity), 0);
    },
    getTotalPrice: (state,action) => {
      state.total = state.quantity * action.payload;
    },
  },
});

export const { deleteItem, addItem, clearCart, increaseQuantitiy, decreaseQuantitiy, getTotalQuantitiy, getTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
// cart: [
//   {
//     pizzaId: 123,
//     name: "Margarita",
//     unitPrice: 12,
//     quantitiy: 2,
//     totalPrice: 40,
//   },
// ],
