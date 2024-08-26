"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getSubCategories } from "@/app/utils/GetSubCategories";
import CategoriesDetailed from "@/app/components/categories/CategoriesDetailed";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [subCategories, setSubCategories] = useState([]);

  const { id, slug } = useParams();
  console.log("id :", id);

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
      />
    </div>
  );
};

export default page;
