"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { MyCardBox } from "@/app/custom/MyBox";
import ProfileHeading from "@/app/components/profile/ProfileHeading";

const page = () => {
  const { option } = useParams();
  console.log(option);

  const router = useRouter();
  const locale = useLocale();

  if (option !== "orders") {
    router.replace(`/${locale}/profile`);
  }

  const t = useTranslations("profile");

  return (
    <MyCardBox className="border p-5 rounded-2xl" data-aos="fade-up">
      <ProfileHeading heading={t("orders_details")} />
    </MyCardBox>
  );
};

export default page;
