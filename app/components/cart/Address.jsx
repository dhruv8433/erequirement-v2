"use client";

import React from "react";
import { Add } from "@mui/icons-material";
import { MyCardBox } from "@/app/custom/MyBox";
import AddressSelection from "./AddressSelection";
import { MyBorderdButton } from "@/app/custom/MyButton";
import { useAddresses } from "@/app/hooks/useAddresses";

const Address = ({
  user,
  selectedAddress,
  setSelectedAddress,
  setAddressModal,
}) => {
  const { addresses, setUserPrimaryAddress } = useAddresses(user?._id);

  // Handle address selection change using index
  const handleAddressChange = (event) => {
    const selectedIndex = parseInt(event.target.value, 10);
    setSelectedAddress(selectedIndex);

    const selectedAddressObject = addresses[selectedIndex];
    if (selectedAddressObject && selectedAddressObject._id) {
      setUserPrimaryAddress(selectedAddressObject._id);
    } else {
      console.error("Invalid address selection");
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden">
      <MyCardBox className="p-4">
        <MyBorderdButton
          title={"Add New Address"}
          className={"border-dashed w-full p-10 my-address-btn"}
          icon={<Add />}
          dashed={true}
          onClickFunction={() => setAddressModal()} // Ensure you define `setAddressModal`
        />
        <div className="my-4">
          <AddressSelection
            user={user}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            handleAddressChange={handleAddressChange}
            addresses={addresses}
            EditAddressModalOpen={setAddressModal}
          />
        </div>
      </MyCardBox>
    </div>
  );
};

export default Address;
