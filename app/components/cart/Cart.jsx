import React, { useState } from "react";
import CartTable from "./CartTable";
import Address from "./Address";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { steps } from "@/app/config/config";
import toast from "react-hot-toast";
import { useCart } from "@/app/hooks/useCart";

const Cart = ({ user, setAddressModal }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleNext = () => {
    if (activeStep === 1 && selectedAddress == "") {
      toast.error("please select address or add new address before payment");
      console.log("Please select address before payment");
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Utilize custom hooks for cart and addresses whihc take user id for check
  const { cartData, otherInfo, handleRemove, handleUpdateQuantity } = useCart(
    user?._id
  );

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
        {/* Step 1: Review Cart */}
        {activeStep === 0 && (
          <CartTable
            cartData={cartData}
            onRemove={handleRemove}
            onIncrement={handleUpdateQuantity}
            onDecrement={handleUpdateQuantity}
            totalPrice={otherInfo?.totalPrice}
          />
        )}
        {/* Step 2: Address Form */}
        {activeStep === 1 && (
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Address
                user={user}
                selectedAddress={selectedAddress}
                setSelectedAddress={setSelectedAddress}
                setAddressModal={setAddressModal}
              />
            </Grid>
            {/* right side we display mini cart */}
            <Grid item xs={12} md={5}>
              <CartTable
                cartData={cartData}
                onRemove={handleRemove}
                onIncrement={handleUpdateQuantity}
                onDecrement={handleUpdateQuantity}
                totalPrice={otherInfo?.totalPrice}
                isMiniCart={true}
              />
            </Grid>
          </Grid>
        )}
        {/* Step 3: Payment */}
        {activeStep === 2 && (
          <div>
            <h1>Payment Form Goes Here</h1>
          </div>
        )}
      </div>

      {/* Action buttons to go to next and prev page of stepper */}
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
