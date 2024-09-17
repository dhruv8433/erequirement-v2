"use client";

import SearchResults from "@/app/components/search/SearchResults";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { query } = useParams();
  return (
    <div>
      {/* searched */}
      <SearchResults query={query} />
    </div>
  );
};

export default page;
