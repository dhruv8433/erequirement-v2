"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSingleService } from "@/app/utils/GetServices";
import ServiceDetailed from "@/app/components/services/ServiceDetailed";

const page = () => {
  const { id } = useParams();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchSingleService() {
    try {
      const response = await getSingleService(id);
      console.log("Single Service", response.data);
      setServices(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch single service", error);
    }
  }

  useEffect(() => {
    fetchSingleService();
  }, []);
  return (
    <div>
      <ServiceDetailed loading={loading} service={services} />
    </div>
  );
};

export default page;
