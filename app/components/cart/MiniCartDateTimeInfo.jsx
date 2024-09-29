import React from "react";
import { useTranslations } from "next-intl";
import { MyCardBox } from "@/app/custom/MyBox";
import { MyHeading, MyPrimaryText } from "@/app/custom/MyText";

const MiniCartDateTimeInfo = ({ selectedDateTimeSlot }) => {
  const t = useTranslations("cart");

  return (
    <MyCardBox className="p-4 rounded-2xl mt-4" data-aos="fade-up">
      <MyHeading title={t("date_time_info")} className={"font-semibold"} data-aos="fade-up" />

      {selectedDateTimeSlot?.date && (
        <div className="mt-4 flex item-center gap-1" data-aos="fade-up">
          <MyPrimaryText title={t("selected_date")} data-aos="fade-up" />
          <MyHeading
            title={selectedDateTimeSlot.date}
            className="text-orange-500"
            data-aos="fade-up"
          />
        </div>
      )}

      {selectedDateTimeSlot?.time && (
        <div className="mt-2 flex items-center gap-1" data-aos="fade-up">
          <MyPrimaryText title={t("selected_time")} data-aos="fade-up" />
          <MyHeading
            title={selectedDateTimeSlot.time}
            className="text-orange-500"
            data-aos="fade-up"
          />
        </div>
      )}
    </MyCardBox>
  );
};

export default MiniCartDateTimeInfo;
