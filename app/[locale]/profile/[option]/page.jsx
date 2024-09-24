"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Orders from "@/app/components/profile/Orders";
import { useSelector } from "react-redux";
import Address from "@/app/components/cart/Address";
import { Modal } from "@mui/material";
import AddressModal from "@/app/model/AddressModal";
import { MyCardBox } from "@/app/custom/MyBox";
import MyModal from "@/app/custom/MyModal";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import WishLists from "@/app/components/profile/WishLists";

const page = () => {
  const { option } = useParams();
  const userData = useSelector((state) => state.auth.user.user);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [addressModal, setAddressModal] = useState(false);
  const [initialData, setInitialData] = useState(null);

  async function openAddressModal(addressData = null) {
    setInitialData(addressData);
    console.log("address recived", addressData);
    setAddressModal(true);
  }

  const router = useRouter();
  const locale = useLocale();

  if (option === "" || option === "orders") {
    // user orders page
    return <Orders userId={userData._id} />;
  } else if (option === "addresses") {
    // address management
    return (
      <>
        <Address
          user={userData._id}
          selectedAddress={selectedAddress}
          setAddressModal={openAddressModal}
          setSelectedAddress={setSelectedAddress}
          isProfilePage={true}
        />
        <MyModal open={addressModal} setOpen={setAddressModal}>
          <MyCardBox
            width={{ xs: "300px", md: "500px" }}
            className="rounded-2xl"
          >
            <AddressModal
              user={userData}
              address={initialData}
              setAddressModal={setAddressModal}
            />
          </MyCardBox>
        </MyModal>
      </>
    );
  } else if (option === "wishlists") {
    // whishlist services
    return <WishLists />;
  } else {
    router.replace(`/${locale}/profile`);
  }
};

export default page;
