"use client";

import "swiper/css";
import React from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import CategoryCard from "@/app/common/CategoryCard";
import { CategorySkeleton } from "@/app/custom/CustomSkeleton";
import { MyBreakPointSwiper } from "@/app/custom/MySwiper";

const Categories = ({ data, loading }) => {
  return (
    <div className="my-4" data-aos="fade-up">
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
                <CategoryCard category={category} />
              </SwiperSlide>
            ))}
          </MyBreakPointSwiper>
        )}
      </div>
    </div>
  );
};

export default Categories;
