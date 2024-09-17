/**
 *
 * @param {id} - take id of service and find it
 * @returns {Object} - return service data
 */

import { useEffect, useState } from "react";
import { getProviderServices, getServices } from "../utils/GetServices";

export function useServices(id, serviceId) {
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);
  const [providerService, setProviderServices] = useState([]);
  const [serviceLoading, setServiceLoading] = useState(true);

  async function fetchService() {
    try {
      const response = await getServices(serviceId);
      console.log(response);
      setService(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error in fetching service", error);
    }
  }

  async function fetchProviderServices(id) {
    try {
      const serviceData = await getProviderServices(id);
      setProviderServices(serviceData.data);
      setServiceLoading(false);
    } catch (error) {
      console.log("Error in getting provider", error);
    }
  }

  useEffect(() => {
    fetchService(serviceId);
    fetchProviderServices(id);
  }, []);

  return {
    service,
    loading,
    providerService,
    serviceLoading,
  };
}
