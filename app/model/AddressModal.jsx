import React, { useState } from "react";
import { Divider } from "@mui/material";
import { MyPrimaryText } from "../custom/MyText";
import MyIconButton from "../custom/MyIconButton";
import { CloseRounded } from "@mui/icons-material";
import { MyPrimaryButton } from "../custom/MyButton";
import { MyInput, MyTextArea } from "../custom/MyInput";

const AddressModal = ({ setAddressModal }) => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data
    console.log(formData);

    // You can also add validation here or send data to your backend
    setAddressModal(false); // Close the modal after submission
  };

  return (
    <div className="p-2 rounded-2xl">
      <div className="flex justify-between items-center my-2">
        <MyPrimaryText title={"Add New Address"} className={"font-semibold"} />
        <MyIconButton onClick={() => setAddressModal(false)}>
          <CloseRounded />
        </MyIconButton>
      </div>
      <Divider />
      <div className="my-2 ">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <MyInput
              type={"text"}
              placeholder={"Enter Your Full Name"}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address Line 1:</label>
            <MyTextArea
              className={"w-full"}
              placeholder={"Enter Your Address Line 1"}
              name="addressLine1"
              cols={40}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address Line 2:</label>
            <MyTextArea
              className={"w-full"}
              placeholder={"Enter Your Address Line 2"}
              name="addressLine2"
              cols={40}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>City:</label>
            <MyInput
              type={"text"}
              placeholder={"Enter Your City"}
              name="city"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>State:</label>
            <MyInput
              type={"text"}
              placeholder={"Enter Your State"}
              name="state"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Postal Code:</label>
            <MyInput
              type={"text"}
              placeholder={"Enter Your Postal Code"}
              name="postalCode"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Country:</label>
            <MyInput
              type={"text"}
              placeholder={"Enter Your Country"}
              name="country"
              onChange={handleChange}
            />
          </div>

          <MyPrimaryButton
            title={"Save Address"}
            className={"w-full my-3 p-2"}
            type="submit" // Add type="submit" to trigger form submission
          />
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
