import { httpAxios } from "../httpAxios";

// utils for getting providers
export async function getProviders() {
  const response = await httpAxios.get("/get-providers");
  return response.data;
}

export async function getSignleProvider(id) {
  const response = await httpAxios.get(`/get-providers/${id}`);
  return response.data;
}
