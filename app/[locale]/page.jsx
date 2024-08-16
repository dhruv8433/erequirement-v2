"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Slider from "../components/home/Slider";
import { getHomeScreen } from "../utils/HomeScreen";
import Subscribe from "../components/home/Subscribe";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/home/TopCategories";
import TopServices from "../components/home/TopServices";
import TopProviders from "../components/home/TopProviders";
import Testimonials from "../components/home/Testomonials";
import { setHomeScreenData } from "../reducer/homeScreenReducers";
import { WebName } from "../config/config";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const t = useTranslations("home");

  const homeScreen = useSelector((state) => state.homeScreen?.data || []);

  console.log("home screen from redux", homeScreen.length);

  async function getHomeScreenData() {
    try {
      const response = await getHomeScreen();
      dispatch(setHomeScreenData(response)); // Dispatching action to store data in Redux
      setData(response); // Local state update
    } catch (error) {
      console.log("error: " + error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  }

  function DecideSendRequestOrNot() {
    if (homeScreen.length === 0) {
      getHomeScreenData();
    } else {
      setData(homeScreen);
      setLoading(false); // Set loading to false if data is already in Redux
    }
  }

  useEffect(() => {
    DecideSendRequestOrNot();
  }, []);

  document.title = `Home | ${WebName}`;

  return (
    <div>
      {/* Categories */}
      <div className="my-4">
        <Categories data={data.categorys} loading={loading} />
        <Slider data={data.swiper} loading={loading} />
        <TopProviders data={data.top_categories} loading={loading} />
        <TopServices data={data.top_services} loading={loading} />
        {/* subscriber */}
        <Subscribe t={t} />
        {/* Testomonials */}
        <Testimonials testimonials={data.customer_reviews} loading={loading} />
      </div>
    </div>
  );
}
