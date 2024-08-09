"use client";

import React from "react";
import ServiceCard from "@/app/common/ServiceCard";
import MySkeleton from "@/app/common/MySkeleton";
import { Grid } from "@mui/material";

const TopServices = ({ data, loading }) => {
  console.log("Services", data);
  return (
    <div>
      <h1 className="text-2xl font-semibold my-4">Top Services</h1>
      <div className="services">
        <Grid container>
          {loading ? (
            <MySkeleton variant={"rectangular"} height={200} width={200} />
          ) : (
            data.slice(0, 6).map((service) => (
              <Grid item xs={12} sm={6} md={2}>
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
