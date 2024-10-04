/**
 * wishlist all operations
 * @param {userId} - user id for which user we want to store service
 * @param {serviceId} - service id for which we want to store service
 */

import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  addWishlist,
  getWishlist,
  removeWishlist,
} from "../utils/WishlistService";
import { useEffect, useState } from "react";
import { setWishlistsToRedux } from "../reducer/wishlistReducer";

export const useWishlist = (serviceId) => {
  // check for user authentication and get user id
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = isAuthenticated
    ? useSelector((state) => state.auth.user.user._id)
    : null;

  // state for wishlist
  const [wishlists, setWishlists] = useState([]);
  const [wishlistsLoading, setWishlistsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const limit = 9;

  // handle add wishlist in redux
  const dispatch = useDispatch();

  // if user want to add any service to their wishlist
  const handleAddWishlist = async () => {
    try {
      const response = await addWishlist(userId, serviceId);
      console.log("response", response);
      toast.success(response.message || "Wishlist added successfully");
      dispatch(setWishlistsToRedux(response.data.services));
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.message || "Something went wrong");
    }
  };

  // get particualr user's all wishlist services
  const fetchUsersWishlists = async () => {
    try {
      const response = await getWishlist(userId, page, limit);
      console.log("response", response);
      setWishlists(response.data);
      setWishlistsLoading(false);
      dispatch(setWishlistsToRedux(response.data));
    } catch (error) {
      setWishlistsLoading(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (!serviceId) fetchUsersWishlists();
  }, [page, userId]);

  const deleteWishlist = async () => {
    try {
      const response = await removeWishlist(userId, serviceId);
      toast.success(response.message);
      // refetch all wishlists of particular user
      await fetchUsersWishlists();
    } catch (error) {
      console.log("error", error);
    }
  };

  return {
    handleAddWishlist,
    wishlists,
    wishlistsLoading,
    deleteWishlist,
    setPage,
  };
};
