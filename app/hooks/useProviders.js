/**
 * Custom hook to manage Home Screen Data state and actions.
 * @returns {Object} - Providers and action handlers
 */

import { useEffect, useState } from "react";
import { getProviders, getSignleProvider } from "../utils/GetProviders";

export function useProviders(providerId) {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleProvider, setSingleProvider] = useState({});
  const [singleProviderLoading, setSingleProviderLoading] = useState(true);

  const limit = 12;
  const [page, setPage] = useState(1);

  async function fetchProviders() {
    try {
      const response = await getProviders(page, limit);
      setProviders(response);
      setLoading(false);
    } catch (error) {
      console.log("Error in fetching providers", error);
    }
  }

  async function fetchSingleProvider() {
    try {
      const response = await getSignleProvider(providerId);
      console.log("Single Provider", response.data);
      setSingleProvider(response.data);
      setSingleProviderLoading(false);
    } catch (error) {
      console.log("Error in fetching single provider", error);
    }
  }

  // fetch providers when page loads
  useEffect(() => {
    fetchProviders();
  }, [page]);

  useEffect(() => {
    if (providerId) fetchSingleProvider(providerId);
  }, []);

  return {
    providers,
    loading,
    singleProvider,
    singleProviderLoading,
    setPage,
  };
}
