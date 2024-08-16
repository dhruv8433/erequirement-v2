import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  const locale = useLocale();
  return (
    <Link href={`${locale}/services/${service.serviceID}/${service.Slug}`}>
      {/* Container for the entire service card */}
      <div className="service-card m-4 border-2 rounded-2xl overflow-hidden relative group hover:cursor-pointer">
        {/* Container for the image and overlay */}
        <div className="h-[200px] relative overflow-hidden">
          {/* Image with scaling effect on hover */}
          <img
            src={service.serviceImg}
            className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            alt={service.name || "image" + service.id}
          />

          {/* Overlay with text, background fades on hover */}
          <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-40 group-hover:bg-transparent transition-all duration-300">
            {/* Service name with truncation and ellipsis if it overflows */}
            <h2 className="text-white text-lg font-bold px-2 truncate">
              {service.ServiceName}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
