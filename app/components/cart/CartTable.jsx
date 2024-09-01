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

const CartTable = ({
  cartData,
  onRemove,
  onIncrement,
  onDecrement,
  totalPrice
}) => {
  return (
    <div>
      {cartData.length > 0 ? (
        <div className="border  p-3 my-5 rounded-2xl border-dashed">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Service Image</TableCell>
                  <TableCell>Service Details</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Actions</TableCell>
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
                />
              ))}
            </Table>
          </TableContainer>
          <Divider />
          <div className="flex my-4 flex-col justify-end text-end">
            <h1>
              SubTotal: <span>${totalPrice ? totalPrice : 0}</span>
            </h1>
            <h1>Tax: $0</h1>
            <h1 className="text-xl">
              Total: <span className="primary-text font-semibold">${totalPrice ? totalPrice : 0}</span>
            </h1>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-2xl">No items in cart</h1>
      )}
    </div>
  );
};

export default CartTable;
