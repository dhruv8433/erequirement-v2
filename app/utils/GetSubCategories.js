import { httpAxios } from "../httpAxios";

export async function getSubCategories() {
  const response = await httpAxios.get("/get-sub-categorys");
  return response.data;
}
