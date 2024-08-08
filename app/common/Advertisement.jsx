import React from "react";

const Advertisement = ({ ads }) => {
  return (
    <div className="h-[500px]">
      <img
        src={ads.image}
        height={"100%"}
        className="object-cover aspect-video h-full w-full "
        width={"100%"}
        alt=""
      />
      ;
    </div>
  );
};

export default Advertisement;
