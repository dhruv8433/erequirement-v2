import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react"

export default async function LocaleLayout({ children, params }) {
  const locale = params.locale;
  unstable_setRequestLocale(locale);

  try {
    const messages = await getMessages(locale); // Temporarily hardcode to test

    console.log("Messages for locale:", messages); // Log the fetched messages

    return (
      <html lang={locale}>
        <body>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    );
  } catch (error) {
    console.error("Error fetching messages:", error);
    return <div>Error loading messages</div>;
  }
}
