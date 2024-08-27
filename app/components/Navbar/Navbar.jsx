"use client";

import LaptopNav from "./LaptopNav";
import { useLocale } from "next-intl";
import React, { useState } from "react";
import MyModal from "@/app/custom/MyModal";
import { Box, Drawer } from "@mui/material";
import ResponsiveNav from "./ResponsiveNav";
import AuthModal from "@/app/model/AuthModal";
import MyContainer from "@/app/custom/MyContainer";
import SettingDrawer from "@/app/drawer/SettingDrawer";
import { MyCardBox, MySecondaryBox } from "@/app/custom/MyBox";

const Navbar = () => {
  const locale = useLocale();
  const [settingOpen, setSettingOpen] = useState(false);
  const [model, setModel] = useState(false);
  return (
    <div>
      <MySecondaryBox className="nav py-6">
        <MyContainer maxWidth="xl">
          {/* Only visible in large screens */}
          <Box display={{ xs: "none", md: "block" }}>
            <LaptopNav
              locale={locale}
              setSettingOpen={setSettingOpen}
              setModel={setModel}
            />
          </Box>
          {/* Only visible in responsive screen */}
          <Box display={{ xs: "flex", md: "none" }}>
            <ResponsiveNav
              locale={locale}
              setSettingOpen={setSettingOpen}
              setModel={setModel}
            />
          </Box>
        </MyContainer>
        <Drawer
          anchor="right"
          open={settingOpen}
          onClose={() => setSettingOpen(false)}
        >
          <Box width={350}>
            <SettingDrawer />
          </Box>
        </Drawer>
        <MyModal open={model} setOpen={setModel} className={""}>
          <MyCardBox
            width={{ xs: "500px", md: "900px" }}
            paddingInline={{xs : "20px", md: "0px"}}
            paddingRight={{xs : "10px", md: "10px"}}
            className=" h-[600px] rounded-2xl overflow-hidden"
          >
            <AuthModal setModal={setModel} />
          </MyCardBox>
        </MyModal>
      </MySecondaryBox>
    </div>
  );
};

export default Navbar;
