import { useEffect } from "react";
import toast from "react-hot-toast";
import {
  getAddresses,
  addNewAddress,
  removeAddress,
  updateAddress,
  setPrimaryAddress,
} from "@/app/utils/AddressService";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAddressFromState,
  setAddresses,
} from "../reducer/addressReducer";

/**
 * Custom hook to manage addresses state and actions.
 * @param {string} userId - The ID of the user.
 * @returns {Object} - Addresses data and action functions.
 */

export function useAddresses() {
  const dispatch = useDispatch();

  // Get addresses from Redux state
  const userAddresses = useSelector((state) => state.address.addresses);
  const userId = useSelector((state) => state.auth.user.user._id);

  // Load addresses from server and update Redux state
  const loadAddresses = async () => {
    try {
      const data = await getAddresses(userId);
      dispatch(setAddresses(data.data));
      console.log("Fetched addresses:", data.data);
    } catch (error) {
      toast.error("Failed to load addresses.");
    }
  };

  // Load addresses when userId changes
  useEffect(() => {
    if (userId) {
      loadAddresses();
    }
  }, [userId]);

  // Add new address
  const addAddress = async (formData) => {
    try {
      const response = await addNewAddress(userId, formData);
      console.log("Add address response:", response);
      toast.success(response.message || "Address added successfully.");
      await loadAddresses(); // Reload addresses after adding
    } catch (error) {
      toast.error("Failed to add address.");
    }
  };

  // Delete address
  const deleteAddress = async (addressId) => {
    console.log("address", addressId, "userId", userId);
    try {
      // Optimistically remove the address from the Redux state
      dispatch(removeAddressFromState(addressId));

      // Make API call to remove the address from the backend
      const response = await removeAddress(userId, addressId);
      toast.success(response.message || "Address removed successfully.");

      // Optionally reload addresses to ensure consistency
      await loadAddresses();
    } catch (error) {
      toast.error("Failed to remove address.");
    }
  };

  // Update address
  const updateUserAddress = async (addressId, address) => {
    try {
      const response = await updateAddress(userId, addressId, address);
      toast.success(response.message || "Address updated successfully.");
      await loadAddresses(); // Reload addresses after updating
    } catch (error) {
      toast.error("Failed to update address.");
    }
  };

  // Set primary address
  const setUserPrimaryAddress = async (addressId) => {
    try {
      const response = await setPrimaryAddress(userId, addressId);
      toast.success(response.message || "Primary address set successfully.");
      await loadAddresses(); // Reload addresses after setting primary
    } catch (error) {
      toast.error("Failed to set primary address.");
    }
  };

  return {
    addresses: userAddresses,
    addAddress,
    deleteAddress,
    reloadAddresses: loadAddresses,
    updateUserAddress,
    setUserPrimaryAddress,
  };
}
