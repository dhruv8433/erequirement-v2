import { Skeleton } from "@mui/material";
import React from "react";

const MySkeleton = ({ variant, height, width, className }) => {
  return (
    <Skeleton
      className={className}
      variant={variant}
      height={height}
      width={width}
    />
  );
};

export default MySkeleton;
