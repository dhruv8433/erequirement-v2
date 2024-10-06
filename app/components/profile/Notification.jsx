import MyIconButton from "@/app/custom/MyIconButton";
import { DeleteOutline, NotificationsOutlined } from "@mui/icons-material";
import dayjs from "dayjs";
import React from "react";

const Notification = ({ notification }) => {
  return (
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
  );
};

export default Notification;
