import { Box } from "@mui/material";
import React from "react";

const Advertisement = ({ ads }) => {
  return (
    <Box height={{ xs: "230px", md: "500px" }}>
      <img
        src={ads.image}
        height={"100%"}
        className="object-cover aspect-video h-full w-full "
        width={"100%"}
        alt=""
      />
      ;
    </Box>
  );
};

export default Advertisement;
