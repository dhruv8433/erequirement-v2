"use client";

import SearchResults from "@/app/components/search/SearchResults";
import { MyHeading, MyPrimaryText } from "@/app/custom/MyText";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { query } = useParams();
  return (
    <div>
      <div className="heading flex items-center gap-1 text-xl my-4">
        <MyPrimaryText title={`Search result for `} />
        <MyHeading title={query} className={"font-semibold"} />
      </div>

      {/* searched */}
      <SearchResults query={query}/>
    </div>
  );
};

export default page;
