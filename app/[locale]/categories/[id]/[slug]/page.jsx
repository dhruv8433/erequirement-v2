"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CategoriesDetailed from "@/app/components/categories/CategoriesDetailed";
import { getSubCategories } from "@/app/utils/GetSubCategories";

const page = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
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
      />
    </div>
  );
};

export default page;
