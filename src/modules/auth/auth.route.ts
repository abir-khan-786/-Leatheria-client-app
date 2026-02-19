import express from "express"
import { toNodeHandler } from "better-auth/node"
import { auth } from "../../lib/auth.js"

const authRoute = express.Router()

/**
 * Universal Fix: কোনো পাথ স্ট্রিং ছাড়াই সরাসরি ইউজ করা।
 * এটি GET, POST সব মেথড এবং সব সাব-পাথ (sign-in, get-session) হ্যান্ডেল করবে।
 */
authRoute.use((req, res) => {
  return toNodeHandler(auth)(req, res)
})

export { authRoute }
