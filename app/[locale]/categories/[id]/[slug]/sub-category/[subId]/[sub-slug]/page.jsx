"use client";

import React from "react";
import { Grid } from "@mui/material";
import { useParams } from "next/navigation";
import Provider from "@/app/common/Provider";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import { useProviders } from "@/app/hooks/useProviders";
import { useSubCategorys } from "@/app/hooks/useSubCategory";
import {
  BreadCrumbSkeleton,
  ProviderSkeletons,
} from "@/app/custom/CustomSkeleton";
import { useCategories } from "@/app/hooks/useCategories";
import { useLocale, useTranslations } from "next-intl";

const Page = () => {
  const { subId, id } = useParams();
  const { singleSubCategory, loadingSingleCategory } = useSubCategorys(
    "",
    subId
  );
  const { providers, loading } = useProviders();
  const { categories } = useCategories();

  console.log("Providers", providers);
  
  // Ensure that providers and providers.data exist before filtering
  const filteredProviders =
    providers?.data?.filter((provider) =>
      singleSubCategory?.providers?.includes(provider.id)
    ) || [];

  // getting first object from array of categories -- filter out
  const filterCategories = categories?.filter(
    (category) => category.id == id
  )[0];

  const locale = useLocale();
  const t = useTranslations("categories");

  return (
    <div className="my-4">
      {/* breadcrumb for better user understanding */}
      {loading ? (
        <BreadCrumbSkeleton />
      ) : (
        <MyBreadcrumb
          title={singleSubCategory.ServiceName}
          breadcrumbs={[
            { title: t("home"), link: "/" },
            {
              title: t("categories"),
              link: `/${locale}/Categories`,
            },
            {
              title: filterCategories?.name,
              link: `/${locale}/categories/${filterCategories?.id}/${filterCategories?.slug}`,
            },
            {
              title: singleSubCategory.ServiceName,
              link: "",
            },
          ]}
          activeIndex={3}
        />
      )}

      {/* loading and provider related to particular service */}
      <Grid container spacing={2}>
        {loading || loadingSingleCategory
          ? Array.from({ length: 4 }).map((_, index) => (
              <Grid item key={index} xs={12} md={3}>
                <ProviderSkeletons key={index} />
              </Grid>
            ))
          : filteredProviders.map((provider) => (
              <Grid item key={provider.id} xs={12} md={3}>
                <Provider key={provider.id} provider={provider} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

export default Page;
