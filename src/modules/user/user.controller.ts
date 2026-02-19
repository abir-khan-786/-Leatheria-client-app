import { Request, Response } from "express"
import { userService } from "./user.service.js"

const getAllUsers = async (req: Request, res: Response) => {
  const data = await userService.getAllUsers()
  res.status(200).send({
    message: "Users fetched successfully",
    data,
  })
}

const createUser = async (req: Request, res: Response) => {
  const userData = req.body
  const data = await userService.createUser(userData)
  res.status(201).send({
    message: "User created successfully",
    status: true,
    data,
  })
}
// userController.ts
const updateUserRole = async (req: Request, res: Response) => {
  try {
    // URL: /update-role/:email/:role
    const { email, role } = req.params as { email: string; role: string }
    if (!email || !role) {
      return res.status(400).json({
        success: false,
        message: "Email and Role are both required",
      })
    }

    // শুধুমাত্র ADMIN বা USER কি না তা নিশ্চিত করা
    const targetRole = role
    if (targetRole !== "ADMIN" && targetRole !== "CUSTOMER") {
      return res.status(400).json({
        success: false,
        message: "Invalid role. Use 'ADMIN' or 'CUSTOMER'",
      })
    }

    // সার্ভিস কল করা
    const result = await userService.updateUserRole(
      email,
      targetRole as "ADMIN" | "CUSTOMER",
    )

    res.status(200).json({
      success: true,
      message: `User role successfully updated to ${targetRole}`,
      data: result,
    })
  } catch (error: unknown) {
    let errorMessage = "Something went wrong"

    // টাইপস্ক্রিপ্ট এরর হ্যান্ডেলিং
    if (error instanceof Error) {
      errorMessage = error.message
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
    })
  }
}
export const userController = {
  getAllUsers,
  createUser,
  updateUserRole,
}
