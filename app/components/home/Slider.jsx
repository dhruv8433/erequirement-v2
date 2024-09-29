import "swiper/css";
import React, { useState } from "react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Advertisement from "@/app/common/Advertisement";
import MySkeleton from "@/app/custom/MySkeleton";
import { MyColoredInput } from "@/app/custom/MyInput";
import { MyPrimaryButton } from "@/app/custom/MyButton";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation"; // Import useRouter for programmatic navigation

const Slider = ({ data, loading }) => {
  const [query, setQuery] = useState("");
  const locale = useLocale();
  const router = useRouter(); // Initialize useRouter for navigation

  // Function to handle search when Enter is pressed or button is clicked
  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/${locale}/search/${query}`); // Navigate to search page with query
    }
  };

  // Function to handle search when Enter key is pressed
  const handleSearchOnEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Call handleSearch when "Enter" is pressed
    }
  };

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
            onKeyDown={handleSearchOnEnter} // Listen for "Enter" key press
          />
          <MyPrimaryButton
            title={"search"}
            className={"rounded-r p-2 hover:bg-orange-500"}
            onClick={handleSearch} // Call handleSearch on button click
          />
        </>
      </div>
    </>
  );
};

export default Slider;
