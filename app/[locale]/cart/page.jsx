"use client";

import toast from "react-hot-toast";
import { useLocale } from "next-intl";
import { useSelector } from "react-redux";
import Cart from "@/app/components/cart/Cart";
import React, { useEffect, useState } from "react";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import { getCart, RemoveService, UpdateQty } from "@/app/utils/CartService";
import { Modal } from "@mui/material";
import { MyCardBox } from "@/app/custom/MyBox";
import MyModal from "@/app/custom/MyModal";
import AddressModal from "@/app/model/AddressModal";

const page = () => {
  const locale = useLocale();

  const [cartData, setCartData] = useState([]);
  const [otherInfo, setOtherInfo] = useState([]);
  const user = useSelector((state) => state.auth.user.data.user);

  const [addressModal, setAddressModal] = useState(false);

  // function to fetch user cart
  async function fetchCartData() {
    try {
      const response = await getCart(user._id);
      console.log("cart items", response.data.service);
      setCartData(response.data.service);
      setOtherInfo(response.data);
    } catch (error) {
      console.error("Error fetching cart data", error);
    }
  }

  // function to remove items from user cart
  async function RemoveItemFromCart(serviceId) {
    try {
      const response = await RemoveService(user._id, serviceId);
      console.log("Item removed", response);
      // after remove service fetch updated cart data
      fetchCartData();
    } catch (error) {
      console.log("Error removing item", error);
    }
  }

  // function to update quantity of services in cart
  async function UpdateQuantityInCart(serviceId, qty) {
    try {
      if (qty == 0) {
        toast.error("Quantity can't be less than 1");
      }
      const response = await UpdateQty(user._id, serviceId, qty);
      console.log("Item updated", response);
      // after update service fetch updated cart data
      fetchCartData();
    } catch (error) {
      console.log("Error updating item", error);
      toast.error(error.response.data.errors);
    }
  }

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <div>
      {/* Breadcrumb */}
      <MyBreadcrumb
        title={"Cart"}
        breadcrumbs={[
          { title: "Home", link: `/` },
          { title: "Cart", link: `/${locale}/cart` },
        ]}
      />
      {/* cart with steppers */}
      <Cart
        cartData={cartData}
        otherCartInfo={otherInfo}
        onRemove={RemoveItemFromCart}
        onDecrement={UpdateQuantityInCart}
        onIncrement={UpdateQuantityInCart}
        addressModal={addressModal}
        setAddressModal={setAddressModal}
      />

      {/* Address Modal */}
      <MyModal open={addressModal} setOpen={setAddressModal}>
        <MyCardBox width={{ xs: "300px", md: "500px" }} className="rounded-2xl">
          <AddressModal setAddressModal={setAddressModal} />
        </MyCardBox>
      </MyModal>
    </div>
  );
};

export default page;
