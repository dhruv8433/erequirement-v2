import { combineReducers } from "redux";
import ThemeReducer from "./ThemeReducer";
import authReducer from "./authReducer";
import addressReducer from "./addressReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

export const rootReducer = combineReducers({
  theme: ThemeReducer,
  auth: authReducer,
  address: addressReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});
