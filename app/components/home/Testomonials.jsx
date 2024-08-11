import "swiper/css";
import React from "react";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "@/app/common/Testimonial";

const Testimonials = ({ testimonials, loading }) => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={true} 
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {loading ? (
          <h1>Loading..</h1>
        ) : (
          testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default Testimonials;
