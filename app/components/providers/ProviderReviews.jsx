import React from "react";
import UserReviews from "./UserReviews";
import { useParams } from "next/navigation";
import ReviewAnalysis from "./ReviewAnalysis";
import { useReviews } from "@/app/hooks/useReviews";
import { useProviders } from "@/app/hooks/useProviders";
import { UserReviewsSkeleton } from "@/app/custom/CustomSkeleton";
import NoReviewsFound from "@/app/assets/no-reviews.png";
import { useTranslations } from "next-intl";

const ProviderReviews = ({ loading, reviews, error }) => {
  console.log("single reviews", reviews);
  const t = useTranslations("providers");

  return (
    <div className="my-2">
      {loading ? (
        // loading skeleton
        <UserReviewsSkeleton />
      ) : error.statusCode !== 404 ? (
        <div className="my-4">
          {/* reviews analysis */}
          <ReviewAnalysis reviewAnalysis={reviews.analysis.analytics} />
          {/* user reviews */}
          <UserReviews reviews={reviews.reviews} />
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center min-h-[320px]"
          data-aos="fade-up"
        >
          <img
            src={NoReviewsFound.src}
            alt=""
            className="object-fit mb-2"
            data-aos="fade-up"
          />
          <h1>{t("no_reviews")}</h1>
        </div>
      )}
    </div>
  );
};

export default ProviderReviews;
