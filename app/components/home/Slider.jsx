import "swiper/css";
import React, { useState } from "react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Advertisement from "@/app/common/Advertisement";
import MySkeleton from "@/app/custom/MySkeleton";
import { MyColoredInput } from "@/app/custom/MyInput";
import { MyPrimaryButton } from "@/app/custom/MyButton";
import Link from "next/link";
import { useLocale } from "next-intl";

const Slider = ({ data, loading }) => {
  const [query, setQuery] = useState("");
  const locale = useLocale();
  return (
    <>
      {loading ? (
        <MySkeleton height={"500px"} width={"100%"} />
      ) : (
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={true}
          className="mySwiper rounded-2xl"
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Advertisement ads={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="relative flex items-center z-10 justify-center bottom-5">
        <>
          <MyColoredInput
            placeholder={"Enter Service, Provider, Tags to search "}
            className={"w-[500px] rounded-2xl"}
            inputClass={"p-2 rounded-l"}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link href={`/${locale}/search/${query}`}>
            <MyPrimaryButton
              title={"search"}
              className={"rounded-r p-2 hover:bg-orange-500"}
            />
          </Link>
        </>
      </div>
    </>
  );
};

export default Slider;
