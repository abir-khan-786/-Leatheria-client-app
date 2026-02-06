"use client" // <-- এই লাইনটি যোগ করুন
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
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
} from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  // ডামি ইউজার রোল (পরবর্তীতে আপনার Auth থেকে আসবে)
  // dynamic page name
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)
  const pageTitle =
    segments.length > 0
      ? segments[segments.length - 1].charAt(0).toUpperCase() +
        segments[segments.length - 1].slice(1)
      : "Dashboard"

  const menuItems = [
    {
      name: "Home",
      icon: <Home size={20} />,
      path: "/",
    },
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Profile",
      icon: <User2 size={20} />,
      path: "/dashboard/profile",
    },
    {
      name: "ALl Users",
      icon: <User size={20} />,
      path: "/dashboard/users",
    },
    {
      name: "Add Products",
      icon: <PlusIcon size={20} />,
      path: "/dashboard/addProducts",
    },
    { name: "Orders", icon: <Package size={20} />, path: "/dashboard/orders" },

    {
      name: "Admin",
      icon: <SquareSquareIcon size={20} />,
      path: "/dashboard/admin",
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/settings",
    },
  ]

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
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

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="flex items-center gap-4 p-3 hover:bg-amber-500 hover:text-white rounded-lg transition-colors group"
            >
              <span className="text-gray-400 group-hover:text-white">
                {item.icon}
              </span>
              {isSidebarOpen && (
                <span className="font-medium">{item.name}</span>
              )}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-4 p-3 w-full text-red-400 hover:bg-red-900/20 rounded-lg transition-colors">
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 uppercase tracking-wider  ">
            {pageTitle}
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-800">Abir Khan</p>
              <p className="text-xs text-gray-500 capitalize"> Admin</p>
            </div>
            <UserCircle size={32} className="text-gray-400" />
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
