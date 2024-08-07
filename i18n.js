import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "de", "hi"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  // Dynamically import the messages for the given locale
  const messages = await import(`./locales/${locale}.json`);

  return {
    messages: messages.default,
  };
});
