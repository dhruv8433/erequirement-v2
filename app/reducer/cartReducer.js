const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: [],
  loading: true,
};

const CartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      state.loading = false;
    },
    clearCart: (state) => {
      state.cart = null;
      state.loading = false;
    },
  },
});

export const { setCart, clearCart } = CartReducer.actions;

export default CartReducer.reducer;
