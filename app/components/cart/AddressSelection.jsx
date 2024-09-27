import React from "react";
import AddressCheckBox from "./AddressCheckBox";
import NoAddressImg from "@/app/assets/address.png";
import { FormControl, RadioGroup, Grid } from "@mui/material";
import { useTranslations } from "next-intl";

const AddressSelection = ({
  user,
  selectedAddress,
  handleAddressChange,
  addresses,
  EditAddressModalOpen,
}) => {
  const t = useTranslations("profile");
  console.log("address from profile", addresses);
  return (
    <FormControl component="fieldset" className="w-full my-4">
      <RadioGroup
        value={selectedAddress.toString()} // Ensure the value matches the selected index
        onChange={handleAddressChange}
        className="w-full"
      >
        <Grid container>
          {addresses && addresses.length > 0 ? (
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
            ))
          ) : (
            <div className="w-full flex flex-col justify-center items-center text-center">
              <img src={NoAddressImg.src} className="h-48 w-48" alt="" />
              <h1>{t("no_address")}</h1>
            </div>
          )}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};

export default AddressSelection;
