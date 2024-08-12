import { httpAxios } from "../httpAxios";

// utils for getting providers
export async function getProviders() {
  const response = await httpAxios.get("/get-providers");
  return response.data;
}
