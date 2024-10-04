import { httpAxios } from "../httpAxios";

// add particular service to wishlist
async function addWishlist(userId, serviceId) {
  const response = await httpAxios.post(`/profile/add-wishlist`, {
    userId,
    serviceId,
  });

  return response.data;
}

// get particular user's all wishlist services
async function getWishlist(userId, offset, limit) {
  const response = await httpAxios.get(
    `/profile/get-wishlist/${userId}?offset=${offset - 1}&limit=${limit}`
  );
  return response.data;
}

// remove particular wishlist
async function removeWishlist(userId, serviceId) {
  const response = await httpAxios.delete(
    `/profile/delete-wishlist/${userId}/${serviceId}`
  );

  return response.data;
}

async function removeAllWishlists(userId) {
  const response = await httpAxios.delete(`/profile/delete-wishlist/${userId}`);
  return response.data;
}

export { addWishlist, getWishlist, removeWishlist, removeAllWishlists };
