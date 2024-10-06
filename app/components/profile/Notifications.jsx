import dayjs from "dayjs";
import React from "react";
import { useTranslations } from "next-intl";
import ProfileHeading from "./ProfileHeading";
import { MyCardBox } from "@/app/custom/MyBox";
import NoNotification from "@/app/assets/notification.png";
import { DeleteOutline, NotificationsOutlined } from "@mui/icons-material";
import { useNotifications } from "@/app/hooks/useNotifications";
import { Pagination } from "@mui/material";
import MyIconButton from "@/app/custom/MyIconButton";
import Notification from "./Notification";
import { NotificationSkeleton } from "@/app/custom/CustomSkeleton";

const Notifications = () => {
  const t = useTranslations("profile");
  const {
    loading,
    notifications,
    setPage,
    deleteUserNotification,
    DeleteUserAllNotifications,
  } = useNotifications();

  return (
    <MyCardBox className="p-5 rounded-xl">
      <ProfileHeading
        heading={t("notifications")}
        actionTitle={"Delete All"}
        actionEvent={DeleteUserAllNotifications}
        isAction={notifications.messages.length > 0}
      />

      {loading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <NotificationSkeleton key={index} />
        ))
      ) : notifications.messages.length > 0 ? (
        <>
          {notifications.messages.map((notification) => (
            <Notification notification={notification} />
          ))}
          <div className="flex justify-center mt-2">
            <Pagination
              count={notifications.totalPages} // Use totalPages from the notifications state
              color="primary"
              onChange={(event, value) => setPage(value)} // Update the page on pagination change
              page={notifications.currentPage + 1} // Set the current active page
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center text-center items-center min-h-[550px]">
          <img
            src={NoNotification.src}
            className="h-48 w-48 flex"
            alt="No Notifications"
          />
          <h1>{t("no_notification")}</h1>
        </div>
      )}
    </MyCardBox>
  );
};

export default Notifications;
