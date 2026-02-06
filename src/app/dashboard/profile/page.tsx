"use client"

import { authClient } from "@/components/lib/auth"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession()
  const router = useRouter()

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-xl font-semibold text-gray-700">
          আপনি লগইন করা নেই!
        </p>
        <button
          onClick={() => router.push("/login")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          লগইন পেজে যান
        </button>
      </div>
    )
  }

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth")
        },
      },
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Cover Section */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

        {/* Profile Info Section */}
        <div className="relative px-6 pb-8">
          <div className="relative -top-12 flex items-end gap-4">
            <div className="h-24 w-24 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
              {session.user.image ? (
                <img
                  src={session.user.image}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-3xl font-bold text-gray-400">
                  {session.user.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="pb-2">
              <h1 className="text-2xl font-bold text-gray-900">
                {session.user.name}
              </h1>
              <p className="text-sm text-gray-500">{session.user.email}</p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-xs text-gray-400 uppercase font-semibold">
                User ID
              </p>
              <p className="text-sm font-mono text-gray-700">
                {session.user.id}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-xs text-gray-400 uppercase font-semibold">
                Joined At
              </p>
              <p className="text-sm text-gray-700">
                {new Date(session.user.createdAt).toLocaleDateString("bn-BD")}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-3">
            <button className="flex-1 bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-black transition">
              প্রোফাইল এডিট করুন
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-2.5 border border-red-200 text-red-600 rounded-lg font-medium hover:bg-red-50 transition"
            >
              লগআউট
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-10 text-center text-gray-400 text-sm">
        Leatheria API &copy; 2026 - All Rights Reserved
      </footer>
    </div>
  )
}
