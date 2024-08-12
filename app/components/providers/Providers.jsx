import { ProviderSkeletons } from "@/app/common/CustomSkeleton";
import Provider from "@/app/common/Provider";
import { Grid } from "@mui/material";
import React from "react";

const Providers = ({ providers, loading }) => {
  return (
    <div className="my-4">
      <Grid container spacing={2}>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ProviderSkeletons />
              </Grid>
            ))
          : providers.map((provider) => (
              <Grid item xs={12} sm={6} md={3} key={provider.id}>
                <Provider provider={provider} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

export default Providers;
