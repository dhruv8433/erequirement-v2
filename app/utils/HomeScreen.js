import { httpAxios } from "../httpAxios";

export async function getHomeScreen() {
  const response = await httpAxios.get("/get-home-screen-data");
  console.log("home", response);
  return response.data;
}
