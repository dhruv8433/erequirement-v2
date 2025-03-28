import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const Advertisement = ({ ads }) => {
  return (
    <Box height={{ xs: "230px", md: "500px" }}>
      <Link href={ads.href}>
        <img
          src={ads.slider_image}
          height={"100%"}
          className="object-fill aspect-video h-full w-full "
          width={"100%"}
          alt=""
          loading="lazy"
        />
      </Link>
    </Box>
  );
};

export default Advertisement;
