import React from "react";
import {
  Radio,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Grid,
} from "@mui/material";

const AddressSelection = ({
  selectedAddress,
  setSelectedAddress,
  handleAddressChange,
}) => {
  // TODO Add real time address from api
  const addresses = [
    {
      id: "home",
      main: "123 Home Street",
      stateCountry: "City, State, Country",
      postalCode: "123456",
    },
    {
      id: "office",
      main: "456 Office Avenue",
      stateCountry: "City, State, Country",
      postalCode: "789101",
    },
    {
      id: "other",
      main: "789 Other Road",
      stateCountry: "City, State, Country",
      postalCode: "112131",
    },
  ];

  return (
    <FormControl component="fieldset" className="w-full my-4">
      <Grid container>
        <RadioGroup
          value={selectedAddress}
          onChange={handleAddressChange}
          className="w-full"
        >
          {addresses.map((address) => (
            <Grid item xs={12} md={6}>
              <div className="p-5 border rounded-2xl m-2">
                <FormControlLabel
                  key={address.id}
                  value={address.id}
                  control={<Radio />}
                  label={
                    <div className="">
                      <div className="font-semibold text-lg">
                        {address.main}
                      </div>
                      <div className="text-sm text-gray-600">
                        {address.stateCountry}
                      </div>
                      <div className="text-sm text-gray-600">
                        {address.postalCode}
                      </div>
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
