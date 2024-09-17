"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Grid, Rating } from "@mui/material";
import { MyCardBox, MyServiceCard } from "@/app/custom/MyBox";
import { useServices } from "@/app/hooks/useServices";
import { useParams } from "next/navigation";
import { ProviderServiceSkeleton } from "@/app/custom/CustomSkeleton";

const ProviderServices = () => {
  const locale = useLocale();

  const { id } = useParams();
  const { providerService, serviceLoading } = useServices(id);

  return (
    <div>
      <MyCardBox className="provider-card mx-1 rounded-2xl m-2 mb-4 p-2">
        <div className="my-4">
          <Grid container spacing={2}>
            {serviceLoading
              ? Array.from({ length: 6 }, (_, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4}>
                    <ProviderServiceSkeleton />
                  </Grid>
                ))
              : providerService.map((service, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Link
                      href={`/${locale}/services/${service.serviceID}/${service.Slug}`}
                    >
                      <MyServiceCard className="border m-2 rounded-2xl overflow-hidden max-h-[450px] h-full relative hover:shadow-lg transition-shadow duration-300 flex flex-col">
                        {/* Service Image */}
                        <div className="serviceImg h-[200px] w-full flex-shrink-0">
                          <img
                            src={service.serviceImg}
                            className="h-full w-full object-cover rounded-t-2xl"
                            alt={service.ServiceName}
                          />
                        </div>

                        {/* Card Content */}
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h1 className="text-lg font-semibold truncate">
                              {service.ServiceName}
                            </h1>

                            {/* Short Description (Limited to 1 Line) */}
                            <p className="text-sm text-gray-600 truncate">
                              {service.ShortDesc}
                            </p>
                          </div>

                          {/* Rating and Add to Cart */}
                          <div className="flex justify-between items-center mt-4">
                            <Rating
                              name={`rating-${index}`}
                              value={service.AvgRatings}
                              precision={0.5}
                              readOnly
                              size="small"
                            />
                            <button className="primary-bg text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition-colors">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </MyServiceCard>
                    </Link>
                  </Grid>
                ))}
          </Grid>
        </div>
      </MyCardBox>
    </div>
  );
};

export default ProviderServices;
