"use client";

import { WebName } from "../config/config";
import { useTranslations } from "next-intl";
import Slider from "../components/home/Slider";
import Subscribe from "../components/home/Subscribe";
import { useHomeScreen } from "../hooks/useHomeScreen";
import TopServices from "../components/home/TopServices";
import Categories from "../components/home/TopCategories";
import TopProviders from "../components/home/TopProviders";
import Testimonials from "../components/home/Testomonials";
import { useEffect, useRef } from "react"; // Import useRef
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logoutFromRedux } from "../reducer/authReducer";

export default function Home() {
  const t = useTranslations("home");

  // Custom hook that returns the whole home screen
  const { data, loading } = useHomeScreen();
  const dispatch = useDispatch();
  const toastShownRef = useRef(false); // Create a ref to track toast display

  document.title = `Home | ${WebName}`;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get("error");

    // Check if the error is "not_authenticated" and if the toast hasn't been shown yet
    if (paramValue === "not_authenticated" && !toastShownRef.current) {
      console.log("not_authenticated");
      toast.error("You need to login to access this page");
      dispatch(logoutFromRedux());
      toastShownRef.current = true; // Mark the toast as shown
    }

    // If paramValue is not "not_authenticated", reset the ref to allow showing the toast again on next error
    if (paramValue !== "not_authenticated") {
      toastShownRef.current = false;
    }
  }, [dispatch]); // No need to include paramValue in dependencies

  return (
    <div>
      {/* Categories */}
      <div className="my-4">
        <Categories data={data?.categorys} loading={loading} />
        <Slider data={data?.swiper} loading={loading} />
        <TopProviders data={data?.top_categories} loading={loading} />
        <TopServices data={data?.top_services} loading={loading} />
        {/* Subscriber */}
        <Subscribe t={t} />
        {/* Testimonials */}
        <Testimonials testimonials={data?.customer_reviews} loading={loading} />
      </div>
    </div>
  );
}
