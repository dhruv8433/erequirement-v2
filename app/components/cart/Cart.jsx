"use client";

import toast from "react-hot-toast";
import { useLocale } from "next-intl";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";

// Components
import { CartStep0, CartStep1, CartStep2, CartStep3 } from "./CartSteps";

// Config & Hooks
import { useCart } from "@/app/hooks/useCart";
import { PaymentHandler } from "./PaymentHandler";
import { useSchedule } from "@/app/hooks/useSchedule";
import { errorMessages, steps } from "@/app/config/config";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/app/reducer/cartReducer";

// Dayjs
import dayjs from "dayjs";
const formatDate = (date) => dayjs(date).format("YYYY-MM-DD");
const formatTime = (time) => time;

const Cart = ({ user, setAddressModal }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedDateTimeSlot, setSelectedDateTimeSlot] = useState({
    time: null,
    date: null,
  });
  const {locale}=useParams()
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");

  const {
    cartData = [], // Fallback to empty array
    otherInfo,
    handleRemove,
    handleUpdateQuantity,
    loadingServiceId,
  } = useCart(user?._id);

  const cartState = useSelector((state) => state?.cart?.cart || {});
  const cartItems = Array.isArray(cartState?.items) ? cartState.items : [];
  const cartId = cartItems?.[0]?._id || null;
  const refreshCartId = cartState?._id || 0;

  const { createSchedule, schedule } = useSchedule(cartId);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (schedule) {
      setSelectedDateTimeSlot({
        time: formatTime(schedule.time),
        date: formatDate(schedule.date),
      });
    }
  }, [schedule]);

  const handleNext = async () => {
    if (
      activeStep === 0 &&
      (!Array.isArray(cartData) || cartData.length === 0)
    ) {
      toast.error(errorMessages.CartAdd);
      return;
    }

    if (
      activeStep === 1 &&
      (!selectedDateTimeSlot.date || !selectedDateTimeSlot.time)
    ) {
      toast.error(errorMessages.selectDateTime);
      return;
    }

    if (activeStep === 1) {
      try {
        await createSchedule(selectedDateTimeSlot);
      } catch (error) {
        console.error("Error creating schedule:", error);
        toast.error(errorMessages.scheduleFailed);
        return;
      }
    }

    if (activeStep === 2 && selectedAddress === "") {
      toast.error(errorMessages.addAddress);
      return;
    }

    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handlePaymentChange = (event) =>
    setSelectedPaymentMethod(event.target.value);

  const handlePayment = async () => {
    try {
      if (selectedPaymentMethod === "paypal") {
        await PaymentHandler("Paypal", otherInfo);
      } else if (selectedPaymentMethod === "stripe") {
        await PaymentHandler("Stripe", {
          userId: user?._id,
          cartId: refreshCartId,
          locale: locale, 
        });
        
      } else if (selectedPaymentMethod === "cod") {
        await PaymentHandler("cod", otherInfo, user?._id);
      } else {
        toast.error("Invalid payment method");
        return;
      }

      dispatch(clearCart());
      router.push(`/${locale}/payment-success`);
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed. Please try again.");
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
          <CartStep0
            cartData={Array.isArray(cartData) ? cartData : []}
            onRemove={handleRemove}
            onUpdateQuantity={handleUpdateQuantity}
            totalPrice={otherInfo?.totalPrice}
            discountPromo={otherInfo?.discountPrice}
            loading={loadingServiceId}
          />
        )}

        {/* Step 1: DateTime Selection */}
        {activeStep === 1 && (
          <CartStep1
            selectedDateTimeSlot={selectedDateTimeSlot}
            setSelectedDateTimeSlot={setSelectedDateTimeSlot}
            cartItem={cartData?.[0]?.product}
            schedule={schedule}
          />
        )}

        {/* Step 2: Address Selection */}
        {activeStep === 2 && (
          <CartStep2
            user={user}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            setAddressModal={setAddressModal}
            selectedDateTimeSlot={selectedDateTimeSlot}
          />
        )}

        {/* Step 3: Payment */}
        {activeStep === 3 && (
          <CartStep3
            selectedDateTimeSlot={selectedDateTimeSlot}
            selectedPaymentMethod={selectedPaymentMethod}
            handlePaymentChange={handlePaymentChange}
          />
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
