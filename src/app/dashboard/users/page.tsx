"use client"
import { useEffect, useState } from "react"
import { Trash2, Loader2 } from "lucide-react"
import axios from "axios"
import { IUser } from "@/components/utils/types/users"
import { authClient } from "@/components/lib/auth"
import toast from "react-hot-toast"

const AllUsers = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/user")
      setUsers(response.data.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleToggleRole = async (user: any) => {
    const { email, role } = user

    // চেক করুন: যদি ADMIN থাকে তবে নতুন রোল হবে USER, আর না থাকলে হবে ADMIN
    const newRole = role === "ADMIN" ? "CUSTOMER" : "ADMIN"
    const actionText = newRole === "ADMIN" ? "ADMIN" : "CUSTOMER"

    if (!window.confirm(`Are you sure you want to ${actionText} for ${email}?`))
      return

    setLoading(true)
    try {
      const response = await axios.patch(
        // ডাইনামিক ইউআরএল: এখানে ইমেইল এবং নতুন রোল দুইটাই যাচ্ছে
        `http://localhost:5000/api/v1/user/update-role/${encodeURIComponent(email)}/${newRole}`,
      )

      if (response.data.success) {
        toast.success("Always at the bottom", {
          position: "bottom-center",
        })

        // লোকাল স্টেট আপডেট করুন যাতে রিলোড ছাড়াই বাটন চেঞ্জ হয়
        setUsers((prev: any[]) =>
          prev.map((u) => (u.email === email ? { ...u, role: newRole } : u)),
        )
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Role update failed!")
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loader2 className="animate-spin mx-auto mt-20" />

  return (
    <div className="bg-white rounded-lg shadow border">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-4">User</th>
            <th className="p-4">Role</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-4">
                <p className="font-bold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 rounded text-xs font-bold ${user.role === "ADMIN" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}
                >
                  {user.role}
                </span>
              </td>
              <td className="p-4 text-right space-x-3">
                {/* Toggle Admin Button */}
                <button
                  onClick={() => handleToggleRole(user)}
                  className={`p-2 rounded-md ${user.role === "ADMIN" ? "text-red-500 hover:bg-red-50" : "text-green-600 hover:bg-green-50"}`}
                  title={user.role === "ADMIN" ? "Remove Admin" : "Make Admin"}
                >
                  {user.role === "ADMIN" ? "Make Customer" : "Make Admin"}
                </button>

                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllUsers
