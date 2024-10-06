"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import { useProviders } from "@/app/hooks/useProviders";
import Providers from "@/app/components/providers/Providers";
import { Pagination } from "@mui/material";

const page = () => {
  const { providers, loading, setPage } = useProviders();

  const locale = useLocale();
  const t = useTranslations("providers");

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
          count={providers.totalPages} // Use totalPages from the providers state
          color="primary"
          onChange={(event, value) => setPage(value)} // Update the page on pagination change
          page={providers.currentPage} // Set the current active page
        />
      </div>
    </div>
  );
};

export default page;
