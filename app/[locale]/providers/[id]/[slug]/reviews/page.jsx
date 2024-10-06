"use client";

import React, { useState } from "react";
import { MyCardBox } from "@/app/custom/MyBox";
import { MyHeading } from "@/app/custom/MyText";
import { Divider } from "@mui/material";
import ProviderReviews from "@/app/components/providers/ProviderReviews";
import { useTranslations } from "next-intl";
import { MyBorderdButton } from "@/app/custom/MyButton";
import MyModal from "@/app/custom/MyModal";
import AddReview from "@/app/model/AddReview";
import { useReviews } from "@/app/hooks/useReviews";
import { useProviders } from "@/app/hooks/useProviders";
import { useParams } from "next/navigation";

const page = () => {
  const t = useTranslations("providers");
  const [openReview, setOpenReview] = useState(false);

  const { id } = useParams();
  const { singleProvider, singleProviderLoading } = useProviders(id);
  // fetch reviews of single provider based on their id
  const { singleProviderReviews, singleProviderReviewsLoading, error } =
    useReviews(singleProvider._id);

  return (
    <MyCardBox className="p-4 rounded-2xl">
      <div className="flex items-center justify-between">
        <MyHeading title={t("reviews")} className={"text-2xl my-2"} />
        <MyBorderdButton
          title={t("add_review")}
          className={"px-2 py-1"}
          onClickFunction={() => setOpenReview(true)}
        />
      </div>
      <Divider />

      <ProviderReviews
        loading={singleProviderReviewsLoading}
        reviews={singleProviderReviews}
        error={error}
      />

      <MyModal open={openReview} setOpen={setOpenReview}>
        <MyCardBox className="rounded-2xl" width={{ xs: "300px", md: "400px" }}>
          <AddReview />
        </MyCardBox>
      </MyModal>
    </MyCardBox>
  );
};

export default page;
