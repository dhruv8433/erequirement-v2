import { useEffect, useState } from "react";
import { fetchOrders, PlaceOrder } from "../utils/OrderService";

export function useOrders(userId, cartId, orderType) {
  const [order, setOrder] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [userOrders, setUserOrders] = useState([]);
  const [userOrdersLoading, setUserOrdersLoading] = useState(true);

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
      const response = await fetchOrders(userId);
      setUserOrders(response.data);
      setUserOrdersLoading(false);
    } catch (error) {
      console.log("error in fetching orders", error);
      setError(error);
    }
  }

  // get user orders
  useEffect(() => {
    getUserOrders();
  }, []);

  return { order, error, loading, placeOrder, userOrders, userOrdersLoading };
}
