import { httpAxios } from "../httpAxios";

// place order based on order tyep [cod, stripe, paypal]
async function PlaceOrder(cartId, userId, orderType) {
  const response = await httpAxios.post(`/order/place-order`, {
    userId,
    cartId,
    orderType,
  });

  return response.data;
}

export { PlaceOrder };
