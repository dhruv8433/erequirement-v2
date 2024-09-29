"use client";

import React from "react";
import { Grid } from "@mui/material";
import { MyCardBox, MySecondaryBox } from "@/app/custom/MyBox";

// Make Dynamic later on...
const About = () => {
  return (
    <div className="my-5">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {/* intro */}
          <MySecondaryBox
            className="intro text-start rounded-2xl p-4"
            data-aos="fade-up"
          >
            <h1 className="text-xl primary-text" data-aos="fade-up">
              How it Started?
            </h1>
            <h1
              className="text-6xl text-wrap mt-4 font-semibold"
              data-aos="fade-up"
            >
              All Your Requirements in One Place
            </h1>
            <div className="other mt-16">
              <p className="my-4" data-aos="fade-up">
                At eRequirement, we pride ourselves on being a forward-thinking
                company committed to providing businesses with innovative and
                customized solutions. Whether you are a small startup or a large
                enterprise, we understand that every business has unique needs.
                Our mission is to streamline your processes, boost your
                operational efficiency, and help you achieve sustainable growth
                through tailored services and expert guidance.
              </p>
              <p className="mt-2" data-aos="fade-up">
                With the business landscape constantly evolving,we recognize the
                importance of staying ahead of the curve. That’s why we leverage
                cutting-edge technology, best practices, and industry insights
                to provide you with services that meet the demands of today’s
                competitive market. Our team is composed of highly skilled
                professionals who are dedicated to delivering the best possible
                results for your business, no matter the scale or complexity of
                your requirements. we believe that success is built on
                collaboration. We work closely with our clients to understand
                their business goals, challenges, and visions for the future.
              </p>
            </div>
          </MySecondaryBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid item xs={12}>
            <div
              className="image object-contain h-96 rounded-2xl"
              data-aos="zoom-in"
            >
              {/* animation */}
              {/* <Lottie animationData={AboutAnimation} /> */}
              <img
                src={
                  "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?t=st=1725629270~exp=1725632870~hmac=cf2d6e51ff0789cc435d00347fb39802ca08d73d87032837fa86af066d8381c1&w=1380"
                }
                className="h-full w-full rounded-2xl"
                alt=""
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="mini-cards my-5">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <MyCardBox
                    className="card border p-2 rounded-2xl"
                    data-aos="fade-up"
                  >
                    <h1 className="font-semibold text-4xl">3.5</h1>
                    <h1>years of experience</h1>
                  </MyCardBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MyCardBox
                    className="card border p-2 rounded-2xl"
                    data-aos="fade-up"
                  >
                    <h1 className="font-semibold text-4xl">20+</h1>
                    <h1>Service Providers</h1>
                  </MyCardBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MyCardBox
                    className="card border p-2 rounded-2xl"
                    data-aos="fade-up"
                  >
                    <h1 className="font-semibold text-4xl">100+</h1>
                    <h1>Services</h1>
                  </MyCardBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MyCardBox
                    className="card border p-2 rounded-2xl"
                    data-aos="fade-up"
                  >
                    <h1 className="font-semibold text-4xl">1K+</h1>
                    <h1>Happy Customers</h1>
                  </MyCardBox>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
