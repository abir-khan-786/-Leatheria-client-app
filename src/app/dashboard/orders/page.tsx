"use client"
import React, { useState } from "react"
import { ShoppingCart, Eye, MoreVertical, Filter, Download } from "lucide-react"
 
const OrdersPage = () => {
  const [orders, setOrders] = useState(dummyOrders)

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "DELIVERED":
        return "bg-green-100 text-green-700"
      case "SHIPPED":
        return "bg-blue-100 text-blue-700"
      case "PENDING":
        return "bg-yellow-100 text-yellow-700"
      case "CANCELLED":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <ShoppingCart className="text-amber-500" /> Order Management
          </h2>
          <p className="text-gray-500 text-sm">
            Track and manage your leather product sales.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-sm font-medium hover:bg-gray-50">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-700">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider font-semibold">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Items</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4 font-bold text-slate-700">
                    {order.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="font-semibold text-slate-800">
                        {order.customer.name}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {order.customer.email}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold ${getStatusStyle(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.items} pcs
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="font-bold text-slate-800">
                        ${order.total.toFixed(2)}
                      </p>
                      <p
                        className={`text-[10px] font-medium ${order.payment === "Paid" ? "text-green-600" : "text-amber-600"}`}
                      >
                        {order.payment}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        className="p-2 hover:bg-amber-50 text-amber-600 rounded-md transition-colors"
                        title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 text-gray-400 rounded-md transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrdersPage

export const dummyOrders = [
  {
    id: "ORD-7721",
    customer: { name: "Abir Khan", email: "abir@example.com" },
    items: 3,
    total: 1250.0,
    status: "DELIVERED",
    date: "2026-01-20",
    payment: "Paid",
  },
  {
    id: "ORD-8842",
    customer: { name: "Rahat Ahmed", email: "rahat@customer.com" },
    items: 1,
    total: 450.5,
    status: "SHIPPED",
    date: "2026-01-22",
    payment: "Pending",
  },
  {
    id: "ORD-9910",
    customer: { name: "Siam Hossain", email: "siam@test.com" },
    items: 2,
    total: 2100.0,
    status: "PENDING",
    date: "2026-01-24",
    payment: "Paid",
  },
  {
    id: "ORD-1025",
    customer: { name: "Karim Ullah", email: "karim@leatheria.com" },
    items: 5,
    total: 5400.0,
    status: "CANCELLED",
    date: "2026-01-24",
    payment: "Refunded",
  },
]