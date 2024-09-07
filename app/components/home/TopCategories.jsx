"use client";

import "swiper/css";
import React from "react";
import Link from "next/link";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLocale } from "next-intl";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import CategoryCard from "@/app/common/CategoryCard";
import { CategorySkeleton } from "@/app/custom/CustomSkeleton";
import { MyBreakPointSwiper } from "@/app/custom/MySwiper";

const Categories = ({ data, loading }) => {
  const locale = useLocale();
  return (
    <div className="my-4">
      {/* <MyHeading
        title={"Top Categories"}
        className={"text-2xl my-2 font-semibold"}
      /> */}
      <div className="flex gap-4">
        {loading ? (
          <div className="flex gap-12">
            {Array.from({ length: 5 }).map((_, index) => (
              <CategorySkeleton key={index} />
            ))}
          </div>
        ) : (
          <MyBreakPointSwiper
            slidesPerView={5}
            modules={[Navigation]}
            navigation={true}
          >
            {data.map((category, index) => (
              <SwiperSlide key={category.slug || index}>
                {/* reusable component call */}
                <Link
                  href={`${locale}/categories/${category.id}/${category.slug}`}
                >
                  <CategoryCard category={category} />
                </Link>
              </SwiperSlide>
            ))}
          </MyBreakPointSwiper>
        )}
      </div>
    </div>
  );
};

export default Categories;
