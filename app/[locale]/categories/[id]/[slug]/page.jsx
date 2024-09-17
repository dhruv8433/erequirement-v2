"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useCategories } from "@/app/hooks/useCategories";
import { useSubCategorys } from "@/app/hooks/useSubCategory";
import CategoriesDetailed from "@/app/components/categories/CategoriesDetailed";
import { BreadCrumbSkeleton } from "@/app/custom/CustomSkeleton";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";

const Page = () => {
  // Fetch all categories
  const { categories } = useCategories();
  const { id, slug } = useParams();

  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState(null);

  // When categories change or id changes, set the title and categoryId
  useEffect(() => {
    if (categories.length > 0 && id) {
      const category = categories.find((c) => c.id == id);
      if (category) {
        setTitle(category.name);
        setCategoryId(category.id);
      }
    }
  }, [categories, id]);

  // Fetch all subcategories by category id only if categoryId is set
  const { CategoryService, loadingCatService, error } =
    useSubCategorys(categoryId);

  return (
    <div>
      {loadingCatService ? (
        <BreadCrumbSkeleton />
      ) : (
        <MyBreadcrumb
          title={title}
          breadcrumbs={[
            { title: "home", link: "/" },
            { title: title, link: "" },
          ]}
          activeIndex={1}
        />
      )}
      <CategoriesDetailed
        subCategory={CategoryService}
        id={id}
        loading={loadingCatService}
        slug={slug}
        title={title}
        error={error}
      />
    </div>
  );
};

export default Page;
