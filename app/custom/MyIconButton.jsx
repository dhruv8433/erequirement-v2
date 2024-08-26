import { IconButton } from "@mui/material";
import React from "react";

const MyIconButton = ({ className, children, onClick }) => {
  return (
    <IconButton onClick={onClick ? onClick : null} className={`${className}`}>
      {children}
    </IconButton>
  );
};

export default MyIconButton;
