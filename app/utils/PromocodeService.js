import { httpAxios } from "../httpAxios";

// validate and give extra discound on promocodes
async function ValidatePromocode(promo, cartId) {
  const response = await httpAxios.post(`/promocode/validate`, {
    promocode: promo,
    cartId: cartId,
  });

  return response.data;
}

export { ValidatePromocode };
