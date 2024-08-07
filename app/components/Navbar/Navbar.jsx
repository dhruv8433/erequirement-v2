import React from "react";
import Link from "next/link";
import Routes from "@/app/Routes/Routes";
import MyContainer from "@/app/common/MyContainer";

const Navbar = () => {
  return (
    <div>
      <div className="nav bg-gray-200 py-6">
        {/* reusable component */}
        <MyContainer
          maxWidth="xl"
          className="flex justify-between items-center"
        >
          <div className="logo text-3xl">
            <h1 className="my-text text-3xl font-bold duration-300">
              ERequirement
            </h1>
          </div>
          <div className="links flex gap-4">
            <Routes />
          </div>
          <div className="user">
            <Link href="/login">
              <h1>Login</h1>
            </Link>
          </div>
        </MyContainer>
      </div>
    </div>
  );
};

export default Navbar;
