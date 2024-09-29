"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import PhoneImage from "@/app/assets/phone.jpg";
import BuildIcon from "@mui/icons-material/Build";
import SpeedIcon from "@mui/icons-material/Speed";
import { MyStyledIcon } from "@/app/custom/MyIcon";
import { MyPrimaryButton } from "@/app/custom/MyButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { MyPrimaryText, MySecondaryText, MyHeading } from "@/app/custom/MyText";
import { MySecondaryBox } from "@/app/custom/MyBox";
import { MyColoredInput, MyInput } from "@/app/custom/MyInput";

const Subscribe = ({ t }) => {
  return (
    <div className="p-6">
      <Grid container spacing={2}>
        {/* Left Side: Mobile Phone Image */}
        <Grid item xs={12} md={4}>
          <div
            className="flex justify-center md:justify-start"
            data-aos="zoom-in"
          >
            <img
              src={PhoneImage.src}
              alt="Phone Advertisement"
              className="w-full max-w-sm rounded-lg"
            />
          </div>
        </Grid>

        {/* Right Side: Information and Subscription */}
        <Grid item xs={12} md={8} data-aos="fade-up">
          <div className="flex flex-col justify-center h-full">
            <MyHeading
              className="text-5xl font-bold primary-text my-8"
              title={t("title")}
            />

            <MySecondaryText title={t("subscribe")} className="mb-4" />
            <MySecondaryText title={t("subscribe_subtitle")} className="mb-6" />

            {/* Subscription Form */}
            <div className="flex mb-8" data-aos="fade-up">
              <MyColoredInput
                type="email"
                placeholder="Enter your email"
                inputClass={"p-3 rounded-l-lg"}
                className="rounded-l-lg border flex-grow w-auto max-w-[800px] overflow-hidden"
              />
              <MyPrimaryButton
                className="p-3 primary-bg text-white font-semibold rounded-r-lg hover:bg-orange-600 transition duration-300"
                title={t("subscribe_button")}
              />
            </div>

            {/* Additional Content */}
            <div className="space-y-4" data-aos="fade-up">
              <MyPrimaryText
                title={t("why_us")}
                className="text-3xl font-semibold"
              />
              <ul className="space-y-2" data-aos="fade-up">
                <li className="flex items-center" data-aos="fade-up">
                  <MySecondaryBox className="rounded-md p-1">
                    <MyStyledIcon Icon={<CheckCircleIcon />} />
                  </MySecondaryBox>
                  <MySecondaryText
                    title={t("wide_range")}
                    className="text-gray-600 ml-2"
                  />
                </li>
                <li className="flex items-center" data-aos="fade-up">
                  <MySecondaryBox className="p-1 rounded-md">
                    <MyStyledIcon Icon={<BuildIcon />} />
                  </MySecondaryBox>
                  <MySecondaryText
                    title={t("high_skill")}
                    className="text-gray-600 ml-2"
                  />
                </li>
                <li className="flex items-center" data-aos="fade-up">
                  <MySecondaryBox className="p-1 rounded-md">
                    <MyStyledIcon Icon={<AttachMoneyIcon />} />
                  </MySecondaryBox>
                  <MySecondaryText
                    title={t("price")}
                    className="text-gray-600 ml-2"
                  />
                </li>
                <li className="flex items-center" data-aos="fade-up">
                  <MySecondaryBox className="p-1 rounded-md">
                    <MyStyledIcon Icon={<SpeedIcon />} />
                  </MySecondaryBox>
                  <MySecondaryText
                    title={t("quick")}
                    className="text-gray-600 ml-2"
                  />
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
