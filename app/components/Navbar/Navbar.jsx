"use client";

import LaptopNav from "./LaptopNav";
import { useLocale } from "next-intl";
import { Drawer } from "@mui/material";
import React, { useState } from "react";
import MyModal from "@/app/custom/MyModal";
import ResponsiveNav from "./ResponsiveNav";
import AuthModal from "@/app/model/AuthModal";
import MyContainer from "@/app/custom/MyContainer";
import SettingDrawer from "@/app/drawer/SettingDrawer";
import { MyCardBox, MyPrimaryBox, MySecondaryBox } from "@/app/custom/MyBox";

const Navbar = () => {
  const locale = useLocale();
  const [settingOpen, setSettingOpen] = useState(false);
  const [model, setModel] = useState(false);

  return (
    <div>
      <MySecondaryBox className="nav py-6">
        {/* navigation based on screen size */}
        <MyContainer maxWidth="xl">
          {/* Only visible in large screens */}
          <MyPrimaryBox display={{ xs: "none", md: "block" }}>
            <LaptopNav
              locale={locale}
              setSettingOpen={setSettingOpen}
              setModel={setModel}
            />
          </MyPrimaryBox>
          {/* Only visible in responsive screen */}
          <MyPrimaryBox display={{ xs: "flex", md: "none" }}>
            <ResponsiveNav
              locale={locale}
              setSettingOpen={setSettingOpen}
              setModel={setModel}
            />
          </MyPrimaryBox>
        </MyContainer>

        {/* setting drawer open here */}
        <Drawer
          anchor="right"
          open={settingOpen}
          onClose={() => setSettingOpen(false)}
        >
          <MyPrimaryBox width={350}>
            <SettingDrawer />
          </MyPrimaryBox>
        </Drawer>

        {/* signup login model here */}
        <MyModal open={model} setOpen={setModel} className={""}>
          <MyCardBox
            width={{ xs: "500px", md: "900px" }}
            paddingInline={{ xs: "20px", md: "0px" }}
            paddingRight={{ xs: "10px", md: "10px" }}
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
