"use client";

import React from "react";
import { MyCardBox } from "@/app/custom/MyBox";
import { MyHeading } from "@/app/custom/MyText";
import { Divider } from "@mui/material";
import ProviderReviews from "@/app/components/providers/ProviderReviews";

const page = () => {
  return (
    <MyCardBox className="p-4 rounded-2xl">
      <MyHeading title={"Reviews"} className={"text-2xl my-2"} />
      <Divider />
      <ProviderReviews />
    </MyCardBox>
  );
};

export default page;
