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
        <h1>Loading...</h1>
      ) : notifications.messages.length > 0 ? (
        <>
          {notifications.messages.map((notification) => (
            <div
              key={notification.timestamp} // Ensure unique keys for each notification
              className="p-4 border border-dashed rounded-md my-3"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-4 w-full">
                <NotificationsOutlined />
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <h1 data-aos="fade-up">{notification.notify}</h1>
                    <MyIconButton
                      onClick={() => deleteUserNotification(notification._id)}
                    >
                      <DeleteOutline fontSize="small" color="error" />
                    </MyIconButton>
                  </div>
                  <div className="flex justify-between">
                    <h1 data-aos="fade-up">
                      {dayjs(notification.timestamp).format("DD-MM-YYYY")}
                    </h1>
                    <h1 data-aos="fade-up">
                      {dayjs(notification.timestamp).format("HH:mm")}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
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
