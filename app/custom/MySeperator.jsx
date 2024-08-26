import React from "react";

const MySeperator = ({ text }) => {
  return (
    <div className="flex items-center w-full">
      <hr className="flex-grow border-t border-dashed border-gray-400" />
      <span className="mx-2 font-semibold">{text}</span>
      <hr className="flex-grow border-t border-dashed border-gray-400" />
    </div>
  );
};

export default MySeperator;
