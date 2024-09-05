import { MyCardBox } from "@/app/custom/MyBox";
import { MyHeading } from "@/app/custom/MyText";
import { useProviders } from "@/app/hooks/useProviders";
import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { Grid } from "@mui/material";
import dayjs from "dayjs";

const DateTimeSelector = ({
  cartItem,
  selectedDateTimeSlot,
  setSelectedDateTimeSlot,
}) => {
  const { fetchSingleProvider, singleProvider } = useProviders(
    cartItem.ProviderId
  );

  useEffect(() => {
    fetchSingleProvider();
  }, []);

  // Function to disable dates outside the `advance_booking_days` and dates before today
  const shouldDisableDate = (date) => {
    const today = dayjs(); // Get today's date

    // Disable past dates (before today)
    if (date.isBefore(today, "day")) {
      return true;
    }

    // Disable dates after the `advance_booking_days`
    if (singleProvider && singleProvider.advance_booking_days) {
      const advanceLimit = today.add(
        singleProvider.advance_booking_days,
        "day"
      ); // Calculate max available date
      return date.isAfter(advanceLimit, "day");
    }

    return false;
  };

  // Handle date change
  const handleDateChange = (date) => {
    const formattedDate = date.format("YYYY-MM-DD"); // Format the selected date
    setSelectedDateTimeSlot((prev) => ({ ...prev, date: formattedDate }));
  };

  // Handle time slot selection
  const handleTimeSlotChange = (event) => {
    setSelectedDateTimeSlot((prev) => ({ ...prev, time: event.target.value }));
  };

  return (
    <MyCardBox className="p-4 rounded-2xl overflow-hidden">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <MyHeading title={"Available Dates"} className={"font-semibold"} />
          <div className="calendar my-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                className="custom-calendar"
                shouldDisableDate={shouldDisableDate}
                onChange={handleDateChange}
                value={selectedDateTimeSlot?.date ? dayjs(selectedDateTimeSlot.date) : null} // Set selected date if available
              />
            </LocalizationProvider>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <MyHeading
            title={"Available Time slots"}
            className={"font-semibold"}
          />
          <div className="flex my-8 flex-col">
            <RadioGroup
              className="space-y-5"
              value={selectedDateTimeSlot?.time || ""}
              onChange={handleTimeSlotChange}
            >
              {singleProvider?.time_slots?.map((timeSlot, index) => (
                <FormControlLabel
                  key={index}
                  value={timeSlot}
                  control={<Radio />}
                  label={
                    <span className="text-lg font-medium">{timeSlot}</span>
                  }
                  className="border border-gray-200 p-2 rounded-lg shadow-sm transition duration-200 max-w-full w-full"
                />
              ))}
            </RadioGroup>
          </div>
        </Grid>
      </Grid>
    </MyCardBox>
  );
};

export default DateTimeSelector;
