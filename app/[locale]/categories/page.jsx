"use client";

import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import Categories from "@/app/components/categories/Categories";
import { useCategories } from "@/app/hooks/useCategories";

const page = () => {
  // fetch categories data from custom hook
  const { categories, loading } = useCategories();

  return (
    <div className="my-4">
      <MyBreadcrumb
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Categories", link: "/categories" },
        ]}
        title="Categories"
        activeIndex={1}
      />
      <Categories categories={categories} loading={loading} />
    </div>
  );
};

export default page;
