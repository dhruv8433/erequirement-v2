import { MySecondaryBox } from "@/app/custom/MyBox";
import MyContainer from "@/app/custom/MyContainer";
import { WebName } from "@/app/config/config";
import Routes from "@/app/Routes/Routes";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Divider, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <MySecondaryBox>
      <MyContainer>
        <div className="p-3">
          <h1 className="text-2xl font-semibold ml-2 my-3">{WebName}</h1>
          <Divider />
        </div>
        <div className="p-3">
          <Grid container>
            <Grid item xs={12} md={4}>
              <div className="px-3">
                <h1 className="my-4 text-xl font-medium">About us</h1>
                <p>
                  At ERequirement, you can find all the service related to home.
                  we can provide home cleaning, laundry, electric repair,
                  carpenter, plumber, electrician, and many more services.
                  basically, it is the one place where you can find all services
                  related to home.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="px-3 my-4">
                <h1 className="my-4 text-xl font-medium">Quick Links</h1>
                <Routes />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="px-3 my-4">
                <h1 className="my-4 text-xl font-medium">Contact US</h1>
                <ul className="space-y-2">
                  <li className="text-gray-400">
                    1234 Market St, San Francisco, CA
                  </li>
                  <li className="text-gray-400">
                    Email: support@ecommerce.com
                  </li>
                  <li className="text-gray-400">Phone: +1 (555) 123-4567</li>
                  <div className="icons">
                    <li>
                      <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-gray-300">
                          <Facebook />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                          <Twitter />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                          <Instagram />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                          <LinkedIn />
                        </a>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
        <Divider />
        <div className="py-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} E-Requirement. All rights
            reserved.
          </p>
        </div>
      </MyContainer>
    </MySecondaryBox>
  );
};

export default Footer;
