import { useWishlist } from "@/app/hooks/useWishlist";
import React from "react";
import ProfileHeading from "./ProfileHeading";
import { useTranslations } from "next-intl";
import { MyCardBox } from "@/app/custom/MyBox";
import { Grid } from "@mui/material";
import { ProviderServiceSkeleton } from "@/app/custom/CustomSkeleton";
import ProvidersService from "../providers/ProvidersService";
import { useSelector } from "react-redux";

const WishLists = () => {
  const t = useTranslations("profile");
  const { wishlists, wishlistsLoading } = useWishlist();

  const allWishLists = useSelector((state) => state.wishlist.wishlists);

  return (
    <MyCardBox className="p-4 rounded-2xl">
      <ProfileHeading heading={t("wishlists")} />

      {/* services cards */}
      <div className="my-4">
        <Grid container spacing={2}>
          {wishlistsLoading
            ? Array.from({ length: 6 }, (_, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <ProviderServiceSkeleton />
                </Grid>
              ))
            : allWishLists.map((service, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <div key={index}>
                    <ProvidersService
                      index={index}
                      service={service.product}
                      isProfile={true}
                    />
                  </div>
                </Grid>
              ))}
        </Grid>
      </div>
    </MyCardBox>
  );
};

export default WishLists;
