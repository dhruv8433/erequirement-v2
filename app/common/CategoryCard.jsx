import React from "react";
import Link from "next/link";
import { MyHoverCardBox } from "../custom/MyBox";
import { useLocale } from "next-intl";

const CategoryCard = ({ category }) => {
  const locale = useLocale();
  return (
    <Link href={`/${locale}/categories/${category.id}/${category.slug}`}>
      <MyHoverCardBox
        key={category.id}
        className="border-2 border-gray-700 p-3 m-3 rounded-2xl text-center group hover:pointer"
      >
        <img
          src={category.image}
          alt={category.name || "Category" + category.id}
          className="object-contain aspect-square h-[120px] w-full transition-transform duration-500 ease-in-out transform group-hover:scale-105"
        />
        <h1>{category.name}</h1>
      </MyHoverCardBox>
    </Link>
  );
};

export default CategoryCard;
