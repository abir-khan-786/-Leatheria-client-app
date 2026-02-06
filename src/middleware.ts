import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const sessionToken =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__secure-better-auth.session_token")

  const { pathname } = request.nextUrl
  const isAuthPage =
    pathname.startsWith("/auth") || pathname.startsWith("/signup")
  const isProtectedRoute = pathname.startsWith("/dashboard")

  // ১. ইউজার লগইন না থাকলে অরিজিনাল ইউআরএল মনে রেখে রিডাইরেক্ট করুন
  if (isProtectedRoute && !sessionToken) {
    const url = new URL("/auth", request.url)
    url.searchParams.set("callbackUrl", pathname) // লগইন করার পর এখানে ফেরার জন্য
    return NextResponse.redirect(url)
  }

  // ২. ইউজার লগইন থাকলে রিডাইরেক্ট
  if (isAuthPage && sessionToken) {
    return NextResponse.redirect(new URL("/dashboard/profile", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth", "/signup"],
}
