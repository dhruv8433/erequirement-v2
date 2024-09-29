import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  fetchCartData,
  addToCart,
  removeItemFromCart,
  updateQuantityInCart,
} from "@/app/utils/CartService";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../reducer/cartReducer";
import { errorMessages } from "../config/config";

/**
 * Custom hook to manage cart state and actions.
 * @param {string} userId - The ID of the user.
 * @returns {Object} - Cart data, other info, and action functions.
 */

export function useCart() {
  let cartData = null,
    otherInfo = null;
  const isUserAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  let userId;
  if (isUserAuthenticated) {
    userId = useSelector((state) => state.auth?.user?.user?._id);
  }

  if (userId) {
    cartData = useSelector((state) => state?.cart?.cart?.service);
    otherInfo = useSelector((state) => state?.cart?.cart);
  }

  // Ensure cartData exists before accessing any properties on it
  const hasCartData = cartData && cartData.length > 0;

  const dispatch = useDispatch();

  const loadCart = async () => {
    if (!userId) return; // Make sure userId exists before fetching
    try {
      const data = await fetchCartData(userId);
      dispatch(setCart(data.data));
    } catch (error) {
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
    try {
      const response = await updateQuantityInCart(userId, serviceId, qty);
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.errors || "Failed to update quantity.");
      }
      loadCart();
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors || "Failed to update quantity.";
      toast.error(errorMessage);
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
        toast.success(response.message || "Item removed successfully.");
        loadCart();
      } else {
        toast.error(response.errors || "Failed to remove item.");
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
  };
}
