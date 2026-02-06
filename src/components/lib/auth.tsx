import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL: "http://localhost:5000",
  // সরাসরি basePath ব্যবহার করুন
  basePath: "/api/v1/auth",
})
