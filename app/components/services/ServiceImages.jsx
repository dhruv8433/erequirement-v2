import { AddToCart } from "@/app/utils/CartService";
import { Box } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const OtherImage = ({
  xs,
  md,
  direction,
  service,
  responsive,
  handleImageClick,
}) => {
  return (
    <Box
      display={{ xs: xs, md: md }}
      className={`flex ${direction} ${
        responsive ? "space-x-2" : "space-y-2"
      } items-center`}
    >
      <div className="flex space-y-2">
        <div
          className="w-20 h-20 cursor-pointer"
          onClick={() => handleImageClick(service.serviceImg)}
        >
          <img
            src={service.serviceImg}
            alt={`${service.ServiceName}`}
            className="h-full w-full object-cover rounded-xl border border-gray-400"
          />
        </div>
      </div>
      <div
        className={`flex ${direction} ${
          responsive ? "space-x-2" : "space-y-2"
        }`}
      >
        {service.OtherImg.map((img, index) => (
          <div
            key={index}
            className="w-20 h-20 cursor-pointer"
            onClick={() => handleImageClick(img)}
          >
            <img
              src={img}
              alt={`${service.ServiceName} ${index + 1}`}
              className="h-full w-full object-cover rounded-xl border border-gray-400"
            />
          </div>
        ))}
      </div>
    </Box>
  );
};

const ServiceImages = ({ service, handleImageClick, selectedImage }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = isAuthenticated ? useSelector((state) => state.auth.user.user._id) : null;

  console.log("service", service);

  async function AddItemsToCart() {
    try {
      const response = await AddToCart(userId, service._id);
      console.log("success", response);
      toast.success(response.message);
    } catch (err) {
      console.log("Error", err);
    }
  }

  return (
    <div>
      <div className="flex space-x-2">
        <OtherImage
          xs={"none"}
          md={"block"}
          service={service}
          direction={"flex-col"}
          handleImageClick={handleImageClick}
        />
        <div className="w-full h-[400px] mb-4">
          <img
            src={selectedImage ? selectedImage : service.serviceImg}
            alt={service.ServiceName}
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
      </div>
      <OtherImage
        xs={"flex"}
        md={"none"}
        service={service}
        direction={"flex-row"}
        responsive={true}
        handleImageClick={handleImageClick}
      />

      <div className="buttons">
        <button
          className="primary-bg text-white px-6 py-2 rounded-lg hover:bg-orange-500 w-full mt-4 self-start"
          onClick={() => AddItemsToCart()}
        >
          Add to Cart
        </button>
        <button className="border border-gray-400 px-6 py-2 rounded-lg w-full mt-4 self-start">
          Share
        </button>
      </div>
    </div>
  );
};

export default ServiceImages;
