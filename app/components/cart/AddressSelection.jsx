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
      <RadioGroup
        value={selectedAddress.toString()} // Ensure the value matches the selected index
        onChange={handleAddressChange}
        className="w-full"
      >
        <Grid container>
          {addresses &&
            addresses.map((address, index) => (
              <Grid item xs={12} md={6} key={address._id}>
                {" "}
                {/* Changed xs and md */}
                <AddressCheckBox
                  address={address}
                  index={index}
                  user={user}
                  EditAddressModalOpen={EditAddressModalOpen}
                />
              </Grid>
            ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default AddressSelection;
