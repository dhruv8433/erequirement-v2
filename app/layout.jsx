import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

// client side setup internationalization
export default async function RootLayout({ children, params }) {
  const locale = params?.locale || 'en';  // Default to 'en' if locale is not provided
  
  // Set the request locale to enable static rendering
  unstable_setRequestLocale(locale);
  
  const messages = await getMessages(locale);

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
