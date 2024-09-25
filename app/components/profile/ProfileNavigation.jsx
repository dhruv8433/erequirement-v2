"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import MyModal from "@/app/custom/MyModal";
import LogoutModel from "@/app/model/LogoutModel";
import { ProfileLinks } from "@/app/config/config";
import { useLocale, useTranslations } from "next-intl";
import { MyCardBox, MyHoverCardBox } from "@/app/custom/MyBox";

const ProfileNavigation = () => {
  const user = useSelector((state) => state.auth.user.user);
  const t = useTranslations("profile");

  const [logoutModel, setLogoutModel] = useState(false);

  const locale = useLocale();
  return (
    <MyCardBox className="border rounded-2xl overflow-hidden">
      <div className="p-5 primary-bg py-10">
        {/* user avatar and info */}
        <div className="flex items-center gap-5">
          <Avatar className="profile-avatar" src={user ? user.avatar : ""} />
          <div className="user">
            <h1 className="text-2xl font-semibold">{user.fullname}</h1>
            <h1>{user.email}</h1>
            <h1>{user.phone}</h1>
          </div>
        </div>
      </div>

      {/* routes  */}
      <div className="links">
        {ProfileLinks.map((link) => (
          <>
            {/* display danger zone when logout link reached */}
            {link.id === 6 && (
              <div className="my-2 px-5">
                <h1 className="text-red-500 mb-2 font-semibold text-lg">
                  Danger Zone
                </h1>
                <hr className="border-dashed" />
              </div>
            )}
            {/* open model for logout and for other's page */}
            {link.id === 6 ? (
              <div>
                <MyHoverCardBox
                  className="flex items-center gap-3 p-5 hover:cursor-pointer"
                  onClick={() => setLogoutModel(true)}
                >
                  {link.icon}
                  <h1>{t(`${link.name}`)}</h1>
                </MyHoverCardBox>
              </div>
            ) : (
              <Link key={link.id} href={`/${locale}/profile/${link.link}`}>
                <MyHoverCardBox className="flex items-center gap-3 p-5 ">
                  {link.icon}
                  <h1>{t(`${link.name}`)}</h1>
                </MyHoverCardBox>
              </Link>
            )}
          </>
        ))}
      </div>

      {/* render logout model */}
      <MyModal open={logoutModel} setOpen={setLogoutModel}>
        <MyCardBox
          width={{ xs: "300px", md: "400px" }}
          height={{ xs: "350px", md: "280px" }}
          className="p-2 rounded-2xl"
        >
          <LogoutModel setLogoutModel={setLogoutModel} />
        </MyCardBox>
      </MyModal>
    </MyCardBox>
  );
};

export default ProfileNavigation;
