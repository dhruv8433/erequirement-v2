import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import MyIconButton from "@/app/custom/MyIconButton";
import { FormControlLabel, Radio } from "@mui/material";
import { useAddresses } from "@/app/hooks/useAddresses";

const AddressCheckBox = ({ user, address, index, EditAddressModalOpen }) => {
  const { deleteAddress } = useAddresses(user._id);
  return (
    <div data-aos="fade-up">
      <div className="p-5 border rounded-2xl m-2" data-aos="fade-up">
        <FormControlLabel
          className="w-full"
          value={index.toString()} // Use index as value
          control={<Radio />}
          label={
            <div className="">
              <div className="flex justify-between w-full items-center">
                <div className="font-semibold text-lg" data-aos="fade-up">
                  <h1>{address.addressLine1}</h1>
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
              <div className="text-sm text-gray-600" data-aos="fade-up">
                <h1>{address.addressLine2}</h1>
              </div>
              <div className="flex">
                <div className="text-sm text-gray-600" data-aos="fade-up">
                  <h1>
                    {address.city}, {address.state}
                  </h1>
                </div>
              </div>
              <div className="" data-aos="fade-up">
                <h1>{address.postalCode}</h1>
              </div>
              <div className="" data-aos="fade-up">
                <h1>{address.country}</h1>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default AddressCheckBox;
