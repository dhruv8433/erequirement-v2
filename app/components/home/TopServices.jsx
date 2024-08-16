"use client";

import React from "react";
import ServiceCard from "@/app/common/ServiceCard";
import MySkeleton from "@/app/common/MySkeleton";
import { Grid } from "@mui/material";
import { MyHeading } from "@/app/common/MyText";

const TopServices = ({ data, loading }) => {
  console.log("Services", data);
  return (
    <div>
      <MyHeading title={"Top Services"} className={"text-2xl my-2 font-semibold"}/>
      <div className="services">
        <Grid container>
          {loading ? (
            <MySkeleton variant={"rectangular"} height={200} width={200} />
          ) : (
            data.slice(0, 6).map((service, index) => (
              <Grid key={service.id || index} item xs={12} sm={6} md={2}>
                <ServiceCard service={service} />
              </Grid>
            ))
          )}
        </Grid>
      </div>
    </div>
  );
};

export default TopServices;
