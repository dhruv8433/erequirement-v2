import dayjs from "dayjs";
import React from "react";
import { useTranslations } from "next-intl";
import ProfileHeading from "./ProfileHeading";
import { MyCardBox } from "@/app/custom/MyBox";
import NoNotification from "@/app/assets/notification.png";
import { NotificationsOutlined } from "@mui/icons-material";
import { useNotifications } from "@/app/hooks/useNotifications";

const Notifications = () => {
  const t = useTranslations("profile");

  const { loading, notifications } = useNotifications();
  return (
    <MyCardBox className="p-5 rounded-xl">
      <ProfileHeading heading={t("notifications")} />

      {loading ? (
        <h1>loading...</h1>
      ) : notifications.length > 0 ? (
        notifications.map((notification) => (
          <div className="p-4 border border-dashed rounded-md my-3" data-aos="fade-up">
            <div className="flex items-center gap-4 w-full">
              <NotificationsOutlined />
              <div className="w-full">
                <h1 data-aos="fade-up">{notification.notify}</h1>
                <div className="flex justify-between">
                  <h1 data-aos="fade-up">{dayjs(notification.timestamp).format("DD-MM-YYYY")}</h1>
                  <h1 data-aos="fade-up">{dayjs(notification.timestamp).format("HH:mm")}</h1>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col justify-center text-center items-center min-h-[550px]">
          <img src={NoNotification.src} className="h-48 w-48 flex" alt="" />
          <h1>{t("no_notification")}</h1>
        </div>
      )}
    </MyCardBox>
  );
};

export default Notifications;
