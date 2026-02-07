import express from "express"
import { userController } from "./user.controller.js"

const userRoute = express.Router()

userRoute.get("/", userController.getAllUsers)
userRoute.post("/create", userController.createUser)
userRoute.patch("/update-role/:email/:role", userController.updateUserRole)
export { userRoute }
