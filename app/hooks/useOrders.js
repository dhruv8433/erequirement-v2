import { useEffect, useState } from "react";
import { fetchOrderById, fetchOrders, PlaceOrder } from "../utils/OrderService";

export function useOrders(userId, cartId, orderType, orderId) {
  const [order, setOrder] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [userOrders, setUserOrders] = useState([]);
  const [userOrdersLoading, setUserOrdersLoading] = useState(true);

  const [page, setPage] = useState(1); // Default to the first page
  const limit = 3; // Define the limit for orders per page

  const [singleOrder, setSingleOrder] = useState([]);
  const [singleOrderLoading, setSingleOrderLoading] = useState(true);

  async function placeOrder() {
    try {
      setLoading(true);
      const response = await PlaceOrder(cartId, userId, orderType);
      setOrder(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function getUserOrders() {
    try {
      const response = await fetchOrders(userId, page, limit);
      setUserOrders(response.data);
      setUserOrdersLoading(false);
    } catch (error) {
      console.log("error in fetching orders", error);
      setError(error);
    }
  }

  async function getSingleOrder() {
    try {
      const response = await fetchOrderById(userId, orderId);
      setSingleOrder(response.data);
      setSingleOrderLoading(false);
    } catch (error) {
      console.log("error in fetching single order", error);
    }
  }

  // get user orders
  useEffect(() => {
    if (userId) getUserOrders();
    if (orderId) getSingleOrder();
  }, [page, userId]);

  return {
    order,
    error,
    loading,
    placeOrder,
    userOrders,
    userOrdersLoading,
    setPage,
    singleOrder,
    singleOrderLoading,
  };
}
