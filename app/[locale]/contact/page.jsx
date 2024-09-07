import React from "react";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import Contact from "@/app/components/contact/Contact";

const page = () => {
  return (
    <div>
      <MyBreadcrumb
        title={"Contact Us"}
        breadcrumbs={[
          { title: "Home", link: "/" },
          { title: "Contact", link: "" },
        ]}
      />
      <Contact />
    </div>
  );
};

export default page;
