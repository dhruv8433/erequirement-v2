import { useState } from "react";
import {
  CreateSchedule,
  getSchedule,
} from "@/app/utils/ScheduleService";
import toast from "react-hot-toast";

export const useSchedule = (cartId) => {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Create a new schedule
  const createSchedule = async (scheduleData) => {
    try {
      setLoading(true);
      const response = await CreateSchedule(scheduleData, cartId);

      if (response.success) {
        setSchedule(response.data);
        toast.success(response.message);
      } else {
        toast.error(response.message || "Failed to create schedule.");
      }
    } catch (err) {
      setError(err.message);
      toast.error("An error occurred while creating the schedule.");
    } finally {
      setLoading(false);
    }
  };

  // Get the existing schedule
  const fetchSchedule = async () => {
    try {
      setLoading(true);
      const response = await getSchedule(cartId);
      setSchedule(response);
    } catch (err) {
      setError(err.message);
      toast.error("Failed to fetch schedule.");
    } finally {
      setLoading(false);
    }
  };

  // TODO - create delete schdule when user cancle order we call that

  return {
    schedule,
    loading,
    error,
    createSchedule,
    fetchSchedule,
  };
};
