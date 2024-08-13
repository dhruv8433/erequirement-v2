"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import PhoneImage from "@/app/assets/phone.jpg";
import BuildIcon from "@mui/icons-material/Build";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Subscribe = ({ t }) => {
  return (
    <div className="p-6">
      <Grid container spacing={4}>
        {/* Left Side: Mobile Phone Image */}
        <Grid item xs={12} md={4}>
          <div className="flex justify-center md:justify-start">
            <img
              src={PhoneImage.src}
              alt="Phone Advertisement"
              className="w-full max-w-sm rounded-lg"
            />
          </div>
        </Grid>

        {/* Right Side: Information and Subscription */}
        <Grid item xs={12} md={8}>
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-5xl font-bold primary-text my-8">
              {t("title")}
            </h1>
            <p className="text-gray-600 mb-4">{t("subscribe")} </p>
            <p className="text-gray-600 mb-6">{t("subscribe_subtitle")}</p>

            {/* Subscription Form */}
            <div className="flex mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-l-lg border border-gray-300 flex-grow"
              />
              <button className="p-3 primary-bg text-white font-semibold rounded-r-lg hover:bg-orange-600 transition duration-300">
                {t("subscribe_button")}
              </button>
            </div>

            {/* Additional Content */}
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                {t("why_us")}
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="bg-white w-max p-1 rounded-md">
                    <CheckCircleIcon className="primary-text" />
                  </div>
                  <span className="text-gray-600 ml-2">{t("wide_range")}</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-white w-max p-1 rounded-md">
                    <BuildIcon className="primary-text" />
                  </div>
                  <span className="text-gray-600 ml-2">{t("high_skill")}</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-white w-max p-1 rounded-md">
                    <AttachMoneyIcon className="primary-text" />
                  </div>
                  <span className="text-gray-600 ml-2">{t("price")}</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-white w-max p-1 rounded-md">
                    <SpeedIcon className="primary-text" />
                  </div>
                  <span className="text-gray-600 ml-2">{t("quick")}</span>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Subscribe;
