"use client";

import React from "react";
import { MyCardBox, MyHoverCardBox, MyPrimaryBox, MyServiceCard } from "@/app/custom/MyBox";
import { Avatar, Icon } from "@mui/material";
import { useSelector } from "react-redux";
import { ProfileLinks } from "@/app/config/config";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const ProfileNavigation = () => {
  const user = useSelector((state) => state.auth.user.user);
  const t = useTranslations("profile");

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
          <Link href={`/${locale}/profile/${link.link}`}>
            <MyHoverCardBox className="flex items-center gap-3 p-5 ">
              <Icon>{link.icon}</Icon>
              <h1>{t(`${link.name}`)}</h1>
            </MyHoverCardBox>
          </Link>
        ))}
      </div>
    </MyCardBox>
  );
};

export default ProfileNavigation;
