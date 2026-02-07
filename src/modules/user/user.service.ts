import { User } from "@prisma/client"
import { prisma } from "../../lib/prisma.js"

const getAllUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}
const createUser = async (data: User) => {
  // Implementation for creating a user in the database
  const { name, email, password } = data

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  })
  return user
}
// userService.ts
const updateUserRole = async (email: string, role: "ADMIN" | "CUSTOMER") => {
  console.log(email, role)
  // ডাটাবেসে রোল আপডেট করা
  const updatedUser = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      role: role,
    },
  })

  return updatedUser
}

// ব্যবহার করার নিয়ম:
// await updateUserRole("example@mail.com", "ADMIN"); // এডমিন বানাতে
// await updateUserRole("example@mail.com", "USER");  // ইউজার বানাতে
export const userService = {
  createUser,
  getAllUsers,
  updateUserRole,
}
