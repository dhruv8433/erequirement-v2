import React from "react";
import { Grid } from "@mui/material";
import Provider from "@/app/common/Provider";
import { ProviderSkeletons } from "@/app/custom/CustomSkeleton";
import { MyHeading } from "@/app/custom/MyText";

const TopProviders = ({ data, loading }) => {
  return (
    <div className="my-4">
      <MyHeading title={"Top Providers"} className={"text-2xl my-2 font-semibold"}/>
      <Grid container>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <ProviderSkeletons />
              </Grid>
            ))
          : data.slice(0, 4).map((provider) => (
              <Grid item key={provider.id} xs={12} sm={6} md={3}>
                <Provider provider={provider} key={provider.id} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

export default TopProviders;
