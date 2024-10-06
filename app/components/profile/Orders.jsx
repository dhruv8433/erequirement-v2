import React from "react";
import { useLocale, useTranslations } from "next-intl";
import ProfileHeading from "./ProfileHeading";
import { useOrders } from "@/app/hooks/useOrders";
import { Pagination } from "@mui/material";
import { MyCardBox, MyPrimaryBox } from "@/app/custom/MyBox";
import NoOrders from "@/app/assets/orders.png";
import OrderCard from "./OrderCard";
import Link from "next/link";
import { OrderCardSkeleton } from "@/app/custom/CustomSkeleton";

const Orders = ({ userId }) => {
  const t = useTranslations("profile");
  const { userOrders, userOrdersLoading, setPage } = useOrders(userId);

  console.log("userOrders", useOrders);
  const locale = useLocale();

  return (
    <MyCardBox className="border p-5 rounded-2xl" data-aos="fade-up">
      {/* heading */}
      <ProfileHeading heading={t("orders")} />

      {/* orders */}
      {userOrdersLoading ? (
        Array.from({ length: 2 }).map((_, index) => (
          <OrderCardSkeleton index={index} />
        ))
      ) : userOrders.orders.length > 0 ? (
        <div>
          {userOrders.orders.map((order) => (
            <Link
              key={order._id}
              href={`/${locale}/profile/orders/${order._id}`}
            >
              <MyPrimaryBox
                key={order._id}
                className="border rounded-2xl my-3 p-4"
                data-aos="fade-up"
              >
                <OrderCard order={order} />
              </MyPrimaryBox>
            </Link>
          ))}
          <div className="flex justify-center mt-2">
            <Pagination
              count={userOrders.totalPages} // Use totalPages from the userOrders state
              color="primary"
              onChange={(event, value) => setPage(value)} // Update the page on pagination change
              page={userOrders.currentPage} // Set the current active page
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[600px]">
          <img
            data-aos="fade-up"
            src={NoOrders.src}
            className="h-48 w-48"
            alt=""
          />
          <h1 data-aos="fade-up">{t("no_orders")}</h1>
        </div>
      )}
    </MyCardBox>
  );
};

export default Orders;
