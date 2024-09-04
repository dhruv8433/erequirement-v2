/**
 * Custom hook to manage Home Screen Data state and actions.
 * @returns {Object} - Providers and action handlers
 */

import { useEffect, useState } from "react";
import { getProviders } from "../utils/GetProviders";
import { getSingleService } from "../utils/GetServices";

export function useProviders(providerId) {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProviders() {
    try {
      const response = await getProviders();
      setProviders(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error in fetching providers", error);
    }
  }

  async function fetchSingleProvider() {
    try {
      const response = await getSingleService(providerId);
      console.log("Single Provider", response.data);
    } catch (error) {
      console.log("Error in fetching single provider", error);
    }
  }

  // fetch providers when page loads
  useEffect(() => {
    fetchProviders();
  }, []);

  return {
    providers,
    loading,
  };
}
