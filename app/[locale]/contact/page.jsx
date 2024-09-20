import React from "react";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import Contact from "@/app/components/contact/Contact";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("contact");
  return (
    <div>
      <MyBreadcrumb
        title={t("contact")}
        breadcrumbs={[
          { title: t("home"), link: "/" },
          { title: t("contact"), link: "" },
        ]}
        activeIndex={1}
      />
      <Contact />
    </div>
  );
};

export default page;
