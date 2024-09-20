/**
 * Custom hook to manage Reviews and it's actions.
 * @params {providerId} - Providers Id for getting particualr provider reviews
 */

import { useEffect, useState } from "react";
import {
  getParticularProviderReviews,
  getProvidersReviews,
} from "../utils/reviewServices";

export function useReviews(providerId) {
  // all providers reviews
  const [allProvidersReview, setAllProvidersReview] = useState([]);
  const [providersReviewLoading, setProvidersReviewLoading] = useState(true);

  // single provider reviews based on their id
  const [singleProviderReviews, setSingleProviderReviews] = useState([]);
  const [singleProviderReviewsLoading, setSingleProviderReviewsLoading] =
    useState(true);

  const [error, setError] = useState([]);

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

  // fetch reviews when page loads
  useEffect(() => {
    fetchReviews();
  }, []);

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
  };
}
