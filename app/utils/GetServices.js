import { httpAxios } from "../httpAxios";

// Particular provider servics
export async function getProviderServices(id, offset, limit) {
  const response = await httpAxios.get(
    `/get-services/provider/${id}?offset=${offset - 1}&limit=${limit}`
  );
  return response.data;
}

// utils for getting services
export async function getServices(offset, limit) {
  const response = await httpAxios.get(
    `/get-services?offset=${offset - 1}&limit=${limit}`
  );
  return response.data;
}

// particular service
export async function getSingleService(id) {
  const response = await httpAxios.get(`/get-services/${id}`);
  return response.data;
}
