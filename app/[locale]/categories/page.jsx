"use client";

import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import Categories from "@/app/components/categories/Categories";
import { useCategories } from "@/app/hooks/useCategories";
import { useTranslations } from "next-intl";

const page = () => {
  // fetch categories data from custom hook
  const { categories, loading } = useCategories();
  const t = useTranslations('categories');

  return (
    <div className="my-4">
      <MyBreadcrumb
        breadcrumbs={[
          { title: t("home"), link: "/" },
          { title: t("categories"), link: "/categories" },
        ]}
        title={t("categories")}
        activeIndex={1}
      />
      <Categories categories={categories} loading={loading} />
    </div>
  );
};

export default page;
