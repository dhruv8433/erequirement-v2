import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Rating } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import MyIconButton from "@/app/custom/MyIconButton";
import { useWishlist } from "@/app/hooks/useWishlist";
import { MyPrimaryButton } from "@/app/custom/MyButton";
import { MyCardBox, MyServiceCard } from "@/app/custom/MyBox";
import { useCart } from "@/app/hooks/useCart";

const ProvidersService = ({ service, index, isProfile }) => {
  const locale = useLocale();
  const { deleteWishlist } = useWishlist(service._id);

  const { AddServiceToCart } = useCart();

  return (
    <div data-aos="fade-up">
      {isProfile && (
        <MyCardBox className="relative top-14 ml-[80%] z-10 rounded-full w-min  ">
          <MyIconButton onClick={() => deleteWishlist()}>
            <DeleteOutline color="error" />
          </MyIconButton>
        </MyCardBox>
      )}
      <Link href={`/${locale}/services/${service.serviceID}/${service.Slug}`}>
        <MyServiceCard className="border m-2 rounded-2xl overflow-hidden max-h-[450px] h-full relative hover:shadow-lg transition-shadow duration-300 flex flex-col">
          {/* Service Image */}
          <div className="serviceImg h-[200px] w-full flex-shrink-0">
            <img
              src={service.serviceImg}
              className="h-full w-full object-cover rounded-t-2xl"
              alt={service.ServiceName}
            />
          </div>

          {/* Card Content */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-lg font-semibold truncate">
                {service.ServiceName}
              </h1>

              {/* Short Description (Limited to 1 Line) */}
              <p className="text-sm text-gray-600 truncate">
                {service.ShortDesc}
              </p>
            </div>

            {/* Rating and Add to Cart */}
            <div className="flex justify-between items-center mt-4">
              <Rating
                name={`rating-${index}`}
                value={service.AvgRatings}
                precision={0.5}
                readOnly
                size="small"
              />
            </div>
          </div>
        </MyServiceCard>
      </Link>
      <MyPrimaryButton
        className="text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition-colors relative bottom-12 ml-[75%]"
        title={"Add"}
        onClickFunction={() => AddServiceToCart(service._id)}
      />
    </div>
  );
};

export default ProvidersService;
