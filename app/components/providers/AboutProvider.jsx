"use client";

import React from "react";
import { MyCardBox, MyServiceCard } from "@/app/custom/MyBox";
import { useParams } from "next/navigation";
import { useProviders } from "@/app/hooks/useProviders";
import { MyHeading } from "@/app/custom/MyText";
import { Divider, Grid } from "@mui/material";
import {
  AccessTime,
  CollectionsOutlined,
  InfoOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { AboutProviderSkeleton } from "@/app/custom/CustomSkeleton";

const AboutProvider = () => {
  const { id } = useParams();

  // fetching single provider for about
  const { singleProvider, singleProviderLoading } = useProviders(id);

  return (
    <>
      {singleProviderLoading ? (
        <AboutProviderSkeleton />
      ) : (
        <MyCardBox className="about-provider p-4 rounded-2xl">
          <div className="provider-details">
            <MyHeading
              title={"About " + singleProvider?.title}
              className="text-2xl my-2"
            />
            <Divider />

            {/* location and time slot info in grid */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <MyServiceCard
                  height={{ xs: "auto", md: "200px" }}
                  className="p-4 rounded-2xl my-4"
                >
                  <div className="flex items-center gap-2">
                    <LocationOnOutlined fontSize="small" />{" "}
                    <MyHeading
                      title={"Location"}
                      className={"text-lg font-semibold"}
                    />
                  </div>
                  <p>
                    <strong>Location:</strong> {singleProvider?.location},
                    {singleProvider?.city}, {singleProvider?.country}
                  </p>
                  <p>
                    <strong>Service Area:</strong>{" "}
                    {singleProvider?.service_area}
                  </p>
                  <p>
                    <strong>Advance Booking Days:</strong>{" "}
                    {singleProvider?.advance_booking_days} days
                  </p>
                  <p>
                    <strong>Contact:</strong> {singleProvider?.contact}
                  </p>
                  <p>
                    <strong>Email:</strong> {singleProvider?.provider_email}
                  </p>
                </MyServiceCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <MyServiceCard className="p-4 rounded-2xl my-4 h-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <AccessTime fontSize="small" />{" "}
                    <MyHeading
                      title={"Time Slots"}
                      className={"text-lg font-semibold"}
                    />
                  </div>
                  <ul>
                    {singleProvider?.time_slots?.map((slot, index) => (
                      <li key={index}>{slot}</li>
                    ))}
                  </ul>
                </MyServiceCard>
              </Grid>
            </Grid>

            <div className="border rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <InfoOutlined fontSize="small" />{" "}
                <MyHeading
                  title={"Description"}
                  className={"text-lg font-semibold"}
                />
              </div>
              <p>{singleProvider?.small_description}</p>
              <br />
              <p>{singleProvider?.long_description}</p>
            </div>

            <div className="border my-4 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <InfoOutlined fontSize="small" />{" "}
                <MyHeading
                  title={"Social Media Links"}
                  className={"text-lg font-semibold"}
                />
              </div>
              <ul>
                <li>
                  <a
                    href={singleProvider?.social_media_links?.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={singleProvider?.social_media_links?.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href={singleProvider?.social_media_links?.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <MyServiceCard className="image-gallery p-4 rounded-2xl">
            <div className="flex items-center gap-2 mb-3">
              <CollectionsOutlined fontSize="small" />{" "}
              <MyHeading
                title={"Image Gallery"}
                className={"text-lg font-semibold"}
              />
            </div>
            <Grid container spacing={2}>
              {singleProvider?.multiple_imgs?.map((img, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  sm={6}
                  md={2}
                  className="flex items-center justify-center"
                >
                  <img
                    key={index}
                    src={img}
                    alt={`${singleProvider?.title} gallery ${index + 1}`}
                    className="h-40 w-40 object-cover rounded-2xl"
                  />
                </Grid>
              ))}
            </Grid>
          </MyServiceCard>
        </MyCardBox>
      )}
    </>
  );
};

export default AboutProvider;
