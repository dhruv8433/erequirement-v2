import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

export default async function RootLayout({ children, params }) {
  const locale = (await params?.locale) || "en";
  console.log("Current Locale:", locale);

  let messages;
  try {
    messages = await getMessages(locale);
    unstable_setRequestLocale(locale);
  } catch (error) {
    console.error("Error loading messages:", error);
    messages = await getMessages("en"); // Fallback to default messages
  }

  console.log("messages", messages);
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
