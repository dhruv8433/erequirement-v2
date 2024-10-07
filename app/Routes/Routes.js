"use client";
import Link from "next/link";
import { Icon } from "@mui/material";
import { useLocale } from "next-intl";
import { routes } from "../config/config";
import { usePathname } from "next/navigation";

const Routes = ({ isResponsive, isFooter }) => {
  const locale = useLocale();
  const pathname = usePathname();

  const hasLocaleInPath = new RegExp(`^/${locale}/${locale}`).test(pathname);

  return (
    <>
      {routes.map((link) => {
        const isActive =
          pathname ===
          (hasLocaleInPath ? `${link.url}` : `/${locale}/${link.url}`);

        return (
          <Link
            key={link.id}
            href={hasLocaleInPath ? `${link.url}` : `/${locale}/${link.url}`}
            className={`flex items-center ${
              isResponsive && "hover:bg-gray-300 p-1 rounded-md"
            } ${isFooter && "hover:text-orange-500 hover:underline"}`}
          >
            {isResponsive && <Icon className="h-auto w-auto">{link.icon}</Icon>}
            <h1 className={`m-2 ${isActive ? "text-orange-500" : ""}`}>
              {link.name}
            </h1>
          </Link>
        );
      })}
    </>
  );
};

export default Routes;
