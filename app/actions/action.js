import { SetHomeScreenData } from "../reducer/Constants";

export const StoreHomeScreenData = (data) => {
  return {
    type: SetHomeScreenData,
    payload: data,
  };
};
