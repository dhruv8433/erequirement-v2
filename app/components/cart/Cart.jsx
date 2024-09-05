import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { useCart } from "@/app/hooks/useCart";
import MiniCartLayout from "./MiniCartLayout";
import DateTimeSelector from "./DateTimeSelector";
import Address from "./Address";
import CartTable from "./CartTable";
import { steps } from "@/app/config/config";
import { useSchedule } from "@/app/hooks/useSchedule"; // Custom hook

const Cart = ({ user, setAddressModal }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedDateTimeSlot, setSelectedDateTimeSlot] = useState({
    time: null,
    date: null,
  });

  // Utilize custom hooks for cart and schedules
  const { cartData, otherInfo, handleRemove, handleUpdateQuantity } = useCart(
    user?._id
  );

  const cartId = cartData[0]._id; // Assuming the cart item has the cart ID

  const { createSchedule, updateScheduleData, schedule } = useSchedule(cartId); // Access the custom hook for schedule

  const handleNext = async () => {
    // Validation for step 1 (date & time selection)
    if (
      activeStep === 1 &&
      (!selectedDateTimeSlot.date || !selectedDateTimeSlot.time)
    ) {
      toast.error("Please select date and time before proceeding.");
      return;
    }

    // Call create schedule when the user completes step 1
    if (activeStep === 1) {
      try {
        await createSchedule(selectedDateTimeSlot);
      } catch (error) {
        console.error("Error creating schedule:", error);
        return; // Stop proceeding if schedule creation fails
      }
    }

    // Validation for step 2 (address selection)
    if (activeStep === 2 && !selectedAddress) {
      toast.error("Please select or add a new address before payment.");
      return;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="rounded-2xl my-10">
        {activeStep === 0 && (
          <CartTable
            cartData={cartData}
            onRemove={handleRemove}
            onIncrement={handleUpdateQuantity}
            onDecrement={handleUpdateQuantity}
            totalPrice={otherInfo?.totalPrice}
          />
        )}

        {activeStep === 1 && (
          <MiniCartLayout selectedDateTimeSlot={selectedDateTimeSlot}>
            <DateTimeSelector
              cartItem={cartData[0].product}
              selectedDateTimeSlot={selectedDateTimeSlot}
              setSelectedDateTimeSlot={setSelectedDateTimeSlot}
            />
          </MiniCartLayout>
        )}

        {activeStep === 2 && (
          <MiniCartLayout
            user={user}
            selectedDateTimeSlot={selectedDateTimeSlot}
          >
            <Address
              user={user}
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
              setAddressModal={setAddressModal}
            />
          </MiniCartLayout>
        )}

        {activeStep === 3 && (
          <div>
            <h1>Payment Form Goes Here</h1>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-end text-end my-4">
        {activeStep === steps.length ? (
          <Typography>Order Placed Successfully</Typography>
        ) : (
          <div>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
