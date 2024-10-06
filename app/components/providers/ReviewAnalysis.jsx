// Import necessary icons and components from MUI and React
import { Group, Star } from "@mui/icons-material"; // MUI icons for star and group
import { Grid, LinearProgress, Typography } from "@mui/material"; // Grid layout and progress bar from MUI
import { useTranslations } from "next-intl";
import React from "react"; // Import React to define the component

const ReviewAnalysis = ({ reviewAnalysis }) => {
  // Extracting the total number of reviews, using 1 as a fallback to avoid division by zero
  const totalReviews = reviewAnalysis?.totalReviews || 1;

  // Extracting the star count data, with default values for each star if no data is available
  const starCounts = reviewAnalysis?.starCounts || {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  const t = useTranslations("providers");

  return (
    <div className="">
      {/* Grid layout for Average Rating and Total Reviews */}
      <Grid container spacing={3}>
        {/* Average Rating Card */}
        <Grid item xs={12} md={6}>
          <div className="border p-4 rounded-2xl">
            <div className="flex gap-4 items-center">
              <div className="p-4 rounded-full primary-bg" data-aos="fade-up">
                <Star /> {/* Star icon from MUI */}
              </div>
              <div>
                <h1 data-aos="fade-up">{t("avg_rating")}</h1>
                <h1
                  data-aos="fade-up"
                  className="text-3xl font-semibold primary-text"
                >
                  {/* Display average rating from reviewAnalysis */}
                  {reviewAnalysis ? reviewAnalysis?.averageRating?.toFixed(2) : 0}
                </h1>
              </div>
            </div>
          </div>
        </Grid>

        {/* Total Reviews Card */}
        <Grid item xs={12} md={6}>
          <div className="border p-4 rounded-2xl">
            <div className="flex gap-4 items-center">
              <div className="p-4 rounded-full primary-bg" data-aos="fade-up">
                <Group /> {/* Group icon from MUI */}
              </div>
              <div>
                <h1 data-aos="fade-up">{t("total_reviews")}</h1>
                <h1
                  data-aos="fade-up"
                  className="text-3xl font-semibold primary-text"
                >
                  {/* Display total reviews from reviewAnalysis */}
                  {reviewAnalysis ? reviewAnalysis?.totalReviews : 0}
                </h1>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Star Counts Section */}
      <div className="border p-4 rounded-2xl mt-4">
        <h1 className="text-xl font-semibold primary-text" data-aos="fade-up">
          {t("star_count")}
        </h1>
        <div className="mt-4" data-aos="fade-up">
          {/* Loop through each star rating (from 5 stars to 1 star) */}
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-4 mb-2">
              {/* Display the number of stars (e.g., 5 Stars, 4 Stars) */}
              <h1 data-aos="fade-up">{star} Stars</h1>

              {/* Linear progress bar to represent the percentage of reviews for each star */}
              <LinearProgress
                variant="determinate" // Determines the completion percentage
                value={(starCounts[star] / totalReviews) * 100} // Calculate percentage of total reviews for each star rating
                className="flex-1" // Make the progress bar stretch to fill the available space
              />

              {/* Display the actual count of reviews for this specific star rating */}
              <h1>{starCounts[star]}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewAnalysis;
