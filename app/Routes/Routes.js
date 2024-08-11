import Link from "next/link";

import { routes } from "../config/config";
import { Icon } from "@mui/material";

const Routes = ({ isResponsive }) => {
  return (
    <>
      {routes.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          // Add hover effect on responsive nav items
          className={`flex items-center ${
            isResponsive && "hover:bg-gray-300 p-1 rounded-md"
          }`}
        >
          {isResponsive && <Icon className="h-auto w-auto">{link.icon}</Icon>}
          <h1 className="m-2">{link.name}</h1>
        </Link>
      ))}
    </>
  );
};

export default Routes;
