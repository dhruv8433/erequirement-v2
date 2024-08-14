import { Rating } from "@mui/material";
import React from "react";

const ServiceInfo = ({ service }) => {
  return (
    <div>
      <div className="mb-4 border border-gray-400 p-4 rounded-2xl">
        <h1 className="text-3xl font-bold mb-2 primary-text">
          {service.ServiceName}
        </h1>
        <p className="my-4">{service.ShortDesc}</p>
        <p className="my-4">{service.LongDesc}</p>
      </div>
      <div className="border border-gray-400 p-4 rounded-2xl">
        <h1 className="text-2xl primary-text font-semibold my-2">
          Provider Info :{" "}
        </h1>
        <p className="text-sm">
          Provider: <strong>{service.ProviderName}</strong>
        </p>
        <p className="text-sm">
          Duration: <strong>{service.Duration}</strong>
        </p>
        <p className="text-sm">
          Members Required: <strong>{service.NoOfMembers}</strong>
        </p>
        <p className="text-sm">
          Available In Next Days: <strong>{service.AvailableInNextDays}</strong>
        </p>
      </div>

      <div className=" my-4 border border-gray-400 p-4 rounded-2xl">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">
            Price:{" "}
            <span className="primary-text">${service.DiscountedPrice}</span>
          </h2>
          <p className="text-sm line-through">
            Actual Price: ${service.ActualPrice}
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
      </div>
    </div>
  );
};

export default ServiceInfo;
