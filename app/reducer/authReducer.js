import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

const AuthReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logoutFromRedux: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { login, logoutFromRedux, setLoading } = AuthReducer.actions;

export default AuthReducer.reducer;
