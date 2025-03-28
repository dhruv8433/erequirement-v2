import React from "react";
import { Grid } from "@mui/material";
import Provider from "@/app/common/Provider";
import { ProviderSkeletons } from "@/app/custom/CustomSkeleton";
import { MyHeading } from "@/app/custom/MyText";
import { useTranslations } from "next-intl";

const TopProviders = ({ data, loading }) => {
  const t = useTranslations("home");
  return (
    <div className="my-4 relative -z-10" data-aos="fade-up">
      <MyHeading
        data-aos="fade-up"
        title={t("top_providers")}
        className={"text-2xl my-2 font-semibold"}
      />
      <Grid container spacing={2}>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <ProviderSkeletons />
              </Grid>
            ))
          : data.slice(0, 4).map((provider) => (
              <Grid item key={provider.id} xs={12} sm={6} md={3} data-aos="fade-up">
                <Provider provider={provider} key={provider.id} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

export default TopProviders;
