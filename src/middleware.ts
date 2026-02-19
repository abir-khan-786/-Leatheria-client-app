import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { authClient } from "./components/lib/auth"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Get Session from Better Auth (Secure way)
  const { data: session } = await authClient.getSession({
    fetchOptions: {
      headers: {
        // Pass cookies to the session fetcher
        cookie: request.headers.get("cookie") || "",
      },
    },
  });

  const isLoggedIn = !!session;
  const userRole = session?.user?.role; // Role comes from DB, not a spoofable cookie

  const adminRoutes = [
    "/dashboard/addProducts",
    "/dashboard/admin",
    "/dashboard/settings",
  ]

  // Logic A: Not logged in -> Redirect to Auth
  if (!isLoggedIn && pathname.startsWith("/dashboard")) {
    const url = new URL("/auth", request.url)
    url.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(url)
  }

  // Logic B: Logged in -> Prevent access to Auth/Signup pages
  if (isLoggedIn && (pathname.startsWith("/auth") || pathname.startsWith("/signup"))) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Logic C: Admin Route Protection (Secure)
  const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));

  if (isAdminRoute && userRole !== "ADMIN") {
    console.log(`🚫 Access Denied: User role is ${userRole}`);
    return NextResponse.redirect(new URL("/dashboard/profile", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth", "/signup"],
}
