import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Supported locales
  locales: ["en", "de", "hi"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(hi|en|de)/:path*"],
};
