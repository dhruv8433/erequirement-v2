import React, { useState, useRef } from "react";
import { MyCardBox } from "@/app/custom/MyBox";
import { MyHeading } from "@/app/custom/MyText";
import { useTranslations } from "next-intl";
import { Divider, Rating } from "@mui/material";
import { MyTextArea } from "@/app/custom/MyInput";
import { MyBorderdButton, MyPrimaryButton } from "@/app/custom/MyButton";
import { Add } from "@mui/icons-material";
import { useReviews } from "../hooks/useReviews";
import { useParams } from "next/navigation";
import { useProviders } from "../hooks/useProviders";

const AddReview = ({ isService, serviceId }) => {
  const t = useTranslations("providers");

  // State for rating, review, and selected image
  const [reviewData, setReviewData] = useState({
    rating: 0,
    review: "",
    selectedImage: "",
  });

  // State to manage form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create a reference for the file input
  const fileInputRef = useRef(null);

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReviewData({ ...reviewData, selectedImage: file }); // Store the selected file in state
      console.log("Selected Image File:", file); // Log the file directly after selection
    } else {
      console.log("No file selected");
    }
  };

  const { id } = useParams();
  const { singleProvider } = useProviders(id);
  const { AddProviderReview, fetchSingleProviderReviews, AddServiceReview } =
    useReviews(id);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Review Data:", reviewData); // Log the review data to check its correctness

      if (isService) {
        await AddServiceReview(serviceId, reviewData);
      } else {
        await AddProviderReview(singleProvider._id, reviewData);
        await fetchSingleProviderReviews(singleProvider._id);
      }

      setReviewData({ rating: 0, review: "", selectedImage: "" }); // Clear form after successful submission
    } catch (error) {
      console.error("Failed to submit review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MyCardBox className="p-5 rounded-2xl">
      <MyHeading title={t("add_review")} className={"text-2xl my-2"} />
      <Divider />

      {/* Form for handling review submission */}
      <form
        onSubmit={handleSubmit}
        className="my-4 flex flex-col justify-center w-full items-center gap-2"
      >
        {/* Rating */}
        <Rating
          size="large"
          value={reviewData.rating}
          onChange={(event, newValue) =>
            setReviewData({ ...reviewData, rating: newValue })
          }
        />

        {/* Add Pic Button - File Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <MyBorderdButton
          title={
            reviewData.selectedImage
              ? reviewData.selectedImage.name
              : t("add_pic")
          } // Update title with image name
          icon={reviewData.selectedImage ? "" : <Add />}
          className={"w-full p-5"}
          type={"button"}
          onClickFunction={() => {
            fileInputRef.current?.click(); // Trigger file input click
          }}
        />

        {/* Text Area for Review */}
        <MyTextArea
          placeholder="Enter Your Reviews"
          className={"my-2 rounded-md"}
          cols={14}
          value={reviewData.review}
          onChange={(e) =>
            setReviewData({ ...reviewData, review: e.target.value })
          }
        />

        {/* Submit Button */}
        <MyPrimaryButton
          title={isSubmitting ? t("submitting") : t("submit")} // Disable the button while submitting
          className={"w-full p-2 rounded-md"}
          type="submit" // Change from onClick to submit for the form
          disabled={isSubmitting}
        />
      </form>
    </MyCardBox>
  );
};

export default AddReview;
