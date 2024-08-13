import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

// client side setup internationalization
export default async function RootLayout({ children }) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
