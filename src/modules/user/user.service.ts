import { User } from "@prisma/client"
import { prisma } from "../../lib/prisma"

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
const makeAdmin = async (email: string) => {
  const updatedUser = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      role: "ADMIN", // এখানে রোল আপডেট হচ্ছে
    },
  })

  return updatedUser
}

export const userService = {
  createUser,
  getAllUsers,
  makeAdmin,
}
