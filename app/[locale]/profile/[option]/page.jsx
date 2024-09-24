"use client";

import { useLocale } from "next-intl";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Orders from "@/app/components/profile/Orders";
import WishLists from "@/app/components/profile/WishLists";
import ProfileAddress from "@/app/components/profile/ProfileAddress";
import ProfileReviews from "@/app/components/profile/ProfileReviews";

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
      <ProfileAddress
        addressModal={addressModal}
        initialData={initialData}
        openAddressModal={openAddressModal}
        selectedAddress={selectedAddress}
        setAddressModal={setAddressModal}
        setSelectedAddress={setSelectedAddress}
        userData={userData}
      />
    );
  } else if (option === "wishlists") {
    // whishlist services
    return <WishLists />;
  } else if (option === "reviews") {
    // reviews
    return <ProfileReviews />;
  } else {
    router.replace(`/${locale}/profile`);
  }
};

export default page;
