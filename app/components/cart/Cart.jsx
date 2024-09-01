import React, { useState } from "react";
import CartTable from "./CartTable";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { MyCardBox, MyPrimaryBox, MySecondaryBox } from "@/app/custom/MyBox";

const steps = ["Review Cart", "Enter Address", "Payment"];

const Cart = ({
  cartData,
  onRemove,
  onIncrement,
  onDecrement,
  otherCartInfo,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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

      <MyCardBox className="rounded-2xl">
        {activeStep === 0 && (
          <CartTable
            cartData={cartData}
            onRemove={onRemove}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            totalPrice={otherCartInfo.totalPrice}
          />
        )}
        {activeStep === 1 && (
          <div>
            {/* Step 2: Address Form */}
            <h1>Address Form Goes Here</h1>
          </div>
        )}
        {activeStep === 2 && (
          <div>
            {/* Step 3: Payment */}
            <h1>Payment Form Goes Here</h1>
          </div>
        )}
      </MyCardBox>

      <div className="flex flex-col justify-end text-end my-4">
        {activeStep === steps.length ? (
          <div>
            <Typography>Order Placed Success</Typography>
          </div>
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
