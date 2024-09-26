import React from "react";
import { Rating } from "@mui/material";
import { MyCardBox, MySecondaryBox } from "@/app/custom/MyBox";
import { useTranslations } from "next-intl";

const ServiceInfo = ({ service }) => {
  const t = useTranslations("service");
  return (
    <div>
      <MySecondaryBox className="mb-4 border border-gray-400 p-4 rounded-2xl">
        <h1 className="text-3xl font-bold mb-2 primary-text">
          {service.ServiceName}
        </h1>
        <p className="my-4">{service.ShortDesc}</p>
        <p className="my-4">{service.LongDesc}</p>
      </MySecondaryBox>
      <MyCardBox className="border border-gray-400 p-4 rounded-2xl">
        <h1 className="text-2xl primary-text font-semibold my-2">
          {t("info")} :{" "}
        </h1>
        <p className="text-sm">
          {t("provider")}: <strong>{service.ProviderName}</strong>
        </p>
        <p className="text-sm">
          {t("duration")}: <strong>{service.Duration}</strong>
        </p>
        <p className="text-sm">
          {t("members")}: <strong>{service.NoOfMembers}</strong>
        </p>
        <p className="text-sm">
          {t("available_in")}: <strong>{service.AvailableInNextDays}</strong>
        </p>
      </MyCardBox>

      <MyCardBox className=" my-4 border border-dashed border-gray-400 p-4 rounded-2xl">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">
            {t("price")}:{" "}
            <span className="primary-text">${service.DiscountedPrice}</span>
          </h2>
          <p className="text-sm">
            {t("actual_price")}:{" "}
            <span className=" line-through">${service.ActualPrice}</span>
          </p>
        </div>
        <div className="flex items-center my-4">
          <Rating
            name="read-only"
            value={service.AvgRatings}
            precision={0.5}
            readOnly
          />
          <span className="ml-2 text-sm">({service.ReviewsCount} reviews)</span>
        </div>
      </MyCardBox>
    </div>
  );
};

export default ServiceInfo;
