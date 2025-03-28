import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useSelector } from "react-redux";
import { useCart } from "@/app/hooks/useCart";
import { MyBorderdButton, MyPrimaryButton } from "@/app/custom/MyButton";
import { useWishlist } from "@/app/hooks/useWishlist";

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
            data-aos="fade-up"
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
              data-aos="fade-up"
            />
          </div>
        ))}
      </div>
    </Box>
  );
};

const ServiceImages = ({ service, handleImageClick, selectedImage }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = isAuthenticated
    ? useSelector((state) => state.auth.user.user._id)
    : null;

  const { AddServiceToCart } = useCart(userId);
  const { handleAddWishlist } = useWishlist(service._id);

  const handleShare = async () => {
    const shareData = {
      title: service.ServiceName,
      text: `Check out this service: ${service.ServiceName}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error("Error sharing", error);
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard!");
    }
  };

  const theme = useTheme();

  return (
    <div className="relative">
      <div className="flex space-x-2 relative">
        <OtherImage
          xs={"none"}
          md={"block"}
          service={service}
          direction={"flex-col"}
          handleImageClick={handleImageClick}
        />
        <div className="w-full h-[400px] mb-4 relative">
          <img
            src={selectedImage ? selectedImage : service.serviceImg}
            alt={service.ServiceName}
            className="h-full w-full object-cover rounded-xl"
            data-aos="zoom-in"
          />
          {/* Move Share Icon to Image */}
          <IconButton
            className="absolute top-2 right-2  shadow-md rounded-full !z-20"
            style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: theme.palette.background.default}}
            onClick={handleShare}
          >
            <ShareOutlinedIcon />
          </IconButton>
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
        <MyPrimaryButton
          className="primary-bg text-white px-6 py-2 rounded-lg hover:bg-orange-500 w-full mt-4 self-start"
          onClickFunction={() => AddServiceToCart(service._id)}
          title={"Add to Cart"}
        />

        <MyBorderdButton
          className="border px-6 py-2 rounded-lg w-full mt-4 self-start"
          title={"Add to Wishlist"}
          onClickFunction={() => handleAddWishlist()}
        />
      </div>
    </div>
  );
};

export default ServiceImages;
