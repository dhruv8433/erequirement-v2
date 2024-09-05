import { MyCardBox } from "@/app/custom/MyBox";
import { MyHeading, MyPrimaryText } from "@/app/custom/MyText";
import React from "react";

const MiniCartDateTimeInfo = ({ selectedDateTimeSlot }) => {
  return (
    <MyCardBox className="p-4 rounded-2xl mt-4">
      <MyHeading title={"Selected Date and time info"} className={'font-semibold'} />
      
      {selectedDateTimeSlot?.date && (
        <div className="mt-4 flex item-center gap-1">
          <MyPrimaryText title="Selected Date:" />
          <MyHeading
            title={selectedDateTimeSlot.date}
            className="text-orange-500"
          />
        </div>
      )}
      
      {selectedDateTimeSlot?.time && (
        <div className="mt-2 flex items-center gap-1">
          <MyPrimaryText title="Selected Time Slot:" />
          <MyHeading
            title={selectedDateTimeSlot.time}
            className="text-orange-500"
          />
        </div>
      )}
    </MyCardBox>
  );
};

export default MiniCartDateTimeInfo;
