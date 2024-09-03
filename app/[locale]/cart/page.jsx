"use client";

import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useSelector } from "react-redux";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import Cart from "@/app/components/cart/Cart";
import MyModal from "@/app/custom/MyModal";
import { MyCardBox } from "@/app/custom/MyBox";
import AddressModal from "@/app/model/AddressModal";


const Page = () => {
  const locale = useLocale();

  // Check if the user is authenticated
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Retrieve user information if authenticated
  const user = isAuthenticated
    ? useSelector((state) => state.auth.user.user)
    : null;


  // State to control the visibility of the address modal
  const [addressModal, setAddressModal] = useState(false);

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <MyBreadcrumb
        title={"Cart"}
        breadcrumbs={[
          { title: "Home", link: `/` },
          { title: "Cart", link: `/${locale}/cart` },
        ]}
      />

      {/* Cart Component with Steppers */}
      <Cart user={user} setAddressModal={setAddressModal}/>

      {/* Address Modal */}
      <MyModal open={addressModal} setOpen={setAddressModal}>
        <MyCardBox width={{ xs: "300px", md: "500px" }} className="rounded-2xl">
          <AddressModal
            setAddressModal={setAddressModal}
            user={user}
          />
        </MyCardBox>
      </MyModal>
    </div>
  );
};

export default Page;
