"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import MyContainer from "@/app/common/MyContainer";
import LaptopNav from "./LaptopNav";
import { Box, Drawer } from "@mui/material";
import ResponsiveNav from "./ResponsiveNav";
import SettingDrawer from "@/app/drawer/SettingDrawer";
import { MySecondaryBox } from "@/app/common/MyBox";

const Navbar = () => {
  const locale = useLocale();
  const [settingOpen, setSettingOpen] = useState(false);
  return (
    <div>
      <MySecondaryBox className="nav py-6">
        <MyContainer maxWidth="xl">
          {/* Only visible in large screens */}
          <Box display={{ xs: "none", md: "block" }}>
            <LaptopNav locale={locale} setSettingOpen={setSettingOpen} />
          </Box>
          {/* Only visible in responsive screen */}
          <Box display={{ xs: "flex", md: "none" }}>
            <ResponsiveNav locale={locale} setSettingOpen={setSettingOpen} />
          </Box>
        </MyContainer>
        <Drawer anchor="right" open={settingOpen} onClose={() => setSettingOpen(false)}>
          <Box width={350}>
            <SettingDrawer />
          </Box>
        </Drawer>
      </MySecondaryBox>
    </div>
  );
};

export default Navbar;
