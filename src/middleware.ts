import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { authClient } from "./components/lib/auth"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // সেশন কল করার সময় টাইপ ডিফাইন করে দিন
  const { data: session } = await authClient.getSession({
    fetchOptions: {
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    },
  }) as { data: { user: { role?: string } } | null }; // এখানে জোর করে টাইপ বলে দেওয়া হয়েছে

  const isLoggedIn = !!session;
  const userRole = session?.user?.role;

  const adminRoutes = [
    "/dashboard/users",
    "/dashboard/addProducts",
    "/dashboard/admin",
    "/dashboard/settings",
  ]

  // লগইন না থাকলে প্রোটেকশন
  if (!isLoggedIn && pathname.startsWith("/dashboard")) {
    const url = new URL("/auth", request.url)
    url.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(url)
  }

  if (isLoggedIn) {
    // লগইন থাকলে অ্যাথ পেজ ব্লক
    if (pathname.startsWith("/auth") || pathname.startsWith("/signup")) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    // এডমিন রুট চেক
    const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));
    if (isAdminRoute && userRole !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard/profile", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth", "/signup"],
}
