import React from "react";
import Link from "next/link";
import { Grid } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import MySkeleton from "@/app/custom/MySkeleton";
import NoResult from "@/app/assets/no-result.png";
import ServiceCard from "@/app/common/ServiceCard";
import { MyPrimaryText } from "@/app/custom/MyText";
import { MyCardBox } from "@/app/custom/MyBox";

const CategoriesDetailed = ({ subCategory, id, loading, slug, error }) => {
  const locale = useLocale();
  const t = useTranslations("categories");
  return (
    <MyCardBox className="my-4 p-4 min-h-[500px] rounded-2xl">
      {error.statusCode !== 404 ? (
        <Grid container spacing={3}>
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Grid key={index} item xs={12} sm={6} md={2}>
                  <MySkeleton
                    variant={"rectangular"}
                    height={200}
                    width={200}
                    className={"my-2 rounded-2xl"}
                  />
                </Grid>
              ))
            : subCategory &&
              subCategory.map((category) => {
                if (category.categoryId == id)
                  return (
                    <Grid item xs={12} sm={4} md={2}>
                      <Link
                        href={`/${locale}/categories/${id}/${slug}/sub-category/${category._id}/${category.slug}`}
                      >
                        <div>
                          <ServiceCard service={category} />
                        </div>
                      </Link>
                    </Grid>
                  );
              })}
        </Grid>
      ) : (
        <div className="flex justify-center items-center flex-col my-10">
          <img src={NoResult.src} alt="" />
          <MyPrimaryText title={t("no_result")} className={"text-xl"} />
        </div>
      )}
    </MyCardBox>
  );
};

export default CategoriesDetailed;
