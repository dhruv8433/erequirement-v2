"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCategories } from "@/app/hooks/useCategories";
import { getSubCategories } from "@/app/utils/GetSubCategories";
import CategoriesDetailed from "@/app/components/categories/CategoriesDetailed";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [subCategories, setSubCategories] = useState([]);

  // fetch all categories
  const { categories } = useCategories();
  console.log(categories);

  const { id, slug } = useParams();
  console.log("id :", id);

  // set title of categories by map
  let title = "";
  categories.map((c) => (c.id == id ? (title = c.name) : null));

  // fetch all sub categories
  async function fetchSubCategories() {
    try {
      const response = await getSubCategories();
      console.log("subcat", response.data);
      setSubCategories(response.data);

      setLoading(false);
    } catch (error) {
      console.log("Error in getting subcategories", error);
    }
  }

  useEffect(() => {
    fetchSubCategories();
  }, []);

  return (
    <div>
      <CategoriesDetailed
        subCategory={subCategories}
        id={id}
        loading={loading}
        slug={slug}
        title={title}
      />
    </div>
  );
};

export default page;
