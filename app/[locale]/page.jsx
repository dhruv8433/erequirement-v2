"use client";

import { WebName } from "../config/config";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Slider from "../components/home/Slider";
import { getHomeScreen } from "../utils/HomeScreen";
import Subscribe from "../components/home/Subscribe";
import Categories from "../components/home/TopCategories";
import TopServices from "../components/home/TopServices";
import TopProviders from "../components/home/TopProviders";
import Testimonials from "../components/home/Testomonials";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const t = useTranslations("home");

  async function getHomeScreenData() {
    try {
      const response = await getHomeScreen();
      setData(response); // Local state update
    } catch (error) {
      console.log("error: " + error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  }

  useEffect(() => {
    getHomeScreenData();
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
