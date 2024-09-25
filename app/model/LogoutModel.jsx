import React from "react";
import { useTranslations } from "next-intl";
import ProfileHeading from "../components/profile/ProfileHeading";
import { MyBorderdButton, MyPrimaryButton } from "../custom/MyButton";
import { useUserAction } from "../hooks/useUserAction";

const LogoutModel = ({ setLogoutModel }) => {
  const t = useTranslations("profile");
  const { UserLogout } = useUserAction();
  return (
    <div>
      <ProfileHeading heading={t("logout_title")} />
      <h1 className="my-2 font-semibold">{t("logout_msg")}</h1>
      <h1 className="my-2">{t("logout_msg_detailed")}</h1>

      {/* action buttons */}
      <div className="flex justify-end gap-2 my-5">
        <MyBorderdButton
          title={t("logout")}
          className={"px-2 py-1 rounded-md"}
          onClickFunction={() => UserLogout()}
        />
        <MyPrimaryButton
          title={t("stay")}
          className={"px-2 py-1 rounded-md"}
          onClickFunction={() => setLogoutModel(false)}
        />
      </div>
    </div>
  );
};

export default LogoutModel;
