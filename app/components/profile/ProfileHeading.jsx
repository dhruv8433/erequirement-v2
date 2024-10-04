import React from "react";
import { Divider } from "@mui/material";
import { MyHeading } from "@/app/custom/MyText";
import { MyBorderdButton } from "@/app/custom/MyButton";

const ProfileHeading = ({ heading, isAction, actionTitle, actionEvent }) => {
  return (
    <div className="mb-1" data-aos="fade-up">
      <div className="flex justify-between items-center">
        <MyHeading title={heading} className={"text-2xl font-semibold my-1"} />
        {isAction && (
          <MyBorderdButton
            title={actionTitle}
            className={"py-1 px-2 mb-1"}
            onClickFunction={actionEvent}
          />
        )}
      </div>
      <Divider />
    </div>
  );
};

export default ProfileHeading;
