import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import ProfileHeading from "./ProfileHeading";
import { MyCardBox } from "@/app/custom/MyBox";
import { useReviews } from "@/app/hooks/useReviews";
import UserReviews from "../providers/UserReviews";
import NoReviewsFound from "@/app/assets/no-reviews.png";
import { ReviewCardSkeleton } from "@/app/custom/CustomSkeleton";
import { Pagination } from "@mui/material";

const ProfileReviews = () => {
  const t = useTranslations("profile");
  const { userReviews, userReviewsLoading, fetchUserReviews, setPage, page } =
    useReviews();

  useEffect(() => {
    fetchUserReviews();
  }, [page]);

  return (
    <MyCardBox className="p-5 rounded-2xl">
      <ProfileHeading heading={t("reviews")} />

      {userReviewsLoading ? (
        <ReviewCardSkeleton />
      ) : userReviews.reviews.length > 0 ? (
        <>
          <UserReviews reviews={userReviews.reviews} />
          <div className="flex justify-center mt-2">
            <Pagination
              count={userReviews.totalPages} // Use totalPages from the userOrders state
              color="primary"
              onChange={(event, value) => setPage(value)} // Update the page on pagination change
              page={userReviews.currnetPage} // Set the current active page
            />
          </div>
        </>
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
