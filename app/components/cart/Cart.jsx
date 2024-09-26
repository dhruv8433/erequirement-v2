import Address from "./Address";
import Payment from "./Payment";
import toast from "react-hot-toast";
import CartTable from "./CartTable";
import React, { useState, useEffect } from "react";
import { errorMessages, steps } from "@/app/config/config";
import { useCart } from "@/app/hooks/useCart";
import MiniCartLayout from "./MiniCartLayout";
import DateTimeSelector from "./DateTimeSelector";
import { useSchedule } from "@/app/hooks/useSchedule"; // Custom hook
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
import dayjs from "dayjs"; // Importing dayjs for date/time formatting
import { PaymentHandler } from "./PaymentHandler";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearCart } from "@/app/reducer/cartReducer";

// Helper function for formatting dates and times using dayjs
const formatDate = (date) => dayjs(date).format("YYYY-MM-DD"); // Format as needed
const formatTime = (time) => time; // Keep time as is or adjust formatting if necessary

const Cart = ({ user, setAddressModal }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedDateTimeSlot, setSelectedDateTimeSlot] = useState({
    time: null,
    date: null,
  });

  // Fetch cart data and schedule
  const { cartData, otherInfo, handleRemove, handleUpdateQuantity } = useCart(
    user?._id
  );
  const cartId = cartData && cartData[0]?._id; // Assuming the cart item has the cart ID
  const { createSchedule, schedule } = useSchedule(cartId);

  // Initialize selected date and time if a schedule already exists
  useEffect(() => {
    if (schedule) {
      setSelectedDateTimeSlot({
        time: formatTime(schedule.time),
        date: formatDate(schedule.date),
      });
    }
  }, [schedule]);

  const handleNext = async () => {
    // Step 0 validation: Check if cart is empty
    if (activeStep === 0 && (!cartData || cartData.length === 0)) {
      toast.error(errorMessages.CartAdd);
      return;
    }

    // Step 1 validation: Ensure date & time are selected
    if (
      activeStep === 1 &&
      (!selectedDateTimeSlot.date || !selectedDateTimeSlot.time)
    ) {
      toast.error(errorMessages.selectDateTime);
      return;
    }

    // Create a schedule when completing Step 1
    if (activeStep === 1) {
      try {
        await createSchedule(selectedDateTimeSlot);
      } catch (error) {
        console.error("Error creating schedule:", error);
        toast.error(errorMessages.scheduleFailed);
        return;
      }
    }

    // Step 2 validation: Ensure an address is selected
    if (activeStep === 2 && selectedAddress === "") {
      toast.error(errorMessages.addAddress);
      return;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");

  const handlePaymentChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const router = useRouter();
  const dispatch = useDispatch();

  const handlePayment = async () => {
    if (selectedPaymentMethod === "paypal") {
      // send other info because it directly have access of total amount
      const response = await PaymentHandler("Paypal", otherInfo);
    } else if (selectedPaymentMethod === "stripe") {
      const response = await PaymentHandler("Stripe", cartData);
    } else if (selectedPaymentMethod === "cod") {
      const response = await PaymentHandler("cod", otherInfo, user?._id);
      // remove from redux
      dispatch(clearCart());
      // after place order go back to home
      router.push("/");
    }
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="rounded-2xl my-10">
        {/* Step 0: Cart Table */}
        {activeStep === 0 && (
          <CartTable
            cartData={cartData}
            onRemove={handleRemove}
            onIncrement={handleUpdateQuantity}
            onDecrement={handleUpdateQuantity}
            totalPrice={otherInfo?.totalPrice}
          />
        )}

        {/* Step 1: Date and Time Selector */}
        {activeStep === 1 && (
          <MiniCartLayout selectedDateTimeSlot={selectedDateTimeSlot}>
            <DateTimeSelector
              cartItem={cartData[0].product}
              selectedDateTimeSlot={selectedDateTimeSlot}
              setSelectedDateTimeSlot={setSelectedDateTimeSlot}
            />
          </MiniCartLayout>
        )}

        {/* Step 2: Address Selection */}
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

        {/* Step 3: Payment */}
        {activeStep === 3 && (
          <MiniCartLayout selectedDateTimeSlot={selectedDateTimeSlot}>
            <Payment
              handlePaymentChange={handlePaymentChange}
              selectedPaymentMethod={selectedPaymentMethod}
            />
          </MiniCartLayout>
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
            <Button
              variant="contained"
              onClick={
                activeStep === steps.length - 1 ? handlePayment : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Place Order" : "Next"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
