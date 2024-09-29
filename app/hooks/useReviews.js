/**
 * Custom hook to manage Reviews and it's actions.
 * @params {providerId} - Providers Id for getting particualr provider reviews
 */

import { useEffect, useState } from "react";
import {
  getParticularProviderReviews,
  getParticularUserReviews,
  getProvidersReviews,
} from "../utils/reviewServices";
import { useSelector } from "react-redux";

export function useReviews(providerId) {
  // all providers reviews
  const [allProvidersReview, setAllProvidersReview] = useState([]);
  const [providersReviewLoading, setProvidersReviewLoading] = useState(true);

  // single provider reviews based on their id
  const [singleProviderReviews, setSingleProviderReviews] = useState([]);
  const [singleProviderReviewsLoading, setSingleProviderReviewsLoading] =
    useState(true);

  const [error, setError] = useState([]);

  const userId = useSelector((state) => state?.auth?.user?.user?._id);
  // get user's all reviews
  const [userReviews, setUserReviews] = useState([]);
  const [userReviewsLoading, setUserReviewsLoading] = useState(true);

  // all providers reviews
  async function fetchReviews() {
    try {
      const response = await getProvidersReviews();
      setAllProvidersReview(response.data);
      setProvidersReviewLoading(false);
    } catch (error) {
      console.log("Error in fetching reviews", error);
      setError(error?.response?.data);
    }
  }

  // single provider reviews based on their id
  async function fetchSingleProviderReviews() {
    try {
      const response = await getParticularProviderReviews(providerId);
      setSingleProviderReviews(response.data);
      setSingleProviderReviewsLoading(false);
    } catch (error) {
      console.log("Error in fetching single provider reviews", error);
      setSingleProviderReviewsLoading(false);
      setError(error?.response?.data);
    }
  }

  // get particular user's reviews based on their id
  async function fetchUserReviews() {
    try {
      const response = await getParticularUserReviews(userId);
      setUserReviews(response.data);
      setUserReviewsLoading(false);
      return response.data;
    } catch (error) {
      console.log("Error in fetching user reviews", error);
      setUserReviewsLoading(false);
      setError(error?.response?.data);
    }
  }

  // fetch reviews when page loads
  useEffect(() => {
    fetchReviews();
  }, []);

  // fetch single provider reviews when providerId changes
  useEffect(() => {
    if (providerId) {
      fetchSingleProviderReviews(providerId);
    }
  }, [providerId]);

  return {
    error,
    allProvidersReview,
    providersReviewLoading,
    singleProviderReviews,
    singleProviderReviewsLoading,
    userReviews,
    userReviewsLoading,
    fetchUserReviews,
  };
}
