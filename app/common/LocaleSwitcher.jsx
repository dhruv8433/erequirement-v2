"use client";

import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const supportedLocales = ["en", "hi", "de"];

export default function LocaleSwitcher() {
  const router = useRouter();
  const localeActive = useLocale();
  const [locale, setLocale] = useState(localeActive);

  // Load the locale from localStorage or fall back to active locale
  useEffect(() => {
    const storedLocale = localStorage.getItem("locale");
    if (storedLocale && supportedLocales.includes(storedLocale)) {
      setLocale(storedLocale);
      if (storedLocale !== localeActive) {
        router.replace(`/${storedLocale}`, undefined, { scroll: false });
      }
    } else {
      setLocale(localeActive);
    }
  }, [localeActive, router]);

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;
    console.log("Changing locale to:", nextLocale);

    localStorage.setItem("locale", nextLocale);
    setLocale(nextLocale); // This should trigger a re-render

    // Replace the URL to only include the selected locale
    router.replace(`/${nextLocale}`, undefined, { scroll: false });

    // Refresh to load new messages
    router.refresh();
  };

  return (
    <div className="border-2 rounded px-2">
      <p className="sr-only">Change Language</p>
      <select
        value={locale} // Bind to local state
        className="py-2 w-full bg-transparent"
        onChange={onSelectChange}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="de">German</option>
      </select>
    </div>
  );
}
