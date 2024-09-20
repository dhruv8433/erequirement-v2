import React from "react";
import UserReviews from "./UserReviews";
import { useParams } from "next/navigation";
import ReviewAnalysis from "./ReviewAnalysis";
import { useReviews } from "@/app/hooks/useReviews";
import { useProviders } from "@/app/hooks/useProviders";
import { UserReviewsSkeleton } from "@/app/custom/CustomSkeleton";
import NoReviewsFound from "@/app/assets/no-reviews.png";

const ProviderReviews = () => {
  const { id } = useParams();
  const { singleProvider, singleProviderLoading } = useProviders(id);
  // fetch reviews of single provider based on their id
  const { singleProviderReviews, singleProviderReviewsLoading, error } =
    useReviews(singleProvider._id);

  console.log("single reviews", singleProviderReviews);

  return (
    <div className="my-2">
      {singleProviderReviewsLoading ? (
        // loading skeleton
        <UserReviewsSkeleton />
      ) : error.statusCode !== 404 ? (
        <div className="my-4">
          {/* reviews analysis */}
          <ReviewAnalysis
            reviewAnalysis={singleProviderReviews.analysis.analytics}
          />
          {/* user reviews */}
          <UserReviews reviews={singleProviderReviews.reviews} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[320px]">
          <img src={NoReviewsFound.src} alt="" className="object-fit mb-2"/>
          <h1>No Reivews Found for this provider</h1>
        </div>
      )}
    </div>
  );
};

export default ProviderReviews;
