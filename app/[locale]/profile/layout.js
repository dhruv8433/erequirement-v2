import React from "react";
import { Grid } from "@mui/material";
import ProfileNavigation from "@/app/components/profile/ProfileNavigation";

const Layout = ({ children }) => {
  return (
    <div className="my-10 profile">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <ProfileNavigation />
        </Grid>
        <Grid item xs={12} md={8}>
          <div>{children}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
