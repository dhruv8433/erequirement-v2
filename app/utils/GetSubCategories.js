import { httpAxios } from "../httpAxios";

export async function getSubCategories() {
  const response = await httpAxios.get("/get-sub-categorys");
  return response.data;
}

export async function getSingleSubCategory(id) {
  const response = await httpAxios.get(`/get-sub-categorys/${id}`);
  return response.data;
}
