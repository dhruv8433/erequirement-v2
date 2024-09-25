import { useDispatch, useSelector } from "react-redux";
import { DeleteAccount, LogoutUser } from "../utils/userService";
import { useEffect, useState } from "react";
import { logoutFromRedux } from "../reducer/authReducer";
import { useRouter } from "next/navigation"; // Correct import for useRouter
import toast from "react-hot-toast";

export const useUserAction = () => {
  const userId = useSelector((state) => state.auth.user?.user?._id);

  const [logout, setLogout] = useState(null);
  const [deleteAccount, setDeleteAccount] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter(); // Correct router instance

  async function UserLogout() {
    try {
      const response = await LogoutUser();
      setLogout(response.data);

      // Dispatch the Redux action to remove user state
      dispatch(logoutFromRedux());

      // Redirect the user to the homepage
      router.forward("/");

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

  return {
    logout,
    UserLogout,
    DeleteUserAccount,
  };
};
