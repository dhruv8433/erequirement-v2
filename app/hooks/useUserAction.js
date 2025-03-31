import { useDispatch, useSelector } from "react-redux";
import { DeleteAccount, LogoutUser, UpdateUser } from "../utils/userService";
import { useEffect, useState } from "react";
import { login, logoutFromRedux } from "../reducer/authReducer";
import { useRouter } from "next/navigation"; // Correct import for useRouter
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export const useUserAction = () => {
  const userId = useSelector((state) => state.auth.user?.user?._id);

  const [logout, setLogout] = useState(null);
  const [deleteAccount, setDeleteAccount] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter(); // Correct router instance

  async function UserLogout() {
    try {
      const response = await LogoutUser(userId);
      // setLogout(response.data);

      Cookies.remove("user"); // Remove the token cookie

      // Dispatch the Redux action to remove user state
      dispatch(logoutFromRedux());

      // Show success message
      toast.success(response.data.message || "Logged out successfully");

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("An error occurred while logging out. Please try again.");
    }
  }

  async function DeleteUserAccount() {
    try {
      const response = await DeleteAccount(userId);
      console.log("Account deleted:", response.data);
      setDeleteAccount(response.data); // Dispatch the Redux action to remove user state
      dispatch(logoutFromRedux());

      // Redirect the user to the homepage
      router.forward("/");

      // Show success message
      toast.success(
        response.data.message || "user account deleted successfully"
      );
    } catch (error) {
      console.log("error in deleting account", error.messages);
    }
  }

  async function UpdateUserProfile(userData) {
    try {
      const response = await UpdateUser(userData, userId);
      console.log("User updated:", response.data);
      dispatch(login({ user: response.data }));
      toast.success(response.message || "User updated successfully");
    } catch (error) {
      console.log("Error updating user", error);
    }
  }

  return {
    logout,
    UserLogout,
    DeleteUserAccount,
    UpdateUserProfile,
  };
};
