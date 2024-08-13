"use client";

import React from "react";
import ServiceCard from "@/app/common/ServiceCard";
import MySkeleton from "@/app/common/MySkeleton";
import { Grid } from "@mui/material";
import MyTitle from "@/app/common/MyTitle";

const TopServices = ({ data, loading }) => {
  console.log("Services", data);
  return (
    <div>
      <MyTitle title={"Top Services"} />
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
