"use client";

import Link from "next/link";
import NavDrawers from "./NavDrawers";
import React, { useState } from "react";
import { Menu } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { WebName } from "@/app/config/config";
import { MyPrimaryBox } from "@/app/custom/MyBox";
import MenuDrawer from "@/app/drawer/MenuDrawer";
import { Drawer, IconButton } from "@mui/material";
import Logo from "@/app/assets/logo.png";

const ResponsiveNav = ({ locale, setSettingOpen, setModel }) => {
  const [open, setOpen] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userData = useSelector((state) => state.auth.user?.user);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="logo text-3xl hover:scale-100 duration-500 ease-in-out transition-transform transform flex-item-center">
          {/* Open Drawer on Burger Menu click */}
          <IconButton onClick={() => setOpen(true)}>
            <Menu />
          </IconButton>

          {/* redirect based on selected locale */}
          <Link href={`/${locale}`}>
            <img src={Logo.src} alt="" className="h-10 w-auto" />
          </Link>
        </div>
        {/* right side avatar, cart, settings... */}
        <div className="flex items-center">
          <NavDrawers
            isAuthenticated={isAuthenticated}
            userData={userData}
            setModel={setModel}
            setSettingOpen={setSettingOpen}
            isLaptopScreen={false}
          />
        </div>
      </div>

      {/* Routes Drawer */}
      <Drawer open={open} onClose={() => setOpen(false)}>
        <MyPrimaryBox width={250}>
          <MenuDrawer />
        </MyPrimaryBox>
      </Drawer>
    </div>
  );
};

export default ResponsiveNav;
