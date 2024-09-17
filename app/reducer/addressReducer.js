import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addresses: [],
  loading: false,
};

const addressesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    setAddresses: (state, action) => {
      state.addresses = action.payload;
    },
    removeAddressFromState: (state, action) => {
      state.addresses = state.addresses.addresses.filter(
        (address) => address._id !== action.payload
      );
    },
  },
});

export const { setAddresses, removeAddressFromState } = addressesSlice.actions;

export default addressesSlice.reducer;
