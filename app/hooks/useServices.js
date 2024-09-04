/**
 *
 * @param {id} - take id of service and find it
 * @returns {Object} - return service data
 */

import { useEffect, useState } from "react";
import { getServices } from "../utils/GetServices";

export function useServices(id) {
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchService() {
    try {
      const response = await getServices(id);
      console.log(response);
      setService(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error in fetching service", error);
    }
  }

  useEffect(() => {
    fetchService();
  }, []);

  return {
    service,
    loading,
  };
}
