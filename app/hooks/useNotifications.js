import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserNotifications } from "../utils/NotificationService";

/**
 * Notification hook
 * @param {string} userId for getting notifications
 */
export const useNotifications = () => {
  // Getting userId from redux store
  const userId = useSelector((state) => state.auth.user.user._id);

  const [notifications, setNotifications] = useState({
    messages: [],
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Default to the first page
  const limit = 10; // Define the limit for notifications per page

  // Fetch notifications
  const fetchNotifications = async (page) => {
    try {
      setLoading(true);
      const response = await getUserNotifications(userId, page, limit);
      setNotifications(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user notifications when userId or page changes
  useEffect(() => {
    if (userId) {
      fetchNotifications(page);
    }
  }, [userId, page]); // Run effect when userId or page changes

  // Return notifications, loading state, and a function to update the page
  return {
    notifications,
    loading,
    setPage,
  };
};
