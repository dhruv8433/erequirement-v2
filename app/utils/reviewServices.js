import { httpAxios } from "../httpAxios";

async function getProvidersReviews() {
  const response = await httpAxios.get("/review/provider");
  return response.data;
}

async function getParticularProviderReviews(id) {
  const response = await httpAxios.get(`/review/provider/${id}`);
  return response.data;
}

export { getProvidersReviews, getParticularProviderReviews };
