import React from "react";
import { useTranslations } from "next-intl";
import ProfileHeading from "./ProfileHeading";
import { MyCardBox } from "@/app/custom/MyBox";
import { MyButton } from "@/app/custom/MyButton";
import DeleteAccountImg from "@/app/assets/delete.png";
import { useUserAction } from "@/app/hooks/useUserAction";

const DeleteAccount = () => {
  const t = useTranslations("profile");
  const { DeleteUserAccount } = useUserAction();
  return (
    <MyCardBox className="p-5 rounded-2xl">
      <ProfileHeading heading={t("delete_account")} />
      <div className="text-center flex flex-col justify-center items-center min-h-[600px]">
        <img
          src={DeleteAccountImg.src}
          alt=""
          srcset=""
          className="h-48 w-48"
        />
        <h1>{t("delete_msg")}</h1>
        <MyButton
          className={"bg-red-500 px-3 py-1 mt-5"}
          title={t("delete_account")}
          onClickFunction={() => DeleteUserAccount()}
        />
      </div>
    </MyCardBox>
  );
};

export default DeleteAccount;
