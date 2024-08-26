import React from "react";
import Link from "next/link";
import Routes from "@/app/Routes/Routes";
import { IconButton } from "@mui/material";
import { WebName } from "@/app/config/config";
import { SettingsOutlined } from "@mui/icons-material";
import { MyPrimaryButton } from "@/app/custom/MyButton";

const LaptopNav = ({ locale, setSettingOpen, setModel }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="logo text-3xl hover:scale-100 duration-500 ease-in-out transition-transform transform">
        {/* redirect based on selected locale */}
        <Link href={`/${locale}`}>
          <h1 className="my-text text-3xl font-bold ">{WebName}</h1>
        </Link>
      </div>
      <div className="links flex gap-4">
        <Routes />
      </div>
      <div className="user flex items-center gap-2">
        <MyPrimaryButton
          title={"Login"}
          className={"px-3 py-1"}
          onClickFunction={() => setModel(true)}
        />
        <IconButton
          className="hover:animate-spin"
          onClick={() => setSettingOpen(true)}
        >
          <SettingsOutlined aria-label="Settings" />
        </IconButton>
      </div>
    </div>
  );
};

export default LaptopNav;
