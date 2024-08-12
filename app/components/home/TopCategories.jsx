"use client";

import "swiper/css";
import React from "react";
import Link from "next/link";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLocale } from "next-intl";
import { Navigation } from "swiper/modules";
import MySkeleton from "@/app/common/MySkeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "@/app/common/CategoryCard";
import { SwiperBreakPoints } from "@/app/config/config";
import { CategorySkeleton } from "@/app/common/CustomSkeleton";

const Categories = ({ data, loading }) => {
  const locale = useLocale();
  return (
    <div className="my-4">
      <h1 className="my-4 text-2xl font-semibold">Categories</h1>
      <div className="flex gap-4">
        {loading ? (
          <div className="flex gap-12">
            {Array.from({ length: 5 }).map((index) => (
              <CategorySkeleton key={index} />
            ))}
          </div>
        ) : (
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            // breakpoints set in config file
            breakpoints={SwiperBreakPoints}
            className="mySwiper"
          >
            {data.map((category) => (
              <SwiperSlide key={category.id}>
                {/* reusable component call */}
                <Link
                  href={`${locale}/categories/${category.id}/${category.slug}`}
                >
                  <CategoryCard category={category} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Categories;
