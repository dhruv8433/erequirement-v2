import React from "react";
import CartItem from "./CartItems";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Divider,
} from "@mui/material";
import { MyCardBox } from "@/app/custom/MyBox";
import EmptyCartImg from "@/app/assets/empty-cart.png";
import { MyHeading } from "@/app/custom/MyText";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

// isMiniCart used for display right side cart in other steppers pages
const CartTable = ({
  cartData,
  onRemove,
  onIncrement,
  onDecrement,
  totalPrice,
  isMiniCart,
}) => {
  const locale = useLocale();
  const t = useTranslations("cart");

  return (
    <MyCardBox className="rounded-2xl">
      {cartData && cartData.length > 0 ? (
        <div className="border p-3 rounded-2xl border-dashed">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t("service_img")}</TableCell>
                  <TableCell>{t("service_details")}</TableCell>
                  {!isMiniCart && <TableCell>{t("quantity")}</TableCell>}
                  <TableCell align="right">{t("price")}</TableCell>
                  {!isMiniCart && (
                    <TableCell align="right">{t("action")}</TableCell>
                  )}
                </TableRow>
              </TableHead>
              {cartData.map((item) => (
                <CartItem
                  key={item._id}
                  service={item.product}
                  qty={item.quantity}
                  onRemove={onRemove}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  isMiniCart={isMiniCart}
                />
              ))}
            </Table>
          </TableContainer>
          <Divider />
          <div className="flex my-4 flex-col justify-end text-end">
            <h1>
              {t("subtotal")}: <span>${totalPrice ? totalPrice : 0}</span>
            </h1>
            <h1>{t("tax")}: $0</h1>
            <h1 className="text-xl">
              {t("total")}:{" "}
              <span className="primary-text font-semibold">
                ${totalPrice ? totalPrice : 0}
              </span>
            </h1>
          </div>
        </div>
      ) : (
        <div className="flex w-full items-center flex-col justify-center min-h-[500px]">
          <img src={EmptyCartImg.src} alt="" className="h-40 w-40" />
          <h1 className="text-center text-2xl my-2">{t("no_item")}</h1>
          <h1 className="my-2">{t("no_item_msg")}</h1>
          <Link href={`/${locale}/providers`}>
            <MyHeading title={t("browse")} />
          </Link>
        </div>
      )}
    </MyCardBox>
  );
};

export default CartTable;
