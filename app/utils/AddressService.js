import { httpAxios } from "../httpAxios";

// Get all addresses of a user
async function getAddresses(userId) {
  try {
    const response = await httpAxios.get(`/address/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching addresses:", error);
    throw error;
  }
}

// Add a new address to the user's account
async function addNewAddress(userId, address) {
  try {
    const response = await httpAxios.post(`/address`, {
      userId,
      ...address, // Spread the address object to keep it clean
    });
    return response.data;
  } catch (error) {
    console.error("Error adding address:", error);
    throw error;
  }
}

// Remove a user's address
async function removeAddress(userId, addressId) {
  try {
    const response = await httpAxios.delete(`/address/${userId}/${addressId}`);
    return response.data;
  } catch (error) {
    console.error("Error removing address:", error);
    throw error;
  }
}

// Update a user's address
async function updateAddress(userId, addressId, address) {
  try {
    const response = await httpAxios.put(`/address/${userId}/${addressId}`, {
      ...address,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating address:", error);
    throw error;
  }
}

// Set a primary address for delivery
async function setPrimaryAddress(userId, addressId) {
  try {
    const response = await httpAxios.post(
      `/address/${userId}/${addressId}/primary`
    );
    return response.data;
  } catch (error) {
    console.error("Error setting primary address:", error);
    throw error;
  }
}

export {
  getAddresses,
  addNewAddress,
  removeAddress,
  updateAddress,
  setPrimaryAddress,
};
