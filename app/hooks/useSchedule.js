import { useEffect, useState } from "react";
import { CreateSchedule, getSchedule } from "@/app/utils/ScheduleService";
import toast from "react-hot-toast";

export const useSchedule = (cartId, activeStep) => {
  if (!cartId) {
    return {
      schedule: null,
      loading: false,
      error: null,
      createSchedule: () => {},
      fetchSchedule: () => {},
    };
  }

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
        toast.error("No Schedule Found" || "Failed to create schedule.");
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
      console.log("scheduleresposne", response);
      if (response.success) {
        setSchedule(response.data);
      } else {
        toast.error(response.errors);
      }
    } catch (err) {
      setError("schedule error", err.message);
      toast.error("No Schedule Found" || "Failed to fetch schedule.");
    } finally {
      setLoading(false);
    }
  };

  // TODO - create delete schdule when user cancle order we call that
  useEffect(() => {
    if (activeStep === 1) {
      fetchSchedule();
    }
  }, [activeStep]);

  return {
    schedule,
    loading,
    error,
    createSchedule,
    fetchSchedule,
  };
};
