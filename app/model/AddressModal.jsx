import React, { useState, useEffect } from "react";
import { Divider } from "@mui/material";
import { MyPrimaryText } from "../custom/MyText";
import MyIconButton from "../custom/MyIconButton";
import { CloseRounded } from "@mui/icons-material";
import { MyPrimaryButton } from "../custom/MyButton";
import { MyInput, MyTextArea } from "../custom/MyInput";
import { useAddresses } from "../hooks/useAddresses";

const AddressModal = ({ setAddressModal, user, address }) => {
  const { addAddress, updateUserAddress } = useAddresses(user?._id);

  // Initialize form data state, pre-filling with existing address data if provided
  const [formData, setFormData] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  useEffect(() => {
    if (address) {
      setFormData(address);
    }
  }, [address]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission and page reload
    if (address) {
      await updateUserAddress(address._id, formData); // Update the address if editing
    } else {
      await addAddress(formData); // Add a new address if not editing
    }
    setAddressModal(false);
  };

  return (
    <div className="p-2 rounded-2xl">
      <div className="flex justify-between items-center my-2">
        <MyPrimaryText
          title={address ? "Update Address" : "Add New Address"}
          className={"font-semibold"}
        />
        <MyIconButton onClick={() => setAddressModal(false)}>
          <CloseRounded />
        </MyIconButton>
      </div>
      <Divider />
      <div className="my-2">
        <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
          <div>
            <label>Name:</label>
            <MyInput
              type={"text"}
              placeholder={"Enter Your Full Name"}
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address Line 1:</label>
            <MyTextArea
              className={"w-full"}
              placeholder={"Enter Your Address Line 1"}
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address Line 2:</label>
            <MyTextArea
              className={"w-full"}
              placeholder={"Enter Your Address Line 2"}
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>City:</label>
            <MyInput
              type={"text"}
              placeholder={"Enter Your City"}
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>State:</label>
            <MyInput
              type={"text"}
              placeholder={"Enter Your State"}
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Postal Code:</label>
            <MyInput
              type={"text"}
              placeholder={"Enter Your Postal Code"}
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Country:</label>
            <MyInput
              type={"text"}
              placeholder={"Enter Your Country"}
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <MyPrimaryButton
            title={address ? "Update Address" : "Save Address"}
            className={"w-full my-3 p-2"}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
