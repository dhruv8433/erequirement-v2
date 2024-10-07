"use client";

import toast from "react-hot-toast";
import React, { useState } from "react";
import { Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "@/app/reducer/authReducer";
import { LoginUser } from "@/app/utils/userService";
import { MyInputBorderBottom } from "@/app/custom/MyInput";
import { MyHeading, MyPrimaryText } from "@/app/custom/MyText";
import GoogleSignupButton from "@/app/common/GoogleSignupButton";
import { Phone, Visibility, VisibilityOff } from "@mui/icons-material";
import { MyBorderdButton, MyPrimaryButton } from "@/app/custom/MyButton";
import { errorMessages } from "@/app/config/config";
import Cookies from "js-cookie";

const LoginForm = ({ setSignupForm, setModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const dispatch = useDispatch();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginUser(loginData);
      if (response && response.data) {
        dispatch(login({ user: response.data }));
        toast.success(response.message);
        Cookies.set("user", true, {
          expires: 7, // Cookie expiration in days
        });

        setModal(false);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.log("login error", error);
      toast.error(error?.response?.message || errorMessages.loginError); // Changed to error.message for proper string
    }
  };

  return (
    <div className="py-4 rounded-lg">
      {/* Header */}
      <div className="text-center my-3">
        <MyPrimaryText
          title={"Existing Customer"}
          className={"text-2xl font-semibold"}
        />
        <div className="flex text-center justify-center gap-1">
          <MyPrimaryText title={"New to eRequirement?"} className={""} />
          <span
            onClick={() => setSignupForm(true)}
            className="hover:cursor-pointer text-blue-600"
          >
            <MyHeading title={"Signup"} className={"font-bold"} />
          </span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 mb-4">
        <div>
          <MyPrimaryText title={"Email"} className={"text-sm"} />
          <MyInputBorderBottom
            type={"text"}
            name={"email"}
            onChange={handleChange}
            placeholder={"Enter your email"}
          />
        </div>
        <div>
          <MyPrimaryText title={"Password"} className={"text-sm"} />
          <MyInputBorderBottom
            type={showPassword ? "text" : "password"}
            name={"password"}
            onChange={handleChange}
            placeholder={"Enter your password"}
            icon={
              showPassword ? (
                <VisibilityOff
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <Visibility
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )
            }
          />
        </div>

        <MyPrimaryButton
          title={"Login"}
          className={"w-full p-2 mb-6 rounded-md"}
          type="submit"
        />
      </form>

      {/* Divider */}
      <Divider>OR</Divider>

      {/* Alternative Login Methods */}
      <div className="my-5 gap-4 flex flex-col">
        <GoogleSignupButton SetModal={setModal} />
        <MyBorderdButton
          title={"Phone"}
          icon={<Phone />}
          className={"w-full p-2"}
        />
      </div>
    </div>
  );
};

export default LoginForm;
