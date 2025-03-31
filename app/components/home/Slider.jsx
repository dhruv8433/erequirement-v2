import "swiper/css";
import React, { useState, useEffect, useRef } from "react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Advertisement from "@/app/common/Advertisement";
import MySkeleton from "@/app/custom/MySkeleton";
import { MyColoredInput } from "@/app/custom/MyInput";
import { MyPrimaryButton } from "@/app/custom/MyButton";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useSearch } from "@/app/hooks/useSearch";
import { Divider } from "@mui/material";
import Link from "next/link";

const Slider = ({ data, loading }) => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const dropdownRef = useRef(null);

  const { searchResult, loading: searchLoading } = useSearch(query);

  useEffect(() => {
    if (
      query.trim() &&
      (searchResult?.service?.length > 0 || searchResult?.providers?.length > 0)
    ) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [query, searchResult, searchLoading]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/${locale}/search/${query}`);
      setShowDropdown(false);
    }
  };

  return (
    <div>
      {loading ? (
        <MySkeleton height={"500px"} width={"100%"} />
      ) : (
        <Swiper navigation modules={[Navigation, Autoplay]} autoplay>
          {data.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Advertisement ads={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="relative flex items-center justify-center">
        <div className="relative w-[500px]" ref={dropdownRef}>
          <MyColoredInput
            placeholder="Enter Service, Provider, Tags to search"
            className="w-full mt-[-30px] z-10"
            inputClass="p-3"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          {showDropdown && (
            <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-20 max-h-60 overflow-y-auto">
              {searchResult.providers?.length > 0 && (
                <div>
                  <h3 className="px-3 py-2 text-sm font-bold">Providers</h3>
                  <Divider />
                  {searchResult.providers.map((provider, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => router.push(`/${locale}/providers/${provider.id}/${provider.slug}`)}
                    >
                      {provider.title}
                    </div>
                  ))}
                </div>
              )}

              {searchResult.service?.length > 0 && (
                <div>
                  <h3 className="px-3 py-2 text-sm font-bold">Services</h3>
                  <Divider />
                  {searchResult.service.map((provider, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => router.push(`/${locale}/services/${provider.serviceID}/${provider.Slug}`)}
                    >
                      {provider.ServiceName}
                    </div>
                  ))}
                </div>
              )}

              {searchResult.providers?.length === 0 && searchResult.service?.length === 0 && (
                <div className="p-2 text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>

        <MyPrimaryButton title="Search" className="rounded-r p-3 mt-[-30px] z-10" onClick={handleSearch} />
      </div>
    </div>
  );
};

export default Slider;
