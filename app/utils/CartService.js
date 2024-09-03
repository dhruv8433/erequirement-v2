import { httpAxios } from "../httpAxios";

// Fetch the user's cart
export async function fetchCartData(userId) {
  const response = await httpAxios.get(`/cart/get/${userId}`);
  return response.data;
}

// Add a service to the cart
export async function addToCart(userId, serviceId) {
  const response = await httpAxios.post(`/cart/add`, {
    userId: userId,
    serviceId: serviceId,
  });
  return response.data;
}

// Remove a service from the cart
export async function removeItemFromCart(userId, serviceId) {
  const response = await httpAxios.delete(`/cart/remove`, {
    data: {
      userId: userId,
      serviceId: serviceId,
    },
  });
  return response.data;
}

// Update the quantity of a service in the cart
export async function updateQuantityInCart(userId, serviceId, qty) {
  const response = await httpAxios.put(`/cart/update-qty`, {
    userId: userId,
    serviceId: serviceId,
    quantity: qty,
  });
  return response.data;
}
