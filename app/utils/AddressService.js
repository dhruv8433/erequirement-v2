import { httpAxios } from "../httpAxios";

// get all address of user
async function getAddresses(userId) {}

// add new addresses to user
async function addNewAddress(userId, address) {
  const response = await httpAxios.post(`/address`, {
    userId: userId,
    fullName: address.fullName,
    addressLine1: address.addressLine1,
    addressLine2: address.addressLine2,
    city: address.city,
    state: address.state,
    postalCode: address.postalCode,
    country: address.country,
  });

  return response.data;
}

// remove user addresses
async function removeAddress(userId, addressId) {}

// update user address
async function updateAddress(userId, addressId, address) {}

// set primary address for delivery service
async function setPrimaryAddress(userId, addressId) {}

export {
  getAddresses,
  addNewAddress,
  removeAddress,
  updateAddress,
  setPrimaryAddress,
};
