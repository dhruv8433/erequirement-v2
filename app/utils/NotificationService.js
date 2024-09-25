import { httpAxios } from "../httpAxios";

// get user notification based on their id
async function getUserNotifications(userId) {
  const response = await httpAxios.get(`/profile/notification/${userId}`);

  return response.data;
}

export { getUserNotifications };
