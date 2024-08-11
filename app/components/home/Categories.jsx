"use client";

import "swiper/css";
import React  from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import MySkeleton from "@/app/common/MySkeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "@/app/common/CategoryCard";
import { SwiperBreakPoints } from "@/app/config/config";

const Categories = ({ data, loading }) => {
  
  return (
    <div className="my-4">
      <h1 className="my-4 text-2xl font-semibold">Categories</h1>
      <div className="flex gap-4">
        {loading ? (
          <div className="flex gap-12">
            {Array.of(1, 2, 3, 4, 5).map((index) => (
              <MySkeleton
                key={index + 1}
                className="rounded"
                variant="rectangular"
                height={160}
                width={260}
              />
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
                <CategoryCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Categories;
