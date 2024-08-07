import React from "react";
import Link from "next/link";
import Routes from "@/app/Routes/Routes";
import { IconButton } from "@mui/material";
import MyContainer from "@/app/common/MyContainer";
import { SettingsOutlined } from "@mui/icons-material";
import LocaleSwitcher from "@/app/common/LocaleSwitcher";
import { useLocale } from "next-intl";

const Navbar = () => {
  const locale = useLocale();
  return (
    <div>
      <div className="nav bg-white py-6">
        <MyContainer maxWidth="xl">
          <div className="flex justify-between items-center">
            <div className="logo text-3xl">
              {/* redirect based on selected locale */}
              <Link href={`/${locale}`}>
                <h1 className="my-text text-3xl font-bold duration-300">
                  ERequirement
                </h1>
              </Link>
            </div>
            <div className="links flex gap-4">
              <Routes />
            </div>
            <div className="user flex items-center">
              <Link href="/login">
                <h1>Login</h1>
              </Link>
              <IconButton className="hover:animate-spin">
                <SettingsOutlined />
              </IconButton>
              <LocaleSwitcher />
            </div>
          </div>
        </MyContainer>
      </div>
    </div>
  );
};

export default Navbar;
