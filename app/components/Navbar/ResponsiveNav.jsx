"use client";

import React, { useState } from "react";
import Link from "next/link";
import { WebName } from "@/app/config/config";
import MenuDrawer from "@/app/drawer/MenuDrawer";
import { Menu, SettingsOutlined } from "@mui/icons-material";
import { Box, Drawer, IconButton } from "@mui/material";
import { MyPrimaryButton } from "@/app/custom/MyButton";

const ResponsiveNav = ({ locale, setSettingOpen, setModel }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="logo text-3xl hover:scale-100 duration-500 ease-in-out transition-transform transform flex-item-center">
          {/* Open Drawer on Burger Menu click */}
          <IconButton onClick={() => setOpen(true)}>
            <Menu />
          </IconButton>

          {/* redirect based on selected locale */}
          <Link href={`/${locale}`}>
            <h1 className="my-text text-xl font-bold ">{WebName}</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <MyPrimaryButton
            title={"Login"}
            className={"px-3 py-1"}
            onClickFunction={() => setModel(true)}
          />
          <IconButton
            className="hover:animate-spin"
            onClick={() => setSettingOpen(true)}
          >
            <SettingsOutlined />
          </IconButton>
        </div>
      </div>

      {/* Routes Drawer */}
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box width={250}>
          <MenuDrawer />
        </Box>
      </Drawer>
    </div>
  );
};

export default ResponsiveNav;
