import React, { useEffect } from "react";
import Provider from "@/app/common/Provider"; // Assuming ProviderCard exists for rendering providers
import ServiceCard from "@/app/common/ServiceCard";
import { MyHeading } from "@/app/custom/MyText";
import { useSearch } from "@/app/hooks/useSearch";
import { CategorySkeleton } from "@/app/custom/CustomSkeleton";
import { Divider, Grid } from "@mui/material";

const SearchResults = ({ query }) => {
  const { searchResult, loading } = useSearch(query);

  useEffect(() => {
    if (query) {
      console.log("Search initiated with query:", query);
    }
  }, [query]); // Triggered when query changes

  return (
    <div>
      <div className="my-8">
        <MyHeading
          title={"Services"}
          className={"my-4 text-xl font-semibold"}
        />

        {/* Render loading skeleton or services */}
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <CategorySkeleton key={index} />
          ))
        ) : searchResult?.service?.length > 0 ? (
          <Grid container spacing={3}>
            {searchResult.service.map((service, index) => (
              <Grid key={index} item xs={12} md={2}>
                <ServiceCard key={index} service={service} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <p>No services found.</p> // Fallback when no services are found
        )}
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
          <p>No providers found.</p> // Fallback when no providers are found
        )}
      </div>
    </div>
  );
};

export default SearchResults;
