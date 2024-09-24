import React from "react";
import Address from "../cart/Address";
import MyModal from "@/app/custom/MyModal";
import { MyCardBox } from "@/app/custom/MyBox";
import AddressModal from "@/app/model/AddressModal";
import ProfileHeading from "./ProfileHeading";
import { useTranslations } from "next-intl";

const ProfileAddress = ({
  userData,
  selectedAddress,
  setAddressModal,
  addressModal,
  setSelectedAddress,
  initialData,
  openAddressModal,
}) => {
  const t = useTranslations("profile");
  return (
    <MyCardBox className="p-5 rounded-2xl">
      <ProfileHeading heading={t("addresses")} />
      <Address
        user={userData._id}
        selectedAddress={selectedAddress}
        setAddressModal={openAddressModal}
        setSelectedAddress={setSelectedAddress}
        isProfilePage={true}
      />
      <MyModal open={addressModal} setOpen={setAddressModal}>
        <MyCardBox width={{ xs: "300px", md: "500px" }} className="rounded-2xl">
          <AddressModal
            user={userData}
            address={initialData}
            setAddressModal={setAddressModal}
          />
        </MyCardBox>
      </MyModal>
    </MyCardBox>
  );
};

export default ProfileAddress;
