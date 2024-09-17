"use client";

import React from "react";
import { useLocale } from "next-intl";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import { useProviders } from "@/app/hooks/useProviders";
import Providers from "@/app/components/providers/Providers";

const page = () => {
  const { providers, loading } = useProviders();

  const locale = useLocale();

  return (
    <div>
      <MyBreadcrumb
        title={"Providers"}
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Providers", link: `/${locale}/providers` },
        ]}
        activeIndex={1}
      />
      <Providers providers={providers} loading={loading} />
    </div>
  );
};

export default page;
