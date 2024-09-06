import { useEffect, useState } from "react";
import { searchQuery } from "@/app/utils/SearchService"; // Assuming this is where you make the API call

export function useSearch(query) {
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // search query send to server and get response
  const fetchSearchedResult = async () => {
    setLoading(true);
    try {
      const response = await searchQuery(query); // Fetch data from API
      setSearchResult(response.data);
    } catch (error) {
      setError(error);
      console.log("Error during search:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchSearchedResult(); // Only call if query is provided
    }
  }, [query]); // Run when query changes

  return { searchResult, loading, error };
}
