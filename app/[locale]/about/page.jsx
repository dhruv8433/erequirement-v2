import React from "react";
import { useTranslations } from "next-intl";
import AboutUs from "@/app/components/about/About";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";

const page = () => {
  const t = useTranslations("about");
  return (
    <div>
      <MyBreadcrumb
        breadcrumbs={[
          { title: "home", link: "/" },
          { title: "About", link: "" },
        ]}
        title={t("about")}
      />
      <AboutUs />
    </div>
  );
};

export default page;
