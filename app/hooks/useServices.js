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
  const [providerService, setProviderServices] = useState({
    data: [],
    totalPage: 1,
    currentPage: 1,
  });
  const [serviceLoading, setServiceLoading] = useState(true);

  const limit = 6;
  const [page, setPage] = useState(1);

  async function fetchService() {
    setLoading(true);
    try {
      const response = await getServices(serviceId);
      console.log(response);
      setService(response.data.services);
      setLoading(false);
    } catch (error) {
      console.log("Error in fetching service", error);
    }
  }

  async function fetchProviderServices(id) {
    try {
      const serviceData = await getProviderServices(id, page, limit);
      setProviderServices({
        data: serviceData.data,
        currentPage: serviceData.data.currentPage || page,
        totalPages: serviceData.data.totalPages || 1,
      });
      setServiceLoading(false);
    } catch (error) {
      console.log("Error in getting provider", error);
      setServiceLoading(false);
    }
  }

  useEffect(() => {
    if (serviceId) fetchService(serviceId);
    fetchProviderServices(id);
  }, [page]);

  return {
    service,
    loading,
    providerService,
    serviceLoading,
    setPage,
  };
}
