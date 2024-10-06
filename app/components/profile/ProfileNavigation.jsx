"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Avatar, Box } from "@mui/material";
import { useSelector } from "react-redux";
import MyModal from "@/app/custom/MyModal";
import LogoutModel from "@/app/model/LogoutModel";
import { ProfileLinks } from "@/app/config/config";
import { useLocale, useTranslations } from "next-intl";
import { MyCardBox, MyHoverCardBox } from "@/app/custom/MyBox";
import MyIconButton from "@/app/custom/MyIconButton";
import {
  ArrowDropDownOutlined,
  ArrowDropUpOutlined,
  EditOutlined,
} from "@mui/icons-material";
import EditUserModal from "@/app/model/EditUserModal";

const ProfileNavigation = () => {
  const user = useSelector((state) => state.auth.user.user);
  const t = useTranslations("profile");

  const [logoutModel, setLogoutModel] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  const locale = useLocale();

  // Toggle dropdown on small screens
  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <MyCardBox className="border rounded-2xl overflow-hidden">
      <div className="primary-bg py-3">
        {/* edit user icon */}
        <MyIconButton
          className={"absolute left-[90%]"}
          onClick={() => setOpenEdit(true)}
        >
          <EditOutlined />
        </MyIconButton>

        {/* user avatar and info */}
        <div className="flex items-center gap-5 px-5 py-2">
          <Avatar className="profile-avatar" src={user ? user.avatar : ""} />
          <div className="user">
            <h1 className="text-2xl font-semibold">
              {user ? user.fullname : "test"}
            </h1>
            <h1>{user ? user.email : "test"}</h1>
            <h1>{user ? user.phone : "test"}</h1>
          </div>
        </div>

        {/* Dropdown icon on small screens */}
        <Box display={{ xs: "block", md: "none" }} className="ml-[90%]">
          <MyIconButton onClick={handleDropdownToggle}>
            {dropdownOpen ? <ArrowDropUpOutlined /> : <ArrowDropDownOutlined />}
          </MyIconButton>
        </Box>
      </div>

      {/* Profile links (conditionally rendered on small screens) */}
      <MyCardBox
        className={`links`}
        display={{ xs: dropdownOpen ? "block" : "none", md: "block" }} // Always "block" on medium screens, toggle on small screens
      >
        {ProfileLinks.map((link) => (
          <div key={link.id}>
            {link.id === 6 && (
              <div className="my-2 px-5">
                <h1 className="text-red-500 mb-2 font-semibold text-lg">
                  Danger Zone
                </h1>
                <hr className="border-dashed" />
              </div>
            )}
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
              <Link
                key={link.id}
                href={`/${locale}/profile/${link.link}`}
                onClick={() => setDropdownOpen(false)}
              >
                <MyHoverCardBox className="flex items-center gap-3 p-5 ">
                  {link.icon}
                  <h1>{t(`${link.name}`)}</h1>
                </MyHoverCardBox>
              </Link>
            )}
          </div>
        ))}
      </MyCardBox>

      {/* Logout modal */}
      <MyModal open={logoutModel} setOpen={setLogoutModel}>
        <MyCardBox
          width={{ xs: "300px", md: "400px" }}
          height={{ xs: "350px", md: "280px" }}
          className="p-2 rounded-2xl"
        >
          <LogoutModel setLogoutModel={setLogoutModel} />
        </MyCardBox>
      </MyModal>

      {/* Edit user modal */}
      <MyModal open={openEdit} setOpen={setOpenEdit}>
        <MyCardBox
          className="p-2 rounded-2xl"
          width={{ xs: "300px", md: "400px" }}
        >
          <EditUserModal setOpenEdit={setOpenEdit} />
        </MyCardBox>
      </MyModal>
    </MyCardBox>
  );
};

export default ProfileNavigation;
