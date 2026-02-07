import { NextFunction, Request, Response } from "express"
import { auth } from "../lib/auth.js"
import { fromNodeHeaders } from "better-auth/node"

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  })

  if (!session) {
    return res.status(401).json({ success: false, message: "Unauthorized" })
  }

  req.user = session.user
  next()
}

// ৩. শুধুমাত্র এডমিনের জন্য আলাদা মিডলওয়্যার (isAdmin)
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore (যদি টাইপ এরর দেয়)
  if (req.user?.role !== "ADMIN") {
    return res.status(403).json({
      success: false,
      message: "Forbidden: You do not have admin access",
    })
  }
  next()
}
