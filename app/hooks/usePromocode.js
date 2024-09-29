import { useState } from "react";
import { ValidatePromocode } from "../utils/PromocodeService";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { errorMessages } from "../config/config";
import { useCart } from "./useCart";

export const usePromocode = (promocode) => {
  const [cartData, setCartData] = useState([]);
  const cartId = useSelector((state) => state.cart.cart._id);

  const { reloadCart } = useCart();

  // validate and give extra discound on promocodes
  const CheckPromocode = async () => {
    try {
      const response = await ValidatePromocode(promocode, cartId);
      console.log("response", response);
      setCartData(response);
      // after setting promocode reload the cart
      reloadCart();
      toast.success(response.message || errorMessages.promocodeSuccess)
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.errors || errorMessages.promocode);
    }
  };

  return { cartData, CheckPromocode };
};
