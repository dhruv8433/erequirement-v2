import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import MyIconButton from "@/app/custom/MyIconButton";
import { FormControlLabel, Radio } from "@mui/material";
import { useAddresses } from "@/app/hooks/useAddresses";

const AddressCheckBox = ({ user, address, index, EditAddressModalOpen }) => {
  const { deleteAddress } = useAddresses(user._id);
  return (
    <div>
      <div className="p-5 border rounded-2xl m-2">
        <FormControlLabel
          className="w-full"
          value={index.toString()} // Use index as value
          control={<Radio />}
          label={
            <div className="">
              <div className="flex justify-between w-full items-center">
                <div className="font-semibold text-lg">
                  {address.addressLine1}
                </div>
                <div className="flex item-center gap-2">
                  <div className="bg-green-500 rounded-md">
                    <MyIconButton onClick={() => EditAddressModalOpen(address)}>
                      <Edit fontSize="small" className="text-white" />
                    </MyIconButton>
                  </div>
                  <div className="bg-red-500 rounded-md">
                    <MyIconButton onClick={() => deleteAddress(address._id)}>
                      <Delete fontSize="small" className="text-white" />
                    </MyIconButton>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {address.addressLine2}
              </div>
              <div className="flex">
                <div className="text-sm text-gray-600">
                  {address.city}, {address.state}
                </div>
              </div>
              <div className="">{address.postalCode}</div>
              <div className="">{address.country}</div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default AddressCheckBox;