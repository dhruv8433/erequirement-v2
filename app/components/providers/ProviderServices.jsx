"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Grid, Rating } from "@mui/material";
import { MyCardBox, MyServiceCard } from "@/app/custom/MyBox";
import { useServices } from "@/app/hooks/useServices";
import { useParams } from "next/navigation";
import { ProviderServiceSkeleton } from "@/app/custom/CustomSkeleton";
import ProvidersService from "./ProvidersService";

const ProviderServices = () => {
  const locale = useLocale();

  const { id } = useParams();
  const { providerService, serviceLoading } = useServices(id);

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
              : providerService.map((service, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <ProvidersService service={service} index={index} />
                  </Grid>
                ))}
          </Grid>
        </div>
      </MyCardBox>
    </div>
  );
};

export default ProviderServices;
