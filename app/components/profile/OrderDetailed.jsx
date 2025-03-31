import { useOrders } from "@/app/hooks/useOrders";
import React from "react";
import { useSelector } from "react-redux";
import { OrderTable } from "./OrderCard";
import { MyCardBox } from "@/app/custom/MyBox";
import dayjs from "dayjs";
import { MyPrimaryText } from "@/app/custom/MyText";
import { Divider, Rating } from "@mui/material";
import Link from "next/link";
import { useLocale } from "next-intl";
import { downloadInvoice } from "@/app/utils/downloadInvoice";
import slugify from "slugify";

const OrderDetailed = ({ orderId }) => {
  const userId = useSelector((state) => state.auth.user.user._id);

  const { singleOrder, singleOrderLoading } = useOrders(
    userId,
    null,
    null,
    orderId
  );

  const locale = useLocale();
  console.log("order", singleOrder);

  return (
    <div>
      {singleOrderLoading ? (
        <>loading</>
      ) : (
        <MyCardBox>
          <div className="flex flex-end flex-col text-end">
            <h1>Date : {dayjs(singleOrder.createdAt).format("DD-MM-YYYY")}</h1>
          </div>
          <div className="flex flex-end flex-col text-end">
            <h1>Status : {singleOrder.orderStatus}</h1>
          </div>
          <OrderTable order={singleOrder} />
          <div className="flex justify-between">
            <h1>Order Id: {orderId}</h1>
            <button
              onClick={() => {
                downloadInvoice(singleOrder);
              }}
            >
              Download Invoice
            </button>
          </div>

          <div className="my-5">
            <h1>
              Want to add reviews about{" "}
              <span className="primary-text font-semibold">
                {singleOrder.service[0].product.ProviderName}
              </span>
            </h1>
            {/* http://localhost:3000/en/providers/${providerId}/${providerSlug}/reviews */}
            <Link href={`/${locale}/providers/${singleOrder?.service[0]?.product?.ProviderId}/${slugify(singleOrder?.service[0]?.product?.ProviderName).toLowerCase()}/reviews`}>
              <MyPrimaryText
                title={`Add your review`}
                className={"hover:underline hover:cursor-pointer"}
              />
            </Link>
          </div>
        </MyCardBox>
      )}
    </div>
  );
};

export default OrderDetailed;
