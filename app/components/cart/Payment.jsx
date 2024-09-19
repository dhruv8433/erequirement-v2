import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { MyPrimaryText } from "@/app/custom/MyText";
import { MyCardBox } from "@/app/custom/MyBox";

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");

  const handlePaymentChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handlePayment = () => {
    if (selectedPaymentMethod === "paypal") {
      console.log("Paying with PayPal");
    } else if (selectedPaymentMethod === "stripe") {
      console.log("Paying with Stripe");
    } else if (selectedPaymentMethod === "cod") {
      console.log("Cash on Delivery");
    }
  };

  return (
    <MyCardBox className="p-6 rounded-xl space-y-4 min-w-max">
      <MyPrimaryText title={"Select Payment Method : "} />
      <FormControl component="fieldset" className="w-full flex flex-col">
        <RadioGroup
          aria-label="payment-method"
          name="payment-method"
          value={selectedPaymentMethod}
          onChange={handlePaymentChange}
          className="space-y-4 flex flex-col"
        >
          <FormControlLabel
            value="paypal"
            control={<Radio />}
            label="PayPal"
            className="flex items-center text-lg"
          />
          <FormControlLabel
            value="stripe"
            control={<Radio />}
            label="Stripe"
            className="flex items-center text-lg"
          />
          <FormControlLabel
            value="cod"
            control={<Radio />}
            label="Cash on Delivery (COD)"
            className="flex items-center text-lg"
          />
        </RadioGroup>
      </FormControl>
    </MyCardBox>
  );
};

export default Payment;
