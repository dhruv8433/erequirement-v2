import React from "react";
import { Grid } from "@mui/material";
import Provider from "@/app/common/Provider";
import { ProviderSkeletons } from "@/app/common/CustomSkeleton";
import MyTitle from "@/app/common/MyTitle";

const TopProviders = ({ data, loading }) => {
  return (
    <div className="my-4">
      <MyTitle title={"Top Providers"}/>
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
