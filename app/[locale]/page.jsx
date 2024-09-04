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

export default function Home() {
  const t = useTranslations("home");

  // custom hook that return whole home screen
  const { data, loading } = useHomeScreen();

  document.title = `Home | ${WebName}`;

  return (
    <div>
      {/* Categories */}
      <div className="my-4">
        <Categories data={data?.categorys} loading={loading} />
        <Slider data={data?.swiper} loading={loading} />
        <TopProviders data={data?.top_categories} loading={loading} />
        <TopServices data={data?.top_services} loading={loading} />
        {/* subscriber */}
        <Subscribe t={t} />
        {/* Testomonials */}
        <Testimonials testimonials={data?.customer_reviews} loading={loading} />
      </div>
    </div>
  );
}
