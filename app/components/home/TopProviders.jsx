import Provider from "@/app/common/Provider";
import { Grid } from "@mui/material";
import React from "react";

const TopProviders = ({ data, loading }) => {
  return (
    <div className="my-4">
      <h1 className="text-2xl font-semibold my-4"> Top Providers</h1>
      <Grid container>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data.slice(0, 4).map((provider) => (
            <Grid item key={provider.id} xs={12} sm={6} md={3}>
              <Provider provider={provider} key={provider.id} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default TopProviders;
