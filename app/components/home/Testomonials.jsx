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
          testimonials.slice(0, 10).filter(testimonial => testimonial.rating > 3).map((filteredTestimonial) => (
            <SwiperSlide key={filteredTestimonial.id}>
              <Testimonial key={filteredTestimonial.id} testimonial={filteredTestimonial} />
            </SwiperSlide>
          ))
        )}
      </MyBreakPointSwiper>
    </div>
  );
};

export default Testimonials;
