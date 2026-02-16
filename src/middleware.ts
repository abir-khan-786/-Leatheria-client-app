import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ১. সেশন টোকেন বের করা (Better Auth ডিফল্ট কুকি নেম চেক করুন)
  const sessionToken =
    request.cookies.get("better-auth.session_token")?.value ||
    request.cookies.get("__secure-better-auth.session_token")?.value

  // ২. রোল বের করা (নিশ্চিত করুন লগইনের সময় আপনি এই কুকি সেট করছেন)
  const userRole = request.cookies.get("role")?.value

  // ৩. এডমিন রুটের তালিকা
  const adminRoutes = [
    "/dashboard/users",
    "/dashboard/addProducts",
    "/dashboard/admin",
    "/dashboard/settings",
  ]

  // ৪. প্রোটেকশন লজিক

  // ক. লগইন নেই কিন্তু ড্যাশবোর্ডে যাওয়ার চেষ্টা করছে
  if (!sessionToken && pathname.startsWith("/dashboard")) {
    const url = new URL("/auth", request.url)
    url.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(url)
  }

  // খ. লগইন আছে এমন ইউজারের জন্য লজিক
  if (sessionToken) {
    // লগইন থাকলে /auth বা /signup এ যেতে দিবে না
    if (pathname.startsWith("/auth") || pathname.startsWith("/signup")) {
      return NextResponse.redirect(new URL("/dashboard", request.url)) // সরাসরি ড্যাশবোর্ডে
    }

    // গ. এডমিন রুট প্রোটেকশন
    const isTryingToAccessAdminRoute = adminRoutes.some((route) =>
      pathname.startsWith(route)
    )

    if (isTryingToAccessAdminRoute && userRole !== "ADMIN") {
      console.log(`🚫 Access Denied for ${userRole}: Redirecting to Profile`)
      // এডমিন না হলে তাকে প্রোফাইল বা জেনারেল ড্যাশবোর্ডে পাঠিয়ে দিন
      return NextResponse.redirect(new URL("/dashboard/profile", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth", "/signup"],
}
