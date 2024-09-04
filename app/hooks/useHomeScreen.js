/**
 * Custom hook to manage Home Screen Data state and actions.
 * @returns {Object} - Addresses data and action functions.
 */

import { useEffect, useState } from "react";
import { getHomeScreen } from "../utils/HomeScreen";

export function useHomeScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getHomeScreenData() {
    try {
      const response = await getHomeScreen();
      setData(response); // Local state update
    } catch (error) {
      console.log("error: " + error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  }

  useEffect(() => {
    getHomeScreenData();
  }, []);

  return {
    data,
    loading,
  };
}
