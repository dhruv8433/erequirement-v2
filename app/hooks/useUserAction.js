import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../utils/userService";
import { useEffect, useState } from "react";
import { logoutFromRedux } from "../reducer/authReducer";
import { useRouter } from "next/navigation"; // Correct import for useRouter
import toast from "react-hot-toast";

export const useUserAction = () => {
  const userId = useSelector((state) => state.auth.user?.user?._id);

  const [logout, setLogout] = useState(null);
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

  return {
    logout,
    UserLogout,
  };
};
