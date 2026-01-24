"use client"
import React, { useState } from "react"
import { User, Store, Lock, Bell, Globe, Save, ShieldCheck } from "lucide-react"

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile")

  const tabs = [
    { id: "profile", name: "Account Profile", icon: <User size={18} /> },
    { id: "store", name: "Store Settings", icon: <Store size={18} /> },
    { id: "security", name: "Security", icon: <Lock size={18} /> },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
        <p className="text-gray-500 text-sm">
          Manage your account and shop preferences.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <aside className="w-full md:w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-amber-500 text-white shadow-md shadow-amber-200"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          {activeTab === "profile" && <ProfileSettings />}
          {activeTab === "store" && <StoreSettings />}
          {activeTab === "security" && <SecuritySettings />}

          <div className="mt-8 pt-6 border-t flex justify-end">
            <button className="flex items-center gap-2 bg-slate-800 text-white px-6 py-2.5 rounded-lg hover:bg-slate-700 transition-colors font-semibold">
              <Save size={18} /> Save Changes
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

/* --- Sub-Components --- */

const ProfileSettings = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-bold border-b pb-2">Profile Information</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          defaultValue="Abir Khan"
          className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          defaultValue="admin@leatheria.com"
          className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>
    </div>
  </div>
)

const StoreSettings = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-bold border-b pb-2">Store Details</h3>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Store Name
        </label>
        <input
          type="text"
          defaultValue="Leatheria Premium Shop"
          className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Currency
        </label>
        <select className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-amber-500">
          <option>USD ($)</option>
          <option>BDT (৳)</option>
          <option>EUR (€)</option>
        </select>
      </div>
    </div>
  </div>
)

const SecuritySettings = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-bold border-b pb-2">Security & Password</h3>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Current Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          New Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>
      <div className="flex items-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-lg text-sm">
        <ShieldCheck size={18} />
        Two-factor authentication is currently enabled.
      </div>
    </div>
  </div>
)

export default SettingsPage
