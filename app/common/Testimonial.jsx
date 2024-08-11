import { Avatar, Rating } from "@mui/material";
import React from "react";

const Testimonial = ({ testimonial }) => {
  const { customer_name, rating, review_title, review_text, review_date } =
    testimonial;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 my-4 max-w-md mx-auto h-[240px]">
      <div className="flex items-center mb-4">
        <Avatar sizes="small" />
        <div className="ml-3">
          <h3 className="font-semibold text-md text-gray-900">
            {customer_name}
          </h3>
          <p className="text-sm text-gray-400">
            {new Date(review_date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="font-bold text-md text-gray-800">{review_title}</h4>
        {/* Rating component */}
        <Rating
          name="read-only"
          value={rating}
          precision={0.5}
          readOnly
          size="small"
          className="mb-2"
        />
        <p className="text-gray-700 max-w-[200ch]">
          {review_text.length > 60
            ? `${review_text.slice(0, 60)}...`
            : review_text}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
