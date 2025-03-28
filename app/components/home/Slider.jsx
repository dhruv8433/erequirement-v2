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
import { useSearch } from "@/app/hooks/useSearch"; // Ensure it's correctly fetching results
import { Divider } from "@mui/material";
import Link from "next/link";

const Slider = ({ data, loading }) => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const dropdownRef = useRef(null);

  const { searchResult, loading: searchLoading } = useSearch(query); // Ensure this works correctly

  useEffect(() => {
    console.log("Search Query:", query);
    console.log("Search Result:", searchResult);
    console.log("Search Loading:", searchLoading);

    if (
      query.trim() &&
      (searchResult?.service?.length > 0 || searchResult?.providers?.length > 0)
    ) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [query, searchResult, searchLoading]);

  // Close dropdown when clicking outside
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

  const handleSearchOnEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div data-aos="zoom-in">
      {loading ? (
        <MySkeleton height={"500px"} width={"100%"} />
      ) : (
        <Swiper
          navigation
          modules={[Navigation, Autoplay]}
          autoplay
          className="mySwiper rounded-2xl"
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Advertisement ads={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Search Input and Button */}
      <div className="relative flex items-center z-10 justify-center bottom-5">
        <div className="relative w-[500px]" ref={dropdownRef}>
          <MyColoredInput
            placeholder="Enter Service, Provider, Tags to search"
            className="w-full rounded-2xl"
            inputClass="p-2 rounded-l"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearchOnEnter}
          />

          {/* Debugging: Log when dropdown should be visible */}
          {console.log("Dropdown Visibility:", showDropdown)}

          {/* Dropdown for Search Results */}
          {showDropdown && (
            <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto z-[9999]">
              {/* Providers Section */}
              {searchResult.providers?.length > 0 && (
                <div>
                  <h3 className="px-3 py-2 text-sm font-bold text-black">
                    Providers
                  </h3>
                  <hr />
                  {searchResult.providers.map((provider, index) => (
                    <Link
                      href={`/${locale}/providers/${provider.id}/${provider.slug}`}
                      key={index}
                    >
                      <div
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer text-black"
                        onClick={() => {
                          setShowDropdown(false);
                        }}
                      >
                        {provider.title}
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Services Section */}

              {searchResult.service?.length > 0 && (
                <div>
                  <h3 className="px-3 py-2 text-sm font-bold text-black">
                    Services
                  </h3>
                  <hr />
                  {searchResult.service.map((provider, index) => (
                    <Link
                      href={`/${locale}/services/${provider.serviceID}/${provider.Slug}`}
                      key={index}
                    >
                      <div
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer text-black truncate w-full"
                        onClick={() => {
                          setShowDropdown(false);
                        }}
                      >
                        {provider.ServiceName}
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* No Results Found */}
              {searchResult.providers?.length === 0 &&
                searchResult.service?.length === 0 && (
                  <div className="p-2 text-gray-500">No results found</div>
                )}
            </div>
          )}
        </div>

        <MyPrimaryButton
          title="Search"
          className="rounded-r p-2 hover:bg-orange-500"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default Slider;
