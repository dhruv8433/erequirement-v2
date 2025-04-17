import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { errorMessages } from "../config/config";
import { setCart } from "../reducer/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartData,
  addToCart,
  removeItemFromCart,
  updateQuantityInCart,
} from "@/app/utils/CartService";

export function useCart() {
  const isUserAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  const userId = useSelector((state) => state.auth?.user?.user?._id);

  // Always call selectors unconditionally
  const cartData = useSelector((state) => state?.cart?.cart?.service);
  const otherInfo = useSelector((state) => state?.cart?.cart);
  const hasCartData = cartData && cartData.length > 0;

  const dispatch = useDispatch();
  const [loadingServiceId, setLoadingServiceId] = useState(null);

  const loadCart = async () => {
    if (!userId) return;
    try {
      const data = await fetchCartData(userId);
      dispatch(setCart(data.data));
    } catch (error) {
      const statusCode = error?.response?.status;
      if (statusCode === 404) {
        dispatch(setCart(null));
      }
      const errorMessage =
        error.response?.data?.errors || "Failed to load cart data.";
      console.log("Error", errorMessage);
    }
  };

  useEffect(() => {
    if (userId) {
      loadCart();
    }
  }, [userId]);

  const handleRemove = async (serviceId) => {
    if (!userId) return;
    try {
      const response = await removeItemFromCart(userId, serviceId);
      if (response.success) {
        toast.success(response.message || "Item removed successfully.");
      } else {
        toast.error(response.errors || "Failed to remove item.");
      }
      loadCart();
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors || "Failed to remove item.";
      toast.error(errorMessage);
    }
  };

  const handleUpdateQuantity = async (serviceId, qty) => {
    if (!userId) return;
    setLoadingServiceId(serviceId);
    try {
      const response = await updateQuantityInCart(userId, serviceId, qty);
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.errors || "Failed to update quantity.");
      }
      await loadCart();
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors || "Failed to update quantity.";
      toast.error(errorMessage);
    } finally {
      setLoadingServiceId(null);
    }
  };

  const AddServiceToCart = async (serviceId) => {
    if (!userId) {
      toast.error(errorMessages.loginForAdd);
      return;
    }
    try {
      const response = await addToCart(userId, serviceId);
      if (response.success) {
        toast.success(response.message || "Item added to cart.");
        loadCart();
      } else {
        toast.error(response.errors || "Failed to add item.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors || "Failed to update quantity.";
      toast.error(errorMessage);
    }
  };

  return {
    cartData: hasCartData ? cartData : [],
    otherInfo,
    handleRemove,
    handleUpdateQuantity,
    reloadCart: loadCart,
    AddServiceToCart,
    loadingServiceId,
  };
}

