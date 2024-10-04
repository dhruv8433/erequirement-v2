import { useWishlist } from "@/app/hooks/useWishlist";
import React from "react";
import { Grid, Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import FavImage from "@/app/assets/fav.png";
import { useLocale, useTranslations } from "next-intl";
import ProfileHeading from "./ProfileHeading";
import { MyCardBox } from "@/app/custom/MyBox";
import ProvidersService from "../providers/ProvidersService";
import { ProviderServiceSkeleton } from "@/app/custom/CustomSkeleton";
import { MyBorderdButton } from "@/app/custom/MyButton";
import Link from "next/link";

const WishLists = () => {
  const t = useTranslations("profile");
  const { wishlists, wishlistsLoading, setPage } = useWishlist();

  const allWishLists = useSelector(
    (state) => state.wishlist.wishlists.wishlist.services
  );
  const wishlistInfo = useSelector((state) => state.wishlist.wishlists);
  console.log("all ", allWishLists);
  const locale = useLocale();

  return (
    <MyCardBox className="p-5 rounded-2xl">
      <ProfileHeading heading={t("wishlists")} />

      {/* services cards */}
      <div className="my-4">
        <Grid container spacing={2}>
          {wishlistsLoading ? (
            Array.from({ length: 6 }, (_, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <ProviderServiceSkeleton />
              </Grid>
            ))
          ) : allWishLists.length > 0 ? (
            <>
              {allWishLists.map((service, index) => (
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
              <br />
              <div className="w-full flex justify-center">
                <Pagination
                  count={wishlistInfo.totalPages} // Use totalPages from the wishlistInfo state
                  color="primary"
                  onChange={(event, value) => setPage(value)} // Update the page on pagination change
                  page={wishlistInfo.offset + 1} // Set the current active page
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center min-h-[620px] text-center items-center w-full">
              <img
                src={FavImage.src}
                alt=""
                srcset=""
                className="h-48 w-48 text-center"
              />
              <h1 className="text-center">{t("no_wishlist")}</h1>
              <Link href={`/${locale}/providers`}>
                <MyBorderdButton
                  title={t("explore_now")}
                  className="text-center my-3 w-max flex justify-center p-1 px-2"
                />
              </Link>
            </div>
          )}
        </Grid>
      </div>
    </MyCardBox>
  );
};

export default WishLists;
