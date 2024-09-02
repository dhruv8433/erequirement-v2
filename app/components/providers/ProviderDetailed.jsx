import { MyPrimaryBox } from "@/app/custom/MyBox";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import { Grid, Rating } from "@mui/material";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const ProviderDetailed = ({ provider, loading, services, serviceLoading }) => {
  const locale = useLocale();
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {/* Breadcrumb */}
          <MyBreadcrumb
            title={provider.title}
            breadcrumbs={[
              { title: "Home", link: "/" },
              { title: "Top Providers", link: "./" },
              { title: provider.title, link: "/providers" },
            ]}
          />

          {/* Providers */}
          <Grid container>
            <Grid item xs={12} md={4}>
              <MyPrimaryBox className="m-2 rounded-2xl border border-gray-300 overflow-hidden hover:cursor-pointer group">
                <div className="card">
                  {/* banner image */}
                  {/* add other images here too */}
                  <div className="banner h-[300px] w-full overflow-hidden">
                    <img
                      src={provider.banner_image}
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                      alt={provider.title}
                    />
                  </div>
                  {/* logo image */}
                  <div className="logo h-[100px] flex justify-center relative -top-10">
                    <img
                      src={provider.logo_image}
                      className={`h-[100px] -mb-5 rounded-full border-4 bg-white w-[100px] p-4 object-cover scale-100`}
                      alt={provider.title}
                    />
                  </div>
                  {/* Provider info */}
                  <div className="my-1 text-center relative bottom-8">
                    <h1 className="text-2xl font-semibold primary-text">
                      {provider.title}
                    </h1>
                    <p className="text-xl">
                      {provider.order_complete} order completed
                    </p>
                    <p className="text-xl">
                      {provider.years_of_work} years of work
                    </p>
                  </div>
                </div>
              </MyPrimaryBox>
            </Grid>
            <Grid item xs={12} md={8}>
              <div className="provider-card border mx-1 rounded-2xl m-4 p-2">
                <div className="border p-4 rounded-2xl flex justify-between items-center m-2">
                  <h1>Services</h1>
                  <h1>About</h1>
                  <h1>Promo Code</h1>
                  <h1>Reviews</h1>
                </div>
                <div className="my-4">
                  <Grid container spacing={2}>
                    {serviceLoading ? (
                      <div>Loading...</div>
                    ) : (
                      services.map((service, index) => (
                        <Grid item xs={12} md={6} key={index}>
                          <Link href={`/${locale}/services/${service.serviceID}/${service.Slug}`}>
                            <div className="border m-2 flex rounded-2xl overflow-hidden">
                              <div className="serviceImg h-[200px] w-[200px] flex-shrink-0">
                                <img
                                  src={service.serviceImg}
                                  className="h-full w-full object-cover rounded-l-2xl"
                                  alt={service.ServiceName}
                                />
                              </div>
                              <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                  <h1 className="text-2xl font-semibold">
                                    {service.ServiceName}
                                  </h1>
                                  <p className="text-sm text-gray-600">
                                    {service.ShortDesc}
                                  </p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                  <Rating
                                    name={`rating-${index}`}
                                    value={service.AvgRatings}
                                    precision={0.5}
                                    readOnly
                                  />
                                  <button className="primary-bg text-white p-1 rounded-lg ">
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Grid>
                      ))
                    )}
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ProviderDetailed;
