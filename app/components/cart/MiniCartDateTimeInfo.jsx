import React from "react";
import { useTranslations } from "next-intl";
import { MyCardBox } from "@/app/custom/MyBox";
import { MyHeading, MyPrimaryText } from "@/app/custom/MyText";

const MiniCartDateTimeInfo = ({ selectedDateTimeSlot }) => {
  const t = useTranslations("cart");

  return (
    <MyCardBox className="p-4 rounded-2xl mt-4">
      <MyHeading title={t("date_time_info")} className={"font-semibold"} />

      {selectedDateTimeSlot?.date && (
        <div className="mt-4 flex item-center gap-1">
          <MyPrimaryText title={t("selected_date")} />
          <MyHeading
            title={selectedDateTimeSlot.date}
            className="text-orange-500"
          />
        </div>
      )}

      {selectedDateTimeSlot?.time && (
        <div className="mt-2 flex items-center gap-1">
          <MyPrimaryText title={t("selected_time")} />
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
