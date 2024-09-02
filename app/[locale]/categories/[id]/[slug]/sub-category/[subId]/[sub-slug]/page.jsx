"use client";

import Provider from "@/app/common/Provider";
import { ProviderSkeletons } from "@/app/custom/CustomSkeleton";
import { getProviders } from "@/app/utils/GetProviders";
import { getSingleSubCategory } from "@/app/utils/GetSubCategories";
import { Grid } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serviceProviders, setServiceProviders] = useState([]);

  const { subId } = useParams();

  // First, we fetch the single sub-category and based on that, we filter providers
  async function fetchSubCategory() {
    try {
      const response = await getSingleSubCategory(subId);
      console.log(response.data.providers);
      setServiceProviders(response.data.providers);
    } catch (error) {
      console.log("Error in fetching subcategory", error);
    }
  }

  async function fetchProviders() {
    try {
      const response = await getProviders();
      console.log("providers", response.data);
      setProviders(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error in getting providers", error);
    }
  }

  useEffect(() => {
    fetchSubCategory();
    fetchProviders();
  }, []);

  return (
    <div className="my-4">
      <Grid container>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Grid item key={index} xs={12} md={3}>
                <ProviderSkeletons key={index} />
              </Grid>
            ))
          : providers.map((provider) =>
              serviceProviders.includes(provider.id) ? (
                <Grid item key={provider.id} xs={12} md={3}>
                  <Provider key={provider.id} provider={provider} />
                </Grid>
              ) : null
            )}
      </Grid>
    </div>
  );
};

export default Page;
