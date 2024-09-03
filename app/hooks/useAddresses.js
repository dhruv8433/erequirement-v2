import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  getAddresses,
  addNewAddress,
  removeAddress,
  updateAddress,
  setPrimaryAddress,
} from "@/app/utils/AddressService";

/**
 * Custom hook to manage addresses state and actions.
 * @param {string} userId - The ID of the user.
 * @returns {Object} - Addresses data and action functions.
 */
export function useAddresses(userId) {
  const [addresses, setAddresses] = useState([]);

  const loadAddresses = async () => {
    try {
      const data = await getAddresses(userId);
      console.log("Fetched addresses:", data.data); // Verify the fetched data
      setAddresses(data.data); // Update state with the fetched data
    } catch (error) {
      toast.error("Failed to load addresses.");
    }
  };

  useEffect(() => {
    if (userId) {
      loadAddresses();
    }
  }, [userId]); // Add userId as a dependency to reload addresses when userId changes

  useEffect(() => {
    console.log("Updated addresses after deletion:", addresses);
  }, [addresses]); // Log whenever addresses are updated

  const addAddress = async (formData) => {
    try {
      const response = await addNewAddress(userId, formData);
      console.log("Add address response:", response);
      toast.success(response.message || "Address added successfully.");
      const data = await getAddresses(userId);
      setAddresses(data.data);
      console.log("useAddress", data.data);
    } catch (error) {
      toast.error("Failed to add address.");
    }
  };

  const deleteAddress = async (addressId) => {
    try {
      const response = await removeAddress(userId, addressId);
      toast.success(response.message || "Address removed successfully.");
      await loadAddresses(); // Refresh addresses
    } catch (error) {
      toast.error("Failed to remove address.");
    }
  };

  const updateUserAddress = async (addressId, address) => {
    try {
      const response = await updateAddress(userId, addressId, address);
      toast.success(response.message || "Address updated successfully.");
      await loadAddresses(); // Refresh addresses
    } catch (error) {
      toast.error("Failed to update address.");
    }
  };

  const setUserPrimaryAaddress = async (addressId) => {
    try {
      const response = await setPrimaryAddress(userId, addressId);
      toast.success(response.message || "Primary address set successfully.");
    } catch (error) {
      toast.error("Failed to set address.");
    }
  };

  return {
    addresses,
    addAddress,
    deleteAddress,
    reloadAddresses: loadAddresses,
    updateUserAddress,
    setUserPrimaryAaddress,
    setAddresses,
  };
}
