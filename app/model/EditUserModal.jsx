import React, { useState } from "react";
import ProfileHeading from "../components/profile/ProfileHeading";
import { useTranslations } from "next-intl";
import { Avatar, Divider } from "@mui/material";
import { EditOutlined } from "@mui/icons-material";
import { MyColoredInput } from "../custom/MyInput";
import { MyCardBox } from "../custom/MyBox";
import { MyPrimaryButton } from "../custom/MyButton";
import { useSelector } from "react-redux";
import { useUserAction } from "../hooks/useUserAction";

const EditUserModal = ({ setOpenEdit }) => {
  const t = useTranslations("profile");
  const user = useSelector((state) => state.auth.user.user); // Fetch user data from Redux

  const [userData, setUserData] = useState({
    avatar: user.avatar,
    fullname: user.fullname,
    phone: user.phone,
    email: user.email,
  });

  // Handle avatar change
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    if (file) {
      // Generate a preview URL for the selected file
      const previewUrl = URL.createObjectURL(file);
      setUserData({ ...userData, avatar: file.name });
    }
  };

  const { UpdateUserProfile } = useUserAction();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = UpdateUserProfile(userData);
      setOpenEdit(false);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <MyCardBox className="p-5">
      <ProfileHeading heading={t("edit_profile")} />

      <div className="profile">
        <form onSubmit={handleSubmit}>
          {/* Avatar update section */}
          <div className="avatar flex justify-center my-4 relative">
            <Avatar className="profile-avatar" src={userData.avatar} />{" "}
            {/* Display avatar */}
            <input
              type="file"
              accept="image/*"
              id="avatarInput"
              style={{ display: "none" }} // Hidden input
              onChange={handleAvatarChange}
            />
            <label
              htmlFor="avatarInput"
              className="absolute ml-20 cursor-pointer"
            >
              <EditOutlined className="p-1 primary-bg rounded-full" />
            </label>
          </div>

          <Divider />

          {/* Input fields */}
          <div className="my-4">
            <MyColoredInput
              type="text"
              inputClass="rounded-lg border p-1"
              className="my-2"
              placeholder="Username"
              value={userData.fullname}
              onChange={(e) =>
                setUserData({ ...userData, fullname: e.target.value })
              } // Update username state
            />
            <MyColoredInput
              type="text"
              inputClass="rounded-lg border p-1"
              className="my-2"
              placeholder="Phone No"
              value={userData.phone}
              disabled
            />
            <MyColoredInput
              type="text"
              inputClass="rounded-lg border p-1"
              className="my-2"
              placeholder="Email"
              value={userData.email}
              disabled
            />
          </div>

          <MyPrimaryButton
            title="Submit"
            className="p-1 rounded-2xl w-full"
            type="submit"
          />
        </form>
      </div>
    </MyCardBox>
  );
};

export default EditUserModal;
