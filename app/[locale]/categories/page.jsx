"use client";

import MyBreadcrumb from "@/app/common/MyBreadcrumb";
import Categories from "@/app/components/categories/Categories";
import { getCategories } from "@/app/utils/GetCategories";
import React, { useEffect, useState } from "react";

const page = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCategories() {
    try {
      const response = await getCategories();
      console.log(response);
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error in fetching categories", error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="my-4">
      <MyBreadcrumb
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Categories", link: "/categories" },
        ]}
        title="Categories"
        activeIndex={0}
      />
      <Categories categories={categories} loading={loading} />
    </div>
  );
};

export default page;
