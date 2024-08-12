import { httpAxios } from "../httpAxios";

export async function getCategories() {
  const response = await httpAxios.get(`/get-categories`);
  return response.data;
}
