import React, { useEffect } from "react";
import Provider from "@/app/common/Provider"; // Assuming ProviderCard exists for rendering providers
import ServiceCard from "@/app/common/ServiceCard";
import { MyHeading } from "@/app/custom/MyText";
import { useSearch } from "@/app/hooks/useSearch";
import { Divider, Grid } from "@mui/material";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import { MyCardBox } from "@/app/custom/MyBox";
import { useLocale, useTranslations } from "next-intl";
import {
  BreadCrumbSkeleton,
  CategorySkeleton,
} from "@/app/custom/CustomSkeleton";
import Link from "next/link";

const SearchResults = ({ query }) => {
  const { searchResult, loading } = useSearch(query);

  useEffect(() => {
    if (query) {
      console.log("Search initiated with query:", query);
    }
  }, [query]); // Triggered when query changes

  const t = useTranslations("search");

  const locale = useLocale();

  return (
    <div>
      {loading ? (
        <BreadCrumbSkeleton />
      ) : (
        <MyBreadcrumb
          title={`Search result for ${query}`}
          breadcrumbs={[
            { title: "home", link: "/" },
            { title: "query", link: "#" },
            { title: query, link: "" },
          ]}
          activeIndex={2}
        />
      )}

      <div className="my-8">
        <MyHeading
          title={"Services"}
          className={"my-4 text-xl font-semibold"}
        />
        {/* Render loading skeleton or services */}

        <MyCardBox className="p-4 rounded-2xl">
          <Grid container spacing={3}>
            {loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <Grid key={index} item xs={12} sm={4} md={2}>
                  <CategorySkeleton key={index} />
                </Grid>
              ))
            ) : searchResult?.service?.length > 0 ? (
              searchResult.service.map((service, index) => (
                <Grid key={index} item xs={12} sm={4} md={2}>
                  <Link
                    href={`/${locale}/services/${service.serviceID}/${service.Slug}`}
                  >
                    <ServiceCard key={index} service={service} />
                  </Link>
                </Grid>
              ))
            ) : (
              <p>{t("no_service")}</p> // Fallback when no services are found
            )}
          </Grid>
        </MyCardBox>
      </div>

      <Divider className="" />

      <div className="my-8">
        <MyHeading
          title={"Providers"}
          className={"my-4 text-xl font-semibold"}
        />

        {/* Render loading skeleton or providers */}
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <CategorySkeleton key={index} />
          ))
        ) : searchResult?.providers?.length > 0 ? (
          <Grid container spacing={3}>
            {searchResult.providers.map((provider, index) => (
              <Grid item xs={12} md={3}>
                <Provider key={index} provider={provider} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <p>{t("no_provider")}</p> // Fallback when no providers are found
        )}
      </div>
    </div>
  );
};

export default SearchResults;
