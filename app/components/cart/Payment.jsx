import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { MyCardBox } from "@/app/custom/MyBox";
import { MyPrimaryText } from "@/app/custom/MyText";

const Payment = ({ selectedPaymentMethod, handlePaymentChange }) => {
  const t = useTranslations("cart");
  return (
    <MyCardBox className="p-6 rounded-xl space-y-4 min-w-max">
      <MyPrimaryText title={t("select_payment")} />
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
