"use client";

import React, { useEffect, useState } from "react";
import Providers from "@/app/components/providers/Providers";
import { getProviders } from "@/app/utils/GetProviders";
import MyBreadcrumb from "@/app/common/MyBreadcrumb";
import { useLocale } from "next-intl";

const page = () => {
  const [provider, setProvider] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProviders() {
    try {
      const resposne = await getProviders();
      console.log("Providers Fetching", resposne);
      setProvider(resposne.data);
      setLoading(false);
    } catch (error) {
      console.log("Error Fetching Providers", error);
    }
  }

  useEffect(() => {
    fetchProviders();
  }, []);

  const locale = useLocale();

  return (
    <div>
      <MyBreadcrumb
        title={"Providers"}
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Providers", link: `/${locale}/providers` },
        ]}
        activeIndex={0}
      />
      <Providers providers={provider} loading={loading} />
    </div>
  );
};

export default page;
