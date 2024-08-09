import { SetHomeScreenData } from "./Constants";

const initialState = {
  data: [],
};

export const homeScreenReducers = (state = initialState, action) => {
  switch (action.type) {
    case SetHomeScreenData:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
