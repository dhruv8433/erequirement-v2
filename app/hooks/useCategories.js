/**
 * @returns {object} - Categories data and action functions.
 */

import { useEffect, useState } from "react";
import { getCategories } from "../utils/GetCategories";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCategories() {
    try {
      const response = await getCategories();
      console.log(response);
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error in fetching categories", error);
    }
  }

  // fetch categories when page loads
  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
  };
}
