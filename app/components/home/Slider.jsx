import "swiper/css";
import React from "react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Advertisement from "@/app/common/Advertisement";
import MySkeleton from "@/app/common/MySkeleton";

const Slider = ({ data, loading }) => {
  return (
    <>
      {loading ? (
        <MySkeleton height={"500px"} width={"100%"} />
      ) : (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper rounded-2xl"
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Advertisement ads={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Slider;
