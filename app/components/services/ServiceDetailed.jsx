import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

const ServiceDetailed = ({ service, loading }) => {
  const [selectedImage, setSelectedImage] = useState(service.serviceImg);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="p-6">
      {loading ? (
        <h1 className="text-center text-2xl">Loading...</h1>
      ) : (
        service.map((service) => (
          <Grid
            container
            spacing={4}
            key={service.serviceID}
            className="rounded-2xl overflow-hidden"
          >
            <Grid item xs={12} md={6} className="">
              <div className="flex space-x-2">
                <div className="flex flex-col space-y-2">
                  <div className="flex space-y-2">
                    <div
                      className="w-20 h-20 cursor-pointer"
                      onClick={() => handleImageClick(service.serviceImg)}
                    >
                      <img
                        src={service.serviceImg}
                        alt={`${service.ServiceName}`}
                        className="h-full w-full object-cover rounded-xl border border-gray-400"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    {service.OtherImg.map((img, index) => (
                      <div
                        key={index}
                        className="w-20 h-20 cursor-pointer"
                        onClick={() => handleImageClick(img)}
                      >
                        <img
                          src={img}
                          alt={`${service.ServiceName} ${index + 1}`}
                          className="h-full w-full object-cover rounded-xl border border-gray-400"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full h-[400px] mb-4">
                  <img
                    src={selectedImage ? selectedImage : service.serviceImg}
                    alt={service.ServiceName}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <button className="primary-bg text-white px-6 py-2 rounded-lg hover:bg-orange-500 w-full mt-4 self-start">
                Add to Cart
              </button>
              <button className="text-white border border-gray-400 px-6 py-2 rounded-lg w-full mt-4 self-start">
                Share
              </button>
            </Grid>
            <Grid item xs={12} md={6} className="justify-between p-4">
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
                  Available In Next Days:{" "}
                  <strong>{service.AvailableInNextDays}</strong>
                </p>
              </div>

              <div className=" my-4 border border-gray-400 p-4 rounded-2xl">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold">
                    Price:{" "}
                    <span className="primary-text">
                      ${service.DiscountedPrice}
                    </span>
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
                  <span className="ml-2 text-sm">
                    ({service.ReviewsCount} reviews)
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} className="p-4">
              <div className="border border-gray-400 p-4 rounded-2xl mb-4">
                <h2
                  className="text-xl font-bold mb-2"
                  style={{ color: "#ff9a00" }}
                >
                  FAQs
                </h2>
                {service.Faqs.map((faq, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-semibold">
                      Q{index + 1}. {faq.question}
                    </h3>
                    <p>A. {faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="border border-gray-400 p-4 rounded-2xl">
                <h2
                  className="text-xl font-bold mb-2"
                  style={{ color: "#ff9a00" }}
                >
                  Tags
                </h2>
                <div className="flex flex-wrap space-x-2">
                  {service.Tags.map((tag, index) => (
                    <span
                      key={index}
                      className="tag primary-text font-semibold px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Grid>
          </Grid>
        ))
      )}
    </div>
  );
};

export default ServiceDetailed;
