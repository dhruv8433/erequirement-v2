import { httpAxios } from "../httpAxios";

// utils for getting providers
export async function getProviders(offert, limit) {
  const response = await httpAxios.get(
    `/get-providers?offset=${offert - 1}&limit=${limit}`
  );
  return response.data;
}

export async function getSignleProvider(id) {
  const response = await httpAxios.get(`/get-providers/${id}`);
  return response.data;
}
