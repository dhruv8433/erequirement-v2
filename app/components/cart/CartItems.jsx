import React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  IconButton,
  Typography,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";

const CartItem = ({ service, onRemove, onIncrement, onDecrement, qty }) => {
  return (
    <TableBody>
      <TableRow>
        {/* Service Image */}
        <TableCell>
          <img
            src={service.serviceImg}
            alt={service.ServiceName}
            className="max-h-[100px] max-w-[100px] w-full h-full object-cover rounded-lg"
          />
        </TableCell>

        {/* Service Details */}
        <TableCell>
          <h1 className="text-2xl font-semibold">{service.ServiceName}</h1>
          <h1 className="text-xl">{service.ShortDesc}</h1>
        </TableCell>

        {/* Quantity Controls */}
        <TableCell>
          <div className="flex items-center border w-max rounded-md overflow-hidden">
            <div className="primary-bg hover:bg-orange-500">
              <IconButton onClick={() => onDecrement(service._id, qty - 1)}>
                <Remove fontSize="small" />
              </IconButton>
            </div>
            <Typography variant="body1" style={{ margin: "0 10px" }}>
              {qty}
            </Typography>
            <div className="primary-bg hover:bg-orange-500">
              <IconButton onClick={() => onIncrement(service._id, qty + 1)}>
                <Add fontSize="small" />
              </IconButton>
            </div>
          </div>
        </TableCell>

        {/* Price */}
        <TableCell align="right">
          <Typography variant="h6">${service.DiscountedPrice}</Typography>
        </TableCell>

        {/* Actions */}
        <TableCell align="right">
          <IconButton onClick={() => onRemove(service._id)}>
            <Delete className="text-red-500" />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default CartItem;
