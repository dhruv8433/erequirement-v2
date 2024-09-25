import { MyCardBox } from "@/app/custom/MyBox";
import React from "react";
import ProfileHeading from "./ProfileHeading";
import { useTranslations } from "next-intl";
import { useNotifications } from "@/app/hooks/useNotifications";
import NoNotification from "@/app/assets/notification.png";

const Notifications = () => {
  const t = useTranslations("profile");

  const { loading, notifications } = useNotifications();
  return (
    <MyCardBox className="p-5 rounded-xl">
      <ProfileHeading heading={t("notifications")} />

      {loading ? (
        <h1>loading...</h1>
      ) : notifications.length > 0 ? (
        notifications.map((response) => <h1>hi</h1>)
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
