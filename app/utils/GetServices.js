import { httpAxios } from "../httpAxios";

// utils for getting services
export async function getServices() {
  const response = await httpAxios.get("/get-services");
  return response.data;
}

// Particular provider servics
export async function getProviderServices(id) {
  const response = await httpAxios.get(`/get-services/provider/${id}`);
  return response.data;
}
