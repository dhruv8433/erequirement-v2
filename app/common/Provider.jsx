import { Divider } from "@mui/material";
import React from "react";
import { myPrimaryColor } from "../config/config";

const Provider = ({ provider }) => {
  return (
    <div className="m-2 rounded-2xl border border-gray-300 overflow-hidden hover:cursor-pointer hover:bg-white group">
      <div className="card">
        {/* banner image */}
        <div className="banner h-[200px] w-full overflow-hidden">
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
            className={`h-[100px] -mb-5 rounded-full border-4 border-[${myPrimaryColor}] bg-white w-[100px] p-4 object-cover scale-100`}
            alt={provider.title}
          />
        </div>
        {/* Provider info */}
        <div className="my-1 text-center relative bottom-8">
          <h1 className="font-xl font-semibold">{provider.title}</h1>
          <p>{provider.order_complete} order completed</p>
          <p>{provider.years_of_work} years of work</p>
        </div>

        <Divider />

        <div
          className={`view-more btn text-center p-2 hover:bg-[${myPrimaryColor}] hover:text-white`}
        >
          <p>view more</p>
        </div>
      </div>
    </div>
  );
};

export default Provider;