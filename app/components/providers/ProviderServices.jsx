"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Grid, Pagination } from "@mui/material";
import { MyCardBox } from "@/app/custom/MyBox";
import { useServices } from "@/app/hooks/useServices";
import { useParams } from "next/navigation";
import { ProviderServiceSkeleton } from "@/app/custom/CustomSkeleton";
import ProvidersService from "./ProvidersService";

const ProviderServices = () => {
  const locale = useLocale();
  const { id } = useParams();

  // Extract necessary data from the useServices hook
  const { providerService, serviceLoading, setPage } = useServices(id);

  console.log("provider service", providerService);

  return (
    <div>
      <MyCardBox className="provider-card mx-1 rounded-2xl m-2 mb-4 p-2">
        <div className="my-4">
          <Grid container spacing={2} data-aos="fade-up">
            {serviceLoading
              ? Array.from({ length: 6 }, (_, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4}>
                    <ProviderServiceSkeleton />
                  </Grid>
                ))
              : providerService &&
                providerService.data.
                services.map(
                  (
                    service,
                    index // Map through `providerService.data`
                  ) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <ProvidersService service={service} index={index} />
                    </Grid>
                  )
                )}
          </Grid>
          <div className="flex justify-center mt-2">
            <Pagination
              count={providerService.totalPages} // Use totalPages from providerService state
              color="primary"
              onChange={(event, value) => setPage(value)} // Update page on pagination change
              page={providerService.currentPage} // Set the current active page
            />
          </div>
        </div>
      </MyCardBox>
    </div>
  );
};

export default ProviderServices;
