"use client";

import React from "react";
import { Grid } from "@mui/material";
import { useParams } from "next/navigation";
import { useProviders } from "@/app/hooks/useProviders";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import { MyCardBox } from "@/app/custom/MyBox";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  BreadCrumbSkeleton,
  ProviderDetailedSkeleton,
} from "@/app/custom/CustomSkeleton";

const layout = ({ children }) => {
  const { id } = useParams();
  const { singleProvider, singleProviderLoading } = useProviders(id);

  const locale = useLocale();

  console.log("layout", singleProvider);
  return (
    <div>
      {singleProviderLoading ? (
        <BreadCrumbSkeleton />
      ) : (
        <MyBreadcrumb
          title={singleProvider.title}
          breadcrumbs={[
            { title: "Home", link: `/${locale}` },
            { title: "Top Providers", link: `/${locale}/providers` },
            { title: singleProvider.title, link: "" },
          ]}
          activeIndex={2}
        />
      )}
      <Grid container>
        <Grid item xs={12} md={4}>
          {singleProviderLoading ? (
            <ProviderDetailedSkeleton />
          ) : (
            <>
              {/* Provider Detailed Card */}
              <MyCardBox className="m-2 rounded-2xl border border-gray-300 overflow-hidden hover:cursor-pointer group">
                <div>
                  {/* banner image */}
                  <div className="banner h-[300px] w-full overflow-hidden">
                    <img
                      src={singleProvider.banner_image}
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                      alt={singleProvider.title}
                    />
                  </div>
                  {/* logo image */}
                  <div className="logo h-[100px] flex justify-center relative -top-10">
                    <img
                      src={singleProvider.logo_image}
                      className="h-[100px] -mb-5 rounded-full border-4 bg-white w-[100px] p-4 object-cover scale-100"
                      alt={singleProvider.title}
                    />
                  </div>
                  {/* singleProvider info */}
                  <div className="my-1 text-center relative bottom-8">
                    <h1 className="text-2xl font-semibold primary-text">
                      {singleProvider.title}
                    </h1>
                    <p className="text-xl">
                      {singleProvider.order_complete} order completed
                    </p>
                    <p className="text-xl">
                      {singleProvider.years_of_work} years of work
                    </p>
                  </div>
                </div>
              </MyCardBox>
            </>
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <div>
            <div className="border p-4 rounded-2xl flex justify-between items-center m-2 primary-bg mb-4">
              {/* provider services */}
              <Link
                href={`/${locale}/providers/${singleProvider.id}/${singleProvider.slug}`}
              >
                <h1>Services</h1>
              </Link>
              {/* about provider */}
              <Link
                href={`/${locale}/providers/${singleProvider.id}/${singleProvider.slug}/about`}
              >
                <h1>About</h1>
              </Link>
              {/* provider reviews */}
              <h1>Reviews</h1>
            </div>
            {/* dynamic children come here */}
            {children}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default layout;