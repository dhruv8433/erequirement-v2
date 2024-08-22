import { Swiper } from "swiper/react";
import { SwiperBreakPoints } from "../config/config";

// reusable swiper component
const MyBreakPointSwiper = ({
  children,
  modules,
  slidesPerView,
  navigation,
  autoplay,
  pagination,
}) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={30}
      navigation={navigation}
      pagination={pagination}
      autoplay={autoplay}
      modules={modules}
      // breakpoints set in config file
      breakpoints={SwiperBreakPoints}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};

export { MyBreakPointSwiper };
