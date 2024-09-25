/**
 * notificcation hook
 * @param {string} userId for getting notifications
 */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserNotifications } from "../utils/NotificationService";

export const useNotifications = () => {
  // getting userId from redux store
  const userId = useSelector((state) => state.auth.user.user._id);

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch notifications
  const fetchNotifications = async () => {
    try {
      const response = await getUserNotifications(userId);
      setNotifications(response.data.messages);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // fetch user notification when we load
  useEffect(() => {
    fetchNotifications();
  }, [userId]);

  return { notifications, loading };
};
