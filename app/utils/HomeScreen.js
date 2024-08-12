import { httpAxios } from "../httpAxios";

// utils for getting home screen data
export async function getHomeScreen() {
  const response = await httpAxios.get("/get-home-screen-data");
  return response.data;
}
