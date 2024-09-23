import { useEffect, useState } from "react";
import { PlaceOrder } from "../utils/OrderService";

export function useOrders(userId, cartId, orderType) {
  const [order, setOrder] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return { order, error, loading, placeOrder };
}
