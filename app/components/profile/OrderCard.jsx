import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import dayjs from "dayjs";
import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div>
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
      <OrderTable order={order} />

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
  );
};

// make reusable order card for order Detailed page
export const OrderTable = ({ order }) => {
  return (
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
              <TableCell align="left">{item.product.ServiceName}</TableCell>
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
  );
};

export default OrderCard;
