"use client";

import React, { useState } from "react";
import saleImg from "@/app/assets/sale.jpg";
import { Grid } from "@mui/material";
import reviewImg from "@/app/assets/review.jpg";
import welcomeImg from "@/app/assets/welcome.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import customerImg from "@/app/assets/customer.jpg";
import { Autoplay, Pagination } from "swiper/modules";
import SignupForm from "../components/modelForms/SignupForm";
import LoginForm from "../components/modelForms/LoginForm";

const AuthModal = ({ setModal }) => {
  const banners = [
    { src: welcomeImg.src, alt: "welcome" },
    { src: customerImg.src, alt: "happy-customers" },
    { src: saleImg.src, alt: "great-sale" },
    { src: reviewImg.src, alt: "reviews" },
  ];

  const [signupForm, setSignupForm] = useState(true);

  return (
    <div>
      <div className="">
        <Grid container spacing={2}>
          <Grid display={{ xs: "none", md: "block" }} item xs={12} md={6}>
            <div className="h-[600px]">
              {/* my swiper for posters */}
              <Swiper
                pagination={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-full"
                autoplay={true}
              >
                {banners.map((img) => (
                  <SwiperSlide className="h-full w-full" key={img.src}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="object-cover h-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* open forms based on conditions */}
            {signupForm ? (
              <SignupForm setSignupForm={setSignupForm} />
            ) : (
              <LoginForm setSignupForm={setSignupForm} />
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AuthModal;
