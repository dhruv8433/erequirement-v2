import { useEffect, useState } from "react";
import { getProviders, getSignleProvider } from "../utils/GetProviders";

export function useProviders(providerId) {
  const [providers, setProviders] = useState({
    data: [],
    currentPage: 1,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);
  const [singleProvider, setSingleProvider] = useState({});
  const [singleProviderLoading, setSingleProviderLoading] = useState(true);

  const limit = 8;
  const [page, setPage] = useState(1); // local page state

  // Fetch multiple providers data
  async function fetchProviders() {
    setLoading(true); // Start loading on new fetch
    try {
      const response = await getProviders(page, limit);

      // Assuming the response includes currentPage, totalPages, and data
      setProviders({
        data: response.data,
        currentPage: response.currentPage || page, // Use the page from response or local state
        totalPages: response.totalPages || 1,
      });

      setLoading(false); // End loading when fetch completes
    } catch (error) {
      console.log("Error in fetching providers", error);
      setLoading(false); // End loading in case of error
    }
  }

  // Fetch single provider data
  async function fetchSingleProvider() {
    try {
      const response = await getSignleProvider(providerId);
      console.log("Single Provider", response.data);
      setSingleProvider(response.data);
      setSingleProviderLoading(false);
    } catch (error) {
      console.log("Error in fetching single provider", error);
      setSingleProviderLoading(false); // End loading in case of error
    }
  }

  // Fetch providers data when page changes
  useEffect(() => {
    fetchProviders();
  }, [page]); // Trigger fetch on page change

  // Fetch single provider if providerId is provided
  useEffect(() => {
    if (providerId) fetchSingleProvider();
  }, [providerId]);

  return {
    providers,
    loading,
    singleProvider,
    singleProviderLoading,
    setPage, // Expose setPage for pagination
  };
}
