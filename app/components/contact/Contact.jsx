"use client";

import React from "react";
import { Grid } from "@mui/material";
import { MyCardBox, MySecondaryBox } from "@/app/custom/MyBox";
import Spline from "@splinetool/react-spline";
import { MyPrimaryText } from "@/app/custom/MyText";
import { MyColoredInput, MyTextArea } from "@/app/custom/MyInput";
import { MyPrimaryButton } from "@/app/custom/MyButton";
import {
  EmailOutlined,
  PhoneOutlined,
  PlaceOutlined,
} from "@mui/icons-material";
import { useContact } from "@/app/hooks/useContact"; // Ensure the correct path

const Contact = () => {
  const { ContactToUs, setContactData } = useContact(); // Destructure the hook

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    ContactToUs(); // Invoke the contact action
  };

  // Handle input changes to update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div data-aos="fade-up">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <MySecondaryBox className="p-4 rounded-2xl">
            <h1 className="text-6xl text-wrap font-semibold" data-aos="fade-up">
              Get In Touch!
            </h1>
            <div className="form my-10">
              <form onSubmit={handleSubmit}>
                <div className="my-3 rounded">
                  <MyPrimaryText title={"Your Name"} className={"my-2"} />
                  <MyColoredInput
                    type={"text"}
                    name="name" // Name attribute for state binding
                    inputClass={"p-2 rounded"}
                    placeholder={"Enter Your Name"}
                    className={"border"}
                    onChange={handleChange} // Update state on change
                  />
                </div>
                <div className="my-3 rounded">
                  <MyPrimaryText title={"Your Email"} className={"my-2"} />
                  <MyColoredInput
                    type={"email"} // Use type email for validation
                    name="email"
                    inputClass={"p-2 rounded"}
                    placeholder={"Enter Your Email"}
                    className={"border"}
                    onChange={handleChange}
                  />
                </div>
                <div className="my-3 rounded">
                  <MyPrimaryText title={"Your Subject"} className={"my-2"} />
                  <MyColoredInput
                    type={"text"}
                    name="subject"
                    inputClass={"p-2 rounded"}
                    placeholder={"Enter Subject"}
                    className={"border"}
                    onChange={handleChange}
                  />
                </div>
                <div className="my-3 rounded">
                  <MyPrimaryText title={"Your Message"} className={"my-2"} />
                  <MyTextArea
                    name="message" // Bind the textarea
                    placeholder={"Enter Your Message"}
                    className={"border rounded"}
                    cols={10}
                    onChange={handleChange}
                  />
                </div>
                <MyPrimaryButton
                  title={"Send Message"}
                  className="mt-6 w-full p-3 rounded"
                  onClickFunction={handleSubmit} // Trigger form submission
                />
              </form>
            </div>
          </MySecondaryBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid item xs={12} data-aos="fade-up">
            <Spline
              scene="https://prod.spline.design/k1vod-zEg4plR6Ce/scene.splinecode"
              className="rounded-2xl"
            />
          </Grid>
          <Grid item xs={12}>
            <MyCardBox className="my-5 p-3 rounded-2xl">
              <div className="info my-2" data-aos="fade-up">
                <div className="flex items-center gap-5">
                  <div className="icon p-2 primary-bg rounded">
                    <PlaceOutlined className="text-white" />
                  </div>
                  <div className="info" data-aos="fade-up">
                    <h1 className="text-xl font-semibold">Location</h1>
                    <p className="text-lg">Las Vegas, NV, USA</p>
                  </div>
                </div>
              </div>
              <div className="info my-2" data-aos="fade-up">
                <div className="flex items-center gap-5">
                  <div className="icon p-2 primary-bg rounded">
                    <EmailOutlined className="text-white" />
                  </div>
                  <div className="info" data-aos="fade-up">
                    <h1 className="text-xl font-semibold">Email</h1>
                    <p className="text-lg">erequirement-support@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="info my-2" data-aos="fade-up">
                <div className="flex items-center gap-5">
                  <div className="icon p-2 primary-bg rounded">
                    <PhoneOutlined className="text-white" />
                  </div>
                  <div className="info" data-aos="fade-up">
                    <h1 className="text-xl font-semibold">Phone</h1>
                    <p className="text-lg">+1 1234567890</p>
                  </div>
                </div>
              </div>
            </MyCardBox>
          </Grid>
        </Grid>
      </Grid>
      <div className="map my-6" data-aos="zoom-out">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206252.80376346345!2d-115.33980707700024!3d36.125164460739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sin!4v1725680446186!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl active:border-none"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
