"use client";

import React from "react";
import Link from "next/link";
import Routes from "@/app/Routes/Routes";
import { WebName } from "@/app/config/config";
import { useSelector } from "react-redux";
import NavDrawers from "./NavDrawers";

const LaptopNav = ({ locale, setSettingOpen, setModel }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  let userData = null;

  if (isAuthenticated) {
    userData = useSelector((state) => state.auth.user.data.user);
  }

  return (
    <div className="flex justify-between items-center">
      {/* logo */}
      <div className="logo text-3xl hover:scale-100 duration-500 ease-in-out transition-transform transform">
        {/* Redirect based on selected locale */}
        <Link href={`/${locale}`}>
          <h1 className="my-text text-3xl font-bold ">{WebName}</h1>
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
