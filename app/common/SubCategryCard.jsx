import React from "react";
import { MyCardBox } from "./MyBox";

const SubCategryCard = ({ subcategory }) => {
  return (
    <MyCardBox className="m-2 p-4 rounded-2xl border">
      <div className=" h-[250px]">
        <img
          src={subcategory.image}
          className="h-full w-full object-cover rounded-2xl"
          alt=""
        />
      </div>
      <div className="text-center my-2">
        <h1>{subcategory.title}</h1>
      </div>
    </MyCardBox>
  );
};

export default SubCategryCard;
