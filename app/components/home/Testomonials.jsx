import "swiper/css";
import React from "react";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import Testimonial from "@/app/common/Testimonial";
import { Autoplay, Pagination } from "swiper/modules";
import { MyBreakPointSwiper } from "@/app/custom/MySwiper";

const Testimonials = ({ testimonials, loading }) => {
  return (
    <div className="">
      <MyBreakPointSwiper
        modules={[Pagination, Autoplay]}
        pagination={true}
        autoplay={true}
      >
        {loading ? (
          <h1>Loading..</h1>
        ) : (
          testimonials &&
          testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            </SwiperSlide>
          ))
        )}
      </MyBreakPointSwiper>
    </div>
  );
};

export default Testimonials;
