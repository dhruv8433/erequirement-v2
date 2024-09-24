const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  wishlists: [],
};

const WishlistReducer = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setWishlistsToRedux: (state, action) => {
      state.wishlists = action.payload;
    },
  },
});

export const { setWishlistsToRedux } = WishlistReducer.actions;

export default WishlistReducer.reducer;
