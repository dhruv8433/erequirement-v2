"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import { useProviders } from "@/app/hooks/useProviders";
import Providers from "@/app/components/providers/Providers";

const page = () => {
  const { providers, loading } = useProviders();

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
      <Providers providers={providers} loading={loading} />
    </div>
  );
};

export default page;
