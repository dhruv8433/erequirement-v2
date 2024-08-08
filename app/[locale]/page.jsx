"use client";

import Categories from "../components/home/Categories";
import Slider from "../components/home/Slider";
import { useEffect, useState } from "react";
import { getHomeScreen } from "../utils/HomeScreen";
import TopProviders from "../components/home/TopProviders";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getHomeScreenData() {
    try {
      const response = await getHomeScreen();
      setLoading(false);
      setData(response);
    } catch (error) {
      console.log("error: " + error);
    }
  }

  useEffect(() => {
    getHomeScreenData();
  }, []);

  return (
    <div>
      {/* Categories */}
      <div className="my-4">
        <Categories data={data.categorys} loading={loading} />
        <Slider data={data.swiper} loading={loading} />
        <TopProviders data={data.top_categories} loading={loading} />
      </div>
    </div>
  );
}
