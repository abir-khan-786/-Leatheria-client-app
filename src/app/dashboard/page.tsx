"use client"
import React from "react"
import {
  DollarSign,
  ShoppingCart,
  Users,
  AlertTriangle,
  ArrowUpRight,
  Clock,
} from "lucide-react"

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      {/* 1. Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Revenue"
          value="$54,230"
          change="+12%"
          icon={<DollarSign />}
          color="text-green-600"
          bg="bg-green-100"
        />
        <StatCard
          label="Total Orders"
          value="1,450"
          change="+8%"
          icon={<ShoppingCart />}
          color="text-blue-600"
          bg="bg-blue-100"
        />
        <StatCard
          label="Active Users"
          value="892"
          change="+5%"
          icon={<Users />}
          color="text-purple-600"
          bg="bg-purple-100"
        />
        <StatCard
          label="Low Stock"
          value="12"
          change="Check"
          icon={<AlertTriangle />}
          color="text-red-600"
          bg="bg-red-100"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 2. Recent Orders Table (Takes 2/3 of space) */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Recent Transactions</h3>
            <button className="text-amber-600 text-sm font-semibold hover:underline">
              View All
            </button>
          </div>
          <div className="p-0">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-slate-700">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-md text-[10px] font-bold ${order.status === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Activity Feed (Takes 1/3 of space) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Clock size={18} className="text-amber-500" /> Quick Activity
          </h3>
          <div className="space-y-6">
            <ActivityItem
              text="New product added: 'Vintage Leather Bag'"
              time="2 mins ago"
            />
            <ActivityItem
              text="User Siam Hossain upgraded to Admin"
              time="1 hour ago"
            />
            <ActivityItem
              text="Order #ORD-9910 was delivered"
              time="3 hours ago"
            />
            <ActivityItem
              text="Stock updated for 'Slim Wallet'"
              time="Yesterday"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/* --- Helper Components --- */

const StatCard = ({ label, value, change, icon, color, bg }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
      <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
      <p className={`text-xs mt-2 flex items-center gap-1 ${color}`}>
        <ArrowUpRight size={14} /> {change}{" "}
        <span className="text-gray-400 font-normal">than last month</span>
      </p>
    </div>
    <div className={`p-4 rounded-lg ${bg} ${color}`}>{icon}</div>
  </div>
)

const ActivityItem = ({ text, time }: { text: string; time: string }) => (
  <div className="flex gap-4">
    <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
    <div>
      <p className="text-sm text-slate-700 leading-tight">{text}</p>
      <span className="text-[10px] text-gray-400 uppercase font-bold">
        {time}
      </span>
    </div>
  </div>
)

export default DashboardHome

export const dashboardStats = [
  {
    id: 1,
    label: "Total Revenue",
    value: "$54,230",
    change: "+12.5%",
    icon: "dollar",
  },
  {
    id: 2,
    label: "Total Orders",
    value: "1,450",
    change: "+8.2%",
    icon: "cart",
  },
  {
    id: 3,
    label: "Active Customers",
    value: "892",
    change: "+5.1%",
    icon: "users",
  },
  {
    id: 4,
    label: "Low Stock Items",
    value: "12",
    change: "Attention",
    icon: "alert",
  },
]

export const recentOrders = [
  {
    id: "#ORD-9910",
    customer: "Siam Hossain",
    product: "Leather Wallet",
    status: "Paid",
  },
  {
    id: "#ORD-9911",
    customer: "Abir Khan",
    product: "Premium Belt",
    status: "Pending",
  },
  {
    id: "#ORD-9912",
    customer: "Rahat Ahmed",
    product: "Travel Bag",
    status: "Paid",
  },
]
