import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import ProfileHeading from "./ProfileHeading";
import { MyCardBox } from "@/app/custom/MyBox";
import { useReviews } from "@/app/hooks/useReviews";
import UserReviews from "../providers/UserReviews";
import NoReviewsFound from "@/app/assets/no-reviews.png";
import { ReviewCardSkeleton } from "@/app/custom/CustomSkeleton";

const ProfileReviews = () => {
  const t = useTranslations("profile");
  const { userReviews, userReviewsLoading, fetchUserReviews } = useReviews();

  useEffect(() => {
    fetchUserReviews();
  }, []);
  return (
    <MyCardBox className="p-5 rounded-2xl">
      <ProfileHeading heading={t("reviews")} />

      {userReviewsLoading ? (
        <ReviewCardSkeleton />
      ) : userReviews.length > 0 ? (
        <UserReviews reviews={userReviews} />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[630px]">
          <img src={NoReviewsFound.src} alt="" className="object-fit mb-2" />
          <h1>{t("no_reviews")}</h1>
        </div>
      )}
    </MyCardBox>
  );
};

export default ProfileReviews;
