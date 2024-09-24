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
  Paper,
} from "@mui/material";
import { MyCardBox } from "@/app/custom/MyBox";

const Orders = ({ userId }) => {
  const t = useTranslations("profile");
  const { userOrders, userOrdersLoading } = useOrders(userId);

  return (
    <MyCardBox className="border p-5 rounded-2xl">
      {/* heading */}
      <ProfileHeading heading={t("orders")} />

      {/* orders */}
      {userOrdersLoading ? (
        <h1>loading...</h1>
      ) : (
        userOrders.map((order) => (
          <div key={order._id} className="border rounded-2xl my-3 p-4">
            {/* Order Details */}
            <div className="flex justify-between items-center mb-4">
              <h1>
                <strong>Order Date:</strong>{" "}
                {dayjs(order.createdAt).format("DD-MM-YYYY")}
              </h1>
              <h1
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
              <Table>
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
              <h1 className="text-gray-500">
                <strong>Order ID:</strong> {order._id}
              </h1>
              <h1>
                <strong>Total Price:</strong> ${order.totalPrice}
              </h1>
            </div>
          </div>
        ))
      )}
    </MyCardBox>
  );
};

export default Orders;
