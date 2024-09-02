"use client";

import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const router = useRouter();
  const localeActive = useLocale();
  const [locale, setLocale] = useState(localeActive);

  useEffect(() => {
    setLocale(localeActive); // Sync state with the active locale
  }, [localeActive]);

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    setLocale(nextLocale);
    router.replace(`/${nextLocale}`, undefined, { scroll: false });
  };

  return (
    <div className="border-2 rounded px-2">
      <p className="sr-only">Change Language</p>
      <select
        value={locale}
        className="py-2 w-full bg-transparent"
        onChange={onSelectChange}
        name=""
        id=""
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="de">German</option>
      </select>
    </div>
  );
}
