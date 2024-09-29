import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { MyCardBox } from "@/app/custom/MyBox";
import { MyPrimaryText } from "@/app/custom/MyText";
import { MyColoredInput } from "@/app/custom/MyInput";
import { MyPrimaryButton } from "@/app/custom/MyButton";
import { usePromocode } from "@/app/hooks/usePromocode";

const Payment = ({ selectedPaymentMethod, handlePaymentChange }) => {
  const t = useTranslations("cart");

  const [promocode, setPromocode] = useState("");
  const { CheckPromocode } = usePromocode(promocode);

  const handlePromocode = () => {
    // after valiating promocode, reload cart
    CheckPromocode();
  };

  return (
    <MyCardBox className="p-6 rounded-xl space-y-4 min-w-max" data-aos="fade-up">
      <MyPrimaryText title={t("select_payment")} />
      <FormControl component="fieldset" className="w-full flex flex-col" data-aos="fade-up">
        <RadioGroup
          aria-label="payment-method"
          name="payment-method"
          value={selectedPaymentMethod}
          onChange={handlePaymentChange}
          className="space-y-4 flex flex-col"
          data-aos="fade-up"
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

      {/* take promocode for extra disocunt */}
      <MyPrimaryText title={t("promocode")} />
      <div className="flex gap-2" data-aos="fade-up">
        <MyColoredInput
          inputClass={"p-1 rounded-md border"}
          placeholder={t("enter_promo")}
          className={"w-[40%]"}
          value={promocode}
          onChange={(e) => setPromocode(e.target.value)}
        />
        {/* validation promocode when user click on apply button */}
        <MyPrimaryButton
          title={t("apply")}
          className={"p-1 rounded-md"}
          onClickFunction={handlePromocode}
        />
      </div>
    </MyCardBox>
  );
};

export default Payment;
