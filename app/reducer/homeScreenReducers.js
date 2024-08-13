import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const homeScreenReducers = createSlice({
  // name of the reducer
  name: "homeScreen",
  // set initial state
  initialState,
  // define reducer
  reducers: {
    setHomeScreenData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// define action
export const { setHomeScreenData } = homeScreenReducers.actions;

// export reducer
export default homeScreenReducers.reducer;
