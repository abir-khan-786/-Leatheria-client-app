"use client"
import React, { useState } from "react"
import {
  ShieldCheck,
  ShieldAlert,
  UserPlus,
  Search,
  UserMinus,
} from "lucide-react"
 
const MakeAdminPage = () => {
  const [users, setUsers] = useState(adminDummyData)
  const [search, setSearch] = useState("")

  const toggleRole = (id: number) => {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          const newRole = user.role === "ADMIN" ? "CUSTOMER" : "ADMIN"
          return { ...user, role: newRole }
        }
        return user
      }),
    )
  }

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <ShieldCheck className="text-amber-500" /> Admin Permissions
          </h2>
          <p className="text-gray-500 text-sm">
            Assign or revoke administrative privileges for Leatheria staff.
          </p>
        </div>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search users..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none w-full md:w-64"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Users List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between hover:border-amber-200 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-full ${user.role === "ADMIN" ? "bg-amber-100 text-amber-600" : "bg-slate-100 text-slate-400"}`}
              >
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">{user.name}</h4>
                <p className="text-xs text-gray-500">{user.email}</p>
                <span
                  className={`text-[10px] font-bold uppercase mt-1 inline-block ${user.role === "ADMIN" ? "text-amber-600" : "text-slate-400"}`}
                >
                  Current Role: {user.role}
                </span>
              </div>
            </div>

            <button
              onClick={() => toggleRole(user.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                user.role === "ADMIN"
                  ? "bg-red-50 text-red-600 hover:bg-red-600 hover:text-white"
                  : "bg-green-50 text-green-600 hover:bg-green-600 hover:text-white"
              }`}
            >
              {user.role === "ADMIN" ? (
                <>
                  <UserMinus size={16} /> Demote
                </>
              ) : (
                <>
                  <UserPlus size={16} /> Make Admin
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-400 italic">
            No users found matching your search.
          </p>
        </div>
      )}
    </div>
  )
}

export default MakeAdminPage

export const adminDummyData = [
  {
    id: 1,
    name: "Abir Khan",
    email: "abir@leatheria.com",
    role: "ADMIN",
    joined: "2025-10-01",
  },
  {
    id: 2,
    name: "Rahat Ahmed",
    email: "rahat@customer.com",
    role: "CUSTOMER",
    joined: "2026-01-15",
  },
  {
    id: 3,
    name: "Siam Hossain",
    email: "siam@test.com",
    role: "CUSTOMER",
    joined: "2026-01-20",
  },
  {
    id: 4,
    name: "Zayan Malik",
    email: "zayan@staff.com",
    role: "ADMIN",
    joined: "2025-12-05",
  },
]