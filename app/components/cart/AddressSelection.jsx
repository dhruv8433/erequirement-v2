import React from "react";
import {
  Radio,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Grid,
} from "@mui/material";
import MyIconButton from "@/app/custom/MyIconButton";
import { Delete, Edit } from "@mui/icons-material";

const AddressSelection = ({
  selectedAddress,
  handleAddressChange,
  addresses,
  removeAddress,
  EditAddressModalOpen,
}) => {
  return (
    <FormControl component="fieldset" className="w-full my-4">
      <Grid container>
        <RadioGroup
          value={selectedAddress.toString()} // Ensure the value matches the selected index
          onChange={handleAddressChange}
          className="w-full"
        >
          {addresses.map((address, index) => (
            <Grid item xs={12} md={6} key={address._id}>
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
                            <MyIconButton onClick={EditAddressModalOpen}>
                              <Edit fontSize="small" className="text-white" />
                            </MyIconButton>
                          </div>
                          <div className="bg-red-500 rounded-md">
                            <MyIconButton
                              onClick={() => removeAddress(address._id)}
                            >
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
            </Grid>
          ))}
        </RadioGroup>
      </Grid>
    </FormControl>
  );
};

export default AddressSelection;
