"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import { useProviders } from "@/app/hooks/useProviders";
import Providers from "@/app/components/providers/Providers";
import { Pagination } from "@mui/material";

const Page = () => {
  const { providers, loading, setPage } = useProviders();

  const locale = useLocale();
  const t = useTranslations("providers");

  // Debugging current page updates
  console.log("Providers state:", providers);

  const handlePageChange = (event, value) => {
    console.log("Pagination clicked, page:", value);
    setPage(value); // This should trigger a state change and update providers.currentPage
  };

  return (
    <div>
      <MyBreadcrumb
        title={t("providers")}
        breadcrumbs={[
          { title: t("home"), link: "/" },
          { title: t("providers"), link: `/${locale}/providers` },
        ]}
        activeIndex={1}
      />
      <Providers providers={providers.data} loading={loading} />
      <div className="flex justify-center my-4">
        <Pagination
          count={providers.totalPages}
          color="primary"
          onChange={handlePageChange}
          page={providers.currentPage} // Ensure currentPage is correctly passed
        />
      </div>
    </div>
  );
};

export default Page;
