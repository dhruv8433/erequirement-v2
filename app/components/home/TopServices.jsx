"use client";

import React from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { MyHeading } from "@/app/custom/MyText";
import MySkeleton from "@/app/custom/MySkeleton";
import ServiceCard from "@/app/common/ServiceCard";

const TopServices = ({ data, loading }) => {
  console.log("Services", data);
  const locale = useLocale();

  const t = useTranslations("home");
  return (
    <div>
      <MyHeading
        title={t("top_services")}
        className={"text-2xl my-2 font-semibold"}
      />
      <div className="services">
        <Grid container spacing={2}>
          {loading ? (
            <MySkeleton variant={"rectangular"} height={200} width={200} />
          ) : (
            data.slice(0, 6).map((service, index) => (
              <Grid key={service.id || index} item xs={12} sm={6} md={2}>
                <Link
                  href={`${locale}/services/${service.serviceID}/${service.Slug}`}
                >
                  <ServiceCard service={service} />
                </Link>
              </Grid>
            ))
          )}
        </Grid>
      </div>
    </div>
  );
};

export default TopServices;
