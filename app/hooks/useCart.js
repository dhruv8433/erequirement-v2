import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  fetchCartData,
  addToCart,
  removeItemFromCart,
  updateQuantityInCart,
} from "@/app/utils/CartService";

/**
 * Custom hook to manage cart state and actions.
 * @param {string} userId - The ID of the user.
 * @returns {Object} - Cart data, other info, and action functions.
 */

export function useCart(userId) {
  const [cartData, setCartData] = useState([]);
  const [otherInfo, setOtherInfo] = useState([]);

  const loadCart = async () => {
    try {
      const data = await fetchCartData(userId);
      setCartData(data.data.service);
      setOtherInfo(data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors || "Failed to load cart data.";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (userId) {
      loadCart();
    }
  }, [userId]);

  const handleRemove = async (serviceId) => {
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
    try {
      const response = await addToCart(userId, serviceId);
      if (response.success) {
        toast.success(response.message || "Item removed successfully.");
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
    cartData,
    otherInfo,
    handleRemove,
    handleUpdateQuantity,
    reloadCart: loadCart,
    AddServiceToCart,
  };
}