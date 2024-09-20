import { notFound } from "next/navigation";
import { getRequestConfig, unstable_setRequestLocale } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale)) notFound();

  // Set the locale for static rendering
  unstable_setRequestLocale(locale);

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
