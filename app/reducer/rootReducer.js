import { combineReducers } from "redux";
import ThemeReducer from "./ThemeReducer";
import homeScreenReducers from "./homeScreenReducers";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  homeScreen: homeScreenReducers,
  theme: ThemeReducer,
  auth: authReducer,
});
