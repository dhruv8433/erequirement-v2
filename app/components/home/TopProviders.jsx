import React from "react";
import { Grid } from "@mui/material";
import Provider from "@/app/common/Provider";
import { ProviderSkeletons } from "@/app/common/CustomSkeleton";

const TopProviders = ({ data, loading }) => {
  return (
    <div className="my-4">
      <h1 className="text-2xl font-semibold my-4"> Top Providers</h1>
      <Grid container>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Grid item key={_} xs={12} sm={6} md={3}>
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
