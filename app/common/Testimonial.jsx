import React from "react";
import { Avatar, Rating } from "@mui/material";
import { MyCardBox } from "../custom/MyBox";
import { MyPrimaryText, MySecondaryText } from "../custom/MyText";

const Testimonial = ({ testimonial }) => {
  const { userName, userAvatar, rating, review, createdAt, reviewType } = testimonial;

  return (
    <MyCardBox
      className="shadow-lg rounded-lg p-6 my-4 max-w-md mx-auto h-[180px]"
      data-aos="fade-up"
    >
      {/* User Details */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Avatar src={userAvatar} alt={userName} sizes="small" />
          <div className="ml-3">
            <MyPrimaryText className="font-semibold text-md" title={userName} />
            <MyPrimaryText
              className="text-sm text-gray-400"
              title={new Date(createdAt).toLocaleDateString()}
            />
          </div>
        </div>
        {/* Tag for Review Type */}
        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold ${
            reviewType === "Provider" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
          }`}
        >
          {reviewType === "Provider" ? "Provider" : "Service"}
        </span>
      </div>

      {/* Review Content */}
      <div className="mb-4">
        {/* Rating Component */}
        <Rating name="read-only" value={rating} precision={0.5} readOnly size="small" className="mb-2" />
        {/* Review Text */}
        <MySecondaryText
          className="max-w-[200ch]"
          title={review.length > 60 ? `${review.slice(0, 60)}...` : review}
        />
      </div>
    </MyCardBox>
  );
};

export default Testimonial;
