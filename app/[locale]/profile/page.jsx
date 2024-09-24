"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { MyCardBox } from "@/app/custom/MyBox";
import ExploreProfile from "@/app/assets/explore.png";
import { MyBorderdButton } from "@/app/custom/MyButton";
import Link from "next/link";

const page = () => {
  const t = useTranslations("profile");
  const locale = useLocale();
  return (
    <MyCardBox className="min-h-[700px] flex flex-col justify-center rounded-2xl">
      {/* empty state for explore profile */}
      <img
        src={ExploreProfile.src}
        alt=""
        className="h-[500px] w-full object-contain"
      />
      <h1 className="mx-10 text-center">{t("explore_profile")}</h1>
      <div className="flex w-full justify-center">
        <Link href={`/${locale}/profile/orders`}>
          <MyBorderdButton
            title={t("explore_now")}
            className="text-center my-3 w-max flex justify-center p-1 px-2"
          />
        </Link>
      </div>
    </MyCardBox>
  );
};

export default page;
