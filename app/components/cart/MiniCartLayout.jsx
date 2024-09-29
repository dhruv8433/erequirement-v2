import React from "react";
import CartTable from "./CartTable";
import { Grid } from "@mui/material";
import { useCart } from "@/app/hooks/useCart";
import MiniCartDateTimeInfo from "./MiniCartDateTimeInfo";
import { useTranslations } from "next-intl";

const MiniCartLayout = ({ children, user, selectedDateTimeSlot }) => {
  const { cartData, otherInfo, handleRemove, handleUpdateQuantity } = useCart(
    user?._id
  );

  const t = useTranslations("cart");

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          {children}
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
            discountPromo={otherInfo?.discountPrice}
          />
          {/* if user select prefferd date and time then we'll render this component */}
          {(selectedDateTimeSlot?.date || selectedDateTimeSlot?.time) && (
            <MiniCartDateTimeInfo selectedDateTimeSlot={selectedDateTimeSlot} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default MiniCartLayout;
