import { httpAxios } from "../httpAxios";

// Particular provider servics
export async function getProviderServices(id) {
  const response = await httpAxios.get(`/get-services/provider/${id}`);
  return response.data;
}

// utils for getting services
export async function getServices() {
  const response = await httpAxios.get("/get-services");
  return response.data;
}

// particular service
export async function getSingleService(id) {
  const response = await httpAxios.get(`/get-services/${id}`);
  return response.data;
}
