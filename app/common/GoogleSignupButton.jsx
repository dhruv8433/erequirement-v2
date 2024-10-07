import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase/firebase";
import { MyBorderdButton } from "../custom/MyButton";
import { Google, SavedSearch } from "@mui/icons-material";
import { SignupWithGoogle } from "../utils/userService";
import { useDispatch } from "react-redux";
import { login } from "../reducer/authReducer";
import toast from "react-hot-toast";
import Cookies from "js-cookie";


const GoogleSignupButton = ({ SetModal }) => {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User info:", user);
      // You can now use the user object to store user info in your app
      const saveUserInfo = await SignupWithGoogle(user);
      console.log("User info saved", saveUserInfo);
      dispatch(login({ user: saveUserInfo.data }));
      toast.success(saveUserInfo.message);
      // close modal after google signup
      Cookies.set("user", true);
      SetModal(false);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };
  return (
    <div>
      <MyBorderdButton
        title={"Google"}
        icon={<Google />}
        className={"w-full p-2"}
        onClickFunction={() => signInWithGoogle()}
      />
    </div>
  );
};

export default GoogleSignupButton;
