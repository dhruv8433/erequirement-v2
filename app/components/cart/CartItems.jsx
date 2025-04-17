import React from "react";
import { TableBody, TableCell, TableRow, IconButton } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { ClipLoader } from "react-spinners";

const CartItem = ({
  service,
  onRemove,
  onIncrement,
  onDecrement,
  qty,
  isMiniCart,
  loading,
}) => {
  return (
    <TableBody>
      <TableRow>
        {/* Service Image */}
        <TableCell>
          <img
            src={service.serviceImg}
            alt={service.ServiceName}
            className={`${
              isMiniCart
                ? "max-h-[50px] max-w-[50px]"
                : "max-h-[100px] max-w-[100px]"
            } w-full h-full object-cover rounded-lg`}
          />
        </TableCell>

        {/* Service Details */}
        <TableCell>
          <h1
            className={`${isMiniCart ? "text-xl" : "text-2xl"} font-semibold`}
          >
            {service.ServiceName}
          </h1>
          <h1 className={`${isMiniCart ? "" : "text-xl"}`}>
            {service.ShortDesc}
          </h1>
        </TableCell>

        {/* Quantity Controls */}
        {!isMiniCart && (
          <TableCell>
            <div className="flex items-center border w-max rounded-md overflow-hidden">
              <div className="primary-bg hover:bg-orange-500">
                <IconButton
                  onClick={() => onDecrement(service._id, qty - 1)}
                  disabled={loading === service._id}
                >
                  {" "}
                  <Remove fontSize="small" />
                </IconButton>
              </div>

              <h1 className="mx-3">
                {" "}
                {loading === service._id ? (
                  <ClipLoader size={16} color="primary" />
                ) : (
                  qty
                )}
              </h1>

              <div className="primary-bg hover:bg-orange-500">
                <IconButton
                  onClick={() => onIncrement(service._id, qty + 1)}
                  disabled={loading === service._id}
                >
                  <Add fontSize="small" />
                </IconButton>
              </div>
            </div>
          </TableCell>
        )}

        {/* Price */}
        <TableCell align="right">
          <h1>${service.DiscountedPrice}</h1>
        </TableCell>

        {/* Actions */}
        {!isMiniCart && (
          <TableCell align="right">
            <IconButton onClick={() => onRemove(service._id)}>
              <Delete className="text-red-500" />
            </IconButton>
          </TableCell>
        )}
      </TableRow>
    </TableBody>
  );
};

export default CartItem;
