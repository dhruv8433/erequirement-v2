import { httpAxios } from "../httpAxios";

export async function searchQuery(query) {
  try {
    const response = await httpAxios.get(`/search/${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
