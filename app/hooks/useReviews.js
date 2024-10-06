import { useEffect, useState } from "react";
import {
  addProviderReview,
  addServiceReview,
  getParticularProviderReviews,
  getParticularServiceReviews,
  getParticularUserReviews,
  getProvidersReviews,
} from "../utils/reviewServices";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export function useReviews(providerId) {
  // all providers reviews
  const [allProvidersReview, setAllProvidersReview] = useState([]);
  const [providersReviewLoading, setProvidersReviewLoading] = useState(true);

  // Pagination state
  const [page, setPage] = useState(1);
  const providerLimit = 2; // Limit for provider and service reviews
  const userLimit = 3; // Limit for user reviews

  // single provider reviews based on their id
  const [singleProviderReviews, setSingleProviderReviews] = useState([]);
  const [singleProviderReviewsLoading, setSingleProviderReviewsLoading] =
    useState(true);

  const [error, setError] = useState([]);

  const userId = useSelector((state) => state?.auth?.user?.user?._id);

  // get user's all reviews
  const [userReviews, setUserReviews] = useState([]);
  const [userReviewsLoading, setUserReviewsLoading] = useState(true);

  // service reviews
  const [serviceReviews, setServiceReviews] = useState([]);
  const [serviceLoading, setServiceLoading] = useState(true);

  const [reviewAdded, setReviewAdded] = useState(false);

  // all providers reviews with pagination
  async function fetchReviews() {
    try {
      const response = await getProvidersReviews(page, providerLimit);
      setAllProvidersReview(response.data);
      setProvidersReviewLoading(false);
    } catch (error) {
      console.log("Error in fetching reviews", error);
      setError(error?.response?.data);
    }
  }

  // single provider reviews based on their id with limit and pagination
  async function fetchSingleProviderReviews() {
    try {
      const response = await getParticularProviderReviews(
        providerId,
        page,
        providerLimit
      );
      setSingleProviderReviews(response.data);
      setSingleProviderReviewsLoading(false);
    } catch (error) {
      console.log("Error in fetching single provider reviews", error);
      setSingleProviderReviewsLoading(false);
      setError(error?.response?.data);
    }
  }

  // single service reviews with limit and pagination
  async function fetchSingleServiceReviews(serviceId) {
    try {
      const response = await getParticularServiceReviews(
        serviceId,
        page,
        providerLimit
      );
      setServiceReviews(response.data);
      setServiceLoading(false);
    } catch (error) {
      setServiceLoading(false);
      console.log("Error in fetching single provider reviews", error);
      setError(error?.response?.data);
    }
  }

  // get particular user's reviews with limit
  async function fetchUserReviews() {
    try {
      const response = await getParticularUserReviews(userId, page, userLimit);
      console.log("user reviews", response.data);
      setUserReviews(response.data);
      setUserReviewsLoading(false);
      return response.data;
    } catch (error) {
      console.log("Error in fetching user reviews", error);
      setUserReviewsLoading(false);
      setError(error?.response?.data);
    }
  }

  async function AddProviderReview(providerID, reviewData) {
    try {
      const response = await addProviderReview(providerID, userId, reviewData);
      toast.success(response.message || "Review added successfully");
      await fetchSingleProviderReviews(providerID);
      setReviewAdded(true);
      return response.data;
    } catch (error) {
      console.log("Error in adding provider review", error);
      toast.error(error.response.data.message || "Error in adding review");
      setError(error?.response?.data);
    }
  }

  async function AddServiceReview(serviceId, reviewData) {
    try {
      const response = await addServiceReview(serviceId, userId, reviewData);
      toast.success(response.message || "Review added successfully");
      await fetchSingleServiceReviews(serviceId);
      setReviewAdded(true);
      return response.data;
    } catch (error) {
      console.log("Error in adding service review", error);
      toast.error(error.response.data.message || "Error in adding review");
      setError(error?.response?.data);
    }
  }

  // fetch reviews when page or providerId changes
  useEffect(() => {
    if (providerId) {
      fetchSingleProviderReviews(providerId);
    } else {
      fetchReviews();
    }
  }, [page, providerId]);

  return {
    error,
    allProvidersReview,
    providersReviewLoading,
    singleProviderReviews,
    singleProviderReviewsLoading,
    userReviews,
    userReviewsLoading,
    fetchUserReviews,
    serviceLoading,
    serviceReviews,
    fetchSingleServiceReviews,
    AddProviderReview,
    fetchSingleProviderReviews,
    reviewAdded,
    AddServiceReview,
    setPage, // For controlling pagination
    page,
  };
}
