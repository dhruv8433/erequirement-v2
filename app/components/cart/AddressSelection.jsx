import React from "react";
import { FormControl, RadioGroup, Grid } from "@mui/material";
import AddressCheckBox from "./AddressCheckBox";

const AddressSelection = ({
  user,
  selectedAddress,
  handleAddressChange,
  addresses,
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
              <AddressCheckBox
                address={address}
                index={index}
                user={user}
                EditAddressModalOpen={EditAddressModalOpen}
              />
            </Grid>
          ))}
        </RadioGroup>
      </Grid>
    </FormControl>
  );
};

export default AddressSelection;
