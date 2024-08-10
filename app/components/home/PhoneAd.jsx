import React from "react";
import Grid from "@mui/material/Grid";
import PhoneImage from "@/app/assets/phone.jpg";
import BuildIcon from "@mui/icons-material/Build";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const PhoneAd = () => {
  return (
    <div className="p-6">
      <Grid container spacing={4}>
        {/* Left Side: Mobile Phone Image */}
        <Grid item xs={12} md={4}>
          <div className="flex justify-center md:justify-start">
            <img
              src={PhoneImage.src}
              alt="Phone Advertisement"
              className="w-full max-w-sm rounded-lg"
            />
          </div>
        </Grid>

        {/* Right Side: Information and Subscription */}
        <Grid item xs={12} md={8}>
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-5xl font-bold text-gray-800 my-8">
              All Your Requirements in One Place
            </h1>
            <p className="text-gray-600 mb-4">
              Discover the ultimate convenience with our service-based website,
              where all home-related services can be found in a single place.
              Whether you need plumbing, electrical work, cleaning, or
              renovation services, we've got you covered.
            </p>
            <p className="text-gray-600 mb-6">
              Subscribe now to stay updated on the latest services and offers!
            </p>

            {/* Subscription Form */}
            <div className="flex mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-l-lg border border-gray-300 flex-grow"
              />
              <button className="p-3 bg-orange-500 text-white font-semibold rounded-r-lg hover:bg-orange-600 transition duration-300">
                Subscribe
              </button>
            </div>

            {/* Additional Content */}
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                Why Choose Us?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="bg-white w-max p-1 rounded-md">
                    <CheckCircleIcon className="text-orange-500" />
                  </div>
                  <span className="text-gray-600 ml-2">
                    Wide range of services
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="bg-white w-max p-1 rounded-md">
                    <BuildIcon className="text-orange-500" />
                  </div>
                  <span className="text-gray-600 ml-2">
                    Highly skilled professionals
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="bg-white w-max p-1 rounded-md">
                    <AttachMoneyIcon className="text-orange-500" />
                  </div>
                  <span className="text-gray-600 ml-2">Affordable pricing</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-white w-max p-1 rounded-md">
                    <SpeedIcon className="text-orange-500" />
                  </div>
                  <span className="text-gray-600 ml-2">
                    Quick and reliable service
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PhoneAd;
