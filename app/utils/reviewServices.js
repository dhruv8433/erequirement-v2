import { httpAxios } from "../httpAxios";

async function getProvidersReviews() {
  const response = await httpAxios.get("/review/provider");
  return response.data;
}

async function getParticularProviderReviews(id, offset, limit) {
  const response = await httpAxios.get(
    `/review/provider/${id}?offset=${offset - 1}&limit=${limit}`
  );
  return response.data;
}

async function getParticularUserReviews(userId, offset, limit) {
  const response = await httpAxios.get(
    `/review/user/${userId}?offset=${offset - 1}&limit=${limit}`
  );
  return response.data;
}

async function getParticularServiceReviews(serviceId, offset, limit) {
  const response = await httpAxios.get(
    `/review/service/${serviceId}?offset=${offset - 1}&limit=${limit}`
  );
  return response.data;
}

async function addProviderReview(providerId, userId, reviewData) {
  // Create FormData object to handle multipart form submission
  const formData = new FormData();

  // Append data to FormData
  formData.append("id", providerId);
  formData.append("userId", userId);
  formData.append("rating", reviewData.rating);
  formData.append("review", reviewData.review);

  // Check if an image was selected and append the file
  if (reviewData.selectedImage) {
    formData.append("media", reviewData.selectedImage);
  }

  try {
    // Send POST request with FormData
    const response = await httpAxios.post(`/review/provider`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set the correct content type
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error submitting review:", error);
    throw error; // Optionally throw the error to handle it later
  }
}

async function addServiceReview(serviceId, userId, reviewData) {
  // Create FormData object to handle multipart form submission
  const formData = new FormData();

  // Append data to FormData
  formData.append("id", serviceId);
  formData.append("userId", userId);
  formData.append("rating", reviewData.rating);
  formData.append("review", reviewData.review);

  // Check if an image was selected and append the file
  if (reviewData.selectedImage) {
    formData.append("media", reviewData.selectedImage);
  }

  try {
    // Send POST request with FormData
    const response = await httpAxios.post(`/review/service`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set the correct content type
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error submitting review:", error);
    throw error; // Optionally throw the error to handle it later
  }
}

export {
  getProvidersReviews,
  getParticularProviderReviews,
  getParticularUserReviews,
  getParticularServiceReviews,
  addProviderReview,
  addServiceReview,
};
