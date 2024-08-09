"use client";

import Categories from "../components/home/Categories";
import Slider from "../components/home/Slider";
import { useEffect, useState } from "react";
import { getHomeScreen } from "../utils/HomeScreen";
import TopProviders from "../components/home/TopProviders";
import { useDispatch, useSelector } from "react-redux";
import { StoreHomeScreenData } from "../actions/action";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const homeScreen = useSelector((state) => state.homeScreen?.data || []);

  console.log("home screen from redux", homeScreen.length);

  async function getHomeScreenData() {
    try {
      const response = await getHomeScreen();
      dispatch(StoreHomeScreenData(response)); // Dispatching action to store data in Redux
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
