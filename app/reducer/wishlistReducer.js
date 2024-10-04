const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  wishlists: [], // List of wishlist items
};

const WishlistReducer = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // Set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    // Set wishlists to Redux state
    setWishlistsToRedux: (state, action) => {
      state.wishlists = action.payload;
    },

    // Remove all wishlists (clear the array)
    removeAll: (state) => {
      state.wishlists = [];
    },

    // Remove a specific wishlist item by its serviceID (or any other unique identifier)
    removeWishlistById: (state, action) => {
      const serviceIDToRemove = action.payload; // Expecting serviceID to be passed as payload
      state.wishlists = state.wishlists.wishlist.services.filter(
        (wishlist) => wishlist.serviceID !== serviceIDToRemove
      );
    },
  },
});

// Export the actions
export const { setWishlistsToRedux, removeAll, removeWishlistById } =
  WishlistReducer.actions;

// Export the reducer
export default WishlistReducer.reducer;
