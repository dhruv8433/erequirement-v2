import React from "react";
import { Add } from "@mui/icons-material";
import { MyCardBox } from "@/app/custom/MyBox";
import AddressSelection from "./AddressSelection";
import { MyBorderdButton } from "@/app/custom/MyButton";

const Address = ({
  selectedAddress,
  setSelectedAddress,
  handleAddressChange,
  addressModal,
  setAddressModal,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <MyCardBox className="p-4">
        <MyBorderdButton
          title={"Add New Address"}
          className={"border-dashed w-full p-10 my-address-btn"}
          icon={<Add />}
          dashed={true}
          onClickFunction={() => setAddressModal(true)}
        />
        {/* Address Selections */}
        <div className="my-4">
          <AddressSelection
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            handleAddressChange={handleAddressChange}
          />
        </div>
      </MyCardBox>
    </div>
  );
};
 
export default Address;
