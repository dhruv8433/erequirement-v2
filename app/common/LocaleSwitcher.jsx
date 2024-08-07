"use client";

import React from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`);
  };
  return (
    <div className="border-2 rounded px-2">
      <p className="sr-only">Change Language</p>
      <select
        defaultValue={localeActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        name=""
        id=""
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="de">Germen</option>
      </select>
    </div>
  );
}
