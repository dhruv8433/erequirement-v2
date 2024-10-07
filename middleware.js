import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const isAuthenticated = (request) => {
  const token = request.cookies.get("user"); // Adjust the key based on your token storage method
  console.log("Access Token:", token); // Log the token for debugging
  return token; // Return true if authenticated, false otherwise
};

const intlMiddleware = createMiddleware({
  locales: ["en", "de", "hi"],
  defaultLocale: "en",
});

export function middleware(request) {
  const cookies = request.cookies;
  console.log("All cookies:", cookies);
  const token = cookies["user"] || null; // Accessing directly using the bracket notation
  console.log("Access Token:", token);

  console.log("Middleware executed on path:", request.nextUrl.pathname);

  const protectedRoutes = [
    "/en/profile",
    "/hi/profile",
    "/de/profile",
    "/en/cart",
    "/hi/cart",
    "/de/cart",
  ]; // Add your protected routes here
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  console.log("Is protected route:", isProtectedRoute);

  if (isProtectedRoute) {
    const authenticated = isAuthenticated(request);
    console.log("User authenticated:", authenticated);

    if (!authenticated) {
      console.log("Redirecting to login");
      // Redirect to login with a query parameter indicating the error
      return NextResponse.redirect(
        new URL("/?error=not_authenticated", request.url)
      ); // Adjust the URL based on your login route
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(de|en|hi)/:path*"], // Match all locales and specific paths
};
