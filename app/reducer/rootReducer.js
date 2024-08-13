import { combineReducers } from "redux";
import ThemeReducer from "./ThemeReducer";
import homeScreenReducers from "./homeScreenReducers";

export const rootReducer = combineReducers({
  homeScreen: homeScreenReducers,
  theme: ThemeReducer
});
