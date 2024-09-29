import React from "react";
import { useTranslations } from "next-intl";
import ProfileHeading from "./ProfileHeading";
import { useOrders } from "@/app/hooks/useOrders";
import dayjs from "dayjs"; // Import dayjs for date formatting
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { MyCardBox } from "@/app/custom/MyBox";
import NoOrders from "@/app/assets/orders.png";

const Orders = ({ userId }) => {
  const t = useTranslations("profile");
  const { userOrders, userOrdersLoading } = useOrders(userId);

  return (
    <MyCardBox className="border p-5 rounded-2xl" data-aos="fade-up">
      {/* heading */}
      <ProfileHeading heading={t("orders")} />

      {/* orders */}
      {userOrdersLoading ? (
        <h1>loading...</h1>
      ) : userOrders.length > 0 ? (
        userOrders.map((order) => (
          <div key={order._id} className="border rounded-2xl my-3 p-4" data-aos="fade-up">
            {/* Order Details */}
            <div className="flex justify-between items-center mb-4">
              <h1 data-aos="fade-up">
                <strong>Order Date:</strong>{" "}
                {dayjs(order.createdAt).format("DD-MM-YYYY")}
              </h1>
              <h1
              data-aos="fade-up"
                className={`border border-dashed px-2 py-1 rounded-md
                ${
                  order.orderStatus === "pending" &&
                  "border-yellow-200 text-yellow-500"
                }
                ${
                  order.orderStatus === "completed" &&
                  "border-green-200 text-green-500"
                }
                `}
              >
                {order.orderStatus}
              </h1>
            </div>

            {/* Product Table */}
            <TableContainer className="my-5">
              <Table data-aos="fade-up">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      <strong>Product</strong>
                    </TableCell>
                    <TableCell align="right" className="w-[200px]">
                      <strong>Price</strong>
                    </TableCell>
                    <TableCell align="right" className="w-[200px]">
                      <strong>Quantity</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.service.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="left">
                        {item.product.ServiceName}
                      </TableCell>
                      <TableCell align="right" className="w-[200px]">
                        {item.product.DiscountedPrice}
                      </TableCell>
                      <TableCell align="right" className="w-[200px]">
                        {item.quantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Total Price */}
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-gray-500" data-aos="fade-up">
                <strong>Order ID:</strong> {order._id}
              </h1>
              <h1 data-aos="fade-up">
                <strong>Total Price:</strong> ${order.totalPrice}
              </h1>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[600px]">
          <img data-aos="fade-up" src={NoOrders.src} className="h-48 w-48" alt="" />
          <h1 data-aos="fade-up">{t("no_orders")}</h1>
        </div>
      )}
    </MyCardBox>
  );
};

export default Orders;
