import React from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import { useLocale } from "next-intl";
import MySkeleton from "@/app/custom/MySkeleton";
import ServiceCard from "@/app/common/ServiceCard";

const CategoriesDetailed = ({ subCategory, id, loading, slug }) => {
  const locale = useLocale();
  return (
    <div className="my-4">
      <Grid container>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Grid key={index} item xs={12} sm={6} md={2}>
                 <MySkeleton variant={"rectangular"} height={200} width={200} className={"my-2 rounded-2xl"} />
              </Grid>
            ))
          : subCategory.map((category) => {
              if (category.categoryId == id)
                return (
                  <Grid item xs={12} sm={4} md={2}>
                    <Link
                      href={`/${locale}/categories/${id}/${slug}/sub-category/${category.id}/${category.slug}`}
                    >
                      <div>
                        <ServiceCard service={category} />
                      </div>
                    </Link>
                  </Grid>
                );
            })}
      </Grid>
    </div>
  );
};

export default CategoriesDetailed;
