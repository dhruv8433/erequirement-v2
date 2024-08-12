import React from "react";
import Link from "next/link";
import { Breadcrumbs, Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

const MyBreadcrumb = ({ breadcrumbs, activeIndex, title }) => {
  return (
    <div className="my-5">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <Breadcrumbs
        separator={<ChevronRight fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs.map((breadcrumb, index) => (
          <div key={index}>
            {index === activeIndex ? (
              <h1 className="font-bold">{breadcrumb.title}</h1>
            ) : (
              <Link href={breadcrumb.link}>
                <h1 className={"primary-text hover:underline"}>
                  {breadcrumb.title}
                </h1>
              </Link>
            )}
          </div>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default MyBreadcrumb;
