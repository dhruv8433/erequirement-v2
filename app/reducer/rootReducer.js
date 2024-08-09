import { combineReducers } from "redux";
import { homeScreenReducers } from "./homeScreenReducers";

export const rootReducer = combineReducers({
  homeScreen: homeScreenReducers,
});
