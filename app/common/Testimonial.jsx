import React from "react";
import { Avatar, Rating } from "@mui/material";
import { MyCardBox } from "../custom/MyBox";
import { MyPrimaryText, MySecondaryText } from "../custom/MyText";

const Testimonial = ({ testimonial }) => {
  const { customer_name, rating, review_title, review_text, review_date } =
    testimonial;

  return (
    <MyCardBox className="shadow-lg rounded-lg p-6 my-4 max-w-md mx-auto h-[240px]">
      <div className="flex items-center mb-4">
        <Avatar sizes="small" />
        <div className="ml-3">
          <MyPrimaryText
            className="font-semibold text-md"
            title={customer_name}
          />
          <MyPrimaryText
            className="text-sm text-gray-400"
            title={new Date(review_date).toLocaleDateString()}
          />
        </div>
      </div>
      <div className="mb-4">
        <MySecondaryText className="font-bold text-md" title={review_title} />
        {/* Rating component */}
        <Rating
          name="read-only"
          value={rating}
          precision={0.5}
          readOnly
          size="small"
          className="mb-2"
        />
        <MySecondaryText
          className=" max-w-[200ch]"
          title={
            review_text.length > 60
              ? `${review_text.slice(0, 60)}...`
              : review_text
          }
        />
      </div>
    </MyCardBox>
  );
};

export default Testimonial;
