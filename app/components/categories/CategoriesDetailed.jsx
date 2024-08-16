import CategoryCard from "@/app/common/CategoryCard";
import { CategorySkeleton } from "@/app/common/CustomSkeleton";
import { Grid } from "@mui/material";
import React from "react";
import TopServices from "../home/TopServices";
import ServiceCard from "@/app/common/ServiceCard";
import SubCategryCard from "@/app/common/SubCategryCard";

const CategoriesDetailed = ({ subCategory, id, loading }) => {
  return (
    <div>
      <Grid container>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={3}>
                <CategorySkeleton key={_} />
              </Grid>
            ))
          : subCategory.map((category) => {
              if (category.categoryId == id)
                return (
                  <Grid item xs={12} sm={6} md={3}>
                    <div>
                      <SubCategryCard subcategory={category} />
                    </div>
                  </Grid>
                );
            })}
      </Grid>
    </div>
  );
};

export default CategoriesDetailed;
