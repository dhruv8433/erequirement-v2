import { useState } from "react";
import {
  CreateSchedule,
  getSchedule,
  updateSchedule,
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

  // Update an existing schedule
  const updateScheduleData = async (scheduleData) => {
    try {
      setLoading(true);
      const response = await updateSchedule(scheduleData, cartId);
      setSchedule(response);
      toast.success("Schedule updated successfully!");
    } catch (err) {
      setError(err.message);
      toast.error("Failed to update schedule.");
    } finally {
      setLoading(false);
    }
  };

  return {
    schedule,
    loading,
    error,
    createSchedule,
    fetchSchedule,
    updateScheduleData,
  };
};
