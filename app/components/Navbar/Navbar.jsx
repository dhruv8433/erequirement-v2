import React from "react";
import { useLocale } from "next-intl";
import MyContainer from "@/app/common/MyContainer";
import LaptopNav from "./LaptopNav";
import { Box } from "@mui/material";
import ResponsiveNav from "./ResponsiveNav";

const Navbar = () => {
  const locale = useLocale();
  return (
    <div>
      <div className="nav bg-white py-6">
        <MyContainer maxWidth="xl">
          {/* Only visible in large screens */}
          <Box display={{ xs: "none", md: "block" }}>
            <LaptopNav locale={locale} />
          </Box>
          {/* Only visible in responsive screen */}
          <Box display={{ xs: "flex", md: "none" }}>
            <ResponsiveNav locale={locale} />
          </Box>
        </MyContainer>
      </div>
    </div>
  );
};

export default Navbar;
