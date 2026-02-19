"use client"
import {
  LayoutDashboard,
  Settings,
  LogOut,
  Menu,
  X,
  UserCircle,
  Package,
  PlusIcon,
  Home,
  SquareSquareIcon,
  User,
  User2,
  Database,
  DollarSign,
} from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { authClient } from "@/components/lib/auth"
import axios from "axios"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  // ১. Better Auth থেকে সেশন ডেটা আনা
  const session = axios.get("http://localhost:4000/api/v1/user")
  console.log(session)

  // const user = session?.user
  // const isAdmin = user?.role === "ADMIN"

  // // ২. লোডিং স্টেট হ্যান্ডেল করা
  // if (isPending) {
  //   return (
  //     <div className="flex h-screen items-center justify-center">
  //       Loading...
  //     </div>
  //   )
  // }

  // ৩. মেনু লিস্ট (আগের মতোই)
  const menuData = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
      role: "ADMIN"
    },
    {
      name: "User Dashboard",
      icon: <Database size={20} />,
      path: "/userDashboard",
      role: "USER"
    },
    { name: "Profile", icon: <User2 size={20} />, path: "/dashboard/profile", role: "USER" },
    { name: "Orders", icon: <Package size={20} />, path: "/dashboard/orders", role: "USER" },
    { name: "Pyemnt", icon: <DollarSign size={20} />, path: "/dashboard/orders", role: "USER" },

    { name: "All Users", icon: <User size={20} />, path: "/dashboard/users", role: "ADMIN" },
    {
      name: "Add Products",
      icon: <PlusIcon size={20} />,
      path: "/dashboard/addProducts",
      role: "ADMIN"
    },
    {
      name: "Admin Panel",
      icon: <SquareSquareIcon size={20} />,
      path: "/dashboard/admin",
      role: "ADMIN"
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/settings",
      role: "ADMIN"
    },
  ]

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <aside
        className={`${isSidebarOpen ? "w-64" : "w-20"} bg-slate-900 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && (
            <h1 className="text-2xl font-bold text-amber-500">Leatheria</h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hover:bg-slate-800 p-1 rounded"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
          {menuData.map((item) => {
            if (item.role === "USER")
              return <Link
                key={item.name}
                href={item.path}
                className={`flex items-center gap-4 p-3 rounded-lg transition-colors group  `}
              >
                <span>{item.icon}</span>
                {isSidebarOpen && (
                  <span className="font-medium">{item.name}</span>
                )}
              </Link>
          })}
        </nav>

        {/* লগআউট বাটন */}
        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-4 p-3 w-full text-red-400 hover:bg-red-900/20 rounded-lg transition-colors">
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 uppercase tracking-wider">
            asdf
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-800">asdfsdaf</p>
              <p
                className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full inline-block  `}
              >
                Admin
              </p>
            </div>

            <UserCircle size={32} className="text-gray-400" />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
