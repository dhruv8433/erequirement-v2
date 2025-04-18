"use client";

import React from "react";
import { Grid, IconButton, useTheme } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share"; // Import Share Icon
import { useParams, usePathname } from "next/navigation";
import { useProviders } from "@/app/hooks/useProviders";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import { MyCardBox } from "@/app/custom/MyBox";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  BreadCrumbSkeleton,
  ProviderDetailedSkeleton,
} from "@/app/custom/CustomSkeleton";

const Layout = ({ children }) => {
  const { id } = useParams();
  const { singleProvider, singleProviderLoading } = useProviders(id);
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("providers");
  const theme = useTheme();

  // Share function
  const handleShare = async () => {
    const shareData = {
      title: singleProvider.title,
      text: `Check out ${singleProvider.title}`,
      url: window.location.href, // Get current page URL
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div>
      {singleProviderLoading ? (
        <BreadCrumbSkeleton />
      ) : (
        <MyBreadcrumb
          title={singleProvider.title}
          breadcrumbs={[
            { title: t("home"), link: `/${locale}` },
            { title: t("top_providers"), link: `/${locale}/providers` },
            { title: singleProvider.title, link: "" },
          ]}
          activeIndex={2}
        />
      )}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          {singleProviderLoading ? (
            <ProviderDetailedSkeleton />
          ) : (
            <MyCardBox className="rounded-2xl border border-gray-300 overflow-hidden hover:cursor-pointer group" data-aos="zoom-in">
              <div className="relative">
                {/* Banner Image */}
                <div className="banner h-[300px] w-full overflow-hidden relative">
                  <img
                    src={singleProvider.banner_image}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                    alt={singleProvider.title}
                  />
                  {/* Share Button on top-right */}
                  <IconButton
                    onClick={handleShare}
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: theme.palette.background.default,
                    }}
                  >
                    <ShareIcon />
                  </IconButton>
                </div>

                {/* Logo Image */}
                <div className="logo h-[100px] flex justify-center relative -top-10">
                  <img
                    src={singleProvider.logo_image}
                    className="h-[100px] -mb-5 rounded-full border-4 bg-white w-[100px] p-4 object-cover scale-100"
                    alt={singleProvider.title}
                  />
                </div>

                {/* Provider Info */}
                <div className="my-1 text-center relative bottom-8">
                  <h1 className="text-2xl font-semibold primary-text">
                    {singleProvider.title}
                  </h1>
                  <p className="text-xl">
                    {singleProvider.order_complete} orders completed
                  </p>
                  <p className="text-xl">
                    {singleProvider.years_of_work} years of work
                  </p>
                </div>
              </div>
            </MyCardBox>
          )}
        </Grid>

        <Grid item xs={12} md={8}>
          <div>
            <div className="border p-4 rounded-2xl flex justify-between items-center primary-bg mb-4">
              {/* Provider Services */}
              <Link
                href={`/${locale}/providers/${singleProvider.id}/${singleProvider.slug}`}
                className={`${
                  pathname === `/${locale}/providers/${singleProvider.id}/${singleProvider.slug}`
                    ? "bg-white text-bold primary-text px-2 py-1 rounded-md"
                    : "text-black"
                }`}
              >
                <h1>{t("services")}</h1>
              </Link>

              {/* About Provider */}
              <Link
                href={`/${locale}/providers/${singleProvider.id}/${singleProvider.slug}/about`}
                className={`${
                  pathname === `/${locale}/providers/${singleProvider.id}/${singleProvider.slug}/about`
                    ? "bg-white text-bold primary-text px-2 py-1 rounded-md"
                    : "text-black"
                }`}
              >
                <h1>{t("about")}</h1>
              </Link>

              {/* Provider Reviews */}
              <Link
                href={`/${locale}/providers/${singleProvider.id}/${singleProvider.slug}/reviews`}
                className={`${
                  pathname === `/${locale}/providers/${singleProvider.id}/${singleProvider.slug}/reviews`
                    ? "bg-white text-bold primary-text px-2 py-1 rounded-md"
                    : "text-black"
                }`}
              >
                <h1>{t("reviews")}</h1>
              </Link>
            </div>
            {/* Dynamic children come here */}
            <div className="my-2">{children}</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
