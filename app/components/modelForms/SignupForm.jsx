"use client";

import toast from "react-hot-toast";
import React, { useState } from "react";
import { Divider, Grid } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import { errorMessages } from "@/app/config/config";
import { SignupUser } from "@/app/utils/userService";
import Visibility from "@mui/icons-material/Visibility";
import { MyInputBorderBottom } from "../../custom/MyInput";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { MyPrimaryText, MyHeading } from "../../custom/MyText";
import GoogleSignupButton from "@/app/common/GoogleSignupButton";
import { MyBorderdButton, MyPrimaryButton } from "../../custom/MyButton";

// SignupForm Component
const SignupForm = ({ setSignupForm, setModal }) => {
  // State to manage the visibility of the password
  const [showPassword, setShowPassword] = useState(false);

  // State to manage signup form data
  const [signupData, setSignupData] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    avatar: "",
  });

  const [fileName, setFileName] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSignupData({ ...signupData, avatar: file });
    setFileName(file.name);
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !signupData.fullname ||
      !signupData.email ||
      !signupData.password ||
      !signupData.phone
    ) {
      toast.error(errorMessages.feildsRequire);
      return;
    }

    if (!signupData.avatar) {
      toast.error(errorMessages.uploadAvatar);
      return;
    }

    try {
      const response = await SignupUser(signupData);
      console.log("user signup success", response);
      toast.success(response.message);
    } catch (error) {
      console.log("user signup error", error);
    }
  };

  return (
    <div className="">
      {/* Header */}
      <div className="text-center my-3">
        <MyPrimaryText
          title={"Get Started"}
          className={"text-2xl font-semibold my-1"}
        />
        <div className="flex text-center justify-center gap-1">
          <MyPrimaryText title={"Already have an account?"} className={""} />
          <span
            onClick={() => setSignupForm(false)}
            className="hover:cursor-pointer"
          >
            <MyHeading title={"Login"} className={"font-semibold"} />
          </span>
        </div>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit}>
        {/* Avatar Upload */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="flex items-center justify-center w-full h-12 px-4 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 focus:outline-none focus:border-orange-500"
            >
              <AttachFile className="text-gray-400" />
              <MyPrimaryText
                title={`Upload your avatar: ${fileName || ""}`}
                className={"text-sm"}
              />
            </label>
          </div>
        </div>

        {/* Full Name Input */}
        <div className="mb-4">
          <MyPrimaryText title={"Name"} className={"text-sm"} />
          <MyInputBorderBottom
            type={"text"}
            name="fullname"
            placeholder={"Enter your Name"}
            onChange={handleInputChange}
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <MyPrimaryText title={"Email"} className={"text-sm"} />
          <MyInputBorderBottom
            type={"email"}
            name="email"
            placeholder={"Enter your email"}
            onChange={handleInputChange}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <MyPrimaryText title={"Password"} className={"text-sm"} />
          <MyInputBorderBottom
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder={"Enter your password"}
            icon={
              showPassword ? (
                <VisibilityOff onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <Visibility onClick={() => setShowPassword(!showPassword)} />
              )
            }
            onChange={handleInputChange}
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-6">
          <MyPrimaryText title={"Phone"} className={"text-sm"} />
          <MyInputBorderBottom
            type={"text"}
            name="phone"
            placeholder={"Enter your phone"}
            onChange={handleInputChange}
          />
        </div>

        {/* Signup Button */}
        <MyPrimaryButton
          title={"Signup"}
          className={"w-full p-2 mb-6"}
          type="submit"
        />
      </form>

      {/* Divider and Alternative Signup Options */}
      <Divider>OR</Divider>

      <div className="mt-4">
        <Grid container spacing={3}>
          <Grid item xs={6} md={6}>
            <GoogleSignupButton SetModal={setModal} />
          </Grid>
          <Grid item xs={6} md={6}>
            <MyBorderdButton
              title={"Phone"}
              icon={<PhoneIcon />}
              className={"w-full p-2"}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SignupForm;
