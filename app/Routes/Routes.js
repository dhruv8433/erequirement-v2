import Link from "next/link";

import { routes } from "../config/config";

const Rotues = () => {
  return (
    <>
      {routes.map((link) => (
        <Link key={link.id} href={link.url}>
          <h1>{link.name}</h1>
        </Link>
      ))}
    </>
  );
};

export default Rotues;
