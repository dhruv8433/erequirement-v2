import React from "react";
import { useTranslations } from "next-intl";
import AboutUs from "@/app/components/about/About";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";

const Page = () => {
  const t = useTranslations("about");
  return (
    <div>
      <MyBreadcrumb
        breadcrumbs={[
          { title: t("home"), link: "/" },
          { title: t("about"), link: "" },
        ]}
        title={t("about")}
        activeIndex={1}
      />
      <AboutUs />
    </div>
  );
};

export default Page;
