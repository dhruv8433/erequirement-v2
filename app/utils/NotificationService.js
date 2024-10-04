import { httpAxios } from "../httpAxios";

// get user notification based on their id

// we are doing page - 1 becuase of offset is start from 0
async function getUserNotifications(userId, page = 1, limit = 10) {
  const response = await httpAxios.get(`/profile/notification/${userId}`, {
    params: { offset: page - 1, limit },
  });

  return response.data;
}

// remove specific notification based on user id and notification id
async function removeSpecificNotification(userId, notificationId) {
  const response = await httpAxios.delete(
    `/profile/notification/${userId}/${notificationId}`
  );

  return response.data;
}

// remove all notification based on user id
async function removeAllNotifications(userId) {
  const response = await httpAxios.delete(`/profile/notification/${userId}`);

  return response.data;
}

export {
  getUserNotifications,
  removeAllNotifications,
  removeSpecificNotification,
};
