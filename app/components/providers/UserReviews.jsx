import React, { useState } from "react";
import { Star } from "@mui/icons-material";
import { Avatar, Divider, Modal, Box, Rating } from "@mui/material";

const UserReviews = ({ reviews }) => {
  return (
    <div className="space-y-4">
      {reviews.map((review) => {
        return (
          <div key={review._id} className="p-6 rounded-2xl ">
            {/* User Info */}
            <div className="flex items-center mb-4">
              <Avatar src={review.userAvatar} alt={review.userName} />
              <div className="ml-4">
                <h1 className="font-semibold text-lg">{review.userName}</h1>
                <p className="text-sm text-gray-500">
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Rating and Review */}
            <div className="mb-4">
              <Rating value={review.rating} readOnly />
              <p className="mt-2 ">{review.review}</p>
            </div>

            {/* Review Media (Display all images) */}
            {review.media.length > 0 && (
              <div className="flex flex-wrap gap-2 my-4">
                {review.media.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Review Media ${index}`}
                    className="w-20 h-20 object-cover rounded-lg cursor-pointer"
                  />
                ))}
              </div>
            )}

            <Divider className="mt-6" />
          </div>
        );
      })}
    </div>
  );
};

export default UserReviews;
