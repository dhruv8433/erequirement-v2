"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getSignleProvider } from "@/app/utils/GetProviders";
import ProviderDetailed from "@/app/components/providers/ProviderDetailed";
import { getProviderServices } from "@/app/utils/GetServices";

const page = () => {
  const { id } = useParams();
  const [provider, setProvider] = useState({});
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serviceLoading, setServiceLoading] = useState(true);

  async function fetchProvider() {
    try {
      // provider
      const response = await getSignleProvider(id);
      console.log("Provider Fetch Success", response.data);
      setProvider(response.data);
      setLoading(false);
      // service
      const serviceData = await getProviderServices(id);
      console.log("Provider Fetch Success", serviceData.data);
      setServices(serviceData.data);
      setServiceLoading(false);
    } catch (error) {
      console.log("Error in getting provider", error);
    }
  }

  useEffect(() => {
    fetchProvider();
  }, []);

  return (
    <ProviderDetailed
      loading={loading}
      provider={provider}
      serviceLoading={serviceLoading}
      services={services}
    />
  );
};

export default page;
