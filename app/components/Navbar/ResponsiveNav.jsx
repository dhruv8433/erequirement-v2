"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton } from "@mui/material";
import { WebName } from "@/app/config/config";
import MenuDrawer from "@/app/drawer/MenuDrawer";

const ResponsiveNav = ({ locale }) => {
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
        <div className="">
          <h1>Login</h1>
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
