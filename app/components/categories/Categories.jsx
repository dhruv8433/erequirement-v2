import React from "react";
import { Grid } from "@mui/material";
import CategoryCard from "@/app/common/CategoryCard";
import { CategorySkeleton } from "@/app/common/CustomSkeleton";

const Categories = ({ categories, loading }) => {
  return (
    <div>
      <Grid container>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={3}>
                <CategorySkeleton key={_} />
              </Grid>
            ))
          : categories.map((category) => (
              <Grid item xs={12} sm={6} md={3}>
                <CategoryCard category={category} key={category.id} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

export default Categories;