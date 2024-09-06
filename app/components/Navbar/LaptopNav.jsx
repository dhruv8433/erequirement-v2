"use client";

import React from "react";
import Link from "next/link";
import Routes from "@/app/Routes/Routes";
import { useSelector } from "react-redux";
import NavDrawers from "./NavDrawers";
import Logo from "@/app/assets/logo.png";

const LaptopNav = ({ locale, setSettingOpen, setModel }) => {
  // Always call useSelector at the top level
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // Always call useSelector at the top level
  const user = useSelector((state) => state.auth.user.user);

  // Conditionally set userData based on isAuthenticated
  const userData = isAuthenticated ? user : null;

  return (
    <div className="flex justify-between items-center">
      {/* logo */}
      <div className="logo text-3xl hover:scale-100 duration-500 ease-in-out transition-transform transform">
        {/* Redirect based on selected locale */}
        <Link href={`/${locale}`} className="flex items-center gap-1">
          <img src={Logo.src} alt="" className="h-10 w-auto" />
        </Link>
      </div>
      {/* web routes */}
      <div className="links flex gap-4">
        <Routes />
      </div>
      {/* right side login, avatar, cart, settings... */}
      <div>
        <NavDrawers
          isAuthenticated={isAuthenticated}
          userData={userData}
          setModel={setModel}
          setSettingOpen={setSettingOpen}
          isLaptopScreen={true}
        />
      </div>
    </div>
  );
};

export default LaptopNav;
