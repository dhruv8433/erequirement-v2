"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MySkeleton from "@/app/common/MySkeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import { getHomeScreen } from "@/app/utils/HomeScreen";
import { Navigation, Pagination } from "swiper/modules";

const Categories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getHomeScreenData() {
    try {
      const response = await getHomeScreen();
      setData(response.categorys);
      setLoading(false);
    } catch (error) {
      console.log("error: " + error);
    }
  }

  useEffect(() => {
    getHomeScreenData();
  }, []);
  return (
    <div className="my-4">
      <h1 className="my-4 text-2xl font-semibold">Categories</h1>
      <div className="flex gap-4">
        {loading ? (
          <div className="flex gap-12">
            {Array.of(1, 2, 3, 4, 5).map(() => (
              <MySkeleton
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
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              440: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              840: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {data.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="border-2 border-gray-700 p-3 rounded-2xl text-center hover:bg-white">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-contain aspect-square h-[120px] w-full"
                  />
                  <h1>{category.name}</h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Categories;
