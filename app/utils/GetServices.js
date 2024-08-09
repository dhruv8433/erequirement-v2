import { httpAxios } from "../httpAxios";

export async function getServices() {
  const response = await httpAxios.get("/get-services");
  return response.data;
}
