import { combineReducers } from "redux";
import ThemeReducer from "./ThemeReducer";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  theme: ThemeReducer,
  auth: authReducer,
});
