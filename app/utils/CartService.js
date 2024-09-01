const { httpAxios } = require("../httpAxios");

// GET USER CART
async function getCart(userId) {
  const response = await httpAxios.get(`/cart/get/${userId}`);
  return response.data;
}

// ADD SERVICE TO CART
async function AddToCart(userId, serviceId) {
  const response = await httpAxios.post(`/cart/add`, {
    userId: userId,
    serviceId: serviceId,
  });

  return response.data;
}

// REMOVE SERVICE FROM CART
async function RemoveService(userId, serviceId) {
  const response = await httpAxios.delete(`/cart/remove`, {
    data: {
      userId: userId,
      serviceId: serviceId,
    },
  });
  return response.data;
}

// UPDATE QTY IN CART
async function UpdateQty(userId, serviceId, qty) {
  const response = await httpAxios.put(`/cart/update-qty`, {
    userId: userId,
    serviceId: serviceId,
    quantity: qty,
  });
  return response.data;
}

export { AddToCart, getCart, RemoveService, UpdateQty };
