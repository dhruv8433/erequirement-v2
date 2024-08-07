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
    <div className="flex gap-4">
      {loading ? (
        <div className="flex gap-12">
          {Array.of(1, 2, 3, 4, 5).map(() => (
            <MySkeleton className="rounded" variant="rectangular" height={160} width={260} />
          ))}
        </div>
      ) : (
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
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
  );
};

export default Categories;
