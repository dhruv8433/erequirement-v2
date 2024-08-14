import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import ServiceInfo from "./ServiceInfo";
import ServiceFaqs from "./ServiceFaqs";
import Rating from "@mui/material/Rating";
import ServiceImages from "./ServiceImages";
import { ServiceDetailedSkeleton } from "@/app/common/CustomSkeleton";

const ServiceDetailed = ({ service, loading }) => {
  const [selectedImage, setSelectedImage] = useState(service.serviceImg);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="p-6">
      {loading ? (
        <ServiceDetailedSkeleton />
      ) : (
        service.map((service) => (
          <Grid
            container
            spacing={4}
            key={service.serviceID}
            className="rounded-2xl overflow-hidden"
          >
            <Grid item xs={12} md={6} className="">
              <ServiceImages
                service={service}
                selectedImage={selectedImage}
                handleImageClick={handleImageClick}
              />
            </Grid>
            <Grid item xs={12} md={6} className="justify-between p-4">
              <ServiceInfo service={service} />
            </Grid>
            <Grid item xs={12} className="p-4">
              <ServiceFaqs service={service} />
            </Grid>
          </Grid>
        ))
      )}
    </div>
  );
};

export default ServiceDetailed;
