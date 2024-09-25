import { MyPrimaryButton } from "@/app/custom/MyButton";
import { SettingsOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const NavDrawers = ({
  isAuthenticated,
  userData,
  setModel,
  setSettingOpen,
  isLaptopScreen,
}) => {
  const locale = useLocale();

  return (
    <div className="user flex items-center gap-2">
      {/* user avatar and signup based on user state */}
      {isAuthenticated && userData ? (
        <Link href={`/${locale}/profile`} className="flex items-center gap-1">
          <Avatar src={"" || userData.avatar} sx={{ height: 30, width: 30 }} />
          {isLaptopScreen && <h1>{userData.fullname}</h1>}
        </Link>
      ) : (
        <MyPrimaryButton
          title={"Login"}
          className={"px-3 py-1 rounded-md"}
          onClickFunction={() => setModel(true)}
        />
      )}

      {/* cart icon */}
      <Link href={`/${locale}/cart`}>
        <IconButton>
          <ShoppingCartOutlined />
        </IconButton>
      </Link>

      {/* setttings icon */}
      <IconButton
        className="hover:animate-spin"
        onClick={() => setSettingOpen(true)}
      >
        <SettingsOutlined aria-label="Settings" />
      </IconButton>
    </div>
  );
};

export default NavDrawers;
