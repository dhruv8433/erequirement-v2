import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({ children, params }) {
  const locale = params?.locale || "en"; // Default fallback to 'en' locale
  console.log("Current Locale:", locale);

  let messages;
  try {
    messages = await getMessages(locale);
  } catch (error) {
    console.error("Error loading messages:", error);
    messages = await getMessages("en"); // Fallback to default messages
  }

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
