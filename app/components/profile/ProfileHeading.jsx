import React from "react";
import { Divider } from "@mui/material";
import { MyHeading } from "@/app/custom/MyText";

const ProfileHeading = ({ heading }) => {
  return (
    <div className="mb-1" data-aos="fade-up">
      <MyHeading title={heading} className={"text-2xl font-semibold my-1"} />
      <Divider />
    </div>
  );
};

export default ProfileHeading;
