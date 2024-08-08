import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div
      key={category.id}
      className="border-2 border-gray-700 p-3 rounded-2xl text-center hover:bg-white group hover:pointer"
    >
      <img
        src={category.image}
        alt={category.name}
        className="object-contain aspect-square h-[120px] w-full transition-transform duration-500 ease-in-out transform group-hover:scale-105"
      />
      <h1>{category.name}</h1>
    </div>
  );
};

export default CategoryCard;
