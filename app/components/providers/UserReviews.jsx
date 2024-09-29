import React from "react";
import { Avatar, Divider, Rating } from "@mui/material";

const UserReviews = ({ reviews }) => {
  return (
    <div className="space-y-4">
      {reviews.map((review) => {
        return (
          <div key={review._id} className="p-6 rounded-2xl ">
            {/* User Info */}
            <div className="flex items-center mb-4">
              <Avatar
                src={review.userAvatar}
                alt={review.userName}
                data-aos="fade-up"
              />
              <div className="ml-4">
                <h1 className="font-semibold text-lg" data-aos="fade-up">
                  {review.userName}
                </h1>
                <p className="text-sm text-gray-500" data-aos="fade-up">
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Rating and Review */}
            <div className="mb-4" data-aos="fade-up">
              <Rating value={review.rating} readOnly />
              <p className="mt-2" data-aos="fade-up">
                {review.review}
              </p>
            </div>

            {/* Review Media (Display all images) */}
            {review.media.length > 0 && (
              <div className="flex flex-wrap gap-2 my-4">
                {review.media.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Media ${index}`}
                    className="w-20 h-20 object-cover rounded-lg cursor-pointer"
                    data-aos="fade-up"
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
